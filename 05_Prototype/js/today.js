/*
 * Script: today (page PG-01, Today, the start page). Shows SPEC-04, the trip of the day; with nothing set up,
 * the start page of SPEC-01: the invitation to set up the first trip, or to find a way now.
 * Uses the components <today-trip>, <leg-problem>, <trip-card>, <share-updates> and <first-trip-cta>.
 * Above the trip, only the day of the next trip on a day with no travel; the news of a run is on its leg.
 */
(function () {
  const P = Proto, TD = P.T.today;

  P.shell();
  const main = document.querySelector("main");
  main.appendChild(P.el("h1", "", P.travelDay ? TD.title : TD.title_off));
  if (!P.travelDay) document.title = TD.title_off; // the page is the next trip on a day with no travel (SPEC-04)

  if (!P.scenario.setup) {
    main.appendChild(document.createElement("first-trip-cta"));
    const find = P.el("p");
    find.appendChild(P.link("ways.html", TD.search));
    main.appendChild(find);
    return;
  }

  // Not a travel day: the trip shown is the next travel day's, headed by when it is (SPEC-04, When things go wrong).
  const next = P.travelDay ? null : P.nextTravelDay();
  if (next) {
    const when = next.n === 1 ? TD.tomorrow : P.fill(TD.in_days, next);
    main.appendChild(P.el("p", "state", P.fill(TD.next_trip, { weekday: next.weekday, date: next.date, when: when })));
  }

  // Nothing in front of the trip: it comes first, leg by leg.
  const followed = P.followedTrip();
  const trip = document.createElement("today-trip");
  trip.setAttribute("trip", followed.id);
  main.appendChild(trip);

  // Those who wait for the commuter (SPEC-06): the trip shared from the phone's share sheet, under the trip.
  const share = document.createElement("share-updates");
  share.setAttribute("trip", followed.id);
  main.appendChild(share);

  // The other trips door to door, in a section of their own (SPEC-17).
  const others = DATA.profile.trips.filter(function (t) { return t.id !== followed.id; });
  if (others.length) {
    main.appendChild(P.el("h2", "", P.T.run.other_trips));
    others.forEach(function (t) {
      const c = document.createElement("trip-card");
      c.setAttribute("trip", t.id);
      main.appendChild(c);
    });
  }
})();
