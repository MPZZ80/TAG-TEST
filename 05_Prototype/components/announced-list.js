/*
 * Component: <announced-list>
 * Defined in: SPEC-03 (Architecture)
 * Used by: SPEC-03
 * Reads: `DATA.alerts.announced`
 * Reacts to: none
 */
(function () {
  const P = Proto, A = P.T.alerts;

  // <announced-list>: works and strikes announced for coming travel days, and when the commuter is told.
  class AnnouncedList extends HTMLElement {
    connectedCallback() {
      this.appendChild(P.el("h2", "", A.announced));
      const list = P.el("ul", "list");
      DATA.alerts.announced.forEach(function (a) {
        const li = P.el("li", "card");
        li.appendChild(P.el("h3", "", a.date));
        li.appendChild(P.el("p", "", a.text));
        li.appendChild(P.el("p", "meta", P.fill(A.source, a)));
        li.appendChild(P.el("p", "meta", P.fill(A.told, a))); // how early and how often: OQ-08
        list.appendChild(li);
      });
      this.appendChild(list);
    }
  }

  customElements.define("announced-list", AnnouncedList);
})();
