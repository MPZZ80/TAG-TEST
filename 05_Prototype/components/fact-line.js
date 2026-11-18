/*
 * Component: <fact-line>
 * Defined in: SPEC-01 (Architecture)
 * Used by: SPEC-02, SPEC-04, SPEC-12, SPEC-13
 * Reads: a fact `{label, value, source, time, status}` set on `.fact` before the element is added
 * Reacts to: none
 */
(function () {
  const P = Proto, T = P.T, fill = P.fill, el = P.el, link = P.link,
    scenarioKey = P.scenarioKey, runState = P.runState, stateClass = P.stateClass;

  // <fact-line>: one fact with its source, time and status. Set .fact before adding it to the page.
  class FactLine extends HTMLElement {
    connectedCallback() {
      const f = this.fact;
      if (!f) return;
      this.className = "fact fact-" + f.status;
      const p = el("p");
      p.appendChild(el("strong", "", f.label + ": "));
      p.appendChild(el("span", "fact-value", f.value));
      this.appendChild(p);
      this.appendChild(el("p", "meta", fill(T.common.fact_meta, f)));
    }
  }

  customElements.define("fact-line", FactLine);
})();
