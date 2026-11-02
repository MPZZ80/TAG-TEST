---
source: Claude
date: 2026-11-02 23:42
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, information, first-last-mile]
related: [SPEC-01_foundation.md, SPEC-02_real-state-of-the-run.md, 04_Generated_User_Stories.md, 06_Chosen_concept.md]
---

# SPEC-15: The Stop Approaching

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

| Priority | Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- | --- |
| concept | [F-23](../02_Analysis/04_Generated_User_Stories.md) | a young commuter in Madrid (desk persona) | As a young commuter in Madrid (desk persona), on a bus, two stops before her own, I want to be told when my stop is approaching, so that she can sit without thinking about the stop and not miss it if she falls asleep. | All of it |

## Traceability

| | |
| --- | --- |
| **Priority** | concept |
| **Features** | [F-23](../02_Analysis/03_Generated_Features.md) |
| **Touchpoints** | [TP-074](../02_Analysis/02_Generated_Touchpoints.md) |
| **Problem questions** | [HMW-26](../03_Ideation/01_How_might_we.md) |
| **Concepts** | [C26-01](../03_Ideation/03_AI_Ideas.md), [C26-02](../03_Ideation/03_AI_Ideas.md), [C26-07](../03_Ideation/03_AI_Ideas.md), [C26-08](../03_Ideation/03_AI_Ideas.md), [C26-10](../03_Ideation/03_AI_Ideas.md) |
| **Families** | [FAM-01](../03_Ideation/04_Human+AI_Ideas.md), [FAM-15](../03_Ideation/04_Human+AI_Ideas.md), [FAM-16](../03_Ideation/04_Human+AI_Ideas.md), [FAM-08](../03_Ideation/04_Human+AI_Ideas.md) |
| **Stages covered** | main leg, last mile |
| **[Marks](../03_Ideation/05_Ideas_prioritization.md)** | C26-01 3·1·3, C26-02 3·1·3, C26-07 3·3·2, C26-08 2·3·2, C26-10 2·1·3 |
| **Foundation** | Principles 4, 6; The things it deals with (trip, run, leg); Channels (something worn or carried); Rules that hold everywhere (consent to share position) |

## Description

The commuter's stop is known when she boards (C26-07). The product follows the run and tells her two stops before her own (C26-01), then "get off now" at the stop before (C26-10), through something she wears or carries so that it reaches her even asleep (C26-02). When her position is not known, a time she set beforehand wakes her (C26-08). A young commuter in Madrid: "I'd rather sit on the bus than have to be thinking two stops until I have to get off. If I fall asleep I'll miss my stop".

## Operating logic

- **Starts when:** the commuter boards a run of a trip whose stop is known, or sets her stop as she gets on.
- **Needs to know:** her stop; where the run is (from her shared position, or the run's live position, SPEC-02); a back-up time she set.
- **Rules:**
  1. Follow the run's progress towards her stop.
  2. Two stops before hers, tell her (C26-01) [not traced: whether two is fixed or set by her].
  3. At the stop before, tell her "get off at the next stop" (C26-10).
  4. Use the channel that reaches her without her looking (C26-02), and repeat until she acknowledges or the stop is passed [not traced: how often].
  5. If the run's position is unknown, use the back-up time (C26-08).
  6. If she passes her stop, tell her at once [not traced: what to offer then].
- **States:** `following` → `approaching` (two stops before) → `next stop` → `arrived` or `passed`.
- **The commuter receives:** two messages, two stops before and at the stop before, on the channel that reaches her.

## When things go wrong

- **No position for the run and no back-up time:** tell her at boarding that the product cannot follow the run.
- **The run skips her stop or is diverted:** tell her as soon as it is known.
- **She does not acknowledge:** repeat on the set rhythm until the stop is passed.

## Out of scope

- Announcements or lights on board (C26-04, C26-05, FAM-11), the driver calling the stop (C26-03, FAM-12, background), a neighbour waking her (C26-06, [risky]), a free ride back (C26-12, FAM-22, background).

## Acceptance criteria

- **Given** her stop set at boarding **when** the bus is two stops away **then** she is told.
- **Given** the stop before hers **when** the bus leaves it **then** she is told to get off at the next stop.
- **Given** the run's position is unknown **when** the back-up time comes **then** she is told.
- **Given** she does not acknowledge **when** the stop is still ahead **then** the message is repeated.

## Open questions

- The channel that reaches her asleep [technology choice open].
- Whether "two stops" is fixed or set by the commuter; how often to repeat; what to offer when the stop is passed [not traced].

## Connections

- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation this specification builds on: Principles 4, 6; The things it deals with (trip, run, leg); Channels (something worn or carried); Rules that hold everywhere (consent to share position).
- [SPEC-02_real-state-of-the-run.md](SPEC-02_real-state-of-the-run.md): named in this specification (Operating logic), where the two behaviours meet.
- [04_Generated_User_Stories.md](../02_Analysis/04_Generated_User_Stories.md): the user stories this specification serves: F-23.
- [06_Chosen_concept.md](../03_Ideation/06_Chosen_concept.md): the chosen concept; this specification draws on its families FAM-01, FAM-15, FAM-16, FAM-08.
