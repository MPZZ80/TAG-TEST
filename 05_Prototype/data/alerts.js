/*
 * Dataset: alerts
 * What it holds: the alert settings of the usual trip (SPEC-04): kinds of event and moments of a travel day,
 *   the alerts sent in each scenario, and the works and strikes announced for coming travel days.
 * Used by: alerts.html
 * Fields: kinds[{id, label, on}], moments[{id, label, from, to, heard}], sent{key: [{time, text, source}]}, announced[{date, text, source, told}]
 * Source: mock
 * Updated: 2026-11-16
 */
window.DATA = window.DATA || {};
DATA.alerts = {
  kinds: [
    { id: "delay", label: "Delay", on: true },
    { id: "cancellation", label: "Cancellation", on: true },
    { id: "strike", label: "Strike", on: true },
    { id: "works", label: "Works", on: true },
    { id: "platform", label: "Platform change", on: false }
  ],
  moments: [
    { id: "wake", label: "When I wake up", from: "06:30", to: "06:45", heard: false },
    // heard: a form taken in without looking; how is OQ-03
    { id: "way", label: "On the way to the station", from: "07:25", to: "07:45", heard: true }
  ],
  // "nothing changed" is never sent: OQ-07
  sent: {
    on_time:   [],
    late:      [{ time: "07:38", text: "High-speed 9707 is 18 minutes late: expected at 08:03, platform 5.", source: "Operator, live, confirmed" }],
    cancelled: [{ time: "07:31", text: "High-speed 9707 is cancelled today. Ways out are ready.", source: "Operator, live, confirmed" }]
  },
  // told as soon as announced, and again the evening before: provisional, OQ-08
  announced: [
    { date: "Wednesday 25 Nov", text: "National rail strike, 09:00 – 17:00. Guaranteed trains until 08:59.", source: "Operator notice", told: "Announced 13 Nov; reminder on 24 Nov at 19:00" },
    { date: "From Monday 30 Nov", text: "Works between Brescia and Verona: trains up to 10 minutes slower.", source: "Schedule", told: "Announced 16 Nov" }
  ]
};
