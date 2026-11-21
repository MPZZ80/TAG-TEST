/*
 * Component: <leg-alternatives>
 * Defined in: SPEC-02 (Architecture), used only there
 * Used by: SPEC-02, below the card of a run that is late or cancelled
 * Reads: `DATA.runs[run].alternatives`
 * Reacts to: a tap on a card, which selects the alternative (event "alt-select", the map draws it in colour) and shows
 *   "Choose" (event "alt-choose"); "Details and map" opens the page of the alternative (PG-17)
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
        li.tabIndex = 0;
        li.dataset.alt = a.id;
        li.appendChild(P.el("h3", "", a.service));
        li.appendChild(P.el("p", "meta", a.operator + " · " + a.source));
        li.appendChild(P.el("p", "", P.fill(R.alt_times, a)));
        li.appendChild(P.el("p", "", P.fill(R.alt_door, { time: a.door_arrival })));
        li.appendChild(P.el("p", a.ticket_valid ? "state-on-time" : "muted", (a.ticket_valid ? R.alt_ticket_valid : R.alt_ticket_not_valid) + " · " + a.cost));
        if (a.note) li.appendChild(P.el("p", "meta", a.note));
        const more = P.el("p");
        more.appendChild(P.link("alternative.html", R.alt_details, { run: self.getAttribute("run"), alt: a.id, trip: self.getAttribute("trip") || "" }));
        li.appendChild(more);
        const choose = P.el("button", "button choose", R.choose);
        choose.type = "button";
        choose.addEventListener("click", function (e) {
          e.stopPropagation();
          self.dispatchEvent(new CustomEvent("alt-choose", { bubbles: true, detail: { run: self.getAttribute("run"), alt: a.id } }));
        });
        li.appendChild(choose);
        // Tapping a card selects it: it is drawn in colour on the map and shows "Choose"; the others stay grey.
        const select = function (e) {
          if (e.target.closest("a, button")) return;
          list.querySelectorAll(".alt").forEach(function (c) { c.classList.toggle("selected", c === li); });
          self.dispatchEvent(new CustomEvent("alt-select", { bubbles: true, detail: { run: self.getAttribute("run"), alt: a.id } }));
        };
        li.addEventListener("click", select);
        li.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(e); } });
        list.appendChild(li);
      });
      this.appendChild(list);
    }
  }

  customElements.define("leg-alternatives", LegAlternatives);
})();
