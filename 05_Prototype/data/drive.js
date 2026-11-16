/*
 * Dataset: drive
 * What it holds: a drive to Milan on a car day (SPEC-16): the route the driver chose, a faster route found on the way,
 *   and the toll the route needs.
 * Used by: drive.html
 * Fields: route{name, eta}, faster{name, reason, saves, eta, source, time, status}, toll{road, needs, cost}
 * Source: mock
 * Updated: 2026-11-16
 */
window.DATA = window.DATA || {};
DATA.drive = {
  route: { name: "A4 motorway, Verona – Milan", eta: "09:10" },
  faster: { name: "Exit at Brescia Est, then the SS11", reason: "Queue of 4 km on the A4 after Brescia, accident", saves: "9 minutes", eta: "09:01",
            source: "Traffic service, live", time: "08:02", status: "estimated" },
  toll: { road: "A4 motorway", needs: "Toll paid at the exit", cost: "€ 11.40" }
};
