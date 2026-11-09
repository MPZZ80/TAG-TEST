/* Screen: every way side by side, door to door. Shows SPEC-09. */
const app = document.getElementById("app");
const plan = DATA.plan_ways;

app.append(el("p", "query", t("plan_query", plan.query)));

const grid = el("div", "grid");
plan.ways.forEach(way => {
  const card = el("article", "card");
  card.append(el("h2", null, way.name));
  card.append(el("p", null, t("ways_departs", { time: way.departs }) + " · " + t("ways_arrives", { time: way.arrives }) + " · " + t("minutes", { min: way.duration_min })));
  card.append(el("p", way.price ? null : "alert", way.price ? t("plan_price", { price: way.price }) : t("plan_price_unknown")));
  card.append(el("p", "muted", t("plan_operators", { list: way.operators.join(", ") })));
  card.append(el("p", null, t("plan_latest", { time: way.latest_leave })));
  grid.append(card);
});
app.append(grid);
