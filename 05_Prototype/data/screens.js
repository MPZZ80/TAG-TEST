/*
 * Dataset: screens
 * What it holds: the screens built so far, with the page of the information architecture and the specification each shows, for the index.
 * Used by: index.html, and every screen through common.js (links to screens not built yet are shown as plain text)
 * Fields: screens[{file, title, page, specs, stage}]
 * Source: mock
 * Updated: 2026-11-18
 */
window.DATA = window.DATA || {};
DATA.screens = [
  { file: "index.html", title: "All screens",                page: "—",     specs: "—",       stage: "For review" },
  { file: "run.html",   title: "The real state of the run",  page: "PG-02", specs: "SPEC-02", stage: "Before departure, main leg, transfer, disruption" }
];
