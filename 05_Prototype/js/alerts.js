/*
 * Script: alerts (page PG-13, Alerts). Shows SPEC-03, alerts on the usual trip.
 * The settings, the alerts sent today and the works and strikes announced; the messages themselves are on the lock screen.
 * Uses the components <page-head>, <missing-setup>, <alert-settings>, <alert-log> and <announced-list>.
 */
(function () {
  const P = Proto, A = P.T.alerts;

  P.shell();
  const main = document.querySelector("main");
  const setup = P.scenario.setup;
  P.head(main, { title: A.title, intro: A.intro, notes: setup ? [
    ["", P.fill(A.for_trip, { trip: P.followedTrip().name, days: DATA.profile.days.join(", ") })],
    ["notice", DATA.profile.channels.length ? null : A.no_channel]
  ] : [] });

  // No usual trip or no days of travel: no alert can be sent (SPEC-03, When things go wrong).
  if (!setup) {
    ["usual_trip", "days"].forEach(function (what) {
      const m = document.createElement("missing-setup");
      m.setAttribute("what", what);
      main.appendChild(m);
    });
    return;
  }
  ["alert-settings", "alert-log", "announced-list"].forEach(function (tag) {
    main.appendChild(document.createElement(tag));
  });
})();
