/*
 * Component: <message-preview>
 * Defined in: SPEC-01 (Architecture)
 * Used by: the lock screen (lockscreen.html), for the messages of SPEC-02, SPEC-03, SPEC-05 and, later, the others
 * Reads: `DATA.notifications`: for each screen whose page is built, the messages of the scenario, or `any`
 * Reacts to: tapping a message, which opens the page it leads to (its `page` and `run`, or the page of its screen)
 */
(function () {
  const P = Proto, L = P.T.lock;

  // <message-preview>: the messages that reach the commuter when the product is closed, as notifications on a
  // phone's lock screen; not on the pages of the product (Marco, 2026-11-21).
  class MessagePreview extends HTMLElement {
    connectedCallback() {
      const built = DATA.screens.map(function (s) { return s.file; });
      const trip = P.followedTrip();
      let shown = 0;
      Object.keys(DATA.notifications).forEach(function (screen) {
        const set = DATA.notifications[screen];
        (set[P.dataKey] || set.any || []).forEach(function (m) {
          const page = m.page || screen + ".html";
          if (built.indexOf(page) === -1) return; // a message whose page is not built yet is left out
          const a = P.el("a", "notification");
          a.href = P.href(page, m.run ? { trip: trip.id, run: m.run } : {});
          a.appendChild(P.el("p", "meta", L.app + " · " + m.channel));
          a.appendChild(P.el("p", "", m.text));
          this.appendChild(a);
          shown++;
        }, this);
      }, this);
      if (!shown) this.appendChild(P.el("p", "lock-none", L.none));
    }
  }

  customElements.define("message-preview", MessagePreview);
})();
