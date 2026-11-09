/*
 * Shared by every screen: text lookup, the current scenario, small DOM helpers,
 * the header navigation and the prototype controls.
 */
const params = new URLSearchParams(location.search);
const scenarioId = DATA.scenarios.list[params.get("scenario")] ? params.get("scenario") : DATA.scenarios.default;
const scenario = DATA.scenarios.list[scenarioId];

// Text from data/ui_text.js, with {name} placeholders filled from vars.
function t(key, vars = {}) {
  const text = DATA.ui_text[key] ?? key;
  return text.replace(/\{(\w+)\}/g, (match, name) => vars[name] ?? match);
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

// Links keep the scenario, so every screen shows the same situation.
function withScenario(href) {
  return href + "?scenario=" + scenarioId;
}

function link(href, text, className) {
  const a = el("a", className, text);
  a.href = withScenario(href);
  return a;
}

function runState(run) {
  return run.state === "delayed" ? t("state_delayed", { min: run.delay_min }) : t("state_" + run.state);
}

function factLine(fact) {
  return t("fact_line", {
    source: t("source_" + fact.source),
    age: t("age", { min: fact.age_min }),
    status: t("status_" + fact.status)
  });
}

function answerBox(text, tone) {
  const box = el("p", "answer tone-" + tone, text);
  box.setAttribute("role", "status");
  return box;
}

function renderHeader() {
  const header = document.querySelector(".site-header");
  header.append(el("p", "app-name", t("app_name")));
  const nav = el("nav");
  nav.setAttribute("aria-label", t("app_name"));
  const page = location.pathname.split("/").pop() || "index.html";
  DATA.ui_text.nav.forEach(item => {
    const a = link(item.href, item.text);
    if (item.href === page) a.setAttribute("aria-current", "page");
    nav.append(a);
  });
  header.append(nav);
}

function renderDemoControls() {
  const footer = document.querySelector(".demo");
  footer.append(el("h2", null, t("demo_heading")));
  const label = el("label", null, t("demo_scenario") + " ");
  const select = el("select");
  Object.entries(DATA.scenarios.list).forEach(([id, s]) => {
    const option = el("option", null, s.label);
    option.value = id;
    option.selected = id === scenarioId;
    select.append(option);
  });
  select.addEventListener("change", () => {
    location.search = "?scenario=" + select.value;
  });
  label.append(select);
  footer.append(label, el("p", "muted", t("demo_note")));
}

document.querySelectorAll("[data-text]").forEach(node => {
  node.textContent = t(node.dataset.text);
});
document.title = t("app_name") + " · " + document.querySelector("h1").textContent;
renderHeader();
renderDemoControls();
