/*
 * Dataset: connections
 * What it holds: the change on the usual trip and its state in each scenario (SPEC-07):
 *   the way between the two runs, the margin against the commuter's own rule, the next connection that holds,
 *   and when the commuter is told. Asking the connection to wait was set aside on 2026-11-22 (SPEC-07).
 * Used by: today.html, connection.html, timing.html
 * Fields: station, from_run, to_run, walk_minutes, board_where,
 *   by_scenario{key: {state, margin, next_dep, door_arrival, warn_at}}
 * Source: mock
 * Updated: 2026-11-22
 */
window.DATA = window.DATA || {};
DATA.connections = {
  station: "Milano Centrale",
  from_run: "HS9707",
  to_run: "M2-0912",
  walk_minutes: 6,                     // platform 21 to the M2, measured on the way through the station
  board_where: "Front of the train, coach 1", // closest to the way down to the underground
  by_scenario: {
    // margin = minutes left after the commuter's minimum change time at this station (10, profile.js)
    none:      { state: "holds",  margin: 4,  next_dep: "09:12", door_arrival: "09:20" },
    on_time:   { state: "holds",  margin: 4,  next_dep: "09:12", door_arrival: "09:23" }, // +3 min way round the works on foot (leg_events.js),
    // told 15 minutes before the change: provisional, OQ-17
    late:      { state: "lost",   margin: -14, next_dep: "09:28", door_arrival: "09:39", warn_at: "09:01" },
    cancelled: { state: "lost",   margin: null, next_dep: "—", door_arrival: "—" }
  }
};
