/*
 * Component: <app-bar>
 * Defined in: SPEC-01 (Information architecture)
 * Used by: every screen of the product, under the configurator (common.js, Proto.shell)
 * Reads: `DATA.ui_text.nav`, `DATA.clock`, the hour of the scenario
 * Reacts to: none (plain links); the page open is marked as the current one
 */
(function () {
  const P = Proto, T = P.T;

  // <app-bar>: the product, the mock clock and the navigation, in the order of SPEC-01.
  class AppBar extends HTMLElement {
    connectedCallback() {
      const here = location.pathname.split("/").pop();
      const bar = P.el("header", "app-bar");
      const left = P.el("div");
      left.appendChild(P.link("index.html", T.common.product));
      left.appendChild(P.el("p", "meta", P.fill(T.common.clock, { weekday: DATA.clock.weekday, date: DATA.clock.date, now: P.scenario.now })));
      bar.appendChild(left);
      const nav = P.el("nav");
      nav.setAttribute("aria-label", T.common.product);
      const ul = P.el("ul");
      T.nav.forEach(function (n) {
        const a = P.link(n.file, (!P.travelDay && n.label_off) || n.label);
        if (n.file === here) a.setAttribute("aria-current", "page");
        ul.appendChild(P.el("li")).appendChild(a);
      });
      nav.appendChild(ul);
      bar.appendChild(nav);
      this.appendChild(bar);
    }
  }

  customElements.define("app-bar", AppBar);
})();
