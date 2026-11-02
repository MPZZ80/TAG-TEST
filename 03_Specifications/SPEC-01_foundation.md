---
source: Claude
date: 2026-11-02 23:38
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, information, disruption, planning, late-info, usual-trip, workarounds]
related: [SPEC-00_overview.md, 06_Chosen_concept.md, 04_Generated_User_Stories.md, 03_Generated_Features.md, 02_Generated_Touchpoints.md]
---

# SPEC-01: Foundation

Use this file as a prompt: it lays the ground that every other specification stands on, independent of any technology. Build it first.

## Purpose

The product tells a commuter who travels between cities, and the people who depend on them, how their door to door trip really stands, and helps them decide before they leave, while they travel and when the trip breaks. It knows their usual trip so they do not have to search for it, gives one answer to act on with the facts and sources behind it, stays quiet unless something changes, and never changes a plan without the commuter's consent.

- **Stories:** all 24, concept. **Used by:** every specification.

## Principles

1. **The real state before the timetable.** What is shown is where the vehicle really is and when it will really leave and arrive, not only what was scheduled. Stories: F-01, F-03, F-06, F-09, F-13 (concept). Used by: SPEC-02, SPEC-04, SPEC-07, SPEC-08, SPEC-10.
2. **Every fact shows its source and its age.** Who said it (operator, other travellers, measured, timetable), when, and whether it is confirmed or estimated. Stories: F-01 ("which source says so"), F-02, F-09 ("a confirmation of any delay"), F-19, F-22 ("see the answer") (concept). Used by: SPEC-02, SPEC-03, SPEC-06, SPEC-07, SPEC-08, SPEC-14.
3. **One answer to act on, with the detail one step away.** When the commuter has to decide, the product says what the facts mean for them (go or wait, holds or not, call home now, cheapest fare), and the facts stay available behind the answer. Stories: F-02, F-03, F-06, F-12, F-19 (concept). Used by: SPEC-04, SPEC-06, SPEC-08, SPEC-12.
4. **Quiet unless it changes something.** The product speaks first only when something has changed that matters to a trip the commuter makes, at the moments they chose; when they open it, the information they need comes first, with nothing in front of it. Stories: F-03 ("only when something changes"), F-11 ("no extra step"), F-24 ("nothing in front of it") (concept). Used by: SPEC-04, SPEC-05, SPEC-15, SPEC-17.
5. **The decision stays with the person.** Nothing in a trip, route, ticket or share is changed without the commuter's explicit yes. Stories: F-14a ("asked before the route is changed"), F-03 ("change the decision to leave"), F-19 ("so that she can choose") (concept). Used by: SPEC-06, SPEC-11, SPEC-16.
6. **Said once, remembered.** The usual trip, the days of travel, the commuter's own rules and the people to inform are entered once and used everywhere. Stories: F-03, F-07, F-11, F-12, F-23 (concept). Used by: SPEC-04, SPEC-05, SPEC-08, SPEC-10, SPEC-12, SPEC-15.

## The user

- **The commuter:** the person making the trip. Personas: the Verona–Milan commuter, the Como commuter, the single-line commuter, the outskirts hybrid worker (from the interviews); a teenager, a London traveller, a German rail regular, a Dutch rail commuter, an Italian driver, a woman driving to the station, a British traveller, a daily traveller in a British city, a wheelchair user, a shared-bike rider in South Korea, a young commuter in Madrid, an Italian bus user (desk personas).
- **A contact:** a person the commuter chooses to keep informed: whoever drives to fetch them, waits at home, or is meeting them. Stories: F-02, F-06, F-09 (concept).
- **What the commuter tells the product, and can change or delete at any time:**
  - their doors (home, office) and their usual trip (see "The things it deals with");
  - their days of travel, and the moments of a travel day they want news (for example on waking, on leaving, during the drive to the station);
  - their own rules: minimum change time, possibly per station, margin, number of changes, a delay threshold for a connection, a limit after which they stop waiting (F-06, F-07);
  - their preferences: seat or time first (F-19), channels (see "Channels"), needs such as step-free access (F-20);
  - their contacts and what each may receive (F-09);
  - whether they share their position, and whether they report (see "Rules that hold everywhere").
- **Stories:** F-03, F-06, F-07, F-09, F-11, F-19, F-20 (concept). **Used by:** every specification.

## The things it deals with

| Thing | What it is | Parts | Saved by the commuter or inferred |
| --- | --- | --- | --- |
| **Usual trip** | A trip the commuter makes regularly | Doors at both ends, legs, the runs they usually take, days of travel, usual times | Saved once; may be suggested from repeated trips, and confirmed by the commuter [not traced] |
| **Trip** | One journey on one day, door to door: a one-off or a day of the usual trip | Legs, connections, the tickets held, contacts informed | Saved, or created when the commuter plans or boards |
| **Leg** | One part of a trip on one mode | Stage (first mile, main leg, transfer, last mile), mode (train, bus, underground, car, bike, shared vehicle, walk, lift by a contact), start and end place | From the plan |
| **Run** | One departure of one service: a given train or bus on a given day | Scheduled times and stops, platform, operator | From the schedule |
| **Connection** | The change between two legs | Arrival of one run, departure of the next, the walk between, the margin, the commuter's own threshold | From the plan and the commuter's rules |
| **Place** | A station, stop, car park or return zone | Platforms, ways through, lifts, lights, staff hours, parking and bike places, cost | From operators and other travellers |
| **Fact** | One piece of information about a run or a place | Content, source, time, confirmed or estimated, reason when known | Gathered (see "Sources of information") |
| **Way** | One way of completing a trip from a given point | Legs, departure, arrival, cost, ticket validity, expected fullness | Built by the product |
| **Ticket** | A right to travel | Runs or period covered, conditions for moving it, seller | Bought through the product or entered by the commuter |

- **Stories:** all 24. **Used by:** every specification.

## States

**Run:** `scheduled` → `on time` or `delayed (minutes)` → `departed` → `arrived`; from any state before arrival → `cancelled`; `unknown` when no source has said anything for longer than the age limit [not traced: the limit].
- Moved by facts from any source. A run becomes `cancelled` only on a fact that says so, from any source, with its source shown; a growing delay alone never makes it `cancelled` (F-01: "aspetto solo che appaia la scritta annullato").

**Connection:** `holds` → `at risk` (the expected arrival leaves less than the commuter's threshold) → `lost`; or `asked to wait` → `will wait` or `no answer` or `will not wait`.
- Moved by the arrival of the incoming run and by answers from the connecting service (F-06, F-22).

**Trip:** `planned` → `today` (a travel day, before leaving) → `under way` → `completed`; from `today` or `under way` → `broken` (a run cancelled, a connection lost, a vehicle that does not come) → back to `under way` on a new way, or `abandoned`.
- Moved by the commuter (starts, chooses a way, ends) and by the states of its runs and connections (F-02, F-03, F-09).

**Fact:** `confirmed` (from the operator or measured) or `estimated` or `reported` (by other travellers); `outdated` past the age limit.

- **Stories:** F-01, F-02, F-03, F-06, F-09, F-22 (concept). **Used by:** SPEC-02, SPEC-04, SPEC-06, SPEC-07, SPEC-08.

## Sources of information

| Source | What it can tell | Trust |
| --- | --- | --- |
| **Schedule** | Planned runs, times, platforms, planned works and strikes once announced | What was promised, not what happens |
| **Operator, live** | Position, delay, reason, cancellation, platform changes, facilities' state | Confirmed when stated as final; often late (F-01: "un'app non ufficiale te lo possa dire prima") |
| **Measured** | Where a run really is, from the position of travellers who bought it and agreed to share, compared with where it should be (Marco's concept S02) | Confirmed when enough positions agree [not traced: how many] |
| **Other travellers** | What they see: a delay, a bus that came or not, how full it is, a lift that does not work, a place that is full (SPEC-03) | Reported: shown as such, with how many and how recent |
| **The commuter** | Their trips, rules, preferences, contacts | Taken as given |
| **Record of past trips** | How late a run usually is, how often a connection held | Estimated. From a background family (FAM-05); used only where a story asks for it (F-13, F-19) |

**When two sources disagree:** both are shown, each with its source and age, with the gap between them (C01-02, disagreement flag). The single answer of Principle 3 is not allowed to hide a disagreement. Which source leads the answer is [not traced]: the commuters' notes say which source they believed (TP-090), not which should lead.

- **Stories:** F-01, F-03, F-13, F-19, F-20 (concept). **Used by:** SPEC-02, SPEC-03, SPEC-06, SPEC-08, SPEC-10, SPEC-14.

## Channels

- **Inside the product,** when the commuter opens it.
- **A message on the channel the commuter chose,** filtered by kind of event (delay, cancellation, strike, works, platform) and by day (Marco's concept S01).
- **A voice message** while the commuter drives (C05-01).
- **Something the commuter wears or carries,** for news that must reach them without their looking (C14-02, C26-02) [technology choice open].
- **A message to a contact,** on the channel the contact accepts, saying on whose behalf it is sent (Marco's concept S04).

**When the product stays quiet:** outside the days of travel; outside the moments the commuter set; when nothing has changed since the last message; when the change does not affect a run, connection or place of the commuter's trip.

- **Stories:** F-03, F-09, F-11, F-23 (concept). **Used by:** SPEC-04, SPEC-05, SPEC-07, SPEC-08, SPEC-15, SPEC-17.

## Rules that hold everywhere

- **No data:** the product says that there is no news, since when, and when it will look again (C02-02, nothing to read yet). It never shows the scheduled time as if it were the real one.
- **Late data:** every fact shows its age; past the age limit it is marked `outdated` [not traced: the limit].
- **Wrong data:** when a later fact contradicts an earlier one, the earlier one is replaced and the commuter is told what changed if they were told the earlier one.
- **Contradicting sources:** see "Sources of information".
- **The commuter does not respond:** nothing is done on their behalf. A question stays open until its moment passes, then it closes and the trip stays as it was.
- **Consent to share position:** off until the commuter turns it on; it can be turned off at any time; when off, the commuter still receives everything that does not need their position. That travellers agree to share is not in the notes (assumption of S02 and C01-05) [not traced].
- **Consent to report:** reporting is a choice; a prompt to report can be turned off.
- **Consent of contacts:** a contact receives messages only after accepting them (assumption of S04) [not traced].
- **Never shared:** the identity of a traveller who reports or whose position is measured; a contact sees only the trip they were added to, and only until it ends.

- **Stories:** F-01, F-03, F-09, F-14a (concept). **Used by:** every specification.

## Vocabulary

| Term | Meaning |
| --- | --- |
| commuter | The person making the trip |
| contact | A person the commuter chose to keep informed about a trip |
| usual trip | A trip the commuter makes regularly, saved once |
| trip | One journey on one day, door to door |
| leg | One part of a trip on one mode; its stage is first mile, main leg, transfer or last mile |
| run | One departure of one service on one day |
| connection | The change between two legs, with its margin |
| way | One way of completing a trip from a given point |
| fact | One piece of information, with its source, time and status |
| report | A fact given by another traveller |
| threshold | A limit the commuter sets: a delay, a change time, a waiting time |
| travel day | A day on which the commuter makes their usual trip |

## Acceptance criteria

- **Given** a delay shown to the commuter **when** they look at it **then** they see who gave it, how old it is and whether it is confirmed, estimated or reported.
- **Given** two sources giving different times for one run **when** the commuter looks at it **then** both are shown, with the gap between them.
- **Given** no source has said anything about a run **when** the commuter looks at it **then** the product says there is no news and since when, and does not show the scheduled time as the real one.
- **Given** a day that is not a travel day **when** something changes on the usual trip **then** no message is sent.
- **Given** the commuter has not turned on position sharing **when** they use any specification **then** their position is not used, and everything that does not need it still works.
- **Given** a change the product proposes to a route, ticket or trip **when** the commuter does not answer **then** nothing changes.
- **Given** a contact has not accepted messages **when** the commuter shares a trip with them **then** no message reaches the contact and the commuter is told.

## Open questions

- **Which source leads the single answer** when sources disagree [not traced]. Marco to decide, or to ask in interviews.
- **The age limit** after which a fact is `outdated`, and **how many travellers' positions** make a measured delay `confirmed` [not traced].
- **Whether the product may suggest the usual trip** from repeated trips [not traced].
- **Willingness to share position and to report**, and **contacts' consent** to receive messages from the service: assumptions of S02, S03 and S04, in no note [not traced].
- **Something worn or carried** as a channel [technology choice open].
