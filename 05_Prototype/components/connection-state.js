/*
 * Component: <connection-state>
 * Defined in: SPEC-07 (Architecture), used only there
 * Used by: SPEC-07, on the Connection page
 * Reads: `DATA.connections`, `DATA.runs` (the incoming run as it is now, the connecting run), `DATA.profile.own_rules`,
 *   the hour of the scenario, where the configurator puts the commuter
 * Reacts to: the scenario and the place changing (the page reloads with them)
 */
(function () {
  const P = Proto, T = P.T, C = T.connection;
  const LOOK = { holds: "on time", "at risk": "late", lost: "cancelled" }; // the colour of each state of a connection

  // <connection-state>: the change ahead: does the connection hold with the delay of now, and if not, the next one that does.
  class ConnectionState extends HTMLElement {
    connectedCallback() {
      const k = DATA.connections, c = k.by_scenario[P.dataKey], trip = P.followedTrip();
      const from = P.runState(k.from_run), to = DATA.runs[k.to_run];
      const rule = k.station && (DATA.profile.own_rules.per_station.find(function (r) { return r.station === k.station; }) || {}).minutes;
      const minChange = rule || DATA.profile.own_rules.min_change;
      const n = trip.legs.findIndex(function (l) { return l.run === k.from_run; }) + 1; // the leg that reaches the change

      this.appendChild(P.el("h2", "", P.fill(C.at, k)));
      // The incoming run is cancelled: there is no change to watch; the ways out are on that leg (SPEC-05).
      if (from.state === "cancelled") {
        const p = P.el("p", "notice", P.fill(C.cancelled, { service: from.run.service }));
        this.appendChild(p);
        const out = P.el("p");
        out.appendChild(P.link("run.html", T.today.ways_out, { trip: trip.id, leg: n }));
        this.appendChild(out);
        return;
      }
      const passed = ["leg-3", "leg-4", "after"].indexOf(P.at) !== -1 && P.travelDay; // the commuter is past the change
      const state = from.planned ? "planned" : c.state;
      this.appendChild(P.el("p", P.stateClass(LOOK[state] || "planned"),
        passed ? C.passed : (T.states.connection[state] || C.planned)));

      const list = P.el("ul", "list");
      function row(label, value, meta) {
        const li = P.el("li");
        li.appendChild(P.el("p", "meta", label));
        li.appendChild(P.el("p", "", value));
        if (meta) li.appendChild(P.el("p", "meta", meta));
        list.appendChild(li);
      }
      const arr = from.exp_arr || from.run.arr;
      const fact = (from.facts || [])[0]; // the source of the delay of now
      row(C.arrives, P.fill(C.arr_value, { service: from.run.service, time: arr, platform: P.fill(C.platform, { p: from.run.platform_arr }) }),
        fact ? P.fill(C.source, fact) : (from.planned ? C.from_schedule : null));
      row(C.leaves, P.fill(C.arr_value, { service: to.service, time: to.dep, platform: to.platform_dep }));
      row(C.walk, P.fill(C.minutes, { n: k.walk_minutes }), P.fill(C.board, k));
      row(C.own_rule, P.fill(C.minutes, { n: minChange }), rule ? C.own_rule_station : C.own_rule_default);
      if (typeof c.margin === "number" && !from.planned) row(C.margin, P.fill(C.minutes, { n: c.margin }), c.margin < 0 ? C.margin_short : null);
      this.appendChild(list);

      // Lost: the next connection that holds, and the new arrival at the door (SPEC-07 rule 3).
      if (state === "lost" && c.next_dep && c.next_dep !== "—") {
        this.appendChild(P.el("p", "notice", P.fill(C.next, { service: to.service, time: c.next_dep, door: P.doorName(trip.to), arrival: c.door_arrival })));
      }
      // When the commuter is told, on the lock screen: before the change (provisional, OQ-17).
      if (c.warn_at && !from.planned) this.appendChild(P.el("p", "meta", P.fill(P.scenario.now >= c.warn_at || passed ? C.warned : C.will_warn, { time: c.warn_at })));
    }
  }

  customElements.define("connection-state", ConnectionState);
})();
