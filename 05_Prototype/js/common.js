/*
 * Shared by every screen: scenario and clock, interface texts, the header with the scenario selector,
 * simulated messages, and the way facts and missing set-up elements are shown (SPEC-01).
 */

// Scenario from the URL query, so it follows the commuter from screen to screen.
var params = new URLSearchParams(location.search);
var SCENARIO = DATA.scenarios.list[params.get("scenario")] ? params.get("scenario") : DATA.scenarios.default;
var SCN = DATA.scenarios.list[SCENARIO];
var IS_SET = SCN.setup; // false = the commuter has entered nothing yet

// Interface text by dotted key, with {placeholders} filled from vars.
function t(key, vars) {
  var value = key.split(".").reduce(function (o, k) { return o && o[k]; }, DATA.ui_text);
  if (value == null) { console.warn("Missing text: " + key); return key; }
  return String(value).replace(/\{(\w+)\}/g, function (m, k) { return vars && k in vars ? vars[k] : m; });
}

// Create an element: attrs may hold class, text, on{event: fn} and any attribute.
function el(tag, attrs) {
  var node = document.createElement(tag);
  Object.keys(attrs || {}).forEach(function (k) {
    var v = attrs[k];
    if (v == null || v === false) return;
    if (k === "text") node.textContent = v;
    else if (k === "class") node.className = v;
    else if (k === "on") Object.keys(v).forEach(function (e) { node.addEventListener(e, v[e]); });
    else node.setAttribute(k, v === true ? "" : v);
  });
  for (var i = 2; i < arguments.length; i++) {
    var kid = arguments[i];
    (Array.isArray(kid) ? kid : [kid]).forEach(function (c) {
      if (c != null && c !== false) node.append(c.nodeType ? c : document.createTextNode(c));
    });
  }
  return node;
}

// A link to another screen that keeps the scenario.
function href(file, extra) {
  var q = new URLSearchParams(extra || {});
  q.set("scenario", SCENARIO);
  return file + "?" + q.toString();
}
function link(file, text, extra) { return el("a", { href: href(file, extra), text: text }); }

function section(title) {
  var s = el("section", null, el("h2", { text: title }));
  for (var i = 1; i < arguments.length; i++) s.append.apply(s, [].concat(arguments[i]).filter(Boolean));
  return s;
}

// One fact with its source, age and status (SPEC-01, principle 2).
function fact(f) {
  return el("div", { class: "fact fact-" + f.status },
    el("span", { class: "fact-label", text: f.label }),
    el("strong", { class: "fact-value", text: f.value }),
    el("small", { class: "fact-meta", text: t("common.fact_meta", { source: f.source, time: f.time, status: f.status }) }));
}

// What is missing and where to set it up (SPEC-01, "Nothing set up yet").
function missing(what) {
  return el("p", { class: "missing" }, t("common.missing", { what: what }) + " ", link("setup.html", t("common.set_it_up")));
}

// A run merged with its state in the current scenario.
function run(id) {
  var r = DATA.runs[id];
  return Object.assign({ id: id }, r, r.by_scenario[SCENARIO]);
}

// Simulated messages that reach the commuter when the product is closed (instructions, section 9).
function messagesFor(screen) {
  var n = DATA.notifications[screen] || {};
  return n[SCENARIO] || n.any || [];
}
function showMessage(msg) {
  var box = document.getElementById("notice");
  var note = el("div", { class: "notification" },
    el("small", { text: msg.channel }),
    el("p", { text: msg.text }),
    el("button", { type: "button", class: "link-button", text: t("common.dismiss"), on: { click: function () { note.remove(); } } }));
  box.append(note);
}
function simulateButton(screen) {
  var msgs = messagesFor(screen);
  if (!msgs.length) return null;
  return el("button", { type: "button", class: "simulate", text: t("common.simulate"),
    on: { click: function () { msgs.forEach(showMessage); } } });
}

// Header with the screen title, the mock clock and the scenario selector; bottom navigation.
function page(screen) {
  document.title = t(screen + ".title") + " · " + t("common.product");
  var select = el("select", { id: "scenario", on: { change: function () {
    params.set("scenario", this.value);
    location.search = params.toString();
  } } });
  Object.keys(DATA.scenarios.list).forEach(function (k) {
    select.append(el("option", { value: k, text: DATA.scenarios.list[k].label, selected: k === SCENARIO }));
  });
  document.getElementById("top").append(
    el("p", { class: "top-bar" }, link("index.html", t("common.index")),
      el("span", { class: "clock", text: t("common.clock", { weekday: DATA.clock.weekday, date: DATA.clock.date, now: SCN.now }) })),
    el("div", { class: "scenario" }, el("label", { for: "scenario", text: t("common.scenario") }), select),
    el("h1", { text: t(screen + ".title") }),
    el("p", { class: "intro", text: t(screen + ".intro") }));
  var nav = document.getElementById("nav");
  DATA.ui_text.nav.forEach(function (item) { nav.append(link(item.file, item.label)); });
  return document.getElementById("main");
}

// "07:28" plus 110 minutes is "09:18".
function addMinutes(hhmm, minutes) {
  var p = hhmm.split(":"), total = (+p[0] * 60 + +p[1] + minutes + 1440) % 1440;
  return String(Math.floor(total / 60)).padStart(2, "0") + ":" + String(total % 60).padStart(2, "0");
}
