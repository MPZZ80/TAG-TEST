---
source: Marco
date: 2026-11-09 20:46
method: generated
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, rules]
related: [SPEC-00_overview.md, 05_Chosen_concept.md]
---

# Instructions for the Prototype

How an agent builds the prototype of the product in `05_Prototype/`. Read this file in full before creating or changing any file of the prototype. The rules are Marco's, given on 2026-11-09; this file writes them out.

## 1. What the prototype is

- A **frontend-only** prototype. It shows the interface, the flows between screens and the interactions on each screen.
- It is **not a working application**. It does not need to compute real journeys, store anything or talk to any service.
- What to show comes from the specifications in `../../04_Specifications/` (start from `SPEC-00_overview.md`) and from the chosen concept, `../../03_Ideation/02_Ideas/05_Chosen_concept.md`.

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
├── data/           the datasets, one file per dataset (see section 5)
├── assets/         images, icons and fonts
└── instructions/   this file and any other instructions for the prototype
```

- Every folder has a `README.md` that lists its files; keep it current, as `AGENTS.md` requires.
- Name files in lowercase with underscores: `trip_detail.html`, `trip_detail.js`. A screen and its script share the name.
- Paths are relative: from an HTML file, `../css/style.css`, `../js/…`, `../data/…`, `../assets/…`.
- Each HTML file loads, in this order: `../css/style.css`, the data files it needs, `../js/common.js`, its own script.

## 4. Style

- Marco will provide a style file later. Until then `css/style.css` is a simple placeholder.
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

## Connections

- `SPEC-00_overview.md`: the list of the specifications that the screens of the prototype show.
- `05_Chosen_concept.md`: the concept the prototype represents.
