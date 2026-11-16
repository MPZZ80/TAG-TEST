/* Screen: sessions still running. Shows SPEC-17. */
var main = page("sessions");
var ss = DATA.sessions, pk = ss.parking, ride = ss.ride;

// Start, pay and end a parking session in one step (SPEC-17, rule 1).
var pState = el("p", { class: "badge state-badge", text: t("states.session.running") });
var endBtn = el("button", { type: "button", text: t("sessions.end"), on: { click: function () {
  pState.textContent = t("states.session.ended"); this.disabled = true;
} } });
main.append(section(t("sessions.parking"),
  el("p", { text: t("sessions.parking_line", { place: pk.place, started: pk.started, rate: pk.rate }) }),
  pState, endBtn,
  el("p", { class: "hint", text: t("sessions.remind", { after: pk.remind_after, left: pk.left_place_at }) }),
  simulateButton("sessions")));

// Where the bike can be returned, and a wrong position said before leaving it (SPEC-17, rules 3–4).
var rState = el("p", { class: "badge state-badge", text: t("states.session.running") });
main.append(section(t("sessions.ride"),
  el("p", { text: t("sessions.ride_line", { vehicle: ride.vehicle, started: ride.started, rate: ride.rate }) }),
  rState,
  el("h3", { text: t("sessions.zones", { destination: ride.destination }) }),
  el("ul", null, ride.zones.map(function (z) { return el("li", { text: t("sessions.zone", { name: z.name, distance: z.distance, free: z.free }) }); })),
  ride.position_ok ? null : el("p", { class: "missing", text: t("sessions.wrong_position") }),
  el("button", { type: "button", text: t("sessions.end_ride"), on: { click: function () { rState.textContent = t("states.session.ended"); this.disabled = true; } } })));
