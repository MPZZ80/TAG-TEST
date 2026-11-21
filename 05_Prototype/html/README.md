# Prototype Screens

One HTML file per screen; `index.html` is the entry point. Each file loads the style, the data files it needs, `../js/common.js`, the components it uses from `../components/`, and its own script. `data/config.js` is loaded before the other data that depend on it; the configurator sits at the top of every screen built with the app bar.

| File | Screen | Page | Specification |
| --- | --- | --- | --- |
| `index.html` | The starting point: a notification from the app; opening it lands on the Run page. Below, all screens for review | — | SPEC-02 (the message) |
| `today.html` | The start page: the trip followed today divided into legs (each name opens the leg on Run), with state, platforms, change and arrival at the door, and the other trips; above it only a line for a message that arrived while closed; on a day with no travel, "Your next trip" with its day and planned runs; with nothing set up, the invitation to set up the first trip | PG-01 Today | SPEC-04, SPEC-01 (start page) |
| `run.html` | One leg: the real state of its run with its stops and, when it fails, its alternatives; or its means and time; `?trip=` and `?leg=` (or `?run=`) choose the leg | PG-02 Run | SPEC-02 |
| `alternative.html` | One alternative for a leg that is late or cancelled: details, a sketch of its route, the trip with it, and "Choose this way"; `?run=`, `?alt=`, `?trip=` | PG-17 Alternative | SPEC-02 |
| `ways_out.html` | The ways out when the trip breaks: why it broke, where the commuter is, the ways that still reach the door (the alternatives of the run that broke, as on Run, the car from the station car park among them) ordered by arriving earlier or by a seat, the last way, and "Choose this way" | PG-04 Ways out | SPEC-05 |
| `trips.html` | The commuter's trips and the one followed today | PG-16 Trips | SPEC-17 |
| `alerts.html` | Alerts on the usual trip: the settings (kinds of event, moments of a travel day), the alerts sent today, works and strikes announced, and a simulated alert; with nothing set up, what is missing | PG-13 Alerts | SPEC-03 |

- Screens are built one specification at a time, from `../../04_Specifications/`. Links to screens not built yet show as plain text.
