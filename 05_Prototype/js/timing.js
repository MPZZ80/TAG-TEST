/* Screen: times that can be kept. Shows SPEC-10. */
var main = page("timing");
var tm = DATA.timing, start = DATA.ways.search.ways[0].dep;

if (!IS_SET) {
  main.append(missing(t("setup.own_rules")));
} else {
  var planned = 0, real = 0;
  var rows = tm.legs.map(function (l) {
    planned += l.planned; real += l.real;
    return el("tr", null, el("td", { text: l.label }), el("td", { text: l.stage }), el("td", { text: l.planned }),
      el("td", { class: l.real > l.planned ? "longer" : null, text: l.real }), el("td", { text: l.source + (l.note ? " · " + l.note : "") }));
  });
  main.append(section(t("timing.legs", { start: start }),
    el("div", { class: "table-wrap" }, el("table", null,
      el("thead", null, el("tr", null, ["leg", "stage", "planned", "real", "source"].map(function (k) { return el("th", { scope: "col", text: t("timing.col_" + k) }); }))),
      el("tbody", null, rows)))));

  var c = DATA.connections, cs = c.by_scenario.on_time;
  main.append(section(t("timing.connection"),
    el("p", { text: t("timing.tightness", { station: c.station, margin: cs.margin, rule: DATA.profile.own_rules.per_station[0].minutes }) }),
    el("p", { class: "hint", text: t("timing.board", { where: c.board_where }) })));

  main.append(section(t("timing.arrival"), el("dl", { class: "pairs" },
    el("dt", { text: t("timing.planned_arrival") }), el("dd", { text: addMinutes(start, planned) }),
    el("dt", { text: t("timing.expected_arrival") }), el("dd", { text: addMinutes(start, real) }),
    el("dt", { text: t("timing.with_works", { from: tm.works.from }) }), el("dd", { text: addMinutes(start, real + tm.works.minutes) + " · " + tm.works.text }),
    el("dt", { text: t("timing.margin") }), el("dd", { text: t("timing.margin_value", { n: DATA.profile.own_rules.margin }) }))));
}
