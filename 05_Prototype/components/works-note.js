/*
 * Component: <works-note>
 * Defined in: SPEC-09 (Architecture), used only there
 * Used by: SPEC-09, on the Way detail page
 * Reads: `DATA.timing.works`, `DATA.timing.arrival`, the door at the end of the trip
 * Reacts to: none
 */
(function () {
  const P = Proto, TM = P.T.timing;

  // <works-note>: the arrival at the door, planned and expected at real times, and with the works announced.
  class WorksNote extends HTMLElement {
    connectedCallback() {
      const t = DATA.timing, door = P.doorName(P.trip(t.trip).to);
      this.className = "card";
      this.appendChild(P.el("h2", "", P.fill(TM.arrival, { door: door })));
      this.appendChild(P.el("p", "", P.fill(TM.planned_arrival, { time: t.arrival.planned })));
      this.appendChild(P.el("p", "state", P.fill(TM.expected_arrival, { time: t.arrival.expected })));
      if (t.works) this.appendChild(P.el("p", "notice", P.fill(TM.with_works, Object.assign({ door: door, time: t.arrival.works }, t.works))));
    }
  }

  customElements.define("works-note", WorksNote);
})();
