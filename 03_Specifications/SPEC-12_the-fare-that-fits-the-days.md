---
source: Claude
date: 2026-11-02 23:38
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, planning, why-now, hybrid-work]
related: [SPEC-01_foundation.md, SPEC-11_tickets-that-work-when-needed.md, 04_Generated_User_Stories.md, 06_Chosen_concept.md]
---

# SPEC-12: The Fare That Fits the Days

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

| Priority | Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- | --- |
| concept | [F-12](../01_Research/06_Analysis/04_Generated_User_Stories.md) | the Como commuter | As the Como commuter, when his office days fell to about one a week and the pass still cost 70 euro a month, I want to know which pass, carnet or single tickets cost least for the days I actually travel, so that he does not pay for a pass meant for daily travel. | All of it |

## Traceability

| | |
| --- | --- |
| **Priority** | concept |
| **Features** | [F-12](../01_Research/06_Analysis/03_Generated_Features.md) |
| **Touchpoints** | [TP-002](../01_Research/06_Analysis/02_Generated_Touchpoints.md), [TP-003](../01_Research/06_Analysis/02_Generated_Touchpoints.md), [TP-007](../01_Research/06_Analysis/02_Generated_Touchpoints.md) |
| **Problem questions** | [HMW-15](../02_Ideation/01_How_might_we.md) |
| **Concepts** | [C15-01](../02_Ideation/03_AI_Ideas.md), [C15-02](../02_Ideation/03_AI_Ideas.md), [C15-10](../02_Ideation/03_AI_Ideas.md), [C15-11](../02_Ideation/03_AI_Ideas.md), [C15-12](../02_Ideation/03_AI_Ideas.md) |
| **Families** | [FAM-08](../02_Ideation/04_Human+AI_Ideas.md), [FAM-15](../02_Ideation/04_Human+AI_Ideas.md), [FAM-27](../02_Ideation/04_Human+AI_Ideas.md), [FAM-03](../02_Ideation/04_Human+AI_Ideas.md) |
| **Stages covered** | planning |
| **[Marks](../02_Ideation/05_Ideas_prioritization.md)** | C15-01 3·3·3, C15-02 3·3·3, C15-10 2·3·2, C15-11 2·3·3, C15-12 2·2·2 |
| **Foundation** | Principles 3, 6; The user (days of travel); The things it deals with (usual trip, trip, ticket) |

## Description

The product counts the days the commuter really travels (C15-10) and says which fare costs least for that pattern: a pass, a carnet or single tickets (C15-01). It tells them when the fare they hold stops paying for their days (C15-02), or when to stop paying for a pass at all (C15-11). It is for the Como commuter, for whom "70 euro al mese per andare una volta a settimana" (70 euro a month to go once a week) "was the opposite of what a pass is for".

## Operating logic

- **Starts when:** the commuter asks which fare fits, or at the end of each month they travelled [not traced: the period], or when their days of travel change.
- **Needs to know:** the days the commuter travelled on their usual trip, from the trips they made through the product or as they enter them (C15-10); the fares for that route: passes, carnets, single tickets, with their prices and conditions; the fare they hold now and its renewal date; what others with the same pattern paid, if reported (C15-12).
- **Rules:**
  1. Count the days travelled over the last weeks [not traced: how many], and the expected days ahead if the commuter states them.
  2. For each fare, work out what it would have cost for those days, and will cost for the days ahead.
  3. Give one answer: the fare that costs least, and how much it saves against the one held (C15-01).
  4. Before the renewal date of the fare held, tell the commuter if another fare would cost less for their days (C15-02), or if no pass pays at all (C15-11).
  5. Show the count of days and the prices the answer rests on, with their dates.
- **States:** none of its own.
- **The commuter receives:** on request, the cheapest fare for their days and the saving; before renewal, a message if the fare held no longer pays.

## When things go wrong

- **Days not known** (trips not made through the product): ask the commuter how many days a week they travel.
- **A fare's price unknown:** that fare is left out of the answer, and the commuter is told.
- **Days vary a lot from week to week:** say so, and show the answer for a low and a high week [not traced].

## Out of scope

- Buying or moving tickets: SPEC-11.
- Part-time passes, pay by the day, price caps, pausing a pass (C15-03 to C15-06, FAM-21, background), a best-price duty (C15-07, FAM-25), an employer paying by the day or a pass shared with colleagues (C15-08, C15-09, [risky]): they need operators, employers or rules to change.

## Acceptance criteria

- **Given** a commuter who travelled 4 days in the last month on a 70 euro monthly pass **when** they ask which fare fits **then** they see the cheapest fare for 4 days, its cost and the saving.
- **Given** the pass renews in 5 days **when** another fare would cost less for the days travelled **then** the commuter is told before renewal.
- **Given** a fare whose price is unknown **when** the answer is given **then** that fare is left out and the commuter is told.

## Open questions

- Over how many weeks the days are counted, and how often the product checks [not traced].
- Whether the product reads the days from the commuter's calendar or work pattern [not traced; technology choice open].
