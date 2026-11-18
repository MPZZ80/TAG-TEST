---
source: Claude
date: 2026-11-18 19:33
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, desk, questions, information, disruption, late-info, unreliable-service]
related: [00_Open_questions_index.md, SPEC-05_ways-out-when-the-trip-breaks.md, US-F-02_ways-still-open-trip.md, F-02_ways-still-open-trip.md, F-01_real-state-vehicle-source.md, TP-089_delay-cancellation-information-comes.md, OR-004_apple-app-store_2026_transit-us.md, OR-015_apple-app-store_2026_9292-nl.md, TP-088_watching-delay-grow-board.md, Matteo_Rizzetto_notes.md]
---

# OQ-13: When a vehicle not seen counts as not coming

One open question of the specifications, listed in [00_Open_questions_index.md](00_Open_questions_index.md).

| | |
| --- | --- |
| **Question** | After how long without any sign of it does a bus or train count as not coming? |
| **Raised in** | [SPEC-05](../SPEC-05_ways-out-when-the-trip-breaks.md) |
| **Marker** | [not traced] |
| **Research support** | ⚠ Not supported by the research: it shows the situation at most, not the answer |
| **State** | open |
| **Decision** | none yet |
| **Decided on** | none yet |

## Why it is open

SPEC-05 starts when a vehicle does not come. The stories do not say when that is decided.

## Chain to the research

From the specification back to the evidence: each story under the specification it feeds, each feature under its story, each touchpoint under the feature that answers it, each quote under the touchpoint that holds it. Quotes are copied from the touchpoint and feature files.

| Step | Item | What it says |
| --- | --- | --- |
| Specification | [SPEC-05](../SPEC-05_ways-out-when-the-trip-breaks.md) | Ways Out When the Trip Breaks |
| User story | [F-02](../../02_Analysis/03_User_Stories/US-F-02_ways-still-open-trip.md) | As a teenager (desk persona), waiting late in the evening at a stop for a connecting bus that does not come, I want to see the ways that still run and can be reached from where I am, valid on my ticket or not, with arrival time and cost, so that I know from what point it makes sense to call home and be fetched. |
| Feature | [F-02](../../02_Analysis/02_Features/F-02_ways-still-open-trip.md) | The ways still open when the trip breaks |
| Feature | [F-01](../../02_Analysis/02_Features/F-01_real-state-vehicle-source.md) | The real state of the vehicle, with its source and its reason |
| Touchpoint | [TP-089](../../02_Analysis/01_Touchpoints/TP-089_delay-cancellation-information-comes.md) | Delay or cancellation information that comes too late, or is wrong |
| Source | [OR-004](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-004_apple-app-store_2026_transit-us.md) | 'it never told me the bus wasn't able to come. I was standing outside for an hour' |
| Source | [OR-015](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-015_apple-app-store_2026_9292-nl.md) | 'als een bus niet komt wordt dat nooit aangegeven' (when a bus does not come it is never shown) |
| Touchpoint | [TP-088](../../02_Analysis/01_Touchpoints/TP-088_watching-delay-grow-board.md) | Watching the delay grow on the board until it becomes a cancellation |
| Interview | [Matteo Rizzetto notes](../../01_Research/04_Interviews/Matteo_Rizzetto_notes.md) | "a 20 inizio a sentire la puzza, a 25 la puzza si fa più forte e aspetto solo che appaia la scritta annullato" (at 20 I start to smell it, at 25 the smell gets stronger and I just wait for 'cancelled' to appear) |

## What the research says

The research shows people waiting a long time for a vehicle that never comes, without being told. The only figures are one participant's own thresholds for a train (20 and 25 minutes), not a rule for buses.

## Connections

- [00_Open_questions_index.md](00_Open_questions_index.md): the list of all the open questions.
- [SPEC-05_ways-out-when-the-trip-breaks.md](../SPEC-05_ways-out-when-the-trip-breaks.md): raises this question.
- [US-F-02_ways-still-open-trip.md](../../02_Analysis/03_User_Stories/US-F-02_ways-still-open-trip.md): a story behind the question.
- [F-02_ways-still-open-trip.md](../../02_Analysis/02_Features/F-02_ways-still-open-trip.md): the feature behind that story.
- [F-01_real-state-vehicle-source.md](../../02_Analysis/02_Features/F-01_real-state-vehicle-source.md): the feature behind that story.
- [TP-089_delay-cancellation-information-comes.md](../../02_Analysis/01_Touchpoints/TP-089_delay-cancellation-information-comes.md): the moment of the journey the evidence is about.
- [OR-004_apple-app-store_2026_transit-us.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-004_apple-app-store_2026_transit-us.md): a source quoted in the chain.
- [OR-015_apple-app-store_2026_9292-nl.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-015_apple-app-store_2026_9292-nl.md): a source quoted in the chain.
- [TP-088_watching-delay-grow-board.md](../../02_Analysis/01_Touchpoints/TP-088_watching-delay-grow-board.md): the moment of the journey the evidence is about.
- [Matteo_Rizzetto_notes.md](../../01_Research/04_Interviews/Matteo_Rizzetto_notes.md): an interview quoted in the chain.
