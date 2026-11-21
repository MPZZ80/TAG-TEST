/*
 * Helper: MapBase, the grey background of the map sketches (not a web component).
 * Defined in: SPEC-02 (Architecture), for <leg-map> and <route-map>
 * Reads: `DATA.map_features`
 * Draws, under the routes: towns (with a street grid when the map is close), lakes and rivers, the motorway,
 *   main roads and streets, the railway, and the names of the bigger towns.
 */
(function () {
  const NS = "http://www.w3.org/2000/svg";
  let uid = 0;
  function svg(tag, attrs) {
    const n = document.createElementNS(NS, tag);
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    return n;
  }
  function pts(list, x, y) { return list.map(function (p) { return x({ lat: p[0], lon: p[1] }) + "," + y({ lat: p[0], lon: p[1] }); }).join(" "); }

  // draw(svgElement, x, y, W, H, span): span is the width of the map in degrees, to tell a city map from a regional one.
  // shortcut: shapes are hand-made approximations of real places; a real background needs a map service (OQ-36).
  window.MapBase = {
    draw: function (box, x, y, W, H, span, avoid) {
      // A town or street name is left out near a stop of the route, whose own label comes first.
      const near = function (tx, ty) { return (avoid || []).some(function (p) { return Math.abs(x(p) - tx) < 45 && Math.abs(y(p) - ty) < 18; }); };
      const F = DATA.map_features, close = span < 0.12, id = "grid" + (++uid);
      const g = svg("g", { class: "basemap" });
      g.appendChild(svg("rect", { x: 0, y: 0, width: W, height: H, class: "bm-land" }));
      const defs = svg("defs");
      const pat = svg("pattern", { id: id, width: 9, height: 9, patternUnits: "userSpaceOnUse", patternTransform: "rotate(28)" });
      pat.appendChild(svg("path", { d: "M0 0H9M0 0V9", class: "bm-grid" }));
      defs.appendChild(pat);
      g.appendChild(defs);
      F.towns.forEach(function (t) {
        const r = Math.abs(x({ lat: t.lat, lon: t.lon + t.r }) - x(t));
        if (r < 1.5) return;
        g.appendChild(svg("ellipse", { cx: x(t), cy: y(t), rx: r, ry: r * 0.8, class: "bm-town" }));
        if (close) g.appendChild(svg("ellipse", { cx: x(t), cy: y(t), rx: r, ry: r * 0.8, fill: "url(#" + id + ")", class: "bm-town-grid" }));
      });
      F.water.forEach(function (w) {
        g.appendChild(svg(w.kind === "lake" ? "polygon" : "polyline", { points: pts(w.points, x, y), class: w.kind === "lake" ? "bm-lake" : "bm-river" + (close ? " close" : "") }));
      });
      F.roads.forEach(function (r) {
        if (r.kind !== "motorway" && !close) return;
        g.appendChild(svg("polyline", { points: pts(r.points, x, y), class: "bm-road-casing bm-" + r.kind }));
        g.appendChild(svg("polyline", { points: pts(r.points, x, y), class: "bm-road bm-" + r.kind }));
      });
      F.rail.forEach(function (r) {
        g.appendChild(svg("polyline", { points: pts(r.points, x, y), class: "bm-rail" }));
      });
      F.towns.forEach(function (t) {
        if (!t.label || close) return;
        const tx = x(t), ty = y(t);
        if (tx < 10 || tx > W - 10 || ty < 10 || ty > H - 4 || near(tx, ty)) return;
        const label = svg("text", { x: tx, y: ty + 3, class: "bm-label", "text-anchor": "middle" });
        label.textContent = t.name;
        g.appendChild(label);
      });
      if (close) F.roads.forEach(function (r) {
        if (r.kind !== "main") return;
        const mid = r.points[Math.floor(r.points.length / 2)];
        const tx = x({ lat: mid[0], lon: mid[1] }), ty = y({ lat: mid[0], lon: mid[1] });
        if (tx < 20 || tx > W - 20 || ty < 10 || ty > H - 6 || near(tx, ty)) return;
        const label = svg("text", { x: tx, y: ty - 3, class: "bm-street-label", "text-anchor": "middle" });
        label.textContent = r.name;
        g.appendChild(label);
      });
      box.insertBefore(g, box.firstChild);
    }
  };
})();
