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
  { file: "today.html", title: "Today",                     page: "PG-01", specs: "SPEC-04", stage: "Before departure" },
  { file: "run.html",   title: "State of the run",          page: "PG-02", specs: "SPEC-02", stage: "Before departure, main leg, transfer, disruption" },
  { file: "alternative.html", title: "Alternative for a leg", page: "PG-17", specs: "SPEC-02", stage: "Disruption" },
  { file: "trips.html", title: "Trips",                     page: "PG-16", specs: "SPEC-17", stage: "Planning" },
  { file: "alerts.html", title: "Alerts on the usual trip",  page: "PG-13", specs: "SPEC-03", stage: "Before departure, disruption" }
];
