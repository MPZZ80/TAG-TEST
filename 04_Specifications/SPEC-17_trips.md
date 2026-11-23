---
source: Claude
date: 2026-11-23 21:36
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, planning, tools, usual-trip]
related: [US-F-11_usual-trip-glance.md, F-11_usual-trip-glance.md, HMW-14_let-dutch-rail-commuter-way.md, SPEC-00_overview.md, SPEC-01_foundation.md, SPEC-02_real-state-of-the-run.md, SPEC-04_todays-trip-at-a-glance.md, SPEC-08_every-way-door-to-door.md, OQ-05_more-than-one-usual-trip.md, OQ-34_days-of-travel-with-a-list-of-trips.md]
---

# SPEC-17: Trips

Use this file as a prompt: it describes one behaviour to build within the architecture of the foundation: a frontend-only prototype made of web components, with all data from mock datasets in `data/`.

## User stories served

One row per story this specification serves, copied as written.

| Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- |
| [F-11](../02_Analysis/03_User_Stories/US-F-11_usual-trip-glance.md) | a Dutch rail commuter (desk persona) | As a Dutch rail commuter (desk persona), on the way out of the door in the morning, I want the app to open on my usual trip with its state and its platforms, the change included, without searching, so that I know which platform to go to with no extra step. | Keeping more than one trip and choosing the one followed today; the view the app opens on is in [SPEC-04](SPEC-04_todays-trip-at-a-glance.md), the first trip is entered in the initial set-up ([SPEC-01](SPEC-01_foundation.md)) |

**Why this story:** F-11 asks for the usual trip without searching; the research behind [OQ-05](01_Open_Questions/OQ-05_more-than-one-usual-trip.md) shows that commuters keep more than one (the outward and return trips, two trains used most, six or seven saved routes). Marco decided on 2026-11-18: a free list of trips door to door, with no days of their own, from which the commuter chooses the one to follow.

## Traceability

| | |
| --- | --- |
| **Features** | [F-11](../02_Analysis/02_Features/F-11_usual-trip-glance.md) |
| **Touchpoints** | [TP-027](../02_Analysis/01_Touchpoints/TP-027_opening-saved-usual-trip.md), [TP-028](../02_Analysis/01_Touchpoints/TP-028_deciding-return-train-day.md), [TP-075](../02_Analysis/01_Touchpoints/TP-075_following-train-app-board.md) |
| **Problem questions** | [HMW-14](../03_Ideation/01_How_Might_We/HMW-14_let-dutch-rail-commuter-way.md) |
| **Concepts** | [C14-04](../03_Ideation/02_Ideas/C14-04_usual-trip-remembered.md), [C05-06](../03_Ideation/02_Ideas/C05-06_usual-train-named-once.md) |
| **Families** | [FAM-15](../03_Ideation/02_Ideas/FAM-15_knows-traveller.md) It knows the traveller |
| **Stages covered** | planning |
| **Marks** | FAM-15 2 · 3 · 2 (valuable · feasible · relevant, by family, from [04_Ideas_prioritization.md](../03_Ideation/02_Ideas/04_Ideas_prioritization.md)) |
| **Foundation** | Principle 5; The things it deals with (trip); Initial set-up; Architecture; Information architecture (PG-16 Trips) |

Concepts and families are references only: the behaviour below comes from the story and Marco's decision on OQ-05.

## Description

Keeps the commuter's trips door to door as a free list: each trip has a name, the doors at both ends and its legs, and no days of its own. The commuter chooses which trip to follow today; that trip is the one Today opens on and the one whose runs are watched. Trips are added, renamed and deleted here.

## Operating logic

- **Starts when:** The commuter opens Trips from the navigation, or from the invitation to set up the first trip.
- **Needs to know:** The trips the commuter entered: the first one in the initial set-up, the others added here; the doors from the initial set-up.
- **Rules:**
  1. Show every trip of the list with its name, the doors at both ends and its legs in order.
  2. Let the commuter choose the trip to follow today; one trip is followed at a time, and choosing another replaces it.
  3. The trip followed today is the trip of the day for [SPEC-04](SPEC-04_todays-trip-at-a-glance.md), and the trip [SPEC-02](SPEC-02_real-state-of-the-run.md) shows first.
  4. Each trip leads to its runs on the Run page ([SPEC-02](SPEC-02_real-state-of-the-run.md)).
  5. "Add a trip" opens the step of the initial set-up where a trip is entered (doors, legs and runs), or saves a way found by [SPEC-08](SPEC-08_every-way-door-to-door.md).
  6. A trip can be renamed or deleted at any time; a deleted trip is no longer followed or shown anywhere.
  7. Trips have no days of their own; how the days of travel apply to them is open ([OQ-34](01_Open_Questions/OQ-34_days-of-travel-with-a-list-of-trips.md)).
- **States:** A trip is `followed today` or not.
- **The user receives:** Inside the product: the list of trips, which one is followed today, and the way to add, rename and delete them.
- **Depends on:** Doors and the first trip ([SPEC-01](SPEC-01_foundation.md), Initial set-up); Ways between two places ([SPEC-08](SPEC-08_every-way-door-to-door.md))
- **Provides:** The list of trips and the trip followed today, to [SPEC-02](SPEC-02_real-state-of-the-run.md), [SPEC-04](SPEC-04_todays-trip-at-a-glance.md)

## Architecture

- **Pages** (from the information architecture of [SPEC-01](SPEC-01_foundation.md)): **Trips** (PG-16): the whole page; **Today** (PG-01): the other trips, as a section under the trip of the day.
- **Components:**
  - `<trip-list>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused, each trip a `<trip-card>` with the choice "Follow today" and the buttons to rename and delete it.
  - `<first-trip-cta>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused, in place of the list when nothing is set up, leading to the set-up.
- **Datasets:**
  - `profile` (defined in the foundation): `trips[{id, name, from, to, monitored, legs[{mode, from, to, run, minutes, stage}]}]`, `doors`.
- **Simulated events:** None: what the commuter changes is shown, not kept; the trips come from `profile.trips`.

## When things go wrong

- **Nothing set up yet:** no trip: the page shows the invitation to set up the first trip, which opens the set-up.
- **The trip followed today is deleted:** no trip is followed until the commuter chooses one; Today says so.
- **A run of a trip no longer exists in the schedule:** the trip is kept and marked, and the commuter is asked to choose another run (Initial set-up).
- **The commuter does not choose:** the trip followed the day before stays followed.

## Out of scope

The real state of the runs ([SPEC-02](SPEC-02_real-state-of-the-run.md)); the trip of the day ([SPEC-04](SPEC-04_todays-trip-at-a-glance.md)); the alerts on a trip ([SPEC-03](SPEC-03_alerts-on-the-usual-trip.md)); finding ways ([SPEC-08](SPEC-08_every-way-door-to-door.md)).

## Acceptance criteria

- **Given** a commuter with the trips Home to office, Office to home and Home to the client in Brescia **when** they open Trips **then** the three are listed with their doors and legs, and Home to office is marked as followed today.
- **Given** the list of trips **when** the commuter chooses Office to home to follow **then** Home to office is no longer followed.
- **Given** a trip **when** the commuter opens it **then** its runs are shown on the Run page.
- **Given** no trip set up **when** the commuter opens Trips **then** they see the invitation to set up the first trip.

## Open questions

Each question has its own file in [01_Open_Questions/](01_Open_Questions/00_Open_questions_index.md), with its chain to the research.

- **[OQ-34](01_Open_Questions/OQ-34_days-of-travel-with-a-list-of-trips.md)** Trips have no days of their own: which days do the alerts ([SPEC-03](SPEC-03_alerts-on-the-usual-trip.md)) and the fare ([SPEC-11](SPEC-11_the-fare-that-fits-the-days.md)) count as days of travel? [not traced] Research: ⚠ not supported.

## Connections

- [US-F-11_usual-trip-glance.md](../02_Analysis/03_User_Stories/US-F-11_usual-trip-glance.md): a story this specification serves.
- [F-11_usual-trip-glance.md](../02_Analysis/02_Features/F-11_usual-trip-glance.md): the feature behind story F-11.
- [HMW-14_let-dutch-rail-commuter-way.md](../03_Ideation/01_How_Might_We/HMW-14_let-dutch-rail-commuter-way.md): the problem question written from the story it serves.
- [SPEC-00_overview.md](SPEC-00_overview.md): the overview that lists this specification.
- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation it stands on.
- [SPEC-02_real-state-of-the-run.md](SPEC-02_real-state-of-the-run.md), [SPEC-04_todays-trip-at-a-glance.md](SPEC-04_todays-trip-at-a-glance.md): depend on the list of trips and the trip followed today.
- [SPEC-08_every-way-door-to-door.md](SPEC-08_every-way-door-to-door.md): provides elements this specification depends on: a way found can be saved as a trip.
- [OQ-05_more-than-one-usual-trip.md](01_Open_Questions/OQ-05_more-than-one-usual-trip.md): the open question this specification answers, decided by Marco.
- [OQ-34_days-of-travel-with-a-list-of-trips.md](01_Open_Questions/OQ-34_days-of-travel-with-a-list-of-trips.md): an open question this specification raises.
