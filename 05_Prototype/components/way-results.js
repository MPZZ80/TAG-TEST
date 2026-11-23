/*
 * Component: <way-results>
 * Defined in: SPEC-08 (Architecture), used only there
 * Used by: SPEC-08, on the Ways page under <way-search>
 * Reads: `DATA.ways.search` (the ways, leave after or arrive by, the time); holds <way-card> and <confirm-choice>
 * Reacts to: "way-search" from <way-search> (orders the ways again); "way-today" (asked first) and "way-save" from a
 *   <way-card>, which say what would happen; nothing is kept
 */
(function () {
  const P = Proto, W = P.T.ways;

  function min(t) { const p = t.split(":"); return Number(p[0]) * 60 + Number(p[1]); }

  // Leave after: the earliest departure first, from that time on. Arrive by: the arrival closest to the time first,
  // those arriving in time before those arriving late; a sold-out way goes last (SPEC-08 rule 3).
  function order(q) {
    const t = min(q.time);
    const ways = q.ways.filter(function (w) { return q.when === "arrive_by" || min(w.dep) >= t; });
    return ways.sort(function (a, b) {
      if (!!a.sold_out !== !!b.sold_out) return a.sold_out ? 1 : -1;
      if (q.when === "leave_after") return min(a.dep) - min(b.dep);
      const da = t - min(a.arr_door), db = t - min(b.arr_door);
      if ((da < 0) !== (db < 0)) return da < 0 ? 1 : -1;
      return Math.abs(da) - Math.abs(db);
    });
  }

  // <way-results>: every way found, side by side, in the order of the search.
  class WayResults extends HTMLElement {
    connectedCallback() {
      const q = DATA.ways.search;
      const status = this.appendChild(P.el("p", "notice"));
      status.setAttribute("role", "status");
      status.hidden = true;
      const count = this.appendChild(P.el("p", "meta"));
      const list = this.appendChild(P.el("div"));
      const confirm = this.appendChild(document.createElement("confirm-choice"));
      function say(text) { status.hidden = false; status.textContent = text; }

      function draw() {
        list.textContent = "";
        const ways = order(q);
        count.textContent = ways.length ? P.fill(W.count, { n: ways.length, order: P.fill(W.order[q.when], q) }) : W.none;
        ways.forEach(function (w) {
          const card = document.createElement("way-card");
          card.way = w;
          list.appendChild(card);
        });
      }
      draw();

      document.addEventListener("way-search", function (e) { q.when = e.detail.when; q.time = e.detail.time || q.time; draw(); });
      // A way chosen for today becomes the trip of today (SPEC-04); saved, it joins the trips (SPEC-17). Not kept.
      this.addEventListener("way-today", function (e) {
        const w = e.detail.way;
        confirm.ask(P.fill(W.confirm_title, { way: w.label }), W.confirm_text, function () { say(P.fill(W.today_done, { way: w.label })); });
      });
      this.addEventListener("way-save", function (e) { say(P.fill(W.save_done, { way: e.detail.way.label })); });
    }
  }

  customElements.define("way-results", WayResults);
})();
