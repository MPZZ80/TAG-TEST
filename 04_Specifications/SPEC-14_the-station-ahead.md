---
source: Claude
date: 2026-11-16 23:04
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, planning, information, first-last-mile]
related: [US-F-15_parking-bike-space-station.md, US-F-17a_staffed-station-lit-walk.md, US-F-20_step-free-lit-way.md, F-15_parking-bike-space-station.md, F-17a_staffed-station-lit-walk.md, F-20_step-free-lit-way.md, HMW-18_spare-woman-driving-station-before.md, HMW-20_help-daily-traveller-british-city.md, HMW-23_spare-wheelchair-user-before-getting.md, SPEC-00_overview.md, SPEC-01_foundation.md, SPEC-02_the-commuters-set-up.md, SPEC-05_todays-trip-at-a-glance.md, OQ-28_source-of-the-state-of-facilities.md]
---

# SPEC-14: The Station Ahead

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

One row per story this specification serves, copied as written.

| Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- |
| [F-15](../02_Analysis/03_User_Stories/US-F-15_parking-bike-space-station.md) | a woman driving to the station (desk persona) | As a woman driving to the station (desk persona), before leaving home for the 8:17 train she takes because she starts later, I want to know whether there is a parking space or a safe bike place at the station and what it costs, so that she does not have to go back to leaving earlier. | All of it |
| [F-17a](../02_Analysis/03_User_Stories/US-F-17a_staffed-station-lit-walk.md) | a daily traveller in a British city (desk persona) | As a daily traveller in a British city (desk persona), waiting at a station late at night, I want to know whether the station is staffed and whether the walk at the end is in the dark at the hour I travel, so that the wait at night is not a moment of fear. | All of it |
| [F-20](../02_Analysis/03_User_Stories/US-F-20_step-free-lit-way.md) | a wheelchair user (desk persona) | As a wheelchair user (desk persona), before getting off the train at a German station with stairs unlit for two months and no lift, I want to know whether the lifts and lights on my way through the station work today, so that I do not have to ride past my station and come back. | All of it |

**Why these stories belong together:** All three ask for the state of a place on the way, at the hour the commuter will be there, before getting there.

## Traceability

| | |
| --- | --- |
| **Features** | [F-15](../02_Analysis/02_Features/F-15_parking-bike-space-station.md), [F-17a](../02_Analysis/02_Features/F-17a_staffed-station-lit-walk.md), [F-20](../02_Analysis/02_Features/F-20_step-free-lit-way.md) |
| **Touchpoints** | [TP-049](../02_Analysis/01_Touchpoints/TP-049_driving-station-parking-near.md), [TP-050](../02_Analysis/01_Touchpoints/TP-050_cycling-station-leaving-bike.md), [TP-080](../02_Analysis/01_Touchpoints/TP-080_walking-last-station-office.md), [TP-083](../02_Analysis/01_Touchpoints/TP-083_protecting-oneself-way-between.md), [TP-063](../02_Analysis/01_Touchpoints/TP-063_getting-through-station-without.md) |
| **Problem questions** | [HMW-18](../03_Ideation/01_How_Might_We/HMW-18_spare-woman-driving-station-before.md), [HMW-20](../03_Ideation/01_How_Might_We/HMW-20_help-daily-traveller-british-city.md), [HMW-23](../03_Ideation/01_How_Might_We/HMW-23_spare-wheelchair-user-before-getting.md) |
| **Concepts** | [C18-01](../03_Ideation/02_Ideas/C18-01_places-free-now.md), [C18-02](../03_Ideation/02_Ideas/C18-02_chance-hour.md), [C18-03](../03_Ideation/02_Ideas/C18-03_place-reserved.md), [C18-04](../03_Ideation/02_Ideas/C18-04_more-car-places.md), [C18-05](../03_Ideation/02_Ideas/C18-05_safe-bike-place.md), [C18-06](../03_Ideation/02_Ideas/C18-06_others-say-full.md), [C18-07](../03_Ideation/02_Ideas/C18-07_shared-car.md), [C18-08](../03_Ideation/02_Ideas/C18-08_way-today.md), [C18-09](../03_Ideation/02_Ideas/C18-09_attendant.md), [C18-10](../03_Ideation/02_Ideas/C18-10_priced-later-arrivals.md), [C18-11](../03_Ideation/02_Ideas/C18-11_quota-pass-holders.md), [C18-12](../03_Ideation/02_Ideas/C18-12_place-needed.md), [C20-01](../03_Ideation/02_Ideas/C20-01_staffed-hour.md), [C20-02](../03_Ideation/02_Ideas/C20-02_dark-lit-walk.md), [C20-03](../03_Ideation/02_Ideas/C20-03_night-accounts.md), [C20-04](../03_Ideation/02_Ideas/C20-04_someone-call.md), [C20-05](../03_Ideation/02_Ideas/C20-05_safe-waiting-place.md), [C20-06](../03_Ideation/02_Ideas/C20-06_light-staff-hours.md), [C20-07](../03_Ideation/02_Ideas/C20-07_walk-someone.md), [C20-08](../03_Ideation/02_Ideas/C20-08_wait-together.md), [C20-09](../03_Ideation/02_Ideas/C20-09_someone-knows-where-you.md), [C20-10](../03_Ideation/02_Ideas/C20-10_quieter-busier-station.md), [C20-11](../03_Ideation/02_Ideas/C20-11_known-before-setting.md), [C20-12](../03_Ideation/02_Ideas/C20-12_earlier-train.md), [C23-01](../03_Ideation/02_Ideas/C23-01_lift-state-today.md), [C23-02](../03_Ideation/02_Ideas/C23-02_stairs-lights-today.md), [C23-03](../03_Ideation/02_Ideas/C23-03_other-riders-report.md), [C23-04](../03_Ideation/02_Ideas/C23-04_call-ahead.md), [C23-05](../03_Ideation/02_Ideas/C23-05_assistance-door.md), [C23-06](../03_Ideation/02_Ideas/C23-06_whole-route-checked.md), [C23-07](../03_Ideation/02_Ideas/C23-07_next-station-works.md), [C23-08](../03_Ideation/02_Ideas/C23-08_own-needs-known.md), [C23-09](../03_Ideation/02_Ideas/C23-09_repair-deadline.md), [C23-10](../03_Ideation/02_Ideas/C23-10_duty-report-repair.md), [C23-11](../03_Ideation/02_Ideas/C23-11_onward-ride-paid.md), [C23-12](../03_Ideation/02_Ideas/C23-12_told-board.md) |
| **Families** | [FAM-01](../03_Ideation/02_Ideas/FAM-01_told-where-they.md) Told where they are, [FAM-03](../03_Ideation/02_Ideas/FAM-03_travellers-report.md) Travellers report, [FAM-05](../03_Ideation/02_Ideas/FAM-05_honest-uncertainty.md) Honest uncertainty, [FAM-08](../03_Ideation/02_Ideas/FAM-08_one-answer-data.md) One answer, not data, [FAM-10](../03_Ideation/02_Ideas/FAM-10_lies-ahead-known-beforehand.md) What lies ahead, known beforehand, [FAM-12](../03_Ideation/02_Ideas/FAM-12_person-spot.md) A person on the spot, [FAM-13](../03_Ideation/02_Ideas/FAM-13_those-depending-them-told.md) Those depending on them are told, [FAM-14](../03_Ideation/02_Ideas/FAM-14_step-done-them.md) The step done for them, [FAM-15](../03_Ideation/02_Ideas/FAM-15_knows-traveller.md) It knows the traveller, [FAM-20](../03_Ideation/02_Ideas/FAM-20_place-kept.md) A place kept, [FAM-21](../03_Ideation/02_Ideas/FAM-21_prices-tickets-fit-real.md) Prices and tickets that fit the real use, [FAM-22](../03_Ideation/02_Ideas/FAM-22_money-covers-failure.md) Money covers the failure, [FAM-24](../03_Ideation/02_Ideas/FAM-24_more-different-service.md) More or different service, [FAM-25](../03_Ideation/02_Ideas/FAM-25_rules-rights.md) Rules and rights, [FAM-26](../03_Ideation/02_Ideas/FAM-26_travellers-carry-together.md) Travellers carry it together, [FAM-27](../03_Ideation/02_Ideas/FAM-27_change-trip-habit.md) Change the trip or the habit |
| **Stages covered** | first mile, transfer, last mile |
| **Marks** | FAM-01 3 · 1 · 3; FAM-03 2 · 2 · 3; FAM-05 2 · 1 · 3; FAM-08 3 · 1 · 3; FAM-10 3 · 1 · 3; FAM-12 2 · 1 · 3; FAM-13 3 · 1 · 3; FAM-14 3 · 1 · 3; FAM-15 2 · 3 · 2; FAM-20 3 · 1 · 3; FAM-21 2 · 1 · 1; FAM-22 1 · 1 · 1; FAM-24 2 · 1 · 1; FAM-25 2 · 1 · 1; FAM-26 1 · 2 · 3; FAM-27 1 · 1 · 0 (valuable · feasible · relevant, by family, from [04_Ideas_prioritization.md](../03_Ideation/02_Ideas/04_Ideas_prioritization.md)) |
| **Foundation** | Sources of information; The things it deals with (place) |

Concepts and families are references only: the behaviour below comes from the stories.

## Description

Tells the commuter, before they get to a station on their trip, the state of what they need there at that hour: a parking space or a safe bike place and its cost, whether the station is staffed and the walk at the end lit, whether the lifts and lights on their way work today.

## Operating logic

- **Starts when:** Before leaving home for a trip, or before getting off at a station of the trip; or the commuter opens a station.
- **Needs to know:** The trip of the day or usual trip (SPEC-05, SPEC-02); the commuter's needs on the way (SPEC-02); the state of places: parking and bike places and prices, staff hours, lighting, lifts (operators, third parties, other travellers).
- **Rules:**
  1. For a station where the commuter leaves a car or bicycle, show whether a place is free and what it costs, before they leave home.
  2. For a station the commuter waits at or walks from late, show whether it is staffed and whether the walk at the end is lit, at the hour they travel.
  3. For a commuter who needs step-free access, show whether the lifts and lights on their way through the station work today, before they get off.
  4. Show each fact with its source and age.
- **States:** None of its own.
- **The user receives:** Inside the product: the state of the station at the hour of the trip.
- **Depends on:** Usual trip ([SPEC-02](SPEC-02_the-commuters-set-up.md)); Trip of the day ([SPEC-05](SPEC-05_todays-trip-at-a-glance.md)); Needs on the way ([SPEC-02](SPEC-02_the-commuters-set-up.md))
- **Provides:** none

## When things go wrong

- **No data for a place:** shown as unknown, never as available.
- **No trip set:** the commuter can open any station.
- **No needs set:** step-free information is still available on request.

## Out of scope

Changing the route because of a station (SPEC-06, SPEC-10).

## Acceptance criteria

- **Given** a car park full at 8:00 **when** the woman driving to the station checks before leaving **then** she sees it is full, with the source and age.
- **Given** a station unstaffed after 22:00 **when** the daily traveller travels at 23:00 **then** she sees it is not staffed at that hour.
- **Given** a lift out of order **when** the wheelchair user approaches that station **then** he is told before getting off.

## Open questions

Each question has its own file in [01_Open_Questions/](01_Open_Questions/00_Open_questions_index.md), with its chain to the research.

- **[OQ-28](01_Open_Questions/OQ-28_source-of-the-state-of-facilities.md)** Where does the product learn the state of lifts, lighting, staff and parking at a station? [technology choice open] Research: ⚠ not supported.

## Connections

- [US-F-15_parking-bike-space-station.md](../02_Analysis/03_User_Stories/US-F-15_parking-bike-space-station.md): a story this specification serves.
- [US-F-17a_staffed-station-lit-walk.md](../02_Analysis/03_User_Stories/US-F-17a_staffed-station-lit-walk.md): a story this specification serves.
- [US-F-20_step-free-lit-way.md](../02_Analysis/03_User_Stories/US-F-20_step-free-lit-way.md): a story this specification serves.
- [F-15_parking-bike-space-station.md](../02_Analysis/02_Features/F-15_parking-bike-space-station.md): the feature behind story F-15.
- [F-17a_staffed-station-lit-walk.md](../02_Analysis/02_Features/F-17a_staffed-station-lit-walk.md): the feature behind story F-17a.
- [F-20_step-free-lit-way.md](../02_Analysis/02_Features/F-20_step-free-lit-way.md): the feature behind story F-20.
- [HMW-18_spare-woman-driving-station-before.md](../03_Ideation/01_How_Might_We/HMW-18_spare-woman-driving-station-before.md): the problem question written from a story it serves.
- [HMW-20_help-daily-traveller-british-city.md](../03_Ideation/01_How_Might_We/HMW-20_help-daily-traveller-british-city.md): the problem question written from a story it serves.
- [HMW-23_spare-wheelchair-user-before-getting.md](../03_Ideation/01_How_Might_We/HMW-23_spare-wheelchair-user-before-getting.md): the problem question written from a story it serves.
- [SPEC-00_overview.md](SPEC-00_overview.md): the overview that lists this specification.
- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation it stands on.
- [SPEC-02_the-commuters-set-up.md](SPEC-02_the-commuters-set-up.md): provides elements this specification depends on.
- [SPEC-05_todays-trip-at-a-glance.md](SPEC-05_todays-trip-at-a-glance.md): provides elements this specification depends on.
- [OQ-28_source-of-the-state-of-facilities.md](01_Open_Questions/OQ-28_source-of-the-state-of-facilities.md): an open question this specification raises.
