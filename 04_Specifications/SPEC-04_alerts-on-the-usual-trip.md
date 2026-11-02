---
source: Claude
date: 2026-11-02 23:52
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, information, planning, late-info, usual-trip]
related: [SPEC-01_foundation.md, SPEC-02_real-state-of-the-run.md, SPEC-03_travellers-report.md, 04_Generated_User_Stories.md, 06_Chosen_concept.md, 02_Human_Ideas.md, SPEC-05_usual-trip-at-a-glance.md]
---

# SPEC-04: Alerts on the Usual Trip

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

| Priority | Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- | --- |
| concept | [F-03](../02_Analysis/04_Generated_User_Stories.md) | the single-line commuter | As the single-line commuter, during the seven minutes he drives to the station on one of his three office days, I want to be told, only when something changes, of a delay, cancellation, strike or works on my usual train, in time to change the decision to leave, so that he can wait in the warm car if the train is late. | All of it |

## Traceability

| | |
| --- | --- |
| **Priority** | concept |
| **Features** | [F-03](../02_Analysis/03_Generated_Features.md) |
| **Touchpoints** | [TP-031](../02_Analysis/02_Generated_Touchpoints.md), [TP-032](../02_Analysis/02_Generated_Touchpoints.md), [TP-033](../02_Analysis/02_Generated_Touchpoints.md), [TP-034](../02_Analysis/02_Generated_Touchpoints.md), [TP-035](../02_Analysis/02_Generated_Touchpoints.md), [TP-037](../02_Analysis/02_Generated_Touchpoints.md), [TP-039](../02_Analysis/02_Generated_Touchpoints.md), [TP-040](../02_Analysis/02_Generated_Touchpoints.md), [TP-087](../02_Analysis/02_Generated_Touchpoints.md), [TP-089](../02_Analysis/02_Generated_Touchpoints.md) |
| **Problem questions** | [HMW-05](../03_Ideation/01_How_might_we.md) |
| **Concepts** | [S01](../03_Ideation/02_Human_Ideas.md), [S05](../03_Ideation/02_Human_Ideas.md), [C05-01](../03_Ideation/03_AI_Ideas.md), [C05-02](../03_Ideation/03_AI_Ideas.md), [C05-03](../03_Ideation/03_AI_Ideas.md), [C05-04](../03_Ideation/03_AI_Ideas.md), [C05-05](../03_Ideation/03_AI_Ideas.md), [C05-06](../03_Ideation/03_AI_Ideas.md), [C05-07](../03_Ideation/03_AI_Ideas.md), [C05-09](../03_Ideation/03_AI_Ideas.md) |
| **Families** | [FAM-01](../03_Ideation/04_Human+AI_Ideas.md), [FAM-07](../03_Ideation/04_Human+AI_Ideas.md), [FAM-08](../03_Ideation/04_Human+AI_Ideas.md), [FAM-15](../03_Ideation/04_Human+AI_Ideas.md), [FAM-03](../03_Ideation/04_Human+AI_Ideas.md) |
| **Stages covered** | planning (days before), before departure, first mile |
| **[Marks](../03_Ideation/05_Ideas_prioritization.md)** | S01 3·1·2, S05 2·1·2, C05-01 3·1·3, C05-02 3·1·2, C05-03 3·1·3, C05-04 3·1·3, C05-05 3·1·3, C05-06 2·3·2, C05-07 2·1·2, C05-09 2·2·3 |
| **Foundation** | Principles 1, 4, 6; The user; The things it deals with (usual trip, run); States (run, trip); Sources of information; Channels; Rules that hold everywhere |

## Description

The commuter names their usual train once, with their days of travel and the moments they want news. The product then tells them, only when something changes, of a delay, a cancellation, a strike or works on that train: days ahead for what is planned (Marco's concept S05), and on the travel day at the moments they set, by voice while they drive (C05-01), in time to change the decision to leave. It is for the single-line commuter, who drives seven minutes to the station and wants "one notification on the state of the line when he wakes up, and others timed for the seven minutes he drives to the station, so that he can wait in the warm car if the train is late".

## Operating logic

- **Starts when:** the commuter saves a usual trip with its days of travel (C05-06).
- **Needs to know:** the usual trip and its runs; the days of travel; the moments of the day the commuter chose (for example on waking, on leaving, during the drive) (C05-05); the kinds of event they want (delay, cancellation, strike, works) (S01); the channel for each moment, voice included; planned works and strikes from the schedule; the real state of the run (SPEC-02), reports included (SPEC-03, C05-09).
- **Rules:**
  1. **Days before:** when a strike or works affecting the usual trip on a coming travel day is announced, tell the commuter at once, and again on the evening before that day (S05, C05-07) [not traced: the evening reminder].
  2. **On a travel day:** follow the usual run from the first moment the commuter set until they board.
  3. At each moment they set, send news only if the run differs from normal: delayed, cancelled, platform changed, affected by a strike or works (C05-03). If it is normal, send nothing.
  4. Between moments, send news as soon as the run changes again, if the change is of a kind they chose (S01).
  5. With every news, give one word of what it means for leaving: "go now" or "wait: expected <time>" (C05-04), from the expected departure in SPEC-02, with its source.
  6. When the commuter is driving, give the news by voice (C05-01).
  7. Never send the same news twice; send again only when the expected time changes by more than the step set in SPEC-02, or the state changes.
- **States:** the trip states of the Foundation; for a travel day, `quiet` (nothing to tell) or `told` (last news sent, with its time).
- **The commuter receives:** a message days before for planned changes; on the travel day, a message or voice news only when something changed, with the expected time, its source and a go-or-wait word.

## When things go wrong

- **No live data for the run:** at the moment set, if the commuter asked for news, say "no news on your train since <time>" rather than staying silent [not traced: whether silence should be preferred].
- **A change comes after the last moment set:** sent at once, since it may still change the decision.
- **A strike is announced and then called off:** the commuter is told it was called off.
- **The commuter does not open the news:** nothing else happens.
- **The commuter travels on a day that is not a travel day:** no alert, unless they add that day.

## Out of scope

- The real state of the run itself: SPEC-02.
- The usual trip shown when the product is opened: SPEC-05.
- A sign at the car park (C05-10, FAM-11): needs the place to change.
- Moving the office day home on a bad morning (C05-12, [risky]); a duty for operators to warn (C05-11, FAM-25).

## Acceptance criteria

- **Given** a usual trip with travel days Monday, Wednesday and Thursday **when** the train is late on a Tuesday **then** no news is sent.
- **Given** a moment set at 7:10 on a travel day **when** the train is on time at 7:10 **then** nothing is sent.
- **Given** a moment set at 7:10 **when** the train is 8 minutes late at 7:10 **then** the commuter receives "wait: expected 7:38", with its source.
- **Given** the commuter is driving to the station **when** the train is cancelled **then** they hear it by voice.
- **Given** works announced for a coming travel day **when** they are published **then** the commuter is told that day, and again the evening before.
- **Given** a delay already sent **when** it does not change **then** nothing more is sent.

## Open questions

- Whether "nothing changed" should be said at the waking moment for some commuters; the story says "only when something changes" [not traced].
- The evening-before reminder for planned changes [not traced].
- Whether the commuter's days of travel are fixed or change by week (the single-line commuter has three office days a week) [not traced].

## Connections

- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation this specification builds on: Principles 1, 4, 6; The user; The things it deals with (usual trip, run); States (run, trip); Sources of information; Channels; Rules that hold everywhere.
- [SPEC-02_real-state-of-the-run.md](SPEC-02_real-state-of-the-run.md): named in this specification (Operating logic, Out of scope), where the two behaviours meet.
- [SPEC-03_travellers-report.md](SPEC-03_travellers-report.md): named in this specification (Operating logic), where the two behaviours meet.
- [04_Generated_User_Stories.md](../02_Analysis/04_Generated_User_Stories.md): the user stories this specification serves: F-03.
- [06_Chosen_concept.md](../03_Ideation/06_Chosen_concept.md): the chosen concept; this specification draws on its families FAM-01, FAM-07, FAM-08, FAM-15, FAM-03.
- [02_Human_Ideas.md](../03_Ideation/02_Human_Ideas.md): Marco's concepts this specification carries: S01, S05.
- [SPEC-05_usual-trip-at-a-glance.md](SPEC-05_usual-trip-at-a-glance.md): the specifications that name this one where their behaviours meet.
