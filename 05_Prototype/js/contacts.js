/*
 * Script: contacts (page PG-14, Contacts). Shows SPEC-06, those waiting are told.
 * The message ready to send when the trip breaks, first; then the contacts and what each shares, and what was sent today.
 * Uses the components <prepared-message>, <contact-list>, <contact-messages> and <first-trip-cta>.
 */
(function () {
  const P = Proto, C = P.T.contacts;

  P.shell();
  const main = document.querySelector("main");
  main.appendChild(P.el("h1", "", C.title));
  main.appendChild(P.el("p", "muted", C.intro));

  // No trip of the day: sharing cannot start (SPEC-06, When things go wrong).
  if (!P.scenario.setup) { main.appendChild(document.createElement("first-trip-cta")); return; }

  ["prepared-message", "contact-list", "contact-messages"].forEach(function (tag) {
    main.appendChild(document.createElement(tag));
  });
})();
