/* Screen: today's trip at a glance. Shows SPEC-05, with the run state of SPEC-03 and the connection of SPEC-08. */
var main = page("today");

if (!IS_SET) {
  main.append(section(t("today.no_trip_title"), missing(t("setup.usual_trip")), el("p", null, link("ways.html", t("today.search")))));
} else {
  var r = run("HS9707"), m = run("M3-0910"), c = DATA.connections.by_scenario[SCENARIO];
  var broken = SCN.trip_state === "broken";
  var platform = el("p", { class: "platform" }, t("today.platform", { platform: r.platform }),
    r.platform !== r.usual_platform && r.platform !== "—" ? el("strong", { class: "flag", text: " " + t("today.platform_changed", { usual: r.usual_platform }) }) : null,
    r.platform_may_change ? el("span", { class: "flag", text: " " + t("today.platform_may_change") }) : null);

  // The trip comes first, with nothing in front of it (SPEC-01, principle 3).
  var card = el("article", { class: "card trip-card state-" + SCN.trip_state },
    el("h2", { text: DATA.profile.usual_trip.name }),
    el("p", { class: "badge state-badge", text: t("states.trip." + SCN.trip_state) }),
    el("p", { class: "run-line" }, el("strong", { text: r.service }), " " + t("today.run_times", { from: r.from, dep: r.dep, to: r.to, arr: r.arr })),
    el("p", { class: "run-state" }, t("states.run." + r.state, { delay: r.delay }),
      r.state === "late" ? " · " + t("today.expected", { dep: r.exp_dep, arr: r.exp_arr }) : null),
    platform,
    el("div", { class: "facts" }, r.facts.map(fact)),
    el("p", null, t("today.change", { station: DATA.connections.station, service: m.service, platform: m.platform, state: t("states.connection." + c.state) })),
    el("p", { class: "door" }, broken ? t("today.door_unknown") : t("today.door", { time: c.door_arrival })),
    broken ? el("p", { class: "cta" }, link("ways_out.html", t("today.ways_out"))) : null);
  main.append(card);

  // The commuter confirms or changes the run taken today: the trip of the day (SPEC-05, rule 4).
  var chosen = el("p", { class: "chosen", text: t("today.trip_of_day", { run: r.dep + ", " + r.service }) });
  var other = el("select", { id: "other-run" }, el("option", { value: "", text: t("today.pick_run") }),
    r.alternatives.map(function (a) { return el("option", { value: a, text: a }); }));
  main.append(section(t("today.confirm_title"), chosen,
    el("button", { type: "button", disabled: broken, text: t("today.confirm"), on: { click: function () {
      chosen.textContent = t("today.confirmed", { run: r.dep + ", " + r.service });
    } } }),
    el("p", { class: "field" }, el("label", { for: "other-run", text: t("today.other") }), other),
    el("button", { type: "button", class: "secondary", text: t("today.take_other"), on: { click: function () {
      if (other.value) chosen.textContent = t("today.confirmed", { run: other.value });
    } } })));

  main.append(section(t("today.more"), el("ul", { class: "links" },
    el("li", null, link("run.html", t("today.link_run"), { id: "HS9707" })),
    el("li", null, link("connection.html", t("today.link_connection"))),
    el("li", null, link("timing.html", t("today.link_timing"))),
    el("li", null, link("station.html", t("today.link_station"), { id: "VRPN" })),
    el("li", null, link("tickets.html", t("today.link_tickets"))),
    el("li", null, link("contacts.html", t("today.link_contacts"))))));
}
main.append(simulateButton("today"));
