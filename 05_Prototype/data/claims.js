/*
 * Dataset: claims
 * What it holds: the commuter's past trips with their real delay, and the compensation rules of the operator (SPEC-13).
 * Used by: claim.html
 * Fields: rules[{from_minutes, share}], trips[{id, date, run, delay, ticket, seller, via_seller, price, state, answer}]
 * Source: mock
 * Updated: 2026-11-16
 */
window.DATA = window.DATA || {};
DATA.claims = {
  rules: [
    { from_minutes: 30, share: "25%" },
    { from_minutes: 60, share: "50%" }
  ],
  trips: [
    { id: "P1", date: "Thursday 12 Nov", run: "High-speed 9722, 17:35", delay: 34, ticket: "HS9722-12NOV-3-2A",
      seller: "Ticket seller", via_seller: true, price: 32.90, state: "possible" }, // how a seller's claim reaches the operator is OQ-27
    { id: "P2", date: "Wednesday 11 Nov", run: "High-speed 9707, 07:45", delay: 12, ticket: "HS9707-11NOV-1-8D",
      seller: "National rail operator", price: 32.90, state: "none" },
    { id: "P3", date: "Tuesday 3 Nov", run: "High-speed 9707, 07:45", delay: 65, ticket: "HS9707-03NOV-1-8D",
      seller: "National rail operator", price: 32.90, state: "answered", answer: "€ 16.45 refunded on 9 Nov" }
  ]
};
