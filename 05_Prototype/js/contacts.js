/* Screen: those waiting for the commuter are told. Shows SPEC-07. */
const app = document.getElementById("app");
const trip = DATA.usual_trip;

app.append(el("p", "muted", t("contacts_intro")));

// The message is ready to send in one step (SPEC-07).
const message = t("contacts_template", {
  commuter: DATA.commuter.name,
  line: trip.main_run.line,
  time: trip.main_run.time,
  arrival: scenario.arrival.time,
  status: t("status_" + scenario.arrival.status)
});
const preview = el("section", "card");
preview.append(el("h2", null, t("contacts_message")), el("blockquote", null, message));
app.append(preview);

DATA.contacts.forEach(contact => {
  const card = el("article", "card");
  card.append(el("h2", null, contact.name), el("p", "muted", contact.relation));
  card.append(el("p", contact.accepted ? null : "alert", t(contact.accepted ? "contacts_accepted" : "contacts_pending")));
  if (contact.leave_at) {
    card.append(el("p", null, t("contacts_leave_at", { time: contact.leave_at[scenarioId], drive: contact.drive_min })));
  }
  const send = el("button", null, t("contacts_send", { name: contact.name }));
  const status = el("p", "muted");
  status.setAttribute("aria-live", "polite");
  // A contact who has not accepted receives nothing, and the commuter is told (SPEC-01).
  send.addEventListener("click", () => {
    send.disabled = true;
    status.textContent = t(contact.accepted ? "contacts_sent" : "contacts_not_sent", { name: contact.name });
  });
  card.append(send, status);
  app.append(card);
});
