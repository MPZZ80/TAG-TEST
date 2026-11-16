/*
 * Dataset: runs
 * What it holds: the runs of the commuter's trips, planned, and their real state in each scenario,
 *   as facts with their source, time and status (SPEC-01, SPEC-03).
 * Used by: today.html, run.html, connection.html, alerts.html, timing.html, stop.html
 * Fields: id{service, operator, from, to, dep, arr, platform_dep, usual_platform, platform_arr, usual_delay, alternatives[], next[],
 *   by_scenario{key: {state, delay, exp_dep, exp_arr, platform, platform_may_change, position, reason, facts[{label, value, source, time, status}]}}}
 * Source: mock
 * Updated: 2026-11-16
 */
window.DATA = window.DATA || {};
DATA.runs = {
  HS9707: {
    service: "High-speed 9707", operator: "National rail operator",
    from: "Verona Porta Nuova", to: "Milano Centrale", dep: "07:45", arr: "08:58",
    platform_dep: "4", usual_platform: "4", platform_arr: "21",
    // record of past runs; how many runs it covers is OQ-06 (provisional: the last 20 runs)
    usual_delay: { minutes: 6, runs: 20 },
    alternatives: ["08:15, high-speed 9715", "09:15, high-speed 9723", "07:58, regional 2610"], // other runs the commuter can take today
    by_scenario: {
      none:    { state: "planned", delay: 0, exp_dep: "07:45", exp_arr: "08:58", platform: "4", position: "Not yet departed",
                 facts: [{ label: "Departure", value: "07:45", source: "Schedule", time: "—", status: "planned" }] },
      on_time: { state: "on time", delay: 0, exp_dep: "07:45", exp_arr: "08:58", platform: "4", position: "Left Vicenza at 07:09",
                 facts: [
                   { label: "Departure", value: "07:45", source: "Operator, live", time: "07:18", status: "confirmed" },
                   { label: "Position",  value: "Left Vicenza at 07:09", source: "Operator, live", time: "07:18", status: "confirmed" }] },
      late:    { state: "late", delay: 18, exp_dep: "08:03", exp_arr: "09:16", platform: "5", platform_may_change: true,
                 position: "Stopped before Vicenza", reason: "A slower train ahead",
                 facts: [
                   { label: "Departure", value: "08:03 (+18)", source: "Operator, live", time: "07:38", status: "confirmed" },
                   { label: "Departure", value: "08:07 (+22)", source: "Other travellers, 3 reports", time: "07:36", status: "reported" },
                   { label: "Reason",    value: "A slower train ahead", source: "Operator, live", time: "07:38", status: "confirmed" },
                   { label: "Platform",  value: "5 instead of 4", source: "Station display", time: "07:35", status: "estimated" }] },
      cancelled: { state: "cancelled", delay: 0, exp_dep: "—", exp_arr: "—", platform: "—", position: "Not running",
                 reason: "Fault on the train",
                 facts: [
                   { label: "Cancelled", value: "Not running today", source: "Operator, live", time: "07:31", status: "confirmed" },
                   { label: "Reason",    value: "Fault on the train", source: "Operator, live", time: "07:31", status: "confirmed" }] }
    }
  },
  "M3-0910": {
    service: "Underground M3", operator: "City transport",
    from: "Milano Centrale", to: "Repubblica", dep: "09:10", arr: "09:12",
    platform_dep: "M3 southbound", usual_platform: "M3 southbound", platform_arr: "—",
    usual_delay: { minutes: 0, runs: 20 },
    next: [{ dep: "09:22", arr: "09:24" }, { dep: "09:28", arr: "09:30" }], // the next runs, every 6 minutes
    by_scenario: {
      none:      { state: "planned", delay: 0, exp_dep: "09:10", exp_arr: "09:12", platform: "M3 southbound", facts: [] },
      on_time:   { state: "on time", delay: 0, exp_dep: "09:10", exp_arr: "09:12", platform: "M3 southbound",
                   facts: [{ label: "Service", value: "Regular, every 6 minutes", source: "Operator, live", time: "07:15", status: "confirmed" }] },
      late:      { state: "on time", delay: 0, exp_dep: "09:10", exp_arr: "09:12", platform: "M3 southbound",
                   facts: [{ label: "Service", value: "Regular, every 6 minutes", source: "Operator, live", time: "07:35", status: "confirmed" }] },
      cancelled: { state: "on time", delay: 0, exp_dep: "09:10", exp_arr: "09:12", platform: "M3 southbound",
                   facts: [{ label: "Service", value: "Regular, every 6 minutes", source: "Operator, live", time: "07:35", status: "confirmed" }] }
    }
  },
  HS9722: {
    service: "High-speed 9722", operator: "National rail operator",
    from: "Milano Centrale", to: "Verona Porta Nuova", dep: "17:35", arr: "18:48",
    platform_dep: "14", usual_platform: "14", platform_arr: "3",
    usual_delay: { minutes: 9, runs: 20 },
    by_scenario: {
      none:      { state: "planned", delay: 0, exp_dep: "17:35", exp_arr: "18:48", platform: "14", facts: [] },
      on_time:   { state: "on time", delay: 0, exp_dep: "17:35", exp_arr: "18:48", platform: "14",
                   facts: [{ label: "Arrival", value: "18:48", source: "Operator, live", time: "18:20", status: "confirmed" }] },
      late:      { state: "late", delay: 12, exp_dep: "17:47", exp_arr: "19:00", platform: "14",
                   facts: [{ label: "Arrival", value: "19:00 (+12)", source: "Operator, live", time: "18:20", status: "confirmed" }] },
      cancelled: { state: "late", delay: 12, exp_dep: "17:47", exp_arr: "19:00", platform: "14",
                   facts: [{ label: "Arrival", value: "19:00 (+12)", source: "Operator, live", time: "18:20", status: "confirmed" }] }
    }
  }
};
