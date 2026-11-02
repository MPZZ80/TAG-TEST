---
source: Claude
date: 2026-11-02 20:37
method: generated
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, rules]
related: [01_How_might_we.md, 04_Human+AI_Ideas.md, 05_Ideas_prioritization.md, Generated_Features.md, Generated_User_Stories.md, Generated_Touchpoints.md]
---

# Instructions for Generating the Specifications

A supplementary prompt. Give it to the agent together with the request to write the specifications, or paste it after a generic specification prompt: where the two disagree, this file wins.

## The prompt

```text
You are working in my research repository on door to door
intercity commuting in multimodal environments.

Input: my decisions — the concept or concepts I chose, the
families and marks in 02_Ideation/, the How-Might-We questions,
the features, the user stories and the touchpoints in
01_Research/Analysis/. The choices are made; your job is to turn
them into specifications, not to revisit them.

TASK — write the specifications:

1. Split the chosen concept into specifications, one per feature
   it delivers. If a feature needs two behaviours that could ship
   apart, split it into two specifications and say so. If two
   features are one behaviour, merge them and say so.
2. Write each specification in its own file in
   02_Ideation/06_Specifications/, with the template below.
3. Write SPEC-00_overview.md: the list of the specifications and
   the traceability table that links every one of them to its
   concept, family, HMW, feature, user story and touchpoints.

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
- Keep every reference. Every specification names, by its exact
  ID, the concept (S01…, C01-01…), the family (FAM-…), the
  How-Might-We questions (HMW-…), the features (F-…), the user
  story (by its feature and persona) and the touchpoints (TP-…)
  it rests on, with a relative link to the file that holds each.
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
| user story | One per feature, named by its feature and persona | [Generated_User_Stories.md](../../01_Research/Analysis/Generated_User_Stories.md) |
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

## Traceability

| | |
| --- | --- |
| **Concept** | <S0… / C…-…, with link> |
| **Family** | <FAM-…, with link> |
| **How-Might-We** | <HMW-…, with link> |
| **Feature** | <F-…, with link> |
| **User story** | <As a …, in …, I want …, so that … — copied as written, with link> |
| **Touchpoints** | <TP-…, with link> |
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

<Two or three lines: the concept specified, how many specifications, what they leave out.>

| Spec | Name | Concept | Family | HMW | Feature | Persona | Touchpoints |
| --- | --- | --- | --- | --- | --- | --- | --- |

## Splits and merges
Features split or merged into specifications, and why.

## Not specified
Features or concepts of the chosen direction left without a specification, and why.

## Open questions
All the open questions of the specifications, in one list.
```
