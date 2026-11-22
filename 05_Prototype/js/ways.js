/*
 * Script: ways (page PG-05, Ways). Shows SPEC-08, every way door to door for a day and a time, side by side:
 * public transport, car and combinations, each with its time, price, arrival at the door and way back.
 * Uses the components <way-search>, <way-card> and <confirm-choice>.
 */
(function () {
  const P = Proto, W = P.T.ways, q = DATA.ways.search;
  // A search started on Today arrives in the address.
  if (W.when[P.params.get("when")]) q.when = P.params.get("when");
  if (P.params.get("time")) q.time = P.params.get("time");

  P.shell();
  const main = document.querySelector("main");
  main.appendChild(P.el("h1", "", W.title));
  main.appendChild(P.el("p", "muted", W.intro));
  main.appendChild(document.createElement("way-search"));
  const status = P.el("p", "notice");
  status.setAttribute("role", "status");
  status.hidden = true;
  main.appendChild(status);
  const count = P.el("p", "meta");
  main.appendChild(count);
  const list = P.el("div");
  main.appendChild(list);
  const confirm = document.createElement("confirm-choice");
  main.appendChild(confirm);

  function min(t) { const p = t.split(":"); return Number(p[0]) * 60 + Number(p[1]); }

  // Leave after: the earliest departure first, from that time on. Arrive by: the arrival closest to the time first,
  // those arriving in time before those arriving late; a sold-out way goes last (SPEC-08 rule 3).
  function order() {
    const t = min(q.time);
    const ways = q.ways.filter(function (w) { return q.when === "arrive_by" || min(w.dep) >= t; });
    return ways.sort(function (a, b) {
      if (!!a.sold_out !== !!b.sold_out) return a.sold_out ? 1 : -1;
      if (q.when === "leave_after") return min(a.dep) - min(b.dep);
      const da = t - min(a.arr_door), db = t - min(b.arr_door);
      if ((da < 0) !== (db < 0)) return da < 0 ? 1 : -1;
      return Math.abs(da) - Math.abs(db);
    });
  }

  function draw() {
    list.textContent = "";
    const ways = order();
    count.textContent = ways.length ? P.fill(W.count, { n: ways.length, order: P.fill(W.order[q.when], q) }) : W.none;
    ways.forEach(function (w) {
      const card = document.createElement("way-card");
      card.way = w;
      list.appendChild(card);
    });
  }
  draw();

  main.addEventListener("way-search", function (e) { q.when = e.detail.when; q.time = e.detail.time || q.time; draw(); });
  // A way chosen for today becomes the trip of today (SPEC-04); saved, it joins the trips (SPEC-17). Not kept.
  main.addEventListener("way-today", function (e) {
    const w = e.detail.way;
    confirm.ask(P.fill(W.confirm_title, { way: w.label }), W.confirm_text, function () {
      status.hidden = false;
      status.textContent = P.fill(W.today_done, { way: w.label });
    });
  });
  main.addEventListener("way-save", function (e) {
    status.hidden = false;
    status.textContent = P.fill(W.save_done, { way: e.detail.way.label });
  });
})();
