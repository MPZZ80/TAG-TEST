/*
 * Component: <alert-settings>
 * Defined in: SPEC-03 (Architecture)
 * Used by: SPEC-03
 * Reads: `DATA.alerts.kinds`, `DATA.alerts.moments`
 * Reacts to: a switch being turned (the change is shown, not kept)
 */
(function () {
  const P = Proto, A = P.T.alerts;

  // One switch: a checkbox with its label; turning it says the change is not kept.
  function toggle(text, on, note) {
    const label = P.el("label");
    const box = P.el("input");
    box.type = "checkbox";
    box.checked = !!on;
    box.addEventListener("change", function () { note.textContent = A.not_kept; });
    label.appendChild(box);
    label.appendChild(document.createTextNode(" " + text));
    const li = P.el("li");
    li.appendChild(label);
    return li;
  }

  // <alert-settings>: the kinds of event the commuter is told about and the moments of a travel day.
  class AlertSettings extends HTMLElement {
    connectedCallback() {
      const note = P.el("p", "meta");
      note.setAttribute("role", "status");

      this.appendChild(P.el("h2", "", A.kinds));
      const kinds = P.el("ul", "list");
      DATA.alerts.kinds.forEach(function (k) { kinds.appendChild(toggle(k.label, k.on, note)); });
      this.appendChild(kinds);

      this.appendChild(P.el("h2", "", A.moments));
      const moments = P.el("ul", "list");
      DATA.alerts.moments.forEach(function (m) {
        const li = toggle(P.fill(A.moment, m), true, note);
        if (m.heard) li.appendChild(P.el("p", "meta", A.heard)); // how it is heard is OQ-03
        moments.appendChild(li);
      });
      this.appendChild(moments);
      this.appendChild(note);
    }
  }

  customElements.define("alert-settings", AlertSettings);
})();
