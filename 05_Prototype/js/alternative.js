/*
 * Script: alternative (page PG-17, Alternative). Shows SPEC-02: the details of one way to replace a leg that is late
 * or cancelled, a sketch of its route, the trip as it would become, and the choice to take it.
 * Uses the components <page-head> and <alternative-detail> (with <route-map> and <confirm-choice>).
 */
(function () {
  const P = Proto, A = P.T.alternative;
  P.shell();
  const main = document.querySelector("main");
  const runId = P.params.get("run"), run = DATA.runs[runId];
  const alt = run && run.alternatives ? run.alternatives.find(function (a) { return a.id === P.params.get("alt"); }) : null;
  if (!alt) { P.head(main, { title: A.title }); return; }

  P.head(main, { title: alt.service, intro: P.fill(A.confirm_title, { service: alt.service, instead: run.service }).replace("?", "") });
  const detail = document.createElement("alternative-detail");
  detail.setAttribute("run", runId);
  detail.setAttribute("alt", alt.id);
  detail.setAttribute("trip", (P.trip(P.params.get("trip")) || P.followedTrip()).id);
  main.appendChild(detail);
})();
