/*
 * Dataset: profile
 * What it holds: the commuter's set-up (SPEC-02): doors, usual trip, days of travel, own rules,
 *   needs on the way, channels, consent to use position. Every screen reads it, so all screens agree.
 * Used by: setup.html and every other screen
 * Fields: persona, doors[{id, name, place}], usual_trip{name, from, to, legs[{mode, from, to, run, minutes, stage}]},
 *   days[], own_rules{min_change, per_station[{station, minutes}], margin, max_changes, own_leg},
 *   needs{step_free}, channels[], position
 * Source: mock
 * Updated: 2026-11-16
 */
window.DATA = window.DATA || {};
DATA.profile = {
  persona: "The Verona–Milan commuter",
  doors: [
    { id: "home",   name: "Home",   place: "Verona, San Massimo" },
    { id: "office", name: "Office", place: "Milan, Via Vittor Pisani" }
  ],
  // one usual trip only: whether more are needed is OQ-05
  usual_trip: {
    name: "Home to office",
    from: "home",
    to: "office",
    legs: [
      { mode: "lift",        from: "Home",              to: "Verona Porta Nuova", minutes: 15, stage: "first mile" }, // driven by his father
      { mode: "train",       from: "Verona Porta Nuova", to: "Milano Centrale",   run: "HS9707", stage: "main leg" },
      { mode: "underground", from: "Milano Centrale",   to: "Repubblica",         run: "M3-0910", stage: "transfer" },
      { mode: "walk",        from: "Repubblica",        to: "Office",             minutes: 6,  stage: "last mile" }
    ]
  },
  days: ["Tuesday", "Wednesday"],
  own_rules: {
    min_change: 8,                                         // minutes, default for every station
    per_station: [{ station: "Milano Centrale", minutes: 10 }],
    margin: 10,                                            // minutes kept at the door
    max_changes: 2,
    own_leg: "Lift from home to Verona Porta Nuova"
  },
  needs: { step_free: false },
  channels: ["Notification on the phone"],
  position: false // consent to use position, off by default (SPEC-01)
};
