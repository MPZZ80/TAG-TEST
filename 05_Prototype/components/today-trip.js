/*
 * Component: <today-trip>
 * Defined in: SPEC-04 (Architecture), used only there
 * Used by: SPEC-04, first on the Today page
 * Reads: the trip followed today (`DATA.profile.trips`), `DATA.runs`, `DATA.connections`, `DATA.scenarios`
 * Reacts to: opening a run (leads to the Run page, SPEC-02) or the change (leads to the Connection page, SPEC-07)
 */
(function () {
  const P = Proto, T = P.T, TD = T.today;

  // <today-trip trip="ID">: each leg in order with its run, state and platforms, the change, and the arrival at the door.
  class TodayTrip extends HTMLElement {
    connectedCallback() {
      const planned = P.trip(this.getAttribute("trip")) || P.followedTrip();
      const trip = P.effectiveTrip(planned); // with an alternative chosen, its legs replace the planned ones (SPEC-02)
      const conn = trip.chosen ? null : DATA.connections.by_scenario[P.scenarioKey];
      const broken = !trip.chosen && P.scenario.trip_state === "broken";
      this.className = "card";
      this.appendChild(P.el("h2", "", trip.name));
      this.appendChild(P.el("p", P.stateClass(broken ? "cancelled" : "on time"), trip.chosen
        ? P.fill(T.run.chosen_notice, { service: trip.chosen.alt.service, instead: DATA.runs[trip.chosen.run].service, door: P.doorName(trip.to), time: trip.chosen.alt.door_arrival })
        : T.states.trip[P.scenario.trip_state] || P.scenario.trip_state));

      const list = P.el("ol", "legs");
      trip.legs.forEach(function (l) {
        const li = P.el("li");
        const mode = T.modes[l.mode] || l.mode;
        if (l.chosen && l.dep) {
          li.appendChild(P.el("p", "", l.service + " · " + P.fill(TD.run_times, l)));
          list.appendChild(li);
          return;
        }
        if (!l.run || !DATA.runs[l.run]) {
          li.appendChild(P.el("p", "muted", mode + ": " + l.from + " → " + l.to + (l.minutes ? " · " + l.minutes + " min" : "")));
          const problem = document.createElement("leg-problem");
          if (!l.chosen) problem.setAttribute("leg", planned.id + "-" + (planned.legs.indexOf(l) + 1));
          li.appendChild(problem);
          list.appendChild(li);
          return;
        }
        const s = P.runState(l.run), r = s.run;
        const head = P.el("p");
        head.appendChild(P.link("run.html", r.service, { run: l.run }));
        head.appendChild(document.createTextNode(" · "));
        head.appendChild(P.el("span", P.stateClass(s.facts.length ? s.state : "no news"), s.facts.length ? P.fill(T.states.run[s.state], s) : T.states.run["no news"]));
        li.appendChild(head);
        if (s.state !== "cancelled") {
          li.appendChild(P.el("p", "", P.fill(TD.run_times, { from: r.from, dep: s.exp_dep, to: r.to, arr: s.exp_arr })));
          let platform = P.fill(TD.platform, s);
          if (s.platform !== r.usual_platform) platform += " · " + P.fill(TD.platform_changed, { usual: r.usual_platform });
          if (s.platform_may_change) platform += " · " + TD.platform_may_change;
          li.appendChild(P.el("p", s.platform !== r.usual_platform ? "state-late" : "", platform));
        }
        // The change after this run, from the connection of the trip.
        if (DATA.connections.from_run === l.run && conn && !broken) {
          const next = DATA.runs[DATA.connections.to_run];
          const c = P.el("p", "meta");
          c.appendChild(P.link("connection.html", P.fill(TD.change, {
            station: DATA.connections.station, service: next.service, platform: next.platform_dep,
            state: T.states.connection[conn.state] || conn.state
          })));
          li.appendChild(c);
        }
        list.appendChild(li);
      });
      this.appendChild(list);

      const doorName = P.doorName(trip.to);
      if (trip.chosen) {
        this.appendChild(P.el("p", "", P.fill(TD.door, { door: doorName, time: trip.chosen.alt.door_arrival })));
      } else if (broken || !conn || !conn.door_arrival || conn.door_arrival === "—") {
        this.appendChild(P.el("p", "notice", P.fill(TD.door_unknown, { door: doorName })));
        const out = P.el("p");
        out.appendChild(P.link("ways_out.html", TD.ways_out));
        this.appendChild(out);
      } else {
        this.appendChild(P.el("p", "", P.fill(TD.door, { door: doorName, time: conn.door_arrival })));
      }
    }
  }

  customElements.define("today-trip", TodayTrip);
})();
