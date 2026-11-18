/*
 * Script: alternative (page PG-17, Alternative). Shows SPEC-02: the details of one way to replace a leg that is late
 * or cancelled, a sketch of its route, the trip as it would become, and the choice to take it.
 * Uses the components <route-map> and <confirm-choice>.
 */
(function () {
  const P = Proto, A = P.T.alternative, R = P.T.run;
  P.shell();
  const main = document.querySelector("main");
  const runId = P.params.get("run"), run = DATA.runs[runId];
  const alt = run && run.alternatives ? run.alternatives.find(function (a) { return a.id === P.params.get("alt"); }) : null;
  const trip = P.trip(P.params.get("trip")) || P.followedTrip();
  if (!alt) { main.appendChild(P.el("h1", "", A.title)); return; }

  main.appendChild(P.el("h1", "", alt.service));
  main.appendChild(P.el("p", "muted", P.fill(A.confirm_title, { service: alt.service, instead: run.service }).replace("?", "")));

  const card = P.el("div", "card");
  card.appendChild(P.el("p", "meta", alt.operator + " · " + alt.source));
  card.appendChild(P.el("p", "", P.fill(R.alt_times, alt)));
  card.appendChild(P.el("p", alt.ticket_valid ? "state-on-time" : "muted", (alt.ticket_valid ? R.alt_ticket_valid : R.alt_ticket_not_valid) + " · " + alt.cost));
  if (alt.note) card.appendChild(P.el("p", "meta", alt.note));
  main.appendChild(card);

  main.appendChild(P.el("h2", "", A.map));
  const map = document.createElement("route-map");
  map.setAttribute("run", runId);
  map.setAttribute("alt", alt.id);
  main.appendChild(map);

  // The trip with this way: the legs before the replaced one stay, the others come from the alternative.
  main.appendChild(P.el("h2", "", A.rest));
  const changed = P.effectiveTrip(trip, { run: runId, alt: alt });
  const list = P.el("ol", "legs");
  changed.legs.forEach(function (l) {
    const mode = P.T.modes[l.mode] || l.mode;
    const li = P.el("li", l.chosen ? "chosen" : "");
    li.appendChild(P.el("p", "", l.dep
      ? mode + " · " + (l.service || "") + ": " + P.fill(A.leg_times, l)
      : P.fill(A.leg_walk, { mode: mode, from: l.from, to: l.to, minutes: l.minutes })));
    list.appendChild(li);
  });
  main.appendChild(list);

  const door = P.doorName(trip.to);
  const now = DATA.connections.by_scenario[P.scenarioKey].door_arrival;
  main.appendChild(P.el("p", "card", now && now !== "—"
    ? P.fill(A.door_compare, { door: door, time: alt.door_arrival, current: now })
    : P.fill(A.door_compare_planned, { door: door, time: alt.door_arrival, planned: DATA.connections.by_scenario.none.door_arrival })));

  // Choosing it: asked first; after yes the trip of today follows the alternative on every page.
  const confirm = document.createElement("confirm-choice");
  main.appendChild(confirm);
  const choose = P.el("button", "button", A.choose);
  choose.type = "button";
  choose.addEventListener("click", function () {
    confirm.ask(P.fill(A.confirm_title, { service: alt.service, instead: run.service }), A.confirm_text, function () {
      location.href = "run.html?" + new URLSearchParams({ trip: trip.id, scenario: P.scenarioKey, choice: runId + ":" + alt.id }).toString();
    });
  });
  main.appendChild(choose);
  const back = P.el("p");
  back.appendChild(P.link("run.html", A.back, { trip: trip.id }));
  main.appendChild(back);
})();
