# Prototype Data

One dataset per file. Each adds one property to the global `DATA` object and starts with a comment: what it holds, which screens use it, its fields, its source (`mock` or `client`) and the date it was last changed.

| File | What it holds |
| --- | --- |
| `alerts.js` | the alert settings of the usual trip (SPEC-04): kinds of event and moments of a travel day,  the alerts sent in each scenario, and the works and strikes announced for coming travel days. |
| `claims.js` | the commuter's past trips with their real delay, and the compensation rules of the operator (SPEC-13). |
| `clock.js` | the mock day shown on every screen; the hour comes from the scenario (scenarios.js). |
| `connections.js` | the change on the usual trip and its state in each scenario (SPEC-08, SPEC-10):  the way between the two runs, the margin against the commuter's own rule, the next connection that holds,  and the answer to a request to wait. |
| `contacts.js` | the people the commuter keeps informed (SPEC-07), what each shares, and the messages they receive. |
| `drive.js` | a drive to Milan on a car day (SPEC-16): the route the driver chose, a faster route found on the way,  and the toll the route needs. |
| `fares.js` | the fares for the usual trip and the days actually travelled over a period (SPEC-12). |
| `notifications.js` | the messages that reach the commuter, or a contact, when the product is closed,  simulated at the top of a screen by a visible control (instructions, section 9). |
| `profile.js` | the commuter's set-up (SPEC-01) and trips (SPEC-17): doors, a free list of trips with the one followed today, days of travel, own rules, needs on the way, channels, consent to use position. Every screen reads it, so all screens agree. |
| `runs.js` | the runs of the commuter's trips, planned, their real state in each scenario as facts with their source, time and status, and the other ways to make each leg, from public timetables (SPEC-01, SPEC-02). |
| `scenarios.js` | the scenarios the selector switches between, and the mock clock of each. |
| `screens.js` | the screens built so far, with their page and specification, for the index and for the links between screens. |
| `sessions.js` | a parking session at the station and a shared bike ride at the Milan end (SPEC-17),  with the return zones near the destination. |
| `stations.js` | the state of the stations on the trip at the hour of travel (SPEC-14): parking and bike places,  staff, light on the walk, lifts; each as a fact with its source and age. |
| `stop.js` | the run the commuter is on and the stop to get off (SPEC-15), and how the warning is repeated. |
| `tickets.js` | the tickets the commuter holds (SPEC-11), bought in the product or entered after buying elsewhere,  and the runs a ticket can be moved to, with what moving costs. |
| `timing.js` | the real length of each leg and way through a station of the usual trip (SPEC-10),  next to the planned one, and the works announced on the route. |
| `ui_text.js` | every interface text of the prototype: titles, labels, buttons, messages, state names.  {name} is filled by the scripts. Another language is another version of this file. |
| `ways.js` | the ways from door to door for a search (SPEC-09) and the ways out when the trip breaks (SPEC-06). |

- All data are mock, for one commuter, the Verona–Milan commuter, so that every screen tells the same story.
- Values a specification leaves open are provisional: a comment names the open question (`OQ-…`). The screens, specifications and open questions named in the comments were deleted on 2026-11-18.
- Real client data go into the same file with the same fields; the mock version is kept beside it as `<name>.mock.js`.
