/*
 * Dataset: share
 * What it holds: what "Share updates" hands to the phone's share sheet (SPEC-06): a link to the trip as it goes,
 *   and the apps the prototype's own sheet shows where the browser has none. No message: the commuter writes it.
 * Used by: today.html, run.html
 * Fields: url (with {trip} and {date}), title, apps[]
 * Source: mock
 * Updated: 2026-11-22
 */
window.DATA = window.DATA || {};
DATA.share = {
  // whoever opens the link sees the run and the expected arrival, with its source, until the trip ends (SPEC-06 rules 2, 3)
  url: "https://example.org/trip/{trip}/{date}",
  title: "My trip: {from} → {to}",
  apps: ["WhatsApp", "Messages", "Mail", "Telegram"]
};
