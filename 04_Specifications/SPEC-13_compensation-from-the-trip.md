---
source: Claude
date: 2026-11-16 18:41
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, disruption, tools, refunds]
related: [US-F-16_compensation-claim-started-delayed.md, F-16_compensation-claim-started-delayed.md, HMW-19_help-british-traveller-after-delay.md, SPEC-00_overview.md, SPEC-01_foundation.md, SPEC-05_todays-trip-at-a-glance.md, SPEC-03_real-state-of-the-run.md, SPEC-11_tickets-that-work-when-needed.md]
---

# SPEC-13: Compensation From the Trip

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

One row per story this specification serves, copied as written.

| Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- |
| [F-16](../02_Analysis/03_User_Stories/US-F-16_compensation-claim-started-delayed.md) | a British traveller (desk persona) | As a British traveller (desk persona), after a delay on a ticket bought through a ticket seller, I want to start the compensation claim from the delayed trip itself, wherever the ticket was bought, so that the compensation does not depend on going to the train company. | All of it |

**Why these stories belong together:** One story.

## Traceability

| | |
| --- | --- |
| **Features** | [F-16](../02_Analysis/02_Features/F-16_compensation-claim-started-delayed.md) |
| **Touchpoints** | [TP-104](../02_Analysis/01_Touchpoints/TP-104_claiming-compensation-after-delay.md), [TP-105](../02_Analysis/01_Touchpoints/TP-105_complaining-after-poor-experience.md) |
| **Problem questions** | [HMW-19](../03_Ideation/01_How_Might_We/HMW-19_help-british-traveller-after-delay.md) |
| **Concepts** | [C19-01](../03_Ideation/02_Ideas/C19-01_seller-claims.md), [C19-02](../03_Ideation/02_Ideas/C19-02_paid-claim.md), [C19-03](../03_Ideation/02_Ideas/C19-03_claim-agent.md), [C19-04](../03_Ideation/02_Ideas/C19-04_proof-ready.md), [C19-05](../03_Ideation/02_Ideas/C19-05_owed.md), [C19-06](../03_Ideation/02_Ideas/C19-06_seller-s-duty.md), [C19-07](../03_Ideation/02_Ideas/C19-07_one-claim-point.md), [C19-08](../03_Ideation/02_Ideas/C19-08_credit-once.md), [C19-09](../03_Ideation/02_Ideas/C19-09_cover-bought-ticket.md), [C19-10](../03_Ideation/02_Ideas/C19-10_logged-board.md), [C19-11](../03_Ideation/02_Ideas/C19-11_claim-path-known-purchase.md), [C19-12](../03_Ideation/02_Ideas/C19-12_claim-together.md) |
| **Families** | [FAM-07](../03_Ideation/02_Ideas/FAM-07_told-sooner.md) Told sooner, [FAM-08](../03_Ideation/02_Ideas/FAM-08_one-answer-data.md) One answer, not data, [FAM-14](../03_Ideation/02_Ideas/FAM-14_step-done-them.md) The step done for them, [FAM-22](../03_Ideation/02_Ideas/FAM-22_money-covers-failure.md) Money covers the failure, [FAM-25](../03_Ideation/02_Ideas/FAM-25_rules-rights.md) Rules and rights, [FAM-26](../03_Ideation/02_Ideas/FAM-26_travellers-carry-together.md) Travellers carry it together |
| **Stages covered** | disruption |
| **Marks** | FAM-07 2 · 1 · 2; FAM-08 3 · 1 · 3; FAM-14 3 · 1 · 3; FAM-22 1 · 1 · 1; FAM-25 2 · 1 · 1; FAM-26 1 · 2 · 3 (valuable · feasible · relevant, by family, from [04_Ideas_prioritization.md](../03_Ideation/02_Ideas/04_Ideas_prioritization.md)) |
| **Foundation** | Sources of information; The things it deals with (trip, ticket) |

Concepts and families are references only: the behaviour below comes from the stories.

## Description

Lets the commuter start a compensation claim or a complaint from the delayed trip itself, wherever the ticket was bought.

## Operating logic

- **Starts when:** A trip of the commuter arrives late enough to give a right to compensation, or the commuter opens a past trip.
- **Needs to know:** The trip and its real delay (SPEC-05, SPEC-03); the ticket used and its seller (SPEC-11); the compensation rules of the operator.
- **Rules:**
  1. After a delayed trip, tell the commuter whether the delay may give compensation under the operator's rules.
  2. Start the claim from the trip, with the trip, the delay and the ticket filled in.
  3. Send the claim to whoever handles it, whether the ticket was bought from the operator or a seller [technology choice open].
  4. Show the state of the claim until it is answered.
- **States:** Claim: `possible` → `started` → `sent` → `answered` or `refused`.
- **The user receives:** Inside the product: whether a claim is possible, and its state.
- **Depends on:** Trip of the day ([SPEC-05](SPEC-05_todays-trip-at-a-glance.md)); Real state of a run ([SPEC-03](SPEC-03_real-state-of-the-run.md)); Tickets held ([SPEC-11](SPEC-11_tickets-that-work-when-needed.md))
- **Provides:** none

## When things go wrong

- **No ticket entered for the trip:** the claim cannot be filled; the commuter is led to SPEC-11 to enter it.
- **The real delay is unknown:** the commuter enters it, marked as their own.
- **The claim cannot be sent:** it is kept and the commuter is told.

## Out of scope

Refunds for tickets not used (SPEC-11).

## Acceptance criteria

- **Given** a trip 40 minutes late on a ticket bought from a seller **when** the commuter opens it **then** they can start the claim with the trip, delay and ticket filled in.
- **Given** a sent claim **when** the commuter looks **then** they see its state.

## Open questions

- Handing a claim to the operator when the ticket came from a seller [technology choice open].

## Connections

- [US-F-16_compensation-claim-started-delayed.md](../02_Analysis/03_User_Stories/US-F-16_compensation-claim-started-delayed.md): a story this specification serves.
- [F-16_compensation-claim-started-delayed.md](../02_Analysis/02_Features/F-16_compensation-claim-started-delayed.md): the feature behind story F-16.
- [HMW-19_help-british-traveller-after-delay.md](../03_Ideation/01_How_Might_We/HMW-19_help-british-traveller-after-delay.md): the problem question written from a story it serves.
- [SPEC-00_overview.md](SPEC-00_overview.md): the overview that lists this specification.
- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation it stands on.
- [SPEC-05_todays-trip-at-a-glance.md](SPEC-05_todays-trip-at-a-glance.md): provides elements this specification depends on.
- [SPEC-03_real-state-of-the-run.md](SPEC-03_real-state-of-the-run.md): provides elements this specification depends on.
- [SPEC-11_tickets-that-work-when-needed.md](SPEC-11_tickets-that-work-when-needed.md): provides elements this specification depends on.
