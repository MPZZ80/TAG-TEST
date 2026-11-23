/*
 * Component: <ticket-list>
 * Defined in: SPEC-10 (Architecture), used only there
 * Used by: SPEC-10, on the Tickets page
 * Reads: `DATA.tickets`; holds <ticket-card> and <ticket-entry>
 * Reacts to: "ticket-add" from <ticket-entry>, which adds the ticket typed to the list (shown, not kept)
 */
(function () {
  const P = Proto, K = P.T.tickets;

  // <ticket-list>: the tickets held, first; the way to book; then adding a ticket bought elsewhere.
  class TicketList extends HTMLElement {
    connectedCallback() {
      const list = this.appendChild(P.el("div"));
      function add(t) {
        const card = document.createElement("ticket-card");
        card.ticket = t;
        list.appendChild(card);
      }
      DATA.tickets.forEach(add);
      if (!DATA.tickets.length) list.appendChild(P.el("p", "muted", K.none));
      this.appendChild(P.el("p")).appendChild(P.link("ways.html", K.book));
      this.appendChild(document.createElement("ticket-entry"));
      const status = this.appendChild(P.el("p", "meta"));
      status.setAttribute("role", "status");
      this.addEventListener("ticket-add", function (e) {
        add(e.detail);
        status.textContent = K.added;
      });
    }
  }

  customElements.define("ticket-list", TicketList);
})();
