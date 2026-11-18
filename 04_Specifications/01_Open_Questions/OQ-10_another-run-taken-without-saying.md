---
source: Claude
date: 2026-11-18 19:33
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, interview, questions, information, tools, usual-trip, workarounds]
related: [00_Open_questions_index.md, SPEC-04_todays-trip-at-a-glance.md, US-F-11_usual-trip-glance.md, F-07_trips-planned-commuter-s.md, TP-018_choosing-earlier-service-needed.md, Matteo_Rizzetto_notes.md, F-08_ticket-works-moment-needed.md, TP-103_moving-ticket-another-train.md, Marco_Palermo_notes.md, F-09_arrival-shared-whoever-waits.md, TP-075_following-train-app-board.md, OR-008_apple-app-store_2026_ns-app-nl.md]
---

# OQ-10: Another run taken without saying so

One open question of the specifications, listed in [00_Open_questions_index.md](00_Open_questions_index.md).

| | |
| --- | --- |
| **Question** | When the commuter takes another run than the planned one without saying so, may the product infer it and follow that run? |
| **Raised in** | [SPEC-04](../SPEC-04_todays-trip-at-a-glance.md) |
| **Marker** | [not traced] |
| **Research support** | Partly supported: the research shows the situation and some signs, not the answer |
| **State** | open |
| **Decision** | none yet |
| **Decided on** | none yet |

## Why it is open

SPEC-04 keeps the trip of the day on the planned run until the commuter changes it. Inferring the change is not in the stories.

## Chain to the research

From the specification back to the evidence: each story under the specification it feeds, each feature under its story, each touchpoint under the feature that answers it, each quote under the touchpoint that holds it. Quotes are copied from the touchpoint and feature files.

| Step | Item | What it says |
| --- | --- | --- |
| Specification | [SPEC-04](../SPEC-04_todays-trip-at-a-glance.md) | Today's Trip at a Glance |
| User story | [F-11](../../02_Analysis/03_User_Stories/US-F-11_usual-trip-glance.md) | As a Dutch rail commuter (desk persona), on the way out of the door in the morning, I want the app to open on my usual trip with its state and its platforms, the change included, without searching, so that I know which platform to go to with no extra step. |
| Feature | [F-07](../../02_Analysis/02_Features/F-07_trips-planned-commuter-s.md) | Trips planned to the commuter's own rules |
| Touchpoint | [TP-018](../../02_Analysis/01_Touchpoints/TP-018_choosing-earlier-service-needed.md) | Choosing an earlier service than needed as a margin |
| Interview | [Matteo Rizzetto notes](../../01_Research/04_Interviews/Matteo_Rizzetto_notes.md) | "take the one before, as a colleague does (8:10 against his 8:23): if the earlier one fails, the usual one is still there" |
| Feature | [F-08](../../02_Analysis/02_Features/F-08_ticket-works-moment-needed.md) | A ticket that works at the moment it is needed |
| Touchpoint | [TP-103](../../02_Analysis/01_Touchpoints/TP-103_moving-ticket-another-train.md) | Moving the ticket to another train in the app |
| Interview | [Marco Palermo notes](../../01_Research/04_Interviews/Marco_Palermo_notes.md) | "The ticket can be moved in the app, even five minutes before departure, while he is still in the underground" |
| Feature | [F-09](../../02_Analysis/02_Features/F-09_arrival-shared-whoever-waits.md) | The arrival shared with whoever waits or drives |
| Touchpoint | [TP-075](../../02_Analysis/01_Touchpoints/TP-075_following-train-app-board.md) | Following the train on the app on board, to tell the people waiting |
| Source | [OR-008](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-008_apple-app-store_2026_ns-app-nl.md) | When returning on the train 'the app takes me out of the journey automatically and starts a new search' |

## What the research says

The research shows that commuters often switch to an earlier or later run. One review complains when the app leaves the journey on its own, which argues against changing the trip without the commuter. It does not test inferring the run.

## Connections

- [00_Open_questions_index.md](00_Open_questions_index.md): the list of all the open questions.
- [SPEC-04_todays-trip-at-a-glance.md](../SPEC-04_todays-trip-at-a-glance.md): raises this question.
- [US-F-11_usual-trip-glance.md](../../02_Analysis/03_User_Stories/US-F-11_usual-trip-glance.md): a story behind the question.
- [F-07_trips-planned-commuter-s.md](../../02_Analysis/02_Features/F-07_trips-planned-commuter-s.md): the feature behind that story.
- [TP-018_choosing-earlier-service-needed.md](../../02_Analysis/01_Touchpoints/TP-018_choosing-earlier-service-needed.md): the moment of the journey the evidence is about.
- [Matteo_Rizzetto_notes.md](../../01_Research/04_Interviews/Matteo_Rizzetto_notes.md): an interview quoted in the chain.
- [F-08_ticket-works-moment-needed.md](../../02_Analysis/02_Features/F-08_ticket-works-moment-needed.md): the feature behind that story.
- [TP-103_moving-ticket-another-train.md](../../02_Analysis/01_Touchpoints/TP-103_moving-ticket-another-train.md): the moment of the journey the evidence is about.
- [Marco_Palermo_notes.md](../../01_Research/04_Interviews/Marco_Palermo_notes.md): an interview quoted in the chain.
- [F-09_arrival-shared-whoever-waits.md](../../02_Analysis/02_Features/F-09_arrival-shared-whoever-waits.md): the feature behind that story.
- [TP-075_following-train-app-board.md](../../02_Analysis/01_Touchpoints/TP-075_following-train-app-board.md): the moment of the journey the evidence is about.
- [OR-008_apple-app-store_2026_ns-app-nl.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-008_apple-app-store_2026_ns-app-nl.md): a source quoted in the chain.
