/*
 * Component: <run-card>
 * Defined in: SPEC-01 (Architecture)
 * Used by: SPEC-02, SPEC-04, SPEC-07
 * Reads: `DATA.runs[run]` and its `by_scenario` entry for the current scenario
 * Reacts to: the info button next to the state (sends a "sources" event when two sources disagree);
 *   "Details" opens the facts and how late the run usually is
 */
(function () {
  const P = Proto, T = P.T, fill = P.fill, el = P.el;

  // <run-card run="ID">: one run with its state; the facts behind it are in "Details".
  class RunCard extends HTMLElement {
    connectedCallback() {
      const s = P.runState(this.getAttribute("run"));
      if (!s) return;
      const r = s.run, R = T.run, known = s.facts.length > 0, self = this;
      this.className = "card";
      this.appendChild(el("h3", "", r.service));
      this.appendChild(el("p", "meta", fill(R.operator, r)));

      const state = el("p", P.stateClass(known ? s.state : "no news"), known ? fill(T.states.run[s.state], s) : T.states.run["no news"]);
      if (P.disagreeing(s.facts).length) {
        const info = el("button", "info", "i");
        info.type = "button";
        info.setAttribute("aria-label", R.sources_button);
        info.title = R.sources_button;
        info.addEventListener("click", function () { self.dispatchEvent(new CustomEvent("sources", { bubbles: true, detail: { run: s.id } })); });
        state.appendChild(document.createTextNode(" "));
        state.appendChild(info);
      }
      this.appendChild(state);

      // A cancelled run shows only that it is cancelled, and why.
      if (s.state !== "cancelled") {
        this.appendChild(el("p", "", R.planned + ": " + fill(R.times, r)));
        if (known) this.appendChild(el("p", "", R.expected + ": " + fill(R.times, { from: r.from, dep: s.exp_dep, to: r.to, arr: s.exp_arr })));
        this.appendChild(el("p", "", fill(T.today.platform, s) + (s.platform_may_change ? " · " + T.today.platform_may_change : "")));
        if (known && s.position) this.appendChild(el("p", "", R.position + ": " + s.position));
      }
      // "Why" only when there is a problem and a source gives the reason.
      if (s.reason && (s.state === "late" || s.state === "cancelled")) this.appendChild(el("p", "", R.reason + ": " + s.reason));
      if (!known) this.appendChild(el("p", "notice", fill(R.no_news, { time: P.scenario.now })));

      if (known || r.usual_delay) {
        const details = el("details");
        details.appendChild(el("summary", "", R.details));
        s.facts.forEach(function (f) { const line = document.createElement("fact-line"); line.fact = f; details.appendChild(line); });
        const usual = document.createElement("usual-delay");
        usual.setAttribute("run", s.id);
        details.appendChild(usual);
        this.appendChild(details);
      }
    }
  }

  customElements.define("run-card", RunCard);
})();
