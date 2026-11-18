---
source: Claude
date: 2026-11-18 19:55
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, information, tools, usual-trip]
related: [US-F-11_usual-trip-glance.md, US-F-24_travel-information-first-hurry.md, F-11_usual-trip-glance.md, F-24_travel-information-first-hurry.md, HMW-14_let-dutch-rail-commuter-way.md, HMW-27_keep-few-seconds-deciding-whether.md, SPEC-00_overview.md, SPEC-01_foundation.md, SPEC-02_real-state-of-the-run.md, SPEC-08_every-way-door-to-door.md, SPEC-05_ways-out-when-the-trip-breaks.md, SPEC-06_those-waiting-are-told.md, SPEC-07_the-connection-ahead.md, SPEC-11_the-fare-that-fits-the-days.md, SPEC-12_compensation-from-the-trip.md, SPEC-13_the-station-ahead.md, SPEC-14_stop-approaching.md, OQ-05_more-than-one-usual-trip.md, OQ-09_first-view-with-no-usual-trip.md, OQ-10_another-run-taken-without-saying.md]
---

# SPEC-04: Today's Trip at a Glance

Use this file as a prompt: it describes one behaviour to build within the architecture of the foundation: a frontend-only prototype made of web components, with all data from mock datasets in `data/`.

## User stories served

One row per story this specification serves, copied as written.

| Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- |
| [F-11](../02_Analysis/03_User_Stories/US-F-11_usual-trip-glance.md) | a Dutch rail commuter (desk persona) | As a Dutch rail commuter (desk persona), on the way out of the door in the morning, I want the app to open on my usual trip with its state and its platforms, the change included, without searching, so that I know which platform to go to with no extra step. | The view the app opens on; the usual trip is entered in SPEC-01 |
| [F-24](../02_Analysis/03_User_Stories/US-F-24_travel-information-first-hurry.md) | an Italian bus user (desk persona) | As an Italian bus user (desk persona), in a hurry to catch a bus, opening the app at the stop, I want the travel information shown at once, with nothing in front of it, so that a few seconds do not decide whether I catch the bus. | All of it |

**Why these stories belong together:** Both stories ask for the same first view: the information on opening, with no search and nothing in front of it.

## Traceability

| | |
| --- | --- |
| **Features** | [F-11](../02_Analysis/02_Features/F-11_usual-trip-glance.md), [F-24](../02_Analysis/02_Features/F-24_travel-information-first-hurry.md) |
| **Touchpoints** | [TP-012](../02_Analysis/01_Touchpoints/TP-012_deciding-means-before-opening.md), [TP-027](../02_Analysis/01_Touchpoints/TP-027_opening-saved-usual-trip.md), [TP-062](../02_Analysis/01_Touchpoints/TP-062_finding-next-platform-change.md), [TP-055](../02_Analysis/01_Touchpoints/TP-055_checking-app-hurry-being.md) |
| **Problem questions** | [HMW-14](../03_Ideation/01_How_Might_We/HMW-14_let-dutch-rail-commuter-way.md), [HMW-27](../03_Ideation/01_How_Might_We/HMW-27_keep-few-seconds-deciding-whether.md) |
| **Concepts** | [C14-01](../03_Ideation/02_Ideas/C14-01_platform-door.md), [C14-02](../03_Ideation/02_Ideas/C14-02_wrist.md), [C14-03](../03_Ideation/02_Ideas/C14-03_hall-display.md), [C14-04](../03_Ideation/02_Ideas/C14-04_usual-trip-remembered.md), [C14-05](../03_Ideation/02_Ideas/C14-05_only-one-fact.md), [C14-06](../03_Ideation/02_Ideas/C14-06_only-different.md), [C14-07](../03_Ideation/02_Ideas/C14-07_fixed-platform.md), [C14-08](../03_Ideation/02_Ideas/C14-08_readable-station.md), [C14-09](../03_Ideation/02_Ideas/C14-09_greeter-entrance.md), [C14-10](../03_Ideation/02_Ideas/C14-10_commuter-circle.md), [C14-11](../03_Ideation/02_Ideas/C14-11_confirmed-those-there.md), [C14-12](../03_Ideation/02_Ideas/C14-12_final.md), [C27-01](../03_Ideation/02_Ideas/C27-01_nothing-front.md), [C27-02](../03_Ideation/02_Ideas/C27-02_advertising-elsewhere.md), [C27-03](../03_Ideation/02_Ideas/C27-03_paid-ads.md), [C27-04](../03_Ideation/02_Ideas/C27-04_hurry-recognised.md), [C27-05](../03_Ideation/02_Ideas/C27-05_stop-shows.md), [C27-06](../03_Ideation/02_Ideas/C27-06_before-he-opens-anything.md), [C27-07](../03_Ideation/02_Ideas/C27-07_usual-bus-known.md), [C27-08](../03_Ideation/02_Ideas/C27-08_time-reach.md), [C27-09](../03_Ideation/02_Ideas/C27-09_driver-asked-wait.md), [C27-10](../03_Ideation/02_Ideas/C27-10_others-stop.md), [C27-11](../03_Ideation/02_Ideas/C27-11_ads-travel-information.md), [C27-12](../03_Ideation/02_Ideas/C27-12_more-frequent-buses.md) |
| **Families** | [FAM-01](../03_Ideation/02_Ideas/FAM-01_told-where-they.md) Told where they are, [FAM-03](../03_Ideation/02_Ideas/FAM-03_travellers-report.md) Travellers report, [FAM-04](../03_Ideation/02_Ideas/FAM-04_source-made-visible.md) The source made visible, [FAM-08](../03_Ideation/02_Ideas/FAM-08_one-answer-data.md) One answer, not data, [FAM-09](../03_Ideation/02_Ideas/FAM-09_less-way.md) Less in the way, [FAM-11](../03_Ideation/02_Ideas/FAM-11_place-shows.md) The place shows it, [FAM-12](../03_Ideation/02_Ideas/FAM-12_person-spot.md) A person on the spot, [FAM-15](../03_Ideation/02_Ideas/FAM-15_knows-traveller.md) It knows the traveller, [FAM-24](../03_Ideation/02_Ideas/FAM-24_more-different-service.md) More or different service, [FAM-25](../03_Ideation/02_Ideas/FAM-25_rules-rights.md) Rules and rights |
| **Stages covered** | planning, before departure, first mile, transfer |
| **Marks** | FAM-01 3 · 1 · 3; FAM-03 2 · 2 · 3; FAM-04 2 · 1 · 3; FAM-08 3 · 1 · 3; FAM-09 2 · 1 · 3; FAM-11 2 · 1 · 3; FAM-12 2 · 1 · 3; FAM-15 2 · 3 · 2; FAM-24 2 · 1 · 1; FAM-25 2 · 1 · 1 (valuable · feasible · relevant, by family, from [04_Ideas_prioritization.md](../03_Ideation/02_Ideas/04_Ideas_prioritization.md)) |
| **Foundation** | Principle 3; The things it deals with (trip); States (trip) |

Concepts and families are references only: the behaviour below comes from the stories.

## Description

Opens the product on the trip the commuter is about to make today: its run, state, platforms and change, with nothing in front of it. It also holds the trip of the day, which other behaviours follow.

## Operating logic

- **Starts when:** The commuter opens the product.
- **Needs to know:** The usual trip, days of travel and doors (SPEC-01); the real state of its runs (SPEC-02); for a trip that is not the usual one, the way the commuter chose (SPEC-08).
- **Rules:**
  1. On a travel day, open on the next run of the usual trip: its state, its platform, the change and its platform, and the expected arrival.
  2. Mark a platform that differs from the usual one, and a platform that may still change.
  3. Show nothing in front of the trip information: no announcement, offer or request comes before it.
  4. Let the commuter confirm or change the run they take today; this becomes the trip of the day.
  5. A way chosen in SPEC-08 for today becomes the trip of the day.
  6. Move the trip of the day through its states (today, under way, completed) as its runs move.
- **States:** Trip states of the foundation: planned, today, under way, completed, broken, abandoned.
- **The user receives:** Inside the product, on opening: the trip of the day and its state.
- **Depends on:** Usual trip ([SPEC-01](SPEC-01_foundation.md), Initial set-up); Days of travel ([SPEC-01](SPEC-01_foundation.md), Initial set-up); Doors ([SPEC-01](SPEC-01_foundation.md), Initial set-up); Real state of a run ([SPEC-02](SPEC-02_real-state-of-the-run.md)); A way chosen for today ([SPEC-08](SPEC-08_every-way-door-to-door.md))
- **Provides:** Trip of the day, to [SPEC-02](SPEC-02_real-state-of-the-run.md), [SPEC-05](SPEC-05_ways-out-when-the-trip-breaks.md), [SPEC-06](SPEC-06_those-waiting-are-told.md), [SPEC-07](SPEC-07_the-connection-ahead.md), [SPEC-11](SPEC-11_the-fare-that-fits-the-days.md), [SPEC-12](SPEC-12_compensation-from-the-trip.md), [SPEC-13](SPEC-13_the-station-ahead.md), [SPEC-14](SPEC-14_stop-approaching.md)

## Architecture

- **Pages** (from the information architecture of [SPEC-01](SPEC-01_foundation.md)): **Today (start page)** (PG-01): the trip of the day, first.
- **Components:**
  - `<today-trip>`: the trip of the day: each leg with its run, state, platforms and the change, the arrival at the door, with nothing in front of it; it is the first content of the start page once the set-up is done; reads `profile.usual_trip`, `profile.days`, `runs`, `connections`, `clock`, `scenarios`; reacts to the scenario changing and to a leg being opened (leads to SPEC-02 or SPEC-07).
  - `<run-card>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused.
  - `<fact-line>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused.
  - `<missing-setup>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused.
- **Datasets:**
  - `profile` (defined in the foundation): `usual_trip{name, from, to, legs[{mode, from, to, run, minutes, stage}]}`, `days`, `doors`.
  - `runs` (defined in the foundation): state, expected times and platforms of each run of the trip.
  - `connections` (defined in the foundation): `station`, `by_scenario.<key>.state`, `margin`, `door_arrival`.
  - `clock` (defined in the foundation): `date`, `weekday`.
  - `scenarios` (defined in the foundation): `list.<key>.setup`, `now`, `trip_state`.
- **Simulated events:**
  - The trip changing during the morning: the scenario selector (`on_time`, `late`, `cancelled`); with `none`, nothing is set up and `<missing-setup>` leads to the initial set-up.

## When things go wrong

- **No usual trip and no trip chosen:** the product opens on a search (SPEC-08) and says the usual trip can be set in SPEC-01.
- **Not a travel day:** the product opens on the next travel day's trip, marked as such.
- **No data about the run:** "no news since <time>", as in SPEC-02.
- **The commuter takes another run without saying so:** the trip of the day stays on the planned run [not traced: whether it may be inferred].

## Out of scope

The detail of the run (SPEC-02); planning other ways (SPEC-08).

## Acceptance criteria

- **Given** a usual trip at 7:42 on travel days **when** the commuter opens the product at 7:20 on a travel day **then** the first view is that run, its state, its platform and the change platform.
- **Given** the platform differs from the usual one **when** the view is shown **then** it is marked as changed.
- **Given** an announcement to make **when** the commuter opens the product **then** it is not shown before the trip information.
- **Given** the commuter confirms they take the 8:12 instead **when** they open the product again **then** the trip of the day is the 8:12.
- **Given** no usual trip **when** the commuter opens the product **then** it opens on a search and says where to set the usual trip.

## Open questions

Each question has its own file in [01_Open_Questions/](01_Open_Questions/00_Open_questions_index.md), with its chain to the research.

- **[OQ-05](01_Open_Questions/OQ-05_more-than-one-usual-trip.md)** Does the commuter keep more than one usual trip, for example the morning trip and the evening return, or two trains used most? [not traced] Research: supported.
- **[OQ-09](01_Open_Questions/OQ-09_first-view-with-no-usual-trip.md)** What does the first view show when the commuter opens the product at a stop or station from which no usual trip starts? [not traced] Research: ⚠ not supported.
- **[OQ-10](01_Open_Questions/OQ-10_another-run-taken-without-saying.md)** When the commuter takes another run than the planned one without saying so, may the product infer it and follow that run? [not traced] Research: partly.

## Connections

- [US-F-11_usual-trip-glance.md](../02_Analysis/03_User_Stories/US-F-11_usual-trip-glance.md): a story this specification serves.
- [US-F-24_travel-information-first-hurry.md](../02_Analysis/03_User_Stories/US-F-24_travel-information-first-hurry.md): a story this specification serves.
- [F-11_usual-trip-glance.md](../02_Analysis/02_Features/F-11_usual-trip-glance.md): the feature behind story F-11.
- [F-24_travel-information-first-hurry.md](../02_Analysis/02_Features/F-24_travel-information-first-hurry.md): the feature behind story F-24.
- [HMW-14_let-dutch-rail-commuter-way.md](../03_Ideation/01_How_Might_We/HMW-14_let-dutch-rail-commuter-way.md): the problem question written from a story it serves.
- [HMW-27_keep-few-seconds-deciding-whether.md](../03_Ideation/01_How_Might_We/HMW-27_keep-few-seconds-deciding-whether.md): the problem question written from a story it serves.
- [SPEC-00_overview.md](SPEC-00_overview.md): the overview that lists this specification.
- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation it stands on.
- [SPEC-02_real-state-of-the-run.md](SPEC-02_real-state-of-the-run.md): provides elements this specification depends on.
- [SPEC-08_every-way-door-to-door.md](SPEC-08_every-way-door-to-door.md): provides elements this specification depends on.
- [SPEC-05_ways-out-when-the-trip-breaks.md](SPEC-05_ways-out-when-the-trip-breaks.md): depends on elements this specification provides.
- [SPEC-06_those-waiting-are-told.md](SPEC-06_those-waiting-are-told.md): depends on elements this specification provides.
- [SPEC-07_the-connection-ahead.md](SPEC-07_the-connection-ahead.md): depends on elements this specification provides.
- [SPEC-11_the-fare-that-fits-the-days.md](SPEC-11_the-fare-that-fits-the-days.md): depends on elements this specification provides.
- [SPEC-12_compensation-from-the-trip.md](SPEC-12_compensation-from-the-trip.md): depends on elements this specification provides.
- [SPEC-13_the-station-ahead.md](SPEC-13_the-station-ahead.md): depends on elements this specification provides.
- [SPEC-14_stop-approaching.md](SPEC-14_stop-approaching.md): depends on elements this specification provides.
- [OQ-05_more-than-one-usual-trip.md](01_Open_Questions/OQ-05_more-than-one-usual-trip.md): an open question this specification raises.
- [OQ-09_first-view-with-no-usual-trip.md](01_Open_Questions/OQ-09_first-view-with-no-usual-trip.md): an open question this specification raises.
- [OQ-10_another-run-taken-without-saying.md](01_Open_Questions/OQ-10_another-run-taken-without-saying.md): an open question this specification raises.
