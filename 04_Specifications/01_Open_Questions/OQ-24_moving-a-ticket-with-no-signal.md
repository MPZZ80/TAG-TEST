---
source: Claude
date: 2026-11-18 19:55
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, desk, questions, tools, ticket-carryover]
related: [00_Open_questions_index.md, SPEC-10_tickets-that-work-when-needed.md, US-F-08_ticket-works-moment-needed.md, F-08_ticket-works-moment-needed.md, TP-103_moving-ticket-another-train.md, Marco_Palermo_notes.md, TP-076_showing-ticket-inspector-gate.md, OR-009_apple-app-store_2026_trenitalia-app-it.md]
---

# OQ-24: Moving a ticket with no signal

One open question of the specifications, listed in [00_Open_questions_index.md](00_Open_questions_index.md).

| | |
| --- | --- |
| **Question** | Can a ticket be shown and moved to another run when there is no signal? |
| **Raised in** | [SPEC-10](../SPEC-10_tickets-that-work-when-needed.md) |
| **Marker** | [technology choice open] |
| **Research support** | ⚠ Not supported by the research: it shows the situation at most, not the answer |
| **State** | open |
| **Decision** | none yet |
| **Decided on** | none yet |

## Why it is open

SPEC-10 shows tickets from what is kept on the device and waits for the signal to move them. Whether more is possible is a technology choice.

## Chain to the research

From the specification back to the evidence: each story under the specification it feeds, each feature under its story, each touchpoint under the feature that answers it, each quote under the touchpoint that holds it. Quotes are copied from the touchpoint and feature files.

| Step | Item | What it says |
| --- | --- | --- |
| Specification | [SPEC-10](../SPEC-10_tickets-that-work-when-needed.md) | Tickets That Work When Needed |
| User story | [F-08](../../02_Analysis/03_User_Stories/US-F-08_ticket-works-moment-needed.md) | As the Verona–Milan commuter, still in the underground five minutes before his train leaves, I want to buy, move and show a valid ticket in one step, up to departure and with no signal, so that he can take another train, or travel another day, without losing the ticket. |
| Feature | [F-08](../../02_Analysis/02_Features/F-08_ticket-works-moment-needed.md) | A ticket that works at the moment it is needed |
| Touchpoint | [TP-103](../../02_Analysis/01_Touchpoints/TP-103_moving-ticket-another-train.md) | Moving the ticket to another train in the app |
| Interview | [Marco Palermo notes](../../01_Research/04_Interviews/Marco_Palermo_notes.md) | "The ticket can be moved in the app, even five minutes before departure, while he is still in the underground" |
| Touchpoint | [TP-076](../../02_Analysis/01_Touchpoints/TP-076_showing-ticket-inspector-gate.md) | Showing the ticket to the inspector or at the gate with no signal, a slow QR code or a flat battery |
| Source | [OR-009](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-009_apple-app-store_2026_trenitalia-app-it.md) | 'se controllore passa in momento in cui non c'e segnale e imbarazzante' (if the inspector comes when there is no signal it is embarrassing) |

## What the research says

The research shows a ticket needed where there is no signal, and a participant moving his ticket from the underground. How to do it with no signal is a technology choice the research does not cover.

## Connections

- [00_Open_questions_index.md](00_Open_questions_index.md): the list of all the open questions.
- [SPEC-10_tickets-that-work-when-needed.md](../SPEC-10_tickets-that-work-when-needed.md): raises this question.
- [US-F-08_ticket-works-moment-needed.md](../../02_Analysis/03_User_Stories/US-F-08_ticket-works-moment-needed.md): a story behind the question.
- [F-08_ticket-works-moment-needed.md](../../02_Analysis/02_Features/F-08_ticket-works-moment-needed.md): the feature behind that story.
- [TP-103_moving-ticket-another-train.md](../../02_Analysis/01_Touchpoints/TP-103_moving-ticket-another-train.md): the moment of the journey the evidence is about.
- [Marco_Palermo_notes.md](../../01_Research/04_Interviews/Marco_Palermo_notes.md): an interview quoted in the chain.
- [TP-076_showing-ticket-inspector-gate.md](../../02_Analysis/01_Touchpoints/TP-076_showing-ticket-inspector-gate.md): the moment of the journey the evidence is about.
- [OR-009_apple-app-store_2026_trenitalia-app-it.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-009_apple-app-store_2026_trenitalia-app-it.md): a source quoted in the chain.
