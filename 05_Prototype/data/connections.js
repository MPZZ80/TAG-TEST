/*
 * Dataset: connections
 * What it holds: the change on the usual trip and its state in each scenario (SPEC-08, SPEC-10):
 *   the way between the two runs, the margin against the commuter's own rule, the next connection that holds,
 *   and the answer to a request to wait.
 * Used by: today.html, connection.html, timing.html
 * Fields: station, from_run, to_run, walk_minutes, board_where,
 *   by_scenario{key: {state, margin, next_dep, door_arrival, warn_at, request_answer}}
 * Source: mock
 * Updated: 2026-11-16
 */
window.DATA = window.DATA || {};
DATA.connections = {
  station: "Milano Centrale",
  from_run: "HS9707",
  to_run: "M3-0910",
  walk_minutes: 7,                     // platform 21 to the M3, measured on the way through the station
  board_where: "Front of the train, coach 1", // closest to the way down to the underground
  by_scenario: {
    // margin = minutes left after the commuter's minimum change time at this station (10, profile.js)
    none:      { state: "holds",  margin: 2,  next_dep: "09:10", door_arrival: "09:18" },
    on_time:   { state: "holds",  margin: 2,  next_dep: "09:10", door_arrival: "09:18" },
    // told 15 minutes before the change: provisional, OQ-17
    late:      { state: "lost",   margin: -16, next_dep: "09:28", door_arrival: "09:36", warn_at: "09:01",
                 request_answer: "will not wait" },
    cancelled: { state: "lost",   margin: null, next_dep: "—", door_arrival: "—" }
  },
  request_answer_text: {
    "will wait": "The connecting service will wait.",
    "will not wait": "The connecting service will not wait: the next underground leaves 6 minutes later.",
    "no answer": "No answer yet."
  }
};
