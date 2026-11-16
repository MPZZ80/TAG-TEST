/* Screen: the real state of the run. Shows SPEC-03. */
var main = page("run");
var id = DATA.runs[params.get("id")] ? params.get("id") : "HS9707";
var r = run(id);

// Two figures with the same label from different sources: show both and the gap (SPEC-03, rule 3).
var byLabel = {};
r.facts.forEach(function (f) { (byLabel[f.label] = byLabel[f.label] || []).push(f); });
var disagree = Object.keys(byLabel).filter(function (k) { return byLabel[k].length > 1; });

main.append(
  el("article", { class: "card state-" + r.state.replace(" ", "-") },
    el("h2", { text: r.service }),
    el("p", { text: t("run.operator", { operator: r.operator }) }),
    el("p", { class: "badge state-badge", text: t("states.run." + r.state, { delay: r.delay }) }),
    el("dl", { class: "pairs" },
      el("dt", { text: t("run.planned") }), el("dd", { text: t("run.times", { dep: r.dep, arr: r.arr, from: r.from, to: r.to }) }),
      el("dt", { text: t("run.expected") }), el("dd", { text: r.state === "cancelled" ? t("run.not_running") : t("run.times", { dep: r.exp_dep, arr: r.exp_arr, from: r.from, to: r.to }) }),
      el("dt", { text: t("run.position") }), el("dd", { text: r.position || t("run.unknown") }),
      el("dt", { text: t("run.reason") }), el("dd", { text: r.reason || t("run.no_reason") })),
    section(t("run.facts"),
      r.facts.length ? el("div", { class: "facts" }, r.facts.map(fact)) : el("p", { class: "missing", text: t("run.no_news", { time: SCN.now }) }),
      disagree.map(function (k) { return el("p", { class: "flag", text: t("run.disagree", { label: k, values: byLabel[k].map(function (f) { return f.value + " (" + f.source + ")"; }).join(" · ") }) }); })),
    el("p", { class: "hint", text: t("run.usual_delay", { minutes: r.usual_delay.minutes, runs: r.usual_delay.runs }) })));

main.append(section(t("run.other_runs"), el("ul", { class: "links" }, Object.keys(DATA.runs).map(function (k) {
  return el("li", null, k === id ? el("strong", { text: DATA.runs[k].service }) : link("run.html", DATA.runs[k].service, { id: k }));
}))));
