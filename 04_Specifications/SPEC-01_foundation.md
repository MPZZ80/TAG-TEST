---
source: Claude
date: 2026-11-22 18:31
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, planning, information, disruption, usual-trip, late-info]
related: [OQ-37_legs-moving-on-without-position.md, SPEC-02_real-state-of-the-run.md, SPEC-03_alerts-on-the-usual-trip.md, SPEC-04_todays-trip-at-a-glance.md, SPEC-05_ways-out-when-the-trip-breaks.md, SPEC-06_those-waiting-are-told.md, SPEC-07_the-connection-ahead.md, SPEC-08_every-way-door-to-door.md, SPEC-09_times-that-can-be-kept.md, SPEC-10_tickets-that-work-when-needed.md, SPEC-11_the-fare-that-fits-the-days.md, SPEC-12_compensation-from-the-trip.md, SPEC-13_the-station-ahead.md, SPEC-14_stop-approaching.md, SPEC-15_the-route-stays-with-the-driver.md, SPEC-16_sessions-still-running.md, SPEC-17_trips.md, SPEC-00_overview.md, OQ-01_sources-of-the-real-position.md, OQ-02_age-limit-of-a-fact.md, OQ-03_reaching-the-commuter-without-looking.md, US-F-07_trips-planned-commuter-s.md, US-F-11_usual-trip-glance.md, US-F-03_early-warning-usual-trip.md, F-07_trips-planned-commuter-s.md, F-11_usual-trip-glance.md, F-03_early-warning-usual-trip.md, HMW-10_help-german-rail-regular-planner.md, HMW-14_let-dutch-rail-commuter-way.md, HMW-05_let-single-line-commuter-during.md, OQ-04_suggesting-the-usual-trip.md, OQ-05_more-than-one-usual-trip.md, OQ-09_first-view-with-no-usual-trip.md]
---

# SPEC-01: Foundation

Use this file as a prompt: it lays the ground that every other specification stands on, within the architecture below: a frontend-only prototype made of web components, with all data from mock datasets in `data/`. Build it first.

## Purpose

The product helps a person who commutes, often between cities and on more than one means, to plan the door to door trip, to know how it really stands while it goes on, and to act when it breaks, and it tells the people who wait for them. It works from what the commuter tells it once (their doors, usual trip, own rules, days and needs), shows each fact with where it comes from, speaks first only when something changes, and never changes a plan without the commuter's yes.

- **Stories:** all 24 (F-01 to F-24). **Used by:** every specification.

## Principles

1. **The real state before the timetable.** What is shown is where a vehicle really is and when it will really leave and arrive, not only what was planned. Stories: F-01 ("where the train really is, when it will really leave"), F-06, F-09 ("the live arrival"), F-13 ("the time he is promised is the time that is kept"). Used by: SPEC-02, SPEC-04, SPEC-06, SPEC-07, SPEC-09.
2. **Every fact shows where it comes from.** Who said it, when, and whether it is confirmed or estimated. Stories: F-01 ("which source says so"), F-09 ("a confirmation of any delay"). Used by: SPEC-02, SPEC-05, SPEC-06, SPEC-07, SPEC-13.
3. **Quiet unless something changes; the information first.** The product speaks first only when something that matters to the commuter's trip has changed; when they open it, the information they need comes first, with nothing in front of it. Stories: F-03 ("only when something changes"), F-11 ("with no extra step"), F-24 ("with nothing in front of it"). Used by: SPEC-03, SPEC-04, SPEC-14, SPEC-16.
4. **The decision stays with the person.** Nothing in a trip, route or ticket is changed without the commuter's explicit yes. Stories: F-14a ("asked before the route is changed"), F-19 ("so that she can choose"). Used by: SPEC-05, SPEC-10, SPEC-15.
5. **Said once, used everywhere.** The doors, the usual trip, the days of travel, the commuter's own rules and needs are entered once, in the initial set-up (below), and every specification uses them. Stories: F-07 ("my own minimum change time"), F-11 ("without searching"), F-03 ("my usual train"). Used by: every specification.

## The user

- **The commuter:** the person making the trip. Personas from the interviews: the Verona–Milan commuter, the Como commuter, the single-line commuter, the outskirts hybrid worker. Desk personas: a teenager, a London traveller, a German rail regular, a Dutch rail commuter, an Italian driver, a woman driving to the station, a British traveller, a daily traveller in a British city, a wheelchair user, a shared-bike rider in South Korea, a young commuter in Madrid, an Italian bus user.
- **Whoever waits:** a person the commuter shares a trip with, such as whoever drives to fetch them, from the phone's own share sheet; not entered in the product (Marco, 2026-11-22). Stories: F-09, F-06, F-02. SPEC-06.
- **What the commuter tells the product,** and can change or delete at any time: doors, usual trip, days of travel, own rules, needs, channels and whether their position may be used (Initial set-up, below); tickets held (SPEC-10).

- **Stories:** F-02, F-03, F-06, F-07, F-09, F-11, F-20. **Used by:** every specification.

## The things it deals with

| Thing | What it is | Parts | Where it comes from |
| --- | --- | --- | --- |
| **Door** | A place a trip starts or ends: home, office, another place | Name, position | Entered by the commuter (Initial set-up) |
| **Usual trip** | A trip of the commuter's list, made regularly; the one followed today is the trip of the day | Name, doors at both ends, legs, the runs usually taken | Entered by the commuter: the first in the initial set-up, the others in Trips ([SPEC-17](SPEC-17_trips.md)) |
| **Trip** | One journey on one day, door to door | Legs, connections, tickets used | The day of a usual trip, or a way the commuter chose (SPEC-04, SPEC-08) |
| **Leg** | One part of a trip on one means | Stage, means (train, bus, underground, car, bicycle, shared vehicle, walk, lift), start and end place | From the plan |
| **Run** | One departure of one service on one day | Planned times and stops, platform, operator | From the schedule |
| **Connection** | The change between two legs | Arrival of one run, departure of the next, the way between them, the margin | From the plan and the commuter's own rules |
| **Place** | A station, stop, car park or return zone | Platforms, ways through, lifts, lights, staff hours, parking and bike places, cost | From operators, third parties and other travellers |
| **Fact** | One piece of information about a run or a place | Content, source, time, confirmed or estimated, reason when known | See "Sources of information" |
| **Way** | One way of completing a trip from a given place and time | Legs, departure, arrival, cost, ticket validity | Built by the product (SPEC-08) |
| **Ticket** | A right to travel | Runs, days or period covered, conditions for moving it, seller | Bought in the product or entered by the commuter (SPEC-10) |

- **Stages of a trip,** as the touchpoints define them: planning, before departure, first mile, main leg, transfer, last mile, disruption.
- **Stories:** all 24. **Used by:** every specification.

## States

- **Run:** `planned` → `on time` or `late (minutes)` → `departed` → `arrived`; from any state before arrival → `cancelled`; `no news` when no source has said anything for longer than the age limit [not traced: the limit]. A run becomes `cancelled` only on a fact that says so; a growing delay alone never makes it `cancelled` (F-01).
- **Leg:** `to do` → `in progress` → `completed`. When the commuter's position reaches the start of a leg, that leg is `in progress` and the legs before it are `completed`; when it reaches the end of the leg, the leg is `completed` and the next one becomes `in progress`. Before the trip begins every leg is `to do`. The position is used only with the commuter's consent; without it, how the legs move on is [not traced] ([OQ-37](01_Open_Questions/OQ-37_legs-moving-on-without-position.md)). Asked by Marco on 2026-11-21. In the prototype, where the commuter is is set by the configurator (`<scenario-switch>`).
- **Connection:** `holds` → `at risk` → `lost`, moved by the expected arrival of the incoming run against the commuter's minimum change time (F-06, F-07).
- **Trip:** `planned` → `today` → `under way` → `completed`; from `today` or `under way` → `broken` (a run cancelled, a connection lost, a vehicle that does not come) → back to `under way` on another way, or `abandoned` (F-02, F-06).
- **Fact:** `confirmed`, `estimated` or `reported`; `outdated` past the age limit.

- **Stories:** F-01, F-02, F-06, F-07. **Used by:** SPEC-02, SPEC-04, SPEC-05, SPEC-06, SPEC-07.

## Sources of information

| Source | What it can tell | How far it is trusted |
| --- | --- | --- |
| **Schedule** | Planned runs, times, platforms; works and strikes once announced | What was promised, not what happens |
| **Operator, live** | Position, delay, reason, cancellation, platform, state of lifts and facilities | Confirmed when stated as final |
| **Other travellers** | What they see on the spot | Reported: shown as such, with how many and how recent |
| **Third parties** | Parking places and prices, fares, tolls, return zones, traffic and accidents on the roads, the city's notices of road works | As stated by them; a traffic report is `reported` |
| **The commuter** | Their doors, trips, rules, needs, tickets | Taken as given |
| **Record of past runs** | How late a run usually is | Estimated (SPEC-02 keeps it) |

- **When two sources disagree,** both are shown, each with its source and age.
- **Which sources the product uses** to know the real position of a vehicle (the operator, the position of travellers on board, what travellers report) is open: the stories ask to see the source, not which one [not traced].
- **Stories:** F-01, F-13, F-15, F-19, F-20. **Used by:** SPEC-02, SPEC-05, SPEC-09, SPEC-13.

## Channels

- **Inside the product,** when the commuter opens it.
- **A message** on the channel the commuter chose in the initial set-up, for news that must reach them when the product is closed (F-03, F-06, F-23, F-18).
- **Heard rather than read,** while the commuter drives (F-03: "during the seven minutes he drives") [technology choice open].
- **A trip shared,** from the phone's share sheet on the app the commuter chooses, with a message the commuter writes and a link to the trip (F-09; SPEC-06).

**When the product stays quiet:** outside the days of travel; when nothing has changed since the last message; when a change does not touch a run, connection or place of the commuter's trip.

- **Stories:** F-03, F-06, F-09, F-18, F-23. **Used by:** SPEC-03, SPEC-06, SPEC-07, SPEC-14, SPEC-16.

## Rules that hold everywhere

- **No data:** the product says that there is no news and since when. It never shows the planned time as if it were the real one.
- **Late data:** every fact shows its age; past the age limit it is marked `outdated` [not traced: the limit].
- **Wrong data:** when a later fact contradicts an earlier one, the earlier one is replaced, and a commuter who was told the earlier one is told what changed.
- **The commuter does not respond:** nothing is done on their behalf. A question stays open until its moment passes; then the trip stays as it was.
- **Nothing set up yet:** a behaviour that needs something the commuter has not entered says what is missing and leads to the specification where it is set up.
- **Consent to use position:** off until the commuter turns it on in the initial set-up; it can be turned off at any time; when off, everything that does not need the position still works.
- **Never shared:** whoever opens the link of a trip sees only that trip, and only until it ends (SPEC-06).

- **Stories:** F-01, F-02, F-09, F-14a. **Used by:** every specification.

## Vocabulary

| Term | Meaning |
| --- | --- |
| commuter | The person making the trip |
| whoever waits | A person the commuter shared a trip with |
| door | A place a trip starts or ends |
| usual trip | A trip of the commuter's list of trips (SPEC-17); the one followed today is the trip of the day |
| followed trip | The trip of the list the commuter chose to follow today |
| trip | One journey on one day, door to door |
| leg | One part of a trip on one means; its stage is first mile, main leg, transfer or last mile |
| run | One departure of one service on one day |
| connection | The change between two legs, with its margin |
| way | One way of completing a trip from a given place and time |
| fact | One piece of information, with its source, time and status |
| own rules | The limits the commuter sets: minimum change time, margin, number of changes, own leg |
| travel day | A day on which the commuter makes their usual trip |

## Architecture

How the product is built for testing UX, UI and flows. Stories: all 24. Used by: every specification.

- **Pages:** the pages of the information architecture (below); each specification names those it uses.
- **Frontend only.** No backend, no API, no server-side code. The product does not compute, store or fetch anything for real: it shows the interface, the flows and the interactions so that they can be tested. What the commuter types is shown on the page, not kept; to change what the prototype starts from, change the datasets.
- **Web components.** Every part of the interface is a web component. The components two or more specifications share:

| Component | What it shows | Data it reads | Events it reacts to | Used by |
| --- | --- | --- | --- | --- |
| `<fact-line>` | One fact: its value, its source, its time and its status (confirmed, estimated, reported, outdated) | a fact `{label, value, source, time, status}` from `runs` or `stations` | none | SPEC-02, SPEC-04, SPEC-12, SPEC-13 |
| `<run-card>` | One run: its state first (with an information button when two sources disagree), then, unless it is cancelled, planned and expected times, platform and position; "Why" only for a problem; the facts and `<usual-delay>` under "Details", closed; "no news since" when nothing is known | `runs.<id>` and its `by_scenario.<scenario>` | the scenario changing; "Details"; the information button, which sends a "sources" event | SPEC-02, SPEC-04, SPEC-07 |
| `<usual-delay>` | How late a run usually is, and over how many past runs | `runs.<id>.usual_delay` | none | SPEC-02 (inside `<run-card>`), SPEC-09 |
| `<trip-card>` | One trip door to door: its name, the doors at both ends and its legs, leading to its runs | one trip of `profile.trips`, `profile.doors` | opening the trip | SPEC-02, SPEC-17 |
| `<leg-problem>` | What changes a leg the commuter makes on their own: traffic or an accident on a car leg, works or a closed street on a walking leg, with the extra minutes, the way round and its source, age and status; nothing when the leg is clear | `leg_events.<trip>-<leg>.by_scenario.<scenario>` | none | SPEC-02, SPEC-04 |
| `<first-trip-cta>` | The invitation to set up the first trip, in place of a behaviour that needs one | `ui_text.run.no_trip_*` | "Set up your first trip", which leads to Trips (or to the set-up, from Trips) | SPEC-01 (Start page), SPEC-02, SPEC-17 |
| `<way-card>` | One way of completing a trip: legs, departure, arrival at the door, cost or price, and, where known, ticket validity (valid, another ticket needed, no ticket needed) and how full it is expected to be (unknown when not known, never empty) | one way of `ways.search.ways[]` (the alternatives of a run are drawn by `<leg-alternatives>`, SPEC-02) | "Take this way today" and "Save to your trips", which send a "way-today" or "way-save" event | SPEC-08 |
| `<confirm-choice>` | A proposed change and its yes and no; nothing changes until yes; no answer leaves everything as it was | the proposal passed by the specification | yes, no, the moment passing | SPEC-02, SPEC-05, SPEC-10, SPEC-15 |
| `<missing-setup>` | What is missing for a behaviour, and a link to the step of the initial set-up where it is entered | `profile`, `scenarios.list.<key>.setup`, `ui_text.common.missing` | "Set it up" | every specification |
| `<message-preview>` | The messages that would reach the commuter outside the product, as notifications on a fake lock screen of a phone, a page reached from the configurator; not on the pages of the product (Marco, 2026-11-21) | `notifications.<screen>.<scenario or any>[]` | tapping a message, which opens the page it leads to | SPEC-02, SPEC-03, SPEC-05, SPEC-06, SPEC-07, SPEC-11, SPEC-13 to SPEC-16 |
| `<scenario-switch>` | The configurator, in a bar of its own at the top of every page: the scenario (nothing set up, on time, late, cancelled), where the commuter is on the trip followed today (before the trip, leg 1 to 4, after the trip) whether it is a travel day, and whether the phone has a signal; for testing, not part of the product. On a phone, where it goes is to be designed | `scenarios`, `config`, `profile.trips` | choosing a value, which reloads the page with it in the address | every specification |
| `<start-page>` | The start page (below) | `profile`, `scenarios`, `clock`, `ui_text` | see "Start page" | SPEC-01, SPEC-04 |
| `<setup-flow>` | The initial set-up, step by step (below) | `profile`, `ui_text` | next, back, skip, save | SPEC-01 and every specification that leads to it |

- **Datasets in `data/`, all mock.** Invented but plausible, consistent with the stories and the evidence, for one commuter, the Verona–Milan commuter, so that every page tells the same story. Real data from a client go into the same datasets with the same fields. The datasets two or more specifications read:

| Dataset | What it holds | Fields | Used by |
| --- | --- | --- | --- |
| `profile` | What the commuter set up (Initial set-up, below) | `persona`, `doors[{id, name, place}]`, `trips[{id, name, from, to, monitored, legs[{mode, from, to, run, minutes, stage, route[{name, lat, lon}]}]}]`, `days[]`, `own_rules{min_change, per_station[{station, minutes}], margin, max_changes, own_leg}`, `needs{step_free}`, `channels[]`, `position` | every specification |
| `runs` | The runs of the commuter's trips, planned, their real state in each scenario as facts, and the other ways to make each leg | `service`, `operator`, `from`, `to`, `dep`, `arr`, `platform_dep`, `usual_platform`, `platform_arr`, `usual_delay{minutes, runs}`, `approach[]`, `stops[{name, time, lat, lon}]`, `alternatives[{id, mode, service, operator, from, to, dep, arr, door_arrival, ticket_valid, cost, source, note, fullness, fullness_level, fullness_source, legs_after[], route[]}]`, `by_scenario.<key>{state, delay, exp_dep, exp_arr, platform, platform_may_change, position, reason, facts[]}` | SPEC-02 to SPEC-07, SPEC-09, SPEC-14 |
| `connections` | The change on the usual trip and its state in each scenario | `station`, `from_run`, `to_run`, `walk_minutes`, `board_where`, `by_scenario.<key>{state, margin, next_dep, door_arrival, warn_at}` | SPEC-04, SPEC-07, SPEC-09 |
| `ways` | The ways from door to door for a search, and, for the ways out when the trip breaks, the run they replace and the last way | `search{from, to, day, when, time, back_after, ways[]}` (`when`: leave after or arrive by), `ways_out{run, last_way}` (the ways out are the alternatives of that run in `runs`) | SPEC-05, SPEC-08, SPEC-10 |
| `tickets` | The tickets the commuter holds, bought in the product or entered | `[{id, title, covers, seller, entered, state, code, moves[{to, cost}], no_move}]` | SPEC-10, SPEC-12 |
| `leg_events` | What changes a car or walking leg in each scenario: traffic, accidents, works, closed streets | `<trip>-<leg>.by_scenario.<key>[{kind, text, extra_minutes, detour, source, time, status, at, detour_route}]` | SPEC-02, SPEC-04 |
| `notifications` | The messages that reach the commuter when the product is closed | `<screen>.<scenario or any>[{channel, text, page}]` (`page`: where the message leads) | the specifications that use `<message-preview>` |
| `scenarios` | The scenarios and the mock clock of each, by where the commuter is | `list.<key>{label, setup, now, times{before, leg-1 … leg-4, after}, trip_state, connection_state}` | every specification |
| `config` | What the prototype opens on, chosen by hand; the configurator changes it for the page shown | `scenario`, `at` (`before`, `leg-1` … `leg-4`, `after`), `day` (`travel`, `off`), `signal` (`on`, `off`) | every specification |
| `clock` | The mock day, and the day shown when it is not a travel day | `date`, `weekday`, `iso`, `off_day{date, weekday, iso}` | every specification |
| `ui_text` | Every interface text: titles, labels, buttons, messages, state names | `common`, `nav[]`, `weekdays[]`, `channel_options[]`, `modes`, `states`, one object per page | every specification |

- **Events from outside are simulated.** What the product cannot reach without a backend (an operator's live data, other travellers' reports, an answer from another service, a message on a channel outside the product) is a dataset. An event it would send (a delay, a cancellation, an answer, an incoming message) is triggered by `<scenario-switch>`, by the lock screen (`<message-preview>`), or by a timer on the mock clock, and its content comes from the data.
- **From one page to the next.** What the commuter chooses on one page reaches the next in the address of the page (for example the scenario, where the commuter is, the day, the run, the way or the alternative chosen: `?scenario=late&at=leg-2&day=travel&run=HS9707`, `?choice=HS9707:A4`). Nothing else is passed and nothing is stored.
- **How the files are laid out** is in [Prototype_Instructions.md](../05_Prototype/instructions/Prototype_Instructions.md); the specifications name components and datasets, not files.

## Information architecture

**A proposal:** the project has no information architecture of its own, so the pages below are proposed from the stories, for Marco to decide. PG-16 Trips was added on 2026-11-18 at Marco's request. The start page and the initial set-up are pages of it. Stories: all 24. Used by: every specification.

- **Navigation:** always reachable, in this order: Today, Trips, Ways, Tickets, Alerts, Set-up. On a day with no travel, Today is called Next trip (SPEC-04). Every other page is reached from a page or from a message.
- **Messages outside the product** lead to the page of the behaviour that sent them (for example a cancellation leads to the Run page of the leg that broke, with its alternatives).
- **The pages,** each with what it is for, where it is reached from, and the specifications whose functions it holds, in order of importance:

| Page | Name | What it is for | Reached from | What it holds, in order |
| --- | --- | --- | --- | --- |
| PG-01 | **Today (start page)** | What the product opens on: the trip of the day, with nothing in front of it; at the first opening, the way into the set-up or a one-off search | Opening the product; the navigation | [SPEC-04](SPEC-04_todays-trip-at-a-glance.md) the trip of the day, first, divided into legs, each leading to its detail on Run; [SPEC-17](SPEC-17_trips.md) the other trips, under it; [SPEC-02](SPEC-02_real-state-of-the-run.md) the state of each run, as a line of the trip; [SPEC-07](SPEC-07_the-connection-ahead.md) the change, as a line of the trip; [SPEC-13](SPEC-13_the-station-ahead.md) a facility that fails on the trip, as a line; [SPEC-05](SPEC-05_ways-out-when-the-trip-breaks.md) a line leading to the ways out when the trip breaks; [SPEC-06](SPEC-06_those-waiting-are-told.md) "Share updates" in the box of the expected arrival at the door, which opens the share sheet of the phone; [SPEC-14](SPEC-14_stop-approaching.md) a line leading to the stop page while the trip is under way; [SPEC-15](SPEC-15_the-route-stays-with-the-driver.md) a line leading to the drive page on a car leg; [SPEC-16](SPEC-16_sessions-still-running.md) a line for a session still running |
| PG-02 | **Run** | One leg of a trip: the real state of its run with its stops, or its means and time; the alternatives when it fails | The name of a leg on Today, a trip on Trips, a way; a message about a run (the starting point of the prototype) | [SPEC-02](SPEC-02_real-state-of-the-run.md) the leg, first; its stops; the alternatives when it is late or cancelled |
| PG-03 | **Connection** | Whether the change ahead still holds, and the next one that does (asking the connection to wait set aside on 2026-11-22) | The change on Today; a message about the connection | [SPEC-07](SPEC-07_the-connection-ahead.md) the whole page |
| PG-04 | **Ways out** | Not a page of its own since 2026-11-21 (Marco): the ways out are the alternatives on the Run page (PG-02) of the leg that broke | The broken trip on Today; a message that the trip is broken; Run, when its run is cancelled | [SPEC-05](SPEC-05_ways-out-when-the-trip-breaks.md) the whole page; [SPEC-06](SPEC-06_those-waiting-are-told.md) the message ready to send to a contact |
| PG-05 | **Ways** | Every way door to door for a day and time, side by side | The navigation; the search on Today when nothing is set up | [SPEC-08](SPEC-08_every-way-door-to-door.md) the whole page; [SPEC-15](SPEC-15_the-route-stays-with-the-driver.md) the car way leads to the drive page |
| PG-06 | **Way detail** | One way, leg by leg, at the length each really takes, with its stations and its ticket | A way on Ways; the usual trip on Today | [SPEC-09](SPEC-09_times-that-can-be-kept.md) the legs and connections at their real length, and their tightness; [SPEC-10](SPEC-10_tickets-that-work-when-needed.md) buying the way as one journey; [SPEC-13](SPEC-13_the-station-ahead.md) the state of its stations, as lines leading to the station page |
| PG-07 | **Tickets** | The tickets held: show, move, enter one bought elsewhere; which fare fits the days travelled | The navigation; a ticket on Ways out or Way detail | [SPEC-10](SPEC-10_tickets-that-work-when-needed.md) the tickets, first; [SPEC-11](SPEC-11_the-fare-that-fits-the-days.md) the fare that fits the days, below the tickets; [SPEC-12](SPEC-12_compensation-from-the-trip.md) a link to the claims of past trips |
| PG-08 | **Claims** | The past trips with a delay, what may be owed, and the claim prepared from the trip | Tickets; a message after a delayed trip | [SPEC-12](SPEC-12_compensation-from-the-trip.md) the whole page |
| PG-09 | **Station** | The state of a station at the hour the commuter will be there: parking, bike places, staff, light, lifts | A station line on Today or Way detail; a message about a facility | [SPEC-13](SPEC-13_the-station-ahead.md) the whole page |
| PG-10 | **Stop** | The stops still to come and when the commuter will be told of theirs | Today while the trip is under way; the stop message | [SPEC-14](SPEC-14_stop-approaching.md) the whole page |
| PG-11 | **Drive** | The route the driver chose, a faster one proposed, and the tolls the route needs | Today on a car leg; the car way on Ways; the spoken question | [SPEC-15](SPEC-15_the-route-stays-with-the-driver.md) the whole page |
| PG-12 | **Sessions** | A parking session or a shared ride still running, and where a shared vehicle can be returned | Today; the reminder message | [SPEC-16](SPEC-16_sessions-still-running.md) the whole page |
| PG-13 | **Alerts** | What the commuter is told about the usual trip and when; the alerts sent; works and strikes announced | The navigation; an alert message | [SPEC-03](SPEC-03_alerts-on-the-usual-trip.md) the whole page |
| PG-14 | **Contacts** | Not a page since 2026-11-22 (Marco): the trip is shared from the phone's share sheet with "Share updates" on Today and on every leg of Run | — | [SPEC-06](SPEC-06_those-waiting-are-told.md) |
| PG-15 | **Set-up** | The initial set-up, step by step, and later where each element is changed or deleted: doors, usual trip, days, own rules, needs, channels, position | Today at the first opening; the navigation; every "Set it up" link | [SPEC-01](SPEC-01_foundation.md) the whole page (Initial set-up); [SPEC-08](SPEC-08_every-way-door-to-door.md) a way saved as usual arrives here |
| PG-16 | **Trips** | The commuter's trips door to door, as a free list, and the one followed today | The navigation; the invitation to set up the first trip | [SPEC-17](SPEC-17_trips.md) the whole page |
| PG-17 | **Alternative** | One way to replace a leg that is late or cancelled: its details, a sketch of its route, the trip as it would become, and the choice to take it | An alternative on Run | [SPEC-02](SPEC-02_real-state-of-the-run.md) the whole page |

- **Pages, not layout:** the order above is the order of importance; where each part sits on the page is left to the design, except that on Today the trip of the day comes first, with nothing in front of it (F-11, F-24).

## Start page

What the product opens on, designed as a flow: page **Today** (PG-01) of the information architecture. Stories: F-11 ("open on my usual trip … without searching"), F-24 ("shown at once, with nothing in front of it"), F-03. Used by: SPEC-04, and every specification it leads to.

- **At the first opening, nothing set up** (scenario `none`): one line saying what the product does, and two ways on: "Set up your first trip" (`<first-trip-cta>`), which opens the initial set-up at its first step, and, above it, the search of the Ways page ([SPEC-08](SPEC-08_every-way-door-to-door.md)) under "Plan a trip": two addresses typed with suggestions, a day, leave after or arrive by; "Search" opens the Ways page with the ways found, without any set-up (Marco, 2026-11-22). Nothing else is asked first.
- **Once the set-up is done:** the trip of the day comes first, with nothing in front of it: on a travel day, the usual trip with its state, platforms and change ([SPEC-04](SPEC-04_todays-trip-at-a-glance.md)); on a day that is not a travel day, the next travel day and its trip. No advertising, no message in front of it; the news that a run is late or cancelled sits on its own leg, not above the trip, and leads to that leg (Marco, 2026-11-21); the messages themselves are on the lock screen.
- **From the start page:** each run of the trip opens its real state ([SPEC-02](SPEC-02_real-state-of-the-run.md)); the change opens the connection ahead ([SPEC-07](SPEC-07_the-connection-ahead.md)); a broken trip opens the ways out ([SPEC-05](SPEC-05_ways-out-when-the-trip-breaks.md)); a short navigation leads to the ways door to door ([SPEC-08](SPEC-08_every-way-door-to-door.md)), the tickets ([SPEC-10](SPEC-10_tickets-that-work-when-needed.md)), the alerts ([SPEC-03](SPEC-03_alerts-on-the-usual-trip.md)), the contacts ([SPEC-06](SPEC-06_those-waiting-are-told.md)) and the set-up.
- **When something it needs is missing, late or wrong:** a missing element shows `<missing-setup>` in place of the part it affects, and the rest of the page still works; a late fact shows its age and "no news since"; a fact contradicted by another shows both, with their sources (Rules that hold everywhere).
- **Open:** what the start page shows when the commuter opens it at a stop from which no usual trip starts ([OQ-09](01_Open_Questions/OQ-09_first-view-with-no-usual-trip.md)).

## Initial set-up

Page **Set-up** (PG-15). How the commuter tells the product, once, what the other behaviours rely on: their doors, their usual trip and its days, their own rules for changes, their needs on the way, the channels on which they want news, and whether their position may be used. Designed as a flow, in `<setup-flow>`.

The stories it serves, copied as written:

| Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- |
| [F-07](../02_Analysis/03_User_Stories/US-F-07_trips-planned-commuter-s.md) | a German rail regular (desk persona) | As a German rail regular (desk persona), logging every trip and his connections, when the planner offers a change shorter than his own rule, I want the trip planned with my own minimum change time, margin, number of changes and own leg, and to see how tight each connection is, so that he relies only on connections he counts as real and not on "connections on paper". | Entering the own rules (minimum change time, also per station, margin, number of changes, own leg); planning with them and showing tightness is in SPEC-09 |
| [F-11](../02_Analysis/03_User_Stories/US-F-11_usual-trip-glance.md) | a Dutch rail commuter (desk persona) | As a Dutch rail commuter (desk persona), on the way out of the door in the morning, I want the app to open on my usual trip with its state and its platforms, the change included, without searching, so that I know which platform to go to with no extra step. | Entering the usual trip that the app opens on; the view itself is in SPEC-04 |
| [F-03](../02_Analysis/03_User_Stories/US-F-03_early-warning-usual-trip.md) | the single-line commuter | As the single-line commuter, during the seven minutes he drives to the station on one of his three office days, I want to be told, only when something changes, of a delay, cancellation, strike or works on my usual train, in time to change the decision to leave, so that he can wait in the warm car if the train is late. | Entering the usual trip and the days of travel the alerts are about; the alerts are in SPEC-03 |

**Why here:** all three stories rest on something the commuter tells the product once; every other specification only uses it.

References:

| | |
| --- | --- |
| **Features** | [F-07](../02_Analysis/02_Features/F-07_trips-planned-commuter-s.md), [F-11](../02_Analysis/02_Features/F-11_usual-trip-glance.md), [F-03](../02_Analysis/02_Features/F-03_early-warning-usual-trip.md) |
| **Touchpoints** | [TP-018](../02_Analysis/01_Touchpoints/TP-018_choosing-earlier-service-needed.md), [TP-023](../02_Analysis/01_Touchpoints/TP-023_planner-proposes-change-too.md), [TP-024](../02_Analysis/01_Touchpoints/TP-024_applying-personal-minimum-time.md), [TP-025](../02_Analysis/01_Touchpoints/TP-025_keeping-one-leg-under.md), [TP-073](../02_Analysis/01_Touchpoints/TP-073_using-time-board-work.md), [TP-012](../02_Analysis/01_Touchpoints/TP-012_deciding-means-before-opening.md), [TP-027](../02_Analysis/01_Touchpoints/TP-027_opening-saved-usual-trip.md), [TP-062](../02_Analysis/01_Touchpoints/TP-062_finding-next-platform-change.md), [TP-031](../02_Analysis/01_Touchpoints/TP-031_checking-train-only-days.md), [TP-032](../02_Analysis/01_Touchpoints/TP-032_receiving-alert-usual-train.md), [TP-033](../02_Analysis/01_Touchpoints/TP-033_alerts-set-usual-train.md), [TP-034](../02_Analysis/01_Touchpoints/TP-034_turning-off-ignoring-operator.md), [TP-035](../02_Analysis/01_Touchpoints/TP-035_using-alerts-usual-trip.md), [TP-037](../02_Analysis/01_Touchpoints/TP-037_opening-operator-s-app.md), [TP-039](../02_Analysis/01_Touchpoints/TP-039_news-line-fault-relative.md), [TP-040](../02_Analysis/01_Touchpoints/TP-040_learning-strike-works-days.md), [TP-087](../02_Analysis/01_Touchpoints/TP-087_finding-about-cancellation-station.md), [TP-089](../02_Analysis/01_Touchpoints/TP-089_delay-cancellation-information-comes.md) |
| **Problem questions** | [HMW-10](../03_Ideation/01_How_Might_We/HMW-10_help-german-rail-regular-planner.md), [HMW-14](../03_Ideation/01_How_Might_We/HMW-14_let-dutch-rail-commuter-way.md), [HMW-05](../03_Ideation/01_How_Might_We/HMW-05_let-single-line-commuter-during.md) |
| **Concepts** | [C10-01](../03_Ideation/02_Ideas/C10-01_own-rule-remembered.md), [C10-02](../03_Ideation/02_Ideas/C10-02_rule-station.md), [C10-03](../03_Ideation/02_Ideas/C10-03_tightness-stated.md), [C10-04](../03_Ideation/02_Ideas/C10-04_track-record.md), [C10-05](../03_Ideation/02_Ideas/C10-05_regulars-rate.md), [C10-06](../03_Ideation/02_Ideas/C10-06_rules-shared.md), [C10-07](../03_Ideation/02_Ideas/C10-07_paper-connection-label.md), [C10-08](../03_Ideation/02_Ideas/C10-08_one-margin.md), [C10-09](../03_Ideation/02_Ideas/C10-09_honest-minimum-times.md), [C10-10](../03_Ideation/02_Ideas/C10-10_wider-gaps-timetable.md), [C10-11](../03_Ideation/02_Ideas/C10-11_rights-short-connections.md), [C10-12](../03_Ideation/02_Ideas/C10-12_missed-connection-cover.md), [C14-01](../03_Ideation/02_Ideas/C14-01_platform-door.md), [C14-02](../03_Ideation/02_Ideas/C14-02_wrist.md), [C14-03](../03_Ideation/02_Ideas/C14-03_hall-display.md), [C14-04](../03_Ideation/02_Ideas/C14-04_usual-trip-remembered.md), [C14-05](../03_Ideation/02_Ideas/C14-05_only-one-fact.md), [C14-06](../03_Ideation/02_Ideas/C14-06_only-different.md), [C14-07](../03_Ideation/02_Ideas/C14-07_fixed-platform.md), [C14-08](../03_Ideation/02_Ideas/C14-08_readable-station.md), [C14-09](../03_Ideation/02_Ideas/C14-09_greeter-entrance.md), [C14-10](../03_Ideation/02_Ideas/C14-10_commuter-circle.md), [C14-11](../03_Ideation/02_Ideas/C14-11_confirmed-those-there.md), [C14-12](../03_Ideation/02_Ideas/C14-12_final.md), [S01](../03_Ideation/02_Ideas/S01_delays-sent-chosen-channel.md), [C05-01](../03_Ideation/02_Ideas/C05-01_told-wheel.md), [C05-02](../03_Ideation/02_Ideas/C05-02_line-state-waking.md), [C05-03](../03_Ideation/02_Ideas/C05-03_quiet-unless-changed.md), [C05-04](../03_Ideation/02_Ideas/C05-04_go-wait-word.md), [C05-05](../03_Ideation/02_Ideas/C05-05_own-timings.md), [C05-06](../03_Ideation/02_Ideas/C05-06_usual-train-named-once.md), [C05-07](../03_Ideation/02_Ideas/C05-07_works-strikes-good-time.md), [C05-08](../03_Ideation/02_Ideas/C05-08_others-line.md), [C05-09](../03_Ideation/02_Ideas/C05-09_first-platform.md), [C05-10](../03_Ideation/02_Ideas/C05-10_car-park-sign.md), [C05-11](../03_Ideation/02_Ideas/C05-11_duty-warn-before-departure.md), [C05-12](../03_Ideation/02_Ideas/C05-12_home-office-bad-morning.md) |
| **Families** | [FAM-01](../03_Ideation/02_Ideas/FAM-01_told-where-they.md) Told where they are, [FAM-03](../03_Ideation/02_Ideas/FAM-03_travellers-report.md) Travellers report, [FAM-04](../03_Ideation/02_Ideas/FAM-04_source-made-visible.md) The source made visible, [FAM-05](../03_Ideation/02_Ideas/FAM-05_honest-uncertainty.md) Honest uncertainty, [FAM-06](../03_Ideation/02_Ideas/FAM-06_times-allow-reality.md) Times that allow for reality, [FAM-07](../03_Ideation/02_Ideas/FAM-07_told-sooner.md) Told sooner, [FAM-08](../03_Ideation/02_Ideas/FAM-08_one-answer-data.md) One answer, not data, [FAM-09](../03_Ideation/02_Ideas/FAM-09_less-way.md) Less in the way, [FAM-10](../03_Ideation/02_Ideas/FAM-10_lies-ahead-known-beforehand.md) What lies ahead, known beforehand, [FAM-11](../03_Ideation/02_Ideas/FAM-11_place-shows.md) The place shows it, [FAM-12](../03_Ideation/02_Ideas/FAM-12_person-spot.md) A person on the spot, [FAM-15](../03_Ideation/02_Ideas/FAM-15_knows-traveller.md) It knows the traveller, [FAM-22](../03_Ideation/02_Ideas/FAM-22_money-covers-failure.md) Money covers the failure, [FAM-24](../03_Ideation/02_Ideas/FAM-24_more-different-service.md) More or different service, [FAM-25](../03_Ideation/02_Ideas/FAM-25_rules-rights.md) Rules and rights, [FAM-27](../03_Ideation/02_Ideas/FAM-27_change-trip-habit.md) Change the trip or the habit |
| **Stages covered** | planning, before departure, main leg, transfer, disruption |
| **Marks** | FAM-01 3 · 1 · 3; FAM-03 2 · 2 · 3; FAM-04 2 · 1 · 3; FAM-05 2 · 1 · 3; FAM-06 2 · 1 · 3; FAM-07 2 · 1 · 2; FAM-08 3 · 1 · 3; FAM-09 2 · 1 · 3; FAM-10 3 · 1 · 3; FAM-11 2 · 1 · 3; FAM-12 2 · 1 · 3; FAM-15 2 · 3 · 2; FAM-22 1 · 1 · 1; FAM-24 2 · 1 · 1; FAM-25 2 · 1 · 1; FAM-27 1 · 1 · 0 (valuable · feasible · relevant, by family, from [04_Ideas_prioritization.md](../03_Ideation/02_Ideas/04_Ideas_prioritization.md)) |

Concepts and families are references only: the flow comes from the stories.

- **The steps, in order,** each on its own page of the flow, each with what it shows and asks:
  1. **Doors, the favourite addresses:** at least home and one destination, each with a name and an address, typed with suggestions as in the search of the Ways page; as many as the commuter wants. They are suggested first, marked as favourites, wherever an address is typed ([SPEC-08](SPEC-08_every-way-door-to-door.md)). Marco, 2026-11-22.
  2. **First trip:** between two doors, the legs and the runs usually taken, chosen from the schedule; or one of the ways found by [SPEC-08](SPEC-08_every-way-door-to-door.md), saved as a trip. More trips are added later from Trips ([SPEC-17](SPEC-17_trips.md)), as a free list with no days of their own; the commuter chooses the one to follow today.
  3. **Days of travel** of the usual trip; they can differ week by week (F-12: office days that fell to one a week).
  4. **Own rules:** minimum change time (one default, and optionally one per station), margin, maximum number of changes, and an own leg the commuter always makes (for example a lift or a bicycle).
  5. **Needs on the way** that change how a trip can be made, such as step-free access (F-20).
  6. **Channels** on which news may reach the commuter when the product is closed.
  7. **Position:** whether the commuter's position may be used.
- **What can be skipped:** every step. A skipped element is missing, not assumed, and the behaviours that need it show `<missing-setup>`:

| Element | Without it |
| --- | --- |
| Doors | No trip door to door: [SPEC-04](SPEC-04_todays-trip-at-a-glance.md), [SPEC-08](SPEC-08_every-way-door-to-door.md) ask for them |
| Usual trip | Nothing to open on, watch or alert about: [SPEC-02](SPEC-02_real-state-of-the-run.md), [SPEC-03](SPEC-03_alerts-on-the-usual-trip.md), [SPEC-04](SPEC-04_todays-trip-at-a-glance.md), [SPEC-11](SPEC-11_the-fare-that-fits-the-days.md), [SPEC-13](SPEC-13_the-station-ahead.md) |
| Days of travel | No travel days: [SPEC-03](SPEC-03_alerts-on-the-usual-trip.md), [SPEC-04](SPEC-04_todays-trip-at-a-glance.md), [SPEC-11](SPEC-11_the-fare-that-fits-the-days.md) |
| Own rules | The defaults of the schedule are used and said so: [SPEC-07](SPEC-07_the-connection-ahead.md), [SPEC-09](SPEC-09_times-that-can-be-kept.md) |
| Needs | No need is assumed: [SPEC-05](SPEC-05_ways-out-when-the-trip-breaks.md), [SPEC-08](SPEC-08_every-way-door-to-door.md), [SPEC-13](SPEC-13_the-station-ahead.md) |
| Channels | Nothing is sent outside the product, and the commuter is told so inside it: [SPEC-02](SPEC-02_real-state-of-the-run.md), [SPEC-03](SPEC-03_alerts-on-the-usual-trip.md), [SPEC-05](SPEC-05_ways-out-when-the-trip-breaks.md), [SPEC-06](SPEC-06_those-waiting-are-told.md), [SPEC-07](SPEC-07_the-connection-ahead.md), [SPEC-14](SPEC-14_stop-approaching.md), [SPEC-16](SPEC-16_sessions-still-running.md) |
| Position | Everything that does not need it still works; what needs it says so: [SPEC-14](SPEC-14_stop-approaching.md), [SPEC-16](SPEC-16_sessions-still-running.md) |

- **Defaults:** no channel and position off; the commuter turns them on. The minimum change time starts empty; until it is set, the time of the schedule is used and said so.
- **How it ends:** "Done" leads to the start page, which opens on the trip of the day. Leaving halfway keeps what was entered; the rest stays missing.
- **Changed or deleted later:** every element, at any time, from the set-up reached through the navigation of the start page, or from the `<missing-setup>` link of the behaviour that needs it. A change applies from the next trip it touches; a deleted usual trip is no longer used by any behaviour.
- **When things go wrong:** a run of the usual trip no longer in the schedule: the commuter is told and asked to choose another; the usual trip is kept until then, marked.
- **Data:** what is set up is held in `profile`. The prototype starts from the mock profile of the Verona–Milan commuter: home in Verona, an apartment in Milan, an office in Milan, a client in Brescia (the places of the doors are entered in the set-up); three trips (Home to Milan apartment, followed today: car to Verona Porta Nuova, high-speed train 9707 to Milano Centrale, underground M2 from Milano Centrale FS to Loreto, on foot to the apartment; Office to home; Home to the client in Brescia), on Tuesdays and Wednesdays, a minimum change time of 8 minutes (10 at Milano Centrale), a margin of 10 minutes, at most 2 changes, notifications on the phone, position off. With scenario `none`, the set-up is empty.
- **Provides:** doors, usual trip, days of travel, own rules, needs, channels and consent to use position, to the specifications named in the table above.
- **Open:** whether the product may suggest a usual trip from trips the commuter repeats ([OQ-04](01_Open_Questions/OQ-04_suggesting-the-usual-trip.md)). Decided: the commuter keeps more than one trip, as a free list in Trips ([OQ-05](01_Open_Questions/OQ-05_more-than-one-usual-trip.md), [SPEC-17](SPEC-17_trips.md)).

## Acceptance criteria

- **Given** a delay shown to the commuter **when** they look at it **then** they see who gave it, how old it is and whether it is confirmed, estimated or reported.
- **Given** two sources giving different times for one run **when** the commuter looks at it **then** both are shown with their sources.
- **Given** no source has said anything about a run **when** the commuter looks at it **then** the product says there is no news and since when, and does not show the planned time as the real one.
- **Given** a day that is not a travel day **when** something changes on the usual trip **then** no message is sent.
- **Given** the commuter has not allowed the use of their position **when** they use any specification **then** their position is not used, and everything that does not need it still works.
- **Given** a change the product proposes to a route, ticket or trip **when** the commuter does not answer **then** nothing changes.
- **Given** a behaviour that needs the usual trip **when** no usual trip is entered **then** the product says so and leads to where it is set up.

- **Given** the first opening, with nothing set up **when** the product opens **then** it offers to plan a trip with the search of the Ways page or to set up the first trip, and asks nothing else first.
- **Given** a commuter who finished the set-up **when** they open the product on a travel day **then** the start page shows the usual trip with its state, platforms and change, with nothing in front of it.
- **Given** a commuter who saved home, office and a usual trip **when** they open the product **then** the usual trip is shown without searching.
- **Given** a commuter who set a minimum change time of 8 minutes at one station **when** a trip changes at that station **then** SPEC-09 uses 8 minutes there and the default elsewhere.
- **Given** a commuter who skipped the channels **when** a behaviour needs to send a message **then** nothing is sent and the commuter is told, inside the product, that no channel is set.
- **Given** a commuter who deletes the usual trip **when** they open the product **then** no behaviour uses the deleted trip.
- **Given** any page of the prototype **when** the scenario is changed **then** the page shows the data of that scenario, and the next page opened keeps it.

## Open questions

Each question has its own file in [01_Open_Questions/](01_Open_Questions/00_Open_questions_index.md), with its chain to the research.

- **[OQ-01](01_Open_Questions/OQ-01_sources-of-the-real-position.md)** Which sources tell the real position and the expected time of a vehicle (the operator, the position of travellers on board, what travellers report), and which one leads when they disagree? [not traced] Research: partly.
- **[OQ-02](01_Open_Questions/OQ-02_age-limit-of-a-fact.md)** After how long without news is a fact (a time, a state, a position) marked outdated, and a run marked `no news`? [not traced] Research: ⚠ not supported.
- **[OQ-03](01_Open_Questions/OQ-03_reaching-the-commuter-without-looking.md)** How does a message reach a commuter who cannot look at a screen, for example while driving to the station or on a rerouted drive? [technology choice open] Research: ⚠ not supported.
- **[OQ-37](01_Open_Questions/OQ-37_legs-moving-on-without-position.md)** Without consent to use the commuter's position, how does a leg move from to do to in progress to completed: by the times of the plan, by the commuter marking it, or not at all? [not traced] Research: ⚠ not supported.
- **[OQ-04](01_Open_Questions/OQ-04_suggesting-the-usual-trip.md)** May the product suggest a usual trip from trips the commuter repeats, for them to confirm, or does the commuter always enter it? [not traced] Research: ⚠ not supported.
- **[OQ-09](01_Open_Questions/OQ-09_first-view-with-no-usual-trip.md)** What does the start page show when the commuter opens the product at a stop or station from which no usual trip starts? [not traced] Research: ⚠ not supported.

## Connections

- [SPEC-00_overview.md](SPEC-00_overview.md): the overview that maps every specification to its stories.
- [SPEC-02_real-state-of-the-run.md](SPEC-02_real-state-of-the-run.md): stands on this foundation.
- [SPEC-03_alerts-on-the-usual-trip.md](SPEC-03_alerts-on-the-usual-trip.md): stands on this foundation.
- [SPEC-04_todays-trip-at-a-glance.md](SPEC-04_todays-trip-at-a-glance.md): stands on this foundation.
- [SPEC-05_ways-out-when-the-trip-breaks.md](SPEC-05_ways-out-when-the-trip-breaks.md): stands on this foundation.
- [SPEC-06_those-waiting-are-told.md](SPEC-06_those-waiting-are-told.md): stands on this foundation.
- [SPEC-07_the-connection-ahead.md](SPEC-07_the-connection-ahead.md): stands on this foundation.
- [SPEC-08_every-way-door-to-door.md](SPEC-08_every-way-door-to-door.md): stands on this foundation.
- [SPEC-09_times-that-can-be-kept.md](SPEC-09_times-that-can-be-kept.md): stands on this foundation.
- [SPEC-10_tickets-that-work-when-needed.md](SPEC-10_tickets-that-work-when-needed.md): stands on this foundation.
- [SPEC-11_the-fare-that-fits-the-days.md](SPEC-11_the-fare-that-fits-the-days.md): stands on this foundation.
- [SPEC-12_compensation-from-the-trip.md](SPEC-12_compensation-from-the-trip.md): stands on this foundation.
- [SPEC-13_the-station-ahead.md](SPEC-13_the-station-ahead.md): stands on this foundation.
- [SPEC-14_stop-approaching.md](SPEC-14_stop-approaching.md): stands on this foundation.
- [SPEC-15_the-route-stays-with-the-driver.md](SPEC-15_the-route-stays-with-the-driver.md): stands on this foundation.
- [SPEC-16_sessions-still-running.md](SPEC-16_sessions-still-running.md): stands on this foundation.
- [SPEC-17_trips.md](SPEC-17_trips.md): stands on this foundation.
- [OQ-01_sources-of-the-real-position.md](01_Open_Questions/OQ-01_sources-of-the-real-position.md): an open question this specification raises.
- [OQ-02_age-limit-of-a-fact.md](01_Open_Questions/OQ-02_age-limit-of-a-fact.md): an open question this specification raises.
- [OQ-03_reaching-the-commuter-without-looking.md](01_Open_Questions/OQ-03_reaching-the-commuter-without-looking.md): an open question this specification raises.
- [US-F-07_trips-planned-commuter-s.md](../02_Analysis/03_User_Stories/US-F-07_trips-planned-commuter-s.md): a story the initial set-up serves.
- [US-F-11_usual-trip-glance.md](../02_Analysis/03_User_Stories/US-F-11_usual-trip-glance.md): a story the initial set-up serves.
- [US-F-03_early-warning-usual-trip.md](../02_Analysis/03_User_Stories/US-F-03_early-warning-usual-trip.md): a story the initial set-up serves.
- [F-07_trips-planned-commuter-s.md](../02_Analysis/02_Features/F-07_trips-planned-commuter-s.md): the feature behind story F-07.
- [F-11_usual-trip-glance.md](../02_Analysis/02_Features/F-11_usual-trip-glance.md): the feature behind story F-11.
- [F-03_early-warning-usual-trip.md](../02_Analysis/02_Features/F-03_early-warning-usual-trip.md): the feature behind story F-03.
- [HMW-10_help-german-rail-regular-planner.md](../03_Ideation/01_How_Might_We/HMW-10_help-german-rail-regular-planner.md): the problem question written from a story it serves.
- [HMW-14_let-dutch-rail-commuter-way.md](../03_Ideation/01_How_Might_We/HMW-14_let-dutch-rail-commuter-way.md): the problem question written from a story it serves.
- [HMW-05_let-single-line-commuter-during.md](../03_Ideation/01_How_Might_We/HMW-05_let-single-line-commuter-during.md): the problem question written from a story it serves.
- [OQ-04_suggesting-the-usual-trip.md](01_Open_Questions/OQ-04_suggesting-the-usual-trip.md): an open question the initial set-up raises.
- [OQ-05_more-than-one-usual-trip.md](01_Open_Questions/OQ-05_more-than-one-usual-trip.md): an open question the initial set-up raises.
- [OQ-09_first-view-with-no-usual-trip.md](01_Open_Questions/OQ-09_first-view-with-no-usual-trip.md): an open question the start page raises.
- [OQ-37_legs-moving-on-without-position.md](01_Open_Questions/OQ-37_legs-moving-on-without-position.md): an open question about the states of the legs.
