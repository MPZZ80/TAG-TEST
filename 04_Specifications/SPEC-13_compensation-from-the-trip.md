---
source: Claude
date: 2026-11-02 23:42
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, disruption, tools, refunds]
related: [SPEC-01_foundation.md, SPEC-02_real-state-of-the-run.md, SPEC-11_tickets-that-work-when-needed.md, 04_Generated_User_Stories.md, 06_Chosen_concept.md]
---

# SPEC-13: Compensation Claimed From the Trip

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

| Priority | Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- | --- |
| concept | [F-16](../02_Analysis/04_Generated_User_Stories.md) | a British traveller (desk persona) | As a British traveller (desk persona), after a delay on a ticket bought through a ticket seller, I want to start the compensation claim from the delayed trip itself, wherever the ticket was bought, so that the compensation does not depend on going to the train company. | All of it, up to handing the claim over |

## Traceability

| | |
| --- | --- |
| **Priority** | concept |
| **Features** | [F-16](../02_Analysis/03_Generated_Features.md) |
| **Touchpoints** | [TP-104](../02_Analysis/02_Generated_Touchpoints.md), [TP-105](../02_Analysis/02_Generated_Touchpoints.md) |
| **Problem questions** | [HMW-19](../03_Ideation/01_How_might_we.md) |
| **Concepts** | [C19-05](../03_Ideation/03_AI_Ideas.md), [C19-11](../03_Ideation/03_AI_Ideas.md), [C19-12](../03_Ideation/03_AI_Ideas.md); background: [C19-01](../03_Ideation/03_AI_Ideas.md), [C19-04](../03_Ideation/03_AI_Ideas.md) |
| **Families** | [FAM-08](../03_Ideation/04_Human+AI_Ideas.md), [FAM-07](../03_Ideation/04_Human+AI_Ideas.md), [FAM-26](../03_Ideation/04_Human+AI_Ideas.md); background: [FAM-14](../03_Ideation/04_Human+AI_Ideas.md) |
| **Stages covered** | disruption (after the trip) |
| **[Marks](../03_Ideation/05_Ideas_prioritization.md)** | C19-05 2·1·2, C19-11 1·3·1, C19-12 1·2·2; background C19-01 3·1·3, C19-04 2·3·3 |
| **Foundation** | The things it deals with (trip, run, ticket); States (run, trip); Sources of information; Rules that hold everywhere |

## Description

After a trip with a delay, the product says on arrival what may be owed for it (C19-05) and lets the commuter start the claim from that trip, with the trip, the delay and the ticket already filled in (C19-04, background), wherever the ticket was bought. It is for the British traveller for whom "if train is delayed, you have to claim directly with the train company referencing your trainline tickets .. complete pain".

## Operating logic

- **Starts when:** a trip is `completed` and one of its runs arrived later than the threshold that gives a right to compensation under the operator's rules.
- **Needs to know:** the runs of the trip, their scheduled and real arrivals, with source (SPEC-02); the ticket, its seller and price (SPEC-11); the operator's compensation rules and where claims are made (C19-11).
- **Rules:**
  1. On arrival, compare the real arrival with the threshold in the operator's rules.
  2. If it passes, tell the commuter what may be owed, under which rule, and who handles the claim (C19-05, C19-11).
  3. Offer to start the claim in one step: prepare it with the trip, the runs, the delay with its source, the ticket and its proof of purchase (C19-04).
  4. Hand the prepared claim to whoever handles it, after the commuter's yes [technology choice open].
  5. Show the state of the claim as it is known.
  6. Before purchase, the commuter can see who handles claims for that ticket (C19-11).
- **States:** a claim is `possible` → `prepared` → `sent` → `answered` (paid or refused) or `no answer`.
- **The commuter receives:** on arrival, what may be owed; the prepared claim; its state.

## When things go wrong

- **The real arrival is not known from a confirmed source:** say so; the commuter may still start the claim with the facts known, marked as such.
- **The operator's rules are not known:** say "compensation rules unknown", and show where to claim.
- **The claim cannot be handed over:** the commuter receives everything prepared, to send themselves.
- **No answer from the operator:** `no answer`, with the date sent.

## Out of scope

- The seller claiming for the commuter, payment without a claim, credit at once (C19-01, C19-02, C19-08, FAM-14 and FAM-22, background); a seller's duty or one national claim point (C19-06, C19-07, FAM-25); a claim agent (C19-03, [risky]); the crew logging the delay (C19-10).
- Claiming as a group (C19-12): kept as an open question.

## Acceptance criteria

- **Given** a trip whose train arrived 35 minutes late and an operator rule from 30 minutes **when** the trip ends **then** the commuter is told what may be owed and who handles the claim.
- **Given** the commuter starts the claim **when** it is prepared **then** the trip, the delay with its source and the ticket are filled in.
- **Given** a ticket bought from a seller other than the operator **when** the claim is prepared **then** it is prepared the same way.
- **Given** the claim cannot be handed over **when** the commuter confirms **then** they receive the prepared claim to send themselves.

## Open questions

- Handing a claim over depends on each operator's process [technology choice open].
- Whether travellers on the same delayed train could claim together (C19-12) [not traced].

## Connections

- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation this specification builds on: The things it deals with (trip, run, ticket); States (run, trip); Sources of information; Rules that hold everywhere.
- [SPEC-02_real-state-of-the-run.md](SPEC-02_real-state-of-the-run.md): named in this specification (Operating logic), where the two behaviours meet.
- [SPEC-11_tickets-that-work-when-needed.md](SPEC-11_tickets-that-work-when-needed.md): named in this specification (Operating logic), where the two behaviours meet.
- [04_Generated_User_Stories.md](../02_Analysis/04_Generated_User_Stories.md): the user stories this specification serves: F-16.
- [06_Chosen_concept.md](../03_Ideation/06_Chosen_concept.md): the chosen concept; this specification draws on its families FAM-08, FAM-07, FAM-26, FAM-14.
