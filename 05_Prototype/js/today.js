/*
 * Script: today (page PG-01, Today, the start page). Shows SPEC-04, the trip of the day; with nothing set up,
 * the start page of SPEC-01: the invitation to set up the first trip, or to find a way now.
 * Uses the components <today-trip>, <leg-problem>, <trip-card> and <first-trip-cta>.
 * Above the trip, only a line for a message that arrived while closed, or for a day that is not a travel day.
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
  (DATA.notifications.today[P.scenarioKey] || []).forEach(function (m) {
    main.appendChild(P.el("p", "notice", P.fill(TD.arrived, m)));
  });

  // Not a travel day: the trip shown is the next travel day's, marked as such (SPEC-04, When things go wrong).
  const days = DATA.profile.days, wd = P.T.weekdays, today = wd.indexOf(DATA.clock.weekday);
  if (days.indexOf(DATA.clock.weekday) === -1 && days.length) {
    let next = today;
    do { next = (next + 1) % 7; } while (days.indexOf(wd[next]) === -1);
    main.appendChild(P.el("p", "notice", P.fill(TD.not_travel_day, { weekday: DATA.clock.weekday, next: wd[next] })));
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
