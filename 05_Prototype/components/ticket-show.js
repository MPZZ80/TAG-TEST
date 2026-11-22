/*
 * Component: <ticket-show>
 * Defined in: SPEC-10 (Architecture), used only there
 * Used by: SPEC-10, in each <ticket-card>
 * Reads: `tickets[].code`, `tickets[].title`, `tickets[].covers`
 * Reacts to: "Show ticket", which shows it in one step, also with no signal (configurator): it is kept on the phone
 */
(function () {
  const P = Proto, K = P.T.tickets;

  // <ticket-show>: the ticket ready for the gate or the conductor in one step (SPEC-10 rule 3).
  class TicketShow extends HTMLElement {
    connectedCallback() {
      const t = this.ticket;
      const button = P.el("button", "button", K.show);
      button.type = "button";
      const d = P.el("dialog", "modal");
      d.appendChild(P.el("h2", "", t.title));
      d.appendChild(P.el("p", "", t.covers));
      d.appendChild(P.el("p", "ticket-code", t.code));
      d.appendChild(P.el("p", "state-on-time", K.valid_now));
      d.appendChild(P.el("p", "meta", K.from_device));
      const close = P.el("button", "", K.close);
      close.type = "button";
      close.addEventListener("click", function () { d.close(); });
      d.appendChild(close);
      button.addEventListener("click", function () { d.showModal(); });
      this.appendChild(button);
      this.appendChild(d);
    }
  }

  customElements.define("ticket-show", TicketShow);
})();
