/*
 * Dataset: tickets
 * What it holds: the tickets the commuter holds (SPEC-11), bought in the product or entered after buying elsewhere,
 *   and the runs a ticket can be moved to, with what moving costs.
 * Used by: tickets.html
 * Fields: tickets[{id, title, covers, seller, entered, state, code, moves[{to, cost}]}]
 * Source: mock
 * Updated: 2026-11-16
 */
window.DATA = window.DATA || {};
DATA.tickets = [
  { id: "T1", title: "High-speed 9707, Verona Porta Nuova – Milano Centrale", covers: "Tuesday 17 Nov, 07:45, coach 1 seat 8D",
    seller: "National rail operator", entered: false, state: "held", code: "HS9707-17NOV-1-8D",
    moves: [{ to: "08:15, high-speed 9715", cost: "€ 0" }, { to: "09:15, high-speed 9723", cost: "€ 0" }, { to: "Wednesday 18 Nov, 07:45", cost: "€ 4.50" }] },
  { id: "T2", title: "Carnet of 10 underground rides, Milan", covers: "6 rides left, valid until 31 Dec",
    seller: "City transport, bought at a kiosk", entered: true, state: "held", code: "MI-CARNET-0042-6", moves: [] }, // entered by the commuter
  { id: "T3", title: "High-speed 9722, Milano Centrale – Verona Porta Nuova", covers: "Tuesday 17 Nov, 17:35, coach 3 seat 2A",
    seller: "Ticket seller", entered: false, state: "held", code: "HS9722-17NOV-3-2A",
    moves: [{ to: "18:05, high-speed 9726", cost: "€ 0" }] }
];
