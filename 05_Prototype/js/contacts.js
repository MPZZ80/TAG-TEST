/* Screen: those waiting are told. Shows SPEC-07; the contact has no screen, only the message they receive. */
var main = page("contacts");
var d = DATA.contacts;
var contacts = IS_SET ? d.contacts.slice() : [];

var list = el("ul", { class: "contacts" });
function renderContacts() {
  list.replaceChildren.apply(list, contacts.length ? contacts.map(function (c) {
    return el("li", null, el("strong", { text: c.name }), " · " + c.shares + " · " + c.channel + " ",
      el("span", { class: "badge " + (c.state === "accepted" ? "ok" : "warn"), text: t("states.contact." + c.state) }));
  }) : [el("li", { text: t("contacts.none") })]);
}
renderContacts();

var nameInput = el("input", { id: "c-name", type: "text" });
var shares = el("select", { id: "c-shares" }, DATA.ui_text.contacts.share_options.map(function (o) { return el("option", { text: o }); }));
var form = el("form", { on: { submit: function (e) {
  e.preventDefault();
  if (!nameInput.value.trim()) return;
  // nothing is sent until the contact accepts (SPEC-07, rule 2)
  contacts.push({ name: nameInput.value.trim(), shares: shares.value, state: "invited", channel: DATA.ui_text.contacts.default_channel });
  nameInput.value = "";
  renderContacts();
} } },
  el("p", { class: "field" }, el("label", { for: "c-name", text: t("contacts.name") }), nameInput),
  el("p", { class: "field" }, el("label", { for: "c-shares", text: t("contacts.shares") }), shares),
  el("button", { type: "submit", text: t("contacts.invite") }));

main.append(section(t("contacts.list"), list), section(t("contacts.add"), form, el("p", { class: "hint", text: t("contacts.accept_hint") })));

var sent = d.messages[SCENARIO] || [];
main.append(section(t("contacts.sent"), sent.length
  ? el("ul", null, sent.map(function (m) { return el("li", null, el("strong", { text: t("contacts.to", { name: m.to }) }), " " + m.text, el("small", { text: " · " + m.status + ", " + m.source })); }))
  : el("p", { text: t("contacts.none_sent") })));

// When the trip breaks, a message is ready to send in one step (SPEC-07, rule 5).
if (d.prepared[SCENARIO]) {
  var text = el("textarea", { id: "prepared", rows: 3 });
  text.value = d.prepared[SCENARIO];
  main.append(section(t("contacts.prepared"),
    el("p", { class: "field" }, el("label", { for: "prepared", text: t("contacts.prepared_label") }), text),
    el("button", { type: "button", text: t("contacts.send"), on: { click: function () {
      showMessage({ channel: t("contacts.sent_channel"), text: text.value });
    } } })));
}
main.append(simulateButton("contacts"));
