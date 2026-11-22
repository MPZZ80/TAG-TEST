/*
 * Component: <way-card>
 * Defined in: SPEC-01 (Architecture)
 * Used by: SPEC-08 (every way door to door)
 * Reads: one way of `DATA.ways.search.ways[]`, set with .way; `DATA.ways.search` for the doors and the way back
 * Reacts to: "Take this way today" and "Save to your trips", which send a "way-today" or "way-save" event; nothing changes here
 */
(function () {
  const P = Proto, W = P.T.ways;

  // <way-card>: one way door to door: its legs, departure, arrival at the door, time, price, who runs it, the way back.
  class WayCard extends HTMLElement {
    connectedCallback() {
      const w = this.way, self = this, q = DATA.ways.search;
      if (!w) return;
      this.className = "card";
      const h = P.el("h3", "", w.label);
      if (w.sold_out) { h.appendChild(document.createTextNode(" ")); h.appendChild(P.el("span", "badge badge-todo", W.sold_out)); }
      this.appendChild(h);
      const legs = P.el("p", "legs");
      w.legs.forEach(function (l) { legs.appendChild(P.el("span", "key key-" + l.mode, l.text)); });
      this.appendChild(legs);
      const h_ = Math.floor(w.minutes / 60), m = w.minutes % 60;
      this.appendChild(P.el("p", "", P.fill(W.times, { dep: w.dep, arr: w.arr_door,
        minutes: h_ ? P.fill(P.T.run.alt_duration, { h: h_, m: m }) : P.fill(P.T.run.alt_duration_min, { m: m }) })));
      if (q.when === "arrive_by" && w.arr_door > q.time) this.appendChild(P.el("p", "state-late", P.fill(W.late, q)));
      this.appendChild(P.el("p", "", w.price ? P.fill(W.price, w) : W.price_unknown)); // unknown is said so (rule 5)
      this.appendChild(P.el("p", "meta", P.fill(W.operators, w)));
      this.appendChild(P.el("p", "meta", w.fullness ? P.fill(W.fullness, w) : W.fullness_unknown));
      const back = { door: P.doorName(q.from), after: q.back_after, time: w.back_home };
      this.appendChild(P.el("p", "meta", w.back_home ? P.fill(W.back_home, back) : P.fill(W.back_unknown, back))); // rule 4
      this.appendChild(P.el("p", "meta", P.fill(W.source, w)));
      if (w.sold_out) return; // nothing to take or save on a way that cannot be booked
      [["way-today", W.today, "button"], ["way-save", W.save, ""]].forEach(function (b) {
        const button = P.el("button", b[2], b[1]);
        button.type = "button";
        button.addEventListener("click", function () { self.dispatchEvent(new CustomEvent(b[0], { bubbles: true, detail: { way: w } })); });
        self.appendChild(button);
        self.appendChild(document.createTextNode(" "));
      });
    }
  }

  customElements.define("way-card", WayCard);
})();
