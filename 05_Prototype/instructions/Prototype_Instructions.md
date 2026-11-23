---
source: Marco
date: 2026-11-23 21:06
method: generated
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, rules]
related: [Spec_instructions.md]
---

# Instructions for the Prototype

How an agent builds the prototype of the product in `05_Prototype/`. Read this file in full before creating or changing any file of the prototype. The rules are Marco's, given on 2026-11-09; this file writes them out.

## 1. What the prototype is

- A **frontend-only** prototype. It shows the interface, the flows between screens and the interactions on each screen.
- It is **not a working application**. It does not need to compute real journeys, store anything or talk to any service.
- What to show comes from the specifications in `../../04_Specifications/`, starting from their overview, `SPEC-00_overview.md`. The specifications were rewritten on 2026-11-18 with the architecture of this prototype; the first draft built from the earlier ones was deleted. The mock datasets in `data/` are kept; their comments still use the earlier numbers (the set-up was SPEC-02, and SPEC-03 to SPEC-17 are now SPEC-02 to SPEC-16). The choices for the first draft are in section 9.

### Not allowed

- No backend.
- No API calls, no `fetch` to remote services.
- No server-side code, and no local server needed to open the prototype.

## 2. Stack

- Plain **HTML, CSS and JavaScript**, kept as simple as possible.
- Do not use frameworks, libraries, build tools, package managers, preprocessors or other languages unless they are truly necessary. If something seems necessary, ask Marco first and record why.
- The prototype opens by double-clicking `html/index.html` in a browser (`file://`). For this reason the data are JavaScript files loaded with `<script>`, not JSON files read with `fetch`, which browsers block on `file://`.

## 3. Folder structure

```text
05_Prototype/
├── html/           one HTML file per screen; index.html is the entry point
├── css/            style.css, the only stylesheet (placeholder for now, see section 4)
├── js/             one script per screen, plus common.js for what several screens share
├── components/     the web components, one file per component, named after its tag
├── data/           the datasets, one file per dataset (see section 5)
├── assets/         images, icons and fonts
└── instructions/   this file and any other instructions for the prototype
```

- Every folder has a `README.md` that lists its files; keep it current, as `AGENTS.md` requires.
- Name files in lowercase with underscores: `trip_detail.html`, `trip_detail.js`. A screen and its script share the name.
- Paths are relative: from an HTML file, `../css/style.css`, `../js/…`, `../components/…`, `../data/…`, `../assets/…`.
- Each HTML file loads, in this order: `../css/style.css`, the data files it needs, `../js/common.js`, the components it uses from `../components/`, its own script.
- **Web components** (the interface is made of them, as the specifications require): one file per component in `components/`, named after its tag (`run-card.js` defines `<run-card>`), starting with a comment that names the component, the specification that defines it, the specifications that use it, the data it reads and the events it reacts to. A component reads its data from `DATA` and uses the helpers of `common.js`; it does not depend on a screen's script. A screen's script only places components and passes them what they need: every part of a page, its head included, is a component.

## 4. Style

- The style is `../../06_Design/Style.md`, drawn from Marco's moodboard on 2026-11-23; `css/style.css` applies it, with the tokens of that file. It replaced the placeholder.
- Keep every colour, font, size and spacing as a CSS custom property in `:root` at the top of `style.css`, so that the real style can replace the placeholder by changing values, not markup.
- No inline styles and no `<style>` blocks in the HTML. No style set from JavaScript except by adding or removing classes.

## 5. Data

### Every content comes from the data

- Every content shown in the prototype comes from a dataset in `data/`: trips, times, stations, alerts, tickets, and also the interface texts (labels, buttons, messages).
- The HTML holds only the structure; the scripts read the datasets and fill the screens. No text or figure is written directly in the HTML or in the scripts.

### Format of a dataset

- One file per dataset, named after what it holds: `data/trips.js`, `data/ui_text.js`.
- Each file adds one property to a single global object, `DATA`:

```js
/*
 * Dataset: trips
 * What it holds: the usual trips of the user, door to door, with their legs.
 * Used by: home.html, trip_detail.html
 * Fields: id, name, from, to, legs[{mode, line, departs, arrives}]
 * Source: mock
 * Updated: 2026-11-09
 */
window.DATA = window.DATA || {};
DATA.trips = [
  // …records
];
```

- **Every dataset starts with a comment** with the six lines above: what it holds, which screens use it, its fields, its source (`mock` or `client`) and the date it was last changed. Add a short comment on any field whose meaning is not obvious.

### Mock data and real data

- For now all data are mock: invented but plausible, consistent with the specifications and the research (for example real-sounding stations and timetables), never personal data of real people.
- When the client provides real data, they go into the same dataset file with the **same fields**, and the `Source` line becomes `client`. Keep the mock version beside it as `<name>.mock.js` (for example `trips.mock.js`), not loaded by any screen, so the prototype can go back to it.
- If the client data have different fields, convert them to the fields of the dataset; do not change the scripts to fit a new shape unless Marco agrees.

## 6. Screens, flows and interactions

- One HTML file per screen. Flows between screens are plain links; a value one screen passes to the next (for example the chosen trip) goes in the URL query (`trip_detail.html?id=T01`).
- Interactions on a screen (opening a panel, choosing an option, showing an alert) are done in the screen's script with event listeners. A simulated event, such as a delay arriving, is triggered by a visible control or a timer, and its content comes from the data.
- Each HTML file and each script starts with a comment naming the screen and the specifications it shows, for example `<!-- Screen: trip detail. Shows SPEC-05, SPEC-08. -->`.

## 7. Quality

- Semantic HTML: headings in order, `<button>` for actions, `<a>` for navigation, `<label>` for every field, `alt` text for every image.
- Works at phone width first, the way commuters use it.
- Before saying a screen is done, open it from `file://` and check that it shows its data and that the browser console has no errors.

## 8. Language

- Files, comments and dataset names are in English, as for the rest of the repository.
- The interface texts are in English unless Marco asks otherwise. Since they live in `data/ui_text.js`, another language is a different version of that file.

## 9. Choices for the first draft

Marco's choices of 2026-11-16, before the first draft was built. The draft was deleted on 2026-11-18; the choices stay until Marco changes them.

- **Screens:** every specification from SPEC-02 to SPEC-16 has at least one screen, and the start page and the initial set-up of SPEC-01 have theirs. The rules of SPEC-01 (source, age and status of every fact; "no news since"; what is missing and where to set it up) show on every screen.
- **Set-up data:** what the initial set-up (SPEC-01) shows comes from the mock dataset of the commuter's set-up, `data/profile.js`, and every other screen reads the same dataset, so that all screens tell one consistent story. What is typed into the prototype is not kept: to change the set-up, change the dataset.
- **Open questions:** where a specification leaves a value open (see `../../04_Specifications/01_Open_Questions/`), the dataset uses a provisional value and a comment names the question, for example `// provisional, OQ-02`.
- **Scenarios and configurator:** a configurator in a bar of its own at the top of every screen (`<scenario-switch>`) chooses the scenario of `data/scenarios.js` (nothing set up, on time, late, cancelled), where the commuter is on the trip followed today (before the trip at home, leg 1 to 4, after the trip) whether it is a travel day, and whether the phone has a signal (SPEC-10: tickets still show, buying and moving wait); on a day with no travel the start page shows the next trip. What a screen opens on is set by hand in `data/config.js` (a `.js` file, since a JSON file cannot be read from `file://`); the configurator's choices pass from screen to screen in the URL query (`?scenario=late&at=leg-2&day=travel&signal=on`). Where it goes on a phone is to be designed. Marco's choice, 2026-11-21.
- **Persona:** one commuter, the Verona–Milan commuter, with three trips in `data/profile.js` (Home to Milan apartment, followed today: car, high-speed train, underground M2 to Loreto, on foot; Office to home; Home to the client in Brescia). The situations of the other stories (parking, a shared bike, a drive, step-free access) are shown on his trips.
- **Messages outside the product** (alerts, the stop approaching) are shown as notifications on a fake lock screen of a phone (`html/lockscreen.html`), from `data/notifications.js`, reached from the configurator; not on the pages (Marco, 2026-11-21). Each opens the page it leads to; the message of a late or cancelled run is the starting point (`index.html`).
- **Whoever waits** has no screen of their own: "Share updates" opens the phone's share sheet, or, where the browser has none, a sheet drawn by the prototype that sends nothing; the commuter writes the message (Marco, 2026-11-22).
- **Time:** one mock clock for every screen, `DATA.clock`.
- **`index.html`** is the starting point of the prototype: a notification from the app arrives on the phone, with the messages of `data/notifications.js`; opening it lands on the Run page in its scenario (late or cancelled). Below it, the list of the screens built so far, for review. Choice of Marco, 2026-11-18.
- **Changes** to the files of the prototype are recorded in `CHANGELOG.md` like any other file, one entry per request.

## Connections

- [Spec_instructions.md](../../04_Specifications/Spec_instructions.md): the instructions the specifications are written with, including the architecture this prototype follows.
