/*
 * Script: common, loaded by every screen after the data files.
 * Shows: the shared parts of SPEC-01 (Architecture): the app bar with navigation and <scenario-switch>,
 *   and the web components two or more specifications share: <fact-line>, <run-card>, <usual-delay>,
 *   <message-preview>, <missing-setup>.
 */
(function () {
  const T = DATA.ui_text;
  const params = new URLSearchParams(location.search);
  const scenarioKey = DATA.scenarios.list[params.get("scenario")] ? params.get("scenario") : DATA.scenarios.default;
  const built = DATA.screens.map(function (s) { return s.file; });

  // Fill {name} placeholders of an interface text.
  function fill(text, values) {
    return String(text).replace(/\{(\w+)\}/g, function (m, k) { return values && k in values ? values[k] : m; });
  }

  function el(tag, cls, text) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  // A link to another screen keeps the scenario; a screen not built yet is plain text.
  function link(file, label, extra) {
    if (built.indexOf(file) === -1) return el("span", "not-built", label);
    const q = new URLSearchParams(extra || {});
    q.set("scenario", scenarioKey);
    const a = el("a", "", label);
    a.href = file + "?" + q.toString();
    return a;
  }

  function stateClass(state) { return "state state-" + String(state).replace(/\s+/g, "-"); }

  // App bar: product, mock clock, navigation (SPEC-01, Information architecture), scenario selector.
  function shell() {
    const s = DATA.scenarios.list[scenarioKey];
    const bar = el("header", "app-bar");
    const left = el("div");
    left.appendChild(link("index.html", T.common.product));
    left.appendChild(el("p", "meta", fill(T.common.clock, { weekday: DATA.clock.weekday, date: DATA.clock.date, now: s.now })));
    bar.appendChild(left);
    const nav = el("nav");
    nav.setAttribute("aria-label", T.common.product);
    const ul = el("ul");
    T.nav.forEach(function (n) { const li = el("li"); li.appendChild(link(n.file, n.label)); ul.appendChild(li); });
    nav.appendChild(ul);
    bar.appendChild(nav);
    bar.appendChild(document.createElement("scenario-switch"));
    document.body.insertBefore(bar, document.body.firstChild);
  }

  // <scenario-switch>: for testing, not part of the product (SPEC-01, Architecture).
  class ScenarioSwitch extends HTMLElement {
    connectedCallback() {
      const label = el("label", "meta", T.common.scenario + " ");
      const select = el("select");
      Object.keys(DATA.scenarios.list).forEach(function (k) {
        const o = el("option", "", DATA.scenarios.list[k].label);
        o.value = k;
        if (k === scenarioKey) o.selected = true;
        select.appendChild(o);
      });
      select.addEventListener("change", function () {
        const q = new URLSearchParams(location.search);
        q.set("scenario", select.value);
        location.search = q.toString();
      });
      label.appendChild(select);
      this.appendChild(label);
    }
  }

  // <fact-line>: one fact with its source, time and status. Set .fact before adding it to the page.
  class FactLine extends HTMLElement {
    connectedCallback() {
      const f = this.fact;
      if (!f) return;
      this.className = "fact fact-" + f.status;
      const p = el("p");
      p.appendChild(el("strong", "", f.label + ": "));
      p.appendChild(el("span", "fact-value", f.value));
      this.appendChild(p);
      this.appendChild(el("p", "meta", fill(T.common.fact_meta, f)));
    }
  }

  // The state of a run in the current scenario.
  function runState(id) {
    const r = DATA.runs[id];
    return r ? Object.assign({ id: id, run: r }, r.by_scenario[scenarioKey]) : null;
  }

  // <run-card run="ID">: one run, planned and expected, with every fact and "no news since" when nothing is known.
  class RunCard extends HTMLElement {
    connectedCallback() {
      const s = runState(this.getAttribute("run"));
      if (!s) return;
      const r = s.run, R = T.run;
      this.className = "card";
      this.appendChild(el("h2", "", r.service));
      this.appendChild(el("p", "meta", fill(R.operator, r)));
      this.appendChild(el("p", stateClass(s.facts.length ? s.state : "no news"),
        s.facts.length ? fill(T.states.run[s.state], s) : T.states.run["no news"]));
      this.appendChild(el("p", "", R.planned + ": " + fill(R.times, r)));
      const expected = s.state === "cancelled" ? R.not_running
        : fill(R.times, { from: r.from, dep: s.exp_dep, to: r.to, arr: s.exp_arr });
      if (s.facts.length) this.appendChild(el("p", "", R.expected + ": " + expected));
      this.appendChild(el("p", "", fill(T.today.platform, s) + (s.platform_may_change ? " · " + T.today.platform_may_change : "")));
      if (s.facts.length) {
        this.appendChild(el("p", "", R.position + ": " + (s.position || R.unknown)));
        this.appendChild(el("p", "", R.reason + ": " + (s.reason || R.no_reason)));
      } else {
        this.appendChild(el("p", "notice", fill(R.no_news, { time: DATA.scenarios.list[scenarioKey].now })));
      }
    }
  }

  // <usual-delay run="ID">: how late a run usually is.
  class UsualDelay extends HTMLElement {
    connectedCallback() {
      const r = DATA.runs[this.getAttribute("run")];
      if (r && r.usual_delay) this.appendChild(el("p", "meta", fill(T.run.usual_delay, r.usual_delay)));
    }
  }

  // <message-preview screen="key">: a message outside the product, shown when the "Simulate a message" control is used.
  class MessagePreview extends HTMLElement {
    connectedCallback() {
      const set = DATA.notifications[this.getAttribute("screen")] || {};
      const messages = set[scenarioKey] || set.any || [];
      if (!messages.length) return;
      const self = this;
      const button = el("button", "", T.common.simulate);
      button.type = "button";
      button.addEventListener("click", function () {
        messages.forEach(function (m) {
          const box = el("div", "message");
          box.setAttribute("role", "status");
          box.appendChild(el("p", "meta", m.channel));
          box.appendChild(el("p", "", m.text));
          const close = el("button", "", T.common.dismiss);
          close.type = "button";
          close.addEventListener("click", function () { box.remove(); });
          box.appendChild(close);
          self.appendChild(box);
        });
      });
      this.appendChild(button);
    }
  }

  // <missing-setup what="usual_trip">: what is missing, and where it is set up (SPEC-01, Initial set-up).
  class MissingSetup extends HTMLElement {
    connectedCallback() {
      const what = T.setup[this.getAttribute("what")] || this.getAttribute("what");
      const p = el("p", "notice", fill(T.common.missing, { what: what.toLowerCase() }) + " ");
      p.appendChild(link("setup.html", T.common.set_it_up));
      this.appendChild(p);
    }
  }

  customElements.define("scenario-switch", ScenarioSwitch);
  customElements.define("fact-line", FactLine);
  customElements.define("run-card", RunCard);
  customElements.define("usual-delay", UsualDelay);
  customElements.define("message-preview", MessagePreview);
  customElements.define("missing-setup", MissingSetup);

  window.Proto = { T: T, params: params, scenarioKey: scenarioKey, scenario: DATA.scenarios.list[scenarioKey],
    fill: fill, el: el, link: link, runState: runState, shell: shell };
})();
