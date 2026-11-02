---
source: Claude
date: 2026-11-02 20:44
method: generated
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, rules]
related: [Generated_User_Stories.md, 01_How_might_we.md, 04_Human+AI_Ideas.md, 05_Ideas_prioritization.md, Generated_Features.md, Generated_Touchpoints.md]
---

# Instructions for Generating the Specifications

A supplementary prompt. Give it to the agent together with the request to write the specifications, or paste it after a generic specification prompt: where the two disagree, this file wins.

## The prompt

```text
You are working in my research repository on door to door
intercity commuting in multimodal environments.

Input: the user stories in
01_Research/Analysis/Generated_User_Stories.md are the base of
the specifications. Around them: the features and touchpoints
behind each story, the How-Might-We questions, and my decisions
in 02_Ideation/ — the concept or concepts I chose, their
families and marks. The choices are made; your job is to turn
the stories into specifications, not to revisit the choices.

TASK — write the specifications:

1. Read every user story and give it a priority:
   - concept: the story's feature is behind an HMW that the
     chosen concept answers (concept → HMW in
     05_Ideas_prioritization.md, HMW → feature in
     01_How_might_we.md);
   - outside: every other story.
2. Start from the concept stories. Group them by the behaviour
   that meets their need: one specification per behaviour. A
   specification may serve several stories and features, and a
   story may feed more than one specification; say why the
   stories of a specification belong together. If a story needs
   two behaviours that could ship apart, split it into two
   specifications and say so.
3. Then take the outside stories, one by one:
   - if a specification already written meets its need, add the
     story to it, marked outside;
   - if it needs a behaviour of its own, write a specification
     for it after the concept ones, marked outside;
   - if it does not fit the product the concept stories outline,
     do not specify it: list it under "Not specified" with the
     reason.
   An outside story never changes a behaviour a concept story
   needs; where the two pull in different directions, the
   concept story wins and the conflict goes in "Open questions".
4. Write each specification in its own file in
   02_Ideation/06_Specifications/, with the template below.
5. Write SPEC-00_overview.md: the list of the specifications, the
   traceability table, and every user story — concept and
   outside — with its priority and the specifications that serve
   it, or the reason it has none.

Each specification is a prompt for integration: a designer, a
developer or another agent must be able to build the behaviour
from that file alone, without opening anything else. The
references are there to trace it back, not to explain it.

RULES:
- Technology-agnostic. Name no platform, operating system,
  language, framework, vendor, database, API, data format or
  device brand. Describe what the system knows, decides and
  shows, and on which kind of channel ("a message on the channel
  the traveller chose", not the name of an app or a protocol).
  If a behaviour cannot be described without a technology, write
  the need it serves and mark it [technology choice open].
- Stories first. The behaviour of a specification is what its
  stories ask for: the persona, the moment and the "so that"
  come from the stories, not from the wording of a concept. A
  concept says how the chosen direction answers a story; use it
  to shape the behaviour, not to add to it.
- Keep every reference. Every specification names, by its exact
  ID, every user story (by its feature and persona) with its
  priority, the features (F-…), the touchpoints (TP-…), the
  How-Might-We questions (HMW-…), the concepts (S01…, C01-01…)
  and the families (FAM-…) it rests on, with a relative link to
  the file that holds each. A specification with only outside
  stories writes "none" for concepts and families.
- Logic, not screens. Describe how it works: what starts it,
  what it needs to know, the rules it follows step by step, the
  states it can be in, and what the traveller sees or receives
  at each step. Layout and visual design are out of scope.
- No invention. Every rule and every behaviour traces to a
  feature, a story, an HMW or a quote behind them. A behaviour
  you need and cannot trace is marked [not traced] and listed
  under "Open questions"; it is not written as settled.
- Disruption is the normal case. For every specification, say
  what happens when the data is late, missing, wrong or
  contradicted by another source, and when the trip breaks.
- Door to door. Say which legs it covers: first mile, main leg,
  transfer, last mile, whole journey.
- Acceptance criteria are testable: Given / When / Then, one
  behaviour each, with no technology in them.
- Use the personas of Generated_User_Stories.md by their names.
  No real names of interviewees.
- Write in English. Quotes stay in their original language with
  an English translation.
- Every file starts with the metadata block of
  00_Intro/Metadata/metadata_schema.md, with status: draft.
```

## Files and names

- **Folder:** `02_Ideation/06_Specifications/`, next to this file.
- **Overview:** `SPEC-00_overview.md`.
- **One specification:** `SPEC-<NN>_<short-name>.md`, for example `SPEC-01_delay-on-chosen-channel.md`. The number is two digits, in the order of the overview, and is never reused.
- **Metadata of a specification:** `source: Claude`, `method: synthesis`, `status: draft`, `grade: n/a`, `confidence: n/a`, `tags: [design, internal, output, <topics>, <pain points>]`, `related:` the files it traces to.
- After writing, update the `README.md` of this folder, `Index.md` and `CHANGELOG.md`, as `AGENTS.md` says.

## Where the references are

| ID | What it is | File |
| --- | --- | --- |
| `TP-…` | Touchpoints: moments of the commute, with their quotes | [Generated_Touchpoints.md](../../01_Research/Analysis/Generated_Touchpoints.md) |
| `F-…` | Features, with the touchpoints they answer | [Generated_Features.md](../../01_Research/Analysis/Generated_Features.md) |
| user story | The base of the specifications: one per feature, named by its feature and persona | [Generated_User_Stories.md](../../01_Research/Analysis/Generated_User_Stories.md) |
| `HMW-…` | How-Might-We questions, each with its feature | [01_How_might_we.md](../01_How_might_we.md) |
| `S0…` | Marco's concepts | [02_Human_Ideas.md](../02_Human_Ideas.md) |
| `C…-…` | AI concepts | [03_AI_Ideas.md](../03_AI_Ideas.md) (search it, do not read it in full) |
| `FAM-…` | Families of concepts | [04_Human+AI_Ideas.md](../04_Human+AI_Ideas.md) |
| marks | Valuable, feasible, relevant, with reasons | [05_Ideas_prioritization.md](../05_Ideas_prioritization.md) |

## Template of a specification

```markdown
---
<metadata block>
---

# SPEC-<NN>: <Name>

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

One row per story this specification serves, copied as written; concept stories first.

| Priority | Feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- | --- |
| <concept / outside> | <F-…, with link> | <persona> | <As a …, in …, I want …, so that …> | <all of it, or the part covered, and which specification covers the rest> |

## Traceability

| | |
| --- | --- |
| **Priority** | <concept, if at least one story is concept; otherwise outside> |
| **Features** | <F-…, with link> |
| **Touchpoints** | <TP-…, with link> |
| **How-Might-We** | <HMW-…, with link> |
| **Concepts** | <S0… / C…-…, with link, or none> |
| **Families** | <FAM-…, with link, or none> |
| **Legs** | <first mile / main leg / transfer / last mile / whole journey> |

## Description
What it does, for whom, in which moment. A stranger could read it and repeat it back.

## Operating logic
- **Starts when:** <the event or the traveller's action>
- **Needs to know:** <the information it uses, described as information, and where it comes from: the traveller, other travellers, the operator, the timetable>
- **Rules:** <step by step, numbered>
- **States:** <the states it can be in and what moves it from one to the next>
- **The traveller receives:** <what, when and on which kind of channel>

## When things go wrong
Data late, missing, wrong or contradicted; the trip breaks; the traveller does not respond.

## Out of scope
What this specification does not do, and which specification does it, if any.

## Acceptance criteria
- **Given** <situation> **when** <event> **then** <observable result>

## Open questions
Behaviours marked [not traced] or [technology choice open], and what Marco has to decide.
```

## Template of the overview

```markdown
---
<metadata block>
---

# Specifications: Overview

<Two or three lines: how many stories, how many concept and outside, how many specifications, what they leave out.>

| Spec | Name | Priority | User stories (feature · persona) | Features | Touchpoints | HMW | Concepts | Families |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

## User stories and specifications
One row per user story in Generated_User_Stories.md, concept stories first.

| Priority | Feature | Persona | Specifications |
| --- | --- | --- | --- |

## Splits and groupings
Stories split into several specifications, stories grouped into one, outside stories added to a concept specification, and why.

## Not specified
Stories left without a specification, concept or outside, and why.

## Open questions
All the open questions of the specifications, in one list.
```
