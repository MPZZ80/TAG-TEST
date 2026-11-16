/*
 * Dataset: clock
 * What it holds: the mock day shown on every screen; the hour comes from the scenario (scenarios.js).
 * Used by: every screen (through common.js)
 * Fields: date, weekday
 * Source: mock
 * Updated: 2026-11-16
 */
window.DATA = window.DATA || {};
DATA.clock = {
  date: "17 Nov 2026",
  weekday: "Tuesday" // a travel day of the usual trip (profile.js)
};
