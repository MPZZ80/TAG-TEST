/*
 * Script: index, the list of the screens built so far, for review. Shows no specification.
 */
(function () {
  const P = Proto, I = P.T.index;
  P.shell();
  const main = document.querySelector("main");
  main.appendChild(P.el("h1", "", I.title));
  main.appendChild(P.el("p", "muted", I.intro));
  main.appendChild(P.el("h2", "", I.screens));
  const list = P.el("ul", "list");
  DATA.screens.filter(function (s) { return s.file !== "index.html"; }).forEach(function (s) {
    const li = P.el("li", "card");
    li.appendChild(P.link(s.file, s.title));
    li.appendChild(P.el("p", "meta", P.fill(I.screen_meta, s)));
    list.appendChild(li);
  });
  main.appendChild(list);
  main.appendChild(P.el("h2", "", I.about));
  main.appendChild(P.el("p", "", P.fill(I.about_text, { persona: DATA.profile.persona })));
  main.appendChild(P.el("p", "", I.scenario_text));
})();
