/* Screen: ways out when the trip breaks. Shows SPEC-06. */
const app = document.getElementById("app");
const door = DATA.commuter.doors.office;

if (!scenario.broken) {
  app.append(el("p", "card", t("ways_not_broken")));
} else {
  app.append(answerBox(scenario.ways_answer, scenario.answer.tone));
  app.append(el("p", null, t("ways_intro", { door })));
  if (scenario.deadline) app.append(el("p", "alert", t("ways_deadline", { time: scenario.deadline, door })));

  // With seat first, the ways with seats expected come first (SPEC-06).
  const ways = [...DATA.ways_out];
  if (DATA.commuter.preference === "seat first") ways.sort((a, b) => b.seats_expected - a.seats_expected);

  const status = el("p", "answer tone-ok hidden");
  status.setAttribute("aria-live", "polite");
  const dialog = document.getElementById("confirm");
  let pending = null;

  const grid = el("div", "grid");
  ways.forEach(way => {
    const card = el("article", "card");
    card.append(el("h2", null, way.name));
    card.append(el("p", "muted", way.legs));
    card.append(el("p", null, t("ways_departs", { time: way.departs }) + " · " + t("ways_arrives", { time: way.arrives })));
    card.append(el("p", null, way.cost ? t("ways_cost", { cost: way.cost }) : t("ways_cost_unknown")));
    card.append(el("p", way.ticket_valid ? null : "alert", t(way.ticket_valid ? "ways_ticket_valid" : "ways_ticket_invalid")));
    card.append(el("p", null, t("ways_fullness", { fullness: way.fullness, source: way.fullness_source })));
    const choose = el("button", null, t("ways_choose"));
    choose.addEventListener("click", () => {
      pending = way;
      dialog.querySelector("p").textContent = way.name;
      dialog.showModal();
    });
    card.append(choose);
    grid.append(card);
  });
  app.append(status, grid);

  // Nothing changes without the commuter's yes (SPEC-01, principle 5).
  dialog.addEventListener("close", () => {
    if (dialog.returnValue !== "yes") return;
    status.textContent = t("ways_chosen", { way: pending.name });
    status.classList.remove("hidden");
    status.scrollIntoView();
  });
}
