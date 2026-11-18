/*
 * Component: <scenario-switch>
 * Defined in: SPEC-01 (Architecture)
 * Used by: every screen, through the app bar
 * Reads: `DATA.scenarios`
 * Reacts to: choosing a scenario reloads the page with `?scenario=`
 */
(function () {
  const P = Proto, T = P.T, fill = P.fill, el = P.el, link = P.link,
    scenarioKey = P.scenarioKey, runState = P.runState, stateClass = P.stateClass;

  // <scenario-switch>: for testing, not part of the product (SPEC-01, Architecture).
  class ScenarioSwitch extends HTMLElement {
    connectedCallback() {
      const label = el("label", "meta", T.common.scenario + " ");
      const select = el("select");
      Object.keys(DATA.scenarios.list).forEach(function (k) {
        const o = el("option", "", DATA.scenarios.list[k].label);
        o.value = k;
        if (k === scenarioKey) o.selected = true;
        select.appendChild(o);
      });
      select.addEventListener("change", function () {
        const q = new URLSearchParams(location.search);
        q.set("scenario", select.value);
        location.search = q.toString();
      });
      label.appendChild(select);
      this.appendChild(label);
    }
  }

  customElements.define("scenario-switch", ScenarioSwitch);
})();
