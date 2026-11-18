---
source: Claude
date: 2026-11-18 19:51
method: generated
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, rules]
---

# Instructions for Writing Specifications

How an agent turns a set of user stories into specifications, one file per behaviour, each usable on its own as a prompt for building that behaviour within the architecture of section 3. The steps and rules do not depend on any domain (mobility, energy, online grocery shopping or any other): when someone says "use `Spec_instructions.md` to create the specifications", follow this file from start to end.

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

1. **Write the foundation first**, `SPEC-01_foundation.md`, with the template in section 6. It holds what two or more specifications need: the user, the things the product deals with, their states, the sources of information and how far each is trusted, the channels, the vocabulary, the rules that hold everywhere (no data, late data, contradicting sources, what the user consents to share), the shared parts of the architecture (section 3), the information architecture (the pages and how they are reached, section 3), and the design of the start page and of the initial set-up of the profile and the usual trips (or whatever the user saves to use again, in another domain). What only one specification needs stays in that one. Every element names the stories that need it. The other specifications refer to the foundation by section and do not repeat it; they still describe their own behaviour in full.
2. **Write the specifications.** Group the stories by the behaviour that meets their need: one specification per behaviour, numbered from `SPEC-02`. A specification may serve several stories, and a story may feed more than one specification; say why the stories of a specification belong together. If a story needs two behaviours that could ship apart, split it into two specifications and say so. If a story does not fit the purpose written in the foundation, do not specify it: list it under "Not specified" with the reason. When in doubt, ask instead of leaving it out.
3. **Review the foundation and the dependencies** once every specification is written. In the foundation, remove what only one specification uses and add what several repeat. Then check that every element listed under "Depends on" is provided by a specification; if none provides it, add it to the specification that needs it or write a new one.
4. **Write the overview**, `SPEC-00_overview.md`: the list of the specifications, the traceability table, the dependencies, and every story with the specifications that serve it, or the reason it has none.
5. **Check before finishing.**
   - Every story has at least one specification, or a reason under "Not specified".
   - Every element under "Depends on" is provided by a named specification.
   - Every component and dataset a specification uses is defined in it or in the foundation, and the overview lists them.
   - The foundation designs the start page and the initial set-up, and every specification that needs something from the set-up names it.
   - Every specification names the pages of the information architecture where its functions appear, every page it names is in the foundation, every function is placed on a page, and the overview lists the pages with the specifications on each.
   - Every reference link opens an existing file.
   - Every [not traced] or [technology choice open] item is listed under "Open questions" and has its own file in `01_Open_Questions/` (section 5).

## 3. Architecture

The specifications take into account the architecture the product is built on, and describe each behaviour within it. The architecture is the same for every specification; a project that builds on a different one replaces this section before the specifications are written.

- **A frontend-only prototype, to test UX, UI and flows.** No backend, no API calls, no server-side code. The product does not compute, store or fetch anything for real: it shows the interface, the flows and the interactions so that they can be tested.
- **The interface is made of web components.** Every part of the interface that a behaviour shows is a web component, named in the specification with what it shows, the data it reads and the events it reacts to. A component used by two or more specifications is defined in the foundation; one used by a single specification is defined there.
- **All data come from the `data/` folder, as mock data.** Every piece of information a behaviour uses (the user's profile and settings, schedules, real states, prices, messages, the interface texts) comes from a dataset in `data/`, filled with mock data: invented but plausible, consistent with the stories and the evidence. Real data provided by a client go into the same datasets with the same fields. A specification names the datasets it reads and the fields it needs.
- **What would come from outside is simulated from the data.** A source the product cannot reach without a backend (an operator's live data, other users, a message on a channel outside the product) is a dataset in `data/`, and an event it would send (a delay, an answer, an incoming message) is triggered by a visible control or a timer, with its content taken from the data.
- **How the files are laid out** (folders, file names, how a screen loads its datasets) is in the build instructions of the project, for example `05_Prototype/instructions/Prototype_Instructions.md`. The specifications name components and datasets, not files.

### Information architecture

The specifications take into account the information architecture of the product: the pages, how they are grouped and how the user moves between them. Each specification says on which pages the functions it describes are placed.

- **Defined once, in the foundation.** If the project already has an information architecture, use it and link it. If not, the foundation proposes one from the stories: the list of pages, what each page is for, the page each one is reached from, and the navigation that holds them together. The start page and the pages of the initial set-up are part of it. A proposed architecture is marked as a proposal for the person who asked to decide.
- **Every function on a page.** Each specification lists the pages where its functions appear and what it adds to each: a whole page of its own, a part of another page, or a message that leads to a page. A function with no page is not specified; a page no specification fills is removed or listed under "Open questions".
- **One page, several specifications.** When two or more specifications place functions on the same page, each says what it adds and in which order of importance; the foundation keeps the list of what each page holds.
- **Pages, not layout.** A page is named with what it is for and what it holds, not with its visual design. Where on the page each part sits is out of scope, except what must come first, as the stories ask.

## 4. Rules

- **Each file stands alone.** A designer, a developer or another agent must be able to build the behaviour from that file and the foundation, without opening anything else. References are there to trace a behaviour back, not to explain it.
- **Within the architecture, and nothing else.** Name the elements of the architecture of section 3 (web components, datasets in `data/`, simulated events) and no other platform, operating system, framework, vendor, database, API or device brand. Describe what the product knows, decides and shows, and on which kind of channel ("a message on the channel the user chose", not the name of an app or a protocol). If a behaviour needs a technology the architecture does not have, write the need it serves and mark it [technology choice open].
- **Stories first.** The behaviour of a specification is what its stories ask for: the persona, the moment and the "so that" come from the stories, not from the wording of a concept. Concepts are references only: cite in Traceability every concept that matches a story, but take the behaviour from the stories alone. When concepts suggest different ways to meet a story, do not choose between them: describe what the story asks and put the choice in "Open questions".
- **Keep every reference.** Every specification names, by its exact ID and with a relative link to the file that holds it, every story it serves, and every feature, touchpoint, problem question, concept and family it rests on, when the inputs have them. A specification with no concept or family behind it writes "none" for them.
- **Logic, not screens.** Describe what starts it, what it needs to know, the rules it follows step by step, the states it can be in, and what the user sees or receives at each step. Layout and visual design are out of scope, but every function is placed on a page of the information architecture (section 3); the start page and the initial set-up are designed in the foundation as flows: what comes first, the steps, what each step shows and asks. If a specification needs another element to work (information, a setting, an object, a choice of the user), that element must be specified too: how it is included, entered, configured or obtained, in the same specification or in another one, which it names. Nothing a behaviour relies on is assumed to exist already. When no story asks for that element, trace it to the specification that needs it.
- **Stories that conflict.** When two stories ask for opposite behaviours, no story wins on its own: specify what they share and put the conflict in "Open questions" for the person who asked to decide.
- **No invention.** Every rule and behaviour traces to a story, a feature, a problem question or the evidence behind them. A behaviour you need and cannot trace is marked [not traced] and listed under "Open questions"; it is not written as settled.
- **Failure is a normal case.** For every specification, say what happens when the data is late, missing, wrong or contradicted by another source, when the process breaks halfway, when the user does not respond, and when an element it depends on has not been set up yet.
- **Say what part of the experience it covers.** Name the stages of the user's journey the specification acts on, using the stages the inputs define, or "whole journey".
- **Testable acceptance criteria.** Given / When / Then, one behaviour each, written as what the user sees and does, so that they can be tested on the prototype with the mock data.
- **Personas by their names** as the stories give them. No real names of interviewees or customers.
- **Quotes** stay in their original language, with a translation into the language of the specifications.
- **Status.** Every file is a draft until the person who asked for it reviews it.

## 5. Files and names

- **Folder:** every file below goes in `04_Specifications/`, next to this file.
- **Overview:** `SPEC-00_overview.md`.
- **Foundation:** `SPEC-01_foundation.md`, always the first specification.
- **One specification:** `SPEC-<NN>_<short-name>.md` from `SPEC-02`, for example `SPEC-02_reminder-before-leaving.md` or `SPEC-03_missing-item-swap.md`. The number has two digits, follows the order of the overview, and is never reused.
- **Specifications already written:** when the folder already holds specifications, edit them in place under their names and keep their numbers. A new specification takes the next free number. A specification that is dropped is deleted, its number stays unused, and the overview says so under "Not specified".
- **Open questions:** one file per open question in `01_Open_Questions/`, named `OQ-<NN>_<short-name>.md`, with an index `00_Open_questions_index.md` and a folder guide. A question raised by several specifications has one file. Each file holds:
  - the question, the specifications that raise it and its marker;
  - the chain back to the research: specification, story, feature, touchpoint, and the quote from the interview, survey or source behind it, each with its link, as far as the inputs go;
  - what the research says about it, and whether it supports an answer: supported, partly, or not supported. A question the research does not support is kept and marked ⚠;
  - its state (`open` or `decided`), the decision and its date.
  The "Open questions" sections of the specifications and of the overview link to these files. When a question is decided, its file records the decision, and the specifications that raise it are edited to remove the marker; the file stays and its number is never reused.
- **After writing:** update whatever the project keeps current when files are added, such as a folder guide, an index or a change log.

## 6. Templates

### A specification

```markdown
# SPEC-<NN>: <Name>

Use this file as a prompt: it describes one behaviour to build within the architecture of the foundation: a frontend-only prototype made of web components, with all data from mock datasets in `data/`.

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

## Architecture
- **Pages:** <each page of the information architecture where this behaviour appears, and what it adds to it: a page of its own, a part of another page, or a message that leads to a page>
- **Components:** <each web component it shows: what it shows, the data it reads, the events it reacts to; or the foundation component it reuses>
- **Datasets:** <each dataset in `data/` it reads, with the fields it needs and whether the foundation defines it>
- **Simulated events:** <each event that would come from outside (a delay, an answer, a message), what triggers it in the prototype and where its content comes from; or none>

## When things go wrong
Data late, missing, wrong or contradicted; the process breaks; the user does not respond; nothing set up yet (an element it depends on does not exist: what the user sees and where they set it up).

## Out of scope
What this specification does not do, and which specification does it, if any.

## Acceptance criteria
- **Given** <situation> **when** <event> **then** <observable result>

## Open questions
Behaviours marked [not traced] or [technology choice open], each linked to its file in `01_Open_Questions/`.
```

### The foundation

Every section ends with the stories that need it (story · persona) and the specifications that use it. Leave out a section no story needs.

```markdown
# SPEC-01: Foundation

Use this file as a prompt: it lays the ground that every other specification stands on, within the architecture below. Build it first.

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

## Architecture
How the product is built for testing UX, UI and flows: frontend only, no backend and no API; the web components two or more specifications share, with what each shows, reads and reacts to; the datasets in `data/` two or more specifications read, with their fields and mock content; how an event from outside is simulated; how what the user chooses on one page reaches the next without a backend.

## Information architecture
The pages of the product, as the project defines them or as proposed here from the stories: for each page, what it is for, the page it is reached from, and the specifications whose functions it holds, in order of importance; the navigation that holds the pages together. Mark it as a proposal when the project has none.

## Start page
What the product opens on, designed as a flow:
- at the first opening, when nothing is set up: what the user sees and how they reach the initial set-up;
- once the set-up is done: what comes first, with nothing in front of it, and what follows;
- from the start page, how each behaviour is reached, by specification;
- what the start page shows when something it needs is missing, late or wrong.

## Initial set-up
How the user sets up their profile and their usual trips (or whatever they save to use again), designed as a flow:
- the steps, in order, and what each step asks and shows;
- what can be skipped, and what each skipped element affects, by specification;
- the defaults, and which ones the user must turn on themselves (for example consent to use their position);
- how the set-up ends and leads to the start page;
- where each element is changed or deleted later;
- the datasets in `data/` that hold what is set up, with the mock profile and usual trips the prototype starts from.

## Acceptance criteria
- **Given** <situation> **when** <event> **then** <observable result>

## Open questions
Elements marked [not traced] or [technology choice open], each linked to its file in `01_Open_Questions/`.
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

## Components and datasets
One row per web component and per dataset in `data/`.

| Component or dataset | Defined in | Used by |
| --- | --- | --- |

## Pages
One row per page of the information architecture.

| Page | What it is for | Reached from | Specifications |
| --- | --- | --- | --- |

## User stories and specifications
One row per user story.

| Story | Persona | Specifications |
| --- | --- | --- |

## Splits and groupings
Stories split into several specifications, stories grouped into one, and why.

## Not specified
Stories left without a specification, specifications dropped, and why.

## Open questions
All the open questions of the specifications, one row each, linked to their files in `01_Open_Questions/`, with their research support.
```
