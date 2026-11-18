/*
 * Script: run (page PG-02, Run). Shows SPEC-02, the real state of the run.
 * Uses the components <run-card>, <fact-line>, <usual-delay>, <message-preview>, <missing-setup> and <source-gap>.
 */
(function () {
  const P = Proto, T = P.T, R = T.run;

  // The run to show: ?run=ID, else the first run of the usual trip, else the first run in the data.
  function chosenRun() {
    const asked = P.params.get("run");
    if (asked && DATA.runs[asked]) return asked;
    const leg = DATA.profile.usual_trip.legs.find(function (l) { return l.run && DATA.runs[l.run]; });
    return leg ? leg.run : Object.keys(DATA.runs)[0];
  }

  P.shell();
  const main = document.querySelector("main");
  const id = chosenRun();
  const s = P.runState(id);

  main.appendChild(P.el("h1", "", R.title));
  main.appendChild(P.el("p", "muted", R.intro));

  // Nothing set up yet: the run can still be looked at (SPEC-02, When things go wrong).
  if (!P.scenario.setup) {
    const missing = document.createElement("missing-setup");
    missing.setAttribute("what", "usual_trip");
    main.appendChild(missing);
  }

  // A message on the commuter's channel when a run of the trip changes (simulated).
  const preview = document.createElement("message-preview");
  preview.setAttribute("screen", "today");
  main.appendChild(preview);

  const card = document.createElement("run-card");
  card.setAttribute("run", id);
  main.appendChild(card);

  const gap = document.createElement("source-gap");
  gap.setAttribute("run", id);
  main.appendChild(gap);

  if (s.facts.length) {
    main.appendChild(P.el("h2", "", R.facts));
    s.facts.forEach(function (f) { const line = document.createElement("fact-line"); line.fact = f; main.appendChild(line); });
  }

  const usual = document.createElement("usual-delay");
  usual.setAttribute("run", id);
  main.appendChild(usual);

  main.appendChild(P.el("h2", "", R.other_runs));
  const list = P.el("ul", "list");
  Object.keys(DATA.runs).filter(function (k) { return k !== id; }).forEach(function (k) {
    const li = P.el("li");
    li.appendChild(P.link("run.html", DATA.runs[k].service + " · " + P.fill(R.times, DATA.runs[k]), { run: k }));
    list.appendChild(li);
  });
  main.appendChild(list);
})();
