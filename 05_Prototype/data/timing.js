/*
 * Dataset: timing
 * What it holds: the usual trip timed at the length each part really takes (SPEC-09): each leg and way through a
 *   station, planned and real, with its source; the works announced on the route; the arrival at the door, planned,
 *   expected at real times and with the works.
 * Used by: way.html
 * Fields: trip, way (the way of ways.js that is this trip), legs[{label, stage, planned, real, source, note}],
 *   works{text, minutes, from}, arrival{planned, expected, works}
 * Source: mock. planned and real are minutes; where real walking times come from is OQ-21.
 * Updated: 2026-11-22
 */
window.DATA = window.DATA || {};
DATA.timing = {
  trip: "T1", way: "W1",
  legs: [
    { label: "Car, home to the car park of Verona Porta Nuova", stage: "first mile", planned: 15, real: 18, source: "Third party, usual traffic at 07:20", note: "Your own leg" },
    { label: "Car park to platform 4", stage: "first mile", planned: 2, real: 5, source: "Other travellers, 6 reports", note: "Through the underpass" },
    { label: "High-speed 9707 to Milano Centrale", stage: "main leg", planned: 73, real: 79, source: "Record of past runs", note: "Usually 6 minutes late (last 20 runs)" },
    { label: "Platform 21 to the M2", stage: "transfer", planned: 3, real: 6, source: "Other travellers, 9 reports", note: "Board at the front, coach 1" },
    { label: "Underground M2 to Loreto", stage: "transfer", planned: 3, real: 3, source: "Schedule" },
    { label: "Loreto to the Milan apartment", stage: "last mile", planned: 5, real: 8, source: "Other travellers, 3 reports", note: "Way round the works in Via Padova" }
  ],
  // which works and how far ahead they are known: from the operator's notices (schedule)
  works: { text: "Works between Brescia and Milan: the high-speed trains run slower", minutes: 10, from: "Monday 30 Nov" },
  // expected: the 9707 as late as usual reaches the M2 of 09:16, and the walk is 8 minutes; works: 10 minutes more
  arrival: { planned: "09:20", expected: "09:27", works: "09:37" }
};
