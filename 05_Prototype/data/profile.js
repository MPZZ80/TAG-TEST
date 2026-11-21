/*
 * Dataset: profile
 * What it holds: the commuter's set-up (SPEC-02): doors, trips, days of travel, own rules,
 *   needs on the way, channels, consent to use position. Every screen reads it, so all screens agree.
 * Used by: setup.html and every other screen
 * Fields: persona, doors[{id, name, place}], trips[{id, name, from, to, monitored, legs[{mode, from, to, run, minutes, stage, route[{name, lat, lon}]}]}],
 *   days[], own_rules{min_change, per_station[{station, minutes}], margin, max_changes, own_leg},
 *   needs{step_free}, channels[], position
 * Source: mock
 * Updated: 2026-11-21
 */
window.DATA = window.DATA || {};
DATA.profile = {
  persona: "The Verona–Milan commuter",
  doors: [
    // the places of the doors are entered in the set-up; these are mock
    { id: "home",   name: "Home",   place: "Verona, San Massimo" },
    { id: "apartment", name: "Milan apartment", place: "Milan, near Loreto" },
    { id: "office", name: "Office", place: "Milan, Via Vittor Pisani" },
    { id: "client", name: "Client", place: "Brescia, Via Gramsci" }
  ],
  // a free list of trips door to door, with no days of their own; the commuter chooses which to monitor (SPEC-17)
  trips: [
    { id: "T1", name: "Home to Milan apartment", from: "home", to: "apartment", monitored: true,
      legs: [
        { mode: "car",         from: "Home",                to: "Verona Porta Nuova", minutes: 15, stage: "first mile",
          route: [{ name: "Home", lat: 45.4378, lon: 10.9403 }, { name: "Ring road", lat: 45.4330, lon: 10.9600 }, { name: "Verona Porta Nuova", lat: 45.4290, lon: 10.9825 }] },
        { mode: "train",       from: "Verona Porta Nuova",  to: "Milano Centrale",    run: "HS9707",  stage: "main leg" },
        { mode: "underground", from: "Milano Centrale FS",  to: "Loreto",             run: "M2-0912", stage: "transfer" },
        { mode: "walk",        from: "Loreto",              to: "Milan apartment",    minutes: 5,  stage: "last mile",
          route: [{ name: "Loreto", lat: 45.4858, lon: 9.2160 }, { name: "Via Padova", lat: 45.4874, lon: 9.2186 }, { name: "Milan apartment", lat: 45.4889, lon: 9.2205 }] }
      ] },
    { id: "T2", name: "Office to home", from: "office", to: "home", monitored: false,
      legs: [
        { mode: "walk",        from: "Office",             to: "Repubblica",         minutes: 6,  stage: "first mile" },
        { mode: "underground", from: "Repubblica",         to: "Milano Centrale",    run: "M3-1722", stage: "transfer" },
        { mode: "train",       from: "Milano Centrale",    to: "Verona Porta Nuova", run: "HS9722",  stage: "main leg" },
        { mode: "lift",        from: "Verona Porta Nuova", to: "Home",               minutes: 15, stage: "last mile" }
      ] },
    // a client visit about once a month
    { id: "T3", name: "Home to the client in Brescia", from: "home", to: "client", monitored: false,
      legs: [
        { mode: "lift",        from: "Home",               to: "Verona Porta Nuova", minutes: 15, stage: "first mile" },
        { mode: "train",       from: "Verona Porta Nuova", to: "Brescia",            run: "RE2614",  stage: "main leg" },
        { mode: "walk",        from: "Brescia",            to: "Client",             minutes: 12, stage: "last mile" }
      ] }
  ],
  days: ["Tuesday", "Wednesday"],
  own_rules: {
    min_change: 8,                                         // minutes, default for every station
    per_station: [{ station: "Milano Centrale", minutes: 10 }],
    margin: 10,                                            // minutes kept at the door
    max_changes: 2,
    own_leg: "Car from home to Verona Porta Nuova"
  },
  needs: { step_free: false },
  channels: ["Notification on the phone"],
  // consent to use position: off by default in the set-up (SPEC-01); given in this mock, so that the legs follow the
  // commuter's position (set by the configurator, config.js); without it, how legs move on is open (OQ-37)
  position: true
};
