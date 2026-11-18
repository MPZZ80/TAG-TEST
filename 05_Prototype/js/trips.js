/*
 * Script: trips (page PG-16, Trips). Shows SPEC-17, the commuter's trips.
 * The free list of trips door to door; the commuter chooses which one to follow today.
 * Uses the components <trip-card> and <first-trip-cta>.
 */
(function () {
  const P = Proto, TR = P.T.trips;

  P.shell();
  const main = document.querySelector("main");
  main.appendChild(P.el("h1", "", TR.title));

  if (!P.scenario.setup) {
    const cta = document.createElement("first-trip-cta");
    cta.setAttribute("to", "setup.html"); // on Trips, the invitation leads straight to adding the trip
    main.appendChild(cta);
    return;
  }

  main.appendChild(P.el("p", "muted", TR.intro));
  const note = P.el("p", "meta");
  note.setAttribute("role", "status");

  const form = P.el("form");
  main.appendChild(form); // in the page first, so that each <trip-card> draws itself before its controls are added
  DATA.profile.trips.forEach(function (t) {
    const card = document.createElement("trip-card");
    card.setAttribute("trip", t.id);
    form.appendChild(card);
    const label = P.el("label", "");
    const radio = P.el("input");
    radio.type = "radio";
    radio.name = "followed";
    radio.value = t.id;
    radio.checked = !!t.monitored;
    radio.addEventListener("change", function () { note.textContent = TR.not_kept; });
    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + TR.monitor));
    card.appendChild(label);
    [TR.rename, TR.delete].forEach(function (text) {
      const b = P.el("button", "", text);
      b.type = "button";
      b.addEventListener("click", function () { note.textContent = TR.not_kept; });
      card.appendChild(document.createTextNode(" "));
      card.appendChild(b);
    });
  });
  main.appendChild(note);
  const add = P.el("p");
  add.appendChild(P.link("setup.html", TR.add));
  main.appendChild(add);
})();
