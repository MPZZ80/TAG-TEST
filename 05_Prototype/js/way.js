/*
 * Script: way (page PG-06, Way detail). Shows SPEC-09, the way at the length each part really takes, and how tight
 * its change is; and SPEC-10, booking the way as one journey.
 * The way: ?way=ID of ways.js, or ?trip=ID for a trip of the commuter (the usual trip on Today).
 * Uses the components <works-note>, <leg-timing>, <change-tightness>, <usual-delay> and <way-booking>.
 */
(function () {
  const P = Proto, TM = P.T.timing, t = DATA.timing;

  P.shell();
  const main = document.querySelector("main");
  const tripId = P.params.get("trip");
  const way = DATA.ways.search.ways.find(function (w) { return w.id === (P.params.get("way") || (tripId === t.trip ? t.way : null)); });
  const back = tripId ? P.link("today.html", "← " + (P.travelDay ? P.T.run.back_today : P.T.run.back_today_off)) : P.link("ways.html", "← " + TM.back);
  back.classList.add("back");
  main.appendChild(back);
  main.appendChild(P.el("h1", "", tripId && P.trip(tripId) ? P.trip(tripId).name : way ? way.label : TM.title));
  if (way) {
    const legs = P.el("p", "legs");
    way.legs.forEach(function (l) { legs.appendChild(P.el("span", "key key-" + l.mode, l.text)); });
    main.appendChild(legs);
  }
  main.appendChild(P.el("p", "muted", TM.intro));

  // The real times: recorded for the usual trip only (timing.js); for another way, the planned times and a note.
  if (way && way.id === t.way) {
    ["works-note", "leg-timing", "change-tightness"].forEach(function (tag) { main.appendChild(document.createElement(tag)); });
    const usual = document.createElement("usual-delay");
    usual.setAttribute("run", DATA.connections.from_run);
    main.appendChild(usual);
  } else {
    main.appendChild(P.el("p", "notice", TM.none));
  }
  // Booking the way as one journey (SPEC-10).
  if (way && !way.sold_out) {
    const book = document.createElement("way-booking");
    book.way = way;
    main.appendChild(book);
  }
})();
