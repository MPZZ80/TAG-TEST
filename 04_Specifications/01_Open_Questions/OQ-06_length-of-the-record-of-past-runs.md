---
source: Claude
date: 2026-11-18 19:55
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, interview, questions, information, unreliable-service]
related: [00_Open_questions_index.md, SPEC-02_real-state-of-the-run.md, US-F-13_times-commuter-can-plan.md, F-13_times-commuter-can-plan.md, TP-017_planning-assumed-delay.md, Matteo_Rizzetto_notes.md, Marco_Palermo_notes.md]
---

# OQ-06: How long the record of past runs must be

One open question of the specifications, listed in [00_Open_questions_index.md](00_Open_questions_index.md).

| | |
| --- | --- |
| **Question** | Over how many past runs, or how long a period, is the record kept to tell how late a run usually is? |
| **Raised in** | [SPEC-02](../SPEC-02_real-state-of-the-run.md) |
| **Marker** | [not traced] |
| **Research support** | ⚠ Not supported by the research: it shows the situation at most, not the answer |
| **State** | open |
| **Decision** | none yet |
| **Decided on** | none yet |

## Why it is open

SPEC-02 shows how late a run usually is, from a record of past runs. Its length is not in the stories.

## Chain to the research

From the specification back to the evidence: each story under the specification it feeds, each feature under its story, each touchpoint under the feature that answers it, each quote under the touchpoint that holds it. Quotes are copied from the touchpoint and feature files.

| Step | Item | What it says |
| --- | --- | --- |
| Specification | [SPEC-02](../SPEC-02_real-state-of-the-run.md) | The Real State of the Run |
| User story | [F-13](../../02_Analysis/03_User_Stories/US-F-13_times-commuter-can-plan.md) | As the Verona–Milan commuter, planning the trip while taking it for granted that his train will be 5 to 15 minutes late, I want to see the trip time and arrival I can expect from works and from how late that train usually is, so that the time he is promised is the time that is kept. |
| Feature | [F-13](../../02_Analysis/02_Features/F-13_times-commuter-can-plan.md) | Times the commuter can plan on |
| Touchpoint | [TP-017](../../02_Analysis/01_Touchpoints/TP-017_planning-assumed-delay.md) | Planning with an assumed delay |
| Interview | [Matteo Rizzetto notes](../../01_Research/04_Interviews/Matteo_Rizzetto_notes.md) | "Il treno per Milano ha sempre 10 minuti di ritardo, non meno di dieci minuti" (the train to Milan is always 10 minutes late, no less than ten) |
| Interview | [Marco Palermo notes](../../01_Research/04_Interviews/Marco_Palermo_notes.md) | "io do sempre per scontato che [è] in ritardo il treno" (I always take it for granted that the train is late), by 5 to 15 minutes |

## What the research says

The research shows that commuters know from experience how late their run usually is and plan with it. It says nothing about how much history makes that figure reliable.

## Connections

- [00_Open_questions_index.md](00_Open_questions_index.md): the list of all the open questions.
- [SPEC-02_real-state-of-the-run.md](../SPEC-02_real-state-of-the-run.md): raises this question.
- [US-F-13_times-commuter-can-plan.md](../../02_Analysis/03_User_Stories/US-F-13_times-commuter-can-plan.md): a story behind the question.
- [F-13_times-commuter-can-plan.md](../../02_Analysis/02_Features/F-13_times-commuter-can-plan.md): the feature behind that story.
- [TP-017_planning-assumed-delay.md](../../02_Analysis/01_Touchpoints/TP-017_planning-assumed-delay.md): the moment of the journey the evidence is about.
- [Matteo_Rizzetto_notes.md](../../01_Research/04_Interviews/Matteo_Rizzetto_notes.md): an interview quoted in the chain.
- [Marco_Palermo_notes.md](../../01_Research/04_Interviews/Marco_Palermo_notes.md): an interview quoted in the chain.
