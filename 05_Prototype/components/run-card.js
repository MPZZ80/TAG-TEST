/*
 * Component: <run-card>
 * Defined in: SPEC-01 (Architecture)
 * Used by: SPEC-02, SPEC-04, SPEC-07
 * Reads: `DATA.runs[run]` and its `by_scenario` entry for the current scenario
 * Reacts to: none yet (opening the run is a link)
 */
(function () {
  const P = Proto, T = P.T, fill = P.fill, el = P.el, link = P.link,
    scenarioKey = P.scenarioKey, runState = P.runState, stateClass = P.stateClass;

  // <run-card run="ID">: one run, planned and expected, with every fact and "no news since" when nothing is known.
  class RunCard extends HTMLElement {
    connectedCallback() {
      const s = runState(this.getAttribute("run"));
      if (!s) return;
      const r = s.run, R = T.run;
      this.className = "card";
      this.appendChild(el("h2", "", r.service));
      this.appendChild(el("p", "meta", fill(R.operator, r)));
      this.appendChild(el("p", stateClass(s.facts.length ? s.state : "no news"),
        s.facts.length ? fill(T.states.run[s.state], s) : T.states.run["no news"]));
      this.appendChild(el("p", "", R.planned + ": " + fill(R.times, r)));
      const expected = s.state === "cancelled" ? R.not_running
        : fill(R.times, { from: r.from, dep: s.exp_dep, to: r.to, arr: s.exp_arr });
      if (s.facts.length) this.appendChild(el("p", "", R.expected + ": " + expected));
      this.appendChild(el("p", "", fill(T.today.platform, s) + (s.platform_may_change ? " · " + T.today.platform_may_change : "")));
      if (s.facts.length) {
        this.appendChild(el("p", "", R.position + ": " + (s.position || R.unknown)));
        this.appendChild(el("p", "", R.reason + ": " + (s.reason || R.no_reason)));
      } else {
        this.appendChild(el("p", "notice", fill(R.no_news, { time: DATA.scenarios.list[scenarioKey].now })));
      }
    }
  }

  customElements.define("run-card", RunCard);
})();
