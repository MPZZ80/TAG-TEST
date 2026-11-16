/*
 * Dataset: ways
 * What it holds: the ways from door to door for a search (SPEC-09) and the ways out when the trip breaks (SPEC-06).
 * Used by: ways.html, ways_out.html
 * Fields: search{from, to, day, leave_after, ways[{id, label, legs[], dep, arr_door, minutes, price, operators, back_home}]},
 *   ways_out{from, last_way, ways[{id, label, dep, arr_door, cost, ticket_valid, fullness, fullness_source}]}
 * Source: mock
 * Updated: 2026-11-16
 */
window.DATA = window.DATA || {};
DATA.ways = {
  search: {
    from: "Home", to: "Office", day: "Tuesday 17 Nov", leave_after: "07:00",
    ways: [
      { id: "W1", label: "Lift, high-speed train, underground", legs: ["Lift 15 min", "High-speed 9707", "M3", "Walk 6 min"],
        dep: "07:28", arr_door: "09:18", minutes: 110, price: "€ 32.90", operators: "National rail operator, City transport",
        back_home: "18:48 with the 17:35 from Centrale" },
      { id: "W2", label: "Lift, regional train, underground", legs: ["Lift 15 min", "Regional 2610", "M3", "Walk 6 min"],
        dep: "07:10", arr_door: "09:42", minutes: 152, price: "€ 13.25", operators: "Regional rail operator, City transport",
        back_home: "19:35 with the 17:25 regional" },
      { id: "W3", label: "Car, parking at the station, high-speed train", legs: ["Car 15 min", "Station car park", "High-speed 9707", "M3", "Walk 6 min"],
        dep: "07:25", arr_door: "09:18", minutes: 113, price: "€ 40.90", operators: "Car park operator, National rail operator, City transport",
        back_home: "19:05 with the 17:35 from Centrale" },
      // which car costs count is OQ-20: provisional, tolls and parking; fuel is unknown
      { id: "W4", label: "Car the whole way", legs: ["Car 160 km"],
        dep: "07:00", arr_door: "09:10", minutes: 130, price: "€ 35.40 + fuel unknown", operators: "Motorway operator, Car park",
        back_home: "20:00 to 20:30 with evening traffic" }
    ]
  },
  ways_out: {
    from: "Verona Porta Nuova",
    last_way: "21:35", // after this no way reaches the office today
    ways: [
      { id: "O1", label: "Next high-speed train, 08:15", dep: "08:15", arr_door: "09:48", cost: "€ 0, your ticket can be moved",
        ticket_valid: true, fullness: "Expected full, standing likely", fullness_source: "Operator, estimate" },
      { id: "O2", label: "Regional train, 07:58", dep: "07:58", arr_door: "10:12", cost: "€ 13.25", // showing the cost is OQ-12
        ticket_valid: false, fullness: "Seats likely", fullness_source: "Other travellers, 4 reports" },
      { id: "O3", label: "Back home for the car", dep: "07:55", arr_door: "10:05", cost: "€ 35.40 + fuel unknown",
        ticket_valid: false, fullness: "—", fullness_source: "—" }
    ]
  }
};
