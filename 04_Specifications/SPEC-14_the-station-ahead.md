---
source: Claude
date: 2026-11-03 00:35
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, planning, information, first-last-mile]
related: [SPEC-01_foundation.md, SPEC-03_travellers-report.md, SPEC-07_those-waiting-are-told.md, 00_User_Stories_index.md, 05_Chosen_concept.md, SPEC-17_sessions-still-running.md, US-F-15_parking-bike-space-station.md, US-F-17a_staffed-station-lit-walk.md, US-F-20_step-free-lit-way.md]
---

# SPEC-14: The Station Ahead

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

| Priority | Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- | --- |
| concept | [F-15](../02_Analysis/03_User_Stories/US-F-15_parking-bike-space-station.md) | a woman driving to the station (desk persona) | As a woman driving to the station (desk persona), before leaving home for the 8:17 train she takes because she starts later, I want to know whether there is a parking space or a safe bike place at the station and what it costs, so that she does not have to go back to leaving earlier. | All of it; reports that the car park is full come from SPEC-03 |
| concept | [F-17a](../02_Analysis/03_User_Stories/US-F-17a_staffed-station-lit-walk.md) | a daily traveller in a British city (desk persona) | As a daily traveller in a British city (desk persona), waiting at a station late at night, I want to know whether the station is staffed and whether the walk at the end is in the dark at the hour I travel, so that the wait at night is not a moment of fear. | All of it; reports of the station at night come from SPEC-03 |
| concept | [F-20](../02_Analysis/03_User_Stories/US-F-20_step-free-lit-way.md) | a wheelchair user (desk persona) | As a wheelchair user (desk persona), before getting off the train at a German station with stairs unlit for two months and no lift, I want to know whether the lifts and lights on my way through the station work today, so that I do not have to ride past my station and come back. | All of it; reports from other riders come from SPEC-03 |

These stories belong together because each asks to know, before getting there, the state of a place on the trip at the hour the commuter will be there: a free place to park, staff and light at night, a working lift.

## Traceability

| | |
| --- | --- |
| **Priority** | concept |
| **Features** | [F-15](../02_Analysis/02_Features/F-15_parking-bike-space-station.md), [F-17a](../02_Analysis/02_Features/F-17a_staffed-station-lit-walk.md), [F-20](../02_Analysis/02_Features/F-20_step-free-lit-way.md) |
| **Touchpoints** | [TP-049](../02_Analysis/01_Touchpoints/TP-049_driving-station-parking-near.md), [TP-050](../02_Analysis/01_Touchpoints/TP-050_cycling-station-leaving-bike.md), [TP-080](../02_Analysis/01_Touchpoints/TP-080_walking-last-station-office.md), [TP-083](../02_Analysis/01_Touchpoints/TP-083_protecting-oneself-way-between.md), [TP-063](../02_Analysis/01_Touchpoints/TP-063_getting-through-station-without.md) |
| **Problem questions** | [HMW-18](../03_Ideation/01_How_Might_We/HMW-18_spare-woman-driving-station-before.md), [HMW-20](../03_Ideation/01_How_Might_We/HMW-20_help-daily-traveller-british-city.md), [HMW-23](../03_Ideation/01_How_Might_We/HMW-23_spare-wheelchair-user-before-getting.md) |
| **Concepts** | [C18-06](../03_Ideation/02_Ideas/C18-06_others-say-full.md), [C18-08](../03_Ideation/02_Ideas/C18-08_way-today.md), [C20-03](../03_Ideation/02_Ideas/C20-03_night-accounts.md), [C20-08](../03_Ideation/02_Ideas/C20-08_wait-together.md), [C20-10](../03_Ideation/02_Ideas/C20-10_quieter-busier-station.md), [C23-03](../03_Ideation/02_Ideas/C23-03_other-riders-report.md), [C23-07](../03_Ideation/02_Ideas/C23-07_next-station-works.md), [C23-08](../03_Ideation/02_Ideas/C23-08_own-needs-known.md), [C23-12](../03_Ideation/02_Ideas/C23-12_told-board.md); background: [C18-01](../03_Ideation/02_Ideas/C18-01_places-free-now.md), [C20-01](../03_Ideation/02_Ideas/C20-01_staffed-hour.md), [C20-02](../03_Ideation/02_Ideas/C20-02_dark-lit-walk.md), [C20-11](../03_Ideation/02_Ideas/C20-11_known-before-setting.md), [C23-01](../03_Ideation/02_Ideas/C23-01_lift-state-today.md), [C23-02](../03_Ideation/02_Ideas/C23-02_stairs-lights-today.md) |
| **Families** | [FAM-03](../03_Ideation/02_Ideas/FAM-03_travellers-report.md), [FAM-08](../03_Ideation/02_Ideas/FAM-08_one-answer-data.md), [FAM-26](../03_Ideation/02_Ideas/FAM-26_travellers-carry-together.md), [FAM-15](../03_Ideation/02_Ideas/FAM-15_knows-traveller.md), [FAM-01](../03_Ideation/02_Ideas/FAM-01_told-where-they.md); background: [FAM-10](../03_Ideation/02_Ideas/FAM-10_lies-ahead-known-beforehand.md) |
| **Stages covered** | before departure, first mile, transfer, last mile |
| **[Marks](../03_Ideation/02_Ideas/04_Ideas_prioritization.md)** | C18-06 2·2·3, C18-08 2·1·3, C20-03 2·2·2, C20-08 3·2·3, C20-10 2·1·2, C23-03 2·2·2, C23-07 3·1·3, C23-08 1·3·1, C23-12 2·1·3; background C18-01 3·1·3, C20-01 3·1·3, C20-02 2·1·2, C20-11 2·1·2, C23-01 3·1·3, C23-02 2·1·3 |
| **Foundation** | Principles 2, 6; The user (needs); The things it deals with (place); Sources of information; Channels; Rules that hold everywhere |

## Description

For each station or stop on the commuter's trip, the product knows the state of what they need there at the hour they will be there: free parking and bike places and their cost (C18-01), whether the station is staffed and the walk at the end is lit (C20-01, C20-02), whether the lifts, stairs and lights on their way work today (C23-01, C23-02). It tells them before they leave or before they get off, and gives one answer when a place does not work for them: which way today, which station is better at that hour, which nearby station works (C18-08, C20-10, C23-07). The main families reach these stories mostly through travellers' reports; the facts of the places come from a background family (FAM-10), used because the stories ask for them.

## Operating logic

- **Starts when:** the commuter plans or starts a trip that passes through a place with facilities they need; or, for a usual trip, at the leaving time of a travel day.
- **Needs to know:** the places of the trip and the hour they will be at each; the commuter's needs, stated once (C23-08): parking or bike place, step-free way, travelling late; the state of each facility from the operator or the place (background), and from other travellers' reports (SPEC-03: C18-06, C20-03, C23-03); staff hours and lighting at that hour.
- **Rules:**
  1. For each place of the trip, keep only the facilities the commuter needs.
  2. Before leaving: tell the commuter if a needed facility is full, not working or unstaffed at their hour, with its source and age (C20-11).
  3. Give one answer when a facility fails: for parking, "drive", "bike" or "leave earlier" for today (C18-08); for night, the better station at that hour (C20-10); for a step-free way, the next station that works (C23-07).
  4. On board, before the stop, tell the commuter if a needed facility at that stop has failed since they left (C23-12).
  5. Late at night, offer to let a contact follow the trip until home (SPEC-07), and show other travellers waiting at the same station who chose to be found (C20-08) [not traced: whether travellers want this].
- **States:** a facility is `available`, `full`, `not working`, `unstaffed` or `unknown`, each with source and age.
- **The commuter receives:** before leaving and before the stop, a message when a needed facility fails, with one answer; in the product, the state of the places of the trip.

## When things go wrong

- **No source for a facility:** `unknown`; never shown as available.
- **Operator and reports disagree:** both shown (Foundation).
- **The commuter does not respond:** nothing changes in the trip.

## Out of scope

- Collecting reports: SPEC-03.
- A contact following the trip: SPEC-07.
- Reserving a place (C18-03, FAM-20, background), more places, safe waiting places, repairs (C18-04, C18-05, C20-05, C20-06, C23-09, FAM-24, background), staff on call or at the door (C20-04, C23-04, C23-05, FAM-12, background), a paid onward ride (C23-11, FAM-22), duties to report and repair (C23-10, FAM-25), walking with others (C20-07, [risky]), a shared car to the station (C18-07).

## Acceptance criteria

- **Given** the commuter needs a parking place for the 8:17 **when** the car park is reported full at 7:40 **then** before leaving she is told, with source and age, and given an answer for today.
- **Given** a late trip **when** the station is unstaffed at that hour **then** the commuter is told before leaving, with a better station at that hour if there is one.
- **Given** a step-free need **when** a lift on the way through the arrival station is reported not working **then** the commuter is told before getting off, with the next station that works.
- **Given** no source for a facility **when** it is shown **then** it is shown as unknown.

## Open questions

- Where the state of facilities comes from: operator data is a background family (FAM-10, feasible 1) [technology choice open].
- Whether travellers waiting late want to be found by others (C20-08) [not traced].
- Cost of parking and bike places: asked by F-15; its source [not traced].

## Connections

- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation this specification builds on: Principles 2, 6; The user (needs); The things it deals with (place); Sources of information; Channels; Rules that hold everywhere.
- [SPEC-03_travellers-report.md](SPEC-03_travellers-report.md): named in this specification (User stories served, Operating logic, Out of scope), where the two behaviours meet.
- [SPEC-07_those-waiting-are-told.md](SPEC-07_those-waiting-are-told.md): named in this specification (Operating logic, Out of scope), where the two behaviours meet.
- [00_User_Stories_index.md](../02_Analysis/03_User_Stories/00_User_Stories_index.md): the user stories this specification serves: F-15, F-17a, F-20.
- [05_Chosen_concept.md](../03_Ideation/02_Ideas/05_Chosen_concept.md): the chosen concept; this specification draws on its families FAM-03, FAM-08, FAM-26, FAM-15, FAM-01, FAM-10.
- [SPEC-17_sessions-still-running.md](SPEC-17_sessions-still-running.md): the specifications that name this one where their behaviours meet.
- [US-F-15_parking-bike-space-station.md](../02_Analysis/03_User_Stories/US-F-15_parking-bike-space-station.md), [US-F-17a_staffed-station-lit-walk.md](../02_Analysis/03_User_Stories/US-F-17a_staffed-station-lit-walk.md), [US-F-20_step-free-lit-way.md](../02_Analysis/03_User_Stories/US-F-20_step-free-lit-way.md): the user stories this specification serves, one file each.
