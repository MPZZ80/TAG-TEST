/*
 * Component: <way-search>
 * Defined in: SPEC-08 (Architecture), used only there
 * Used by: SPEC-08, at the top of the Ways page
 * Reads: `DATA.ways.search{from, to, day, when, time}`, `DATA.profile.doors`
 * Reacts to: "Search", which sends a "way-search" event with leave after or arrive by and the time;
 *   the places and the day are shown, not kept
 */
(function () {
  const P = Proto, W = P.T.ways;

  // <way-search>: the two doors, the day, and a time to leave after or to arrive by (SPEC-08, Operating logic).
  class WaySearch extends HTMLElement {
    connectedCallback() {
      const q = DATA.ways.search, self = this;
      const form = P.el("form", "card");
      function field(label, input) {
        const l = P.el("label", "", label + " ");
        l.appendChild(input);
        form.appendChild(P.el("p")).appendChild(l);
        return input;
      }
      function select(options, value) {
        const s = P.el("select");
        options.forEach(function (o) { const opt = P.el("option", "", o[1]); opt.value = o[0]; opt.selected = o[0] === value; s.appendChild(opt); });
        return s;
      }
      const doors = DATA.profile.doors.map(function (d) { return [d.id, d.name + " · " + d.place]; });
      const from = field(W.from, select(doors, q.from)), to = field(W.to, select(doors, q.to));
      const day = field(W.day, P.el("input"));
      day.value = q.day;
      const when = field(W.time, select(Object.keys(W.when).map(function (k) { return [k, W.when[k]]; }), q.when));
      const time = P.el("input");
      time.type = "time";
      time.value = q.time;
      when.parentNode.appendChild(document.createTextNode(" "));
      when.parentNode.appendChild(time);
      const go = P.el("button", "button", W.search);
      go.type = "submit";
      form.appendChild(go);
      const note = P.el("p", "meta");
      note.setAttribute("role", "status");
      form.appendChild(note);
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const moved = from.value !== q.from || to.value !== q.to || day.value !== q.day;
        note.textContent = moved ? W.not_kept : "";
        self.dispatchEvent(new CustomEvent("way-search", { bubbles: true, detail: { when: when.value, time: time.value } }));
      });
      this.appendChild(form);
    }
  }

  customElements.define("way-search", WaySearch);
})();
