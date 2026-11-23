/*
 * Script: run (page PG-02, Run). Shows SPEC-02, the real state of one leg: its run, the planned and expected times
 * of its stops, and the alternatives when it is late or cancelled; or, for a leg made on one's own or chosen from
 * an alternative, its means and times. The whole trip, leg by leg, is on Today (SPEC-04).
 * Uses the components <page-head>, <leg-map>, <run-card>, <run-stops>, <leg-card>, <leg-alternatives>, <share-updates>,
 * <confirm-choice>, <sources-dialog> and <first-trip-cta>.
 */
(function () {
  const P = Proto, R = P.T.run;

  P.shell();
  const main = document.querySelector("main");
  const back = ["today.html", P.travelDay ? R.back_today : R.back_today_off]; // back to Today, at the top on the left

  // Nothing set up: no trip, so no leg to show; the page invites to set up the first trip.
  if (!P.scenario.setup) {
    P.head(main, { back: back, title: R.title });
    main.appendChild(document.createElement("first-trip-cta"));
    return;
  }

  // The trip: ?trip=ID, else the trip of the run asked with ?run=, else the trip followed today.
  const askedRun = P.params.get("run");
  const trip = P.trip(P.params.get("trip"))
    || DATA.profile.trips.find(function (t) { return t.legs.some(function (l) { return l.run === askedRun; }); })
    || P.followedTrip();
  const today = P.effectiveTrip(trip);

  // The leg: ?leg=N (its number in the trip as it is today), else the leg of ?run=, else the first leg with a run.
  let n = Number(P.params.get("leg")) - 1;
  if (!(n >= 0 && n < today.legs.length)) n = today.legs.findIndex(function (l) { return askedRun ? l.run === askedRun : (l.run || (l.chosen && l.dep)); });
  if (n < 0) n = 0;
  const l = today.legs[n], mode = P.T.modes[l.mode] || l.mode;
  const legState = P.legStates(today.legs)[n];

  // The page is the leg: its title and its two ends head the page; no side line, which marks legs only on Today.
  P.head(main, { back: back, title: P.fill(R.leg_title, { n: n + 1, total: today.legs.length, stage: l.stage, mode: mode }),
    intro: P.fill(R.leg_route, l), badge: [legState, R.leg_states[legState]] });
  const section = P.el("section", "map-stage");
  main.appendChild(section); // in the page first, so that the components draw themselves

  // The map of the leg, first, with the card floating over it (06_Design/Style.md, the map is always there):
  // its route, the vehicle where it is now, the alternatives in grey.
  const map = document.createElement("leg-map");
  if (l.run && DATA.runs[l.run] && !l.chosen) map.setAttribute("run", l.run);
  else if (l.chosen && today.chosen) map.leg = { mode: l.mode, route: today.chosen.alt.route };
  else if (l.route) {
    map.leg = l;
    const set = DATA.leg_events[trip.id + "-" + (trip.legs.indexOf(l) + 1)];
    map.events = set ? set.by_scenario[P.dataKey] || [] : [];
  }
  if (legState === "active") map.passenger = P.passenger(l); // where the commuter is, with consent
  section.appendChild(map);

  if ((l.chosen && l.dep) || !l.run || !DATA.runs[l.run]) {
    const card = document.createElement("leg-card");
    card.leg = l;
    if (!l.chosen) card.setAttribute("leg", trip.id + "-" + (trip.legs.indexOf(l) + 1));
    section.appendChild(card);
  } else {
    const card = document.createElement("run-card");
    card.setAttribute("run", l.run);
    section.appendChild(card);
    const stops = document.createElement("run-stops");
    stops.setAttribute("run", l.run);
    card.insertBefore(stops, card.querySelector("details")); // the stops before the details
    const s = P.runState(l.run);
    if (s.state === "late" || s.state === "cancelled") {
      const alt = document.createElement("leg-alternatives");
      alt.setAttribute("run", l.run);
      alt.setAttribute("trip", trip.id);
      section.appendChild(alt);
    }
  }

  // Those who wait (SPEC-06): the trip shared from the phone's share sheet, on every leg.
  const share = document.createElement("share-updates");
  share.setAttribute("trip", trip.id);
  main.appendChild(share);

  // An alternative tapped is drawn in colour on the map; "Choose" asks, then the trip of today follows it.
  const confirm = main.appendChild(document.createElement("confirm-choice"));
  main.addEventListener("alt-select", function (e) { map.highlight(e.detail.alt); });
  main.addEventListener("alt-choose", function (e) {
    const run = DATA.runs[e.detail.run], alt = run.alternatives.find(function (a) { return a.id === e.detail.alt; });
    map.highlight(alt.id);
    confirm.ask(P.fill(R.confirm_title, { service: alt.service, instead: run.service }), R.confirm_text, function () {
      location.href = P.href("today.html", { choice: e.detail.run + ":" + alt.id });
    });
  });

  // What each source says, in a dialog opened from the info button next to the state.
  const sources = main.appendChild(document.createElement("sources-dialog"));
  main.addEventListener("sources", function (e) { sources.open(e.detail.run); });
})();
