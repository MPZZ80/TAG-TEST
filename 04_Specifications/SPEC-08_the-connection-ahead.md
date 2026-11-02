---
source: Claude
date: 2026-11-02 23:52
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, disruption, information, tight-connection, late-info]
related: [SPEC-01_foundation.md, SPEC-02_real-state-of-the-run.md, SPEC-03_travellers-report.md, SPEC-06_ways-out-when-the-trip-breaks.md, SPEC-07_those-waiting-are-told.md, 04_Generated_User_Stories.md, 06_Chosen_concept.md, SPEC-10_times-that-can-be-kept.md]
---

# SPEC-08: The Connection Ahead

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

| Priority | Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- | --- |
| concept | [F-06](../02_Analysis/04_Generated_User_Stories.md) | the Como commuter | As the Como commuter, on the 8:23 towards Lugano as the delay grows towards 12 minutes, I want to be told before reaching the change whether the connection still holds and, if not, the next one that does, so that he can warn the people he is meeting before he arrives. | Whether it holds and the next one. Warning the people is SPEC-07 |
| concept | [F-22](../02_Analysis/04_Generated_User_Stories.md) | a German rail regular (desk persona) | As a German rail regular (desk persona), on a late train before the last connection of the day, I want to ask from the train that the connecting service be told, and see the answer, so that the connection waits for him. | All of it, with the limits in "Open questions" |

These stories belong together because both are the commuter on a late run, before a change, wanting to know what happens to the connection: whether it holds, and whether it can be made to wait.

## Traceability

| | |
| --- | --- |
| **Priority** | concept |
| **Features** | [F-06](../02_Analysis/03_Generated_Features.md), [F-22](../02_Analysis/03_Generated_Features.md) |
| **Touchpoints** | [TP-053](../02_Analysis/02_Generated_Touchpoints.md), [TP-057](../02_Analysis/02_Generated_Touchpoints.md), [TP-060](../02_Analysis/02_Generated_Touchpoints.md), [TP-061](../02_Analysis/02_Generated_Touchpoints.md), [TP-068](../02_Analysis/02_Generated_Touchpoints.md), [TP-106](../02_Analysis/02_Generated_Touchpoints.md), [TP-069](../02_Analysis/02_Generated_Touchpoints.md) |
| **Problem questions** | [HMW-09](../03_Ideation/01_How_might_we.md), [HMW-25](../03_Ideation/01_How_might_we.md) |
| **Concepts** | [C09-01](../03_Ideation/03_AI_Ideas.md), [C09-02](../03_Ideation/03_AI_Ideas.md), [C09-03](../03_Ideation/03_AI_Ideas.md), [C09-09](../03_Ideation/03_AI_Ideas.md), [C09-12](../03_Ideation/03_AI_Ideas.md), [C25-05](../03_Ideation/03_AI_Ideas.md), [C25-12](../03_Ideation/03_AI_Ideas.md); background: [C25-01](../03_Ideation/03_AI_Ideas.md), [C25-02](../03_Ideation/03_AI_Ideas.md) |
| **Families** | [FAM-08](../03_Ideation/04_Human+AI_Ideas.md), [FAM-15](../03_Ideation/04_Human+AI_Ideas.md), [FAM-04](../03_Ideation/04_Human+AI_Ideas.md), [FAM-03](../03_Ideation/04_Human+AI_Ideas.md); background: [FAM-23](../03_Ideation/04_Human+AI_Ideas.md) |
| **Stages covered** | main leg, transfer, disruption |
| **[Marks](../03_Ideation/05_Ideas_prioritization.md)** | C09-01 3·1·3, C09-02 3·1·3, C09-03 1·1·3, C09-09 2·2·3, C09-12 3·1·3, C25-05 2·1·3, C25-12 1·2·3; background C25-01 3·1·3, C25-02 2·1·3 |
| **Foundation** | Principles 1, 2, 3, 6; The user (own threshold); The things it deals with (connection, run); States (connection); Sources of information; Channels |

## Description

For a commuter on a run with a change ahead, the product says before the change whether the connection still holds, against the commuter's own threshold (C09-02: the Como commuter knows that over 12 minutes "io il treno l'ho già perso", I have already missed the train), and if not, the next connection that holds and the new arrival (C09-12). On the last connection of the day, the commuter can ask from the train that the connecting service be told, and sees the answer (C25-01, background; C25-05). The German rail regular asks "ich bitte um Vormeldung meines Anschlusses" (I ask for my connection to be reported ahead).

## Operating logic

- **Starts when:** the commuter is on a run of a trip that has a connection ahead.
- **Needs to know:** the expected arrival of the incoming run (SPEC-02); the departure and state of the connecting run, and of the next ones; the walk between them (SPEC-10); the commuter's threshold for this connection, if set (C09-02); reports from those already at the change (C09-09, SPEC-03); for a request to wait, a way to reach the connecting service [technology choice open].
- **Rules:**
  1. Compute the margin: the connecting run's expected departure minus the incoming run's expected arrival minus the walk.
  2. The connection `holds` when the margin is at least the commuter's threshold, or, with none set, at least the walk; `at risk` when below; `lost` when the connecting run has left or will leave before the commuter can reach it.
  3. Give one answer: "holds" or "does not hold" (C09-01), with who stated the times it rests on and when (C09-03).
  4. When it is `at risk` or `lost`, give the next connection that holds and the new arrival at the door (C09-12), and offer to tell the people waiting (SPEC-07).
  5. Tell the commuter on their channel when the connection's state changes, and in any case before the last stop before the change [not traced: how long before].
  6. **Asking to wait:** when the connection is `at risk` and it is the last of the day, or the commuter chooses, offer to ask that the connecting service be told. Send the request, with the incoming run and the connecting run (C25-01) [technology choice open].
  7. Show the answer as it comes: `will wait`, `will not wait` or `no answer` (C25-05), with its source and time. Without an answer, the connection's state stays as computed in rule 2.
  8. When a connection is lost and no next one reaches the destination today, open the ways out (SPEC-06).
- **States:** the connection states of the Foundation.
- **The commuter receives:** in the product and on their channel, holds or not, with source; the next connection and new arrival; the answer to a request to wait.

## When things go wrong

- **No live time for one of the two runs:** say "cannot tell", which run lacks data, and since when; show the next connection anyway.
- **Reports from the change contradict the operator** (for example that the connection has left): both shown (Foundation).
- **The request to wait cannot be sent:** say so at once; the state stays as computed.
- **No answer to the request:** `no answer`; the product never shows a connection as held without an answer.
- **The commuter does not respond:** nothing is sent on their behalf.

## Out of scope

- Telling the people he is meeting: SPEC-07.
- Ways out other than the next connection: SPEC-06.
- Planning with the commuter's own minimum change times: SPEC-10.
- Staff on board (C09-08, FAM-12), a held service by operator agreement (C09-06, C25-04, C25-06, FAM-23, background), a duty to hold or to share across the border (C09-07, C25-07, FAM-25), an earlier train on days that matter (C09-10, C25-10, C25-11, FAM-27): they need operators, rules or a change of habit.

## Acceptance criteria

- **Given** a threshold of 12 minutes for the Lugano connection **when** the incoming delay reaches 12 minutes **then** the commuter is told "does not hold", with the source, and the next connection that holds and the new arrival.
- **Given** a margin of 6 minutes and a walk of 4 **when** no threshold is set **then** the connection is shown as holding.
- **Given** a report from the change that the connecting service has left **when** the operator still shows it as waiting **then** both are shown.
- **Given** the last connection of the day is at risk **when** the commuter asks for it to wait **then** the request is sent and its state is shown until an answer comes.
- **Given** no answer has come **when** the commuter looks **then** the connection is not shown as held.

## Open questions

- **Feasibility:** asking the connecting service to wait needs an operator process to receive and answer the request (FAM-23, background; feasible 1). Whether to build it before that process exists is for Marco to decide [technology choice open].
- How long before the change the commuter must be told [not traced].
- Whether the product counts how many people need the connection (C25-09, background, [not traced] which source it would use).

## Connections

- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation this specification builds on: Principles 1, 2, 3, 6; The user (own threshold); The things it deals with (connection, run); States (connection); Sources of information; Channels.
- [SPEC-02_real-state-of-the-run.md](SPEC-02_real-state-of-the-run.md): named in this specification (Operating logic), where the two behaviours meet.
- [SPEC-03_travellers-report.md](SPEC-03_travellers-report.md): named in this specification (Operating logic), where the two behaviours meet.
- [SPEC-06_ways-out-when-the-trip-breaks.md](SPEC-06_ways-out-when-the-trip-breaks.md): named in this specification (Operating logic, Out of scope), where the two behaviours meet.
- [SPEC-07_those-waiting-are-told.md](SPEC-07_those-waiting-are-told.md): named in this specification (User stories served, Operating logic, Out of scope), where the two behaviours meet.
- [04_Generated_User_Stories.md](../02_Analysis/04_Generated_User_Stories.md): the user stories this specification serves: F-06, F-22.
- [06_Chosen_concept.md](../03_Ideation/06_Chosen_concept.md): the chosen concept; this specification draws on its families FAM-08, FAM-15, FAM-04, FAM-03, FAM-23.
- [SPEC-10_times-that-can-be-kept.md](SPEC-10_times-that-can-be-kept.md): the specifications that name this one where their behaviours meet.
