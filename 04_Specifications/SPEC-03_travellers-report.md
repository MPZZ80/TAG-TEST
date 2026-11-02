---
source: Claude
date: 2026-11-02 23:42
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, information, disruption, late-info, crowding, first-last-mile, workarounds]
related: [SPEC-01_foundation.md, SPEC-02_real-state-of-the-run.md, SPEC-06_ways-out-when-the-trip-breaks.md, SPEC-08_the-connection-ahead.md, SPEC-10_times-that-can-be-kept.md, SPEC-14_the-station-ahead.md, 04_Generated_User_Stories.md, 06_Chosen_concept.md]
---

# SPEC-03: Travellers Report What They See

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

| Priority | Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- | --- |
| concept | [F-01](../02_Analysis/04_Generated_User_Stories.md) | the Como commuter | As the Como commuter, standing on the platform watching the delay on the board grow from 5 to 10 to 15 minutes while a third-party app shows another time, I want to see where the train really is, when it will really leave and arrive, why it is late and which source says so, so that he knows as early as an unofficial app would tell him. | The reports of travellers on the run, as a source. Shown by SPEC-02 |
| concept | [F-02](../02_Analysis/04_Generated_User_Stories.md) | a teenager (desk persona) | As a teenager (desk persona), waiting late in the evening at a stop for a connecting bus that does not come, I want to see the ways that still run and can be reached from where I am, valid on my ticket or not, with arrival time and cost, so that I know from what point it makes sense to call home and be fetched. | Whether the bus has been seen up the route. The ways out are in SPEC-06 |
| concept | [F-06](../02_Analysis/04_Generated_User_Stories.md) | the Como commuter | As the Como commuter, on the 8:23 towards Lugano as the delay grows towards 12 minutes, I want to be told before reaching the change whether the connection still holds and, if not, the next one that does, so that he can warn the people he is meeting before he arrives. | Whether the connecting service has left, from those already at the change. The rest is in SPEC-08 |
| concept | [F-07](../02_Analysis/04_Generated_User_Stories.md) | a German rail regular (desk persona) | As a German rail regular (desk persona), logging every trip and his connections, when the planner offers a change shorter than his own rule, I want the trip planned with my own minimum change time, margin, number of changes and own leg, and to see how tight each connection is, so that he relies only on connections he counts as real and not on "connections on paper". | Regulars marking a connection as real or on paper. The rest is in SPEC-10 |
| concept | [F-15](../02_Analysis/04_Generated_User_Stories.md) | a woman driving to the station (desk persona) | As a woman driving to the station (desk persona), before leaving home for the 8:17 train she takes because she starts later, I want to know whether there is a parking space or a safe bike place at the station and what it costs, so that she does not have to go back to leaving earlier. | Whether the car park is full, from those already there. The rest is in SPEC-14 |
| concept | [F-17a](../02_Analysis/04_Generated_User_Stories.md) | a daily traveller in a British city (desk persona) | As a daily traveller in a British city (desk persona), waiting at a station late at night, I want to know whether the station is staffed and whether the walk at the end is in the dark at the hour I travel, so that the wait at night is not a moment of fear. | What the station is like at night, from other travellers. The rest is in SPEC-14 |
| concept | [F-19](../02_Analysis/04_Generated_User_Stories.md) | the outskirts hybrid worker | As the outskirts hybrid worker, at her station when her train is cancelled and the only other train is the packed one to Cadorna, I want to know how full the next services are expected to be, so that she can choose between waiting and a train where "you never get a seat". | How full a run is now, from people on board. The choice is in SPEC-06 |
| concept | [F-20](../02_Analysis/04_Generated_User_Stories.md) | a wheelchair user (desk persona) | As a wheelchair user (desk persona), before getting off the train at a German station with stairs unlit for two months and no lift, I want to know whether the lifts and lights on my way through the station work today, so that I do not have to ride past my station and come back. | Lifts and lights reported by other riders. The rest is in SPEC-14 |

These stories belong together because each needs a fact that only someone on the spot can give in time: on the run, at the stop, at the change, at the car park or in the station.

## Traceability

| | |
| --- | --- |
| **Priority** | concept |
| **Features** | [F-01](../02_Analysis/03_Generated_Features.md), [F-02](../02_Analysis/03_Generated_Features.md), [F-06](../02_Analysis/03_Generated_Features.md), [F-07](../02_Analysis/03_Generated_Features.md), [F-15](../02_Analysis/03_Generated_Features.md), [F-17a](../02_Analysis/03_Generated_Features.md), [F-19](../02_Analysis/03_Generated_Features.md), [F-20](../02_Analysis/03_Generated_Features.md) |
| **Touchpoints** | [TP-090](../02_Analysis/02_Generated_Touchpoints.md), [TP-091](../02_Analysis/02_Generated_Touchpoints.md), [TP-070](../02_Analysis/02_Generated_Touchpoints.md), [TP-084](../02_Analysis/02_Generated_Touchpoints.md), [TP-099](../02_Analysis/02_Generated_Touchpoints.md), [TP-068](../02_Analysis/02_Generated_Touchpoints.md), [TP-024](../02_Analysis/02_Generated_Touchpoints.md), [TP-049](../02_Analysis/02_Generated_Touchpoints.md), [TP-083](../02_Analysis/02_Generated_Touchpoints.md), [TP-072](../02_Analysis/02_Generated_Touchpoints.md), [TP-063](../02_Analysis/02_Generated_Touchpoints.md) |
| **Problem questions** | [HMW-01](../03_Ideation/01_How_might_we.md), [HMW-02](../03_Ideation/01_How_might_we.md), [HMW-03](../03_Ideation/01_How_might_we.md), [HMW-04](../03_Ideation/01_How_might_we.md), [HMW-09](../03_Ideation/01_How_might_we.md), [HMW-10](../03_Ideation/01_How_might_we.md), [HMW-18](../03_Ideation/01_How_might_we.md), [HMW-20](../03_Ideation/01_How_might_we.md), [HMW-22](../03_Ideation/01_How_might_we.md), [HMW-23](../03_Ideation/01_How_might_we.md) |
| **Concepts** | [S03](../03_Ideation/02_Human_Ideas.md), [C01-04](../03_Ideation/03_AI_Ideas.md), [C02-10](../03_Ideation/03_AI_Ideas.md), [C03-05](../03_Ideation/03_AI_Ideas.md), [C04-03](../03_Ideation/03_AI_Ideas.md), [C09-09](../03_Ideation/03_AI_Ideas.md), [C10-05](../03_Ideation/03_AI_Ideas.md), [C18-06](../03_Ideation/03_AI_Ideas.md), [C20-03](../03_Ideation/03_AI_Ideas.md), [C22-03](../03_Ideation/03_AI_Ideas.md), [C22-04](../03_Ideation/03_AI_Ideas.md), [C23-03](../03_Ideation/03_AI_Ideas.md) |
| **Families** | [FAM-03](../03_Ideation/04_Human+AI_Ideas.md) |
| **Stages covered** | main leg, transfer, first mile, last mile, disruption |
| **[Marks](../03_Ideation/05_Ideas_prioritization.md)** | S03 2·2·3, C01-04 2·2·3, C02-10 1·2·3, C03-05 2·2·3, C04-03 2·2·3, C09-09 2·2·3, C10-05 3·2·3, C18-06 2·2·3, C20-03 2·2·2, C22-03 3·2·3, C22-04 2·2·2, C23-03 2·2·2 |
| **Foundation** | Principle 2; The things it deals with (fact, run, place); States (fact); Sources of information (other travellers); Rules that hold everywhere (consent to report, never shared) |

## Description

Travellers who are on a run, at a stop, at a change, at a car park or in a station tell the product what they see, in a few fixed kinds of report, and every other commuter with that run or place in their trip reads it as a reported fact, with how many said it and how recently. The product asks a traveller who is there to report when nobody has (Marco's concept S03).

## Operating logic

- **Starts when:** a traveller chooses to report, or the product asks a traveller who is on a run or at a place where a report is missing.
- **Needs to know:** the run or place the traveller is on or at, from their trip or as they state it; the kinds of report that apply there.
- **Rules:**
  1. Offer only the kinds of report that fit where the traveller is:
     - on a run: where it is now, its delay, how full it is (empty, seats free, standing, packed);
     - at a stop: whether a given run has come or passed;
     - at a change: whether the connecting service has left;
     - at a car park or bike place: whether it is full;
     - in a station: whether a lift, stairs or lights on a way through work; whether it is staffed and lit at that hour;
     - about a connection the traveller makes regularly: whether it is real or only on paper (C10-05).
  2. A report takes one step. The time and the run or place are filled in by the product.
  3. Join reports of the same kind about the same run or place into one reported fact, with the number of reports and the time of the latest.
  4. Show the reported fact to every commuter with that run or place in their trip, labelled "reported by travellers", with count and age (Foundation, Principle 2).
  5. When a report contradicts the operator or another report, show both (Foundation, Sources of information).
  6. Let a report expire after a time that depends on its kind [not traced: the times]; a regular's mark on a connection lasts until others contradict it [not traced].
  7. When the product knows a traveller is on a run or at a place, and no report of a needed kind is recent, ask them once to report (S03); never ask twice for the same run or place on the same day [not traced].
- **States:** a reported fact is `reported` (with count and age) or `outdated`.
- **The commuter receives:** the reported facts inside the specifications that use them (SPEC-02, SPEC-06, SPEC-08, SPEC-10, SPEC-14); a prompt to report, which they can turn off.

## When things go wrong

- **No reports:** nothing is shown as reported; the other sources still work.
- **Old reports:** marked `outdated` and no longer used for an answer.
- **Reports disagree with each other:** each kind of answer is shown with its count.
- **A wrong or abusive report:** [not traced] how it is detected; until then, a single report is shown as one report.
- **The traveller does not answer the prompt:** nothing happens; the prompt closes.
- **Position not shared:** the traveller can still report by naming the run or place; the product cannot ask them at the right moment.

## Out of scope

- How a reported fact is used for a delay (SPEC-02), a way out (SPEC-06), a connection (SPEC-08), a plan (SPEC-10) or a place (SPEC-14).
- Group chats among commuters on the same trip (C14-10, C05-08): reports here are about facts, not conversations.
- Rules shared among regulars (C10-06): left to SPEC-10's open questions.

## Acceptance criteria

- **Given** a traveller on a run **when** they report the delay **then** it takes one step and the run and time are filled in.
- **Given** three reports that a bus has passed a stop in the last ten minutes **when** a commuter waiting further on looks at that run **then** they see "seen by 3 travellers, latest <time>".
- **Given** a report and an operator fact that differ **when** a commuter looks at the run **then** both are shown with their sources.
- **Given** a report older than its expiry **when** a commuter looks **then** it is marked outdated and not used for an answer.
- **Given** a traveller who turned prompts off **when** a report is missing **then** they are not asked.
- **Given** any report **when** it is shown **then** the identity of the reporter is not shown.

## Open questions

- That travellers are willing to report is in no note: the only trace is 2 of 17 Belgian respondents who believe other travellers (TP-090) [not traced].
- How long each kind of report lasts, how many reports make a fact credible, how wrong or abusive reports are found [not traced].
- Whether a traveller who reports gets anything back [not traced].
