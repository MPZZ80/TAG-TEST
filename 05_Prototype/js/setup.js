/* Screen: set-up. Shows SPEC-02: what the commuter enters once, what is set and what is missing. */
var main = page("setup");
var p = DATA.profile;

function badge() { return el("span", { class: "badge " + (IS_SET ? "ok" : "warn"), text: IS_SET ? t("setup.set") : t("setup.missing") }); }
function block(key) {
  var kids = [].slice.call(arguments, 1);
  return section(t("setup." + key), badge(), el("p", { class: "affects", text: t("setup.affects_label") + " " + t("setup.affects." + key) }), kids);
}
function field(id, label, input) { return el("p", { class: "field" }, el("label", { for: id, text: label }), input); }
function check(id, label, checked) {
  return el("p", { class: "check" }, el("input", { id: id, type: "checkbox", checked: checked }), el("label", { for: id, text: label }));
}

var doors = el("div");
(IS_SET ? p.doors : [{}, {}]).forEach(function (d, i) {
  doors.append(field("door-" + i, t("setup.door_label", { n: i + 1 }),
    el("input", { id: "door-" + i, type: "text", value: d.name ? d.name + ", " + d.place : "", placeholder: t("setup.door_placeholder") })));
});
var addDoor = el("button", { type: "button", class: "link-button", text: t("setup.add_door"), on: { click: function () {
  var i = doors.querySelectorAll("input").length;
  doors.insertBefore(field("door-" + i, t("setup.door_label", { n: i + 1 }), el("input", { id: "door-" + i, type: "text", placeholder: t("setup.door_placeholder") })), addDoor);
} } });
doors.append(addDoor);

var trip = IS_SET
  ? el("ol", null, p.usual_trip.legs.map(function (l) { return el("li", { text: t("setup.leg", { mode: t("modes." + l.mode), from: l.from, to: l.to, stage: l.stage }) }); }))
  : el("p", null, t("setup.no_trip") + " ", link("ways.html", t("setup.choose_way")));

var days = el("div", { class: "checks" }, DATA.ui_text.weekdays.map(function (d, i) {
  return check("day-" + i, d, IS_SET && p.days.indexOf(d) >= 0);
}));

var r = p.own_rules;
var rules = el("div", null,
  field("min-change", t("setup.min_change"), el("input", { id: "min-change", type: "number", min: 0, value: IS_SET ? r.min_change : "" })),
  field("per-station", t("setup.per_station"), el("input", { id: "per-station", type: "text", value: IS_SET ? r.per_station.map(function (s) { return s.station + " " + s.minutes; }).join("; ") : "" })),
  field("margin", t("setup.margin"), el("input", { id: "margin", type: "number", min: 0, value: IS_SET ? r.margin : "" })),
  field("max-changes", t("setup.max_changes"), el("input", { id: "max-changes", type: "number", min: 0, value: IS_SET ? r.max_changes : "" })),
  field("own-leg", t("setup.own_leg"), el("input", { id: "own-leg", type: "text", value: IS_SET ? r.own_leg : "" })));

var channels = el("div", { class: "checks" }, DATA.ui_text.channel_options.map(function (c, i) {
  return check("channel-" + i, c, IS_SET && p.channels.indexOf(c) >= 0);
}));

var form = el("form", { on: { submit: function (e) {
  e.preventDefault();
  showMessage({ channel: t("setup.saved_channel"), text: t("setup.not_kept") });
} } },
  block("doors", doors),
  block("usual_trip", trip),
  block("days", days),
  block("own_rules", rules),
  block("needs", check("step-free", t("setup.step_free"), IS_SET && p.needs.step_free)),
  block("channels", channels),
  block("position", check("position", t("setup.position_label"), IS_SET && p.position), el("p", { class: "hint", text: t("setup.position_hint") })),
  el("p", { class: "hint", text: t("setup.skip_hint") }),
  el("button", { type: "submit", text: t("setup.save") }));
main.append(form);
