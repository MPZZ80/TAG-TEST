/*
 * Dataset: timing
 * What it holds: the real length of each leg and way through a station of the usual trip (SPEC-10),
 *   next to the planned one, and the works announced on the route.
 * Used by: timing.html
 * Fields: legs[{label, stage, planned, real, source, note}], works{text, minutes, from}
 * Source: mock
 * Updated: 2026-11-16
 */
window.DATA = window.DATA || {};
DATA.timing = {
  // planned and real are minutes; where real walking times come from is OQ-21
  legs: [
    { label: "Lift, home to Verona Porta Nuova", stage: "first mile", planned: 15, real: 15, source: "The commuter (own leg)" },
    { label: "Station entrance to platform 4", stage: "first mile", planned: 2, real: 4, source: "Other travellers, 6 reports", note: "Underpass" },
    { label: "High-speed 9707 to Milano Centrale", stage: "main leg", planned: 73, real: 79, source: "Record of past runs", note: "Usually 6 minutes late (last 20 runs)" },
    { label: "Platform 21 to the M3", stage: "transfer", planned: 3, real: 7, source: "Other travellers, 9 reports", note: "Board at the front, coach 1" },
    { label: "M3 to Repubblica", stage: "transfer", planned: 2, real: 2, source: "Schedule" },
    { label: "Repubblica to the office", stage: "last mile", planned: 4, real: 6, source: "Other travellers, 3 reports" }
  ],
  works: { text: "Works between Brescia and Verona", minutes: 10, from: "Monday 30 Nov" }
};
