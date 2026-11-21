/*
 * Script: lock screen, the messages that reach the commuter when the product is closed, as on a phone's lock screen
 * (SPEC-01, Architecture; Marco's choice of 2026-11-21: the messages are not simulated on the pages).
 * The configurator stays on top; each message opens its page. Uses the component <message-preview>.
 */
(function () {
  const P = Proto, L = P.T.lock;

  P.configBar();
  const main = document.querySelector("main");
  main.appendChild(P.el("h1", "visually-hidden", L.title));
  main.appendChild(P.el("p", "muted", L.intro));

  const phone = P.el("div", "phone");
  phone.appendChild(P.el("p", "phone-time", P.scenario.now));
  phone.appendChild(P.el("p", "phone-date", DATA.clock.weekday + " " + DATA.clock.date));
  phone.appendChild(document.createElement("message-preview"));
  const open = P.el("p", "phone-open");
  open.appendChild(P.link("today.html", L.open_app));
  phone.appendChild(open);
  main.appendChild(phone);
})();
