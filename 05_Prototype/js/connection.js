/*
 * Script: connection (page PG-03, Connection). Shows SPEC-07, the connection ahead: whether the change still holds
 * with the delay of now and, if not, the next connection that holds and the new arrival at the door.
 * Asking the connection to wait was set aside on 2026-11-22 (SPEC-07).
 * Uses the components <page-head>, <connection-state> and <first-trip-cta>.
 */
(function () {
  const P = Proto, C = P.T.connection, R = P.T.run;

  P.shell();
  const main = document.querySelector("main");
  P.head(main, { back: ["today.html", P.travelDay ? R.back_today : R.back_today_off], title: C.title,
    intro: P.scenario.setup ? C.intro : null });

  // Nothing set up: no trip, so no change to watch (SPEC-07, When things go wrong).
  main.appendChild(document.createElement(P.scenario.setup ? "connection-state" : "first-trip-cta"));
})();
