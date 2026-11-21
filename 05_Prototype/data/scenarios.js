/*
 * Dataset: scenarios
 * What it holds: the scenarios the configurator switches between, and the mock clock of each. Which one a page
 *   opens on is in config.js; where the commuter is, too.
 * Used by: every screen (through common.js)
 * Fields: list{key: {label, setup, now, times{before, leg-1 … leg-4, after}, trip_state, connection_state}}
 * Source: mock
 * Updated: 2026-11-21
 */
window.DATA = window.DATA || {};
DATA.scenarios = {
  list: {
    // setup: false = the commuter has entered nothing yet (SPEC-01, "Nothing set up yet")
    // times: the hour of the mock clock for each place of the configurator (config.js, at), consistent with the runs
    // of the scenario; now: the hour when no time is given. Cancelled: after the train, on the high-speed 9715 (A1).
    none:      { label: "Nothing set up",  setup: false, now: "07:20", trip_state: "planned",   connection_state: "holds" },
    on_time:   { label: "On time",         setup: true,  now: "07:20", trip_state: "today",     connection_state: "holds",
                 times: { "before": "07:20", "leg-1": "07:25", "leg-2": "07:40", "leg-3": "09:05", "leg-4": "09:17", "after": "09:23" } },
    late:      { label: "Late",            setup: true,  now: "07:40", trip_state: "today",     connection_state: "lost",
                 times: { "before": "07:20", "leg-1": "07:25", "leg-2": "07:40", "leg-3": "09:20", "leg-4": "09:33", "after": "09:39" } },
    cancelled: { label: "Cancelled",       setup: true,  now: "07:40", trip_state: "broken",    connection_state: "lost",
                 times: { "before": "07:20", "leg-1": "07:25", "leg-2": "07:40", "leg-3": "09:32", "leg-4": "09:44", "after": "09:51" } }
  }
};
