/*
 * Component: <sources-dialog>
 * Defined in: SPEC-02 (Architecture), used only there
 * Used by: SPEC-02, on the Run page
 * Reads: the run passed to .open(run); holds <source-gap>
 * Reacts to: .open(run), called when the info button of <run-card> sends "sources"; "Close"
 */
(function () {
  const P = Proto, R = P.T.run;

  // <sources-dialog>: what each source says about a run, when two of them disagree.
  class SourcesDialog extends HTMLElement {
    connectedCallback() {
      this.dialog = this.appendChild(P.el("dialog", "modal"));
    }
    open(run) {
      const d = this.dialog;
      d.textContent = "";
      d.appendChild(P.el("h2", "", R.sources_title));
      const gap = document.createElement("source-gap");
      gap.setAttribute("run", run);
      d.appendChild(gap);
      const close = P.el("button", "", R.close);
      close.type = "button";
      close.addEventListener("click", function () { d.close(); });
      d.appendChild(close);
      d.showModal();
    }
  }

  customElements.define("sources-dialog", SourcesDialog);
})();
