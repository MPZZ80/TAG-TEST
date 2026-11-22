/*
 * Script: connection (page PG-03, Connection). Shows SPEC-07, the connection ahead: whether the change still holds
 * with the delay of now and, if not, the next connection that holds and the new arrival at the door.
 * Asking the connection to wait was set aside on 2026-11-22 (SPEC-07).
 * Uses the components <connection-state> and <first-trip-cta>.
 */
(function () {
  const P = Proto, C = P.T.connection, R = P.T.run;

  P.shell();
  const main = document.querySelector("main");
  const back = P.link("today.html", "← " + (P.travelDay ? R.back_today : R.back_today_off));
  back.classList.add("back");
  main.appendChild(back);
  main.appendChild(P.el("h1", "", C.title));

  // Nothing set up: no trip, so no change to watch (SPEC-07, When things go wrong).
  if (!P.scenario.setup) {
    main.appendChild(document.createElement("first-trip-cta"));
    return;
  }
  main.appendChild(P.el("p", "muted", C.intro));
  main.appendChild(document.createElement("connection-state"));
})();
