/* Screen: the fare that fits the days. Shows SPEC-12. */
var main = page("fare");
var f = DATA.fares;
var days = IS_SET ? f.days_travelled : 0;
var out = el("div");
var count = el("output", { id: "days", text: days });

function cost(o, trips) {
  if (o.kind === "single") return trips * o.price;
  if (o.kind === "carnet") return Math.ceil(trips / o.rides) * o.price;
  return o.price;
}
function money(n) { return t("common.money", { n: n.toFixed(2) }); }
// Compare a pass, a carnet and single tickets for the days counted (SPEC-12, rules 2–3).
function render() {
  count.textContent = days;
  var trips = days * f.trips_per_day;
  var costs = f.options.map(function (o) { return { o: o, c: cost(o, trips) }; });
  var best = costs.reduce(function (a, b) { return b.c < a.c ? b : a; });
  var held = costs.filter(function (x) { return x.o.id === f.held; })[0];
  out.replaceChildren(
    el("ul", { class: "fares" }, costs.map(function (x) {
      return el("li", { class: x === best ? "best" : null }, el("strong", { text: x.o.name }), " · " + money(x.c) + (x === best ? " · " + t("fare.cheapest") : ""));
    })),
    el("p", { class: best === held ? "hint" : "ok", text: best === held ? t("fare.held_best") : t("fare.saves", { name: best.o.name, amount: money(held.c - best.c), held: held.o.name }) }));
}

if (!IS_SET) main.append(missing(t("setup.days")));
main.append(section(t("fare.days_title"),
  el("p", null, t("fare.days", { period: f.period }) + " ", count),
  el("button", { type: "button", class: "secondary", "aria-label": t("fare.less"), text: t("fare.less_sign"), on: { click: function () { if (days > 0) { days--; render(); } } } }),
  el("button", { type: "button", class: "secondary", "aria-label": t("fare.more"), text: t("fare.more_sign"), on: { click: function () { days++; render(); } } }),
  el("p", { class: "hint", text: t("fare.correct_hint") })),
  section(t("fare.compare"), out));
render();
