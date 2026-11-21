# Prototype

The frontend-only prototype of the product: interface, flows and interactions, in plain HTML, CSS and JavaScript, with mock data. No backend, no API, no server.

| Folder | What it is |
| --- | --- |
| `instructions/` | The rules for building the prototype. Read `Prototype_Instructions.md` first |
| `data/` | The mock datasets and the interface texts, kept from the first draft |
| `html/` | One file per screen: `index.html`, `today.html` (SPEC-04), `run.html` and `alternative.html` (SPEC-02), `trips.html` (SPEC-17), `alerts.html` (SPEC-03), `contacts.html` (SPEC-06), `lockscreen.html` (the messages) so far |
| `js/` | One script per screen, plus `common.js` with the app bar and the shared helpers |
| `components/` | The web components, one file per component |
| `css/` | `style.css`, the placeholder style |
| `assets/` | Images, icons and fonts; empty for now |

- Being rebuilt one specification at a time from the specifications of 2026-11-18: SPEC-02 (page PG-02, Run) was the first; SPEC-04, SPEC-17, SPEC-03 (page PG-13, Alerts) SPEC-05 (on the Run page) and SPEC-06 (page PG-14, Contacts) followed. The datasets in `data/` are kept; some comments still use the earlier numbers of the specifications.
