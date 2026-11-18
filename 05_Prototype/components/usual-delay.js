/*
 * Component: <usual-delay>
 * Defined in: SPEC-01 (Architecture)
 * Used by: SPEC-02, SPEC-09
 * Reads: `DATA.runs[run].usual_delay`
 * Reacts to: none
 */
(function () {
  const P = Proto, T = P.T, fill = P.fill, el = P.el, link = P.link,
    scenarioKey = P.scenarioKey, runState = P.runState, stateClass = P.stateClass;

  // <usual-delay run="ID">: how late a run usually is.
  class UsualDelay extends HTMLElement {
    connectedCallback() {
      const r = DATA.runs[this.getAttribute("run")];
      if (r && r.usual_delay) this.appendChild(el("p", "meta", fill(T.run.usual_delay, r.usual_delay)));
    }
  }

  customElements.define("usual-delay", UsualDelay);
})();
