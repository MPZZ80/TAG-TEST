---
source: Claude
date: 2026-11-21 17:53
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, questions, disruption, mode-choice]
related: [00_Open_questions_index.md, SPEC-02_real-state-of-the-run.md]
---

# OQ-36: The map of a route

One open question of the specifications, listed in [00_Open_questions_index.md](00_Open_questions_index.md).

| | |
| --- | --- |
| **Question** | Which map shows the route of a leg, the live position of the vehicle and the routes of the alternatives in the product, and from which service (a map and routing service, open map data such as OpenStreetMap, the operators' own maps)? The live position itself depends on [OQ-01](OQ-01_sources-of-the-real-position.md). |
| **Raised in** | [SPEC-02](../SPEC-02_real-state-of-the-run.md) (rules 6 and 17, `<leg-map>` and `<route-map>`) |
| **Marker** | [technology choice open] |
| **Research support** | ⚠ Not supported by the research: no note asks for a map; the maps (of an alternative, then of each leg with the live position) were asked by Marco on 2026-11-19 |
| **State** | open |
| **Decision** | none yet |
| **Decided on** | none yet |

## Why it is open

The prototype has no backend and calls no service, so the route is drawn as a sketch from approximate points in the mock data. A real map needs a map service and its terms of use.

## Chain to the research

| Step | Item | What it says |
| --- | --- | --- |
| Specification | [SPEC-02](../SPEC-02_real-state-of-the-run.md) | State of the run, rule 6: a map of each leg with the live position of the vehicle; rule 17: the page of an alternative with a map of its route |
| Request | Marco, 2026-11-19 | A map with the route of the alternative, to see the difference with the planned trip |

## What the research says

Nothing: the research asks for the ways still open when a trip breaks (F-02), not for a map of them.

## Connections

- [SPEC-02_real-state-of-the-run.md](../SPEC-02_real-state-of-the-run.md): the specification that raises this question.
