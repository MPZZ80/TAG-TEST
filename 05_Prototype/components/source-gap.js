/*
 * Component: <source-gap>
 * Defined in: SPEC-02 (Architecture), used only there
 * Used by: SPEC-02
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
      const byLabel = {};
      s.facts.forEach(function (f) { (byLabel[f.label] = byLabel[f.label] || []).push(f); });
      const self = this;
      Object.keys(byLabel).forEach(function (label) {
        const facts = byLabel[label];
        const values = facts.map(function (f) { return f.value; });
        if (facts.length < 2 || new Set(values).size < 2) return;
        const box = P.el("div", "card notice");
        box.appendChild(P.el("p", "", P.fill(R.disagree, {
          label: label.toLowerCase(),
          values: facts.map(function (f) { return f.value + " (" + f.source + ")"; }).join(", ")
        })));
        const times = values.map(minutes).filter(function (m) { return m !== null; });
        if (times.length > 1) box.appendChild(P.el("p", "meta", P.fill(R.gap, { minutes: Math.max.apply(null, times) - Math.min.apply(null, times) })));
        facts.forEach(function (f) { const line = document.createElement("fact-line"); line.fact = f; box.appendChild(line); });
        self.appendChild(box);
      });
    }
  }

  customElements.define("source-gap", SourceGap);
})();
