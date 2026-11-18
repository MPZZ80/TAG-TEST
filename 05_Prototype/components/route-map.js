/*
 * Component: <route-map>
 * Defined in: SPEC-02 (Architecture), used only there
 * Used by: SPEC-02, on the page of an alternative
 * Reads: the route of one alternative, `DATA.runs[run].alternatives[].route` (approximate points)
 * Reacts to: none
 */
(function () {
  const P = Proto, NS = "http://www.w3.org/2000/svg";

  function svg(tag, attrs) {
    const n = document.createElementNS(NS, tag);
    Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    return n;
  }

  // <route-map run="ID" alt="ID">: a sketch of the route, one line per means of transport, from approximate points.
  // shortcut: drawn from mock coordinates, not a real map; a map service is a technology choice still open (OQ-36).
  class RouteMap extends HTMLElement {
    connectedCallback() {
      const r = DATA.runs[this.getAttribute("run")];
      const alt = r && r.alternatives.find(function (a) { return a.id === this.getAttribute("alt"); }, this);
      if (!alt || !alt.route) return;
      const pts = alt.route, W = 320, pad = 28;
      const lons = pts.map(function (p) { return p.lon; }), lats = pts.map(function (p) { return p.lat; });
      const minX = Math.min.apply(null, lons), maxX = Math.max.apply(null, lons);
      const minY = Math.min.apply(null, lats), maxY = Math.max.apply(null, lats);
      const s = (W - 2 * pad) / ((maxX - minX) || 1);
      const H = Math.max(120, Math.round((maxY - minY) * s / 1.4 + 2 * pad)); // the height follows the shape of the route
      function x(p) { return pad + (p.lon - minX) * s; }
      function y(p) { return H - pad - (p.lat - minY) * s / 1.4; }
      const box = svg("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": P.T.alternative.map, class: "route-map" });
      for (let i = 0; i < pts.length - 1; i++) {
        box.appendChild(svg("line", { x1: x(pts[i]), y1: y(pts[i]), x2: x(pts[i + 1]), y2: y(pts[i + 1]), class: "seg seg-" + pts[i].mode }));
      }
      // Labels never overlap: each tries above, then below its point, and is left out when both sides are taken.
      // The start and the end are placed first, so they always have theirs.
      const boxes = [];
      pts.forEach(function (p, i) {
        box.appendChild(svg("circle", { cx: x(p), cy: y(p), r: i === 0 || i === pts.length - 1 ? 4 : 3, class: "stop" }));
      });
      [0, pts.length - 1].concat(pts.map(function (p, i) { return i; }).slice(1, -1)).forEach(function (i) {
        const p = pts[i], w = p.name.length * 5.2, anchor = x(p) > W / 2 ? "end" : "start";
        const x0 = anchor === "end" ? x(p) - 6 - w : x(p) + 6, x1 = x0 + w;
        const spot = [y(p) - 7, y(p) + 15].find(function (ly) {
          return !boxes.some(function (q) { return x0 < q[1] && x1 > q[0] && ly - 9 < q[3] && ly + 2 > q[2]; });
        });
        if (spot === undefined) return;
        boxes.push([x0, x1, spot - 9, spot + 2]);
        const label = svg("text", { x: anchor === "end" ? x1 : x0, y: spot, class: "stop-label", "text-anchor": anchor });
        label.textContent = p.name;
        box.appendChild(label);
      });
      this.appendChild(box);
      const legend = P.el("p", "meta");
      const modes = [];
      pts.slice(0, -1).forEach(function (p) { if (modes.indexOf(p.mode) < 0) modes.push(p.mode); });
      modes.forEach(function (m) {
        const k = P.el("span", "key key-" + m, P.T.modes[m] || m);
        legend.appendChild(k);
        legend.appendChild(document.createTextNode(" "));
      });
      this.appendChild(legend);
      this.appendChild(P.el("p", "meta", P.T.alternative.map_note));
    }
  }

  customElements.define("route-map", RouteMap);
})();
