---
source: Claude
date: 2026-11-02 23:42
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, information, disruption, late-info, unreliable-service]
related: [SPEC-01_foundation.md, SPEC-03_travellers-report.md, SPEC-04_alerts-on-the-usual-trip.md, 04_Generated_User_Stories.md, 01_How_might_we.md, 06_Chosen_concept.md]
---

# SPEC-02: The Real State of the Run

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

| Priority | Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- | --- |
| concept | [F-01](../02_Analysis/04_Generated_User_Stories.md) | the Como commuter | As the Como commuter, standing on the platform watching the delay on the board grow from 5 to 10 to 15 minutes while a third-party app shows another time, I want to see where the train really is, when it will really leave and arrive, why it is late and which source says so, so that he knows as early as an unofficial app would tell him. | All of it. The reports of other travellers it uses are collected by SPEC-03 |

## Traceability

| | |
| --- | --- |
| **Priority** | concept |
| **Features** | [F-01](../02_Analysis/03_Generated_Features.md) |
| **Touchpoints** | [TP-028](../02_Analysis/02_Generated_Touchpoints.md), [TP-029](../02_Analysis/02_Generated_Touchpoints.md), [TP-038](../02_Analysis/02_Generated_Touchpoints.md), [TP-043](../02_Analysis/02_Generated_Touchpoints.md), [TP-067](../02_Analysis/02_Generated_Touchpoints.md), [TP-070](../02_Analysis/02_Generated_Touchpoints.md), [TP-075](../02_Analysis/02_Generated_Touchpoints.md), [TP-088](../02_Analysis/02_Generated_Touchpoints.md), [TP-089](../02_Analysis/02_Generated_Touchpoints.md), [TP-090](../02_Analysis/02_Generated_Touchpoints.md), [TP-091](../02_Analysis/02_Generated_Touchpoints.md), [TP-092](../02_Analysis/02_Generated_Touchpoints.md), [TP-096](../02_Analysis/02_Generated_Touchpoints.md) |
| **Problem questions** | [HMW-01](../03_Ideation/01_How_might_we.md), [HMW-02](../03_Ideation/01_How_might_we.md) |
| **Concepts** | [S02](../03_Ideation/02_Human_Ideas.md), [S03](../03_Ideation/02_Human_Ideas.md), [C01-01](../03_Ideation/03_AI_Ideas.md), [C01-02](../03_Ideation/03_AI_Ideas.md), [C01-03](../03_Ideation/03_AI_Ideas.md) [risky], [C01-05](../03_Ideation/03_AI_Ideas.md) [risky], [C01-10](../03_Ideation/03_AI_Ideas.md), [C01-11](../03_Ideation/03_AI_Ideas.md), [C02-02](../03_Ideation/03_AI_Ideas.md), [C02-08](../03_Ideation/03_AI_Ideas.md), [C02-11](../03_Ideation/03_AI_Ideas.md); background: [C01-07](../03_Ideation/03_AI_Ideas.md), [C01-08](../03_Ideation/03_AI_Ideas.md) |
| **Families** | [FAM-02](../03_Ideation/04_Human+AI_Ideas.md), [FAM-03](../03_Ideation/04_Human+AI_Ideas.md), [FAM-04](../03_Ideation/04_Human+AI_Ideas.md), [FAM-08](../03_Ideation/04_Human+AI_Ideas.md), [FAM-01](../03_Ideation/04_Human+AI_Ideas.md), [FAM-16](../03_Ideation/04_Human+AI_Ideas.md); background: [FAM-05](../03_Ideation/04_Human+AI_Ideas.md) |
| **Stages covered** | before departure, main leg (waiting on the platform, on board), disruption |
| **[Marks](../03_Ideation/05_Ideas_prioritization.md)** | S02 3·1·3, S03 2·2·3, C01-01 2·1·3, C01-02 2·1·3, C01-03 3·1·3, C01-05 3·1·3, C01-10 2·1·3, C01-11 2·1·3, C02-02 2·1·3, C02-08 2·1·3, C02-11 2·3·2; background C01-07 2·1·3, C01-08 1·1·3 (valuable · feasible · relevant) |
| **Foundation** | Principles 1, 2, 3; The things it deals with (run, fact); States (run, fact); Sources of information; Channels; Rules that hold everywhere |

## Description

For a commuter waiting for a run or travelling on it, the product shows where the run really is, when it will really leave and arrive, why it is late, and which source says so, as early as any source knows it. It is for the Como commuter on the platform while the delay on the board grows, who reads the numbers to guess that a cancellation is coming ("a 20 inizio a sentire la puzza, a 25 la puzza si fa più forte e aspetto solo che appaia la scritta annullato": at 20 I begin to smell it, at 25 the smell is stronger and I only wait for the word cancelled to appear).

## Operating logic

- **Starts when:** the commuter opens a run of their trip, or a run of their trip enters the window before its departure [not traced: the length of the window], or the commuter is on board.
- **Needs to know:**
  - the schedule of the run;
  - the operator's live facts: position, delay, reason, cancellation;
  - the measured position: where the travellers who bought this run and share their position are, compared with where the run should be (S02);
  - the reports of other travellers on this run (SPEC-03);
  - the commuter's own limit for this run, if they set one (C02-11).
- **Rules:**
  1. Gather every fact about the run from every source, each with its source and time.
  2. Work out the measured delay when enough travellers on the run share their position (Foundation, Sources of information).
  3. Give one expected departure and one expected arrival (C01-10), taken from the most recent fact that is confirmed; when none is confirmed, from the most recent estimate or report, labelled as such.
  4. Show next to each time its source and age (C01-01), and the reason for the delay when any source gives one (C02-08).
  5. When two sources differ by more than a set gap [not traced: the gap], show both and the gap (C01-02).
  6. Show where the run is now: the last place it passed or its position between two places, with the time of that fact.
  7. As soon as any source states a cancellation, show the run as `cancelled`, with the source; until then, do not infer it from the delay.
  8. When nothing new has come in, say "no news since <time>" and when the product will look again (C02-02).
  9. When the expected time changes, or the run is cancelled, tell the commuter on their chosen channel without their watching (C01-11), on the days and for the kinds of events they chose (Foundation, Channels).
  10. When the delay passes the commuter's own limit, tell them and offer the ways out (SPEC-06).
- **States:** the run states of the Foundation.
- **The commuter receives:** in the product, the expected times, position, reason and sources; on their channel, a message when the expected time changes by more than a set step [not traced: the step], when the run is cancelled, or when their limit is passed.

## When things go wrong

- **No source has anything:** "no news since <time>", and the scheduled time is labelled as scheduled, not as expected.
- **Facts late:** each shows its age; past the age limit it is marked `outdated` and stops leading the expected time.
- **Sources contradict:** both shown with the gap (rule 5); the expected time says which source it follows.
- **Too few travellers share their position:** no measured delay; the other sources still work.
- **A cancellation is later withdrawn:** the run goes back to its previous state, and the commuter is told.
- **The commuter does not respond to a message:** nothing else happens; the next change sends a new message only if it differs.

## Out of scope

- Collecting the reports of other travellers: SPEC-03.
- Alerts before leaving on the usual trip: SPEC-04.
- The ways out after a cancellation or past the limit: SPEC-06.
- A person on the platform or the crew's word (C01-06, C02-06, C02-07, FAM-12, background); an operator announcing earlier or by a deadline (C02-03, C02-04, FAM-07); a duty to publish (C01-12, C02-05, FAM-25): they need an operator or a rule to change, not the product.
- The board showing the best source (C01-09, FAM-11): it needs the place to change; the product only shows the same answer.
- The likelihood of a cancellation and the record of past delays (C02-01, C02-09, background, [risky]).

## Acceptance criteria

- **Given** a run with a live delay from the operator and a measured delay from travellers **when** the commuter opens it **then** they see one expected departure, its source and age, and both figures with the gap if they differ by more than the set gap.
- **Given** a run whose delay is growing **when** no source has stated a cancellation **then** the run is not shown as cancelled.
- **Given** a source states a cancellation **when** the commuter has the run in their trip **then** the run shows as cancelled with that source, and the commuter receives a message on their channel.
- **Given** no new fact for longer than the age limit **when** the commuter looks **then** they see "no news since <time>" and when the product will look again.
- **Given** the commuter set a limit of 20 minutes for the run **when** the expected delay passes 20 minutes **then** they are told and offered the ways out.
- **Given** the operator gives a reason **when** the delay is shown **then** the reason is shown with it.

## Open questions

- The window before departure in which the product follows a run, the gap at which two sources are shown as disagreeing, the step of change that sends a message [not traced].
- Which source leads when two confirmed sources disagree (Foundation) [not traced].
- That travellers agree to have their position used: assumption of S02 and of C01-05 [risky] [not traced].
- The operator's own position of the run (C01-03) depends on the operator releasing it [risky].
- Whether a range in place of a single time (C01-07) and a promised time for the next news (C01-08), both background, should be added.
