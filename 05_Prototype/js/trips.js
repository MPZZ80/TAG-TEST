/*
 * Script: trips (page PG-16, Trips). Shows SPEC-17, the commuter's trips.
 * The free list of trips door to door; the commuter chooses which one to follow today.
 * Uses the components <page-head>, <trip-list> and <first-trip-cta>.
 */
(function () {
  const P = Proto, TR = P.T.trips;

  P.shell();
  const main = document.querySelector("main");
  P.head(main, { title: TR.title, intro: P.scenario.setup ? TR.intro : null });

  if (!P.scenario.setup) {
    const cta = document.createElement("first-trip-cta");
    cta.setAttribute("to", "setup.html"); // on Trips, the invitation leads straight to adding the trip
    main.appendChild(cta);
    return;
  }
  const list = document.createElement("trip-list");
  list.setAttribute("manage", "");
  main.appendChild(list);
})();
