---
source: Claude
date: 2026-11-18 19:33
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, planning, why-now, hybrid-work]
related: [US-F-12_ticket-fits-days-travelled.md, F-12_ticket-fits-days-travelled.md, HMW-15_keep-como-commuter-whose-office.md, SPEC-00_overview.md, SPEC-01_foundation.md, SPEC-04_todays-trip-at-a-glance.md, SPEC-10_tickets-that-work-when-needed.md, OQ-25_period-over-which-days-are-counted.md, OQ-26_telling-first-that-the-fare-no-longer-fits.md]
---

# SPEC-11: The Fare That Fits the Days

Use this file as a prompt: it describes one behaviour to build within the architecture of the foundation: a frontend-only prototype made of web components, with all data from mock datasets in `data/`.

## User stories served

One row per story this specification serves, copied as written.

| Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- |
| [F-12](../02_Analysis/03_User_Stories/US-F-12_ticket-fits-days-travelled.md) | the Como commuter | As the Como commuter, when his office days fell to about one a week and the pass still cost 70 euro a month, I want to know which pass, carnet or single tickets cost least for the days I actually travel, so that he does not pay for a pass meant for daily travel. | All of it |

**Why these stories belong together:** One story.

## Traceability

| | |
| --- | --- |
| **Features** | [F-12](../02_Analysis/02_Features/F-12_ticket-fits-days-travelled.md) |
| **Touchpoints** | [TP-002](../02_Analysis/01_Touchpoints/TP-002_deciding-days-go-office.md), [TP-003](../02_Analysis/01_Touchpoints/TP-003_working-home-some-days.md), [TP-007](../02_Analysis/01_Touchpoints/TP-007_choosing-pass-carnet-single.md) |
| **Problem questions** | [HMW-15](../03_Ideation/01_How_Might_We/HMW-15_keep-como-commuter-whose-office.md) |
| **Concepts** | [C15-01](../03_Ideation/02_Ideas/C15-01_cheapest-days.md), [C15-02](../03_Ideation/02_Ideas/C15-02_told-stops-paying.md), [C15-03](../03_Ideation/02_Ideas/C15-03_pay-day.md), [C15-04](../03_Ideation/02_Ideas/C15-04_price-cap.md), [C15-05](../03_Ideation/02_Ideas/C15-05_pause-pass.md), [C15-06](../03_Ideation/02_Ideas/C15-06_part-time-pass.md), [C15-07](../03_Ideation/02_Ideas/C15-07_best-price-duty.md), [C15-08](../03_Ideation/02_Ideas/C15-08_pass-shared-colleagues.md), [C15-09](../03_Ideation/02_Ideas/C15-09_employer-pays-day.md), [C15-10](../03_Ideation/02_Ideas/C15-10_count-days.md), [C15-11](../03_Ideation/02_Ideas/C15-11_drop-pass.md), [C15-12](../03_Ideation/02_Ideas/C15-12_others-tallies.md) |
| **Families** | [FAM-03](../03_Ideation/02_Ideas/FAM-03_travellers-report.md) Travellers report, [FAM-08](../03_Ideation/02_Ideas/FAM-08_one-answer-data.md) One answer, not data, [FAM-14](../03_Ideation/02_Ideas/FAM-14_step-done-them.md) The step done for them, [FAM-15](../03_Ideation/02_Ideas/FAM-15_knows-traveller.md) It knows the traveller, [FAM-21](../03_Ideation/02_Ideas/FAM-21_prices-tickets-fit-real.md) Prices and tickets that fit the real use, [FAM-25](../03_Ideation/02_Ideas/FAM-25_rules-rights.md) Rules and rights, [FAM-26](../03_Ideation/02_Ideas/FAM-26_travellers-carry-together.md) Travellers carry it together, [FAM-27](../03_Ideation/02_Ideas/FAM-27_change-trip-habit.md) Change the trip or the habit |
| **Stages covered** | planning |
| **Marks** | FAM-03 2 · 2 · 3; FAM-08 3 · 1 · 3; FAM-14 3 · 1 · 3; FAM-15 2 · 3 · 2; FAM-21 2 · 1 · 1; FAM-25 2 · 1 · 1; FAM-26 1 · 2 · 3; FAM-27 1 · 1 · 0 (valuable · feasible · relevant, by family, from [04_Ideas_prioritization.md](../03_Ideation/02_Ideas/04_Ideas_prioritization.md)) |
| **Foundation** | The things it deals with (ticket); Sources of information (third parties) |

Concepts and families are references only: the behaviour below comes from the stories.

## Description

Tells the commuter which pass, carnet or single tickets cost least for the days they actually travel.

## Operating logic

- **Starts when:** The commuter asks, or the days actually travelled over a period change against the ticket held [not traced: whether the product says so first].
- **Needs to know:** The days actually travelled: the completed trips of the day (SPEC-04) and the days of travel (SPEC-01); the fares for the usual trip (operators); the ticket held (SPEC-10).
- **Rules:**
  1. Count the days actually travelled over a period, from completed trips, or from the days of travel when there are no trips yet.
  2. Compare the cost of a pass, a carnet and single tickets for those days.
  3. Say which costs least, and how much it saves against the ticket held.
  4. Let the commuter correct the count of days.
- **States:** None of its own.
- **The user receives:** Inside the product: the cheapest fare for the days travelled, with the comparison behind it.
- **Depends on:** Trip of the day ([SPEC-04](SPEC-04_todays-trip-at-a-glance.md)); Days of travel ([SPEC-01](SPEC-01_foundation.md), Initial set-up); Tickets held ([SPEC-10](SPEC-10_tickets-that-work-when-needed.md)); Usual trip ([SPEC-01](SPEC-01_foundation.md), Initial set-up)
- **Provides:** none

## Architecture

- **Components:**
  - `<fare-advice>`: the days travelled over the period, the cost of each fare for those days, the cheapest, and the saving against the fare held; reads `fares`, `profile.days`; no events; the costs are worked out in the page from the dataset, or stored in it.
  - `<message-preview>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused, for the message that the fare held no longer fits.
- **Datasets:**
  - `fares` (defined here): `period`, `days_travelled`, `trips_per_day`, `held`, `options[{id, name, kind, price, rides}]`.
  - `profile` (defined in the foundation): `days`.
  - `notifications` (defined in the foundation): a `fare` entry, to be added: the message that the fare held no longer fits.
- **Simulated events:**
  - The message before the fare is renewed: the "Simulate a message" control shows the `fare` entry of `notifications`.

## When things go wrong

- **No usual trip:** no fare can be compared; the commuter is led to SPEC-01.
- **No trips and no days of travel:** the commuter enters how many days they travel.
- **A fare unknown:** that option is shown as unknown.

## Out of scope

Buying the fare (SPEC-10).

## Acceptance criteria

- **Given** about one office day a week and a monthly pass **when** the commuter asks **then** they see that single tickets or a carnet cost less, and by how much.
- **Given** the commuter corrects the days to three a week **when** the comparison is shown again **then** it uses three days.

## Open questions

Each question has its own file in [01_Open_Questions/](01_Open_Questions/00_Open_questions_index.md), with its chain to the research.

- **[OQ-25](01_Open_Questions/OQ-25_period-over-which-days-are-counted.md)** Over which period are the days actually travelled counted to compare fares: a week, a month, longer? [not traced] Research: partly.
- **[OQ-26](01_Open_Questions/OQ-26_telling-first-that-the-fare-no-longer-fits.md)** Does the product say on its own that the ticket held no longer fits the days travelled, or only when the commuter asks? [not traced] Research: ⚠ not supported.

## Connections

- [US-F-12_ticket-fits-days-travelled.md](../02_Analysis/03_User_Stories/US-F-12_ticket-fits-days-travelled.md): a story this specification serves.
- [F-12_ticket-fits-days-travelled.md](../02_Analysis/02_Features/F-12_ticket-fits-days-travelled.md): the feature behind story F-12.
- [HMW-15_keep-como-commuter-whose-office.md](../03_Ideation/01_How_Might_We/HMW-15_keep-como-commuter-whose-office.md): the problem question written from a story it serves.
- [SPEC-00_overview.md](SPEC-00_overview.md): the overview that lists this specification.
- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation it stands on.
- [SPEC-04_todays-trip-at-a-glance.md](SPEC-04_todays-trip-at-a-glance.md): provides elements this specification depends on.
- [SPEC-10_tickets-that-work-when-needed.md](SPEC-10_tickets-that-work-when-needed.md): provides elements this specification depends on.
- [OQ-25_period-over-which-days-are-counted.md](01_Open_Questions/OQ-25_period-over-which-days-are-counted.md): an open question this specification raises.
- [OQ-26_telling-first-that-the-fare-no-longer-fits.md](01_Open_Questions/OQ-26_telling-first-that-the-fare-no-longer-fits.md): an open question this specification raises.
