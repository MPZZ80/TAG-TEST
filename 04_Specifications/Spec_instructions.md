---
source: Claude
date: 2026-11-16 18:29
method: generated
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, rules]
---

# Instructions for Writing Specifications

How an agent turns a set of user stories into technology-agnostic specifications, one file per behaviour, each usable on its own as a prompt for building that behaviour. They do not depend on any project or domain (mobility, energy, online grocery shopping or any other): when someone says "use `Spec_instructions.md` to create the specifications", follow this file from start to end.

## 1. Before you start

Find the inputs. If the request does not say where they are, look for them in the project, and ask only for what you cannot find.

| Input | Needed | What it gives |
| --- | --- | --- |
| User stories | Yes | The base of the specifications: who, in which moment, wants what, so that what |
| Problem questions (for example How-Might-We) | No | The link between a concept and the stories it answers |
| Features, touchpoints, journey moments | No | What lies behind each story, and the quotes or evidence behind it |
| Families of concepts, marks or scores | No | How the concepts were grouped and judged |

- **Do not follow the chosen concept for now.** Even if the project has a chosen concept, ignore it: do not use it as an input and do not rank the stories by it. Every story has the same weight.
- **The inputs are settled.** Your job is to turn the stories into specifications, not to revisit the concepts or how they were marked.
- **Project rules win.** If the project has its own conventions for language, metadata, file names, indexes or change logs, follow them on top of this file.
- **Output folder:** create the specifications in `04_Specifications/`, unless the request names another folder.

### Map of the references

Before writing, list where each kind of reference lives in this project and how its IDs are written. The map goes at the top of the overview, and every specification uses the same IDs and links. Leave out a row the project does not have. For example:

| ID | What it is | File |
| --- | --- | --- |
| `US-…` or feature · persona | User stories, the base of the specifications | <relative link> |
| `F-…` | Features, with the touchpoints they answer | <relative link> |
| `TP-…` | Touchpoints: moments of the user's journey, with their quotes | <relative link> |
| `HMW-…` | Problem questions, each with the feature or story it comes from | <relative link> |
| `S0…`, `C…-…` | Concepts, human and AI | <relative link> |
| `FAM-…` | Families of concepts | <relative link> |
| marks | Scores of the concepts, with their reasons | <relative link> |

When an input has no IDs, give it short ones in the map, say so, and do not change the input file.

## 2. Steps

1. **Write the foundation first**, `SPEC-01_foundation.md`, with the template in section 5. It holds what two or more specifications need: the user, the things the product deals with, their states, the sources of information and how far each is trusted, the channels, the vocabulary, and the rules that hold everywhere (no data, late data, contradicting sources, what the user consents to share). What only one specification needs stays in that one. Every element names the stories that need it. The other specifications refer to the foundation by section and do not repeat it; they still describe their own behaviour in full.
2. **Write the specifications.** Group the stories by the behaviour that meets their need: one specification per behaviour, numbered from `SPEC-02`. A specification may serve several stories, and a story may feed more than one specification; say why the stories of a specification belong together. If a story needs two behaviours that could ship apart, split it into two specifications and say so. If a story does not fit the purpose written in the foundation, do not specify it: list it under "Not specified" with the reason. When in doubt, ask instead of leaving it out.
3. **Review the foundation and the dependencies** once every specification is written. In the foundation, remove what only one specification uses and add what several repeat. Then check that every element listed under "Depends on" is provided by a specification; if none provides it, add it to the specification that needs it or write a new one.
4. **Write the overview**, `SPEC-00_overview.md`: the list of the specifications, the traceability table, the dependencies, and every story with the specifications that serve it, or the reason it has none.
5. **Check before finishing.**
   - Every story has at least one specification, or a reason under "Not specified".
   - Every element under "Depends on" is provided by a named specification.
   - Every reference link opens an existing file.
   - Every [not traced] or [technology choice open] item is listed under "Open questions".

## 3. Rules

- **Each file stands alone.** A designer, a developer or another agent must be able to build the behaviour from that file and the foundation, without opening anything else. References are there to trace a behaviour back, not to explain it.
- **Technology-agnostic.** Name no platform, operating system, language, framework, vendor, database, API, data format or device brand. Describe what the system knows, decides and shows, and on which kind of channel ("a message on the channel the user chose", not the name of an app or a protocol). If a behaviour cannot be described without a technology, write the need it serves and mark it [technology choice open].
- **Stories first.** The behaviour of a specification is what its stories ask for: the persona, the moment and the "so that" come from the stories, not from the wording of a concept. Concepts are references only: cite in Traceability every concept that matches a story, but take the behaviour from the stories alone. When concepts suggest different ways to meet a story, do not choose between them: describe what the story asks and put the choice in "Open questions".
- **Keep every reference.** Every specification names, by its exact ID and with a relative link to the file that holds it, every story it serves, and every feature, touchpoint, problem question, concept and family it rests on, when the inputs have them. A specification with no concept or family behind it writes "none" for them.
- **Logic, not screens.** Describe what starts it, what it needs to know, the rules it follows step by step, the states it can be in, and what the user sees or receives at each step. Layout and visual design are out of scope. If a specification needs another element to work (information, a setting, an object, a choice of the user), that element must be specified too: how it is included, entered, configured or obtained, in the same specification or in another one, which it names. Nothing a behaviour relies on is assumed to exist already. When no story asks for that element, trace it to the specification that needs it.
- **Stories that conflict.** When two stories ask for opposite behaviours, no story wins on its own: specify what they share and put the conflict in "Open questions" for the person who asked to decide.
- **No invention.** Every rule and behaviour traces to a story, a feature, a problem question or the evidence behind them. A behaviour you need and cannot trace is marked [not traced] and listed under "Open questions"; it is not written as settled.
- **Failure is a normal case.** For every specification, say what happens when the data is late, missing, wrong or contradicted by another source, when the process breaks halfway, when the user does not respond, and when an element it depends on has not been set up yet.
- **Say what part of the experience it covers.** Name the stages of the user's journey the specification acts on, using the stages the inputs define, or "whole journey".
- **Testable acceptance criteria.** Given / When / Then, one behaviour each, with no technology in them.
- **Personas by their names** as the stories give them. No real names of interviewees or customers.
- **Quotes** stay in their original language, with a translation into the language of the specifications.
- **Status.** Every file is a draft until the person who asked for it reviews it.

## 4. Files and names

- **Folder:** every file below goes in `04_Specifications/`, next to this file.
- **Overview:** `SPEC-00_overview.md`.
- **Foundation:** `SPEC-01_foundation.md`, always the first specification.
- **One specification:** `SPEC-<NN>_<short-name>.md` from `SPEC-02`, for example `SPEC-02_reminder-before-leaving.md` or `SPEC-03_missing-item-swap.md`. The number has two digits, follows the order of the overview, and is never reused.
- **Specifications already written:** when the folder already holds specifications, edit them in place under their names and keep their numbers. A new specification takes the next free number. A specification that is dropped is deleted, its number stays unused, and the overview says so under "Not specified".
- **After writing:** update whatever the project keeps current when files are added, such as a folder guide, an index or a change log.

## 5. Templates

### A specification

```markdown
# SPEC-<NN>: <Name>

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

One row per story this specification serves, copied as written.

| Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- |
| <ID, with link> | <persona> | <As a …, in …, I want …, so that …> | <all of it, or the part covered, and which specification covers the rest> |

## Traceability

| | |
| --- | --- |
| **Features** | <F-…, each with its link, or none> |
| **Touchpoints** | <TP-…, each with its link, or none> |
| **Problem questions** | <HMW-…, each with its link, or none> |
| **Concepts** | <S0… / C…-…, each with its link, or none> |
| **Families** | <FAM-…, each with its link, or none> |
| **Stages covered** | <the stages of the user's journey it acts on, or whole journey> |
| **Marks** | <the scores of its concepts, if the project has them, or none> |
| **Foundation** | <the sections of SPEC-01 it relies on> |

## Description
What it does, for whom, in which moment. A stranger could read it and repeat it back.

## Operating logic
- **Starts when:** <the event or the user's action>
- **Needs to know:** <the information it uses, described as information, and where it comes from: the user, other users, a third party, a schedule>
- **Rules:** <step by step, numbered>
- **States:** <the states it can be in and what moves it from one to the next>
- **The user receives:** <what, when and on which kind of channel>
- **Depends on:** <each element it needs to work (information, a setting, an object, a choice of the user) and the specification that provides it: this one or SPEC-…>
- **Provides:** <the elements it sets up that other specifications use, and which ones, or none>

## When things go wrong
Data late, missing, wrong or contradicted; the process breaks; the user does not respond; nothing set up yet (an element it depends on does not exist: what the user sees and where they set it up).

## Out of scope
What this specification does not do, and which specification does it, if any.

## Acceptance criteria
- **Given** <situation> **when** <event> **then** <observable result>

## Open questions
Behaviours marked [not traced] or [technology choice open], and what the person who asked has to decide.
```

### The foundation

Every section ends with the stories that need it (story · persona) and the specifications that use it. Leave out a section no story needs.

```markdown
# SPEC-01: Foundation

Use this file as a prompt: it lays the ground that every other specification stands on, independent of any technology. Build it first.

## Purpose
What the product is for, for whom and in which moments, in one paragraph drawn from the stories.

## Principles
The rules that hold in every specification, each traced to its stories: for example, the user sees where a fact comes from and how old it is.

## The user
Who uses it, by persona, and what the product knows about them: what they tell it, what they choose, what they can change or delete.

## The things it deals with
The main objects of the product (for example a trip, an energy contract and its meter readings, or a grocery order and its delivery slot), their parts, what the user saves and what the product infers.

## States
The states each main object can be in, what moves it from one to the next, and who or what can move it.

## Sources of information
Each kind of source (the user, other users, third parties, schedules), what it can tell, how far it is trusted, and what happens when two sources disagree.

## Channels
The kinds of channel on which the user can receive something, how they choose them, and when the product stays quiet.

## Rules that hold everywhere
No data, late data, wrong data; the user does not respond; consent to share, and what is never shared.

## Vocabulary
The terms every specification uses, with one meaning each.

## Acceptance criteria
- **Given** <situation> **when** <event> **then** <observable result>

## Open questions
Elements marked [not traced] or [technology choice open], and what the person who asked has to decide.
```

### The overview

```markdown
# Specifications: Overview

<Two or three lines: how many stories, how many specifications, what they leave out.>

## Map of the references

| ID | What it is | File |
| --- | --- | --- |

## Specifications

| Spec | Name | User stories | Features | Touchpoints | Problem questions | Concepts | Families |
| --- | --- | --- | --- | --- | --- | --- | --- |

## Dependencies
One row per element that a specification needs and another provides.

| Element | Provided by | Used by |
| --- | --- | --- |

## User stories and specifications
One row per user story.

| Story | Persona | Specifications |
| --- | --- | --- |

## Splits and groupings
Stories split into several specifications, stories grouped into one, and why.

## Not specified
Stories left without a specification, specifications dropped, and why.

## Open questions
All the open questions of the specifications, in one list.
```
