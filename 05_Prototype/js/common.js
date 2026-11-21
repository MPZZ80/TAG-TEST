/*
 * Script: common, loaded by every screen after the data files.
 * Shows: the shared parts of SPEC-01 (Architecture): the configurator (<scenario-switch>) and the app bar with navigation,
 *   and the helpers the web components in ../components/ use (Proto). Loaded before the components.
 */
(function () {
  const T = DATA.ui_text;
  const params = new URLSearchParams(location.search);
  // What the prototype shows: from the address if the configurator set it, otherwise from config.js.
  const scenarioKey = DATA.scenarios.list[params.get("scenario")] ? params.get("scenario") : DATA.config.scenario;
  const at = params.get("at") || DATA.config.at;
  const travelDay = (params.get("day") || DATA.config.day) !== "off";
  if (!travelDay) Object.assign(DATA.clock, DATA.clock.off_day);
  // On a day with no travel the next trip has no live facts yet: its runs show as planned, from the on-time data.
  const dataKey = travelDay ? scenarioKey : "on_time";
  // The scenario, with the hour of the mock clock where the configurator puts the commuter.
  const base = DATA.scenarios.list[scenarioKey];
  const scenario = Object.assign({}, base, { now: (travelDay && base.times && base.times[at]) || base.now });
  const built = DATA.screens.map(function (s) { return s.file; });

  // Fill {name} placeholders of an interface text.
  function fill(text, values) {
    return String(text).replace(/\{(\w+)\}/g, function (m, k) { return values && k in values ? values[k] : m; });
  }

  function el(tag, cls, text) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  // The address of another screen, keeping what the configurator set and the chosen alternative.
  function href(file, extra) {
    const q = new URLSearchParams(extra || {});
    q.set("scenario", scenarioKey);
    ["at", "day"].forEach(function (k) { if (params.get(k)) q.set(k, params.get(k)); });
    if (params.get("choice") && !q.has("choice") && !(extra && extra.nochoice)) q.set("choice", params.get("choice"));
    q.delete("nochoice");
    return file + "?" + q.toString();
  }

  // A link to another screen; a screen not built yet is plain text.
  function link(file, label, extra) {
    if (built.indexOf(file) === -1) return el("span", "not-built", label);
    const a = el("a", "", label);
    a.href = href(file, extra);
    return a;
  }

  function stateClass(state) { return "state state-" + String(state).replace(/\s+/g, "-"); }

  // The configurator, in a bar of its own at the top, then the app bar: product, mock clock, navigation
  // (SPEC-01, Information architecture).
  function shell() {
    const s = scenario;
    const bar = el("header", "app-bar");
    const left = el("div");
    left.appendChild(link("index.html", T.common.product));
    left.appendChild(el("p", "meta", fill(T.common.clock, { weekday: DATA.clock.weekday, date: DATA.clock.date, now: s.now })));
    bar.appendChild(left);
    const nav = el("nav");
    nav.setAttribute("aria-label", T.common.product);
    const ul = el("ul");
    T.nav.forEach(function (n) { const li = el("li"); li.appendChild(link(n.file, n.label)); ul.appendChild(li); });
    nav.appendChild(ul);
    bar.appendChild(nav);
    document.body.insertBefore(bar, document.body.firstChild);
    document.body.insertBefore(document.createElement("scenario-switch"), bar);
  }

  // The state of a run in the current scenario.
  function runState(id) {
    const r = DATA.runs[id];
    if (!r) return null;
    const s = Object.assign({ id: id, run: r }, r.by_scenario[dataKey]);
    return travelDay ? s : Object.assign(s, { state: "planned", facts: [], position: null, reason: null, planned: true });
  }

  // The facts of a run grouped by label, keeping only the labels on which two sources give different values.
  function disagreeing(facts) {
    const byLabel = {};
    facts.forEach(function (f) { (byLabel[f.label] = byLabel[f.label] || []).push(f); });
    return Object.keys(byLabel).map(function (k) { return byLabel[k]; }).filter(function (g) {
      return g.length > 1 && new Set(g.map(function (f) { return f.value; })).size > 1;
    });
  }

  // The commuter's trips (SPEC-17) and the one followed today.
  function trip(id) { return DATA.profile.trips.find(function (t) { return t.id === id; }); }
  function followedTrip() { return DATA.profile.trips.find(function (t) { return t.monitored; }) || DATA.profile.trips[0]; }

  // An alternative the commuter chose for a leg (SPEC-02): ?choice=RUN:ALT, kept from page to page.
  function choice() {
    const c = (params.get("choice") || "").split(":");
    const r = DATA.runs[c[0]];
    const alt = r && r.alternatives ? r.alternatives.find(function (a) { return a.id === c[1]; }) : null;
    return alt ? { run: c[0], alt: alt } : null;
  }

  // The trip as it is today: with a chosen alternative, the legs from the replaced one to the door come from it.
  function effectiveTrip(t, ch) {
    ch = ch === undefined ? choice() : ch;
    const i = ch ? t.legs.findIndex(function (l) { return l.run === ch.run; }) : -1;
    if (i < 0) return Object.assign({}, t, { chosen: null });
    const after = ch.alt.legs_after.map(function (l) { return Object.assign({ chosen: true }, l); });
    return Object.assign({}, t, { legs: t.legs.slice(0, i).concat(after), chosen: ch });
  }

  // The state of each leg of a trip (SPEC-01, States), from where the configurator puts the commuter: the leg they
  // are on is in progress, the legs before it completed, the legs after it to do; before the trip, all to do.
  function legStates(legs) {
    if (!travelDay || at === "before") return legs.map(function () { return "todo"; });
    const i = at === "after" ? legs.length : parseInt(at.split("-")[1], 10) - 1;
    return legs.map(function (l, n) { return n < i ? "done" : n === i ? "active" : "todo"; });
  }

  // The state of the trip of the day (SPEC-01, States; SPEC-04 rule 9): it moves with the commuter along the legs.
  function tripState() {
    if (!travelDay) return "planned";
    if (at === "after") return "completed";
    if (scenario.trip_state === "broken") return "broken";
    return at === "before" ? scenario.trip_state : "under way";
  }

  // Where the commuter is on the leg in progress: its start (the position is used with consent, SPEC-01).
  function passenger(leg) {
    const p = (leg.route && leg.route[0]) || (DATA.runs[leg.run] && DATA.runs[leg.run].stops[0]);
    return p ? { at: leg.from, lat: p.lat, lon: p.lon } : null;
  }

  // The next travel day after a day with no travel: its weekday, date and how many days away.
  function nextTravelDay() {
    const wd = T.weekdays, days = DATA.profile.days, d = new Date(DATA.clock.iso + "T12:00:00");
    for (let n = 1; n <= 7; n++) {
      const next = new Date(d.getTime() + n * 86400000), name = wd[(next.getDay() + 6) % 7];
      if (days.indexOf(name) !== -1) return { weekday: name, date: next.toLocaleDateString("en-GB", { day: "numeric", month: "short" }), n: n };
    }
    return null;
  }

  // Whether the ticket held is valid on a way: valid, another ticket needed, or no ticket needed (ticket_valid null).
  function ticketLine(a) {
    const R = T.run;
    if (a.ticket_valid === null) return { cls: "muted", text: R.alt_no_ticket + " · " + a.cost };
    return { cls: a.ticket_valid ? "state-on-time" : "muted", text: (a.ticket_valid ? R.alt_ticket_valid : R.alt_ticket_not_valid) + " · " + a.cost };
  }

  function doorName(id) { const d = DATA.profile.doors.find(function (x) { return x.id === id; }); return d ? d.name : id; }

  window.Proto = { T: T, params: params, scenarioKey: scenarioKey, scenario: scenario,
    dataKey: dataKey, at: at, travelDay: travelDay, tripState: tripState, passenger: passenger, nextTravelDay: nextTravelDay,
    fill: fill, el: el, link: link, href: href, ticketLine: ticketLine, runState: runState, stateClass: stateClass, shell: shell,
    disagreeing: disagreeing, trip: trip, followedTrip: followedTrip,
    choice: choice, effectiveTrip: effectiveTrip, doorName: doorName, legStates: legStates };
})();
