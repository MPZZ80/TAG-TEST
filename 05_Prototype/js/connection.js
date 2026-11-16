/* Screen: the connection ahead. Shows SPEC-08. */
var main = page("connection");
var cn = DATA.connections, c = cn.by_scenario[SCENARIO];

if (!IS_SET) {
  main.append(missing(t("setup.usual_trip") + ", " + t("setup.min_change").toLowerCase()));
} else {
  var a = run(cn.from_run), b = run(cn.to_run);
  var minChange = (DATA.profile.own_rules.per_station.filter(function (s) { return s.station === cn.station; })[0] || {}).minutes || DATA.profile.own_rules.min_change;
  main.append(el("article", { class: "card state-" + c.state },
    el("h2", { text: t("connection.at", { station: cn.station }) }),
    el("p", { class: "badge state-badge", text: t("states.connection." + c.state) }),
    el("dl", { class: "pairs" },
      el("dt", { text: t("connection.arrives") }), el("dd", { text: a.state === "cancelled" ? t("run.not_running") : t("connection.arr_value", { service: a.service, time: a.exp_arr }) }),
      el("dt", { text: t("connection.leaves") }), el("dd", { text: t("connection.arr_value", { service: b.service, time: b.exp_dep }) }),
      el("dt", { text: t("connection.walk") }), el("dd", { text: t("connection.minutes", { n: cn.walk_minutes }) }),
      el("dt", { text: t("connection.own_rule") }), el("dd", { text: t("connection.minutes", { n: minChange }) }),
      el("dt", { text: t("connection.margin") }), el("dd", { text: c.margin == null ? "—" : t("connection.minutes", { n: c.margin }) })),
    el("div", { class: "facts" }, a.facts.filter(function (f) { return f.label !== "Platform"; }).map(fact)),
    c.state === "lost" && c.next_dep !== "—" ? el("p", { class: "ok", text: t("connection.next", { time: c.next_dep, door: c.door_arrival }) }) : null,
    c.warn_at ? el("p", { class: "hint", text: t("connection.warned", { time: c.warn_at }) }) : null));

  // A request to wait is shown until an answer comes; held only on an answer that says so (SPEC-08, rules 4–5).
  var state = el("p", { id: "request-state", text: t("connection.request_none") });
  main.append(section(t("connection.request"), state,
    el("button", { type: "button", disabled: c.state === "holds", text: t("connection.ask"), on: { click: function () {
      state.textContent = t("connection.request_sent");
      setTimeout(function () { state.textContent = cn.request_answer_text[c.request_answer || "no answer"]; }, 1500);
    } } })));
}
main.append(simulateButton("connection"));
