/*
 * Dataset: leg_events
 * What it holds: what changes a leg the commuter makes on their own, in each scenario: traffic or an accident on a car leg,
 *   works or a closed street on a walking leg, with the extra minutes, the way round and the source (SPEC-02, SPEC-04).
 * Used by: run.html, today.html
 * Fields: <trip id>-<leg number>{by_scenario{key: [{kind, text, extra_minutes, detour, source, time, status, at{lat, lon}, detour_route[{lat, lon}]}]}}
 * Source: mock. In the product these would come from a traffic service and from the city's notices of road works:
 *   which ones is open (OQ-35); the prototype has no backend and calls no service.
 * Updated: 2026-11-21
 */
window.DATA = window.DATA || {};
DATA.leg_events = {
  // leg 1 of Home to Milan apartment: car, Home to Verona Porta Nuova
  "T1-1": {
    by_scenario: {
      none: [], on_time: [], cancelled: [],
      late: [{ kind: "accident", text: "Accident on the ring road near the station exit: queue", extra_minutes: 10,
               detour: "Through Corso Porta Nuova saves 4 minutes", source: "Traffic service", time: "07:32", status: "reported", at: { lat: 45.4320, lon: 10.9700 } }]
    }
  },
  // leg 4 of Home to Milan apartment: on foot, Loreto to the Milan apartment
  "T1-4": {
    by_scenario: {
      none: [],
      on_time:   [{ kind: "works", text: "Via Padova closed for works at the first block", extra_minutes: 3,
                    detour: "Walk along Viale Monza, then turn right", source: "City, notice of road works", time: "06:00", status: "confirmed", at: { lat: 45.4874, lon: 9.2186 },
                    detour_route: [{ lat: 45.4858, lon: 9.2160 }, { lat: 45.4890, lon: 9.2172 }, { lat: 45.4889, lon: 9.2205 }] }],
      late:      [{ kind: "works", text: "Via Padova closed for works at the first block", extra_minutes: 3,
                    detour: "Walk along Viale Monza, then turn right", source: "City, notice of road works", time: "06:00", status: "confirmed", at: { lat: 45.4874, lon: 9.2186 },
                    detour_route: [{ lat: 45.4858, lon: 9.2160 }, { lat: 45.4890, lon: 9.2172 }, { lat: 45.4889, lon: 9.2205 }] }],
      cancelled: [{ kind: "works", text: "Via Padova closed for works at the first block", extra_minutes: 3,
                    detour: "Walk along Viale Monza, then turn right", source: "City, notice of road works", time: "06:00", status: "confirmed", at: { lat: 45.4874, lon: 9.2186 },
                    detour_route: [{ lat: 45.4858, lon: 9.2160 }, { lat: 45.4890, lon: 9.2172 }, { lat: 45.4889, lon: 9.2205 }] }]
    }
  }
};
