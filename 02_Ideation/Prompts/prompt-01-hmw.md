---
title: "Example prompt — Generate the questions"
date: 2026-10-20
activity: example-prompt
source: "Course material — Lesson 05 · Ideation Lab"
author: "Alberto Andreetto — example material"
channel: course
method: prompt example
tags: [prompt, hmw, questions, user-stories]
confidence: high
grade: tertiary
status: complete
related: [prompt-03-ideation.md, prompt-04-clustering.md, prompt-05-prioritisation.md, prompt-06-concept.md]
---

# Example prompt — Generate the questions

The hands-on 01 prompt: How-Might-We questions out of the user stories. Write yours by hand first — then run this on the same stories and compare. The model proposes questions; you calibrate the width. The calibration is the judgment.

## The prompt

```text
You are working in my research repository for a course project on
redesigning one moment of the daily rail commute in Milan.

Input: the synthesis document — every user story that survived the
traceability check, with its feature, touchpoint and quote. My own
HMW drafts are at the top of the concepts file: read them, but do
not copy them.

TASK — generate the questions:

1. For each user story, propose one How-Might-We question:
   how might we [capability] for [who] in [circumstance]?
2. For the three stories with the strongest evidence, propose one
   additional question each — a different width on the same story.
3. Output a markdown table, one row per question:

   | question | the story behind it | the quote | its width, one line |

RULES:
- Every question carries its story: who, circumstance, value.
  A question with no story behind it is brainstorming with
  formatting.
- Translation, not invention: the question re-states what the
  story already says. New needs are not your job — new phrasings
  of the real one are.
- No solutions smuggled in. "HMW show a countdown on the board"
  is an answer wearing a question's clothes.
- Do not filter: propose a question for every story, the awkward
  ones included. Choosing is my job — the calibration is the
  judgment.
- Mark each question [narrow], [calibrated] or [wide]: how many
  concepts could answer it? Fewer than three, too narrow; nothing
  to trace, too wide.

FINALLY:
- List the stories you could not question — where the "so that"
  was too thin to build on. Marked, not invented.
- Compare with my drafts: where you and I asked differently, say
  so — one line each. The differences are the lesson.
```

## Why the prompt is shaped like this

- **Translation, not invention.** The HMW re-states an anchored story in interrogative form — the extractive discipline of lesson 04, one link later. Generation of *answers* comes in the next hands-on; the questions stay on the chain.
- **Width is marked, not fixed.** The model labels [narrow]/[calibrated]/[wide]; the designer rewrites. Widening or anchoring a question is judgment about the answer-space — propose, don't decide, one more time.
- **"Do not copy my drafts" — the comparison is the lesson.** Same structure as lesson 04's touchpoints: by hand first, then with the agent, then the diff. The FINALLY section makes the diff a deliverable, not an accident.
- **No filtering.** A model that quietly drops the awkward stories is a model that is deciding. The prompt forces one question per story — selection stays with the designer, where the calibration lives.
- **The un-questionable stories are the payload.** A "so that" too thin to build a question on is a finding about the synthesis — surfaced now, in cheap minutes, instead of in Specification when it is expensive.

## The test

Count the answers each question can hold: fewer than three, widen it; none traceable to a story, anchor it. Then read the rows where you and the model asked differently — same story, different question. One of you saw an answer-space the other missed. Decide which, write your question, and commit it: the committed list, not the generated one, is what ideation runs on tonight.

---

*Example material for Lesson 05 — Ideation Lab. Adapt the story format, the width marks and the comparison output to your own synthesis document.*
