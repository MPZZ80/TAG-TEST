/* Screen: the route stays with the driver. Shows SPEC-16. */
var main = page("drive");
var dv = DATA.drive;
var routeLine = el("p", { class: "route", text: t("drive.route", { name: dv.route.name, eta: dv.route.eta }) });
var statusEl = el("p", { class: "badge state-badge", text: t("states.route.kept") });
var ask = el("div");

main.append(el("article", { class: "card" }, el("h2", { text: t("drive.current") }), routeLine, statusEl));

// Nothing changes without the driver's yes; no answer keeps the route (SPEC-16, rules 1, 2, 4).
function question() {
  statusEl.textContent = t("states.route.change_asked");
  ask.replaceChildren(el("div", { class: "card confirm" },
    el("p", { text: t("drive.question", { name: dv.faster.name, saves: dv.faster.saves, reason: dv.faster.reason }) }),
    el("small", { text: t("common.fact_meta", { source: dv.faster.source, time: dv.faster.time, status: dv.faster.status }) }),
    el("p", null,
      el("button", { type: "button", text: t("common.yes"), on: { click: function () {
        routeLine.textContent = t("drive.route", { name: dv.faster.name, eta: dv.faster.eta });
        statusEl.textContent = t("states.route.changed"); ask.replaceChildren();
      } } }),
      el("button", { type: "button", class: "secondary", text: t("common.no"), on: { click: keep } }),
      el("button", { type: "button", class: "link-button", text: t("drive.no_answer"), on: { click: keep } }))));
}
function keep() { statusEl.textContent = t("states.route.kept"); ask.replaceChildren(el("p", { class: "hint", text: t("drive.kept") })); }

main.append(section(t("drive.simulate"),
  el("button", { type: "button", text: t("drive.faster_found"), on: { click: function () { messagesFor("drive").forEach(showMessage); question(); } } }),
  ask),
  section(t("drive.toll_title"), el("p", { class: "flag", text: t("drive.toll", { road: dv.toll.road, needs: dv.toll.needs, cost: dv.toll.cost }) })));
