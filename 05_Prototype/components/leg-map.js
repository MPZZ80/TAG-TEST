/*
 * Component: <leg-map>
 * Defined in: SPEC-02 (Architecture), used only there
 * Used by: SPEC-02, at the top of the Run page
 * Reads: for a run, `DATA.runs[run].approach`, `.stops`, `.alternatives[].route` and the position of the scenario
 *   (`by_scenario.<key>.pos`); for a leg made on one's own, the route set on `.leg` and the events set on `.events`
 *   (with `at` and `detour_route`)
 * Reacts to: .highlight(altId), which draws one alternative in colour; a timer moves the vehicle (simulated live position)
 */
(function () {
  const P = Proto, R = P.T.run, NS = "http://www.w3.org/2000/svg";

  function svg(tag, attrs) {
    const n = document.createElementNS(NS, tag);
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    return n;
  }

  // <leg-map run="ID">: the route of the leg, the vehicle where it is now, and the alternatives in grey.
  // shortcut: a sketch from approximate points, and a position that moves with a timer; a real map with live
  // positions needs a map service and a live feed, both still open (OQ-36, OQ-01).
  class LegMap extends HTMLElement {
    connectedCallback() {
      const run = DATA.runs[this.getAttribute("run")];
      const s = run ? P.runState(this.getAttribute("run")) : null;
      const main = run ? run.stops : (this.leg && this.leg.route) || [];
      if (!main || main.length < 2) return;
      const approach = run && run.approach ? run.approach : [];
      const alts = run && (s.state === "late" || s.state === "cancelled") ? run.alternatives || [] : [];
      const events = (this.events || []).filter(function (e) { return e.at; });
      const pos = s && s.pos && s.state !== "cancelled" ? s.pos : null;

      // The frame holds everything drawn: the leg, the way before it, the alternatives, the events, the vehicle.
      const all = main.concat(approach, pos ? [pos] : []);
      alts.forEach(function (a) { all.push.apply(all, a.route || []); });
      events.forEach(function (e) { all.push(e.at); all.push.apply(all, e.detour_route || []); });
      const W = 320, pad = 26;
      const lons = all.map(function (p) { return p.lon; }), lats = all.map(function (p) { return p.lat; });
      // A margin around the route, so that the places around it show.
      const mx = Math.max(0.004, (Math.max.apply(null, lons) - Math.min.apply(null, lons)) * 0.08);
      const my = Math.max(0.003, (Math.max.apply(null, lats) - Math.min.apply(null, lats)) * 0.25);
      const minX = Math.min.apply(null, lons) - mx, maxX = Math.max.apply(null, lons) + mx;
      const minY = Math.min.apply(null, lats) - my, maxY = Math.max.apply(null, lats) + my;
      // A degree of latitude is about 1.4 times a degree of longitude here (111 km against 79 km).
      const k = Math.min((W - 2 * pad) / ((maxX - minX) || 0.01), (320 - 2 * pad) / (((maxY - minY) || 0.01) * 1.4));
      const H = Math.max(190, Math.round((maxY - minY) * k * 1.4 + 2 * pad));
      const ky = k * 1.4;
      const cLat = (minY + maxY) / 2; // centred, so that a long flat route keeps the land around it in view
      const cLon = (minX + maxX) / 2;
      function x(p) { return W / 2 + (p.lon - cLon) * k; }
      function y(p) { return H / 2 - (p.lat - cLat) * ky; }
      function line(pts, cls) { return svg("polyline", { points: pts.map(function (p) { return x(p) + "," + y(p); }).join(" "), class: cls }); }

      const box = svg("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": R.map });
      if (window.MapBase) MapBase.draw(box, x, y, W, H, maxX - minX, main.concat(pos ? [pos] : [])); // the grey background: towns, water, roads, rail
      const self = this;
      this.altLines = {};
      alts.forEach(function (a) {
        if (!a.route) return;
        const l = line(a.route, "alt-route");
        self.altLines[a.id] = l;
        box.appendChild(l);
      });
      if (approach.length) box.appendChild(line(approach.concat([main[0]]), "approach"));
      const mode = run ? (run.service.indexOf("Underground") === 0 ? "underground" : "train") : this.leg.mode;
      box.appendChild(line(main, "seg seg-" + mode));
      events.forEach(function (e) { if (e.detour_route) box.appendChild(line(e.detour_route, "detour")); }); // the way round

      main.forEach(function (p, i) { box.appendChild(svg("circle", { cx: x(p), cy: y(p), r: i === 0 || i === main.length - 1 ? 4 : 3, class: "stop" })); });
      events.forEach(function (e) { box.appendChild(svg("circle", { cx: x(e.at), cy: y(e.at), r: 5, class: "event" })); });

      // Each label tries above, below, then beside its point, centred first; it is left out if every place is taken.
      // The first and the last stop are placed first, so they always have theirs.
      const boxes = [];
      [0, main.length - 1].concat(main.map(function (p, i) { return i; }).slice(1, -1)).forEach(function (i) {
        const p = main[i], w = p.name.length * 5.2, px = x(p), py = y(p);
        const tries = [["middle", py - 9], ["middle", py + 17], ["start", py - 7], ["end", py - 7], ["start", py + 15], ["end", py + 15]];
        const pick = tries.map(function (c) {
          const x0 = c[0] === "middle" ? px - w / 2 : c[0] === "start" ? px + 6 : px - 6 - w;
          return { y: c[1], x0: Math.max(2, Math.min(W - 2 - w, x0)) };
        }).find(function (c) {
          return !boxes.some(function (q) { return c.x0 < q[1] && c.x0 + w > q[0] && c.y - 9 < q[3] && c.y + 2 > q[2]; });
        });
        if (!pick) return;
        boxes.push([pick.x0, pick.x0 + w, pick.y - 9, pick.y + 2]);
        const t = svg("text", { x: pick.x0, y: pick.y, class: "stop-label" });
        t.textContent = p.name;
        box.appendChild(t);
      });

      // The vehicle, moving along the route from where the data put it (simulated live position).
      const status = P.el("p", "meta");
      if (pos) {
        const path = approach.concat(main);
        let seg = 0, best = Infinity;
        path.forEach(function (p, i) { const d = Math.hypot(p.lat - pos.lat, p.lon - pos.lon); if (d < best && i < path.length - 1) { best = d; seg = i; } });
        let cur = { lat: pos.lat, lon: pos.lon };
        const dot = svg("circle", { cx: x(cur), cy: y(cur), r: 6, class: "vehicle" });
        box.appendChild(dot);
        const started = Date.now(), base = P.scenario.now;
        const tick = function () {
          const next = path[seg + 1];
          cur = { lat: cur.lat + (next.lat - cur.lat) * 0.04, lon: cur.lon + (next.lon - cur.lon) * 0.04 };
          if (Math.hypot(next.lat - cur.lat, next.lon - cur.lon) < 0.01 && seg < path.length - 2) seg++;
          dot.setAttribute("cx", x(cur)); dot.setAttribute("cy", y(cur));
          const secs = Math.round((Date.now() - started) / 1000);
          status.textContent = P.fill(R.map_live, { time: base + ":" + String(secs % 60).padStart(2, "0") });
        };
        tick();
        this.timer = setInterval(tick, 3000);
      }
      this.appendChild(box);
      this.appendChild(status);
      if (alts.length) this.appendChild(P.el("p", "meta", R.map_alt_hint));
      this.appendChild(P.el("p", "meta", R.map_note));
    }
    disconnectedCallback() { if (this.timer) clearInterval(this.timer); }
    // Draw one alternative in colour, the others back in grey.
    highlight(id) {
      const self = this;
      Object.keys(this.altLines || {}).forEach(function (k) {
        self.altLines[k].setAttribute("class", k === id ? "alt-route alt-selected" : "alt-route");
      });
      if (this.altLines && this.altLines[id]) this.altLines[id].parentNode.insertBefore(this.altLines[id], this.altLines[id].parentNode.querySelector(".seg"));
    }
  }

  customElements.define("leg-map", LegMap);
})();
