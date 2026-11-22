/*
 * Dataset: ways
 * What it holds: the ways from door to door for a search (SPEC-08) and, for the ways out when the trip breaks (SPEC-05),
 *   the run they replace and the last time any way reaches the door; the ways out themselves are the alternatives of
 *   that run in runs.js, the same the Run page shows, so that both pages agree.
 * Used by: ways.html (search), run.html (ways_out)
 * Fields: search{from, to, day, when ("leave_after" or "arrive_by"), time, back_after,
 *   ways[{id, label, legs[{mode, text}], dep, arr_door, minutes, price, operators, back_home, fullness, sold_out, source}]},
 *   ways_out{run, last_way}
 *   price or back_home null: unknown, and said so (SPEC-08 rule 5)
 * Source: mock. Times follow runs.js where the run is there (9707, M2); the others are realistic, from public
 *   timetables (regional ~1h50, Italo ~1h12, FlixBus to Lampugnano ~2h10), not real departures.
 * Updated: 2026-11-22
 */
window.DATA = window.DATA || {};
DATA.ways = {
  search: {
    from: "home", to: "apartment", day: "Tuesday 17 Nov", when: "arrive_by", time: "09:30",
    back_after: "18:00", // the end of the working day, for the way back (SPEC-08 rule 4)
    ways: [
      { id: "W1", label: "Car, high-speed train, underground", source: "Schedule",
        legs: [{ mode: "car", text: "Car 15 min" }, { mode: "train", text: "High-speed 9707" }, { mode: "underground", text: "M2" }, { mode: "walk", text: "On foot 5 min" }],
        dep: "07:20", arr_door: "09:23", minutes: 123, price: "€ 42.40 (train 32.90, underground 2.20, car park 7.30)",
        operators: "National rail operator, City transport, Car park operator", back_home: "20:05, with the 18:35 from Centrale",
        fullness: "Seats likely" },
      { id: "W2", label: "Bus, regional train, underground", source: "Schedule",
        legs: [{ mode: "bus", text: "Bus 25 min" }, { mode: "train", text: "Regional 2610" }, { mode: "underground", text: "M2" }, { mode: "walk", text: "On foot 5 min" }],
        dep: "07:05", arr_door: "09:48", minutes: 163, price: "€ 16.15 (bus 1.70, train 12.25, underground 2.20)",
        operators: "City buses of Verona, Regional rail operator, City transport", back_home: "20:45, with the 18:25 regional",
        fullness: "Busy: standing likely after Brescia" },
      { id: "W3", label: "Car, high-speed train of another operator, underground", source: "Schedule",
        legs: [{ mode: "car", text: "Car 15 min" }, { mode: "train", text: "High-speed Italo 8913" }, { mode: "underground", text: "M2" }, { mode: "walk", text: "On foot 5 min" }],
        dep: "07:45", arr_door: "09:36", minutes: 111, price: "€ 39.20 (train 29.70, underground 2.20, car park 7.30)",
        operators: "Private rail operator, City transport, Car park operator", back_home: "20:12, with the 18:40 from Centrale",
        sold_out: true },
      { id: "W4", label: "Bus, coach, underground", source: "Schedule",
        legs: [{ mode: "bus", text: "Bus 20 min" }, { mode: "coach", text: "Coach to Lampugnano" }, { mode: "underground", text: "M1" }, { mode: "walk", text: "On foot 5 min" }],
        dep: "07:05", arr_door: "10:15", minutes: 190, price: "€ 13.89 (bus 1.70, coach from 9.99, underground 2.20)",
        operators: "City buses of Verona, Coach operator, City transport", back_home: "21:35, with the 19:00 coach",
        fullness: "Seats likely" },
      { id: "W5", label: "Bus, shared car, underground", source: "Ride-sharing offer",
        legs: [{ mode: "bus", text: "Bus 15 min" }, { mode: "car", text: "Shared car (BlaBlaCar)" }, { mode: "underground", text: "M1" }, { mode: "walk", text: "On foot 5 min" }],
        dep: "07:15", arr_door: "09:50", minutes: 155, price: "€ 17.90 (bus 1.70, shared car 14.00 set by the driver, underground 2.20)",
        operators: "City buses of Verona, a driver on BlaBlaCar, City transport", back_home: null,
        fullness: "1 seat left" },
      // the car between cities is one leg from door to door (SPEC-08 rule 1); which car costs count is OQ-20: provisional, tolls
      { id: "W6", label: "Car the whole way", source: "Third party, with traffic",
        legs: [{ mode: "car", text: "Car 165 km" }],
        dep: "07:00", arr_door: "09:10", minutes: 130, price: "€ 13 toll, approximate, + fuel unknown",
        operators: "Motorway operator", back_home: "20:15 to 20:45, with evening traffic" }
    ]
  },
  ways_out: {
    run: "HS9707",     // the run whose alternatives are the ways out
    last_way: "21:35"  // after this no way reaches the Milan apartment today
  }
};
