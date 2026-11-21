/*
 * Dataset: runs
 * What it holds: the runs of the commuter's trips, planned, and their real state in each scenario,
 *   as facts with their source, time and status (SPEC-01, SPEC-03).
 * Used by: today.html, run.html, connection.html, alerts.html, timing.html, stop.html
 * Fields: id{service, operator, from, to, dep, arr, platform_dep, usual_platform, platform_arr, usual_delay, next[],
 *   approach[{name, lat, lon}], stops[{name, time, lat, lon}], by_scenario.<key>.pos{lat, lon},
 *   alternatives[{short, id, mode, service, operator, from, to, dep, arr, door_arrival, ticket_valid, cost, source, note,
 *     legs_after[{mode, service, from, to, dep, arr, minutes, stage}], route[{name, lat, lon, mode}]}],
 *   by_scenario{key: {state, delay, exp_dep, exp_arr, platform, platform_may_change, position, reason, facts[{label, value, source, time, status}]}}}
 * Source: mock
 * Updated: 2026-11-21
 */
window.DATA = window.DATA || {};
DATA.runs = {
  HS9707: {
    service: "High-speed 9707", operator: "National rail operator",
    from: "Verona Porta Nuova", to: "Milano Centrale", dep: "07:45", arr: "08:58",
    platform_dep: "4", usual_platform: "4", platform_arr: "21",
    // record of past runs; how many runs it covers is OQ-06 (provisional: the last 20 runs)
    // the planned stops of the run; the expected times move with the expected departure (SPEC-02)
    // the way the train comes from before the commuter's stop, drawn faint on the map
    approach: [{ name: "Vicenza", lat: 45.5455, lon: 11.5410 }, { name: "San Bonifacio", lat: 45.3960, lon: 11.2730 }],
    stops: [{ name: "Verona Porta Nuova", time: "07:45", lat: 45.4290, lon: 10.9825 }, { name: "Brescia", time: "08:20", lat: 45.5329, lon: 10.2129 }, { name: "Milano Centrale", time: "08:58", lat: 45.4862, lon: 9.2040 }],
    usual_delay: { minutes: 6, runs: 20 },
    // other ways to make this leg, shown on the Run page when the run is late or cancelled (SPEC-02).
    // Realistic mock: times and durations from public timetables (Frecciarossa ~1h13, Italo ~1h12,
    // Trenord RE6 ~1h50 via Brescia, FlixBus Verona Viale Palladio to Milano Lampugnano ~2h10); not real departures.
    // the legs from this one to the door if the commuter chooses it (legs_after), and the points of its route for the map.
    // Coordinates are approximate; the map is a sketch drawn from them, not a real map (OQ-36).
    alternatives: [
      { short: "High-speed", id: "A1", mode: "train", service: "High-speed 9715", operator: "National rail operator", from: "Verona Porta Nuova", to: "Milano Centrale",
        dep: "08:15", arr: "09:28", door_arrival: "09:51", ticket_valid: true, cost: "€ 0, your ticket can be moved", source: "Schedule",
        legs_after: [
          { mode: "train",       service: "High-speed 9715", from: "Verona Porta Nuova", to: "Milano Centrale", dep: "08:15", arr: "09:28", stage: "main leg" },
          { mode: "underground", service: "Underground M2",  from: "Milano Centrale FS", to: "Loreto",          dep: "09:40", arr: "09:43", stage: "transfer" },
          { mode: "walk",        from: "Loreto", to: "Milan apartment", minutes: 8, stage: "last mile" }
        ],
        route: [
          { name: "Verona Porta Nuova", lat: 45.4290, lon: 10.9825, mode: "train" },
          { name: "Desenzano", lat: 45.4706, lon: 10.5395, mode: "train" },
          { name: "Brescia", lat: 45.5329, lon: 10.2129, mode: "train" },
          { name: "Milano Centrale", lat: 45.4862, lon: 9.2040, mode: "underground" },
          { name: "Loreto", lat: 45.4858, lon: 9.2160, mode: "walk" },
          { name: "Milan apartment", lat: 45.4889, lon: 9.2205 }
        ] },
      { short: "Italo", id: "A2", mode: "train", service: "Italo high-speed 8925", operator: "Private rail operator", from: "Verona Porta Nuova", to: "Milano Centrale",
        dep: "08:08", arr: "09:20", door_arrival: "09:43", ticket_valid: false, cost: "€ 24.90", source: "Schedule",
        legs_after: [
          { mode: "train",       service: "Italo high-speed 8925", from: "Verona Porta Nuova", to: "Milano Centrale", dep: "08:08", arr: "09:20", stage: "main leg" },
          { mode: "underground", service: "Underground M2",        from: "Milano Centrale FS", to: "Loreto",          dep: "09:32", arr: "09:35", stage: "transfer" },
          { mode: "walk",        from: "Loreto", to: "Milan apartment", minutes: 8, stage: "last mile" }
        ],
        route: [
          { name: "Verona Porta Nuova", lat: 45.4290, lon: 10.9825, mode: "train" },
          { name: "Brescia", lat: 45.5329, lon: 10.2129, mode: "train" },
          { name: "Milano Centrale", lat: 45.4862, lon: 9.2040, mode: "underground" },
          { name: "Loreto", lat: 45.4858, lon: 9.2160, mode: "walk" },
          { name: "Milan apartment", lat: 45.4889, lon: 9.2205 }
        ] },
      { short: "Regional", id: "A3", mode: "train", service: "Regional RE6 2610", operator: "Regional rail operator", from: "Verona Porta Nuova", to: "Milano Centrale",
        dep: "07:58", arr: "09:48", door_arrival: "10:11", ticket_valid: false, cost: "€ 13.25", source: "Schedule", note: "Stops at Brescia; no seat booking",
        legs_after: [
          { mode: "train",       service: "Regional RE6 2610", from: "Verona Porta Nuova", to: "Milano Centrale", dep: "07:58", arr: "09:48", stage: "main leg" },
          { mode: "underground", service: "Underground M2",    from: "Milano Centrale FS", to: "Loreto",          dep: "10:00", arr: "10:03", stage: "transfer" },
          { mode: "walk",        from: "Loreto", to: "Milan apartment", minutes: 8, stage: "last mile" }
        ],
        route: [
          { name: "Verona Porta Nuova", lat: 45.4290, lon: 10.9825, mode: "train" },
          { name: "Peschiera", lat: 45.4386, lon: 10.6918, mode: "train" },
          { name: "Desenzano", lat: 45.4706, lon: 10.5395, mode: "train" },
          { name: "Brescia", lat: 45.5329, lon: 10.2129, mode: "train" },
          { name: "Treviglio", lat: 45.5160, lon: 9.5900, mode: "train" },
          { name: "Milano Centrale", lat: 45.4862, lon: 9.2040, mode: "underground" },
          { name: "Loreto", lat: 45.4858, lon: 9.2160, mode: "walk" },
          { name: "Milan apartment", lat: 45.4889, lon: 9.2205 }
        ] },
      { short: "FlixBus", id: "A4", mode: "coach", service: "FlixBus coach", operator: "Coach operator", from: "Verona, Viale Palladio", to: "Milano Lampugnano",
        dep: "08:20", arr: "10:30", door_arrival: "11:09", ticket_valid: false, cost: "€ 9.99", source: "Schedule",
        note: "5 minutes' walk from the station; underground M1 from Lampugnano straight to Loreto",
        legs_after: [
          { mode: "walk",        from: "Verona Porta Nuova", to: "Verona, Viale Palladio", minutes: 5, stage: "first mile" },
          { mode: "coach",       service: "FlixBus coach",  from: "Verona, Viale Palladio", to: "Milano Lampugnano", dep: "08:20", arr: "10:30", stage: "main leg" },
          { mode: "underground", service: "Underground M1", from: "Lampugnano", to: "Loreto", dep: "10:36", arr: "11:01", stage: "transfer" },
          { mode: "walk",        from: "Loreto", to: "Milan apartment", minutes: 8, stage: "last mile" }
        ],
        route: [
          { name: "Verona Porta Nuova", lat: 45.4290, lon: 10.9825, mode: "walk" },
          { name: "Viale Palladio", lat: 45.4310, lon: 10.9870, mode: "coach" },
          { name: "Brescia (motorway)", lat: 45.5250, lon: 10.1700, mode: "coach" },
          { name: "Bergamo (motorway)", lat: 45.6600, lon: 9.6700, mode: "coach" },
          { name: "Milano Lampugnano", lat: 45.4893, lon: 9.1265, mode: "underground" },
          { name: "Loreto", lat: 45.4858, lon: 9.2160, mode: "walk" },
          { name: "Milan apartment", lat: 45.4889, lon: 9.2205 }
        ] }
    ],
    by_scenario: {
      none:    { state: "planned", delay: 0, exp_dep: "07:45", exp_arr: "08:58", platform: "4", position: "Not yet departed",
                 facts: [{ label: "Departure", value: "07:45", source: "Schedule", time: "—", status: "planned" }] },
      // pos: where the train is now, for the map; simulated, it then moves along the route with a timer
      on_time: { state: "on time", delay: 0, exp_dep: "07:45", exp_arr: "08:58", platform: "4", position: "Left Vicenza at 07:09", pos: { lat: 45.4100, lon: 11.2000 },
                 facts: [
                   { label: "Departure", value: "07:45", source: "Operator, live", time: "07:18", status: "confirmed" },
                   { label: "Position",  value: "Left Vicenza at 07:09", source: "Operator, live", time: "07:18", status: "confirmed" }] },
      late:    { state: "late", delay: 18, exp_dep: "08:03", exp_arr: "09:16", platform: "5", platform_may_change: true, pos: { lat: 45.5300, lon: 11.4800 },
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
  "M2-0912": {
    service: "Underground M2", operator: "City transport",
    from: "Milano Centrale FS", to: "Loreto", dep: "09:12", arr: "09:15",
    platform_dep: "M2 towards Cologno / Gessate", usual_platform: "M2 towards Cologno / Gessate", platform_arr: "—",
    // the planned stops of the run; the expected times move with the expected departure (SPEC-02)
    stops: [{ name: "Milano Centrale FS", time: "09:12", lat: 45.4847, lon: 9.2050 }, { name: "Caiazzo", time: "09:13", lat: 45.4855, lon: 9.2105 }, { name: "Loreto", time: "09:15", lat: 45.4858, lon: 9.2160 }],
    usual_delay: { minutes: 0, runs: 20 },
    by_scenario: {
      none:      { state: "planned", delay: 0, exp_dep: "09:12", exp_arr: "09:15", platform: "M2 towards Cologno / Gessate", facts: [] },
      on_time:   { state: "on time", delay: 0, exp_dep: "09:12", exp_arr: "09:15", platform: "M2 towards Cologno / Gessate",
                   facts: [{ label: "Service", value: "Regular, every 4 minutes", source: "Operator, live", time: "07:15", status: "confirmed" }] },
      // the 9707 reaches Milano Centrale at 09:16, after the 09:12 has left: the commuter takes the 09:28 (connections.js, late)
      late:      { state: "on time", delay: 0, exp_dep: "09:28", exp_arr: "09:31", platform: "M2 towards Cologno / Gessate",
                   reason: "The 09:12 leaves before the late train arrives",
                   facts: [{ label: "Service", value: "Regular, every 4 minutes", source: "Operator, live", time: "07:35", status: "confirmed" },
                           { label: "Run you can reach", value: "09:28", source: "Schedule", time: "07:38", status: "estimated" }] },
      cancelled: { state: "on time", delay: 0, exp_dep: "09:12", exp_arr: "09:15", platform: "M2 towards Cologno / Gessate",
                   facts: [{ label: "Service", value: "Regular, every 4 minutes", source: "Operator, live", time: "07:35", status: "confirmed" }] }
    }
  },
  "M3-1722": {
    service: "Underground M3", operator: "City transport",
    from: "Repubblica", to: "Milano Centrale", dep: "17:22", arr: "17:24",
    platform_dep: "M3 northbound", usual_platform: "M3 northbound", platform_arr: "—",
    // the planned stops of the run; the expected times move with the expected departure (SPEC-02)
    stops: [{ name: "Repubblica", time: "17:22", lat: 45.4800, lon: 9.1975 }, { name: "Milano Centrale", time: "17:24", lat: 45.4862, lon: 9.2040 }],
    usual_delay: { minutes: 0, runs: 20 },
    by_scenario: {
      none:      { state: "planned", delay: 0, exp_dep: "17:22", exp_arr: "17:24", platform: "M3 northbound", facts: [] },
      on_time:   { state: "planned", delay: 0, exp_dep: "17:22", exp_arr: "17:24", platform: "M3 northbound",
                   facts: [{ label: "Service", value: "Regular, every 6 minutes", source: "Schedule", time: "—", status: "planned" }] },
      late:      { state: "planned", delay: 0, exp_dep: "17:22", exp_arr: "17:24", platform: "M3 northbound",
                   facts: [{ label: "Service", value: "Regular, every 6 minutes", source: "Schedule", time: "—", status: "planned" }] },
      cancelled: { state: "planned", delay: 0, exp_dep: "17:22", exp_arr: "17:24", platform: "M3 northbound",
                   facts: [{ label: "Service", value: "Regular, every 6 minutes", source: "Schedule", time: "—", status: "planned" }] }
    }
  },
  RE2614: {
    service: "Regional RE6 2614", operator: "Regional rail operator",
    from: "Verona Porta Nuova", to: "Brescia", dep: "08:28", arr: "09:12",
    platform_dep: "1", usual_platform: "1", platform_arr: "3",
    // the planned stops of the run; the expected times move with the expected departure (SPEC-02)
    stops: [{ name: "Verona Porta Nuova", time: "08:28", lat: 45.4290, lon: 10.9825 }, { name: "Peschiera del Garda", time: "08:40", lat: 45.4386, lon: 10.6918 }, { name: "Desenzano del Garda", time: "08:48", lat: 45.4706, lon: 10.5395 }, { name: "Brescia", time: "09:12", lat: 45.5329, lon: 10.2129 }],
    usual_delay: { minutes: 4, runs: 12 },
    by_scenario: {
      none:      { state: "planned", delay: 0, exp_dep: "08:28", exp_arr: "09:12", platform: "1", facts: [] },
      on_time:   { state: "planned", delay: 0, exp_dep: "08:28", exp_arr: "09:12", platform: "1",
                   facts: [{ label: "Departure", value: "08:28", source: "Schedule", time: "—", status: "planned" }] },
      late:      { state: "planned", delay: 0, exp_dep: "08:28", exp_arr: "09:12", platform: "1",
                   facts: [{ label: "Departure", value: "08:28", source: "Schedule", time: "—", status: "planned" }] },
      cancelled: { state: "planned", delay: 0, exp_dep: "08:28", exp_arr: "09:12", platform: "1",
                   facts: [{ label: "Departure", value: "08:28", source: "Schedule", time: "—", status: "planned" }] }
    }
  },
  HS9722: {
    service: "High-speed 9722", operator: "National rail operator",
    from: "Milano Centrale", to: "Verona Porta Nuova", dep: "17:35", arr: "18:48",
    platform_dep: "14", usual_platform: "14", platform_arr: "3",
    // the planned stops of the run; the expected times move with the expected departure (SPEC-02)
    stops: [{ name: "Milano Centrale", time: "17:35", lat: 45.4862, lon: 9.2040 }, { name: "Brescia", time: "18:12", lat: 45.5329, lon: 10.2129 }, { name: "Verona Porta Nuova", time: "18:48", lat: 45.4290, lon: 10.9825 }],
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
