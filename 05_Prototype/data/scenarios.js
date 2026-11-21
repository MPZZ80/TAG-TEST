/*
 * Dataset: scenarios
 * What it holds: the scenarios the configurator switches between, and the mock clock of each. Which one a page
 *   opens on is in config.js; where the commuter is, too.
 * Used by: every screen (through common.js)
 * Fields: list{key: {label, setup, now, trip_state, connection_state}}
 * Source: mock
 * Updated: 2026-11-21
 */
window.DATA = window.DATA || {};
DATA.scenarios = {
  list: {
    // setup: false = the commuter has entered nothing yet (SPEC-01, "Nothing set up yet")
    none:      { label: "Nothing set up",  setup: false, now: "07:20", trip_state: "planned",   connection_state: "holds" },
    on_time:   { label: "On time",         setup: true,  now: "07:20", trip_state: "today",     connection_state: "holds" },
    late:      { label: "Late",            setup: true,  now: "07:40", trip_state: "today",     connection_state: "lost" },
    cancelled: { label: "Cancelled",       setup: true,  now: "07:40", trip_state: "broken",    connection_state: "lost" }
  }
};
