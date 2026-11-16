/* Screen: every way door to door. Shows SPEC-09. */
var main = page("ways");
var s = DATA.ways.search;
var results = el("div", { class: "ways" });

function input(id, label, value, type) {
  return el("p", { class: "field" }, el("label", { for: id, text: label }), el("input", { id: id, type: type || "text", value: value }));
}
function render() {
  results.replaceChildren.apply(results, s.ways.map(function (w) {
    return el("article", { class: "card" },
      el("h3", { text: w.label }),
      el("p", { class: "legs", text: w.legs.join(" → ") }),
      el("dl", { class: "pairs" },
        el("dt", { text: t("ways.leave") }), el("dd", { text: w.dep }),
        el("dt", { text: t("ways.at_door") }), el("dd", { text: w.arr_door }),
        el("dt", { text: t("ways.total") }), el("dd", { text: t("ways.minutes", { n: w.minutes }) }),
        el("dt", { text: t("ways.price") }), el("dd", { text: w.price }),
        el("dt", { text: t("ways.operators") }), el("dd", { text: w.operators }),
        el("dt", { text: t("ways.back_home") }), el("dd", { text: w.back_home })),
      el("button", { type: "button", text: t("ways.today"), on: { click: function () { showMessage({ channel: t("ways.chosen_channel"), text: t("ways.today_done", { way: w.label }) }); } } }),
      el("button", { type: "button", class: "secondary", text: t("ways.save"), on: { click: function () { showMessage({ channel: t("ways.chosen_channel"), text: t("ways.save_done", { way: w.label }) }); } } }));
  }));
}

if (!IS_SET) main.append(missing(t("setup.doors")));
main.append(el("form", { class: "search", on: { submit: function (e) { e.preventDefault(); render(); } } },
  input("from", t("ways.from"), IS_SET ? s.from : ""),
  input("to", t("ways.to"), IS_SET ? s.to : ""),
  input("day", t("ways.day"), s.day),
  input("leave", t("ways.leave_after"), s.leave_after, "time"),
  el("button", { type: "submit", text: t("ways.search") })), results);
if (IS_SET) render();
