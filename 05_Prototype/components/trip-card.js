/*
 * Component: <trip-card>
 * Defined in: SPEC-01 (Architecture)
 * Used by: SPEC-02 (your other trips), SPEC-17 (the list of trips)
 * Reads: one trip of `DATA.profile.trips`, and `DATA.profile.doors` for the names of its ends
 * Reacts to: opening the trip, which leads to the Run page of its runs
 */
(function () {
  const P = Proto, T = P.T;

  function door(id) { const d = DATA.profile.doors.find(function (x) { return x.id === id; }); return d ? d.name : id; }

  // <trip-card trip="ID">: one trip door to door, with its legs.
  class TripCard extends HTMLElement {
    connectedCallback() {
      const t = P.trip(this.getAttribute("trip"));
      if (!t) return;
      this.className = "card";
      const title = P.el("h3");
      title.appendChild(P.link("run.html", t.name, { trip: t.id }));
      this.appendChild(title);
      const legs = t.legs.map(function (l) { return T.modes[l.mode] || l.mode; }).join(", ");
      this.appendChild(P.el("p", "meta", P.fill(T.run.trip_legs, { from: door(t.from), to: door(t.to), legs: legs })));
    }
  }

  customElements.define("trip-card", TripCard);
})();
