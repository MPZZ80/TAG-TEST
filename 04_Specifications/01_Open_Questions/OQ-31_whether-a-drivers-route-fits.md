---
source: Claude
date: 2026-11-18 19:25
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, desk, questions, mode-choice, who, habit]
related: [00_Open_questions_index.md, US-F-14a_asking-before-rerouting-tolls.md, F-14a_asking-before-rerouting-tolls.md, TP-078_following-navigation-app-changes.md, OR-001_apple-app-store_2026_google-maps-it.md, F-15_parking-bike-space-station.md, TP-049_driving-station-parking-near.md, 07_survey_results.md, F-10_car-against-train-office.md, TP-009_keeping-car-after-pass.md, Matteo_Rizzetto_notes.md, 04_open_issues.md]
---

# OQ-31: Whether a driver's route fits the product

One open question of the specifications, listed in [00_Open_questions_index.md](00_Open_questions_index.md).

| | |
| --- | --- |
| **Question** | Does a product mostly about public transport also look after a commuter's drive, as story F-14a asks? |
| **Raised in** | SPEC-16 (deleted on 2026-11-18, to be rewritten) |
| **Marker** | [not traced] |
| **Research support** | Partly supported: the research shows the situation and some signs, not the answer |
| **State** | open |
| **Decision** | none yet |
| **Decided on** | none yet |

## Why it is open

SPEC-16 covers a driver rerouted onto a toll road. It is the only behaviour about driving the whole way.

## Chain to the research

From the specification back to the evidence: each story under the specification it feeds, each feature under its story, each touchpoint under the feature that answers it, each quote under the touchpoint that holds it. Quotes are copied from the touchpoint and feature files.

| Step | Item | What it says |
| --- | --- | --- |
| Specification | SPEC-16 | The Route Stays With the Driver |
| User story | [F-14a](../../02_Analysis/03_User_Stories/US-F-14a_asking-before-rerouting-tolls.md) | As an Italian driver (desk persona), following a map app, when there is a queue and the app changes the route by itself, or sends him onto a foreign motorway, I want to be asked before the route is changed and warned of the tolls or stickers the route needs, so that he decides the route and is not fined. |
| Feature | [F-14a](../../02_Analysis/02_Features/F-14a_asking-before-rerouting-tolls.md) | Asking before rerouting, with tolls warned (split from F-14) |
| Touchpoint | [TP-078](../../02_Analysis/01_Touchpoints/TP-078_following-navigation-app-changes.md) | Following the navigation app, which changes route by itself or ignores known works and tolls |
| Source | [OR-001](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-001_apple-app-store_2026_google-maps-it.md) | 'lui decide per me' (it decides for me); fined 300 euros for a toll sticker |
| Feature | [F-15](../../02_Analysis/02_Features/F-15_parking-bike-space-station.md) | Parking and bike space at the station |
| Touchpoint | [TP-049](../../02_Analysis/01_Touchpoints/TP-049_driving-station-parking-near.md) | Driving to the station and parking near it |
| Survey | [survey results](../../01_Research/05_Survey/07_survey_results.md) | Q8, Belgium: "car as driver 5" (of 17) |
| Feature | [F-10](../../02_Analysis/02_Features/F-10_car-against-train-office.md) | Car against train for the office day |
| Touchpoint | [TP-009](../../02_Analysis/01_Touchpoints/TP-009_keeping-car-after-pass.md) | Keeping the car after the pass was dropped, out of habit |
| Interview | [Matteo Rizzetto notes](../../01_Research/04_Interviews/Matteo_Rizzetto_notes.md) | He kept the car "semplicemente perché è un'abitudine che mi è rimasta" (simply because it is a habit that stayed with me) |
| Research open issue | [Q-03](../../01_Research/02_Plan/04_open_issues.md#1-open-questions) | What "multimodal environment" covers after the scope was widened |

## What the research says

The research shows that the car is part of many commutes: a participant who drives, five of seventeen Belgian respondents, the reason the scope was widened. The story itself rests on one review (OR-001). Whether the product covers the drive is a scope decision, tied to the open question on scope (Q-03).

## Connections

- [00_Open_questions_index.md](00_Open_questions_index.md): the list of all the open questions.
- [US-F-14a_asking-before-rerouting-tolls.md](../../02_Analysis/03_User_Stories/US-F-14a_asking-before-rerouting-tolls.md): a story behind the question.
- [F-14a_asking-before-rerouting-tolls.md](../../02_Analysis/02_Features/F-14a_asking-before-rerouting-tolls.md): the feature behind that story.
- [TP-078_following-navigation-app-changes.md](../../02_Analysis/01_Touchpoints/TP-078_following-navigation-app-changes.md): the moment of the journey the evidence is about.
- [OR-001_apple-app-store_2026_google-maps-it.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-001_apple-app-store_2026_google-maps-it.md): a source quoted in the chain.
- [F-15_parking-bike-space-station.md](../../02_Analysis/02_Features/F-15_parking-bike-space-station.md): the feature behind that story.
- [TP-049_driving-station-parking-near.md](../../02_Analysis/01_Touchpoints/TP-049_driving-station-parking-near.md): the moment of the journey the evidence is about.
- [07_survey_results.md](../../01_Research/05_Survey/07_survey_results.md): the survey answers quoted in the chain.
- [F-10_car-against-train-office.md](../../02_Analysis/02_Features/F-10_car-against-train-office.md): the feature behind that story.
- [TP-009_keeping-car-after-pass.md](../../02_Analysis/01_Touchpoints/TP-009_keeping-car-after-pass.md): the moment of the journey the evidence is about.
- [Matteo_Rizzetto_notes.md](../../01_Research/04_Interviews/Matteo_Rizzetto_notes.md): an interview quoted in the chain.
- [04_open_issues.md](../../01_Research/02_Plan/04_open_issues.md): lists the related open questions of the research.
