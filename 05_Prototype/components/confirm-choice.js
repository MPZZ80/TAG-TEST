/*
 * Component: <confirm-choice>
 * Defined in: SPEC-01 (Architecture)
 * Used by: SPEC-02 (choosing an alternative for a leg), and later SPEC-05, SPEC-10, SPEC-15
 * Reads: the title and text set with .ask(title, text, onYes)
 * Reacts to: yes (runs onYes), no and closing (nothing changes)
 */
(function () {
  const P = Proto, T = P.T;

  // <confirm-choice>: asks before anything changes; nothing changes without yes.
  class ConfirmChoice extends HTMLElement {
    connectedCallback() {
      this.dialog = P.el("dialog", "modal");
      this.appendChild(this.dialog);
    }
    ask(title, text, onYes) {
      const d = this.dialog;
      d.textContent = "";
      d.appendChild(P.el("h2", "", title));
      d.appendChild(P.el("p", "", text));
      const yes = P.el("button", "button", T.common.yes);
      yes.type = "button";
      yes.addEventListener("click", function () { d.close(); onYes(); });
      const no = P.el("button", "", T.common.no);
      no.type = "button";
      no.addEventListener("click", function () { d.close(); });
      d.appendChild(yes);
      d.appendChild(document.createTextNode(" "));
      d.appendChild(no);
      d.showModal();
    }
  }

  customElements.define("confirm-choice", ConfirmChoice);
})();
