---
title: "Example prompt — Mark the concepts"
date: 2026-10-20
activity: example-prompt
source: "Course material — Lesson 05 · Ideation Lab"
author: "Alberto Andreetto — example material"
channel: course
method: prompt example
tags: [prompt, prioritisation, concepts, scope]
confidence: high
grade: tertiary
status: complete
related: [prompt-04-clustering.md, prompt-06-concept.md, prompt-03-ideation.md]
---

# Example prompt — Mark the concepts

The hands-on 05 prompt: every concept marked on the three axes — valuable, feasible, relevant. The model proposes marks with reasons; the decision stays with the designer. This is the propose/don't-decide split from lesson 04, applied where it matters most.

## The prompt

```text
You are working in my research repository for a course project on
redesigning one moment of the daily rail commute in Milan.

Input: my clustered concepts file — the families, their concepts,
the questions they answer. Plus the synthesis document: the user
stories with their "so that" clauses and quotes.

TASK — mark the concepts:

1. For each concept, mark it on three axes:
   - valuable: to the person in the story — does it serve the
     "so that" the notes show?
   - feasible: for the prototype — one flow, this course, my hands
     and my agent. Not a platform team.
   - relevant: to the brief — the chosen moment, not the whole
     commute.
2. Per axis: [strong], [weak], or [out] — each with a one-line
   reason.
3. Output a markdown table, one row per concept:

   | concept | valuable | feasible | relevant | the one-line reasons |

RULES:
- Propose, do not decide. The marks are proposals; the build
  decision stays with me.
- Reasons trace. A "valuable" reason points at a "so that" or a
  quote; a reason without a trace is hope with formatting.
- No averaging. A concept [strong][strong][out] is out — one
  broken axis breaks the concept.
- Do not propose a winner. Do not rank the families, do not say
  which concept I should build. That call is the whole point of
  this stage being mine.
- Feasible is honest: [weak] on feasible for anything needing
  hardware, a timetable feed, or an organisation to change.

FINALLY:
- List the concepts where the axes disagree — strong on one,
  weak on another. That is the real decision list.
- Count: strong / weak / out per axis.
```

## Why the prompt is shaped like this

- **The axes are defined in the prompt.** Valuable traces to the "so that", feasible means prototype-feasible, relevant means the chosen moment — each axis with its own evidence rule, so the marks are checkable instead of vibes.
- **Reasons trace, or they are hope with formatting.** Lesson 04's line, turned into a rule: an untraceable reason is not a reason, it is a wish wearing one.
- **No averaging.** The [strong][strong][out] rule prevents the model's favorite kindness — averaging a concept into mediocrity and shipping it. One broken axis breaks the concept; scope reduction is supposed to hurt.
- **The disagreement list is the payload.** Concepts where the axes fight are exactly the ones the designer must decide with eyes open — the model surfaces the tension, the designer holds it.
- **The counts close the loop.** Strong/weak/out per axis is the honest size of what the evidence supports — the same move as lesson 04's feature marking, one phase later.

## The test

Take the concepts where your marks and the model's disagree. Read its reason, then the story's "so that" — one of the two is doing the hoping. And check the [out] column against the cut list you keep: if a concept is marked out here and absent from the cut list, something got lost — the cut list must survive in full.

---

*Example material for Lesson 05 — Ideation Lab. Adapt the axis definitions to your own brief and prototype constraints.*
