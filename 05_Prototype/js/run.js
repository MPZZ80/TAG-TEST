/*
 * Script: run (page PG-02, Run). Shows SPEC-02, the real state of the run.
 * The runs of one trip door to door, each as a <run-card> in the order of its legs; the alternatives for a run
 * that is late or cancelled; the commuter's other trips. With nothing set up, only <first-trip-cta>.
 * Uses the components <run-card>, <fact-line>, <usual-delay>, <source-gap>, <leg-alternatives>, <trip-card>, <first-trip-cta>.
 */
(function () {
  const P = Proto, R = P.T.run;

  P.shell();
  const main = document.querySelector("main");
  main.appendChild(P.el("h1", "", R.title));

  // Nothing set up: no trip, so no run to show; the page invites to set up the first trip.
  if (!P.scenario.setup) {
    main.appendChild(document.createElement("first-trip-cta"));
    return;
  }

  // The trip: ?trip=ID, else the trip of the run asked with ?run=, else the trip followed today.
  const askedRun = P.params.get("run");
  const trip = P.trip(P.params.get("trip"))
    || DATA.profile.trips.find(function (t) { return t.legs.some(function (l) { return l.run === askedRun; }); })
    || P.followedTrip();
  main.appendChild(P.el("p", "muted", trip.name));

  // With an alternative chosen, the legs from the replaced one to the door are the alternative's.
  const today = P.effectiveTrip(trip);
  if (today.chosen) {
    const box = P.el("div", "card notice");
    box.appendChild(P.el("p", "", P.fill(R.chosen_notice, { service: today.chosen.alt.service, instead: DATA.runs[today.chosen.run].service,
      door: P.doorName(trip.to), time: today.chosen.alt.door_arrival })));
    const undo = P.el("p");
    undo.appendChild(P.link("run.html", R.undo, { trip: trip.id, nochoice: "1" }));
    box.appendChild(undo);
    main.appendChild(box);
  }

  // Every leg in a section of its own, in the order of the trip, with its means of transport. A leg with a run
  // holds the run and, if it is late or cancelled, the alternatives for that same leg; a leg the commuter makes
  // on their own (car, on foot) holds its means and time. The next leg is a separate section.
  today.legs.forEach(function (l, n) {
    const mode = P.T.modes[l.mode] || l.mode;
    const section = P.el("section", "leg");
    if (l.run) section.id = l.run;
    section.appendChild(P.el("h2", "", P.fill(R.leg_title, { n: n + 1, total: today.legs.length, stage: l.stage, mode: mode })));
    section.appendChild(P.el("p", "meta", P.fill(R.leg_route, l)));
    main.appendChild(section); // in the page first, so that the components draw themselves
    if (l.chosen && l.dep) {
      const c = P.el("div", "card");
      c.appendChild(P.el("h3", "", l.service));
      c.appendChild(P.el("p", "meta", R.chosen_label));
      c.appendChild(P.el("p", "", P.fill(R.times, l)));
      section.appendChild(c);
      return;
    }
    if (!l.run || !DATA.runs[l.run]) {
      const own = P.el("div", "card");
      own.appendChild(P.el("p", "", P.fill(R.own_leg, { mode: mode, from: l.from, to: l.to, minutes: l.minutes })));
      own.appendChild(P.el("p", "meta", R.own_leg_note));
      section.appendChild(own);
      const problem = document.createElement("leg-problem"); // traffic, an accident, works or a closed street
      if (!l.chosen) problem.setAttribute("leg", trip.id + "-" + (trip.legs.indexOf(l) + 1));
      own.appendChild(problem);
      return;
    }
    const card = document.createElement("run-card");
    card.setAttribute("run", l.run);
    section.appendChild(card);
    const s = P.runState(l.run);
    if (s.state === "late" || s.state === "cancelled") {
      const alt = document.createElement("leg-alternatives");
      alt.setAttribute("run", l.run);
      alt.setAttribute("trip", trip.id);
      section.appendChild(alt);
    }
  });

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

  // The other trips door to door, in a section of their own.
  const others = DATA.profile.trips.filter(function (t) { return t.id !== trip.id; });
  if (others.length) {
    main.appendChild(P.el("h2", "", R.other_trips));
    others.forEach(function (t) {
      const c = document.createElement("trip-card");
      c.setAttribute("trip", t.id);
      main.appendChild(c);
    });
  }
})();
