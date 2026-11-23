/*
 * Component: <screen-index>
 * Defined in: Prototype_Instructions.md, section 9 (`index.html`, the starting point)
 * Used by: index.html
 * Reads: `DATA.notifications.today` (late and cancelled), `DATA.scenarios`, `DATA.screens`, `DATA.profile.persona`
 * Reacts to: a notification, which opens the Run page in its scenario (SPEC-02); a screen of the list (plain links)
 */
(function () {
  const P = Proto, S = P.T.start, I = P.T.index;

  // <screen-index>: a notification from the app arrives on the phone; below it, every screen built, for review.
  class ScreenIndex extends HTMLElement {
    connectedCallback() {
      this.appendChild(P.el("h1", "", S.title));
      this.appendChild(P.el("p", "muted", S.intro));
      ["late", "cancelled"].forEach(function (key) {
        (DATA.notifications.today[key] || []).forEach(function (m) {
          const a = this.appendChild(P.el("a", "notification"));
          a.href = "run.html?scenario=" + key;
          a.appendChild(P.el("p", "meta", S.app + " · " + S.now));
          a.appendChild(P.el("p", "", m.text));
          a.appendChild(P.el("p", "meta", DATA.scenarios.list[key].label + " · " + S.open));
        }, this);
      }, this);

      this.appendChild(P.el("h2", "", S.review));
      const list = this.appendChild(P.el("ul", "list"));
      DATA.screens.filter(function (s) { return s.file !== "index.html"; }).forEach(function (s) {
        const li = list.appendChild(P.el("li", "card"));
        li.appendChild(P.link(s.file, s.title));
        li.appendChild(P.el("p", "meta", P.fill(I.screen_meta, s)));
      });
      this.appendChild(P.el("p", "meta", P.fill(I.about_text, { persona: DATA.profile.persona }) + " " + I.scenario_text));
    }
  }

  customElements.define("screen-index", ScreenIndex);
})();
