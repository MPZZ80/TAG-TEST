/*
 * Script: ways out (page PG-04, Ways out). Shows SPEC-05, the ways out when the trip breaks.
 * Why the trip broke, then the ways that still reach the door (the alternatives of the run that broke, as on Run),
 * ordered by what comes first for the commuter; choosing one asks first, then the trip continues on it (?choice=).
 * Uses the components <message-preview>, <ways-out>, <way-card>, <confirm-choice> and <first-trip-cta>.
 */
(function () {
  const P = Proto, W = P.T.ways_out, R = P.T.run;

  P.shell();
  const main = document.querySelector("main");
  const preview = document.createElement("message-preview");
  preview.setAttribute("screen", "ways_out");
  main.appendChild(preview);
  main.appendChild(P.el("h1", "", W.title));

  if (!P.scenario.setup) { main.appendChild(document.createElement("first-trip-cta")); return; }

  const trip = P.followedTrip(), runId = DATA.ways.ways_out.run, s = P.runState(runId);
  main.appendChild(P.el("p", "muted", P.fill(W.intro, { door: P.doorName(trip.to) })));

  // A way already chosen: the trip goes on on it, with the way back to the planned trip (SPEC-02 rule 18).
  const ch = P.choice();
  if (ch) {
    const box = P.el("div", "card notice");
    box.appendChild(P.el("p", "", P.fill(R.chosen_notice, { service: ch.alt.service, instead: DATA.runs[ch.run].service, door: P.doorName(trip.to), time: ch.alt.door_arrival })));
    const undo = P.el("p");
    undo.appendChild(P.link("ways_out.html", R.undo, { nochoice: "1" }));
    box.appendChild(undo);
    main.appendChild(box);
  }

  const fact = s.facts.find(function (f) { return f.status === "confirmed"; });
  main.appendChild(s.state === "cancelled" && fact
    ? P.el("p", "state state-cancelled", P.fill(W.broken, { service: s.run.service, source: fact.source, time: fact.time }))
    : P.el("p", "muted", W.not_broken));

  main.appendChild(document.createElement("ways-out"));

  const tell = P.el("p");
  tell.appendChild(P.link("contacts.html", W.tell));
  main.appendChild(tell);

  // Choosing a way: asked first; nothing is booked or changed before yes (SPEC-05 rule 5).
  const confirm = document.createElement("confirm-choice");
  main.appendChild(confirm);
  main.addEventListener("choose", function (e) {
    confirm.ask(P.fill(W.confirm_title, { service: e.detail.way.service }), W.confirm_text, function () {
      location.href = P.href("today.html", { choice: e.detail.run + ":" + e.detail.way.id });
    });
  });
})();
