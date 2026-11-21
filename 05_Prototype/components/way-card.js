/*
 * Component: <way-card>
 * Defined in: SPEC-01 (Architecture)
 * Used by: SPEC-05 (the ways out), later SPEC-08 (every way door to door)
 * Reads: one way set with .way (an alternative of `DATA.runs[run].alternatives`), .run and .trip for its page
 * Reacts to: "Choose this way", which sends a "choose" event with the way; nothing changes here
 */
(function () {
  const P = Proto, T = P.T, W = T.ways_out;

  // <way-card>: one way of completing a trip: departure, arrival at the door, cost, ticket validity, how full.
  class WayCard extends HTMLElement {
    connectedCallback() {
      const w = this.way, self = this;
      if (!w) return;
      this.className = "card";
      const trip = P.trip(this.trip) || P.followedTrip();
      this.appendChild(P.el("h3", "", w.service));
      this.appendChild(P.el("p", "meta", (T.modes[w.mode] || w.mode) + " · " + w.operator + " · " + w.source));
      this.appendChild(P.el("p", "", P.fill(W.leaves, w)));
      this.appendChild(P.el("p", "state", P.fill(W.at_door, { door: P.doorName(trip.to), time: w.door_arrival })));
      const ticket = P.ticketLine(w);
      this.appendChild(P.el("p", ticket.cls, ticket.text));
      // fullness unknown is said so, never shown as empty (SPEC-05)
      this.appendChild(P.el("p", w.fullness_level === 3 ? "state-late" : "",
        !w.fullness ? W.fullness_unknown : w.fullness_source === "—" ? w.fullness : P.fill(W.fullness, { fullness: w.fullness, source: w.fullness_source })));
      if (w.note) this.appendChild(P.el("p", "meta", w.note));
      const choose = P.el("button", "button", W.choose);
      choose.type = "button";
      choose.addEventListener("click", function () {
        self.dispatchEvent(new CustomEvent("choose", { bubbles: true, detail: { run: self.run, way: w } }));
      });
      this.appendChild(choose);
      this.appendChild(document.createTextNode(" "));
      this.appendChild(P.link("alternative.html", W.details, { run: this.run, alt: w.id, trip: trip.id }));
    }
  }

  customElements.define("way-card", WayCard);
})();
