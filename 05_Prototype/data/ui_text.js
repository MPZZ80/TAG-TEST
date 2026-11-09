/*
 * Dataset: ui_text
 * What it holds: every label, button, heading and message template of the interface.
 *   Templates use {name} placeholders, filled by t() in js/common.js.
 * Used by: all screens
 * Fields: one key per text; nav[] for the main navigation
 * Source: mock
 * Updated: 2026-11-09
 */
window.DATA = window.DATA || {};
DATA.ui_text = {
  app_name: "Door to Door",
  nav: [
    { href: "index.html", text: "Today" },
    { href: "trip.html", text: "Trip" },
    { href: "plan.html", text: "Plan" },
    { href: "contacts.html", text: "Contacts" },
    { href: "alerts.html", text: "Alerts" }
  ],

  // Prototype controls, shown on every screen
  demo_heading: "Prototype controls",
  demo_scenario: "Scenario",
  demo_note: "Not part of the product: switches the mock situation shown on every screen.",

  // Shared
  source_operator: "Operator",
  source_measured: "Measured from travellers",
  source_travellers: "Other travellers",
  source_schedule: "Timetable",
  status_confirmed: "confirmed",
  status_estimated: "estimated",
  status_reported: "reported",
  age: "{min} min ago",
  fact_line: "{source} · {age} · {status}",
  gap: "The sources differ by {min} min",
  no_news: "No news since {since}. Looking again at {next}.",
  reason: "Reason: {text}",
  details: "Details",
  minutes: "{min} min",

  // Home (usual trip at a glance)
  home_title: "Your usual trip",
  home_run: "{line} {time} to {to}",
  home_platform: "Platform {platform}",
  home_platform_changed: "changed from {usual}",
  home_platform_not_final: "may still change",
  home_change: "Change at {station}: {line} {time}",
  home_arrival: "At {door} around {time}",
  home_open_trip: "See the whole trip",
  home_ways_out: "See the ways out",
  home_announcement: "Announcement",

  // Run states
  state_on_time: "On time",
  state_delayed: "{min} min late",
  state_cancelled: "Cancelled",
  state_unknown: "No news",

  // Connection states
  conn_holds: "Connection holds",
  conn_at_risk: "Connection at risk",
  conn_lost: "Connection lost",
  conn_margin: "Margin {margin} min, walk {walk} min, your limit {threshold} min",
  conn_ask_wait: "Ask the connection to wait",
  conn_asked: "Asked to wait. No answer yet: the connection is not held.",

  // Trip detail
  trip_title: "Today's trip",
  trip_legs: "Door to door",
  trip_facts: "What is known about {line} {time}",
  trip_reports: "What travellers see",
  trip_seen: "Seen by {count} travellers, latest {time}",
  trip_no_reports: "No reports yet.",
  trip_report_heading: "On this train?",
  trip_report_button: "Report a delay on {line} {time}",
  trip_report_done: "Report sent. Your name is never shown.",
  trip_connection: "The connection ahead",

  // Ways out
  ways_title: "Ways out",
  ways_intro: "Every way that still reaches {door}, side by side. Nothing is booked until you confirm.",
  ways_not_broken: "Your trip is not broken: no ways out needed now.",
  ways_departs: "Leaves {time}",
  ways_arrives: "Arrives {time}",
  ways_cost: "Cost {cost}",
  ways_cost_unknown: "Cost unknown",
  ways_ticket_valid: "Your pass is valid",
  ways_ticket_invalid: "Your pass is not valid here",
  ways_fullness: "Expected: {fullness} ({source})",
  ways_choose: "Choose this way",
  ways_confirm_title: "Continue on this way?",
  ways_confirm_yes: "Yes, continue",
  ways_confirm_no: "Not now",
  ways_chosen: "Your trip continues on: {way}.",
  ways_deadline: "After {time} no way reaches {door} in time.",

  // Contacts
  contacts_title: "Those waiting for you",
  contacts_intro: "They see only the trip you share, and only until it ends.",
  contacts_accepted: "Receives updates",
  contacts_pending: "Has not accepted yet: nothing reaches them",
  contacts_message: "Message ready to send",
  contacts_send: "Send to {name}",
  contacts_sent: "Sent to {name}.",
  contacts_not_sent: "Not sent: {name} has not accepted messages yet.",
  contacts_template: "{commuter}'s trip: {line} {time}, arriving {arrival} ({status}).",
  contacts_leave_at: "Leave at {time} to be there on arrival ({drive} min drive).",

  // Plan
  plan_title: "Every way, door to door",
  plan_query: "Arrive at {door} by {time}, {day}",
  plan_operators: "Run by {list}",
  plan_price: "Price {price}",
  plan_price_unknown: "Price unknown",
  plan_latest: "Latest to leave: {time}",

  // Alerts
  alerts_title: "When to tell you",
  alerts_intro: "Quiet unless something changes on your usual trip, on your days, at your moments.",
  alerts_days: "Travel days",
  alerts_moments: "Moments",
  alerts_channels: "Channels",
  alerts_events: "Tell me about",
  alerts_preview: "If it were now",
  alerts_nothing: "Nothing is sent: nothing has changed on your trip."
};
