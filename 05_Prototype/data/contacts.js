/*
 * Dataset: contacts
 * What it holds: the people the commuter keeps informed about a trip.
 * Used by: contacts.html
 * Fields: [{id, name, relation, shares, accepted, drive_min, leave_at{<scenario id>: time}}]
 *   accepted: a contact receives nothing until they accept (SPEC-01, consent of contacts)
 *   drive_min, leave_at: for a contact who drives to fetch the commuter; leave_at per scenario
 * Source: mock
 * Updated: 2026-11-09
 */
window.DATA = window.DATA || {};
DATA.contacts = [
  {
    id: "dad", name: "Dad", relation: "fetches me at Lugano Cassarate on rainy days",
    shares: "today's trip", accepted: true, drive_min: 15,
    leave_at: { on_time: "8:21", delay_8: "8:36", delay_25: "8:52", cancelled: "8:42", no_news: "8:21" }
  },
  {
    id: "team", name: "Office team", relation: "morning stand-up at 9:00",
    shares: "today's trip", accepted: false, drive_min: null, leave_at: null
  }
];
