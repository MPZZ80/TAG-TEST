---
source: Claude
date: 2026-11-18 19:55
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, desk, questions, planning, information, first-last-mile, tight-connection]
related: [00_Open_questions_index.md, SPEC-09_times-that-can-be-kept.md, US-F-05_legs-both-ends-real.md, F-05_legs-both-ends-real.md, TP-056_following-walking-time-app.md, OR-003_apple-app-store_2026_citymapper-gb.md, F-11_usual-trip-glance.md, TP-062_finding-next-platform-change.md, OF-003_hacker-news_2023_hn-citymapper-joins-via.md]
---

# OQ-21: Where the real walking times come from

One open question of the specifications, listed in [00_Open_questions_index.md](00_Open_questions_index.md).

| | |
| --- | --- |
| **Question** | Where do the real walking times come from: at both ends, and between platforms? |
| **Raised in** | [SPEC-09](../SPEC-09_times-that-can-be-kept.md) |
| **Marker** | [technology choice open] |
| **Research support** | ⚠ Not supported by the research: it shows the situation at most, not the answer |
| **State** | open |
| **Decision** | none yet |
| **Decided on** | none yet |

## Why it is open

SPEC-09 builds times on real walking times. Where they come from is a technology choice.

## Chain to the research

From the specification back to the evidence: each story under the specification it feeds, each feature under its story, each touchpoint under the feature that answers it, each quote under the touchpoint that holds it. Quotes are copied from the touchpoint and feature files.

| Step | Item | What it says |
| --- | --- | --- |
| Specification | [SPEC-09](../SPEC-09_times-that-can-be-kept.md) | Times That Can Be Kept |
| User story | [F-05](../../02_Analysis/03_User_Stories/US-F-05_legs-both-ends-real.md) | As a London traveller (desk persona), changing at King's Cross for a train to Luton, when the app says the walk to the platform takes 3 minutes, I want the way to the first stop and from the last one, where to board included, planned and timed at the length it really takes, so that I do not miss the train after running for 10 minutes. |
| Feature | [F-05](../../02_Analysis/02_Features/F-05_legs-both-ends-real.md) | The legs at both ends at their real length |
| Touchpoint | [TP-056](../../02_Analysis/01_Touchpoints/TP-056_following-walking-time-app.md) | Following the walking time the app gives to the stop or platform |
| Source | [OR-003](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-003_apple-app-store_2026_citymapper-gb.md) | 'Missed my train from King's Cross to Luton after running for 10 mins to catch it. App said 3 mins walk' |
| Feature | [F-11](../../02_Analysis/02_Features/F-11_usual-trip-glance.md) | The usual trip at a glance |
| Touchpoint | [TP-062](../../02_Analysis/01_Touchpoints/TP-062_finding-next-platform-change.md) | Finding the next platform at the change |
| Source | [OF-003](../../01_Research/03_Desk_Research/Doc_Notes/Online_Forums/OF-003_hacker-news_2023_hn-citymapper-joins-via.md) | 'some apps assume its instant, but if it's a large station it can take the better part of 10 minutes' |

## What the research says

The research shows that the walking times apps give can be badly wrong. It does not say where better ones come from: this is a technology choice, and the research gives the need only.

## Connections

- [00_Open_questions_index.md](00_Open_questions_index.md): the list of all the open questions.
- [SPEC-09_times-that-can-be-kept.md](../SPEC-09_times-that-can-be-kept.md): raises this question.
- [US-F-05_legs-both-ends-real.md](../../02_Analysis/03_User_Stories/US-F-05_legs-both-ends-real.md): a story behind the question.
- [F-05_legs-both-ends-real.md](../../02_Analysis/02_Features/F-05_legs-both-ends-real.md): the feature behind that story.
- [TP-056_following-walking-time-app.md](../../02_Analysis/01_Touchpoints/TP-056_following-walking-time-app.md): the moment of the journey the evidence is about.
- [OR-003_apple-app-store_2026_citymapper-gb.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-003_apple-app-store_2026_citymapper-gb.md): a source quoted in the chain.
- [F-11_usual-trip-glance.md](../../02_Analysis/02_Features/F-11_usual-trip-glance.md): the feature behind that story.
- [TP-062_finding-next-platform-change.md](../../02_Analysis/01_Touchpoints/TP-062_finding-next-platform-change.md): the moment of the journey the evidence is about.
- [OF-003_hacker-news_2023_hn-citymapper-joins-via.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Forums/OF-003_hacker-news_2023_hn-citymapper-joins-via.md): a source quoted in the chain.
