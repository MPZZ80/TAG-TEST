/*
 * Dataset: clock
 * What it holds: the mock day shown on every screen; the hour comes from the scenario (scenarios.js).
 * Used by: every screen (through common.js)
 * Fields: date, weekday, iso, off_day{date, weekday, iso}
 * Source: mock
 * Updated: 2026-11-21
 */
window.DATA = window.DATA || {};
DATA.clock = {
  date: "17 Nov 2026",
  weekday: "Tuesday", // a travel day of the usual trip (profile.js)
  iso: "2026-11-17",
  // the day shown when the configurator says it is not a travel day; the next trip is the next travel day's
  off_day: { date: "21 Nov 2026", weekday: "Saturday", iso: "2026-11-21" }
};
