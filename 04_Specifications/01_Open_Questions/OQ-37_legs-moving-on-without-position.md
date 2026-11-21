---
source: Claude
date: 2026-11-21 18:19
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, questions, information]
related: [00_Open_questions_index.md, SPEC-01_foundation.md, SPEC-04_todays-trip-at-a-glance.md, SPEC-02_real-state-of-the-run.md]
---

# OQ-37: Legs moving on without the position

One open question of the specifications, listed in [00_Open_questions_index.md](00_Open_questions_index.md).

| | |
| --- | --- |
| **Question** | Without consent to use the commuter's position, how does a leg move from to do to in progress to completed: by the times of the plan (marked as estimated), by the commuter marking a leg done, or not at all? |
| **Raised in** | [SPEC-01](../SPEC-01_foundation.md) (States, leg), shown by [SPEC-04](../SPEC-04_todays-trip-at-a-glance.md) and [SPEC-02](../SPEC-02_real-state-of-the-run.md) |
| **Marker** | [not traced] |
| **Research support** | ⚠ Not supported by the research: no note speaks of legs moving on; the states were asked by Marco on 2026-11-21 |
| **State** | open |
| **Decision** | none yet |
| **Decided on** | none yet |

## Why it is open

The legs move on when the commuter's position reaches the start or the end of a leg. The foundation keeps the position off until the commuter turns it on; the prototype gives consent in its mock profile, so the question shows only in the product.

## Chain to the research

| Step | Item | What it says |
| --- | --- | --- |
| Specification | [SPEC-01](../SPEC-01_foundation.md) | States: leg to do, in progress, completed, moved by the position |
| Rule | [SPEC-01](../SPEC-01_foundation.md) | Rules that hold everywhere: consent to use position, off until turned on |
| Request | Marco, 2026-11-21 | When the passenger's position reaches the end of a leg, the leg is completed and the next one becomes active |

## What the research says

Nothing about the states of the legs. Whether travellers accept sharing their position is itself not supported (see [OQ-01](OQ-01_sources-of-the-real-position.md)).

## Connections

- [SPEC-01_foundation.md](../SPEC-01_foundation.md): the specification that raises this question.
- [SPEC-04_todays-trip-at-a-glance.md](../SPEC-04_todays-trip-at-a-glance.md), [SPEC-02_real-state-of-the-run.md](../SPEC-02_real-state-of-the-run.md): show the states of the legs.
