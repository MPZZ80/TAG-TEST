/*
 * Component: <leg-timing>
 * Defined in: SPEC-09 (Architecture), used only there
 * Used by: SPEC-09, on the Way detail page
 * Reads: `DATA.timing.legs[]`
 * Reacts to: none
 */
(function () {
  const P = Proto, TM = P.T.timing;

  // <leg-timing>: each leg and way through a station at its planned and real length, with the source and a note.
  class LegTiming extends HTMLElement {
    connectedCallback() {
      this.appendChild(P.el("h2", "", TM.legs));
      const table = P.el("table", "stops");
      const head = table.appendChild(P.el("tr"));
      [TM.col_leg, TM.col_planned, TM.col_real, TM.col_source].forEach(function (c) { head.appendChild(P.el("th", "", c)); });
      DATA.timing.legs.forEach(function (l) {
        const tr = table.appendChild(P.el("tr"));
        const what = tr.appendChild(P.el("td", "", l.label));
        if (l.note) what.appendChild(P.el("span", "meta", " · " + l.note));
        tr.appendChild(P.el("td", "", P.fill(TM.min, { n: l.planned })));
        // unknown is said so, never the planner's default (SPEC-09, When things go wrong)
        tr.appendChild(P.el("td", l.real > l.planned ? "state-late" : "", l.real == null ? P.T.run.unknown : P.fill(TM.min, { n: l.real })));
        tr.appendChild(P.el("td", "meta", l.source));
      });
      this.appendChild(table);
    }
  }

  customElements.define("leg-timing", LegTiming);
})();
