/* Screen: tickets that work when needed. Shows SPEC-11. */
var main = page("tickets");
var tickets = (IS_SET ? DATA.tickets : []).map(function (x) { return Object.assign({}, x); });
var noSignal = false;
var list = el("div", { class: "tickets" });
var shown = el("div", { id: "shown" });

function render() {
  list.replaceChildren.apply(list, tickets.length ? tickets.map(function (tk) {
    var move = el("select", { id: "move-" + tk.id }, el("option", { value: "", text: t("tickets.move_to") }),
      tk.moves.map(function (m, i) { return el("option", { value: i, text: t("tickets.move_option", { to: m.to, cost: m.cost }) }); }));
    return el("article", { class: "card" },
      el("h3", { text: tk.title }),
      el("p", { text: tk.covers }),
      el("p", null, el("small", { text: t("tickets.seller", { seller: tk.seller }) + (tk.entered ? " · " + t("tickets.entered") : "") })),
      el("p", { class: "badge", text: t("states.ticket." + tk.state) }),
      el("button", { type: "button", text: t("tickets.show"), on: { click: function () { show(tk); } } }),
      tk.moves.length && tk.state === "held" ? el("p", { class: "field" }, el("label", { for: "move-" + tk.id, text: t("tickets.move") }), move,
        el("button", { type: "button", class: "secondary", text: t("tickets.move_button"), on: { click: function () { askMove(tk, move.value); } } })) : null);
  }) : [el("p", { text: t("tickets.none") })]);
}
// One step, also with no signal: the ticket is kept on the device (SPEC-11, rule 3).
function show(tk) {
  shown.replaceChildren(el("div", { class: "card ticket-code" },
    el("p", { text: tk.title }),
    el("p", { class: "code", text: tk.code }),
    el("small", { text: noSignal ? t("tickets.from_device") : t("tickets.valid_now") })));
}
function askMove(tk, i) {
  if (i === "") return;
  if (noSignal) { shown.replaceChildren(el("p", { class: "missing", text: t("tickets.wait_signal") })); return; }
  var m = tk.moves[i];
  shown.replaceChildren(el("div", { class: "card confirm" },
    el("p", { text: t("tickets.move_q", { to: m.to, cost: m.cost }) }),
    el("button", { type: "button", text: t("common.yes"), on: { click: function () {
      tk.state = "moved"; tk.covers = m.to; render();
      shown.replaceChildren(el("p", { class: "ok", text: t("tickets.moved", { to: m.to }) }));
    } } }),
    el("button", { type: "button", class: "secondary", text: t("common.no"), on: { click: function () { shown.replaceChildren(); } } })));
}

var signal = el("p", { class: "check" }, el("input", { id: "no-signal", type: "checkbox", on: { change: function () { noSignal = this.checked; } } }),
  el("label", { for: "no-signal", text: t("tickets.no_signal") }));

var title = el("input", { id: "e-title", type: "text" }), code = el("input", { id: "e-code", type: "text" });
var enter = el("form", { on: { submit: function (e) {
  e.preventDefault();
  if (!title.value.trim()) return;
  tickets.push({ id: "E" + tickets.length, title: title.value.trim(), covers: t("tickets.entered_covers"), seller: t("tickets.elsewhere"),
    entered: true, state: "held", code: code.value.trim() || "—", moves: [] });
  title.value = code.value = ""; render();
} } },
  el("p", { class: "field" }, el("label", { for: "e-title", text: t("tickets.e_title") }), title),
  el("p", { class: "field" }, el("label", { for: "e-code", text: t("tickets.e_code") }), code),
  el("button", { type: "submit", text: t("tickets.enter") }));

render();
main.append(signal, list, shown, section(t("tickets.enter_title"), enter), section(t("tickets.book_title"), el("p", null, link("ways.html", t("tickets.book")))));
