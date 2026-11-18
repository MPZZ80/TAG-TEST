# Prototype Screens

One HTML file per screen; `index.html` is the entry point. Each file loads the style, the data files it needs, `../js/common.js`, the components it uses from `../components/`, and its own script.

| File | Screen | Page | Specification |
| --- | --- | --- | --- |
| `index.html` | The starting point: a notification from the app; opening it lands on the Run page. Below, all screens for review | — | SPEC-02 (the message) |
| `today.html` | The start page: the trip followed today, leg by leg, with state, platforms, change and arrival at the door; with nothing set up, the invitation to set up the first trip | PG-01 Today | SPEC-04, SPEC-01 (start page) |
| `run.html` | The runs of one trip with their real state, the alternatives for a leg that fails, the other trips; `?trip=` or `?run=` chooses the trip, `?scenario=` the scenario | PG-02 Run | SPEC-02 |
| `trips.html` | The commuter's trips and the one followed today | PG-16 Trips | SPEC-17 |

- Screens are built one specification at a time, from `../../04_Specifications/`. Links to screens not built yet show as plain text.
