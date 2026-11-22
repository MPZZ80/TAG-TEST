# Prototype Data

One dataset per file. Each adds one property to the global `DATA` object and starts with a comment: what it holds, which screens use it, its fields, its source (`mock` or `client`) and the date it was last changed.

| File | What it holds |
| --- | --- |
| `alerts.js` | the alert settings of the usual trip (SPEC-03): kinds of event and moments of a travel day,  the alerts sent in each scenario, and the works and strikes announced for coming travel days. |
| `claims.js` | the commuter's past trips with their real delay, and the compensation rules of the operator (SPEC-13). |
| `clock.js` | the mock day shown on every screen, and the day shown when it is not a travel day; the hour comes from the scenario (scenarios.js). |
| `config.js` | what the prototype opens on, chosen by hand: the scenario, where the commuter is, whether it is a travel day, whether the phone has a signal; the configurator at the top of every screen changes it for the page shown. A `.js` file because a JSON file cannot be read from `file://`. |
| `connections.js` | the change on the usual trip and its state in each scenario (SPEC-07): the way between the two runs, the margin against the commuter's own rule, the next connection that holds, and when the commuter is told. |
| `share.js` | what "Share updates" hands to the share sheet (SPEC-06): the link to the trip, its title, and the apps of the prototype's own sheet. No message: the commuter writes it. |
| `drive.js` | a drive to Milan on a car day (SPEC-16): the route the driver chose, a faster route found on the way,  and the toll the route needs. |
| `fares.js` | the fares for the usual trip and the days actually travelled over a period (SPEC-12). |
| `map_features.js` | the grey background of the map sketches: lakes, rivers, towns, motorway, railway and some streets, approximate shapes of real places (SPEC-02). |
| `notifications.js` | the messages that reach the commuter when the product is closed, shown on the lock screen (`lockscreen.html`) reached from the configurator (instructions, section 9). |
| `places.js` | the addresses and stations the search suggests as the commuter types (SPEC-08); the favourite addresses, the doors of `profile.js`, come first. |
| `profile.js` | the commuter's set-up (SPEC-01) and trips (SPEC-17): doors, a free list of trips with the one followed today, days of travel, own rules, needs on the way, channels, consent to use position. Every screen reads it, so all screens agree. |
| `runs.js` | the runs of the commuter's trips, planned, their real state in each scenario as facts with their source, time and status, and the other ways to make each leg, from public timetables, with how full each is expected to be; they are also the ways out (SPEC-01, SPEC-02, SPEC-05). |
| `scenarios.js` | the scenarios the configurator switches between, and the mock clock of each. |
| `screens.js` | the screens built so far, with their page and specification, for the index and for the links between screens. |
| `sessions.js` | a parking session at the station and a shared bike ride at the Milan end (SPEC-17),  with the return zones near the destination. |
| `stations.js` | the state of the stations on the trip at the hour of travel (SPEC-14): parking and bike places,  staff, light on the walk, lifts; each as a fact with its source and age. |
| `stop.js` | the run the commuter is on and the stop to get off (SPEC-15), and how the warning is repeated. |
| `tickets.js` | the tickets held (SPEC-10), bought in the product or entered, the runs or days each can be moved to and the cost; `no_move` when the seller does not allow it. |
| `timing.js` | the trip followed today timed at the length each part really takes (SPEC-09): planned and real, with sources; the works announced; the arrival planned, expected and with the works. |
| `ui_text.js` | every interface text of the prototype: titles, labels, buttons, messages, state names.  {name} is filled by the scripts. Another language is another version of this file. |
| `ways.js` | the ways from door to door for a search (SPEC-08): from the Verona home to the Milan apartment, one per kind of means between the cities, with leave after or arrive by; and, for the ways out (SPEC-05), the run they replace and the last way; the ways out themselves are the alternatives of that run in `runs.js`. |

- All data are mock, for one commuter, the Verona–Milan commuter, so that every screen tells the same story.
- Values a specification leaves open are provisional: a comment names the open question (`OQ-…`). The screens, specifications and open questions named in the comments were deleted on 2026-11-18.
- Real client data go into the same file with the same fields; the mock version is kept beside it as `<name>.mock.js`.
