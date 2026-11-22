/*
 * Component: <change-tightness>
 * Defined in: SPEC-09 (Architecture), used only there
 * Used by: SPEC-09, on the Way detail page
 * Reads: `DATA.connections` (station, the two runs), `DATA.runs` (their times, how late the first usually is),
 *   `DATA.profile.own_rules`
 * Reacts to: none: the plan is timed from the schedule and the record of past runs, not from today's state
 */
(function () {
  const P = Proto, TM = P.T.timing;
  function min(t) { const p = t.split(":"); return Number(p[0]) * 60 + Number(p[1]); }

  // <change-tightness>: how tight the change is against the commuter's own rule, on paper and with the usual delay.
  class ChangeTightness extends HTMLElement {
    connectedCallback() {
      const k = DATA.connections, a = DATA.runs[k.from_run], b = DATA.runs[k.to_run], rules = DATA.profile.own_rules;
      const own = (rules.per_station.find(function (r) { return r.station === k.station; }) || {}).minutes;
      const rule = own || rules.min_change;
      const gap = min(b.dep) - min(a.arr), delay = (a.usual_delay || {}).minutes || 0, late = gap - delay;
      const names = { station: k.station, from: a.service, to: b.service, rule: P.fill(TM.min, { n: rule }) };
      this.appendChild(P.el("h2", "", TM.connection));
      this.appendChild(P.el("p", "", P.fill(TM.on_paper, Object.assign({ gap: gap }, names))));
      this.appendChild(P.el("p", gap >= rule ? "state-on-time" : "state-late", gap >= rule ? P.fill(TM.spare, { n: gap - rule }) : P.fill(TM.short, { n: rule - gap })));
      if (delay) {
        this.appendChild(P.el("p", "", P.fill(TM.usual, Object.assign({ delay: delay, gap: late }, names))));
        this.appendChild(P.el("p", late >= rule ? "state-on-time" : "state-late", late >= rule ? P.fill(TM.spare, { n: late - rule }) : P.fill(TM.short, { n: rule - late })));
        if (late < rule) this.appendChild(P.el("p", "notice", P.fill(TM.plan_next, names))); // rule 2: no change shorter than the rule
      }
      this.appendChild(P.el("p", "meta", own ? TM.rule_station : TM.rule_default));
    }
  }

  customElements.define("change-tightness", ChangeTightness);
})();
