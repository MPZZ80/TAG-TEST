---
source: Claude
date: 2026-11-16 18:41
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, tools, first-last-mile]
related: [US-F-18_parking-works-paying-leaving.md, US-F-21_where-shared-vehicle-can.md, F-18_parking-works-paying-leaving.md, F-21_where-shared-vehicle-can.md, HMW-21_keep-italian-driver-leaving-car.md, HMW-24_keep-charge-running-shared-bike.md, SPEC-00_overview.md, SPEC-01_foundation.md, SPEC-02_the-commuters-set-up.md]
---

# SPEC-17: Sessions Still Running

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

One row per story this specification serves, copied as written.

| Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- |
| [F-18](../02_Analysis/03_User_Stories/US-F-18_parking-works-paying-leaving.md) | an Italian driver (desk persona) | As an Italian driver (desk persona), leaving the car for the day on street parking paid in an app, I want to pay, end and leave the parking without delay and be reminded that a session is still running, so that I do not pay for eight or ten hours by forgetting it. | All of it |
| [F-21](../02_Analysis/03_User_Stories/US-F-21_where-shared-vehicle-can.md) | a shared-bike rider in South Korea (desk persona) | As a shared-bike rider in South Korea (desk persona), going home from work, at the end of the ride when the return zone is far or the position is wrong, I want to see where the shared bike can be returned near the destination, so that the charge does not keep running after the ride. | All of it |

**Why these stories belong together:** Both stories are a paid session at the end of a leg (parking, a shared bike) that keeps charging if it is not ended right.

## Traceability

| | |
| --- | --- |
| **Features** | [F-18](../02_Analysis/02_Features/F-18_parking-works-paying-leaving.md), [F-21](../02_Analysis/02_Features/F-21_where-shared-vehicle-can.md) |
| **Touchpoints** | [TP-058](../02_Analysis/01_Touchpoints/TP-058_leaving-monthly-car-park.md), [TP-085](../02_Analysis/01_Touchpoints/TP-085_paying-parking-app-destination.md), [TP-086](../02_Analysis/01_Touchpoints/TP-086_returning-shared-bike-scooter.md) |
| **Problem questions** | [HMW-21](../03_Ideation/01_How_Might_We/HMW-21_keep-italian-driver-leaving-car.md), [HMW-24](../03_Ideation/01_How_Might_We/HMW-24_keep-charge-running-shared-bike.md) |
| **Concepts** | [C21-01](../03_Ideation/02_Ideas/C21-01_still-running-reminder.md), [C21-02](../03_Ideation/02_Ideas/C21-02_told-once-away.md), [C21-03](../03_Ideation/02_Ideas/C21-03_ends-itself.md), [C21-04](../03_Ideation/02_Ideas/C21-04_end-set-start.md), [C21-05](../03_Ideation/02_Ideas/C21-05_usual-stay-known.md), [C21-06](../03_Ideation/02_Ideas/C21-06_daily-cap.md), [C21-07](../03_Ideation/02_Ideas/C21-07_forgotten-session-refund.md), [C21-08](../03_Ideation/02_Ideas/C21-08_charge-outside-paid-hours.md), [C21-09](../03_Ideation/02_Ideas/C21-09_family-sees.md), [C21-10](../03_Ideation/02_Ideas/C21-10_running-total.md), [C21-11](../03_Ideation/02_Ideas/C21-11_monthly-flat-rate.md), [C21-12](../03_Ideation/02_Ideas/C21-12_pay-way.md), [C24-01](../03_Ideation/02_Ideas/C24-01_zones-shown.md), [C24-02](../03_Ideation/02_Ideas/C24-02_checked-before-setting-off.md), [C24-03](../03_Ideation/02_Ideas/C24-03_more-return-zones.md), [C24-04](../03_Ideation/02_Ideas/C24-04_return-near-enough.md), [C24-05](../03_Ideation/02_Ideas/C24-05_charge-stops-trying.md), [C24-06](../03_Ideation/02_Ideas/C24-06_refund-position-error.md), [C24-07](../03_Ideation/02_Ideas/C24-07_human-confirmation.md), [C24-08](../03_Ideation/02_Ideas/C24-08_another-rider-confirms.md), [C24-09](../03_Ideation/02_Ideas/C24-09_nearest-works.md), [C24-10](../03_Ideation/02_Ideas/C24-10_cap-disputed-charges.md), [C24-11](../03_Ideation/02_Ideas/C24-11_another-way-home.md), [C24-12](../03_Ideation/02_Ideas/C24-12_told-while-riding.md) |
| **Families** | [FAM-01](../03_Ideation/02_Ideas/FAM-01_told-where-they.md) Told where they are, [FAM-03](../03_Ideation/02_Ideas/FAM-03_travellers-report.md) Travellers report, [FAM-08](../03_Ideation/02_Ideas/FAM-08_one-answer-data.md) One answer, not data, [FAM-10](../03_Ideation/02_Ideas/FAM-10_lies-ahead-known-beforehand.md) What lies ahead, known beforehand, [FAM-12](../03_Ideation/02_Ideas/FAM-12_person-spot.md) A person on the spot, [FAM-13](../03_Ideation/02_Ideas/FAM-13_those-depending-them-told.md) Those depending on them are told, [FAM-14](../03_Ideation/02_Ideas/FAM-14_step-done-them.md) The step done for them, [FAM-15](../03_Ideation/02_Ideas/FAM-15_knows-traveller.md) It knows the traveller, [FAM-16](../03_Ideation/02_Ideas/FAM-16_settled-beforehand.md) Settled beforehand, [FAM-21](../03_Ideation/02_Ideas/FAM-21_prices-tickets-fit-real.md) Prices and tickets that fit the real use, [FAM-22](../03_Ideation/02_Ideas/FAM-22_money-covers-failure.md) Money covers the failure, [FAM-24](../03_Ideation/02_Ideas/FAM-24_more-different-service.md) More or different service, [FAM-25](../03_Ideation/02_Ideas/FAM-25_rules-rights.md) Rules and rights, [FAM-27](../03_Ideation/02_Ideas/FAM-27_change-trip-habit.md) Change the trip or the habit |
| **Stages covered** | first mile, last mile |
| **Marks** | FAM-01 3 · 1 · 3; FAM-03 2 · 2 · 3; FAM-08 3 · 1 · 3; FAM-10 3 · 1 · 3; FAM-12 2 · 1 · 3; FAM-13 3 · 1 · 3; FAM-14 3 · 1 · 3; FAM-15 2 · 3 · 2; FAM-16 2 · 3 · 2; FAM-21 2 · 1 · 1; FAM-22 1 · 1 · 1; FAM-24 2 · 1 · 1; FAM-25 2 · 1 · 1; FAM-27 1 · 1 · 0 (valuable · feasible · relevant, by family, from [04_Ideas_prioritization.md](../03_Ideation/02_Ideas/04_Ideas_prioritization.md)) |
| **Foundation** | Principle 3; Channels |

Concepts and families are references only: the behaviour below comes from the stories.

## Description

Lets the commuter pay, end and leave a parking session without delay and reminds them that a session is still running; and shows where a shared bike or scooter can be returned near the destination.

## Operating logic

- **Starts when:** The commuter starts a parking session or a shared ride, or ends a leg with one running.
- **Needs to know:** The session: started here, or entered by the commuter [technology choice open]; return zones of the shared vehicle (third party); where the commuter is, if allowed (SPEC-02); the channels (SPEC-02).
- **Rules:**
  1. Let the commuter start, pay and end a parking session in one step.
  2. When a session is still running after the commuter has left the place, remind them [not traced: after how long].
  3. Near the end of a shared ride, show where the vehicle can be returned near the destination.
  4. When the return position is wrong, say so before the commuter leaves the vehicle.
- **States:** Session: `running` → `ended`.
- **The user receives:** A message on the chosen channel when a session is still running; inside the product, the return zones.
- **Depends on:** Consent to use position ([SPEC-02](SPEC-02_the-commuters-set-up.md)); Channels ([SPEC-02](SPEC-02_the-commuters-set-up.md))
- **Provides:** none

## When things go wrong

- **Position not allowed:** no reminder on leaving; a reminder at a time the commuter sets instead.
- **Return zones unknown:** the product says so.
- **A session cannot be ended:** the commuter is told, with the time it is still charging.

## Out of scope

Finding a parking space before leaving (SPEC-14).

## Acceptance criteria

- **Given** a parking session still running **when** the commuter has left the car **then** they are reminded.
- **Given** a shared ride near the destination **when** the commuter looks **then** they see where it can be returned.

## Open questions

- Ending a session by itself [technology choice open].
- The reminder interval [not traced].

## Connections

- [US-F-18_parking-works-paying-leaving.md](../02_Analysis/03_User_Stories/US-F-18_parking-works-paying-leaving.md): a story this specification serves.
- [US-F-21_where-shared-vehicle-can.md](../02_Analysis/03_User_Stories/US-F-21_where-shared-vehicle-can.md): a story this specification serves.
- [F-18_parking-works-paying-leaving.md](../02_Analysis/02_Features/F-18_parking-works-paying-leaving.md): the feature behind story F-18.
- [F-21_where-shared-vehicle-can.md](../02_Analysis/02_Features/F-21_where-shared-vehicle-can.md): the feature behind story F-21.
- [HMW-21_keep-italian-driver-leaving-car.md](../03_Ideation/01_How_Might_We/HMW-21_keep-italian-driver-leaving-car.md): the problem question written from a story it serves.
- [HMW-24_keep-charge-running-shared-bike.md](../03_Ideation/01_How_Might_We/HMW-24_keep-charge-running-shared-bike.md): the problem question written from a story it serves.
- [SPEC-00_overview.md](SPEC-00_overview.md): the overview that lists this specification.
- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation it stands on.
- [SPEC-02_the-commuters-set-up.md](SPEC-02_the-commuters-set-up.md): provides elements this specification depends on.
