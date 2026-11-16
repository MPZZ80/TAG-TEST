/*
 * Dataset: sessions
 * What it holds: a parking session at the station and a shared bike ride at the Milan end (SPEC-17),
 *   with the return zones near the destination.
 * Used by: sessions.html
 * Fields: parking{place, started, rate, left_place_at, remind_after}, ride{vehicle, started, rate, destination, zones[{name, distance, free}], position_ok}
 * Source: mock
 * Updated: 2026-11-16
 */
window.DATA = window.DATA || {};
DATA.sessions = {
  parking: {
    place: "Verona Porta Nuova, station car park", started: "07:28", rate: "€ 8 a day",
    left_place_at: "07:35",
    remind_after: "10 minutes" // provisional, OQ-33; how a session is known is OQ-32
  },
  ride: {
    vehicle: "Shared bike 4471", started: "09:02", rate: "€ 0.25 a minute",
    destination: "Office, Via Vittor Pisani",
    zones: [
      { name: "Via Vittor Pisani 12", distance: "80 m from the office", free: "4 places" },
      { name: "Piazza della Repubblica", distance: "350 m", free: "9 places" }
    ],
    position_ok: false // the bike's position puts it outside the zone: say so before the commuter leaves it
  }
};
