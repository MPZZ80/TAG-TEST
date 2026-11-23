/*
 * Script: today (page PG-01, Today, the start page). Shows SPEC-04, the trip of the day; with nothing set up,
 * the start page of SPEC-01: the invitation to set up the first trip, or to find a way now.
 * Uses the components <page-head>, <way-search> (nothing set up), <today-trip> (with <share-updates> in the box of the arrival),
 * <trip-list> and <first-trip-cta>.
 * Above the trip, only the day of the next trip on a day with no travel; the news of a run is on its leg.
 */
(function () {
  const P = Proto, TD = P.T.today;

  P.shell();
  const main = document.querySelector("main");
  if (!P.travelDay) document.title = TD.title_off; // the page is the next trip on a day with no travel (SPEC-04)

  // Not a travel day: the trip shown is the next travel day's, headed by when it is (SPEC-04, When things go wrong).
  const next = P.scenario.setup && !P.travelDay ? P.nextTravelDay() : null;
  P.head(main, { title: P.travelDay ? TD.title : TD.title_off,
    notes: next ? [["state", P.fill(TD.next_trip, { weekday: next.weekday, date: next.date, when: next.n === 1 ? TD.tomorrow : P.fill(TD.in_days, next) })]] : [] });

  // Nothing set up: the search of the Ways page plans a trip from here (SPEC-08), then the way into the set-up.
  if (!P.scenario.setup) {
    const search = document.createElement("way-search");
    search.setAttribute("heading", P.T.ways.plan);
    search.setAttribute("go", "");
    main.appendChild(search);
    main.appendChild(document.createElement("first-trip-cta"));
    return;
  }

  // Nothing in front of the trip: it comes first, leg by leg; the other trips under it, in a section of their own (SPEC-17).
  const followed = P.followedTrip();
  const trip = document.createElement("today-trip");
  trip.setAttribute("trip", followed.id);
  main.appendChild(trip);
  const others = document.createElement("trip-list");
  others.setAttribute("heading", P.T.run.other_trips);
  others.setAttribute("exclude", followed.id);
  main.appendChild(others);
})();
