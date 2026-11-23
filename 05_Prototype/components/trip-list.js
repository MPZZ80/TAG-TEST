/*
 * Component: <trip-list>
 * Defined in: SPEC-17 (Architecture)
 * Used by: SPEC-04 (the other trips, under the trip of the day), SPEC-17 (the Trips page, with `manage`)
 * Reads: `DATA.profile.trips`; attributes `heading` (a title over the list), `exclude` (a trip left out), `manage`
 * Reacts to: with `manage`, choosing the trip followed today, "Rename" and "Delete" (shown, not kept)
 */
(function () {
  const P = Proto, TR = P.T.trips;

  // <trip-list>: the commuter's trips door to door, one <trip-card> each; with `manage`, the controls of SPEC-17.
  class TripList extends HTMLElement {
    connectedCallback() {
      const exclude = this.getAttribute("exclude"), manage = this.hasAttribute("manage");
      const trips = DATA.profile.trips.filter(function (t) { return t.id !== exclude; });
      if (!trips.length) return;
      if (this.getAttribute("heading")) this.appendChild(P.el("h2", "", this.getAttribute("heading")));
      const note = P.el("p", "meta");
      note.setAttribute("role", "status");
      const box = this.appendChild(P.el(manage ? "form" : "div")); // in the page first, so that each <trip-card> draws itself before its controls
      trips.forEach(function (t) {
        const card = document.createElement("trip-card");
        card.setAttribute("trip", t.id);
        box.appendChild(card);
        if (!manage) return;
        const controls = P.el("p", "actions");
        const label = P.el("label", "");
        const radio = P.el("input");
        radio.type = "radio";
        radio.name = "followed";
        radio.value = t.id;
        radio.checked = !!t.monitored;
        radio.addEventListener("change", function () { note.textContent = TR.not_kept; });
        label.appendChild(radio);
        label.appendChild(document.createTextNode(" " + TR.monitor));
        controls.appendChild(label);
        [TR.rename, TR.delete].forEach(function (text) {
          const b = P.el("button", "", text);
          b.type = "button";
          b.addEventListener("click", function () { note.textContent = TR.not_kept; });
          controls.appendChild(b);
        });
        card.appendChild(controls);
      });
      if (!manage) return;
      this.appendChild(note);
      this.appendChild(P.el("p")).appendChild(P.link("setup.html", TR.add));
    }
  }

  customElements.define("trip-list", TripList);
})();
