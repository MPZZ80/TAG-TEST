/*
 * Component: <alert-log>
 * Defined in: SPEC-03 (Architecture)
 * Used by: SPEC-03
 * Reads: `DATA.alerts.sent[scenario]`, `DATA.profile.days`, `DATA.clock.weekday`
 * Reacts to: the scenario changing (the page reloads with it)
 */
(function () {
  const P = Proto, A = P.T.alerts;

  // <alert-log>: the alerts sent today, each with its time, text and source; nothing outside the days of travel.
  class AlertLog extends HTMLElement {
    connectedCallback() {
      this.appendChild(P.el("h2", "", A.sent));
      if (DATA.profile.days.indexOf(DATA.clock.weekday) === -1) {
        this.appendChild(P.el("p", "muted", P.fill(A.not_travel_day, { weekday: DATA.clock.weekday })));
        return;
      }
      const sent = DATA.alerts.sent[P.scenarioKey] || [];
      if (!sent.length) { this.appendChild(P.el("p", "muted", A.none_sent)); return; }
      const list = P.el("ul", "list");
      sent.forEach(function (a) {
        const li = P.el("li", "card");
        li.appendChild(P.el("p", "meta", a.time));
        li.appendChild(P.el("p", "", a.text));
        li.appendChild(P.el("p", "meta", P.fill(A.source, a)));
        list.appendChild(li);
      });
      this.appendChild(list);
    }
  }

  customElements.define("alert-log", AlertLog);
})();
