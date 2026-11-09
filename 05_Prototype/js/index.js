/* Screen: today, the usual trip at a glance. Shows SPEC-05, SPEC-02, SPEC-04. */
const app = document.getElementById("app");
const trip = DATA.usual_trip;
const run = scenario.run;
const card = el("section", "card");

card.append(answerBox(scenario.answer.text, scenario.answer.tone));

const runLine = el("h2", null, t("home_run", { line: trip.main_run.line, time: trip.main_run.time, to: trip.main_run.to }));
card.append(runLine);

const state = el("p", "state state-" + run.state, runState(run));
if (run.state === "unknown") state.textContent += " · " + t("no_news", run.no_news);
card.append(state);

const platform = el("p", null, t("home_platform", { platform: run.platform }));
if (run.platform !== run.platform_usual) {
  platform.append(" ", el("strong", "alert", t("home_platform_changed", { usual: run.platform_usual })));
}
if (!run.platform_final) platform.append(" ", el("span", "muted", t("home_platform_not_final")));
card.append(platform);

card.append(el("p", null, t("home_change", trip.change)));
card.append(el("p", "conn conn-" + scenario.connection.state, t("conn_" + scenario.connection.state)));
card.append(el("p", "muted", t("home_arrival", { door: DATA.commuter.doors.office, time: scenario.arrival.time }) + " (" + t("status_" + scenario.arrival.status) + ")"));

const actions = el("p", "actions");
actions.append(link("trip.html", t("home_open_trip")));
if (scenario.broken) actions.append(link("ways_out.html", t("home_ways_out"), "button"));
card.append(actions);
app.append(card);

// Announcements come after the trip, never in front of it (SPEC-05).
if (scenario.announcement) {
  const note = el("aside", "card muted");
  note.append(el("h2", null, t("home_announcement")), el("p", null, scenario.announcement));
  app.append(note);
}
