/*
 * Script: way (page PG-06, Way detail). Shows SPEC-09, the way at the length each part really takes, and how tight
 * its change is; and SPEC-10, booking the way as one journey.
 * The way: ?way=ID of ways.js, or ?trip=ID for a trip of the commuter (the usual trip on Today).
 * Uses the components <page-head>, <way-strip>, <works-note>, <leg-timing>, <change-tightness>, <usual-delay> and <way-booking>.
 */
(function () {
  const P = Proto, TM = P.T.timing, t = DATA.timing;

  P.shell();
  const main = document.querySelector("main");
  const tripId = P.params.get("trip");
  const way = DATA.ways.search.ways.find(function (w) { return w.id === (P.params.get("way") || (tripId === t.trip ? t.way : null)); });
  const real = way && way.id === t.way; // the real times are recorded for the usual trip only (timing.js)
  P.head(main, {
    back: tripId ? ["today.html", P.travelDay ? P.T.run.back_today : P.T.run.back_today_off] : ["ways.html", TM.back],
    title: tripId && P.trip(tripId) ? P.trip(tripId).name : way ? way.label : TM.title,
    intro: TM.intro,
    notes: real ? [] : [["notice", TM.none]] // for another way, the planned times and a note
  });
  if (way) {
    const strip = document.createElement("way-strip");
    strip.legs = way.legs;
    main.appendChild(strip);
  }
  if (real) {
    ["works-note", "leg-timing", "change-tightness"].forEach(function (tag) { main.appendChild(document.createElement(tag)); });
    const usual = document.createElement("usual-delay");
    usual.setAttribute("run", DATA.connections.from_run);
    main.appendChild(usual);
  }
  // Booking the way as one journey (SPEC-10).
  if (way && !way.sold_out) {
    const book = document.createElement("way-booking");
    book.way = way;
    main.appendChild(book);
  }
})();
