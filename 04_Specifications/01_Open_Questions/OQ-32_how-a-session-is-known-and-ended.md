---
source: Claude
date: 2026-11-18 19:55
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, desk, questions, tools, first-last-mile]
related: [00_Open_questions_index.md, SPEC-16_sessions-still-running.md, US-F-18_parking-works-paying-leaving.md, F-18_parking-works-paying-leaving.md, TP-085_paying-parking-app-destination.md, OR-012_apple-app-store_2026_telepass-it.md, US-F-21_where-shared-vehicle-can.md, F-21_where-shared-vehicle-can.md, TP-086_returning-shared-bike-scooter.md, OR-011_apple-app-store_2026_kakao-t-kr.md]
---

# OQ-32: How a running session is known and ended

One open question of the specifications, listed in [00_Open_questions_index.md](00_Open_questions_index.md).

| | |
| --- | --- |
| **Question** | How does the product know that a paid session (parking, a shared vehicle) is running, and can it end the session by itself? |
| **Raised in** | [SPEC-16](../SPEC-16_sessions-still-running.md) |
| **Marker** | [technology choice open] |
| **Research support** | ⚠ Not supported by the research: it shows the situation at most, not the answer |
| **State** | open |
| **Decision** | none yet |
| **Decided on** | none yet |

## Why it is open

SPEC-16 reminds the commuter of a session still running, started in the product or entered by the commuter. Knowing and ending it is a technology choice.

## Chain to the research

From the specification back to the evidence: each story under the specification it feeds, each feature under its story, each touchpoint under the feature that answers it, each quote under the touchpoint that holds it. Quotes are copied from the touchpoint and feature files.

| Step | Item | What it says |
| --- | --- | --- |
| Specification | [SPEC-16](../SPEC-16_sessions-still-running.md) | Sessions Still Running |
| User story | [F-18](../../02_Analysis/03_User_Stories/US-F-18_parking-works-paying-leaving.md) | As an Italian driver (desk persona), leaving the car for the day on street parking paid in an app, I want to pay, end and leave the parking without delay and be reminded that a session is still running, so that I do not pay for eight or ten hours by forgetting it. |
| Feature | [F-18](../../02_Analysis/02_Features/F-18_parking-works-paying-leaving.md) | Parking that works when paying and leaving |
| Touchpoint | [TP-085](../../02_Analysis/01_Touchpoints/TP-085_paying-parking-app-destination.md) | Paying for parking in an app at the destination, and forgetting the running session |
| Source | [OR-012](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-012_apple-app-store_2026_telepass-it.md) | 'ogni tanto pago per otto, 10 ore perche mi dimentico' (sometimes I pay for eight, 10 hours because I forget); 'comune che vai app di parcheggio che trovi' (every town its own parking app) |
| User story | [F-21](../../02_Analysis/03_User_Stories/US-F-21_where-shared-vehicle-can.md) | As a shared-bike rider in South Korea (desk persona), going home from work, at the end of the ride when the return zone is far or the position is wrong, I want to see where the shared bike can be returned near the destination, so that the charge does not keep running after the ride. |
| Feature | [F-21](../../02_Analysis/02_Features/F-21_where-shared-vehicle-can.md) | Where the shared vehicle can be returned |
| Touchpoint | [TP-086](../../02_Analysis/01_Touchpoints/TP-086_returning-shared-bike-scooter.md) | Returning a shared bike or scooter at the end of the trip |
| Source | [OR-011](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-011_apple-app-store_2026_kakao-t-kr.md) | Position errors prevent the return of a shared bike, so the charge keeps running ('20,000 won taken') |

## What the research says

The research shows the cost of a session left running. How a session is known across many apps, and whether it can be ended automatically, is a technology choice it does not cover.

## Connections

- [00_Open_questions_index.md](00_Open_questions_index.md): the list of all the open questions.
- [SPEC-16_sessions-still-running.md](../SPEC-16_sessions-still-running.md): raises this question.
- [US-F-18_parking-works-paying-leaving.md](../../02_Analysis/03_User_Stories/US-F-18_parking-works-paying-leaving.md): a story behind the question.
- [F-18_parking-works-paying-leaving.md](../../02_Analysis/02_Features/F-18_parking-works-paying-leaving.md): the feature behind that story.
- [TP-085_paying-parking-app-destination.md](../../02_Analysis/01_Touchpoints/TP-085_paying-parking-app-destination.md): the moment of the journey the evidence is about.
- [OR-012_apple-app-store_2026_telepass-it.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-012_apple-app-store_2026_telepass-it.md): a source quoted in the chain.
- [US-F-21_where-shared-vehicle-can.md](../../02_Analysis/03_User_Stories/US-F-21_where-shared-vehicle-can.md): a story behind the question.
- [F-21_where-shared-vehicle-can.md](../../02_Analysis/02_Features/F-21_where-shared-vehicle-can.md): the feature behind that story.
- [TP-086_returning-shared-bike-scooter.md](../../02_Analysis/01_Touchpoints/TP-086_returning-shared-bike-scooter.md): the moment of the journey the evidence is about.
- [OR-011_apple-app-store_2026_kakao-t-kr.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-011_apple-app-store_2026_kakao-t-kr.md): a source quoted in the chain.
