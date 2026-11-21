/*
 * Dataset: contacts
 * What it holds: the people the commuter keeps informed (SPEC-06), the trip each shares, and the messages they receive.
 * Used by: contacts.html, run.html (the message ready to send when the trip breaks)
 * Fields: contacts[{id, name, trip, shares, state, channel}], messages{scenario: [{to, after, time, text, status, source}]},
 *   prepared{scenario: {to, text, with_choice}}
 * Source: mock
 * Updated: 2026-11-21
 */
window.DATA = window.DATA || {};
DATA.contacts = {
  // trip: the trip of profile.js the contact shares; state: invited, accepted or refused (SPEC-01, Consent of contacts)
  contacts: [
    { id: "C1", name: "Flatmate in Milan", trip: "T1", shares: "Today's trip only", state: "accepted", channel: "Text message" },
    { id: "C2", name: "Father", trip: "T2", shares: "The return trip, on travel days", state: "accepted", channel: "Text message" },
    { id: "C3", name: "Team colleague", trip: "T1", shares: "Today's trip only", state: "invited", channel: "Text message" }
  ],
  // what the contacts received on today's trip, as they see it; after: sent once the commuter is on that leg (config.js, at).
  // Whether the contact is also told when to set off is OQ-16; how far the arrival must move to tell again is OQ-15
  // (provisional: 5 minutes or more).
  messages: {
    on_time: [
      { to: "Flatmate in Milan", after: "leg-1", time: "07:25", status: "confirmed", source: "Operator, live",
        text: "On my way: train 9707 leaves Verona Porta Nuova at 07:45. At the Milan apartment around 09:23. Sent for the Verona–Milan commuter." }],
    late: [
      { to: "Flatmate in Milan", after: "leg-1", time: "07:25", status: "confirmed", source: "Operator, live",
        text: "On my way: train 9707 leaves Verona Porta Nuova at 07:45. At the Milan apartment around 09:23. Sent for the Verona–Milan commuter." },
      { to: "Flatmate in Milan", after: "leg-2", time: "07:38", status: "confirmed", source: "Operator, live",
        text: "New arrival at the Milan apartment: around 09:39 (+16). Train 9707 is 18 minutes late, confirmed by the operator. Sent for the Verona–Milan commuter." }],
    cancelled: [
      { to: "Flatmate in Milan", after: "leg-1", time: "07:25", status: "confirmed", source: "Operator, live",
        text: "On my way: train 9707 leaves Verona Porta Nuova at 07:45. At the Milan apartment around 09:23. Sent for the Verona–Milan commuter." }]
  },
  // when the trip breaks, a message ready for the commuter to send in one step (SPEC-06 rule 5); with_choice once a way is chosen
  prepared: {
    cancelled: { to: "Flatmate in Milan",
      text: "My 7:45 train is cancelled. I am choosing another way and will tell you when I arrive.",
      with_choice: "My 7:45 train is cancelled. I am taking the {service} instead: at the Milan apartment around {time}." }
  }
};
