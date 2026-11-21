/*
 * Script: common, loaded by every screen after the data files.
 * Shows: the shared parts of SPEC-01 (Architecture): the app bar with navigation and <scenario-switch>,
 *   and the helpers the web components in ../components/ use (Proto). Loaded before the components.
 */
(function () {
  const T = DATA.ui_text;
  const params = new URLSearchParams(location.search);
  const scenarioKey = DATA.scenarios.list[params.get("scenario")] ? params.get("scenario") : DATA.scenarios.default;
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

  // A link to another screen keeps the scenario; a screen not built yet is plain text.
  function link(file, label, extra) {
    if (built.indexOf(file) === -1) return el("span", "not-built", label);
    const q = new URLSearchParams(extra || {});
    q.set("scenario", scenarioKey);
    if (params.get("choice") && !q.has("choice") && !(extra && extra.nochoice)) q.set("choice", params.get("choice"));
    q.delete("nochoice");
    const a = el("a", "", label);
    a.href = file + "?" + q.toString();
    return a;
  }

  function stateClass(state) { return "state state-" + String(state).replace(/\s+/g, "-"); }

  // App bar: product, mock clock, navigation (SPEC-01, Information architecture), scenario selector.
  function shell() {
    const s = DATA.scenarios.list[scenarioKey];
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
    bar.appendChild(document.createElement("scenario-switch"));
    document.body.insertBefore(bar, document.body.firstChild);
  }

  // The state of a run in the current scenario.
  function runState(id) {
    const r = DATA.runs[id];
    return r ? Object.assign({ id: id, run: r }, r.by_scenario[scenarioKey]) : null;
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

  // The state of each leg of a trip (SPEC-01, States): the leg that starts where the commuter is is in progress,
  // the legs before it completed, the legs after it to do; before the trip begins, all to do.
  function legStates(legs) {
    const p = DATA.scenarios.list[scenarioKey].passenger;
    if (!p || !p.started) return legs.map(function () { return "todo"; });
    let i = legs.findIndex(function (l) { return l.from === p.at; });
    if (i < 0) i = legs.findIndex(function (l) { return l.to === p.at; }) + 1;
    return legs.map(function (l, n) { return n < i ? "done" : n === i ? "active" : "todo"; });
  }

  function doorName(id) { const d = DATA.profile.doors.find(function (x) { return x.id === id; }); return d ? d.name : id; }

  window.Proto = { T: T, params: params, scenarioKey: scenarioKey, scenario: DATA.scenarios.list[scenarioKey],
    fill: fill, el: el, link: link, runState: runState, stateClass: stateClass, shell: shell,
    disagreeing: disagreeing, trip: trip, followedTrip: followedTrip,
    choice: choice, effectiveTrip: effectiveTrip, doorName: doorName, legStates: legStates };
})();
