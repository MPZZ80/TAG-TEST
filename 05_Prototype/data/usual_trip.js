/*
 * Dataset: usual_trip
 * What it holds: the commuter's usual morning trip, door to door, leg by leg.
 * Used by: index.html, trip.html, contacts.html
 * Fields: name, main_run{line, time, from, to, operator}, change{station, line, time},
 *   legs[{stage, mode, from, to, departs, arrives, line, operator}]
 *   stage is first mile, main leg, transfer or last mile (SPEC-01)
 * Source: mock
 * Updated: 2026-11-09
 */
window.DATA = window.DATA || {};
DATA.usual_trip = {
  name: "Home to office",
  main_run: { line: "S10", time: "7:42", from: "Como San Giovanni", to: "Lugano", operator: "TILO" },
  change: { station: "Lugano", line: "Bus 2", time: "8:23" },
  legs: [
    { stage: "first mile", mode: "walk", from: "Home, Como", to: "Como San Giovanni", departs: "7:32", arrives: "7:40" },
    { stage: "main leg", mode: "train", line: "S10", operator: "TILO", from: "Como San Giovanni", to: "Lugano", departs: "7:42", arrives: "8:13" },
    { stage: "transfer", mode: "bus", line: "Bus 2", operator: "TPL", from: "Lugano station", to: "Lugano Cassarate", departs: "8:23", arrives: "8:36" },
    { stage: "last mile", mode: "walk", from: "Lugano Cassarate", to: "Office, Lugano Cassarate", departs: "8:36", arrives: "8:41" }
  ]
};
