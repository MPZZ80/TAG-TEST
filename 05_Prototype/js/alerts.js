/* Screen: alerts on the usual trip. Shows SPEC-04. */
var main = page("alerts");
var a = DATA.alerts;

if (!IS_SET) main.append(missing(t("setup.usual_trip") + ", " + t("setup.days").toLowerCase()));
else main.append(el("p", { class: "hint", text: t("alerts.for_trip", { trip: DATA.profile.usual_trip.name, days: DATA.profile.days.join(", ") }) }));

main.append(section(t("alerts.kinds"), el("div", { class: "checks" }, a.kinds.map(function (k) {
  return el("p", { class: "check" }, el("input", { id: "kind-" + k.id, type: "checkbox", checked: IS_SET && k.on }), el("label", { for: "kind-" + k.id, text: k.label }));
}))));

main.append(section(t("alerts.moments"), el("ul", null, a.moments.map(function (m) {
  return el("li", { text: t("alerts.moment", { label: m.label, from: m.from, to: m.to }) + (m.heard ? " · " + t("alerts.heard") : "") });
}))));

var sent = a.sent[SCENARIO] || [];
main.append(section(t("alerts.sent"),
  sent.length ? el("ul", null, sent.map(function (s) { return el("li", null, el("strong", { text: s.time + " " }), s.text, el("small", { text: " · " + s.source })); }))
              : el("p", { text: t("alerts.none_sent") })));

main.append(section(t("alerts.announced"), el("ul", null, a.announced.map(function (n) {
  return el("li", null, el("strong", { text: n.date + ": " }), n.text, el("small", { text: " · " + n.source + " · " + n.told }));
}))));
main.append(simulateButton("alerts"));
