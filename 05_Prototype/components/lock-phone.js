/*
 * Component: <lock-phone>
 * Defined in: SPEC-01 (Architecture: the messages outside the product)
 * Used by: the lock screen (lockscreen.html)
 * Reads: the hour of the scenario, `DATA.clock`; holds <message-preview>
 * Reacts to: "Open the app" (plain link to Today)
 */
(function () {
  const P = Proto, L = P.T.lock;

  // <lock-phone>: a fake phone on its lock screen, with the messages of the scenario (not a page of the product).
  class LockPhone extends HTMLElement {
    connectedCallback() {
      this.appendChild(P.el("h1", "visually-hidden", L.title));
      this.appendChild(P.el("p", "muted", L.intro));
      const phone = this.appendChild(P.el("div", "phone"));
      phone.appendChild(P.el("p", "phone-time", P.scenario.now));
      phone.appendChild(P.el("p", "phone-date", DATA.clock.weekday + " " + DATA.clock.date));
      phone.appendChild(document.createElement("message-preview"));
      phone.appendChild(P.el("p", "phone-open")).appendChild(P.link("today.html", L.open_app));
    }
  }

  customElements.define("lock-phone", LockPhone);
})();
