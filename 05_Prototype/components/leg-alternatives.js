/*
 * Component: <leg-alternatives>
 * Defined in: SPEC-02 (Architecture), used only there
 * Used by: SPEC-02, below the card of a run that is late or cancelled
 * Reads: `DATA.runs[run].alternatives`
 * Reacts to: "Details and map", which opens the page of the alternative (PG-17), where it can be chosen
 */
(function () {
  const P = Proto, R = P.T.run;

  // <leg-alternatives run="ID">: other ways to make the same leg, with arrival at the door, ticket and cost.
  class LegAlternatives extends HTMLElement {
    connectedCallback() {
      const r = DATA.runs[this.getAttribute("run")], self = this;
      if (!r || !r.alternatives || !r.alternatives.length) return;
      this.appendChild(P.el("h2", "", R.alternatives));
      const list = P.el("ul", "list");
      r.alternatives.forEach(function (a) {
        const li = P.el("li", "card alt");
        li.appendChild(P.el("h3", "", a.service));
        li.appendChild(P.el("p", "meta", a.operator + " · " + a.source));
        li.appendChild(P.el("p", "", P.fill(R.alt_times, a)));
        li.appendChild(P.el("p", "", P.fill(R.alt_door, { time: a.door_arrival })));
        li.appendChild(P.el("p", a.ticket_valid ? "state-on-time" : "muted", (a.ticket_valid ? R.alt_ticket_valid : R.alt_ticket_not_valid) + " · " + a.cost));
        if (a.note) li.appendChild(P.el("p", "meta", a.note));
        const more = P.el("p");
        more.appendChild(P.link("alternative.html", R.alt_details, { run: self.getAttribute("run"), alt: a.id, trip: self.getAttribute("trip") || "" }));
        li.appendChild(more);
        list.appendChild(li);
      });
      this.appendChild(list);
    }
  }

  customElements.define("leg-alternatives", LegAlternatives);
})();
