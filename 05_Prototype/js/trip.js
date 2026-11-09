/* Screen: today's trip in detail. Shows SPEC-02, SPEC-03, SPEC-08. */
const app = document.getElementById("app");
const trip = DATA.usual_trip;
const run = scenario.run;
const conn = scenario.connection;

app.append(answerBox(scenario.answer.text, scenario.answer.tone));

// Legs, door to door
const legsSection = el("section", "card");
legsSection.append(el("h2", null, t("trip_legs")));
const legs = el("ol", "legs");
trip.legs.forEach(leg => {
  const item = el("li");
  item.append(el("strong", null, leg.departs + "–" + leg.arrives + " "), (leg.line || leg.mode) + ": " + leg.from + " → " + leg.to);
  item.append(el("span", "muted", " · " + leg.stage));
  legs.append(item);
});
legsSection.append(legs);
app.append(legsSection);

// Facts, each with its source and age (SPEC-02)
const facts = el("section", "card");
facts.append(el("h2", null, t("trip_facts", trip.main_run)));
facts.append(el("p", "state state-" + run.state, runState(run)));
if (run.no_news) facts.append(el("p", "alert", t("no_news", run.no_news)));
const factList = el("ul", "facts");
scenario.facts.forEach(fact => {
  const item = el("li", null, fact.text);
  item.append(el("span", "muted", " · " + factLine(fact)));
  factList.append(item);
});
facts.append(factList);
if (scenario.gap_min) facts.append(el("p", "alert", t("gap", { min: scenario.gap_min })));
if (run.reason) facts.append(el("p", null, t("reason", { text: run.reason })));
app.append(facts);

// What travellers see, and reporting in one step (SPEC-03)
const reports = el("section", "card");
reports.append(el("h2", null, t("trip_reports")));
if (scenario.reports) {
  reports.append(el("p", null, scenario.reports.text));
  reports.append(el("p", "muted", t("trip_seen", { count: scenario.reports.count, time: scenario.reports.latest })));
} else {
  reports.append(el("p", "muted", t("trip_no_reports")));
}
reports.append(el("h3", null, t("trip_report_heading")));
const reportButton = el("button", null, t("trip_report_button", trip.main_run));
const reportStatus = el("p", "muted");
reportStatus.setAttribute("aria-live", "polite");
reportButton.addEventListener("click", () => {
  reportButton.disabled = true;
  reportStatus.textContent = t("trip_report_done");
});
reports.append(reportButton, reportStatus);
app.append(reports);

// The connection ahead (SPEC-08)
const connection = el("section", "card");
connection.append(el("h2", null, t("trip_connection")));
connection.append(el("p", "conn conn-" + conn.state, t("conn_" + conn.state) + ": " + t("home_change", trip.change)));
if (conn.margin_min !== null) {
  connection.append(el("p", "muted", t("conn_margin", { margin: conn.margin_min, walk: conn.walk_min, threshold: DATA.commuter.rules.connection_threshold_min })));
}
if (conn.state === "at_risk") {
  const askButton = el("button", null, t("conn_ask_wait"));
  const askStatus = el("p", "muted");
  askStatus.setAttribute("aria-live", "polite");
  askButton.addEventListener("click", () => {
    askButton.disabled = true;
    askStatus.textContent = t("conn_asked");
  });
  connection.append(askButton, askStatus);
}
if (scenario.broken) {
  const actions = el("p", "actions");
  actions.append(link("ways_out.html", t("home_ways_out"), "button"));
  connection.append(actions);
}
app.append(connection);
