/*
 * Component: <missing-setup>
 * Defined in: SPEC-01 (Architecture, Initial set-up)
 * Used by: every specification
 * Reads: `DATA.ui_text.setup[what]`
 * Reacts to: none (the "Set it up" link leads to the set-up)
 */
(function () {
  const P = Proto, T = P.T, fill = P.fill, el = P.el, link = P.link,
    scenarioKey = P.scenarioKey, runState = P.runState, stateClass = P.stateClass;

  // <missing-setup what="usual_trip">: what is missing, and where it is set up (SPEC-01, Initial set-up).
  class MissingSetup extends HTMLElement {
    connectedCallback() {
      const what = T.setup[this.getAttribute("what")] || this.getAttribute("what");
      const p = el("p", "notice", fill(T.common.missing, { what: what.toLowerCase() }) + " ");
      p.appendChild(link("setup.html", T.common.set_it_up));
      this.appendChild(p);
    }
  }

  customElements.define("missing-setup", MissingSetup);
})();
