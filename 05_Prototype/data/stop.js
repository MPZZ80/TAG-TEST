/*
 * Dataset: stop
 * What it holds: the run the commuter is on and the stop to get off (SPEC-15), and how the warning is repeated.
 * Used by: stop.html
 * Fields: run, stop, from_trip, stops[], warn_before, repeat_every, repeat_max
 * Source: mock
 * Updated: 2026-11-16
 */
window.DATA = window.DATA || {};
DATA.stop = {
  run: "HS9722",
  stop: "Verona Porta Nuova",   // given by the trip of the day
  from_trip: true,
  stops: ["Brescia", "Desenzano", "Peschiera", "Verona Porta Nuova", "Vicenza"], // to choose from when boarding
  // how far before and how often: provisional, OQ-29; reaching someone asleep is OQ-30
  warn_before: "5 minutes before the stop",
  repeat_every: "2 minutes",
  repeat_max: 3
};
