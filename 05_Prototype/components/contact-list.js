/*
 * Component: <contact-list>
 * Defined in: SPEC-06 (Architecture)
 * Used by: SPEC-06
 * Reads: `DATA.contacts.contacts`, the trips of `DATA.profile` for the trip each shares
 * Reacts to: adding, inviting or removing a contact (shown, not kept)
 */
(function () {
  const P = Proto, T = P.T, C = T.contacts;

  // <contact-list>: the people the commuter keeps informed, what each shares, whether they accepted, on which channel.
  class ContactList extends HTMLElement {
    connectedCallback() {
      const note = P.el("p", "meta");
      note.setAttribute("role", "status");
      this.appendChild(P.el("h2", "", C.list));
      const list = P.el("ul", "list");
      DATA.contacts.contacts.forEach(function (c) {
        const li = P.el("li", "card");
        const head = P.el("h3", "", c.name + " ");
        head.appendChild(P.el("span", "badge", T.states.contact[c.state] || c.state));
        li.appendChild(head);
        const trip = P.trip(c.trip);
        li.appendChild(P.el("p", "", P.fill(C.shares, { shares: c.shares, trip: trip ? trip.name : c.trip })));
        li.appendChild(P.el("p", "meta", P.fill(C.channel, c)));
        if (c.state !== "accepted") li.appendChild(P.el("p", "notice", P.fill(C.not_accepted, c)));
        const remove = P.el("button", "", C.remove);
        remove.type = "button";
        remove.addEventListener("click", function () { note.textContent = C.not_kept; });
        li.appendChild(remove);
        list.appendChild(li);
      });
      this.appendChild(list);
      this.appendChild(P.el("p", "meta", C.accept_hint));

      // Adding a contact: a name and what they see; invited until they accept (SPEC-06 rules 1, 2).
      const form = P.el("form");
      form.appendChild(P.el("h3", "", C.add));
      const nameLabel = P.el("label", "", C.name + " ");
      const name = P.el("input");
      name.type = "text";
      nameLabel.appendChild(name);
      form.appendChild(nameLabel);
      const whatLabel = P.el("label", "", " " + C.what + " ");
      const what = P.el("select");
      C.share_options.forEach(function (o) { what.appendChild(P.el("option", "", o)); });
      whatLabel.appendChild(what);
      form.appendChild(whatLabel);
      const invite = P.el("button", "button", C.invite);
      invite.type = "submit";
      form.appendChild(document.createTextNode(" "));
      form.appendChild(invite);
      form.addEventListener("submit", function (e) { e.preventDefault(); note.textContent = C.not_kept; });
      this.appendChild(form);
      this.appendChild(note);
    }
  }

  customElements.define("contact-list", ContactList);
})();
