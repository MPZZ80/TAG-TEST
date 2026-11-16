/* Screen: ways out when the trip breaks. Shows SPEC-06. */
var main = page("ways_out");
var w = DATA.ways.ways_out;

if (!IS_SET) {
  main.append(missing(t("setup.usual_trip")));
} else {
  if (SCN.trip_state !== "broken") main.append(el("p", { class: "hint", text: t("ways_out.not_broken") }));
  main.append(el("p", { text: DATA.profile.position ? t("ways_out.from_position") : t("ways_out.from_station", { station: w.from }) }));

  // Seat first or earlier arrival first: the commuter chooses, the order follows (SPEC-06, rule 4).
  var list = el("div", { class: "ways" });
  var pref = el("fieldset", null, el("legend", { text: t("ways_out.preference") }),
    ["earlier", "seat"].map(function (k) {
      return el("p", { class: "check" }, el("input", { type: "radio", name: "pref", id: "pref-" + k, value: k, checked: k === "earlier",
        on: { change: function () { render(k); } } }), el("label", { for: "pref-" + k, text: t("ways_out.pref_" + k) }));
    }));
  var choice = el("div", { id: "choice" });

  function render(order) {
    var ways = w.ways.slice().sort(order === "seat"
      ? function (x, y) { return (y.fullness.indexOf("Seats") === 0) - (x.fullness.indexOf("Seats") === 0); }
      : function (x, y) { return x.arr_door.localeCompare(y.arr_door); });
    list.replaceChildren.apply(list, ways.map(function (way) {
      return el("article", { class: "card" },
        el("h3", { text: way.label }),
        el("dl", { class: "pairs" },
          el("dt", { text: t("ways_out.leaves") }), el("dd", { text: way.dep }),
          el("dt", { text: t("ways_out.at_door") }), el("dd", { text: way.arr_door }),
          el("dt", { text: t("ways_out.cost") }), el("dd", { text: way.cost }),
          el("dt", { text: t("ways_out.ticket") }), el("dd", { text: way.ticket_valid ? t("ways_out.valid") : t("ways_out.not_valid") }),
          el("dt", { text: t("ways_out.fullness") }), el("dd", { text: way.fullness + (way.fullness_source !== "—" ? " · " + way.fullness_source : "") })),
        el("button", { type: "button", text: t("ways_out.choose"), on: { click: function () { ask(way); } } }));
    }));
  }
  // Nothing changes before the commuter confirms (SPEC-01, principle 4).
  function ask(way) {
    choice.replaceChildren(el("div", { class: "card confirm" },
      el("p", { text: t("ways_out.confirm_q", { way: way.label }) }),
      el("button", { type: "button", text: t("common.yes"), on: { click: function () {
        choice.replaceChildren(el("p", { class: "ok", text: t("ways_out.continues", { way: way.label, time: way.arr_door }) }),
          el("p", null, link("contacts.html", t("ways_out.tell"))));
      } } }),
      el("button", { type: "button", class: "secondary", text: t("common.no"), on: { click: function () { choice.replaceChildren(); } } })));
  }
  render("earlier");
  main.append(pref, list, choice, el("p", { class: "hint", text: t("ways_out.last_way", { time: w.last_way }) }));
}
main.append(simulateButton("ways_out"));
