---
source: Claude
date: 2026-11-16 23:04
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, planning, information, disruption, usual-trip, late-info]
related: [SPEC-02_the-commuters-set-up.md, SPEC-03_real-state-of-the-run.md, SPEC-04_alerts-on-the-usual-trip.md, SPEC-05_todays-trip-at-a-glance.md, SPEC-06_ways-out-when-the-trip-breaks.md, SPEC-07_those-waiting-are-told.md, SPEC-08_the-connection-ahead.md, SPEC-09_every-way-door-to-door.md, SPEC-10_times-that-can-be-kept.md, SPEC-11_tickets-that-work-when-needed.md, SPEC-12_the-fare-that-fits-the-days.md, SPEC-13_compensation-from-the-trip.md, SPEC-14_the-station-ahead.md, SPEC-15_stop-approaching.md, SPEC-16_the-route-stays-with-the-driver.md, SPEC-17_sessions-still-running.md, SPEC-00_overview.md, OQ-01_sources-of-the-real-position.md, OQ-02_age-limit-of-a-fact.md, OQ-03_reaching-the-commuter-without-looking.md]
---

# SPEC-01: Foundation

Use this file as a prompt: it lays the ground that every other specification stands on, independent of any technology. Build it first.

## Purpose

The product helps a person who commutes, often between cities and on more than one means, to plan the door to door trip, to know how it really stands while it goes on, and to act when it breaks, and it tells the people who wait for them. It works from what the commuter tells it once (their doors, usual trip, own rules, days and needs), shows each fact with where it comes from, speaks first only when something changes, and never changes a plan without the commuter's yes.

- **Stories:** all 24 (F-01 to F-24). **Used by:** every specification.

## Principles

1. **The real state before the timetable.** What is shown is where a vehicle really is and when it will really leave and arrive, not only what was planned. Stories: F-01 ("where the train really is, when it will really leave"), F-06, F-09 ("the live arrival"), F-13 ("the time he is promised is the time that is kept"). Used by: SPEC-03, SPEC-05, SPEC-07, SPEC-08, SPEC-10.
2. **Every fact shows where it comes from.** Who said it, when, and whether it is confirmed or estimated. Stories: F-01 ("which source says so"), F-09 ("a confirmation of any delay"). Used by: SPEC-03, SPEC-06, SPEC-07, SPEC-08, SPEC-14.
3. **Quiet unless something changes; the information first.** The product speaks first only when something that matters to the commuter's trip has changed; when they open it, the information they need comes first, with nothing in front of it. Stories: F-03 ("only when something changes"), F-11 ("with no extra step"), F-24 ("with nothing in front of it"). Used by: SPEC-04, SPEC-05, SPEC-15, SPEC-17.
4. **The decision stays with the person.** Nothing in a trip, route or ticket is changed without the commuter's explicit yes. Stories: F-14a ("asked before the route is changed"), F-19 ("so that she can choose"). Used by: SPEC-06, SPEC-11, SPEC-16.
5. **Said once, used everywhere.** The doors, the usual trip, the days of travel, the commuter's own rules and needs are entered once, in SPEC-02, and every specification uses them. Stories: F-07 ("my own minimum change time"), F-11 ("without searching"), F-03 ("my usual train"). Used by: every specification.

## The user

- **The commuter:** the person making the trip. Personas from the interviews: the Verona–Milan commuter, the Como commuter, the single-line commuter, the outskirts hybrid worker. Desk personas: a teenager, a London traveller, a German rail regular, a Dutch rail commuter, an Italian driver, a woman driving to the station, a British traveller, a daily traveller in a British city, a wheelchair user, a shared-bike rider in South Korea, a young commuter in Madrid, an Italian bus user.
- **A contact:** a person the commuter chooses to keep informed about a trip, such as whoever drives to fetch them. Stories: F-09, F-06, F-02. Set up in SPEC-07.
- **What the commuter tells the product,** and can change or delete at any time: doors, usual trip, days of travel, own rules, needs, channels and whether their position may be used (SPEC-02); contacts (SPEC-07); tickets held (SPEC-11).

- **Stories:** F-02, F-03, F-06, F-07, F-09, F-11, F-20. **Used by:** every specification.

## The things it deals with

| Thing | What it is | Parts | Where it comes from |
| --- | --- | --- | --- |
| **Door** | A place a trip starts or ends: home, office, another place | Name, position | Entered by the commuter (SPEC-02) |
| **Usual trip** | A trip the commuter makes regularly | Doors at both ends, legs, the runs usually taken, days of travel | Entered by the commuter (SPEC-02) |
| **Trip** | One journey on one day, door to door | Legs, connections, tickets used, contacts informed | The day of a usual trip, or a way the commuter chose (SPEC-05, SPEC-09) |
| **Leg** | One part of a trip on one means | Stage, means (train, bus, underground, car, bicycle, shared vehicle, walk, lift), start and end place | From the plan |
| **Run** | One departure of one service on one day | Planned times and stops, platform, operator | From the schedule |
| **Connection** | The change between two legs | Arrival of one run, departure of the next, the way between them, the margin | From the plan and the commuter's own rules |
| **Place** | A station, stop, car park or return zone | Platforms, ways through, lifts, lights, staff hours, parking and bike places, cost | From operators, third parties and other travellers |
| **Fact** | One piece of information about a run or a place | Content, source, time, confirmed or estimated, reason when known | See "Sources of information" |
| **Way** | One way of completing a trip from a given place and time | Legs, departure, arrival, cost, ticket validity | Built by the product (SPEC-09) |
| **Ticket** | A right to travel | Runs, days or period covered, conditions for moving it, seller | Bought in the product or entered by the commuter (SPEC-11) |

- **Stages of a trip,** as the touchpoints define them: planning, before departure, first mile, main leg, transfer, last mile, disruption.
- **Stories:** all 24. **Used by:** every specification.

## States

- **Run:** `planned` → `on time` or `late (minutes)` → `departed` → `arrived`; from any state before arrival → `cancelled`; `no news` when no source has said anything for longer than the age limit [not traced: the limit]. A run becomes `cancelled` only on a fact that says so; a growing delay alone never makes it `cancelled` (F-01).
- **Connection:** `holds` → `at risk` → `lost`, moved by the expected arrival of the incoming run against the commuter's minimum change time (F-06, F-07).
- **Trip:** `planned` → `today` → `under way` → `completed`; from `today` or `under way` → `broken` (a run cancelled, a connection lost, a vehicle that does not come) → back to `under way` on another way, or `abandoned` (F-02, F-06).
- **Fact:** `confirmed`, `estimated` or `reported`; `outdated` past the age limit.

- **Stories:** F-01, F-02, F-06, F-07. **Used by:** SPEC-03, SPEC-05, SPEC-06, SPEC-07, SPEC-08.

## Sources of information

| Source | What it can tell | How far it is trusted |
| --- | --- | --- |
| **Schedule** | Planned runs, times, platforms; works and strikes once announced | What was promised, not what happens |
| **Operator, live** | Position, delay, reason, cancellation, platform, state of lifts and facilities | Confirmed when stated as final |
| **Other travellers** | What they see on the spot | Reported: shown as such, with how many and how recent |
| **Third parties** | Parking places and prices, fares, tolls, return zones, traffic | As stated by them |
| **The commuter** | Their doors, trips, rules, needs, contacts, tickets | Taken as given |
| **Record of past runs** | How late a run usually is | Estimated (SPEC-03 keeps it) |

- **When two sources disagree,** both are shown, each with its source and age.
- **Which sources the product uses** to know the real position of a vehicle (the operator, the position of travellers on board, what travellers report) is open: the stories ask to see the source, not which one [not traced].
- **Stories:** F-01, F-13, F-15, F-19, F-20. **Used by:** SPEC-03, SPEC-06, SPEC-10, SPEC-14.

## Channels

- **Inside the product,** when the commuter opens it.
- **A message** on the channel the commuter chose in SPEC-02, for news that must reach them when the product is closed (F-03, F-06, F-23, F-18).
- **Heard rather than read,** while the commuter drives (F-03: "during the seven minutes he drives") [technology choice open].
- **A message to a contact,** on the channel the contact accepted, saying on whose behalf it is sent (F-09; SPEC-07).

**When the product stays quiet:** outside the days of travel; when nothing has changed since the last message; when a change does not touch a run, connection or place of the commuter's trip.

- **Stories:** F-03, F-06, F-09, F-18, F-23. **Used by:** SPEC-04, SPEC-07, SPEC-08, SPEC-15, SPEC-17.

## Rules that hold everywhere

- **No data:** the product says that there is no news and since when. It never shows the planned time as if it were the real one.
- **Late data:** every fact shows its age; past the age limit it is marked `outdated` [not traced: the limit].
- **Wrong data:** when a later fact contradicts an earlier one, the earlier one is replaced, and a commuter who was told the earlier one is told what changed.
- **The commuter does not respond:** nothing is done on their behalf. A question stays open until its moment passes; then the trip stays as it was.
- **Nothing set up yet:** a behaviour that needs something the commuter has not entered says what is missing and leads to the specification where it is set up.
- **Consent to use position:** off until the commuter turns it on in SPEC-02; it can be turned off at any time; when off, everything that does not need the position still works.
- **Consent of contacts:** a contact receives messages only after accepting them (SPEC-07).
- **Never shared:** a contact sees only the trip they were added to, and only until it ends.

- **Stories:** F-01, F-02, F-09, F-14a. **Used by:** every specification.

## Vocabulary

| Term | Meaning |
| --- | --- |
| commuter | The person making the trip |
| contact | A person the commuter chose to keep informed about a trip |
| door | A place a trip starts or ends |
| usual trip | A trip the commuter makes regularly, entered once |
| trip | One journey on one day, door to door |
| leg | One part of a trip on one means; its stage is first mile, main leg, transfer or last mile |
| run | One departure of one service on one day |
| connection | The change between two legs, with its margin |
| way | One way of completing a trip from a given place and time |
| fact | One piece of information, with its source, time and status |
| own rules | The limits the commuter sets: minimum change time, margin, number of changes, own leg |
| travel day | A day on which the commuter makes their usual trip |

## Acceptance criteria

- **Given** a delay shown to the commuter **when** they look at it **then** they see who gave it, how old it is and whether it is confirmed, estimated or reported.
- **Given** two sources giving different times for one run **when** the commuter looks at it **then** both are shown with their sources.
- **Given** no source has said anything about a run **when** the commuter looks at it **then** the product says there is no news and since when, and does not show the planned time as the real one.
- **Given** a day that is not a travel day **when** something changes on the usual trip **then** no message is sent.
- **Given** the commuter has not allowed the use of their position **when** they use any specification **then** their position is not used, and everything that does not need it still works.
- **Given** a change the product proposes to a route, ticket or trip **when** the commuter does not answer **then** nothing changes.
- **Given** a behaviour that needs the usual trip **when** no usual trip is entered **then** the product says so and leads to where it is set up.

## Open questions

Each question has its own file in [01_Open_Questions/](01_Open_Questions/00_Open_questions_index.md), with its chain to the research.

- **[OQ-01](01_Open_Questions/OQ-01_sources-of-the-real-position.md)** Which sources tell the real position and the expected time of a vehicle (the operator, the position of travellers on board, what travellers report), and which one leads when they disagree? [not traced] Research: partly.
- **[OQ-02](01_Open_Questions/OQ-02_age-limit-of-a-fact.md)** After how long without news is a fact (a time, a state, a position) marked outdated, and a run marked `no news`? [not traced] Research: ⚠ not supported.
- **[OQ-03](01_Open_Questions/OQ-03_reaching-the-commuter-without-looking.md)** How does a message reach a commuter who cannot look at a screen, for example while driving to the station or on a rerouted drive? [technology choice open] Research: ⚠ not supported.

## Connections

- [SPEC-00_overview.md](SPEC-00_overview.md): the overview that maps every specification to its stories.
- [SPEC-02_the-commuters-set-up.md](SPEC-02_the-commuters-set-up.md): stands on this foundation.
- [SPEC-03_real-state-of-the-run.md](SPEC-03_real-state-of-the-run.md): stands on this foundation.
- [SPEC-04_alerts-on-the-usual-trip.md](SPEC-04_alerts-on-the-usual-trip.md): stands on this foundation.
- [SPEC-05_todays-trip-at-a-glance.md](SPEC-05_todays-trip-at-a-glance.md): stands on this foundation.
- [SPEC-06_ways-out-when-the-trip-breaks.md](SPEC-06_ways-out-when-the-trip-breaks.md): stands on this foundation.
- [SPEC-07_those-waiting-are-told.md](SPEC-07_those-waiting-are-told.md): stands on this foundation.
- [SPEC-08_the-connection-ahead.md](SPEC-08_the-connection-ahead.md): stands on this foundation.
- [SPEC-09_every-way-door-to-door.md](SPEC-09_every-way-door-to-door.md): stands on this foundation.
- [SPEC-10_times-that-can-be-kept.md](SPEC-10_times-that-can-be-kept.md): stands on this foundation.
- [SPEC-11_tickets-that-work-when-needed.md](SPEC-11_tickets-that-work-when-needed.md): stands on this foundation.
- [SPEC-12_the-fare-that-fits-the-days.md](SPEC-12_the-fare-that-fits-the-days.md): stands on this foundation.
- [SPEC-13_compensation-from-the-trip.md](SPEC-13_compensation-from-the-trip.md): stands on this foundation.
- [SPEC-14_the-station-ahead.md](SPEC-14_the-station-ahead.md): stands on this foundation.
- [SPEC-15_stop-approaching.md](SPEC-15_stop-approaching.md): stands on this foundation.
- [SPEC-16_the-route-stays-with-the-driver.md](SPEC-16_the-route-stays-with-the-driver.md): stands on this foundation.
- [SPEC-17_sessions-still-running.md](SPEC-17_sessions-still-running.md): stands on this foundation.
- [OQ-01_sources-of-the-real-position.md](01_Open_Questions/OQ-01_sources-of-the-real-position.md): an open question this specification raises.
- [OQ-02_age-limit-of-a-fact.md](01_Open_Questions/OQ-02_age-limit-of-a-fact.md): an open question this specification raises.
- [OQ-03_reaching-the-commuter-without-looking.md](01_Open_Questions/OQ-03_reaching-the-commuter-without-looking.md): an open question this specification raises.
