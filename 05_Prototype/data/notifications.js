/*
 * Dataset: notifications
 * What it holds: the messages that reach the commuter when the product is closed,
 *   shown on a fake lock screen of a phone (lockscreen.html), reached from the configurator (instructions, section 9).
 * Used by: lockscreen.html, today.html, connection.html, stop.html, drive.html, sessions.html
 * Fields: screen{scenario or "any": [{channel, text, page, run}]}; page (and run): where opening the message leads, by default
 *   the page of its screen (SPEC-01, Information architecture). Shown on the lock screen (lockscreen.html) and, for today, on the leg it is about.
 * Source: mock
 * Updated: 2026-11-21
 */
window.DATA = window.DATA || {};
DATA.notifications = {
  today: {
    late:      [{ channel: "Notification on the phone", text: "9707 is 18 min late: expected 08:03, platform 5 (operator, confirmed 07:38).", page: "run.html", run: "HS9707" }],
    cancelled: [{ channel: "Notification on the phone", text: "9707 is cancelled today (operator, 07:31). Open to see the alternatives.", page: "run.html", run: "HS9707" }]
  },
  alerts: {
    late:      [{ channel: "Spoken, on the way to the station", text: "Your 7:45 is 18 minutes late. It now leaves at 8:03 from platform 5." }],
    cancelled: [{ channel: "Spoken, on the way to the station", text: "Your 7:45 is cancelled. The next high-speed train is at 8:15." }],
    on_time:   [{ channel: "Notification on the phone", text: "Strike on Wednesday 25 Nov, 09:00 – 17:00: your 7:45 is guaranteed." }]
  },
  ways_out: {
    // whether every break is sent is OQ-11: provisional, a cancellation is sent
    cancelled: [{ channel: "Notification on the phone", text: "Your trip is broken: 9707 cancelled. 5 ways still reach the Milan apartment.", page: "run.html", run: "HS9707" }]
  },
  connection: {
    late: [{ channel: "Notification on the phone", text: "Connection at Milano Centrale lost: next M2 at 09:28, at the Milan apartment at 09:39." }],
    any:  [{ channel: "Notification on the phone", text: "Connection at Milano Centrale holds: 2 minutes to spare." }]
  },
  stop: {
    any: [{ channel: "Vibration and sound", text: "Verona Porta Nuova in 5 minutes. Get ready to get off." }]
  },
  drive: {
    any: [{ channel: "Spoken while driving", text: "Queue ahead after Brescia. Exit at Brescia Est to save 9 minutes? Say yes or no." }]
  },
  sessions: {
    any: [{ channel: "Notification on the phone", text: "Your parking at Verona Porta Nuova is still running. End it?" }]
  }
};
