/*
 * Component: <leg-problem>
 * Defined in: SPEC-01 (Architecture)
 * Used by: SPEC-02 (the section of a leg made on one's own), SPEC-04 (the leg on Today)
 * Reads: `DATA.leg_events["<trip>-<leg number>"]` for the current scenario
 * Reacts to: none
 */
(function () {
  const P = Proto, R = P.T.run;

  // <leg-problem leg="T1-1">: what changes a car or walking leg (traffic, an accident, works, a closed street),
  // with the extra minutes, the way round and its source; nothing when the leg is clear.
  class LegProblem extends HTMLElement {
    connectedCallback() {
      const set = DATA.leg_events[this.getAttribute("leg")];
      const events = set ? (set.by_scenario[P.dataKey] || []) : [];
      const self = this;
      events.forEach(function (ev) {
        self.appendChild(P.el("p", "state state-late", P.fill(R.leg_problem, { kind: R.leg_kinds[ev.kind] || ev.kind, minutes: ev.extra_minutes })));
        self.appendChild(P.el("p", "", ev.text));
        if (ev.detour) self.appendChild(P.el("p", "", R.detour + ": " + ev.detour));
        self.appendChild(P.el("p", "meta", P.fill(P.T.common.fact_meta, ev)));
      });
    }
  }

  customElements.define("leg-problem", LegProblem);
})();
