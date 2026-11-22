/*
 * Dataset: screens
 * What it holds: the screens built so far, with the page of the information architecture and the specification each shows, for the index.
 * Used by: index.html, and every screen through common.js (links to screens not built yet are shown as plain text)
 * Fields: screens[{file, title, page, specs, stage}]
 * Source: mock
 * Updated: 2026-11-21
 */
window.DATA = window.DATA || {};
DATA.screens = [
  { file: "index.html", title: "Start: a notification",     page: "—",     specs: "SPEC-02", stage: "The prototype starts here" },
  { file: "lockscreen.html", title: "Lock screen: the messages", page: "—", specs: "SPEC-01 (messages outside the product)", stage: "Any; reached from the configurator" },
  { file: "today.html", title: "Today",                     page: "PG-01", specs: "SPEC-04", stage: "Before departure" },
  { file: "run.html",   title: "State of the run, and the ways out", page: "PG-02", specs: "SPEC-02, SPEC-05", stage: "Before departure, main leg, transfer, disruption" },
  { file: "connection.html", title: "The connection ahead", page: "PG-03", specs: "SPEC-07", stage: "Main leg, transfer" },
  { file: "ways.html", title: "Every way door to door", page: "PG-05", specs: "SPEC-08", stage: "Planning" },
  { file: "way.html", title: "Way detail: real times and booking", page: "PG-06", specs: "SPEC-09, SPEC-10", stage: "Planning" },
  { file: "tickets.html", title: "Tickets", page: "PG-07", specs: "SPEC-10", stage: "Planning, main leg, disruption" },
  { file: "alternative.html", title: "Alternative for a leg", page: "PG-17", specs: "SPEC-02", stage: "Disruption" },
  { file: "trips.html", title: "Trips",                     page: "PG-16", specs: "SPEC-17", stage: "Planning" },
  { file: "alerts.html", title: "Alerts on the usual trip",  page: "PG-13", specs: "SPEC-03", stage: "Before departure, disruption" }
];
