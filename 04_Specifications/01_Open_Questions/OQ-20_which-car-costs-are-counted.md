---
source: Claude
date: 2026-11-18 19:25
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, desk, questions, mode-choice, first-last-mile]
related: [00_Open_questions_index.md, US-F-10_car-against-train-office.md, F-10_car-against-train-office.md, TP-010_weighing-car-against-train.md, AP-016_mcilroy_2024_reservation-i-have-that.md, F-15_parking-bike-space-station.md, TP-049_driving-station-parking-near.md, AP-015_mcilroy_2023_this-where-public-transport.md, F-14a_asking-before-rerouting-tolls.md, TP-078_following-navigation-app-changes.md, OR-001_apple-app-store_2026_google-maps-it.md, 04_open_issues.md]
---

# OQ-20: Which car costs are counted

One open question of the specifications, listed in [00_Open_questions_index.md](00_Open_questions_index.md).

| | |
| --- | --- |
| **Question** | Which costs of the car are counted when it is compared with the train: fuel, tolls, parking? |
| **Raised in** | SPEC-09 (deleted on 2026-11-18, to be rewritten) |
| **Marker** | [not traced] |
| **Research support** | Partly supported: the research shows the situation and some signs, not the answer |
| **State** | open |
| **Decision** | none yet |
| **Decided on** | none yet |

## Why it is open

SPEC-09 compares ways by cost. The stories do not say which car costs count.

## Chain to the research

From the specification back to the evidence: each story under the specification it feeds, each feature under its story, each touchpoint under the feature that answers it, each quote under the touchpoint that holds it. Quotes are copied from the touchpoint and feature files.

| Step | Item | What it says |
| --- | --- | --- |
| Specification | SPEC-09 | Every Way Door to Door |
| User story | [F-10](../../02_Analysis/03_User_Stories/US-F-10_car-against-train-office.md) | As the Como commuter, looking at the timetables to see whether he can go back from the car to the train, I want the train and the car compared door to door for a given day and departure, on time, cost and arrival home, so that he can see whether the train still brings him back to Como when the working day ends. |
| Feature | [F-10](../../02_Analysis/02_Features/F-10_car-against-train-office.md) | Car against train for the office day |
| Touchpoint | [TP-010](../../02_Analysis/01_Touchpoints/TP-010_weighing-car-against-train.md) | Weighing car against train on time, cost and the evening after work |
| Source | [AP-016](../../01_Research/03_Desk_Research/Doc_Notes/Academic_Papers/AP-016_mcilroy_2024_reservation-i-have-that.md) | 'I add up all the costs usually (tickets + car park) vs taking my car' |
| Feature | [F-15](../../02_Analysis/02_Features/F-15_parking-bike-space-station.md) | Parking and bike space at the station |
| Touchpoint | [TP-049](../../02_Analysis/01_Touchpoints/TP-049_driving-station-parking-near.md) | Driving to the station and parking near it |
| Source | [AP-015](../../01_Research/03_Desk_Research/Doc_Notes/Academic_Papers/AP-015_mcilroy_2023_this-where-public-transport.md) | 'the station parking is crazily expensive' |
| Feature | [F-14a](../../02_Analysis/02_Features/F-14a_asking-before-rerouting-tolls.md) | Asking before rerouting, with tolls warned (split from F-14) |
| Touchpoint | [TP-078](../../02_Analysis/01_Touchpoints/TP-078_following-navigation-app-changes.md) | Following the navigation app, which changes route by itself or ignores known works and tolls |
| Source | [OR-001](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-001_apple-app-store_2026_google-maps-it.md) | Routed onto a motorway without a warning that a toll sticker was needed, fined 300 euros |
| Research open issue | [Q-10](../../01_Research/02_Plan/04_open_issues.md#1-open-questions) | What the commute and its fallbacks cost was not covered by the interviews |

## What the research says

The research names parking and tolls. Fuel appears in no note. The interviews did not cover costs (Q-10).

## Connections

- [00_Open_questions_index.md](00_Open_questions_index.md): the list of all the open questions.
- [US-F-10_car-against-train-office.md](../../02_Analysis/03_User_Stories/US-F-10_car-against-train-office.md): a story behind the question.
- [F-10_car-against-train-office.md](../../02_Analysis/02_Features/F-10_car-against-train-office.md): the feature behind that story.
- [TP-010_weighing-car-against-train.md](../../02_Analysis/01_Touchpoints/TP-010_weighing-car-against-train.md): the moment of the journey the evidence is about.
- [AP-016_mcilroy_2024_reservation-i-have-that.md](../../01_Research/03_Desk_Research/Doc_Notes/Academic_Papers/AP-016_mcilroy_2024_reservation-i-have-that.md): a source quoted in the chain.
- [F-15_parking-bike-space-station.md](../../02_Analysis/02_Features/F-15_parking-bike-space-station.md): the feature behind that story.
- [TP-049_driving-station-parking-near.md](../../02_Analysis/01_Touchpoints/TP-049_driving-station-parking-near.md): the moment of the journey the evidence is about.
- [AP-015_mcilroy_2023_this-where-public-transport.md](../../01_Research/03_Desk_Research/Doc_Notes/Academic_Papers/AP-015_mcilroy_2023_this-where-public-transport.md): a source quoted in the chain.
- [F-14a_asking-before-rerouting-tolls.md](../../02_Analysis/02_Features/F-14a_asking-before-rerouting-tolls.md): the feature behind that story.
- [TP-078_following-navigation-app-changes.md](../../02_Analysis/01_Touchpoints/TP-078_following-navigation-app-changes.md): the moment of the journey the evidence is about.
- [OR-001_apple-app-store_2026_google-maps-it.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-001_apple-app-store_2026_google-maps-it.md): a source quoted in the chain.
- [04_open_issues.md](../../01_Research/02_Plan/04_open_issues.md): lists the related open questions of the research.
