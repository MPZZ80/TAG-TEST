/*
 * Dataset: config
 * What it holds: what the prototype opens on, chosen by hand: the scenario, where the commuter is, and whether
 *   today is a travel day, and whether the phone has a signal. The configurator at the top of every screen changes them for the page shown, in the
 *   address (?scenario=&at=&day=&signal=); this file sets what a page shows when the address says nothing.
 *   A .js file and not a .json file: browsers do not let a page opened with a double-click (file://) read a JSON file.
 * Used by: every screen (through common.js)
 * Fields: scenario, at, day, signal
 * Source: mock
 * Updated: 2026-11-22
 */
window.DATA = window.DATA || {};
DATA.config = {
  "scenario": "on_time", // a key of scenarios.list: "none", "on_time", "late", "cancelled"
  "at": "before",        // where the commuter is on the trip followed today: "before" (still at home), "leg-1" … "leg-4", "after"
  "day": "travel",       // "travel" (a travel day, clock.js) or "off" (a day with no travel: the next trip is shown)
  "signal": "on"         // "on" or "off": with no signal, tickets still show; buying and moving wait (SPEC-10)
};
