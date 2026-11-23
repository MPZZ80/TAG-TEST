/*
 * Script: ways (page PG-05, Ways). Shows SPEC-08, every way door to door for a day and a time, side by side:
 * public transport, car and combinations, each with its time, price, arrival at the door and way back.
 * Uses the components <page-head>, <way-search> and <way-results> (with <way-card> and <confirm-choice>).
 */
(function () {
  const P = Proto, W = P.T.ways, q = DATA.ways.search;
  // A search started on Today arrives in the address.
  if (W.when[P.params.get("when")]) q.when = P.params.get("when");
  if (P.params.get("time")) q.time = P.params.get("time");

  P.shell();
  const main = document.querySelector("main");
  P.head(main, { title: W.title, intro: W.intro });
  main.appendChild(document.createElement("way-search"));
  main.appendChild(document.createElement("way-results"));
})();
