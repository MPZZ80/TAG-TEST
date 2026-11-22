# Prototype Screens

One HTML file per screen; `index.html` is the entry point. Each file loads the style, the data files it needs, `../js/common.js`, the components it uses from `../components/`, and its own script. `data/config.js` is loaded before the other data that depend on it; the configurator sits at the top of every screen built with the app bar.

| File | Screen | Page | Specification |
| --- | --- | --- | --- |
| `index.html` | The starting point: a notification from the app; opening it lands on the Run page. Below, all screens for review | — | SPEC-02 (the message) |
| `today.html` | The start page: the trip followed today divided into legs (each name opens the leg on Run), with state, platforms, change and arrival at the door (the news of a late or cancelled run on its own leg, leading to its alternatives), and the other trips; on a day with no travel, "Your next trip" with its day and planned runs; with nothing set up, the invitation to set up the first trip | PG-01 Today | SPEC-04, SPEC-01 (start page) |
| `run.html` | One leg: the real state of its run with its stops and, when it fails, its alternatives; or its means and time; `?trip=` and `?leg=` (or `?run=`) choose the leg | PG-02 Run | SPEC-02; SPEC-05 (when the run is cancelled, its alternatives are the ways out, with the last way) |
| `alternative.html` | One alternative for a leg that is late or cancelled: details, a sketch of its route, the trip with it, and "Choose this way"; `?run=`, `?alt=`, `?trip=` | PG-17 Alternative | SPEC-02 |
| `lockscreen.html` | A fake lock screen of a phone with the messages of the scenario, each opening its page; reached from the configurator; not a page of the product | — | SPEC-01 (messages outside the product) |
| `trips.html` | The commuter's trips and the one followed today | PG-16 Trips | SPEC-17 |
| `ways.html` | Every way door to door: the search (two doors, day, leave after or arrive by), six ways side by side with time, price, who runs them, how full, the way back home, and taking one today or saving it to the trips (not kept) | PG-05 Ways | SPEC-08 |
| `way.html` | Way detail: the trip at the length each part really takes, the arrival planned, expected and with the works, how tight the change is against the commuter's rule; booking the way as one journey | PG-06 Way detail | SPEC-09, SPEC-10 |
| `tickets.html` | Tickets: each ticket shown in one step (also with no signal), moved to another run or day with its cost, or not movable; adding a ticket bought elsewhere | PG-07 Tickets | SPEC-10 |
| `alerts.html` | Alerts on the usual trip: the settings (kinds of event, moments of a travel day), the alerts sent today, works and strikes announced, and a simulated alert; with nothing set up, what is missing | PG-13 Alerts | SPEC-03 |
| `connection.html` | The connection ahead: whether the change at Milano Centrale still holds with the delay of now, what is left over against the commuter's own rule, the next connection that holds and the new arrival at the door; with the run cancelled, the way to the ways out | PG-03 Connection | SPEC-07 |

- Screens are built one specification at a time, from `../../04_Specifications/`. Links to screens not built yet show as plain text.
