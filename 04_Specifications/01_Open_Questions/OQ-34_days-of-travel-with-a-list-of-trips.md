---
source: Claude
date: 2026-11-18 23:19
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, desk, questions, planning, usual-trip]
related: [00_Open_questions_index.md, SPEC-17_trips.md, OQ-05_more-than-one-usual-trip.md, US-F-03_early-warning-usual-trip.md, US-F-12_ticket-fits-days-travelled.md]
---

# OQ-34: Days of travel with a list of trips

One open question of the specifications, listed in [00_Open_questions_index.md](00_Open_questions_index.md).

| | |
| --- | --- |
| **Question** | Trips have no days of their own: which days do the alerts and the fare count as days of travel? The days set in the initial set-up for every trip, the days the commuter followed a trip, or days set per trip after all? |
| **Raised in** | [SPEC-17](../SPEC-17_trips.md) |
| **Marker** | [not traced] |
| **Research support** | ⚠ Not supported by the research: the stories name days of travel for one trip only |
| **State** | open |
| **Decision** | none yet |
| **Decided on** | none yet |

## Why it is open

On 2026-11-18 Marco chose a free list of trips with no days of their own ([OQ-05](OQ-05_more-than-one-usual-trip.md)). The alerts ([SPEC-03](../SPEC-03_alerts-on-the-usual-trip.md)) speak only on days of travel, and the fare ([SPEC-11](../SPEC-11_the-fare-that-fits-the-days.md)) counts the days travelled; both were written for one usual trip with its days.

## Chain to the research

| Step | Item | What it says |
| --- | --- | --- |
| Specification | [SPEC-17](../SPEC-17_trips.md) | Trips |
| User story | [F-03](../../02_Analysis/03_User_Stories/US-F-03_early-warning-usual-trip.md) | The single-line commuter, "on one of his three office days", wants to be told of a change on his usual train |
| User story | [F-12](../../02_Analysis/03_User_Stories/US-F-12_ticket-fits-days-travelled.md) | The Como commuter wants the fare that fits the days he actually travels |
| Decision | [OQ-05](OQ-05_more-than-one-usual-trip.md) | A free list of trips, with no days of their own |

## What the research says

Nothing about days for more than one trip: the stories with days of travel (F-03, F-12) each have one trip.

## Connections

- [SPEC-17_trips.md](../SPEC-17_trips.md): the specification that raises this question.
- [OQ-05_more-than-one-usual-trip.md](OQ-05_more-than-one-usual-trip.md): the decision that opened it.
- [US-F-03_early-warning-usual-trip.md](../../02_Analysis/03_User_Stories/US-F-03_early-warning-usual-trip.md), [US-F-12_ticket-fits-days-travelled.md](../../02_Analysis/03_User_Stories/US-F-12_ticket-fits-days-travelled.md): the stories with days of travel.
