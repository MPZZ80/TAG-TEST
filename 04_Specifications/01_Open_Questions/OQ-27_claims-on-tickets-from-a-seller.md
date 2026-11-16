---
source: Claude
date: 2026-11-16 23:04
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, desk, questions, disruption, tools, refunds]
related: [00_Open_questions_index.md, SPEC-13_compensation-from-the-trip.md, US-F-16_compensation-claim-started-delayed.md, F-16_compensation-claim-started-delayed.md, TP-104_claiming-compensation-after-delay.md, OR-005_apple-app-store_2026_trainline-gb.md, OR-009_apple-app-store_2026_trenitalia-app-it.md, 04_open_issues.md]
---

# OQ-27: Handing a claim to the operator for a ticket from a seller

One open question of the specifications, listed in [00_Open_questions_index.md](00_Open_questions_index.md).

| | |
| --- | --- |
| **Question** | How does a compensation claim reach the operator when the ticket was bought from a ticket seller? |
| **Raised in** | [SPEC-13](../SPEC-13_compensation-from-the-trip.md) |
| **Marker** | [technology choice open] |
| **Research support** | ⚠ Not supported by the research: it shows the situation at most, not the answer |
| **State** | open |
| **Decision** | none yet |
| **Decided on** | none yet |

## Why it is open

SPEC-13 sends the claim to whoever handles it. How it reaches an operator from a seller's ticket is a technology choice.

## Chain to the research

From the specification back to the evidence: each story under the specification it feeds, each feature under its story, each touchpoint under the feature that answers it, each quote under the touchpoint that holds it. Quotes are copied from the touchpoint and feature files.

| Step | Item | What it says |
| --- | --- | --- |
| Specification | [SPEC-13](../SPEC-13_compensation-from-the-trip.md) | Compensation From the Trip |
| User story | [F-16](../../02_Analysis/03_User_Stories/US-F-16_compensation-claim-started-delayed.md) | As a British traveller (desk persona), after a delay on a ticket bought through a ticket seller, I want to start the compensation claim from the delayed trip itself, wherever the ticket was bought, so that the compensation does not depend on going to the train company. |
| Feature | [F-16](../../02_Analysis/02_Features/F-16_compensation-claim-started-delayed.md) | The compensation claim started from the delayed trip |
| Touchpoint | [TP-104](../../02_Analysis/01_Touchpoints/TP-104_claiming-compensation-after-delay.md) | Claiming compensation after the delay |
| Source | [OR-005](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-005_apple-app-store_2026_trainline-gb.md) | 'if train is delayed, you have to claim directly with the train company referencing your trainline tickets .. complete pain' |
| Source | [OR-009](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-009_apple-app-store_2026_trenitalia-app-it.md) | 'La richiesta di indennizzo dall'app non funziona' (the compensation request from the app does not work) |
| Research open issue | [Q-11](../../01_Research/02_Plan/04_open_issues.md#1-open-questions) | Refunds and compensation: nobody was asked in the interviews |

## What the research says

The research shows the need from reviews: with a seller's ticket the traveller has to claim from the operator alone. How a claim can be handed over is a technology and business choice the research does not cover. The interviews did not cover compensation (Q-11).

## Connections

- [00_Open_questions_index.md](00_Open_questions_index.md): the list of all the open questions.
- [SPEC-13_compensation-from-the-trip.md](../SPEC-13_compensation-from-the-trip.md): raises this question.
- [US-F-16_compensation-claim-started-delayed.md](../../02_Analysis/03_User_Stories/US-F-16_compensation-claim-started-delayed.md): a story behind the question.
- [F-16_compensation-claim-started-delayed.md](../../02_Analysis/02_Features/F-16_compensation-claim-started-delayed.md): the feature behind that story.
- [TP-104_claiming-compensation-after-delay.md](../../02_Analysis/01_Touchpoints/TP-104_claiming-compensation-after-delay.md): the moment of the journey the evidence is about.
- [OR-005_apple-app-store_2026_trainline-gb.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-005_apple-app-store_2026_trainline-gb.md): a source quoted in the chain.
- [OR-009_apple-app-store_2026_trenitalia-app-it.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-009_apple-app-store_2026_trenitalia-app-it.md): a source quoted in the chain.
- [04_open_issues.md](../../01_Research/02_Plan/04_open_issues.md): lists the related open questions of the research.
