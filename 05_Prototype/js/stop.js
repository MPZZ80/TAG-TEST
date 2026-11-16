/* Screen: the stop approaching. Shows SPEC-15. */
var main = page("stop");
var sp = DATA.stop, r = run(sp.run);
var state = "watching", repeats = 0;
var statusEl = el("p", { class: "badge state-badge" });
var stopSelect = el("select", { id: "stop" }, sp.stops.map(function (s) { return el("option", { value: s, text: s, selected: s === sp.stop }); }));

function setState(s) { state = s; statusEl.textContent = t("states.stop." + s); }
setState("watching");

main.append(el("article", { class: "card" },
  el("h2", { text: r.service }),
  el("p", { text: t("stop.run", { from: r.from, to: r.to, arr: r.exp_arr }) }),
  // the stop comes from the trip of the day, or is set when boarding (SPEC-15, rule 1)
  IS_SET && sp.from_trip ? el("p", { text: t("stop.from_trip", { stop: sp.stop }) })
    : el("p", { class: "field" }, el("label", { for: "stop", text: t("stop.set_stop") }), stopSelect),
  statusEl,
  el("p", { class: "hint", text: t("stop.rule", { before: sp.warn_before, every: sp.repeat_every, max: sp.repeat_max }) })));

main.append(section(t("stop.simulate"),
  el("button", { type: "button", text: t("stop.approach"), on: { click: function () { setState("told"); messagesFor("stop").forEach(showMessage); } } }),
  el("button", { type: "button", class: "secondary", text: t("stop.no_response"), on: { click: function () {
    if (state !== "told") return;
    if (repeats < sp.repeat_max) { repeats++; showMessage({ channel: t("stop.repeat_channel", { n: repeats }), text: messagesFor("stop")[0].text }); }
  } } }),
  el("button", { type: "button", class: "secondary", text: t("stop.arrive"), on: { click: function () { setState("arrived"); } } })));
