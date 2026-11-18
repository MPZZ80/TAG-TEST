/*
 * Component: <first-trip-cta>
 * Defined in: SPEC-01 (Architecture, Start page, Initial set-up)
 * Used by: SPEC-02, SPEC-17, and the start page
 * Reads: `DATA.ui_text.run.no_trip_*`
 * Reacts to: "Set up your first trip", which leads to the Trips page (or to the screen named in `to`), where a trip is added
 */
(function () {
  const P = Proto, R = P.T.run;

  // <first-trip-cta>: shown in place of a behaviour when the commuter has no trip yet.
  class FirstTripCta extends HTMLElement {
    connectedCallback() {
      this.className = "card cta";
      this.appendChild(P.el("h2", "", R.no_trip_title));
      this.appendChild(P.el("p", "", R.no_trip_text));
      const a = P.link(this.getAttribute("to") || "trips.html", R.no_trip_cta);
      a.classList.add("button");
      this.appendChild(a);
    }
  }

  customElements.define("first-trip-cta", FirstTripCta);
})();
