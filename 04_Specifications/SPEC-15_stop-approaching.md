---
source: Claude
date: 2026-11-16 18:41
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, information, first-last-mile]
related: [US-F-23_stop-approaching.md, F-23_stop-approaching.md, HMW-26_let-young-commuter-madrid-bus.md, SPEC-00_overview.md, SPEC-01_foundation.md, SPEC-05_todays-trip-at-a-glance.md, SPEC-03_real-state-of-the-run.md, SPEC-02_the-commuters-set-up.md]
---

# SPEC-15: The Stop Approaching

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

One row per story this specification serves, copied as written.

| Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- |
| [F-23](../02_Analysis/03_User_Stories/US-F-23_stop-approaching.md) | a young commuter in Madrid (desk persona) | As a young commuter in Madrid (desk persona), on a bus, two stops before her own, I want to be told when my stop is approaching, so that she can sit without thinking about the stop and not miss it if she falls asleep. | All of it |

**Why these stories belong together:** One story.

## Traceability

| | |
| --- | --- |
| **Features** | [F-23](../02_Analysis/02_Features/F-23_stop-approaching.md) |
| **Touchpoints** | [TP-074](../02_Analysis/01_Touchpoints/TP-074_staying-alert-so-miss.md) |
| **Problem questions** | [HMW-26](../03_Ideation/01_How_Might_We/HMW-26_let-young-commuter-madrid-bus.md) |
| **Concepts** | [C26-01](../03_Ideation/02_Ideas/C26-01_nudge-near-stop.md), [C26-02](../03_Ideation/02_Ideas/C26-02_something-she-wears.md), [C26-03](../03_Ideation/02_Ideas/C26-03_driver-s-call.md), [C26-04](../03_Ideation/02_Ideas/C26-04_stops-announced-every-bus.md), [C26-05](../03_Ideation/02_Ideas/C26-05_light-before-stop.md), [C26-06](../03_Ideation/02_Ideas/C26-06_neighbour-wakes.md), [C26-07](../03_Ideation/02_Ideas/C26-07_stop-set-boarding.md), [C26-08](../03_Ideation/02_Ideas/C26-08_alarm-time.md), [C26-09](../03_Ideation/02_Ideas/C26-09_stop-terminus.md), [C26-10](../03_Ideation/02_Ideas/C26-10_get-off-now.md), [C26-11](../03_Ideation/02_Ideas/C26-11_stops-left.md), [C26-12](../03_Ideation/02_Ideas/C26-12_free-ride-back.md) |
| **Families** | [FAM-01](../03_Ideation/02_Ideas/FAM-01_told-where-they.md) Told where they are, [FAM-08](../03_Ideation/02_Ideas/FAM-08_one-answer-data.md) One answer, not data, [FAM-10](../03_Ideation/02_Ideas/FAM-10_lies-ahead-known-beforehand.md) What lies ahead, known beforehand, [FAM-11](../03_Ideation/02_Ideas/FAM-11_place-shows.md) The place shows it, [FAM-12](../03_Ideation/02_Ideas/FAM-12_person-spot.md) A person on the spot, [FAM-15](../03_Ideation/02_Ideas/FAM-15_knows-traveller.md) It knows the traveller, [FAM-16](../03_Ideation/02_Ideas/FAM-16_settled-beforehand.md) Settled beforehand, [FAM-22](../03_Ideation/02_Ideas/FAM-22_money-covers-failure.md) Money covers the failure, [FAM-26](../03_Ideation/02_Ideas/FAM-26_travellers-carry-together.md) Travellers carry it together, [FAM-27](../03_Ideation/02_Ideas/FAM-27_change-trip-habit.md) Change the trip or the habit |
| **Stages covered** | main leg |
| **Marks** | FAM-01 3 · 1 · 3; FAM-08 3 · 1 · 3; FAM-10 3 · 1 · 3; FAM-11 2 · 1 · 3; FAM-12 2 · 1 · 3; FAM-15 2 · 3 · 2; FAM-16 2 · 3 · 2; FAM-22 1 · 1 · 1; FAM-26 1 · 2 · 3; FAM-27 1 · 1 · 0 (valuable · feasible · relevant, by family, from [04_Ideas_prioritization.md](../03_Ideation/02_Ideas/04_Ideas_prioritization.md)) |
| **Foundation** | Principle 3; Channels |

Concepts and families are references only: the behaviour below comes from the stories.

## Description

Tells the commuter when their stop is approaching, so they can travel without watching for it.

## Operating logic

- **Starts when:** The commuter is on a run whose stop to get off is known.
- **Needs to know:** The stop to get off: from the trip of the day (SPEC-05) or set by the commuter on boarding (here); where the vehicle is (SPEC-03) or the commuter's position if allowed (SPEC-02); the channels (SPEC-02).
- **Rules:**
  1. Let the commuter set the stop to get off when boarding, if the trip of the day does not give it.
  2. Tell the commuter, in a way that reaches them without looking, when the stop is approaching [not traced: how far before].
  3. Repeat if the commuter does not respond, until the stop [not traced: how often].
- **States:** `watching` → `told` → `arrived`.
- **The user receives:** A message on the chosen channel, in a form that reaches them without looking [technology choice open].
- **Depends on:** Trip of the day ([SPEC-05](SPEC-05_todays-trip-at-a-glance.md)); Real state of a run ([SPEC-03](SPEC-03_real-state-of-the-run.md)); Consent to use position ([SPEC-02](SPEC-02_the-commuters-set-up.md)); Channels ([SPEC-02](SPEC-02_the-commuters-set-up.md))
- **Provides:** none

## When things go wrong

- **Neither the vehicle's position nor the commuter's is known:** the product says it cannot warn on this run.
- **No stop set:** nothing is watched; the commuter is asked to set it.

## Out of scope

Anything after getting off (SPEC-14).

## Acceptance criteria

- **Given** a stop set on boarding **when** the bus is two stops before it **then** the commuter is told.
- **Given** no position available **when** the commuter sets a stop **then** they are told the product cannot warn on this run.

## Open questions

- How far before the stop, and how many repeats [not traced].
- What reaches a commuter who is asleep [technology choice open].

## Connections

- [US-F-23_stop-approaching.md](../02_Analysis/03_User_Stories/US-F-23_stop-approaching.md): a story this specification serves.
- [F-23_stop-approaching.md](../02_Analysis/02_Features/F-23_stop-approaching.md): the feature behind story F-23.
- [HMW-26_let-young-commuter-madrid-bus.md](../03_Ideation/01_How_Might_We/HMW-26_let-young-commuter-madrid-bus.md): the problem question written from a story it serves.
- [SPEC-00_overview.md](SPEC-00_overview.md): the overview that lists this specification.
- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation it stands on.
- [SPEC-05_todays-trip-at-a-glance.md](SPEC-05_todays-trip-at-a-glance.md): provides elements this specification depends on.
- [SPEC-03_real-state-of-the-run.md](SPEC-03_real-state-of-the-run.md): provides elements this specification depends on.
- [SPEC-02_the-commuters-set-up.md](SPEC-02_the-commuters-set-up.md): provides elements this specification depends on.
