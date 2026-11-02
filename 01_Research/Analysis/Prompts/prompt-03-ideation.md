---
title: "Example prompt — Expand the concepts"
date: 2026-10-20
activity: example-prompt
source: "Course material — Lesson 05 · Ideation Lab"
author: "Alberto Andreeto — example material"
channel: course
method: prompt example
tags: [prompt, ideation, concepts, hmw]
confidence: high
grade: tertiary
status: complete
related: [prompt-01-hmw.md, prompt-04-clustering.md, prompt-05-prioritisation.md, prompt-06-concept.md, ../lesson-04/prompt-features.md]
---

## The prompt

```text
You are working in my research repository on a door to door multimodal commute.

Input: 

two How-Might-We questions:
HMW-01 - How might we enable the daily commuter to be informed about the exact delay and location while waiting on the platform?
HMW-02 - How might we enable the daily commuter on their return train to alert their relatives of the exact delay of the train?

The User Stories behind the HMW, with their quotes
F-01 [strong · High] As the Como cross-border office-day commuter, standing on the platform watching the delay on the board grow from 5 to 10 to 15 minutes while a third-party app shows another time, I want to see where the train really is, when it will really leave and arrive, why it is late and which source says so, so that he knows as early as an unofficial app would tell him. Source: F-01 · Matteo_Rizzetto_notes · "a 20 inizio a sentire la puzza, a 25 la puzza si fa più forte e aspetto solo che appaia la scritta annullato" (at 20 I begin to smell it, at 25 the smell is stronger and I only wait for the word cancelled to appear); "Non capisco perché un'app non ufficiale te lo possa dire prima, e tu no" (I do not understand why an unofficial app can tell me earlier and you cannot)

F-09 [strong · Medium] As the Verona–Milan evening-before commuter, on the train back to Verona with his father coming to fetch him at the station, I want to share the train time and the live arrival, with a confirmation of any delay, with the person driving or waiting, so that the person who comes to the station knows when he arrives. Source: F-09 · Marco_Palermo_notes · "On board he does check how the train is doing, more on the way back, because someone is coming to fetch him"; "for twenty years his father, who fetches him, has said the trains are always late"

TASK — expand the range:

1. For each of the two questions, propose twelve concepts, spanning
   at least three different directions. A direction is a family of
   answers — not a variation of one answer.
2. Output a markdown table, one row per concept:

 ID  | concept | HMW question it answers | what it does, one line | direction |

RULES:
- Every concept names the HMW it answers. A concept with no
  question is deleted, not defended.
- Variety is the job. If the concepts cluster in one direction,
  generate again — different directions, same anchor.
- No converging: no recommendations, no ranking, no "the best
  option is". You widen the range; I decide what is relevant,
  valuable and feasible.
- One line of what it does, not how. No implementation, no UI,
  no feature lists — a concept is a direction, not a design.
- The question comes from evidence; the answers may be new —
  that is your job tonight. But no "apps typically", no
  competitor scanning: the anchor is the question, not your
  training.
- Mark concepts [risky] where they lean on assumptions the
  stories do not support. Marking beats hiding.

FINALLY:
- Report the directions you found — named, one line each.
- List the concepts you dropped for not answering the question,
  with the reason.

```
