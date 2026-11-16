/*
 * Dataset: contacts
 * What it holds: the people the commuter keeps informed (SPEC-07), what each shares, and the messages they receive.
 * Used by: contacts.html
 * Fields: contacts[{id, name, shares, state, channel}], messages{key: [{to, text, status, source}]}, prepared{key: text}
 * Source: mock
 * Updated: 2026-11-16
 */
window.DATA = window.DATA || {};
DATA.contacts = {
  contacts: [
    { id: "C1", name: "Father", shares: "The return trip, on travel days", state: "accepted", channel: "Text message" },
    { id: "C2", name: "Team colleague", shares: "Today's trip only", state: "invited", channel: "Text message" }
  ],
  // what the contact receives; whether they are told when to set off is OQ-16
  messages: {
    on_time:   [{ to: "Father", text: "Train 9722 leaves Milano Centrale at 17:35. Expected at Verona Porta Nuova at 18:48. Sent for the Verona–Milan commuter.", status: "confirmed", source: "Operator, live" }],
    late:      [{ to: "Father", text: "Train 9722 leaves Milano Centrale at 17:35. Expected at Verona Porta Nuova at 18:48. Sent for the Verona–Milan commuter.", status: "confirmed", source: "Operator, live" },
                // sent again because the arrival moved by 5 minutes or more: provisional, OQ-15
                { to: "Father", text: "New arrival at Verona Porta Nuova: 19:00 (+12), confirmed by the operator. Sent for the Verona–Milan commuter.", status: "confirmed", source: "Operator, live" }],
    cancelled: []
  },
  prepared: {
    cancelled: "My 7:45 train is cancelled. I am taking the 8:15 instead: at the office around 9:50."
  }
};
