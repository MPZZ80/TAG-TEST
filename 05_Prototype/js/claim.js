/* Screen: compensation from the trip. Shows SPEC-13. */
var main = page("claim");
var cl = DATA.claims;
var trips = (IS_SET ? cl.trips : []).map(function (x) { return Object.assign({}, x); });
var list = el("div", { class: "claims" });

// The share of the price the operator's rules give for a delay, or null.
function share(delay) {
  var r = cl.rules.filter(function (x) { return delay >= x.from_minutes; }).pop();
  return r ? r.share : null;
}
function render() {
  list.replaceChildren.apply(list, trips.length ? trips.map(function (tr) {
    var s = share(tr.delay);
    if (tr.state === "none" && s) tr.state = "possible";
    var actions = [];
    if (tr.state === "possible") actions.push(el("button", { type: "button", text: t("claim.start"), on: { click: function () { tr.state = "started"; render(); } } }));
    if (tr.state === "started") actions.push(
      el("dl", { class: "pairs" },
        el("dt", { text: t("claim.trip") }), el("dd", { text: tr.date + ", " + tr.run }),
        el("dt", { text: t("claim.delay") }), el("dd", { text: t("claim.minutes", { n: tr.delay }) }),
        el("dt", { text: t("claim.ticket") }), el("dd", { text: tr.ticket }),
        el("dt", { text: t("claim.seller") }), el("dd", { text: tr.seller })),
      tr.via_seller ? el("p", { class: "hint", text: t("claim.via_seller") }) : null,
      el("button", { type: "button", text: t("claim.send"), on: { click: function () { tr.state = "sent"; render(); } } }));
    if (tr.state === "sent") actions.push(el("button", { type: "button", class: "secondary", text: t("claim.simulate_answer"), on: { click: function () {
      tr.state = "answered"; tr.answer = t("claim.answer", { amount: t("common.money", { n: (tr.price * parseInt(s, 10) / 100).toFixed(2) }) }); render();
    } } }));
    return el("article", { class: "card" },
      el("h3", { text: tr.date + " · " + tr.run }),
      el("p", { text: t("claim.late_by", { n: tr.delay }) + " · " + (s ? t("claim.gives", { share: s }) : t("claim.no_right")) }),
      el("p", { class: "badge", text: t("states.claim." + tr.state) }),
      tr.answer ? el("p", { class: "ok", text: tr.answer }) : null,
      actions);
  }) : [el("p", { text: t("claim.none") })]);
}
render();
main.append(list, section(t("claim.rules"), el("ul", null, cl.rules.map(function (r) { return el("li", { text: t("claim.rule", { n: r.from_minutes, share: r.share }) }); }))));
