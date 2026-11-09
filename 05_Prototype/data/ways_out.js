/*
 * Dataset: ways_out
 * What it holds: the ways that still reach the office when today's usual trip breaks
 *   (train late past the limit, or cancelled), from Como San Giovanni at 7:45.
 * Used by: ways_out.html
 * Fields: [{id, name, legs, departs, arrives, cost, ticket_valid, fullness, fullness_source,
 *   seats_expected}]
 *   cost: null when unknown; ticket_valid: whether the commuter's pass covers it
 * Source: mock
 * Updated: 2026-11-09
 */
window.DATA = window.DATA || {};
DATA.ways_out = [
  {
    id: "bus_train",
    name: "Bus to Chiasso, then train",
    legs: "C1 bus 7:52 to Chiasso · S10 8:12 to Lugano · Bus 2",
    departs: "7:52", arrives: "9:02", cost: "CHF 4.20",
    ticket_valid: false, fullness: "seats free", fullness_source: "other travellers, 6 min ago",
    seats_expected: true
  },
  {
    id: "next_train",
    name: "Next train",
    legs: "S10 8:12 to Lugano · Bus 2",
    departs: "8:12", arrives: "8:58", cost: "Included",
    ticket_valid: true, fullness: "packed, standing only", fullness_source: "operator, 3 min ago",
    seats_expected: false
  },
  {
    id: "lift",
    name: "Lift to Chiasso with a colleague",
    legs: "Car 7:50 to Chiasso · S10 8:12 · Bus 2",
    departs: "7:50", arrives: "9:00", cost: null,
    ticket_valid: true, fullness: "1 seat offered", fullness_source: "colleague, 2 min ago",
    seats_expected: true
  }
];
