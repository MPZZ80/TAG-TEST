---
source: Claude
date: 2026-11-18 19:33
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, interview, questions, planning, workarounds]
related: [00_Open_questions_index.md, SPEC-09_times-that-can-be-kept.md, US-F-13_times-commuter-can-plan.md, F-13_times-commuter-can-plan.md, TP-041_leaving-home-fixed-margin.md, Marco_Palermo_notes.md, F-05_legs-both-ends-real.md, TP-064_handover-train-underground-bus.md, Matteo_Rizzetto_notes.md]
---

# OQ-22: How long records are kept to time a leg

One open question of the specifications, listed in [00_Open_questions_index.md](00_Open_questions_index.md).

| | |
| --- | --- |
| **Question** | How long are reports and records kept to time a leg (a walk, a change, a drive)? |
| **Raised in** | [SPEC-09](../SPEC-09_times-that-can-be-kept.md) |
| **Marker** | [not traced] |
| **Research support** | ⚠ Not supported by the research: it shows the situation at most, not the answer |
| **State** | open |
| **Decision** | none yet |
| **Decided on** | none yet |

## Why it is open

SPEC-09 times legs from records. How long they are kept is not in the stories.

## Chain to the research

From the specification back to the evidence: each story under the specification it feeds, each feature under its story, each touchpoint under the feature that answers it, each quote under the touchpoint that holds it. Quotes are copied from the touchpoint and feature files.

| Step | Item | What it says |
| --- | --- | --- |
| Specification | [SPEC-09](../SPEC-09_times-that-can-be-kept.md) | Times That Can Be Kept |
| User story | [F-13](../../02_Analysis/03_User_Stories/US-F-13_times-commuter-can-plan.md) | As the Verona–Milan commuter, planning the trip while taking it for granted that his train will be 5 to 15 minutes late, I want to see the trip time and arrival I can expect from works and from how late that train usually is, so that the time he is promised is the time that is kept. |
| Feature | [F-13](../../02_Analysis/02_Features/F-13_times-commuter-can-plan.md) | Times the commuter can plan on |
| Touchpoint | [TP-041](../../02_Analysis/01_Touchpoints/TP-041_leaving-home-fixed-margin.md) | Leaving home with a fixed margin |
| Interview | [Marco Palermo notes](../../01_Research/04_Interviews/Marco_Palermo_notes.md) | "they leave 25 to 30 minutes before the train for a 15-minute drive" |
| Feature | [F-05](../../02_Analysis/02_Features/F-05_legs-both-ends-real.md) | The legs at both ends at their real length |
| Touchpoint | [TP-064](../../02_Analysis/01_Touchpoints/TP-064_handover-train-underground-bus.md) | Handover from train to underground or bus in the destination city |
| Interview | [Matteo Rizzetto notes](../../01_Research/04_Interviews/Matteo_Rizzetto_notes.md) | "From Centrale he counts 20 minutes in the worst case" |

## What the research says

The research shows that commuters time their legs from their own experience. It says nothing about how long records should be kept.

## Connections

- [00_Open_questions_index.md](00_Open_questions_index.md): the list of all the open questions.
- [SPEC-09_times-that-can-be-kept.md](../SPEC-09_times-that-can-be-kept.md): raises this question.
- [US-F-13_times-commuter-can-plan.md](../../02_Analysis/03_User_Stories/US-F-13_times-commuter-can-plan.md): a story behind the question.
- [F-13_times-commuter-can-plan.md](../../02_Analysis/02_Features/F-13_times-commuter-can-plan.md): the feature behind that story.
- [TP-041_leaving-home-fixed-margin.md](../../02_Analysis/01_Touchpoints/TP-041_leaving-home-fixed-margin.md): the moment of the journey the evidence is about.
- [Marco_Palermo_notes.md](../../01_Research/04_Interviews/Marco_Palermo_notes.md): an interview quoted in the chain.
- [F-05_legs-both-ends-real.md](../../02_Analysis/02_Features/F-05_legs-both-ends-real.md): the feature behind that story.
- [TP-064_handover-train-underground-bus.md](../../02_Analysis/01_Touchpoints/TP-064_handover-train-underground-bus.md): the moment of the journey the evidence is about.
- [Matteo_Rizzetto_notes.md](../../01_Research/04_Interviews/Matteo_Rizzetto_notes.md): an interview quoted in the chain.
