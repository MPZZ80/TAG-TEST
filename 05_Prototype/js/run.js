/*
 * Script: run (page PG-02, Run). Shows SPEC-02, the real state of one leg: its run, the planned and expected times
 * of its stops, and the alternatives when it is late or cancelled; or, for a leg made on one's own or chosen from
 * an alternative, its means and times. The whole trip, leg by leg, is on Today (SPEC-04).
 * Uses the components <run-card>, <fact-line>, <usual-delay>, <source-gap>, <run-stops>, <leg-alternatives>,
 * <leg-problem>, <first-trip-cta>.
 */
(function () {
  const P = Proto, R = P.T.run;

  P.shell();
  const main = document.querySelector("main");
  // Back to Today, at the top on the left, with an arrow.
  const back = P.link("today.html", "← " + R.back_today);
  back.classList.add("back");
  main.appendChild(back);
  main.appendChild(P.el("h1", "", R.title));

  // Nothing set up: no trip, so no leg to show; the page invites to set up the first trip.
  if (!P.scenario.setup) {
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

  main.appendChild(P.el("p", "muted", trip.name));
  const section = P.el("section", "leg");
  section.appendChild(P.el("h2", "", P.fill(R.leg_title, { n: n + 1, total: today.legs.length, stage: l.stage, mode: mode })));
  section.appendChild(P.el("p", "meta", P.fill(R.leg_route, l)));
  main.appendChild(section); // in the page first, so that the components draw themselves

  if (l.chosen && l.dep) {
    const c = P.el("div", "card");
    c.appendChild(P.el("h3", "", l.service));
    c.appendChild(P.el("p", "meta", R.chosen_label));
    c.appendChild(P.el("p", "", P.fill(R.times, l)));
    section.appendChild(c);
  } else if (!l.run || !DATA.runs[l.run]) {
    const own = P.el("div", "card");
    own.appendChild(P.el("p", "", P.fill(R.own_leg, { mode: mode, from: l.from, to: l.to, minutes: l.minutes })));
    own.appendChild(P.el("p", "meta", R.own_leg_note));
    section.appendChild(own);
    const problem = document.createElement("leg-problem"); // traffic, an accident, works or a closed street
    if (!l.chosen) problem.setAttribute("leg", trip.id + "-" + (trip.legs.indexOf(l) + 1));
    own.appendChild(problem);
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

  // What each source says, in a dialog opened from the info button next to the state.
  const dialog = P.el("dialog", "modal");
  main.appendChild(dialog);
  main.addEventListener("sources", function (e) {
    dialog.textContent = "";
    dialog.appendChild(P.el("h2", "", R.sources_title));
    const gap = document.createElement("source-gap");
    gap.setAttribute("run", e.detail.run);
    dialog.appendChild(gap);
    const close = P.el("button", "", R.close);
    close.type = "button";
    close.addEventListener("click", function () { dialog.close(); });
    dialog.appendChild(close);
    dialog.showModal();
  });

})();
