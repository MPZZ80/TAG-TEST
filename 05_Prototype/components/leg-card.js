/*
 * Component: <leg-card>
 * Defined in: SPEC-02 (Architecture), used only there
 * Used by: SPEC-02, on the Run page, for a leg with no run of the schedule: a leg made on one's own (car, on foot),
 *   or one taken from a chosen alternative
 * Reads: the leg set on `.leg`, and attribute `leg` ("<trip>-<leg number>") for what changes it (`DATA.leg_events`)
 * Reacts to: none; holds <leg-problem>
 */
(function () {
  const P = Proto, R = P.T.run;

  // <leg-card leg="T1-1">: a leg's means and times, or, for a leg on one's own, its time and what changes it.
  class LegCard extends HTMLElement {
    connectedCallback() {
      const l = this.leg, mode = P.T.modes[l.mode] || l.mode;
      this.className = "card";
      if (l.chosen && l.dep) {
        this.appendChild(P.el("h2", "", l.service));
        this.appendChild(P.el("p", "meta", R.chosen_label));
        this.appendChild(P.el("p", "", P.fill(R.times, l)));
        return;
      }
      this.appendChild(P.el("p", "", P.fill(R.own_leg, { mode: mode, from: l.from, to: l.to, minutes: l.minutes })));
      this.appendChild(P.el("p", "meta", R.own_leg_note));
      const problem = document.createElement("leg-problem"); // traffic, an accident, works or a closed street
      if (this.getAttribute("leg")) problem.setAttribute("leg", this.getAttribute("leg"));
      this.appendChild(problem);
    }
  }

  customElements.define("leg-card", LegCard);
})();
