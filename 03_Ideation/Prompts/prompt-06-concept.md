---
title: "Example prompt — Draft the concept document"
date: 2026-10-20
activity: example-prompt
source: "Course material — Lesson 05 · Ideation Lab"
author: "Alberto Andreetto — example material"
channel: course
method: prompt example
tags: [prompt, concept, specification, handoff]
confidence: high
grade: tertiary
status: complete
related: [prompt-05-prioritisation.md, prompt-03-ideation.md]
---

# Example prompt — Draft the concept document

The hands-on 06 prompt: the chosen concept, written up — the document Specification takes as input. The decisions are made; the model drafts them into shape. Every line is a draft until you commit it.

## The prompt

```text
You are working in my research repository for a course project on
redesigning one moment of the daily rail commute in Milan.

Input: my decisions — the chosen direction, the clustered concepts
file with its marks, the reduced feature set, and the synthesis
document (touchpoints, stories, quotes). The choices are made;
your job is to draft them into a document, not to revisit them.

TASK — draft the concept document:

1. One paragraph defining the chosen concept: what it does, for
   whom, in which moments. A stranger could read it and repeat
   it back.
2. The reduced feature set: each feature with the touchpoint it
   answers and the user story behind it.
3. The cut list: every concept dropped, with its reason.

RULES:
- You draft, I decide. Every line is a draft until I commit it.
- The paragraph carries the chain: who and circumstance come from
  the stories, the moments come from the touchpoints, and the
  quotes stay attached. If a sentence cannot be traced, mark it —
  do not smooth it.
- The reduced set stays reduced. Do not add features, do not
  "improve" them, do not merge them. The scope was decided.
- The cut list survives in full. Dropped, with reasons — omission
  is information.
- No UI, no implementation, no technology choices. Specification
  is next lesson; do not do its job.

FINALLY:
- List the places where the material was thin — where a line
  leans on one quote, or on none. Marked, not smoothed.
- Count: features in the set, concepts cut, reasons given.
```

## Why the prompt is shaped like this

- **Drafting, not deciding.** The decisions — direction, scope, cuts — were the designer's work in the previous hands-ons. This prompt fences the model into transcription and structure: the last thing ideation needs is a fresh round of opinions at the exit.
- **The paragraph must carry the chain.** Who, circumstance, moments, quotes — the traceability rule that ran through lessons 04 and 05 survives into the handoff document. A definition that can't be traced is marketing copy.
- **The scope is sacred.** "Do not add, do not improve, do not merge" — the model's helpfulness is the enemy of a reduced set. The reduced set is the deliverable precisely because it is small.
- **The cut list survives in full.** Same rule as every phase since synthesis: what was dropped and why is information — often the most honest part of the document.
- **"Do not do Specification's job" keeps the lane.** The next lesson turns this document into verifiable clauses. If the model writes UI and tech choices now, it is Specification pretending to be ideation — and next lesson has nothing left to specify.

## The test

Hand the paragraph to someone who has never seen the project. Can they say back what the concept does, for whom, in which moment? If not, it is notes, not a definition. Then pick a feature from the reduced set and walk it back: touchpoint, story, quote. The chain either holds into the handoff, or the document goes back — marked.

---

*Example material for Lesson 05 — Ideation Lab. Adapt the document sections to your own concept decisions.*
