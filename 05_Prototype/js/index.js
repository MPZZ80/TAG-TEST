/*
 * Script: index, the starting point of the prototype: a notification from the app arrives on the phone,
 * as in DATA.notifications; opening it lands on the Run page in its scenario (SPEC-02). Below, all screens, for review.
 */
(function () {
  const P = Proto, S = P.T.start, I = P.T.index;
  const main = document.querySelector("main");
  main.appendChild(P.el("h1", "", S.title));
  main.appendChild(P.el("p", "muted", S.intro));

  ["late", "cancelled"].forEach(function (key) {
    (DATA.notifications.today[key] || []).forEach(function (m) {
      const a = P.el("a", "notification");
      a.href = "run.html?scenario=" + key;
      const head = P.el("p", "meta", S.app + " · " + S.now);
      a.appendChild(head);
      a.appendChild(P.el("p", "", m.text));
      a.appendChild(P.el("p", "meta", DATA.scenarios.list[key].label + " · " + S.open));
      main.appendChild(a);
    });
  });

  main.appendChild(P.el("h2", "", S.review));
  const list = P.el("ul", "list");
  DATA.screens.filter(function (s) { return s.file !== "index.html"; }).forEach(function (s) {
    const li = P.el("li", "card");
    li.appendChild(P.link(s.file, s.title));
    li.appendChild(P.el("p", "meta", P.fill(I.screen_meta, s)));
    list.appendChild(li);
  });
  main.appendChild(list);
  main.appendChild(P.el("p", "meta", P.fill(I.about_text, { persona: DATA.profile.persona }) + " " + I.scenario_text));
})();
