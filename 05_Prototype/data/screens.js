/*
 * Dataset: screens
 * What it holds: the list of the screens of the prototype, with the specification each shows, for the index.
 * Used by: index.html
 * Fields: screens[{file, title, specs, stage}]
 * Source: mock
 * Updated: 2026-11-16
 */
window.DATA = window.DATA || {};
DATA.screens = [
  { file: "setup.html",      title: "Set-up",                         specs: "SPEC-02", stage: "Before the first trip" },
  { file: "today.html",      title: "Today's trip",                   specs: "SPEC-05", stage: "Before departure" },
  { file: "run.html",        title: "The real state of the run",      specs: "SPEC-03", stage: "Before departure, main leg" },
  { file: "alerts.html",     title: "Alerts on the usual trip",       specs: "SPEC-04", stage: "Planning, before departure" },
  { file: "ways_out.html",   title: "Ways out when the trip breaks",  specs: "SPEC-06", stage: "Disruption" },
  { file: "contacts.html",   title: "Those waiting are told",         specs: "SPEC-07", stage: "Main leg, disruption" },
  { file: "connection.html", title: "The connection ahead",           specs: "SPEC-08", stage: "Transfer" },
  { file: "ways.html",       title: "Every way door to door",         specs: "SPEC-09", stage: "Planning" },
  { file: "timing.html",     title: "Times that can be kept",         specs: "SPEC-10", stage: "Planning" },
  { file: "tickets.html",    title: "Tickets",                        specs: "SPEC-11", stage: "Planning, before departure" },
  { file: "fare.html",       title: "The fare that fits the days",    specs: "SPEC-12", stage: "Planning" },
  { file: "claim.html",      title: "Compensation from the trip",     specs: "SPEC-13", stage: "After the trip" },
  { file: "station.html",    title: "The station ahead",              specs: "SPEC-14", stage: "First mile, last mile" },
  { file: "stop.html",       title: "The stop approaching",           specs: "SPEC-15", stage: "Main leg" },
  { file: "drive.html",      title: "The route stays with the driver", specs: "SPEC-16", stage: "Main leg by car" },
  { file: "sessions.html",   title: "Sessions still running",         specs: "SPEC-17", stage: "First mile, last mile" }
];
