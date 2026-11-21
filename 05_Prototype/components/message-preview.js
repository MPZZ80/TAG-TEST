/*
 * Component: <message-preview>
 * Defined in: SPEC-01 (Architecture)
 * Used by: SPEC-02, SPEC-03, SPEC-05, SPEC-06, SPEC-07, SPEC-11, SPEC-13 to SPEC-16
 * Reads: `DATA.notifications[screen]` for the current scenario, or `any`
 * Reacts to: the "Simulate a message" button; dismiss
 */
(function () {
  const P = Proto, T = P.T, fill = P.fill, el = P.el, link = P.link,
    scenarioKey = P.scenarioKey, runState = P.runState, stateClass = P.stateClass;

  // <message-preview screen="key">: a message outside the product, shown when the "Simulate a message" control is used.
  class MessagePreview extends HTMLElement {
    connectedCallback() {
      const set = DATA.notifications[this.getAttribute("screen")] || {};
      const messages = set[P.dataKey] || set.any || [];
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

  customElements.define("message-preview", MessagePreview);
})();
