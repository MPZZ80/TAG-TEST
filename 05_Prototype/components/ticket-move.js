/*
 * Component: <ticket-move>
 * Defined in: SPEC-10 (Architecture), used only there
 * Used by: SPEC-10, in each <ticket-card>
 * Reads: `tickets[].moves[]`, `tickets[].no_move`, the signal of the configurator
 * Reacts to: a move chosen, then <confirm-choice> with its cost; on yes the card shows the new run (not kept)
 */
(function () {
  const P = Proto, K = P.T.tickets;

  // <ticket-move>: the runs or days the ticket can be moved to, and what each costs, before the commuter says yes (rules 4, 5).
  class TicketMove extends HTMLElement {
    connectedCallback() {
      const t = this.ticket, self = this;
      if (t.no_move) { this.appendChild(P.el("p", "meta", K.no_move)); return; } // said before the commuter tries
      if (!t.moves.length) { this.appendChild(P.el("p", "meta", K.nothing_to_move)); return; }
      const p = P.el("p");
      const label = P.el("label", "", K.move + " ");
      const select = P.el("select");
      t.moves.forEach(function (m, i) { const o = P.el("option", "", P.fill(K.move_option, m)); o.value = i; select.appendChild(o); });
      label.appendChild(select);
      p.appendChild(label);
      p.appendChild(document.createTextNode(" "));
      const button = P.el("button", "", K.move_button);
      button.type = "button";
      p.appendChild(button);
      this.appendChild(p);
      const status = P.el("p", "meta");
      status.setAttribute("role", "status");
      this.appendChild(status);
      if (!P.signal) { select.disabled = button.disabled = true; status.textContent = K.wait_signal; return; }
      const confirm = document.createElement("confirm-choice");
      this.appendChild(confirm);
      button.addEventListener("click", function () {
        const m = t.moves[select.value];
        confirm.ask(P.fill(K.move_q, m), P.fill(K.move_cost, m), function () {
          const card = self.closest("ticket-card");
          if (card && card.covers) card.covers.textContent = m.to;
          status.textContent = P.fill(K.moved, m);
        });
      });
    }
  }

  customElements.define("ticket-move", TicketMove);
})();
