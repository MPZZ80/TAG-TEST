/*
 * Component: <run-stops>
 * Defined in: SPEC-02 (Architecture), used only there
 * Used by: SPEC-02, on the Run page under the card of the run
 * Reads: `DATA.runs[run].stops` and the expected departure of the run in the current scenario
 * Reacts to: none
 */
(function () {
  const P = Proto, R = P.T.run;

  function min(t) { const m = /(\d{1,2}):(\d{2})/.exec(t || ""); return m ? Number(m[1]) * 60 + Number(m[2]) : null; }
  function hhmm(v) { return String(Math.floor(v / 60) % 24).padStart(2, "0") + ":" + String(v % 60).padStart(2, "0"); }

  // <run-stops run="ID">: each stop with its planned and expected time; the expected times move with the
  // expected departure; a cancelled run, or one with no news, has no expected times.
  class RunStops extends HTMLElement {
    connectedCallback() {
      const s = P.runState(this.getAttribute("run"));
      if (!s || !s.run.stops) return;
      const shift = s.facts.length && s.state !== "cancelled" ? min(s.exp_dep) - min(s.run.dep) : null;
      this.appendChild(P.el("h3", "", R.stops));
      const table = P.el("table", "stops");
      const head = P.el("tr");
      ["", R.stop_planned, R.stop_expected].forEach(function (h) { head.appendChild(P.el("th", "", h)); });
      table.appendChild(head);
      s.run.stops.forEach(function (st) {
        const tr = P.el("tr");
        tr.appendChild(P.el("td", "", st.name));
        tr.appendChild(P.el("td", "", st.time));
        const exp = shift === null ? R.stop_none : hhmm(min(st.time) + shift);
        tr.appendChild(P.el("td", shift ? "state-late" : "", exp));
        table.appendChild(tr);
      });
      this.appendChild(table);
    }
  }

  customElements.define("run-stops", RunStops);
})();
