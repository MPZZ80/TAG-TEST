/*
 * Component: <way-strip>
 * Defined in: SPEC-08 (Architecture)
 * Used by: SPEC-08 (in each <way-card>), SPEC-09 (at the top of the Way detail page)
 * Reads: the legs of a way, `[{mode, text}]`, set on `.legs`
 * Reacts to: none
 */
(function () {
  const P = Proto;

  // <way-strip>: the way as one row of segments, one per leg, in the colour of its means (06_Design/Style.md, timeline).
  // shortcut: the segments share the row by their text, not by their minutes; the ways of ways.js have no time per leg.
  class WayStrip extends HTMLElement {
    connectedCallback() {
      this.setAttribute("role", "list");
      (this.legs || []).forEach(function (l) {
        const seg = this.appendChild(P.el("span", "key key-" + l.mode, l.text));
        seg.setAttribute("role", "listitem");
      }, this);
    }
  }

  customElements.define("way-strip", WayStrip);
})();
