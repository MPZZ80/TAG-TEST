---
source: Claude
date: 2026-11-16 23:04
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, desk, questions, planning, tools, usual-trip]
related: [00_Open_questions_index.md, SPEC-02_the-commuters-set-up.md, US-F-09_arrival-shared-whoever-waits.md, F-09_arrival-shared-whoever-waits.md, TP-075_following-train-app-board.md, Marco_Palermo_notes.md, F-01_real-state-vehicle-source.md, TP-028_deciding-return-train-day.md, US-F-11_usual-trip-glance.md, F-11_usual-trip-glance.md, TP-027_opening-saved-usual-trip.md, OR-001_apple-app-store_2026_google-maps-it.md, F-03_early-warning-usual-trip.md, TP-035_using-alerts-usual-trip.md, OR-005_apple-app-store_2026_trainline-gb.md, TP-032_receiving-alert-usual-train.md, OF-003_hacker-news_2023_hn-citymapper-joins-via.md, 04_open_issues.md, SPEC-05_todays-trip-at-a-glance.md, SPEC-07_those-waiting-are-told.md]
---

# OQ-05: More than one usual trip

One open question of the specifications, listed in [00_Open_questions_index.md](00_Open_questions_index.md).

| | |
| --- | --- |
| **Question** | Does the commuter keep more than one usual trip, for example the morning trip and the evening return, or two trains used most? |
| **Raised in** | [SPEC-02](../SPEC-02_the-commuters-set-up.md), [SPEC-05](../SPEC-05_todays-trip-at-a-glance.md), [SPEC-07](../SPEC-07_those-waiting-are-told.md) |
| **Marker** | [not traced] |
| **Research support** | Supported: the research points to an answer |
| **State** | open |
| **Decision** | none yet |
| **Decided on** | none yet |

## Why it is open

Each story names one usual trip. F-09 is about the return trip, while F-11 and F-03 are about the morning one.

## Chain to the research

From the specification back to the evidence: each story under the specification it feeds, each feature under its story, each touchpoint under the feature that answers it, each quote under the touchpoint that holds it. Quotes are copied from the touchpoint and feature files.

| Step | Item | What it says |
| --- | --- | --- |
| Specification | [SPEC-02](../SPEC-02_the-commuters-set-up.md) | The Commuter's Set-Up |
| User story | [F-09](../../02_Analysis/03_User_Stories/US-F-09_arrival-shared-whoever-waits.md) | As the Verona–Milan commuter, on the train back to Verona with his father coming to fetch him at the station, I want to share the train time and the live arrival, with a confirmation of any delay, with the person driving or waiting, so that the person who comes to the station knows when he arrives. |
| Feature | [F-09](../../02_Analysis/02_Features/F-09_arrival-shared-whoever-waits.md) | The arrival shared with whoever waits or drives |
| Touchpoint | [TP-075](../../02_Analysis/01_Touchpoints/TP-075_following-train-app-board.md) | Following the train on the app on board, to tell the people waiting |
| Interview | [Marco Palermo notes](../../01_Research/04_Interviews/Marco_Palermo_notes.md) | "On board he does check how the train is doing, more on the way back, because someone is coming to fetch him" |
| Feature | [F-01](../../02_Analysis/02_Features/F-01_real-state-vehicle-source.md) | The real state of the vehicle, with its source and its reason |
| Touchpoint | [TP-028](../../02_Analysis/01_Touchpoints/TP-028_deciding-return-train-day.md) | Deciding the return train the day before, or weighing leaving work earlier |
| Interview | [Marco Palermo notes](../../01_Research/04_Interviews/Marco_Palermo_notes.md) | "in the middle of the week the 17:35 from Centrale, decided the day before" |
| User story | [F-11](../../02_Analysis/03_User_Stories/US-F-11_usual-trip-glance.md) | As a Dutch rail commuter (desk persona), on the way out of the door in the morning, I want the app to open on my usual trip with its state and its platforms, the change included, without searching, so that I know which platform to go to with no extra step. |
| Feature | [F-11](../../02_Analysis/02_Features/F-11_usual-trip-glance.md) | The usual trip at a glance |
| Touchpoint | [TP-027](../../02_Analysis/01_Touchpoints/TP-027_opening-saved-usual-trip.md) | Opening the saved usual trip to see it and its platform at a glance |
| Source | [OR-001](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-001_apple-app-store_2026_google-maps-it.md) | 'potevo salvare 6-7 percorsi diversi' (I could save 6-7 different routes) |
| Feature | [F-03](../../02_Analysis/02_Features/F-03_early-warning-usual-trip.md) | Early warning on the usual trip |
| Touchpoint | [TP-035](../../02_Analysis/01_Touchpoints/TP-035_using-alerts-usual-trip.md) | Not using alerts on the usual trip |
| Source | [OR-005](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-005_apple-app-store_2026_trainline-gb.md) | 'I still cannot set a simple notification on 2 trains I use the most' |
| Touchpoint | [TP-032](../../02_Analysis/01_Touchpoints/TP-032_receiving-alert-usual-train.md) | Receiving an alert on the usual train, timed for leaving |
| Source | [OF-003](../../01_Research/03_Desk_Research/Doc_Notes/Online_Forums/OF-003_hacker-news_2023_hn-citymapper-joins-via.md) | 'I enabled (silent) push notifications for the routes and lines I use going to and from work' |
| Research open issue | [Q-07](../../01_Research/02_Plan/04_open_issues.md#1-open-questions) | The return trip, leg by leg, was not covered by the interviews |

## What the research says

The research points to more than one: the outward and return trips (an interview, a forum), two trains used most (a review) and up to six or seven saved routes (a review). The return trip itself was never covered in detail (Q-07).

## Connections

- [00_Open_questions_index.md](00_Open_questions_index.md): the list of all the open questions.
- [SPEC-07_those-waiting-are-told.md](../SPEC-07_those-waiting-are-told.md): raises this question.
- [SPEC-05_todays-trip-at-a-glance.md](../SPEC-05_todays-trip-at-a-glance.md): raises this question.
- [SPEC-02_the-commuters-set-up.md](../SPEC-02_the-commuters-set-up.md): raises this question.
- [US-F-09_arrival-shared-whoever-waits.md](../../02_Analysis/03_User_Stories/US-F-09_arrival-shared-whoever-waits.md): a story behind the question.
- [F-09_arrival-shared-whoever-waits.md](../../02_Analysis/02_Features/F-09_arrival-shared-whoever-waits.md): the feature behind that story.
- [TP-075_following-train-app-board.md](../../02_Analysis/01_Touchpoints/TP-075_following-train-app-board.md): the moment of the journey the evidence is about.
- [Marco_Palermo_notes.md](../../01_Research/04_Interviews/Marco_Palermo_notes.md): an interview quoted in the chain.
- [F-01_real-state-vehicle-source.md](../../02_Analysis/02_Features/F-01_real-state-vehicle-source.md): the feature behind that story.
- [TP-028_deciding-return-train-day.md](../../02_Analysis/01_Touchpoints/TP-028_deciding-return-train-day.md): the moment of the journey the evidence is about.
- [US-F-11_usual-trip-glance.md](../../02_Analysis/03_User_Stories/US-F-11_usual-trip-glance.md): a story behind the question.
- [F-11_usual-trip-glance.md](../../02_Analysis/02_Features/F-11_usual-trip-glance.md): the feature behind that story.
- [TP-027_opening-saved-usual-trip.md](../../02_Analysis/01_Touchpoints/TP-027_opening-saved-usual-trip.md): the moment of the journey the evidence is about.
- [OR-001_apple-app-store_2026_google-maps-it.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-001_apple-app-store_2026_google-maps-it.md): a source quoted in the chain.
- [F-03_early-warning-usual-trip.md](../../02_Analysis/02_Features/F-03_early-warning-usual-trip.md): the feature behind that story.
- [TP-035_using-alerts-usual-trip.md](../../02_Analysis/01_Touchpoints/TP-035_using-alerts-usual-trip.md): the moment of the journey the evidence is about.
- [OR-005_apple-app-store_2026_trainline-gb.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-005_apple-app-store_2026_trainline-gb.md): a source quoted in the chain.
- [TP-032_receiving-alert-usual-train.md](../../02_Analysis/01_Touchpoints/TP-032_receiving-alert-usual-train.md): the moment of the journey the evidence is about.
- [OF-003_hacker-news_2023_hn-citymapper-joins-via.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Forums/OF-003_hacker-news_2023_hn-citymapper-joins-via.md): a source quoted in the chain.
- [04_open_issues.md](../../01_Research/02_Plan/04_open_issues.md): lists the related open questions of the research.
