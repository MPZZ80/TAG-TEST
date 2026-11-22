/*
 * Component: <way-booking>
 * Defined in: SPEC-10 (Architecture), used only there
 * Used by: SPEC-10, on the Way detail page
 * Reads: one way of `DATA.ways.search.ways[]`, set with .way; the signal of the configurator
 * Reacts to: "Book", then <confirm-choice>: every leg booked together, or none (nothing is paid or kept)
 */
(function () {
  const P = Proto, K = P.T.tickets;

  // <way-booking>: the way bought as one journey, with one price (SPEC-10 rule 1).
  class WayBooking extends HTMLElement {
    connectedCallback() {
      const w = this.way, self = this;
      if (!w) return;
      this.className = "card";
      this.appendChild(P.el("h2", "", K.book_title));
      if (w.not_bookable) { this.appendChild(P.el("p", "", P.fill(K.book_none, { why: w.not_bookable }))); return; }
      if (!w.price) { this.appendChild(P.el("p", "", K.book_unknown)); return; }
      this.appendChild(P.el("p", "", P.fill(K.book_text, w)));
      const price = w.price.split(" (")[0]; // the total, without how it is made up
      const button = P.el("button", "button", P.fill(K.book_button, { price: price }));
      button.type = "button";
      const status = P.el("p", "meta");
      status.setAttribute("role", "status");
      if (!P.signal) { button.disabled = true; status.textContent = K.book_wait; } // buying waits for the signal
      const confirm = document.createElement("confirm-choice");
      button.addEventListener("click", function () {
        confirm.ask(P.fill(K.book_q, { way: w.label, price: price }), K.book_confirm, function () {
          button.disabled = true;
          status.textContent = K.booked;
        });
      });
      this.appendChild(button);
      this.appendChild(status);
      this.appendChild(confirm);
      const tickets = P.el("p");
      tickets.appendChild(P.link("tickets.html", K.title));
      self.appendChild(tickets);
    }
  }

  customElements.define("way-booking", WayBooking);
})();
