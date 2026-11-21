/*
 * Component: <prepared-message>
 * Defined in: SPEC-06 (Architecture)
 * Used by: SPEC-06 (Contacts), and the Run page of the leg that broke, where the ways out are (SPEC-05)
 * Reads: `DATA.contacts.prepared[scenario]`, the contact it goes to, the way chosen (?choice=)
 * Reacts to: "Send", which says it was sent (nothing is sent in the prototype); nothing is sent without it
 */
(function () {
  const P = Proto, C = P.T.contacts;

  // <prepared-message>: when the trip breaks, a message ready for the commuter to send in one step (SPEC-06 rule 5).
  class PreparedMessage extends HTMLElement {
    connectedCallback() {
      const m = DATA.contacts.prepared[P.dataKey];
      if (!m || P.tripState() !== "broken") return;
      const to = DATA.contacts.contacts.find(function (c) { return c.name === m.to && c.state === "accepted"; });
      if (!to) return;
      const ch = P.choice(), trip = P.followedTrip();
      this.className = "card";
      this.appendChild(P.el("h2", "", C.prepared));
      this.appendChild(P.el("p", "meta", P.fill(C.prepared_to, to)));
      this.appendChild(P.el("p", "", ch ? P.fill(m.with_choice, { service: ch.alt.service, time: ch.alt.door_arrival }) : m.text));
      const status = P.el("p", "meta");
      status.setAttribute("role", "status");
      const send = P.el("button", "button", P.fill(C.send, to));
      send.type = "button";
      send.addEventListener("click", function () { send.disabled = true; status.textContent = P.fill(C.sent_now, to); });
      this.appendChild(send);
      if (!ch) { // the message can say the way once one is chosen on the leg that broke
        const b = trip.legs.findIndex(function (l) { return l.run && P.runState(l.run).state === "cancelled"; });
        const first = P.el("p");
        first.appendChild(P.link("run.html", C.choose_first, { trip: trip.id, leg: b + 1 }));
        this.appendChild(first);
      }
      this.appendChild(status);
    }
  }

  customElements.define("prepared-message", PreparedMessage);
})();
