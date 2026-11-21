/*
 * Script: alerts (page PG-13, Alerts). Shows SPEC-03, alerts on the usual trip.
 * The message that would reach the commuter, the settings, the alerts sent today and the works and strikes announced.
 * Uses the components <message-preview>, <missing-setup>, <alert-settings>, <alert-log> and <announced-list>.
 */
(function () {
  const P = Proto, A = P.T.alerts;

  P.shell();
  const main = document.querySelector("main");

  const preview = document.createElement("message-preview");
  preview.setAttribute("screen", "alerts");
  main.appendChild(preview);

  main.appendChild(P.el("h1", "", A.title));
  main.appendChild(P.el("p", "muted", A.intro));

  // No usual trip or no days of travel: no alert can be sent (SPEC-03, When things go wrong).
  if (!P.scenario.setup) {
    ["usual_trip", "days"].forEach(function (what) {
      const m = document.createElement("missing-setup");
      m.setAttribute("what", what);
      main.appendChild(m);
    });
    return;
  }

  main.appendChild(P.el("p", "", P.fill(A.for_trip, { trip: P.followedTrip().name, days: DATA.profile.days.join(", ") })));
  if (!DATA.profile.channels.length) main.appendChild(P.el("p", "notice", A.no_channel));

  ["alert-settings", "alert-log", "announced-list"].forEach(function (tag) {
    main.appendChild(document.createElement(tag));
  });
})();
