---
source: Claude
date: 2026-11-02 21:32
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, tools, first-last-mile]
related: [SPEC-01_foundation.md, SPEC-14_the-station-ahead.md, Generated_User_Stories.md, 06_Chosen_concept.md]
---

# SPEC-17: Sessions Still Running

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

| Priority | Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- | --- |
| concept | [F-18](../../01_Research/Analysis/Generated_User_Stories.md) | an Italian driver (desk persona) | As an Italian driver (desk persona), leaving the car for the day on street parking paid in an app, I want to pay, end and leave the parking without delay and be reminded that a session is still running, so that I do not pay for eight or ten hours by forgetting it. | All of it except the barrier at a car park (see "Out of scope") |
| concept | [F-21](../../01_Research/Analysis/Generated_User_Stories.md) | a shared-bike rider in South Korea (desk persona) | As a shared-bike rider in South Korea (desk persona), going home from work, at the end of the ride when the return zone is far or the position is wrong, I want to see where the shared bike can be returned near the destination, so that the charge does not keep running after the ride. | All of it |

These stories belong together because both are a paid session at the start or end of the trip (street parking, a shared bike) whose charge keeps running until it is ended, and both ask not to pay for time after the need is over.

## Traceability

| | |
| --- | --- |
| **Priority** | concept |
| **Features** | [F-18](../../01_Research/Analysis/Generated_Features.md), [F-21](../../01_Research/Analysis/Generated_Features.md) |
| **Touchpoints** | [TP-058](../../01_Research/Analysis/Generated_Touchpoints.md), [TP-085](../../01_Research/Analysis/Generated_Touchpoints.md), [TP-086](../../01_Research/Analysis/Generated_Touchpoints.md) |
| **Problem questions** | [HMW-21](../01_How_might_we.md), [HMW-24](../01_How_might_we.md) |
| **Concepts** | [C21-01](../03_AI_Ideas.md), [C21-02](../03_AI_Ideas.md), [C21-04](../03_AI_Ideas.md), [C21-05](../03_AI_Ideas.md), [C21-09](../03_AI_Ideas.md), [C24-09](../03_AI_Ideas.md), [C24-12](../03_AI_Ideas.md); background: [C24-01](../03_AI_Ideas.md) |
| **Families** | [FAM-01](../04_Human+AI_Ideas.md), [FAM-16](../04_Human+AI_Ideas.md), [FAM-15](../04_Human+AI_Ideas.md), [FAM-13](../04_Human+AI_Ideas.md), [FAM-08](../04_Human+AI_Ideas.md); background: [FAM-10](../04_Human+AI_Ideas.md) |
| **Stages covered** | first mile, last mile |
| **[Marks](../05_Ideas_prioritization.md)** | C21-01 3·2·3, C21-02 3·2·3, C21-04 3·3·3, C21-05 2·3·2, C21-09 1·2·2, C24-09 3·1·3, C24-12 2·1·3; background C24-01 3·1·3 |
| **Foundation** | Principle 4; The things it deals with (place); Channels; Rules that hold everywhere |

## Description

When the commuter starts a paid session (street parking, a shared bike), the product lets them set when it should end (C21-04), reminds them at intervals that it is still running (C21-01) and when they walk away with it running (C21-02), and lets them end it in one step. For a shared vehicle, near the destination it shows where it can be returned and the nearest return that works (C24-01, background; C24-09), and tells them while riding (C24-12). The Italian driver: "ogni tanto pago per otto, 10 ore perché mi dimentico" (sometimes I pay for eight or 10 hours because I forget).

## Operating logic

- **Starts when:** the commuter starts a session through the product, or tells it a session is running.
- **Needs to know:** the session: where, when it started, its price; the end the commuter set, or their usual stay (C21-05); for a shared vehicle, the return zones and which work; where the commuter is, if they share their position; a contact who may see it (C21-09).
- **Rules:**
  1. At the start, ask when it should end, proposing the usual stay (C21-04, C21-05).
  2. At the end set, end the session if the commuter agreed to that at the start; otherwise remind them.
  3. While running, remind at set intervals (C21-01) [not traced: the interval; the reviewer asked "every hour"].
  4. If the commuter is far from the place with the session running, tell them at once (C21-02).
  5. End the session in one step, from the reminder.
  6. For a shared vehicle: as the commuter nears the destination, show the return zones nearby and name the nearest that works (C24-01, C24-09), and tell them while riding (C24-12).
  7. If a return fails, record the time and place of the attempt and show it to the commuter [not traced: whether the operator accepts it].
- **States:** a session is `running` → `ended`. Sessions are used only here, so they are defined here and not in the foundation.
- **The commuter receives:** reminders while running; a warning when they walk away; return zones near the destination.

## When things go wrong

- **The session cannot be ended** (no signal, the operator does not answer): tell the commuter, record the time they tried.
- **Position wrong:** the commuter can state where they are.
- **No working return zone near the destination:** say so, and name the nearest one that works.
- **The commuter does not respond to reminders:** keep reminding at the interval; do not end without the agreement at start.

## Out of scope

- The barrier at a car park that does not recognise the pass (TP-058): the place, not the product.
- Sessions that end by themselves when the car leaves (C21-03, FAM-14, background), daily caps, refunds, monthly rates (C21-06, C21-07, C21-11, C21-12, FAM-21 and FAM-22, background), more return zones (C24-03, C24-04, FAM-24), charges stopped on trying or refunded (C24-05, C24-06, FAM-22).
- The running total (C21-10): unclassified, not part of the concept.

## Acceptance criteria

- **Given** the commuter starts street parking **when** they set an end at 18:00 **then** at 18:00 the session ends if they agreed, or they are reminded.
- **Given** a session running **when** the commuter is far from the car **then** they are told it is running, and can end it in one step.
- **Given** a shared bike near the destination **when** the nearest return zone is not working **then** the nearest working zone is named.
- **Given** a failed return **when** the commuter tries **then** the time and place of the attempt are recorded and shown.

## Open questions

- The reminder interval; whether ending by itself at the set time needs the operator [not traced; technology choice open].
- Whether a failed return attempt is accepted as an end by operators [not traced].
