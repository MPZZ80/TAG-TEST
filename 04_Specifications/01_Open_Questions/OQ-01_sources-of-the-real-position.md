---
source: Claude
date: 2026-11-18 19:33
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, desk, questions, information, tools, late-info, unreliable-service]
related: [00_Open_questions_index.md, SPEC-02_real-state-of-the-run.md, US-F-01_real-state-vehicle-source.md, F-01_real-state-vehicle-source.md, TP-090_choosing-source-believe-they.md, Matteo_Rizzetto_notes.md, 07_survey_results.md, OR-008_apple-app-store_2026_ns-app-nl.md, OF-002_eisenbahnforum_2016_eisenbahnforum-reiseerlebnisse-bahn.md, 04_open_issues.md, SPEC-01_foundation.md]
---

# OQ-01: Which sources tell the real position, and which leads

One open question of the specifications, listed in [00_Open_questions_index.md](00_Open_questions_index.md).

| | |
| --- | --- |
| **Question** | Which sources tell the real position and the expected time of a vehicle (the operator, the position of travellers on board, what travellers report), and which one leads when they disagree? |
| **Raised in** | [SPEC-01](../SPEC-01_foundation.md), [SPEC-02](../SPEC-02_real-state-of-the-run.md) |
| **Marker** | [not traced] |
| **Research support** | Partly supported: the research shows the situation and some signs, not the answer |
| **State** | open |
| **Decision** | none yet |
| **Decided on** | none yet |

## Why it is open

The stories ask to see the source of every fact and how old it is, not which sources the product uses. SPEC-01 and SPEC-02 need the list of sources and a rule for when they disagree.

## Chain to the research

From the specification back to the evidence: each story under the specification it feeds, each feature under its story, each touchpoint under the feature that answers it, each quote under the touchpoint that holds it. Quotes are copied from the touchpoint and feature files.

| Step | Item | What it says |
| --- | --- | --- |
| Specification | [SPEC-02](../SPEC-02_real-state-of-the-run.md) | The Real State of the Run |
| User story | [F-01](../../02_Analysis/03_User_Stories/US-F-01_real-state-vehicle-source.md) | As the Como commuter, standing on the platform watching the delay on the board grow from 5 to 10 to 15 minutes while a third-party app shows another time, I want to see where the train really is, when it will really leave and arrive, why it is late and which source says so, so that he knows as early as an unofficial app would tell him. |
| Feature | [F-01](../../02_Analysis/02_Features/F-01_real-state-vehicle-source.md) | The real state of the vehicle, with its source and its reason |
| Touchpoint | [TP-090](../../02_Analysis/01_Touchpoints/TP-090_choosing-source-believe-they.md) | Choosing which source to believe when they disagree |
| Interview | [Matteo Rizzetto notes](../../01_Research/04_Interviews/Matteo_Rizzetto_notes.md) | A third-party site's times are "più veritieri rispetto a quelli di Trenitalia, e rispetto a quelli dei tabelloni" (truer than Trenitalia's, and than the boards') |
| Survey | [survey results](../../01_Research/05_Survey/07_survey_results.md) | Q15, Belgium, which source they believe: "Operator's app 5 · station screens 4 · staff 3 · other travellers 2 · own experience 2 · never happened 1" |
| Source | [OR-008](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-008_apple-app-store_2026_ns-app-nl.md) | 'in app staat dat treinen rijden; maar die rijden dus niet' (the app says trains run, but they do not) |
| Source | [OF-002](../../01_Research/03_Desk_Research/Doc_Notes/Online_Forums/OF-002_eisenbahnforum_2016_eisenbahnforum-reiseerlebnisse-bahn.md) | 'Sorge stets für widersprüchliche Informationen auf allen Kanälen' (always causes contradictory information on all channels) |
| Research open issue | [Q-08](../../01_Research/02_Plan/04_open_issues.md#1-open-questions) | Which source commuters believe when two disagree: only one participant was asked |

## What the research says

The research shows that sources disagree and that commuters pick one: one participant trusts a third-party site over the operator, and in the Belgian survey the operator's app comes first and other travellers come fourth. It does not say which sources a product should use, or which should lead. The research itself lists this as open (Q-08).

## Connections

- [00_Open_questions_index.md](00_Open_questions_index.md): the list of all the open questions.
- [SPEC-01_foundation.md](../SPEC-01_foundation.md): raises this question.
- [SPEC-02_real-state-of-the-run.md](../SPEC-02_real-state-of-the-run.md): raises this question.
- [US-F-01_real-state-vehicle-source.md](../../02_Analysis/03_User_Stories/US-F-01_real-state-vehicle-source.md): a story behind the question.
- [F-01_real-state-vehicle-source.md](../../02_Analysis/02_Features/F-01_real-state-vehicle-source.md): the feature behind that story.
- [TP-090_choosing-source-believe-they.md](../../02_Analysis/01_Touchpoints/TP-090_choosing-source-believe-they.md): the moment of the journey the evidence is about.
- [Matteo_Rizzetto_notes.md](../../01_Research/04_Interviews/Matteo_Rizzetto_notes.md): an interview quoted in the chain.
- [07_survey_results.md](../../01_Research/05_Survey/07_survey_results.md): the survey answers quoted in the chain.
- [OR-008_apple-app-store_2026_ns-app-nl.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-008_apple-app-store_2026_ns-app-nl.md): a source quoted in the chain.
- [OF-002_eisenbahnforum_2016_eisenbahnforum-reiseerlebnisse-bahn.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Forums/OF-002_eisenbahnforum_2016_eisenbahnforum-reiseerlebnisse-bahn.md): a source quoted in the chain.
- [04_open_issues.md](../../01_Research/02_Plan/04_open_issues.md): lists the related open questions of the research.
