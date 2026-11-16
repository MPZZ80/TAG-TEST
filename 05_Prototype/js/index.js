/* Screen: index of the screens, for review. Shows every specification from SPEC-02 to SPEC-17. */
var main = page("index");
main.append(
  section(t("index.screens"),
    el("ul", { class: "screen-list" }, DATA.screens.map(function (s) {
      return el("li", null, link(s.file, s.title), el("small", { text: t("index.screen_meta", { specs: s.specs, stage: s.stage }) }));
    }))),
  section(t("index.about"),
    el("p", { text: t("index.about_text", { persona: DATA.profile.persona }) }),
    el("p", { text: t("index.scenario_text") })));
