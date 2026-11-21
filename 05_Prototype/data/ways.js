/*
 * Dataset: ways
 * What it holds: the ways from door to door for a search (SPEC-08) and, for the ways out when the trip breaks (SPEC-05),
 *   the run they replace and the last time any way reaches the door; the ways out themselves are the alternatives of
 *   that run in runs.js, the same the Run page shows, so that both pages agree.
 * Used by: ways.html, ways_out.html
 * Fields: search{from, to, day, leave_after, ways[{id, label, legs[], dep, arr_door, minutes, price, operators, back_home}]},
 *   ways_out{run, last_way}
 * Source: mock
 * Updated: 2026-11-21
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
    run: "HS9707",     // the run whose alternatives are the ways out
    last_way: "21:35"  // after this no way reaches the Milan apartment today
  }
};
