---
source: Claude
date: 2026-11-18 19:33
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, desk, questions, information, late-info]
related: [00_Open_questions_index.md, SPEC-01_foundation.md, US-F-01_real-state-vehicle-source.md, F-01_real-state-vehicle-source.md, TP-089_delay-cancellation-information-comes.md, OR-004_apple-app-store_2026_transit-us.md, OR-002_apple-app-store_2026_moovit-it.md, OR-006_apple-app-store_2026_flixbus-it.md, SPEC-02_real-state-of-the-run.md]
---

# OQ-02: The age after which a fact is outdated

One open question of the specifications, listed in [00_Open_questions_index.md](00_Open_questions_index.md).

| | |
| --- | --- |
| **Question** | After how long without news is a fact (a time, a state, a position) marked outdated, and a run marked `no news`? |
| **Raised in** | [SPEC-01](../SPEC-01_foundation.md), [SPEC-02](../SPEC-02_real-state-of-the-run.md) |
| **Marker** | [not traced] |
| **Research support** | ⚠ Not supported by the research: it shows the situation at most, not the answer |
| **State** | open |
| **Decision** | none yet |
| **Decided on** | none yet |

## Why it is open

The foundation says every fact shows its age and is marked `outdated` past an age limit. No story gives the limit.

## Chain to the research

From the specification back to the evidence: each story under the specification it feeds, each feature under its story, each touchpoint under the feature that answers it, each quote under the touchpoint that holds it. Quotes are copied from the touchpoint and feature files.

| Step | Item | What it says |
| --- | --- | --- |
| Specification | [SPEC-01](../SPEC-01_foundation.md) | Foundation |
| User story | [F-01](../../02_Analysis/03_User_Stories/US-F-01_real-state-vehicle-source.md) | As the Como commuter, standing on the platform watching the delay on the board grow from 5 to 10 to 15 minutes while a third-party app shows another time, I want to see where the train really is, when it will really leave and arrive, why it is late and which source says so, so that he knows as early as an unofficial app would tell him. |
| Feature | [F-01](../../02_Analysis/02_Features/F-01_real-state-vehicle-source.md) | The real state of the vehicle, with its source and its reason |
| Touchpoint | [TP-089](../../02_Analysis/01_Touchpoints/TP-089_delay-cancellation-information-comes.md) | Delay or cancellation information that comes too late, or is wrong |
| Source | [OR-004](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-004_apple-app-store_2026_transit-us.md) | 'the app that will tell you a bus is 5mins away for 15mins and make you late for work' |
| Source | [OR-002](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-002_apple-app-store_2026_moovit-it.md) | 'Sull app mi diceva 5 minuti poi alla fermata c'era scritto 53' (the app said 5 minutes, then at the stop it said 53) |
| Source | [OR-006](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-006_apple-app-store_2026_flixbus-it.md) | 'dall'app risultava in orario durante le 3 ore di ritardo' (the app showed it on time during the 3 hours of delay) |

## What the research says

The research shows information that stays the same while the real state changes, and the harm it does. It gives no figure for when a fact stops being trustworthy.

## Connections

- [00_Open_questions_index.md](00_Open_questions_index.md): the list of all the open questions.
- [SPEC-02_real-state-of-the-run.md](../SPEC-02_real-state-of-the-run.md): raises this question.
- [SPEC-01_foundation.md](../SPEC-01_foundation.md): raises this question.
- [US-F-01_real-state-vehicle-source.md](../../02_Analysis/03_User_Stories/US-F-01_real-state-vehicle-source.md): a story behind the question.
- [F-01_real-state-vehicle-source.md](../../02_Analysis/02_Features/F-01_real-state-vehicle-source.md): the feature behind that story.
- [TP-089_delay-cancellation-information-comes.md](../../02_Analysis/01_Touchpoints/TP-089_delay-cancellation-information-comes.md): the moment of the journey the evidence is about.
- [OR-004_apple-app-store_2026_transit-us.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-004_apple-app-store_2026_transit-us.md): a source quoted in the chain.
- [OR-002_apple-app-store_2026_moovit-it.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-002_apple-app-store_2026_moovit-it.md): a source quoted in the chain.
- [OR-006_apple-app-store_2026_flixbus-it.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-006_apple-app-store_2026_flixbus-it.md): a source quoted in the chain.
