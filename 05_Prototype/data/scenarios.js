/*
 * Dataset: scenarios
 * What it holds: the mock situations of today's usual trip that the prototype can show,
 *   picked with ?scenario=<id> or the prototype controls. One scenario feeds every screen.
 * Used by: all screens
 * Fields: default; list{<id>: {label, broken, run{state, delay_min, expected, platform,
 *   platform_usual, platform_final, reason, no_news{since, next}}, facts[{source, text,
 *   age_min, status}], gap_min, reports{count, latest, text}, connection{state, margin_min,
 *   walk_min}, answer{text, tone}, arrival{time, status}, announcement, alert_message,
 *   ways_answer, deadline}}
 *   state: on_time | delayed | cancelled | unknown (SPEC-01, run states)
 *   connection.state: holds | at_risk | lost (SPEC-01, connection states)
 *   tone: ok | warn | alert, the colour of the answer
 *   source: operator | measured | travellers | schedule; status: confirmed | estimated | reported
 * Source: mock
 * Updated: 2026-11-09
 */
window.DATA = window.DATA || {};
DATA.scenarios = {
  default: "on_time",
  list: {
    on_time: {
      label: "On time",
      broken: false,
      run: { state: "on_time", delay_min: 0, expected: "7:42", platform: "2", platform_usual: "2", platform_final: true, reason: null },
      facts: [
        { source: "operator", text: "On time", age_min: 2, status: "confirmed" },
        { source: "measured", text: "On time at Chiasso", age_min: 1, status: "confirmed" }
      ],
      gap_min: null,
      reports: { count: 3, latest: "7:31", text: "Train left Chiasso on time" },
      connection: { state: "holds", margin_min: 10, walk_min: 4 },
      answer: { text: "Go: leave home by 7:32", tone: "ok" },
      arrival: { time: "8:41", status: "estimated" },
      announcement: "Works on the Como–Chiasso line on Saturday 14 November: buses replace trains.",
      alert_message: null,
      ways_answer: null,
      deadline: null
    },
    delay_8: {
      label: "Late 8 minutes, sources disagree",
      broken: false,
      run: { state: "delayed", delay_min: 8, expected: "7:50", platform: "3", platform_usual: "2", platform_final: false, reason: "Signal fault near Chiasso" },
      facts: [
        { source: "operator", text: "5 min late", age_min: 4, status: "confirmed" },
        { source: "measured", text: "8 min late, still at Chiasso", age_min: 1, status: "confirmed" },
        { source: "travellers", text: "Stopped at Chiasso", age_min: 2, status: "reported" }
      ],
      gap_min: 3,
      reports: { count: 5, latest: "7:38", text: "Stopped at Chiasso, doors closed" },
      connection: { state: "at_risk", margin_min: 2, walk_min: 4 },
      answer: { text: "Wait at home: leave by 7:40, expected 7:50", tone: "warn" },
      arrival: { time: "8:56", status: "estimated" },
      announcement: null,
      alert_message: "Wait: S10 expected 7:50 (measured from travellers, 1 min ago). Platform 3, may still change.",
      ways_answer: null,
      deadline: null
    },
    delay_25: {
      label: "Late 25 minutes, past your limit",
      broken: true,
      run: { state: "delayed", delay_min: 25, expected: "8:07", platform: "2", platform_usual: "2", platform_final: true, reason: "Broken-down train ahead" },
      facts: [
        { source: "operator", text: "25 min late", age_min: 3, status: "confirmed" },
        { source: "measured", text: "Not moving for 14 min near Balerna", age_min: 1, status: "confirmed" }
      ],
      gap_min: null,
      reports: { count: 9, latest: "7:44", text: "Train stuck outside Balerna" },
      connection: { state: "lost", margin_min: -15, walk_min: 4 },
      answer: { text: "Past your 20 min limit: the bus to Chiasso gets you there first", tone: "alert" },
      arrival: { time: "9:12", status: "estimated" },
      announcement: null,
      alert_message: "S10 7:42 is 25 min late (operator, 3 min ago). Past your limit: see the ways out.",
      ways_answer: "Take the C1 bus at 7:52 and the S10 at 8:12 from Chiasso: office at 9:02, seats expected.",
      deadline: "8:20"
    },
    cancelled: {
      label: "Cancelled",
      broken: true,
      run: { state: "cancelled", delay_min: null, expected: null, platform: "2", platform_usual: "2", platform_final: true, reason: "Staff shortage" },
      facts: [
        { source: "operator", text: "Cancelled", age_min: 2, status: "confirmed" },
        { source: "travellers", text: "Board shows cancelled", age_min: 1, status: "reported" }
      ],
      gap_min: null,
      reports: { count: 4, latest: "7:36", text: "Board shows cancelled" },
      connection: { state: "lost", margin_min: null, walk_min: 4 },
      answer: { text: "Cancelled: the 8:12 train is packed, the bus has seats", tone: "alert" },
      arrival: { time: "9:02", status: "estimated" },
      announcement: null,
      alert_message: "S10 7:42 cancelled (operator, 2 min ago). Reason: staff shortage. See the ways out.",
      ways_answer: "You chose seat first: the C1 bus at 7:52 and the S10 at 8:12 from Chiasso reach the office at 9:02 with seats expected.",
      deadline: "8:20"
    },
    no_news: {
      label: "No news from any source",
      broken: false,
      run: { state: "unknown", delay_min: null, expected: null, platform: "2", platform_usual: "2", platform_final: false, reason: null, no_news: { since: "7:21", next: "7:36" } },
      facts: [
        { source: "schedule", text: "Scheduled 7:42", age_min: 0, status: "estimated" }
      ],
      gap_min: null,
      reports: null,
      connection: { state: "holds", margin_min: 10, walk_min: 4 },
      answer: { text: "No news: the scheduled 7:42 is not a real time", tone: "warn" },
      arrival: { time: "8:41", status: "estimated" },
      announcement: null,
      alert_message: null,
      ways_answer: null,
      deadline: null
    }
  }
};
