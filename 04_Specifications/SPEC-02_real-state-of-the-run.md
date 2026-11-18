---
source: Claude
date: 2026-11-19 00:13
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, information, disruption, late-info, unreliable-service]
related: [OQ-36_the-map-of-a-route.md, OQ-35_problems-on-car-and-walking-legs.md, US-F-01_real-state-vehicle-source.md, US-F-02_ways-still-open-trip.md, F-02_ways-still-open-trip.md, HMW-03_help-teenager-waiting-late-evening.md, SPEC-17_trips.md, F-01_real-state-vehicle-source.md, HMW-01_help-como-commuter-standing-platform.md, HMW-02_spare-como-commuter-platform-during.md, SPEC-00_overview.md, SPEC-01_foundation.md, SPEC-04_todays-trip-at-a-glance.md, SPEC-03_alerts-on-the-usual-trip.md, SPEC-05_ways-out-when-the-trip-breaks.md, SPEC-06_those-waiting-are-told.md, SPEC-07_the-connection-ahead.md, SPEC-09_times-that-can-be-kept.md, SPEC-12_compensation-from-the-trip.md, SPEC-14_stop-approaching.md, OQ-01_sources-of-the-real-position.md, OQ-02_age-limit-of-a-fact.md, OQ-06_length-of-the-record-of-past-runs.md]
---

# SPEC-02: The Real State of the Run

Use this file as a prompt: it describes one behaviour to build within the architecture of the foundation: a frontend-only prototype made of web components, with all data from mock datasets in `data/`.

## User stories served

One row per story this specification serves, copied as written.

| Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- |
| [F-01](../02_Analysis/03_User_Stories/US-F-01_real-state-vehicle-source.md) | the Como commuter | As the Como commuter, standing on the platform watching the delay on the board grow from 5 to 10 to 15 minutes while a third-party app shows another time, I want to see where the train really is, when it will really leave and arrive, why it is late and which source says so, so that he knows as early as an unofficial app would tell him. | All of it |
| [F-02](../02_Analysis/03_User_Stories/US-F-02_ways-still-open-trip.md) | a teenager (desk persona) | As a teenager (desk persona), waiting late in the evening at a stop for a connecting bus that does not come, I want to see the ways that still run and can be reached from where I am, valid on my ticket or not, with arrival time and cost, so that I know from what point it makes sense to call home and be fetched. | The alternatives for one leg, shown under the run that is late or cancelled; the ways out door to door are in [SPEC-05](SPEC-05_ways-out-when-the-trip-breaks.md) |

**Why these stories belong together:** F-01 asks for the real state of the run; F-02 asks, when the run fails, for the ways still open. On the Run page the second follows the first: the alternatives for a leg sit under the run that is late or cancelled.

## Traceability

| | |
| --- | --- |
| **Features** | [F-01](../02_Analysis/02_Features/F-01_real-state-vehicle-source.md), [F-02](../02_Analysis/02_Features/F-02_ways-still-open-trip.md), [F-05](../02_Analysis/02_Features/F-05_legs-both-ends-real.md) (the walking legs at their real length), [F-14b](../02_Analysis/02_Features/F-14b_state-usual-drive-known.md) (the state of the drive; sent back, value not traced) |
| **Touchpoints** | [TP-028](../02_Analysis/01_Touchpoints/TP-028_deciding-return-train-day.md), [TP-029](../02_Analysis/01_Touchpoints/TP-029_checking-live-departures-before.md), [TP-038](../02_Analysis/01_Touchpoints/TP-038_checking-another-app-site.md), [TP-043](../02_Analysis/01_Touchpoints/TP-043_acting-delay-warning-turns.md), [TP-067](../02_Analysis/01_Touchpoints/TP-067_deciding-spot-whether-wait.md), [TP-070](../02_Analysis/01_Touchpoints/TP-070_waiting-platform-front-departure.md), [TP-075](../02_Analysis/01_Touchpoints/TP-075_following-train-app-board.md), [TP-088](../02_Analysis/01_Touchpoints/TP-088_watching-delay-grow-board.md), [TP-089](../02_Analysis/01_Touchpoints/TP-089_delay-cancellation-information-comes.md), [TP-090](../02_Analysis/01_Touchpoints/TP-090_choosing-source-believe-they.md), [TP-091](../02_Analysis/01_Touchpoints/TP-091_asking-staff-help-point.md), [TP-092](../02_Analysis/01_Touchpoints/TP-092_stuck-stopped-cancelled-train.md), [TP-096](../02_Analysis/01_Touchpoints/TP-096_waiting-next-service.md); for the car and walking legs: [TP-045](../02_Analysis/01_Touchpoints/TP-045_checking-traffic-app-before.md), [TP-079](../02_Analysis/01_Touchpoints/TP-079_sitting-traffic-nothing-else.md), [TP-108](../02_Analysis/01_Touchpoints/TP-108_car-commuter-meets-traffic.md) |
| **Problem questions** | [HMW-01](../03_Ideation/01_How_Might_We/HMW-01_help-como-commuter-standing-platform.md), [HMW-02](../03_Ideation/01_How_Might_We/HMW-02_spare-como-commuter-platform-during.md), [HMW-03](../03_Ideation/01_How_Might_We/HMW-03_help-teenager-waiting-late-evening.md) |
| **Concepts** | [S02](../03_Ideation/02_Ideas/S02_delay-device-position.md), [S03](../03_Ideation/02_Ideas/S03_users-report-delay.md), [C01-01](../03_Ideation/02_Ideas/C01-01_source-label.md), [C01-02](../03_Ideation/02_Ideas/C01-02_disagreement-flag.md), [C01-03](../03_Ideation/02_Ideas/C01-03_first-hand-position.md), [C01-04](../03_Ideation/02_Ideas/C01-04_word-board.md), [C01-05](../03_Ideation/02_Ideas/C01-05_position-phones-board.md), [C01-06](../03_Ideation/02_Ideas/C01-06_platform-voice.md), [C01-07](../03_Ideation/02_Ideas/C01-07_honest-range.md), [C01-08](../03_Ideation/02_Ideas/C01-08_next-news-promised.md), [C01-09](../03_Ideation/02_Ideas/C01-09_board-matches-best-source.md), [C01-10](../03_Ideation/02_Ideas/C01-10_single-expected-time.md), [C01-11](../03_Ideation/02_Ideas/C01-11_told-without-watching.md), [C01-12](../03_Ideation/02_Ideas/C01-12_duty-publish-once.md), [C02-01](../03_Ideation/02_Ideas/C02-01_cancellation-likelihood.md), [C02-02](../03_Ideation/02_Ideas/C02-02_nothing-read-yet.md), [C02-03](../03_Ideation/02_Ideas/C02-03_cancellation-declared-decided.md), [C02-04](../03_Ideation/02_Ideas/C02-04_decision-deadline.md), [C02-05](../03_Ideation/02_Ideas/C02-05_limit-growing-delays.md), [C02-06](../03_Ideation/02_Ideas/C02-06_someone-ask.md), [C02-07](../03_Ideation/02_Ideas/C02-07_crew-s-word.md), [C02-08](../03_Ideation/02_Ideas/C02-08_reason-behind-numbers.md), [C02-09](../03_Ideation/02_Ideas/C02-09_happened-last-time.md), [C02-10](../03_Ideation/02_Ideas/C02-10_platform-pool.md), [C02-11](../03_Ideation/02_Ideas/C02-11_own-limit.md), [C02-12](../03_Ideation/02_Ideas/C02-12_wait-elsewhere.md) |
| **Families** | [FAM-01](../03_Ideation/02_Ideas/FAM-01_told-where-they.md) Told where they are, [FAM-02](../03_Ideation/02_Ideas/FAM-02_delay-measured-real-position.md) Delay measured from the real position, [FAM-03](../03_Ideation/02_Ideas/FAM-03_travellers-report.md) Travellers report, [FAM-04](../03_Ideation/02_Ideas/FAM-04_source-made-visible.md) The source made visible, [FAM-05](../03_Ideation/02_Ideas/FAM-05_honest-uncertainty.md) Honest uncertainty, [FAM-07](../03_Ideation/02_Ideas/FAM-07_told-sooner.md) Told sooner, [FAM-08](../03_Ideation/02_Ideas/FAM-08_one-answer-data.md) One answer, not data, [FAM-11](../03_Ideation/02_Ideas/FAM-11_place-shows.md) The place shows it, [FAM-12](../03_Ideation/02_Ideas/FAM-12_person-spot.md) A person on the spot, [FAM-16](../03_Ideation/02_Ideas/FAM-16_settled-beforehand.md) Settled beforehand, [FAM-25](../03_Ideation/02_Ideas/FAM-25_rules-rights.md) Rules and rights, [FAM-27](../03_Ideation/02_Ideas/FAM-27_change-trip-habit.md) Change the trip or the habit |
| **Stages covered** | before departure, main leg, transfer, disruption |
| **Marks** | FAM-01 3 · 1 · 3; FAM-02 3 · 1 · 3; FAM-03 2 · 2 · 3; FAM-04 2 · 1 · 3; FAM-05 2 · 1 · 3; FAM-07 2 · 1 · 2; FAM-08 3 · 1 · 3; FAM-11 2 · 1 · 3; FAM-12 2 · 1 · 3; FAM-16 2 · 3 · 2; FAM-25 2 · 1 · 1; FAM-27 1 · 1 · 0 (valuable · feasible · relevant, by family, from [04_Ideas_prioritization.md](../03_Ideation/02_Ideas/04_Ideas_prioritization.md)) |
| **Foundation** | Principles 1, 2, 3; States (run, fact); Sources of information; Rules that hold everywhere (no data, late data, wrong data, nothing set up yet); Architecture; Information architecture (PG-02 Run) |

Concepts and families are references only: the behaviour below comes from the stories.

## Description

Tells the commuter, for the runs of a trip door to door, where each really is, when it will really leave and arrive, why it is late, and which source says so, as early as any source knows it. The runs of the trip are shown one under the other in the order of the legs; a run that is late or cancelled is followed by the other ways to make the same leg. The commuter's other trips are in a section of their own. With no trip set up, the page only invites the commuter to set up the first one.

## Operating logic

- **Starts when:** The commuter opens a run or a trip: from a message about a run of their trip (the prototype starts here), from Today ([SPEC-04](SPEC-04_todays-trip-at-a-glance.md)), from Trips ([SPEC-17](SPEC-17_trips.md)), or from another trip on this page; or a fact about a run of the commuter's trip arrives.
- **Needs to know:** The trip to show, from the commuter's list of trips ([SPEC-17](SPEC-17_trips.md)): the one asked for, the one of the run asked for, or the one followed today. Facts about its runs from the sources of the foundation: schedule, operator live, other travellers. The other ways to make each leg, from the schedule of operators and coach companies.
- **Rules:**
  1. Show every leg of the trip as a section of its own, in the order of the legs, titled with its number, the total, its stage and its usual means of transport (for example "Leg 2 of 4 · main leg · Train") and its two ends. A leg with a run holds the run as a card; a leg the commuter makes on their own (car, on foot) holds its means and its time, and says there is no run to follow. A section holds only its own leg: the next leg is the next section.
  2. On each card, show the state of the run (on time, late with the minutes, cancelled, no news) first.
  3. For a run that is not cancelled, show the planned and expected departure and arrival, the platform, and where the run is now.
  4. Show "Why" only when the run is late or cancelled and a source gives the reason; a run with no problem has no "Why".
  5. For a cancelled run, show only that it is cancelled, with its source, and why; not the planned and expected times, the platform or the position.
  6. Keep the facts behind the card (every figure with its source, age and status) and how late the run usually is under "Details", closed until the commuter opens it.
  7. When two sources give different figures for the same thing, show an information button next to the state; it opens a dialog with each figure, its source and age, and the gap between them.
  8. Show the run as cancelled only when a source says so; a growing delay alone never shows it as cancelled.
  9. When no source has said anything for longer than the age limit, show "no news since <time>".
  10. Keep each run's facts over time, so that how late a run usually is can be told (record of past runs).
  11. Inside the section of a run that is late or cancelled, under its card, show the other ways to make the same leg, so that they read as part of that leg and not of the next one: the next runs of the same service, other operators on the same line, other means such as a coach; each with its departure and arrival, arrival at the door, whether the commuter's ticket is valid on it, its cost, and its source.
  12. Show the commuter's other trips door to door in a section of their own, each leading to its runs on this page.
  13. With no trip set up, show only the invitation to set up the first trip, and nothing about runs.
  14. On a leg the commuter makes on their own, show what changes it: traffic or an accident on a car leg, works or a closed street on a walking leg; each with the extra minutes, the way round when there is one, and its source, age and status, as for a run. The way round is shown, never applied: the decision stays with the commuter (foundation, Principle 4; a drive under way is [SPEC-15](SPEC-15_the-route-stays-with-the-driver.md)). A clear leg shows nothing more. Whether commuters want this for car and walking legs is [not traced], and where the data come from is [technology choice open] ([OQ-35](01_Open_Questions/OQ-35_problems-on-car-and-walking-legs.md)).
  15. Each alternative leads to a page of its own with its details, a sketch of its route on a map, the trip door to door as it would become with it (the legs before the replaced one stay; the legs from it to the door come from the alternative: for a coach to Milano Lampugnano, the underground from Lampugnano and not from Centrale), and the arrival at the door compared with the current one, or with the planned one when the run is cancelled.
  16. "Choose this way" asks first; after the commuter's yes the trip of today follows the alternative on every page (Run, Today), with a line saying what was chosen instead of what and the new arrival at the door, and a way back to the planned trip. Nothing changes without yes (foundation, Principle 4). Booking or buying the alternative is not part of the choice ([SPEC-10](SPEC-10_tickets-that-work-when-needed.md)).
- **States:** The run states of the foundation: planned, on time, late (minutes), departed, arrived, cancelled, no news.
- **The user receives:** Inside the product: the runs of the trip with their state, the facts under "Details", the sources in a dialog when they disagree, the alternatives for a leg that fails, the other trips. A message on the commuter's channel when a run of their trip is cancelled, or when its delay changes, with the new expected time, the platform and the source, so that they know as early as an unofficial app would tell them (F-01). One message per change: nothing is sent again while nothing changes (foundation, Channels). The kinds of event and the moments of a travel day the commuter set in [SPEC-03](SPEC-03_alerts-on-the-usual-trip.md) apply to these messages too.
- **Depends on:** The list of trips and the trip followed today ([SPEC-17](SPEC-17_trips.md)); Channels ([SPEC-01](SPEC-01_foundation.md), Initial set-up); The other ways to make a leg (this specification, from the schedule)
- **Provides:** Real state of a run, to [SPEC-03](SPEC-03_alerts-on-the-usual-trip.md), [SPEC-04](SPEC-04_todays-trip-at-a-glance.md), [SPEC-05](SPEC-05_ways-out-when-the-trip-breaks.md), [SPEC-06](SPEC-06_those-waiting-are-told.md), [SPEC-07](SPEC-07_the-connection-ahead.md), [SPEC-12](SPEC-12_compensation-from-the-trip.md), [SPEC-14](SPEC-14_stop-approaching.md); Record of past runs, to [SPEC-09](SPEC-09_times-that-can-be-kept.md)

## Architecture

- **Pages** (from the information architecture of [SPEC-01](SPEC-01_foundation.md)): **Run** (PG-02): the whole page; **Alternative** (PG-17): the whole page, for one alternative; **Today (start page)** (PG-01): the state of each run, as a line of the trip, and the trip as changed by a chosen alternative.
- **Components:**
  - `<run-card>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused, with the state first, the information button when sources disagree, "Why" only for a problem, and the facts and `<usual-delay>` under "Details".
  - `<fact-line>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused, inside "Details" and in the dialog.
  - `<usual-delay>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused, inside "Details".
  - `<source-gap>`: the figures two sources give for the same thing, each with its `<fact-line>`, and the gap between them in minutes, shown in a dialog opened from the information button of `<run-card>`; reads `runs.<id>.by_scenario.<key>.facts`; reacts to the dialog being opened and closed.
  - `<leg-alternatives>`: the other ways to make one leg, as cards: service, operator, source, departure and arrival, arrival at the door, ticket validity and cost, a note; reads `runs.<id>.alternatives`; no events (choosing and booking a way are [SPEC-05](SPEC-05_ways-out-when-the-trip-breaks.md) and [SPEC-10](SPEC-10_tickets-that-work-when-needed.md)).
  - `<trip-card>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused, for the other trips.
  - `<first-trip-cta>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused, in place of the runs when nothing is set up.
  - `<route-map>`: a sketch of the route of an alternative on a map, one colour per means of transport, with the names of the stops that do not overlap and a legend; reads `runs.<id>.alternatives[].route`; no events. A real map is [technology choice open] ([OQ-36](01_Open_Questions/OQ-36_the-map-of-a-route.md)).
  - `<confirm-choice>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused, before an alternative is chosen.
  - `<leg-problem>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused, in the section of a car or walking leg.
- **Datasets:**
  - `runs` (defined in the foundation): `service`, `operator`, `from`, `to`, `dep`, `arr`, `platform_dep`, `usual_platform`, `platform_arr`, `usual_delay`, `alternatives[{id, mode, service, operator, from, to, dep, arr, door_arrival, ticket_valid, cost, source, note, legs_after[{mode, service, from, to, dep, arr, minutes, stage}], route[{name, lat, lon, mode}]}]`, `by_scenario.<key>.state`, `delay`, `exp_dep`, `exp_arr`, `platform`, `platform_may_change`, `position`, `reason`, `facts[]`.
  - `profile` (defined in the foundation): `trips[{id, name, from, to, monitored, legs[]}]`, `doors`.
  - `leg_events` (defined in the foundation): `<trip>-<leg>.by_scenario.<key>[{kind, text, extra_minutes, detour, source, time, status}]`: what changes a car or walking leg.
  - `notifications` (defined in the foundation): `today.<scenario>[]`: the message sent when the delay of a run of the trip changes (`late`) or the run is cancelled (`cancelled`).
- **Simulated events:**
  - The message on the commuter's channel is the starting point of the prototype: a notification from the app with the text of `notifications.today`; opening it lands on this page in its scenario (`late` or `cancelled`).
  - A new fact about the run (a delay, a cancellation, a reason): the scenario selector moves to `late` or `cancelled`, and the runs show the facts of that scenario.
  - Choosing an alternative: the choice passes from page to page in the address (`?choice=HS9707:A4`), so that Run and Today show the trip as changed; going back to the planned trip removes it. Nothing is stored.
  - Traffic, an accident or works on a car or walking leg: in the data of the scenario (`leg_events`); in the product they would come from a traffic service and from the city's notices of road works ([OQ-35](01_Open_Questions/OQ-35_problems-on-car-and-walking-legs.md)).

## When things go wrong

- **No source says anything:** "no news since <time>"; the planned time is never shown as the real one.
- **A source is late:** its figure shows its age, and is marked outdated past the limit.
- **A later fact contradicts an earlier one:** the earlier one is replaced and the commuter is told what changed.
- **Nothing set up yet:** with no trip, the page shows only the invitation to set up the first trip, which leads to Trips ([SPEC-17](SPEC-17_trips.md)); no run is shown.
- **No alternative known for a leg:** the section of alternatives is left out; the ways out door to door stay in [SPEC-05](SPEC-05_ways-out-when-the-trip-breaks.md).

## Out of scope

Booking or buying an alternative: [SPEC-10](SPEC-10_tickets-that-work-when-needed.md). The ways out door to door, from wherever the commuter is: [SPEC-05](SPEC-05_ways-out-when-the-trip-breaks.md). Connections: [SPEC-07](SPEC-07_the-connection-ahead.md). Adding, renaming, deleting and choosing the trips: [SPEC-17](SPEC-17_trips.md). Which kinds of event the commuter is told about, at which moments of a travel day, and the works and strikes announced for coming days: alerts ([SPEC-03](SPEC-03_alerts-on-the-usual-trip.md)).

## Acceptance criteria

- **Given** no trip set up **when** the commuter opens the Run page **then** they see only the invitation to set up their first trip, and no run.
- **Given** the trip Home to Milan apartment **when** the commuter opens it **then** four sections follow one another: "Leg 1 of 4 · first mile · Car" (Home → Verona Porta Nuova, about 15 min), "Leg 2 of 4 · main leg · Train" with the high-speed train, "Leg 3 of 4 · transfer · Underground" with the M2 from Milano Centrale FS to Loreto, "Leg 4 of 4 · last mile · On foot" (Loreto → Milan apartment, about 5 min).
- **Given** the high-speed train 18 minutes late **when** the commuter looks at its alternatives **then** they are inside the section of leg 2, before the section of leg 3 begins.
- **Given** a run on time **when** the commuter looks at it **then** there is no "Why", and the facts and the usual delay are under "Details", closed.
- **Given** a run the operator shows 18 minutes late and other travellers 22 **when** the commuter taps the information button next to "Late, 18 min" **then** a dialog shows both figures, each with its source and age, and the gap of 4 minutes.
- **Given** a run whose delay grows from 5 to 25 minutes **when** no source states a cancellation **then** the run is not shown as cancelled.
- **Given** a cancelled run **when** the commuter opens it **then** they see only "Cancelled" and why, and under it the alternatives for that leg.
- **Given** a run 18 minutes late **when** the commuter opens it **then** the alternatives for that leg are shown under it, each with arrival at the door, ticket validity and cost.
- **Given** a run of the commuter's trip on time **when** the operator confirms it 18 minutes late **then** a message on the commuter's channel gives the new expected time, the platform and the source, and opening it leads to this page.
- **Given** a message already sent for a delay of 18 minutes **when** nothing changes **then** no other message is sent.
- **Given** the commuter has three trips **when** they open one **then** the other two are listed under "Your other trips", each leading to its runs.
- **Given** no fact for longer than the age limit **when** the commuter looks **then** they see "no news since <time>".
- **Given** the high-speed train 18 minutes late **when** the commuter opens the FlixBus alternative **then** they see its details, a sketch of its route, the trip with it (on foot to Viale Palladio, the coach to Milano Lampugnano, the M1 from Lampugnano to Loreto, on foot to the apartment) and "At Milan apartment around 11:09, instead of 09:39".
- **Given** the page of an alternative **when** the commuter taps "Choose this way" and answers no **then** nothing changes.
- **Given** the commuter chose the FlixBus **when** they open Run or Today **then** the trip shows the coach and the M1 in place of the train and the M2, with "You chose FlixBus coach instead of High-speed 9707" and the new arrival, and they can go back to the planned trip.
- **Given** an accident on the ring road reported by a traffic service **when** the commuter opens the trip **then** the car leg shows "Accident: +10 min", the way round and its source and age, and the route is not changed.
- **Given** Via Padova closed for works **when** the commuter opens the trip **then** the walking leg shows "Works: +3 min" and the way round along Viale Monza, with the city's notice as source.

## Open questions

Each question has its own file in [01_Open_Questions/](01_Open_Questions/00_Open_questions_index.md), with its chain to the research.

- **[OQ-01](01_Open_Questions/OQ-01_sources-of-the-real-position.md)** Which sources tell the real position and the expected time of a vehicle (the operator, the position of travellers on board, what travellers report), and which one leads when they disagree? [not traced] Research: partly.
- **[OQ-02](01_Open_Questions/OQ-02_age-limit-of-a-fact.md)** After how long without news is a fact (a time, a state, a position) marked outdated, and a run marked `no news`? [not traced] Research: ⚠ not supported.
- **[OQ-36](01_Open_Questions/OQ-36_the-map-of-a-route.md)** Which map shows the route of an alternative in the product, and from which service? [technology choice open] Research: ⚠ not supported.
- **[OQ-35](01_Open_Questions/OQ-35_problems-on-car-and-walking-legs.md)** Do commuters want to be told of traffic, accidents and works on their car and walking legs, and which services would tell the product? [not traced] [technology choice open] Research: partly.
- **[OQ-06](01_Open_Questions/OQ-06_length-of-the-record-of-past-runs.md)** Over how many past runs, or how long a period, is the record kept to tell how late a run usually is? [not traced] Research: ⚠ not supported.

## Connections

- [US-F-01_real-state-vehicle-source.md](../02_Analysis/03_User_Stories/US-F-01_real-state-vehicle-source.md): a story this specification serves.
- [F-01_real-state-vehicle-source.md](../02_Analysis/02_Features/F-01_real-state-vehicle-source.md): the feature behind story F-01.
- [HMW-01_help-como-commuter-standing-platform.md](../03_Ideation/01_How_Might_We/HMW-01_help-como-commuter-standing-platform.md): the problem question written from a story it serves.
- [HMW-02_spare-como-commuter-platform-during.md](../03_Ideation/01_How_Might_We/HMW-02_spare-como-commuter-platform-during.md): the problem question written from a story it serves.
- [SPEC-00_overview.md](SPEC-00_overview.md): the overview that lists this specification.
- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation it stands on.
- [SPEC-04_todays-trip-at-a-glance.md](SPEC-04_todays-trip-at-a-glance.md): provides elements this specification depends on.
- [SPEC-03_alerts-on-the-usual-trip.md](SPEC-03_alerts-on-the-usual-trip.md): depends on elements this specification provides.
- [SPEC-05_ways-out-when-the-trip-breaks.md](SPEC-05_ways-out-when-the-trip-breaks.md): depends on elements this specification provides.
- [SPEC-06_those-waiting-are-told.md](SPEC-06_those-waiting-are-told.md): depends on elements this specification provides.
- [SPEC-07_the-connection-ahead.md](SPEC-07_the-connection-ahead.md): depends on elements this specification provides.
- [SPEC-09_times-that-can-be-kept.md](SPEC-09_times-that-can-be-kept.md): depends on elements this specification provides.
- [SPEC-12_compensation-from-the-trip.md](SPEC-12_compensation-from-the-trip.md): depends on elements this specification provides.
- [SPEC-14_stop-approaching.md](SPEC-14_stop-approaching.md): depends on elements this specification provides.
- [OQ-01_sources-of-the-real-position.md](01_Open_Questions/OQ-01_sources-of-the-real-position.md): an open question this specification raises.
- [OQ-02_age-limit-of-a-fact.md](01_Open_Questions/OQ-02_age-limit-of-a-fact.md): an open question this specification raises.
- [OQ-06_length-of-the-record-of-past-runs.md](01_Open_Questions/OQ-06_length-of-the-record-of-past-runs.md): an open question this specification raises.
- [US-F-02_ways-still-open-trip.md](../02_Analysis/03_User_Stories/US-F-02_ways-still-open-trip.md): a story this specification serves in part (the alternatives for a leg).
- [F-02_ways-still-open-trip.md](../02_Analysis/02_Features/F-02_ways-still-open-trip.md): the feature behind story F-02.
- [HMW-03_help-teenager-waiting-late-evening.md](../03_Ideation/01_How_Might_We/HMW-03_help-teenager-waiting-late-evening.md): the problem question written from story F-02.
- [SPEC-17_trips.md](SPEC-17_trips.md): provides the list of trips and the trip followed today.
- [OQ-35_problems-on-car-and-walking-legs.md](01_Open_Questions/OQ-35_problems-on-car-and-walking-legs.md): an open question this specification raises.
- [OQ-36_the-map-of-a-route.md](01_Open_Questions/OQ-36_the-map-of-a-route.md): an open question this specification raises.
