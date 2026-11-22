/*
 * Component: <way-search>
 * Defined in: SPEC-08 (Architecture), used only there
 * Used by: SPEC-08, at the top of the Ways page
 * Reads: `DATA.ways.search{from, to, day, when, time}`, `DATA.profile.doors` (the favourite addresses), `DATA.places`,
 *   the search in the address (?from=&to=&when=&time=) when it comes from Today
 * Reacts to: typing in From and To, which suggests addresses, the favourite ones first; "Search", which sends a
 *   "way-search" event with leave after or arrive by and the time, or, with the attribute `go`, opens the Ways page with
 *   the search; the places and the day are shown, not kept
 */
(function () {
  const P = Proto, W = P.T.ways;

  // <way-search>: two addresses with suggestions as one types, the day, and a time to leave after or to arrive by (SPEC-08).
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
      // The suggestions: the favourite addresses first (none before the set-up), then the addresses of the search.
      const list = P.el("datalist");
      list.id = "way-places";
      (P.scenario.setup ? DATA.profile.doors : []).forEach(function (d) {
        const o = P.el("option");
        o.value = d.name;
        o.label = P.fill(W.favourite, d);
        list.appendChild(o);
      });
      DATA.places.forEach(function (a) { const o = P.el("option"); o.value = a; list.appendChild(o); });
      form.appendChild(list);
      function place(label, value) {
        const i = P.el("input");
        i.setAttribute("list", list.id);
        i.autocomplete = "off";
        i.placeholder = W.place_hint;
        i.value = value;
        return field(label, i);
      }
      const start = P.scenario.setup ? { from: P.doorName(q.from), to: P.doorName(q.to) } : { from: "", to: "" };
      const from = place(W.from, P.params.get("from") || start.from), to = place(W.to, P.params.get("to") || start.to);
      const day = field(W.day, P.el("input"));
      day.value = q.day;
      const when = field(W.time, select(Object.keys(W.when).map(function (k) { return [k, W.when[k]]; }), P.params.get("when") || q.when));
      const time = P.el("input");
      time.type = "time";
      time.value = P.params.get("time") || q.time;
      when.parentNode.appendChild(document.createTextNode(" "));
      when.parentNode.appendChild(time);
      const go = P.el("button", "button", W.search);
      go.type = "submit";
      form.appendChild(go);
      const note = P.el("p", "meta");
      note.setAttribute("role", "status");
      form.appendChild(note);
      function moved() { return from.value !== start.from || to.value !== start.to || day.value !== q.day; }
      if (P.params.get("from") && moved()) note.textContent = W.not_kept;
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (self.hasAttribute("go")) { // from Today: the ways open on their own page
          location.href = P.href("ways.html", { from: from.value, to: to.value, when: when.value, time: time.value });
          return;
        }
        note.textContent = moved() ? W.not_kept : "";
        self.dispatchEvent(new CustomEvent("way-search", { bubbles: true, detail: { when: when.value, time: time.value } }));
      });
      this.appendChild(form);
    }
  }

  customElements.define("way-search", WaySearch);
})();
