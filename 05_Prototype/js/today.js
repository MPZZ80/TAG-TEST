/*
 * Script: today (page PG-01, Today, the start page). Shows SPEC-04, the trip of the day; with nothing set up,
 * the start page of SPEC-01: the invitation to set up the first trip, or to find a way now.
 * Uses the components <today-trip> and <first-trip-cta>.
 */
(function () {
  const P = Proto, TD = P.T.today;

  P.shell();
  const main = document.querySelector("main");
  main.appendChild(P.el("h1", "", TD.title));

  if (!P.scenario.setup) {
    main.appendChild(document.createElement("first-trip-cta"));
    const find = P.el("p");
    find.appendChild(P.link("ways.html", TD.search));
    main.appendChild(find);
    return;
  }

  // Nothing in front of the trip: it comes first.
  const trip = document.createElement("today-trip");
  trip.setAttribute("trip", P.followedTrip().id);
  main.appendChild(trip);
})();
