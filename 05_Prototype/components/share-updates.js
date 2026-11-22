/*
 * Component: <share-updates>
 * Defined in: SPEC-06 (Architecture)
 * Used by: SPEC-06, on Today (SPEC-04) and on Run, every leg (SPEC-02, SPEC-05)
 * Reads: `DATA.share`, the trip of attribute `trip`, `DATA.clock.iso`
 * Reacts to: a tap, which opens the phone's share sheet; the commuter picks the app and the person, and writes the message
 */
(function () {
  const P = Proto, S = P.T.share;
  const ICON = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">' +
    '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>' +
    '<path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" stroke="currentColor" stroke-width="2"/></svg>';

  // <share-updates>: a link to the trip as it goes, handed to the system share sheet; nothing written for the commuter.
  class ShareUpdates extends HTMLElement {
    connectedCallback() {
      // nothing to share without a trip, on a day with no travel, or once the trip is completed (SPEC-06 rule 4)
      if (!P.scenario.setup || !P.travelDay || P.at === "after") return;
      const trip = P.trip(this.getAttribute("trip")) || P.followedTrip();
      const data = {
        title: P.fill(DATA.share.title, { from: P.doorName(trip.from), to: P.doorName(trip.to) }),
        url: P.fill(DATA.share.url, { trip: trip.id, date: DATA.clock.iso })
      };
      const button = P.el("button", "button share");
      button.type = "button";
      button.innerHTML = ICON;
      button.appendChild(document.createTextNode(" " + S.button));
      const dialog = P.el("dialog", "modal");
      this.appendChild(button);
      this.appendChild(dialog);
      button.addEventListener("click", function () {
        if (navigator.share) navigator.share(data).catch(function () {}); // the phone's own sheet
        else sheet(dialog, data); // no share sheet in this browser: the prototype draws one
      });
    }
  }

  // The prototype's share sheet: the link, the apps, copy link; nothing is sent.
  function sheet(d, data) {
    d.textContent = "";
    d.appendChild(P.el("h2", "", data.title));
    d.appendChild(P.el("p", "meta", data.url));
    d.appendChild(P.el("p", "muted", S.hint));
    const status = P.el("p", "meta");
    status.setAttribute("role", "status");
    const apps = P.el("p", "share-apps");
    DATA.share.apps.forEach(function (app) {
      const b = P.el("button", "", app);
      b.type = "button";
      b.addEventListener("click", function () { status.textContent = P.fill(S.opened, { app: app }); });
      apps.appendChild(b);
    });
    const copy = P.el("button", "", S.copy);
    copy.type = "button";
    copy.addEventListener("click", function () {
      if (navigator.clipboard) navigator.clipboard.writeText(data.url).catch(function () {});
      status.textContent = S.copied;
    });
    apps.appendChild(copy);
    d.appendChild(apps);
    d.appendChild(status);
    const close = P.el("button", "", S.close);
    close.type = "button";
    close.addEventListener("click", function () { d.close(); });
    d.appendChild(close);
    d.showModal();
  }

  customElements.define("share-updates", ShareUpdates);
})();
