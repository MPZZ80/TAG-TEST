/*
 * Script: tickets (page PG-07, Tickets). Shows SPEC-10, the tickets held, first: shown in one step, also with no
 * signal, and moved to another run or day up to departure; then adding a ticket bought elsewhere.
 * Uses the components <page-head> and <ticket-list> (with <ticket-card> and <ticket-entry>).
 */
(function () {
  const P = Proto, K = P.T.tickets;

  P.shell();
  const main = document.querySelector("main");
  P.head(main, { title: K.title, intro: K.intro });
  main.appendChild(document.createElement("ticket-list"));
})();
