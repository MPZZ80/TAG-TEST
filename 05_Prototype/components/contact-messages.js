/*
 * Component: <contact-messages>
 * Defined in: SPEC-06 (Architecture)
 * Used by: SPEC-06
 * Reads: `DATA.contacts.messages[scenario]`, `DATA.contacts.contacts`, where the configurator puts the commuter
 * Reacts to: the scenario and the place of the commuter changing (the page reloads with them)
 */
(function () {
  const P = Proto, C = P.T.contacts;

  // How far along the trip the commuter is: before 0, leg n is n, after the trip last.
  function place(at) { return at === "before" ? 0 : at === "after" ? 99 : parseInt(at.split("-")[1], 10); }

  // <contact-messages>: what the contacts received today, each with its time, source and status, as they see it.
  class ContactMessages extends HTMLElement {
    connectedCallback() {
      this.appendChild(P.el("h2", "", C.sent));
      if (!P.travelDay) { this.appendChild(P.el("p", "muted", C.no_trip_today)); return; }
      if (P.at === "before") { this.appendChild(P.el("p", "muted", C.waiting_start)); return; }
      const sent = (DATA.contacts.messages[P.dataKey] || []).filter(function (m) { return place(P.at) >= place(m.after); });
      const list = P.el("ul", "list");
      sent.forEach(function (m) {
        const li = P.el("li", "card");
        li.appendChild(P.el("p", "meta", P.fill(C.to, { name: m.to })));
        li.appendChild(P.el("p", "", m.text));
        li.appendChild(P.el("p", "meta", P.fill(C.meta, m)));
        list.appendChild(li);
      });
      this.appendChild(list);
      if (P.at === "after") this.appendChild(P.el("p", "muted", C.stopped)); // sharing stops when the trip ends (rule 6)
    }
  }

  customElements.define("contact-messages", ContactMessages);
})();
