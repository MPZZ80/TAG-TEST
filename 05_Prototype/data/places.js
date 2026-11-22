/*
 * Dataset: places
 * What it holds: the addresses the search suggests as the commuter types (SPEC-08), as an address search would;
 *   the commuter's favourite addresses (the doors of profile.js) are suggested first.
 * Used by: ways.html, today.html (the search when nothing is set up)
 * Fields: places[] (one address per line)
 * Source: mock: real streets and stations, chosen by hand; a real product would ask an address service.
 * Updated: 2026-11-22
 */
window.DATA = window.DATA || {};
DATA.places = [
  "Verona Porta Nuova station, Piazzale XXV Aprile, Verona",
  "Verona Porta Vescovo station, Verona",
  "Piazza Bra, Verona",
  "Via Mazzini, Verona",
  "Verona Villafranca airport",
  "Milano Centrale station, Piazza Duca d'Aosta, Milan",
  "Milano Porta Garibaldi station, Milan",
  "Milano Lampugnano bus station, Milan",
  "Piazzale Loreto, Milan",
  "Via Vittor Pisani, Milan",
  "Piazza del Duomo, Milan",
  "Milano Linate airport",
  "Brescia station, Viale della Stazione, Brescia",
  "Via Gramsci, Brescia",
  "Como San Giovanni station, Como",
  "Lugano station, Lugano"
];
