/*
 * Dataset: plan_ways
 * What it holds: every way to make the trip door to door for one planned day,
 *   compared side by side: train, car, lift by a contact, bus and train.
 * Used by: plan.html
 * Fields: query{door, time, day}; ways[{id, mode, name, departs, arrives, duration_min,
 *   price, operators[], latest_leave}]
 *   price: null when unknown; latest_leave: latest time to leave home and still arrive
 * Source: mock
 * Updated: 2026-11-09
 */
window.DATA = window.DATA || {};
DATA.plan_ways = {
  query: { door: "Office, Lugano Cassarate", time: "9:00", day: "Monday 16 November" },
  ways: [
    { id: "train", mode: "train", name: "Usual trip: S10 and Bus 2", departs: "7:32", arrives: "8:41", duration_min: 69, price: "Pass", operators: ["TILO", "TPL"], latest_leave: "7:47" },
    { id: "car", mode: "car", name: "Car via A9 and Chiasso customs", departs: "7:40", arrives: "8:35", duration_min: 55, price: null, operators: ["you"], latest_leave: "7:55" },
    { id: "lift", mode: "lift", name: "Lift from Dad to Chiasso, then S10", departs: "7:45", arrives: "8:58", duration_min: 73, price: "Pass", operators: ["Dad", "TILO", "TPL"], latest_leave: "7:45" },
    { id: "bus", mode: "bus", name: "C1 bus to Chiasso, then S10", departs: "7:22", arrives: "8:52", duration_min: 90, price: "CHF 4.20 + pass", operators: ["ASF", "TILO", "TPL"], latest_leave: "7:22" }
  ]
};
