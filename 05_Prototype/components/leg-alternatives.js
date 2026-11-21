/*
 * Component: <leg-alternatives>
 * Defined in: SPEC-02 (Architecture), used only there
 * Used by: SPEC-02, under the map of a run that is late or cancelled
 * Reads: `DATA.runs[run].alternatives` (at most 8 shown)
 * Reacts to: a tap on a slot, which selects the alternative (event "alt-select": the map draws it in colour) and opens
 *   its details with "Choose" (event "alt-choose"); "Details and map" opens the page of the alternative (PG-17)
 */
(function () {
  const P = Proto, R = P.T.run;

  function min(t) { const m = /(\d{1,2}):(\d{2})/.exec(t || ""); return m ? Number(m[1]) * 60 + Number(m[2]) : 0; }
  function duration(a) {
    const d = min(a.arr) - min(a.dep), h = Math.floor(d / 60), m = d % 60;
    return h ? P.fill(R.alt_duration, { h: h, m: m }) : P.fill(R.alt_duration_min, { m: m });
  }

  // <leg-alternatives run="ID">: the other ways to make the leg as small slots in a row that scrolls (kind, arrival,
  // time it takes); the slot tapped opens its details under the row, and the map draws its route.
  class LegAlternatives extends HTMLElement {
    connectedCallback() {
      const r = DATA.runs[this.getAttribute("run")], self = this;
      if (!r || !r.alternatives || !r.alternatives.length) return;
      this.appendChild(P.el("h2", "", R.alternatives));
      const row = P.el("div", "alt-row");
      row.setAttribute("role", "listbox");
      row.setAttribute("aria-label", R.alternatives);
      const panel = P.el("div", "alt-panel");
      r.alternatives.slice(0, 8).forEach(function (a) {
        const slot = P.el("button", "alt-slot");
        slot.type = "button";
        slot.setAttribute("role", "option");
        slot.dataset.alt = a.id;
        slot.appendChild(P.el("span", "alt-kind", a.short || a.service));
        slot.appendChild(P.el("span", "alt-meta", P.fill(R.alt_slot, { arr: a.arr, duration: duration(a) })));
        slot.addEventListener("click", function () {
          row.querySelectorAll(".alt-slot").forEach(function (s) {
            s.classList.toggle("selected", s === slot);
            s.setAttribute("aria-selected", s === slot ? "true" : "false");
          });
          showDetails(a);
          self.dispatchEvent(new CustomEvent("alt-select", { bubbles: true, detail: { run: self.getAttribute("run"), alt: a.id } }));
        });
        row.appendChild(slot);
      });
      if (r.alternatives.length > 8) this.appendChild(P.el("p", "meta", R.alt_max_note));

      // The details of the slot tapped: few facts, where it arrives, and "Choose".
      function showDetails(a) {
        panel.textContent = "";
        panel.className = "alt-panel card open";
        panel.appendChild(P.el("h3", "", a.service));
        panel.appendChild(P.el("p", "meta", a.operator + " · " + a.source));
        panel.appendChild(P.el("p", "", P.fill(R.alt_times, a) + " · " + duration(a)));
        panel.appendChild(P.el("p", a.to !== r.to ? "state-late" : "", a.to !== r.to
          ? P.fill(R.alt_arrives_instead, { to: a.to, planned: r.to, arr: a.arr })
          : P.fill(R.alt_arrives, { to: a.to, arr: a.arr })));
        panel.appendChild(P.el("p", "", P.fill(R.alt_door, { time: a.door_arrival })));
        panel.appendChild(P.el("p", a.ticket_valid ? "state-on-time" : "muted", (a.ticket_valid ? R.alt_ticket_valid : R.alt_ticket_not_valid) + " · " + a.cost));
        if (a.note) panel.appendChild(P.el("p", "meta", a.note));
        const actions = P.el("p");
        const choose = P.el("button", "button", R.choose);
        choose.type = "button";
        choose.addEventListener("click", function () {
          self.dispatchEvent(new CustomEvent("alt-choose", { bubbles: true, detail: { run: self.getAttribute("run"), alt: a.id } }));
        });
        actions.appendChild(choose);
        actions.appendChild(document.createTextNode(" "));
        actions.appendChild(P.link("alternative.html", R.alt_details, { run: self.getAttribute("run"), alt: a.id, trip: self.getAttribute("trip") || "" }));
        panel.appendChild(actions);
      }
      this.appendChild(row);
      this.appendChild(panel);
    }
  }

  customElements.define("leg-alternatives", LegAlternatives);
})();
