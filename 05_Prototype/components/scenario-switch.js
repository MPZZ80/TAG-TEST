/*
 * Component: <scenario-switch>
 * Defined in: SPEC-01 (Architecture)
 * Used by: every screen, in a bar of its own at the top of the page (common.js)
 * Reads: `DATA.scenarios`, `DATA.config`, the trip followed today (`DATA.profile.trips`) for its legs
 * Reacts to: choosing a scenario, where the commuter is, or the day, which reloads the page with `?scenario=`, `?at=`, `?day=`;
 *   the link to the lock screen, where the messages outside the product are
 */
(function () {
  const P = Proto, C = P.T.common, el = P.el;

  // One choice of the configurator: a select that puts its value in the address and reloads the page.
  function choice(text, name, options, value) {
    const label = el("label", "meta", text + " ");
    const select = el("select");
    options.forEach(function (o) {
      const opt = el("option", "", o.label);
      opt.value = o.value;
      if (o.value === value) opt.selected = true;
      select.appendChild(opt);
    });
    select.addEventListener("change", function () {
      const q = new URLSearchParams(location.search);
      q.set(name, select.value);
      location.search = q.toString();
    });
    label.appendChild(select);
    return label;
  }

  // <scenario-switch>: the configurator, for testing, not part of the product (SPEC-01, Architecture):
  // the scenario, where the commuter is on the trip followed today, and whether today is a travel day.
  class ScenarioSwitch extends HTMLElement {
    connectedCallback() {
      this.className = "config-bar";
      this.setAttribute("role", "region");
      this.setAttribute("aria-label", C.config);
      const scenarios = Object.keys(DATA.scenarios.list).map(function (k) { return { value: k, label: DATA.scenarios.list[k].label }; });
      const legs = P.followedTrip().legs.map(function (l, n) { return { value: "leg-" + (n + 1), label: P.fill(C.at_leg, { n: n + 1, from: l.from, to: l.to }) }; });
      const at = [{ value: "before", label: C.at_before }].concat(legs, [{ value: "after", label: C.at_after }]);
      const days = [{ value: "travel", label: C.day_travel }, { value: "off", label: C.day_off }];
      this.appendChild(choice(C.scenario, "scenario", scenarios, P.scenarioKey));
      const where = choice(C.at, "at", at, P.at);
      where.querySelector("select").disabled = !P.travelDay; // on a day with no travel the commuter is not on a trip
      this.appendChild(where);
      this.appendChild(choice(C.day, "day", days, P.travelDay ? "travel" : "off"));
      this.appendChild(P.link("lockscreen.html", C.lock));
    }
  }

  customElements.define("scenario-switch", ScenarioSwitch);
})();
