/*
 * Component: <today-trip>
 * Defined in: SPEC-04 (Architecture), used only there
 * Used by: SPEC-04, first on the Today page
 * Reads: the trip followed today (`DATA.profile.trips`) as changed by a chosen alternative, `DATA.runs`,
 *   `DATA.connections`, `DATA.leg_events`, `DATA.scenarios`; holds <share-updates> in the box of the arrival (SPEC-06),
 *   with the link to the trip at real times (SPEC-09, `DATA.timing`)
 * Reacts to: the name of a leg, which opens the Run page on that leg (SPEC-02); the change (SPEC-07).
 *   Each leg shows its state: to do, in progress or completed, from where the configurator puts the commuter (SPEC-01, States)
 */
(function () {
  const P = Proto, T = P.T, TD = T.today, R = T.run;

  // <today-trip trip="ID">: the trip of the day divided into legs, each in a section of its own with its means of
  // transport, its run or its time, the change, and the arrival at the door.
  class TodayTrip extends HTMLElement {
    connectedCallback() {
      const planned = P.trip(this.getAttribute("trip")) || P.followedTrip();
      const trip = P.effectiveTrip(planned); // with an alternative chosen, its legs replace the planned ones (SPEC-02)
      const conn = trip.chosen ? null : DATA.connections.by_scenario[P.dataKey];
      const tripState = P.tripState(), broken = !trip.chosen && tripState === "broken";
      const self = this;
      this.appendChild(P.el("h2", "", trip.name));
      const state = P.el("div", trip.chosen ? "card notice" : "");
      state.appendChild(P.el("p", P.stateClass(broken ? "cancelled" : tripState === "planned" ? "planned" : "on time"), trip.chosen
        ? P.fill(R.chosen_notice, { service: trip.chosen.alt.service, instead: DATA.runs[trip.chosen.run].service, door: P.doorName(trip.to), time: trip.chosen.alt.door_arrival })
        : T.states.trip[tripState] || tripState));
      if (trip.chosen) {
        const undo = P.el("p");
        undo.appendChild(P.link("today.html", R.undo, { nochoice: "1" }));
        state.appendChild(undo);
      }
      this.appendChild(state);

      const states = P.legStates(trip.legs); // to do, in progress, completed, from the commuter's position
      trip.legs.forEach(function (l, n) {
        const mode = T.modes[l.mode] || l.mode;
        const section = P.el("section", "leg leg-" + states[n] + " mode-" + l.mode);
        const title = P.el("h3");
        title.appendChild(P.link("run.html", P.fill(R.leg_title, { n: n + 1, total: trip.legs.length, stage: l.stage, mode: mode }), { trip: planned.id, leg: n + 1 }));
        title.appendChild(document.createTextNode(" "));
        title.appendChild(P.el("span", "badge badge-" + states[n], R.leg_states[states[n]]));
        section.appendChild(title);
        section.appendChild(P.el("p", "meta", P.fill(R.leg_route, l)));
        self.appendChild(section);

        if (l.chosen && l.dep) {
          section.appendChild(P.el("p", "", l.service + " · " + P.fill(TD.run_times, l)));
          return;
        }
        if (!l.run || !DATA.runs[l.run]) {
          section.appendChild(P.el("p", "", mode + (l.minutes ? " · about " + l.minutes + " min" : "")));
          const problem = document.createElement("leg-problem"); // not on a completed leg: it no longer matters
          if (!l.chosen && states[n] !== "done") problem.setAttribute("leg", planned.id + "-" + (planned.legs.indexOf(l) + 1));
          section.appendChild(problem);
          return;
        }
        const s = P.runState(l.run), r = s.run;
        const known = s.planned || s.facts.length > 0; // planned: a day with no travel, no live facts yet
        const head = P.el("p");
        head.appendChild(document.createTextNode(r.service + " · "));
        head.appendChild(P.el("span", P.stateClass(known ? s.state : "no news"), known ? P.fill(T.states.run[s.state], s) : T.states.run["no news"]));
        section.appendChild(head);
        // The news about this run, on its own leg and not above the trip; it leads to the leg and its alternatives.
        (DATA.notifications.today[P.dataKey] || []).filter(function (m) { return m.run === l.run; }).forEach(function (m) {
          const news = P.el("p", "notice");
          news.appendChild(P.link("run.html", m.text, { trip: planned.id, leg: n + 1 }));
          section.appendChild(news);
        });
        if (s.state !== "cancelled") {
          section.appendChild(P.el("p", "", P.fill(TD.run_times, { from: r.from, dep: s.exp_dep, to: r.to, arr: s.exp_arr })));
          let platform = P.fill(TD.platform, s);
          if (s.platform !== r.usual_platform) platform += " · " + P.fill(TD.platform_changed, { usual: r.usual_platform });
          if (s.platform_may_change) platform += " · " + TD.platform_may_change;
          section.appendChild(P.el("p", s.platform !== r.usual_platform ? "state-late" : "", platform));
        }
        // The change after this run, from the connection of the trip.
        if (DATA.connections.from_run === l.run && conn && !broken) {
          const next = DATA.runs[DATA.connections.to_run];
          const c = P.el("p", "meta");
          c.appendChild(P.link("connection.html", P.fill(TD.change, {
            station: DATA.connections.station, service: next.service, platform: next.platform_dep,
            state: T.states.connection[conn.state] || conn.state
          })));
          section.appendChild(c);
        }
      });

      const doorName = P.doorName(trip.to);
      const end = P.el("div", "card");
      if (trip.chosen) {
        end.appendChild(P.el("p", "", P.fill(TD.door, { door: doorName, time: trip.chosen.alt.door_arrival })));
      } else if (broken || !conn || !conn.door_arrival || conn.door_arrival === "—") {
        end.appendChild(P.el("p", "notice", P.fill(TD.door_unknown, { door: doorName })));
        const out = P.el("p");
        const b = planned.legs.findIndex(function (l) { return l.run && P.runState(l.run).state === "cancelled"; });
        out.appendChild(P.link("run.html", TD.ways_out, { trip: planned.id, leg: b + 1 })); // the ways out are on the leg that broke (SPEC-05)
        end.appendChild(out);
      } else {
        end.appendChild(P.el("p", "", P.fill(TD.door, { door: doorName, time: conn.door_arrival })));
      }
      if (!trip.chosen && planned.id === DATA.timing.trip) { // the trip at the length each leg really takes (SPEC-09)
        const timing = P.el("p");
        timing.appendChild(P.link("way.html", TD.link_timing, { trip: planned.id }));
        end.appendChild(timing);
      }
      const share = document.createElement("share-updates"); // next to the arrival, for whoever waits (SPEC-06)
      share.setAttribute("trip", planned.id);
      end.appendChild(share);
      this.appendChild(end);
    }
  }

  customElements.define("today-trip", TodayTrip);
})();
