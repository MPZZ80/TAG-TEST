/*
 * Script: today (page PG-01, Today, the start page). Shows SPEC-04, the trip of the day; with nothing set up,
 * the start page of SPEC-01: the invitation to set up the first trip, or to find a way now.
 * Uses the components <today-trip>, <leg-problem>, <trip-card> and <first-trip-cta>.
 * Above the trip, only a line for a message that arrived while closed, or, on a day with no travel, "Your next trip".
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

  // A message that arrived while the product was closed: a line above the trip, not a screen in front of it (SPEC-01).
  (DATA.notifications.today[P.dataKey] || []).forEach(function (m) {
    main.appendChild(P.el("p", "notice", P.fill(TD.arrived, m)));
  });

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
