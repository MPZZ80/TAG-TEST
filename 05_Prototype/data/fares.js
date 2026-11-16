/*
 * Dataset: fares
 * What it holds: the fares for the usual trip and the days actually travelled over a period (SPEC-12).
 * Used by: fare.html
 * Fields: period, days_travelled, trips_per_day, held, options[{id, name, kind, price, rides}]
 * Source: mock
 * Updated: 2026-11-16
 */
window.DATA = window.DATA || {};
DATA.fares = {
  period: "the last 4 weeks", // the period over which days are counted is OQ-25 (provisional: 4 weeks)
  days_travelled: 6,          // from completed trips (SPEC-05)
  trips_per_day: 2,           // outward and return
  held: "single",
  options: [
    // kind: single = price per trip; carnet = price for a number of rides; pass = price for the period
    { id: "single", name: "Single tickets",           kind: "single", price: 32.90 },
    { id: "carnet", name: "Carnet of 10 trips",       kind: "carnet", price: 279.00, rides: 10 },
    { id: "pass",   name: "Monthly pass, Verona–Milan", kind: "pass", price: 389.00 }
  ]
};
