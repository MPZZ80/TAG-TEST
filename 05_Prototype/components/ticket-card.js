/*
 * Component: <ticket-card>
 * Defined in: SPEC-10 (Architecture), used only there
 * Used by: SPEC-10, on the Tickets page
 * Reads: one ticket of `DATA.tickets[]`, set with .ticket
 * Reacts to: none of its own: it holds <ticket-show> and <ticket-move>
 */
(function () {
  const P = Proto, K = P.T.tickets;

  // <ticket-card>: a ticket held: what it covers, the seller, whether the commuter entered it, its state.
  class TicketCard extends HTMLElement {
    connectedCallback() {
      const t = this.ticket;
      if (!t) return;
      this.className = "card";
      const h = P.el("h2", "", t.title + " ");
      h.appendChild(P.el("span", "badge badge-" + (t.state === "held" ? "active" : "todo"), P.T.states.ticket[t.state] || t.state));
      this.appendChild(h);
      this.covers = this.appendChild(P.el("p", "", t.covers));
      this.appendChild(P.el("p", "meta", P.fill(K.seller, t) + (t.entered ? " · " + K.entered : "")));
      ["ticket-show", "ticket-move"].forEach(function (tag) {
        const c = document.createElement(tag);
        c.ticket = t;
        this.appendChild(c);
      }, this);
    }
  }

  customElements.define("ticket-card", TicketCard);
})();
