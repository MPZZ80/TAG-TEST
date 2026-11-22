/*
 * Script: tickets (page PG-07, Tickets). Shows SPEC-10, the tickets held, first: shown in one step, also with no
 * signal, and moved to another run or day up to departure; then adding a ticket bought elsewhere.
 * Uses the components <ticket-card> (with <ticket-show> and <ticket-move>) and <ticket-entry>.
 */
(function () {
  const P = Proto, K = P.T.tickets;

  P.shell();
  const main = document.querySelector("main");
  main.appendChild(P.el("h1", "", K.title));
  main.appendChild(P.el("p", "muted", K.intro));

  const list = P.el("div");
  main.appendChild(list);
  function add(t) {
    const card = document.createElement("ticket-card");
    card.ticket = t;
    list.appendChild(card);
    return card;
  }
  DATA.tickets.forEach(add);
  if (!DATA.tickets.length) list.appendChild(P.el("p", "muted", K.none));

  const book = P.el("p");
  book.appendChild(P.link("ways.html", K.book));
  main.appendChild(book);

  main.appendChild(document.createElement("ticket-entry"));
  const status = P.el("p", "meta");
  status.setAttribute("role", "status");
  main.appendChild(status);
  main.addEventListener("ticket-add", function (e) {
    add(e.detail);
    status.textContent = K.added;
  });
})();
