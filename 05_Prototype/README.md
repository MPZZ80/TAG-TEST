# Prototype

The frontend-only prototype of the product: interface, flows and interactions, in plain HTML, CSS and JavaScript, with mock data. No backend, no API, no server.

| Folder | What it is |
| --- | --- |
| `instructions/` | The rules for building the prototype. Read `Prototype_Instructions.md` first |
| `data/` | The mock datasets and the interface texts, kept from the first draft |
| `html/` | One file per screen: `index.html`, `today.html` (SPEC-04), `run.html` and `alternative.html` (SPEC-02), `trips.html` (SPEC-17), `alerts.html` (SPEC-03), `connection.html` (SPEC-07), `ways.html` (SPEC-08), `way.html` (SPEC-09, SPEC-10), `tickets.html` (SPEC-10), `lockscreen.html` (the messages) so far |
| `js/` | One script per screen, plus `common.js` with the app bar and the shared helpers |
| `components/` | The web components, one file per component |
| `css/` | `style.css`, the placeholder style |
| `assets/` | Images, icons and fonts; empty for now |

- Being rebuilt one specification at a time from the specifications of 2026-11-18: SPEC-02 (page PG-02, Run) was the first; SPEC-04, SPEC-17, SPEC-03 (page PG-13, Alerts) SPEC-05 (on the Run page) and SPEC-06 ("Share updates" on Today and Run; the Contacts page dropped on 2026-11-22) and SPEC-07 (page PG-03, Connection; asking the connection to wait set aside) SPEC-08 (page PG-05, Ways), SPEC-09 (page PG-06, Way detail) and SPEC-10 (pages PG-06 and PG-07, Tickets) followed. The datasets in `data/` are kept; some comments still use the earlier numbers of the specifications.
