/*
 * Dataset: commuter
 * What it holds: the commuter's profile, entered once: doors, rules, preferences
 *   and the alert settings (days, moments, channels, kinds of event).
 * Used by: index.html, trip.html, ways_out.html, contacts.html, plan.html, alerts.html
 * Fields: name, doors{home, office}, rules{connection_threshold_min, wait_limit_min,
 *   min_change_min}, preference, pass, alerts{days[], moments[], channels[], events[]}
 * Source: mock
 * Updated: 2026-11-09
 */
window.DATA = window.DATA || {};
DATA.commuter = {
  name: "Luca",
  doors: { home: "Home, Como", office: "Office, Lugano Cassarate" },
  rules: {
    connection_threshold_min: 12, // delay at which the Lugano connection counts as lost
    wait_limit_min: 20,           // after this delay the ways out are offered
    min_change_min: 4
  },
  preference: "seat first",       // seat first or time first (SPEC-06)
  pass: "TILO monthly pass Como–Lugano",
  alerts: {
    days: [
      { id: "mon", label: "Mon", on: true },
      { id: "tue", label: "Tue", on: false },
      { id: "wed", label: "Wed", on: true },
      { id: "thu", label: "Thu", on: true },
      { id: "fri", label: "Fri", on: false }
    ],
    moments: [
      { id: "wake", label: "On waking, 6:50", on: true },
      { id: "leave", label: "Before leaving, 7:25", on: true },
      { id: "walk", label: "On the way to the station", on: false }
    ],
    channels: [
      { id: "push", label: "Phone notification", on: true },
      { id: "sms", label: "Text message", on: false },
      { id: "voice", label: "Voice while driving", on: false },
      { id: "watch", label: "Watch", on: true }
    ],
    events: [
      { id: "delay", label: "Delays", on: true },
      { id: "cancel", label: "Cancellations", on: true },
      { id: "strike", label: "Strikes and works", on: true },
      { id: "platform", label: "Platform changes", on: true }
    ]
  }
};
