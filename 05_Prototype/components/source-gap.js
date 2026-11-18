/*
 * Component: <source-gap>
 * Defined in: SPEC-02 (Architecture), used only there
 * Used by: SPEC-02, inside the dialog opened from the info button of <run-card>
 * Reads: the facts of `DATA.runs[run]` for the current scenario
 * Reacts to: none
 */
(function () {
  const P = Proto, R = P.T.run;

  function minutes(value) {
    const m = /(\d{1,2}):(\d{2})/.exec(value);
    return m ? Number(m[1]) * 60 + Number(m[2]) : null;
  }

  // <source-gap run="ID">: the figures two sources give for the same thing, and the gap between them.
  class SourceGap extends HTMLElement {
    connectedCallback() {
      const s = P.runState(this.getAttribute("run"));
      const self = this;
      P.disagreeing(s.facts).forEach(function (facts) {
        self.appendChild(P.el("p", "", P.fill(R.disagree, {
          label: facts[0].label.toLowerCase(),
          values: facts.map(function (f) { return f.value + " (" + f.source + ")"; }).join(", ")
        })));
        const times = facts.map(function (f) { return minutes(f.value); }).filter(function (m) { return m !== null; });
        if (times.length > 1) self.appendChild(P.el("p", "meta", P.fill(R.gap, { minutes: Math.max.apply(null, times) - Math.min.apply(null, times) })));
        facts.forEach(function (f) { const line = document.createElement("fact-line"); line.fact = f; self.appendChild(line); });
      });
    }
  }

  customElements.define("source-gap", SourceGap);
})();
