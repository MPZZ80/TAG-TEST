/*
 * Component: <alternative-detail>
 * Defined in: SPEC-02 (Architecture), used only there
 * Used by: SPEC-02, on the page of an alternative (PG-17)
 * Reads: `DATA.runs[run].alternatives[alt]`, the trip of attribute `trip`, `DATA.connections` (the arrival at the door now);
 *   holds <route-map> and <confirm-choice>
 * Reacts to: "Choose this way": asked first; after yes the trip of today follows the alternative on every page (?choice=)
 */
(function () {
  const P = Proto, A = P.T.alternative, R = P.T.run;

  // <alternative-detail run="ID" alt="ID" trip="ID">: the details of one way to replace a leg, a sketch of its route,
  // the trip as it would become, and the choice to take it.
  class AlternativeDetail extends HTMLElement {
    connectedCallback() {
      const runId = this.getAttribute("run"), run = DATA.runs[runId];
      const alt = run.alternatives.find(function (a) { return a.id === this.getAttribute("alt"); }, this);
      const trip = P.trip(this.getAttribute("trip")) || P.followedTrip();

      const card = this.appendChild(P.el("div", "card"));
      card.appendChild(P.el("p", "meta", alt.operator + " · " + alt.source));
      card.appendChild(P.el("p", "", P.fill(R.alt_times, alt)));
      const ticket = P.ticketLine(alt);
      card.appendChild(P.el("p", ticket.cls, ticket.text));
      if (alt.note) card.appendChild(P.el("p", "meta", alt.note));

      this.appendChild(P.el("h2", "", A.map));
      const map = document.createElement("route-map");
      map.setAttribute("run", runId);
      map.setAttribute("alt", alt.id);
      this.appendChild(map);

      // The trip with this way: the legs before the replaced one stay, the others come from the alternative.
      this.appendChild(P.el("h2", "", A.rest));
      const list = this.appendChild(P.el("ol", "legs"));
      P.effectiveTrip(trip, { run: runId, alt: alt }).legs.forEach(function (l) {
        const mode = P.T.modes[l.mode] || l.mode;
        const li = list.appendChild(P.el("li", "mode-" + l.mode + (l.chosen ? " chosen" : "")));
        li.appendChild(P.el("p", "", l.dep
          ? mode + " · " + (l.service || "") + ": " + P.fill(A.leg_times, l)
          : P.fill(A.leg_walk, { mode: mode, from: l.from, to: l.to, minutes: l.minutes })));
      });

      const door = P.doorName(trip.to), now = DATA.connections.by_scenario[P.dataKey].door_arrival;
      this.appendChild(P.el("p", "card", now && now !== "—"
        ? P.fill(A.door_compare, { door: door, time: alt.door_arrival, current: now })
        : P.fill(A.door_compare_planned, { door: door, time: alt.door_arrival, planned: DATA.connections.by_scenario.none.door_arrival })));

      const confirm = this.appendChild(document.createElement("confirm-choice"));
      const choose = P.el("button", "button", A.choose);
      choose.type = "button";
      choose.addEventListener("click", function () {
        confirm.ask(P.fill(A.confirm_title, { service: alt.service, instead: run.service }), A.confirm_text, function () {
          location.href = P.href("today.html", { choice: runId + ":" + alt.id });
        });
      });
      this.appendChild(choose);
      this.appendChild(P.el("p")).appendChild(P.link("run.html", A.back, { trip: trip.id, run: runId }));
    }
  }

  customElements.define("alternative-detail", AlternativeDetail);
})();
