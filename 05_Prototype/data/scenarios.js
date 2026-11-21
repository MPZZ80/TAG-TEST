/*
 * Dataset: scenarios
 * What it holds: the scenarios the selector switches between, and the mock clock of each.
 * Used by: every screen (through common.js)
 * Fields: default, list{key: {label, setup, now, trip_state, connection_state, passenger{at, lat, lon, started}}}
 * Source: mock
 * Updated: 2026-11-21
 */
window.DATA = window.DATA || {};
DATA.scenarios = {
  default: "on_time",
  list: {
    // setup: false = the commuter has entered nothing yet (SPEC-01, "Nothing set up yet")
    // passenger: where the commuter is (from their position, with consent); the leg that starts there is in progress,
    // the legs before it are completed, the legs after it to do; started: false means the trip has not begun
    none:      { label: "Nothing set up",  setup: false, now: "07:20", trip_state: "planned",   connection_state: "holds" },
    on_time:   { label: "On time",         setup: true,  now: "07:20", trip_state: "today",     connection_state: "holds",
                 passenger: { at: "Home", lat: 45.4378, lon: 10.9403, started: false } },
    late:      { label: "Late",            setup: true,  now: "07:40", trip_state: "today",     connection_state: "lost",
                 passenger: { at: "Verona Porta Nuova", lat: 45.4292, lon: 10.9822, started: true } },
    cancelled: { label: "Cancelled",       setup: true,  now: "07:40", trip_state: "broken",    connection_state: "lost",
                 passenger: { at: "Verona Porta Nuova", lat: 45.4292, lon: 10.9822, started: true } }
  }
};
