/*
 * Component: <page-head>
 * Defined in: SPEC-01 (Architecture)
 * Used by: every screen of the product, at the top of the page
 * Reads: `.head` set before the element is added: {back: [file, label, extra], title, intro, badge: [state, label],
 *   notes: [[class, text], …]}; every text comes from the data through the screen's script
 * Reacts to: the back link (plain link)
 */
(function () {
  const P = Proto;

  // <page-head>: the way back, the title of the page, one line under it, and the notes that belong to the whole page.
  class PageHead extends HTMLElement {
    connectedCallback() {
      const h = this.head || {};
      if (h.back) {
        const back = P.link(h.back[0], "← " + h.back[1], h.back[2]);
        back.classList.add("back");
        this.appendChild(back);
      }
      if (h.title) this.appendChild(P.el("h1", "", h.title));
      if (h.intro) this.appendChild(P.el("p", "muted", h.intro));
      if (h.badge) this.appendChild(P.el("p")).appendChild(P.el("span", "badge badge-" + h.badge[0], h.badge[1]));
      (h.notes || []).forEach(function (n) { if (n[1]) this.appendChild(P.el("p", n[0], n[1])); }, this);
    }
  }

  customElements.define("page-head", PageHead);
})();
