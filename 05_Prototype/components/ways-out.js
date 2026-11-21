/*
 * Component: <ways-out>
 * Defined in: SPEC-05 (Architecture)
 * Used by: SPEC-05
 * Reads: `DATA.ways.ways_out` (the run that broke, the last way), the alternatives of that run in `DATA.runs`,
 *   the trip followed today, `DATA.profile.position`, where the configurator puts the commuter
 * Reacts to: the preference (seat or earlier arrival), which reorders the ways on the page (not kept);
 *   a way being chosen, passed on from <way-card> as a "choose" event
 */
(function () {
  const P = Proto, W = P.T.ways_out;

  // Ways in the order the commuter prefers: arriving earlier, or a seat first and then arriving earlier.
  function ordered(ways, seat) {
    return ways.slice().sort(function (a, b) {
      if (seat) {
        const fa = a.fullness_level || 9, fb = b.fullness_level || 9; // unknown last
        if (fa !== fb) return fa - fb;
      }
      return a.door_arrival < b.door_arrival ? -1 : a.door_arrival > b.door_arrival ? 1 : 0;
    });
  }

  // <ways-out>: where the commuter is, the ways that still reach the door, and the last time any way does.
  class WaysOut extends HTMLElement {
    connectedCallback() {
      const self = this, cfg = DATA.ways.ways_out, run = DATA.runs[cfg.run];
      const trip = P.followedTrip(), door = P.doorName(trip.to);
      const b = trip.legs.findIndex(function (l) { return l.run === cfg.run; });
      const i = P.at === "before" ? -1 : P.at === "after" ? trip.legs.length : parseInt(P.at.split("-")[1], 10) - 1;
      if (P.travelDay && i > b) { this.appendChild(P.el("p", "notice", W.past)); return; }

      const place = i < 0 ? trip.legs[0].from : trip.legs[i].from;
      this.appendChild(P.el("p", "meta", DATA.profile.position
        ? P.fill(W.from_position, { place: place, station: run.from })
        : P.fill(W.from_station, { station: run.from })));

      const pref = P.el("fieldset");
      pref.appendChild(P.el("legend", "", W.preference));
      const list = P.el("div");
      function draw(seat) {
        list.textContent = "";
        ordered(run.alternatives, seat).forEach(function (w) {
          const card = document.createElement("way-card");
          card.way = w; card.run = cfg.run; card.trip = trip.id;
          list.appendChild(card);
        });
      }
      [["earlier", W.pref_earlier], ["seat", W.pref_seat]].forEach(function (o, n) {
        const label = P.el("label");
        const radio = P.el("input");
        radio.type = "radio"; radio.name = "preference"; radio.value = o[0]; radio.checked = n === 0;
        radio.addEventListener("change", function () { draw(o[0] === "seat"); });
        label.appendChild(radio);
        label.appendChild(document.createTextNode(" " + o[1] + " "));
        pref.appendChild(label);
      });
      this.appendChild(pref);
      this.appendChild(list);
      draw(false);
      this.appendChild(P.el("p", "notice", P.fill(W.last_way, { time: cfg.last_way, door: door })));
    }
  }

  customElements.define("ways-out", WaysOut);
})();
