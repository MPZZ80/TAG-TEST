/*
 * Component: <ticket-entry>
 * Defined in: SPEC-10 (Architecture), used only there
 * Used by: SPEC-10, on the Tickets page
 * Reads: none
 * Reacts to: "Add ticket", which sends a "ticket-add" event with what was typed (shown, not kept)
 */
(function () {
  const P = Proto, K = P.T.tickets;

  // <ticket-entry>: a ticket bought elsewhere, entered by the commuter so that it is among the tickets held (rule 2).
  class TicketEntry extends HTMLElement {
    connectedCallback() {
      const self = this;
      const form = P.el("form", "card");
      form.appendChild(P.el("h2", "", K.enter_title));
      const fields = [K.e_title, K.e_seller, K.e_code].map(function (text) {
        const l = P.el("label", "", text + " ");
        const i = l.appendChild(P.el("input"));
        i.required = true;
        form.appendChild(P.el("p")).appendChild(l);
        return i;
      });
      const add = P.el("button", "button", K.enter);
      add.type = "submit";
      form.appendChild(add);
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        self.dispatchEvent(new CustomEvent("ticket-add", { bubbles: true, detail: {
          id: "new", title: fields[0].value, seller: fields[1].value, code: fields[2].value, covers: K.entered_covers,
          entered: true, state: "held", moves: [] } }));
        form.reset();
      });
      this.appendChild(form);
    }
  }

  customElements.define("ticket-entry", TicketEntry);
})();
