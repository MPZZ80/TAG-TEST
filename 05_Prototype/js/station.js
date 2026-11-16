/* Screen: the station ahead. Shows SPEC-14. */
var main = page("station");
var st = DATA.stations.filter(function (s) { return s.id === params.get("id"); })[0] || DATA.stations[0];

main.append(el("ul", { class: "tabs" }, DATA.stations.map(function (s) {
  return el("li", null, s === st ? el("strong", { text: s.name }) : link("station.html", s.name, { id: s.id }));
})));
main.append(el("p", { class: "hint", text: t("station.at_hour", { name: st.name, hour: st.hour }) }));

function group(key, facts) {
  return section(t("station." + key), facts.length ? el("div", { class: "facts" }, facts.map(fact)) : el("p", { text: t("station.no_facts") }));
}
main.append(group("parking", st.parking), group("bikes", st.bikes), group("staff", st.staff), group("light", st.light));

// Lifts and lights on the way through are shown to a commuter who needs step-free access (SPEC-14, rule 3).
if (IS_SET && DATA.profile.needs.step_free) main.append(group("lifts", st.lifts));
else {
  var lifts = el("div", { hidden: true }, st.lifts.map(fact));
  main.append(section(t("station.lifts"),
    IS_SET ? el("p", { class: "hint", text: t("station.lifts_not_needed") }) : missing(t("setup.needs")),
    el("button", { type: "button", class: "link-button", text: t("station.show_anyway"), on: { click: function () { lifts.hidden = false; this.remove(); } } }),
    lifts));
}
