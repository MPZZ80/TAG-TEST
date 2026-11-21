/*
 * Component: <today-trip>
 * Defined in: SPEC-04 (Architecture), used only there
 * Used by: SPEC-04, first on the Today page
 * Reads: the trip followed today (`DATA.profile.trips`) as changed by a chosen alternative, `DATA.runs`,
 *   `DATA.connections`, `DATA.leg_events`, `DATA.scenarios`
 * Reacts to: the name of a leg, which opens the Run page on that leg (SPEC-02); the change (SPEC-07);
 *   confirming the run taken today, or taking another, which becomes the trip of the day (SPEC-04 rule 4).
 *   Each leg shows its state: to do, in progress or completed, from the commuter's position (SPEC-01, States)
 */
(function () {
  const P = Proto, T = P.T, TD = T.today, R = T.run;

  // Confirm the run taken today, or take another of the same leg (SPEC-04 rule 4): another run becomes the trip of
  // the day through the same choice as an alternative on Run (?choice=RUN:ALT).
  function runChoice(id, s, mode) {
    const others = (s.run.alternatives || []).filter(function (a) { return a.mode === mode; });
    if (!others.length) return document.createTextNode(""); // no other run of this leg to choose
    const box = P.el("details");
    box.appendChild(P.el("summary", "", TD.confirm_title));
    const note = P.el("p", "meta");
    note.setAttribute("role", "status");
    const ok = P.el("button", "", TD.confirm);
    ok.type = "button";
    ok.addEventListener("click", function () {
      note.textContent = P.fill(TD.confirmed, { run: s.run.service }) + " " + TD.not_kept;
    });
    box.appendChild(ok);
    const list = P.el("ul", "list");
    others.forEach(function (a) {
      const li = P.el("li");
      li.appendChild(document.createTextNode(a.service + " · " + P.fill(TD.run_times, a) + " "));
      li.appendChild(P.link("today.html", TD.take_other, { choice: id + ":" + a.id }));
      list.appendChild(li);
    });
    box.appendChild(list);
    box.appendChild(note);
    return box;
  }

  // <today-trip trip="ID">: the trip of the day divided into legs, each in a section of its own with its means of
  // transport, its run or its time, the change, and the arrival at the door.
  class TodayTrip extends HTMLElement {
    connectedCallback() {
      const planned = P.trip(this.getAttribute("trip")) || P.followedTrip();
      const trip = P.effectiveTrip(planned); // with an alternative chosen, its legs replace the planned ones (SPEC-02)
      const conn = trip.chosen ? null : DATA.connections.by_scenario[P.scenarioKey];
      const broken = !trip.chosen && P.scenario.trip_state === "broken";
      const self = this;
      this.appendChild(P.el("h2", "", trip.name));
      const state = P.el("div", trip.chosen ? "card notice" : "");
      state.appendChild(P.el("p", P.stateClass(broken ? "cancelled" : "on time"), trip.chosen
        ? P.fill(R.chosen_notice, { service: trip.chosen.alt.service, instead: DATA.runs[trip.chosen.run].service, door: P.doorName(trip.to), time: trip.chosen.alt.door_arrival })
        : T.states.trip[P.scenario.trip_state] || P.scenario.trip_state));
      if (trip.chosen) {
        const undo = P.el("p");
        undo.appendChild(P.link("today.html", R.undo, { nochoice: "1" }));
        state.appendChild(undo);
      }
      this.appendChild(state);

      const states = P.legStates(trip.legs); // to do, in progress, completed, from the commuter's position
      trip.legs.forEach(function (l, n) {
        const mode = T.modes[l.mode] || l.mode;
        const section = P.el("section", "leg leg-" + states[n]);
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
        const head = P.el("p");
        head.appendChild(document.createTextNode(r.service + " · "));
        head.appendChild(P.el("span", P.stateClass(s.facts.length ? s.state : "no news"), s.facts.length ? P.fill(T.states.run[s.state], s) : T.states.run["no news"]));
        section.appendChild(head);
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
        if (states[n] === "todo" && !trip.chosen) section.appendChild(runChoice(l.run, s, l.mode));
      });

      const doorName = P.doorName(trip.to);
      const end = P.el("div", "card");
      if (trip.chosen) {
        end.appendChild(P.el("p", "", P.fill(TD.door, { door: doorName, time: trip.chosen.alt.door_arrival })));
      } else if (broken || !conn || !conn.door_arrival || conn.door_arrival === "—") {
        end.appendChild(P.el("p", "notice", P.fill(TD.door_unknown, { door: doorName })));
        const out = P.el("p");
        out.appendChild(P.link("ways_out.html", TD.ways_out));
        end.appendChild(out);
      } else {
        end.appendChild(P.el("p", "", P.fill(TD.door, { door: doorName, time: conn.door_arrival })));
      }
      this.appendChild(end);
    }
  }

  customElements.define("today-trip", TodayTrip);
})();
