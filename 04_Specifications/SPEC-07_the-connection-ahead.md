---
source: Claude
date: 2026-11-18 19:55
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, disruption, information, tight-connection, late-info]
related: [US-F-06_whether-connection-still-holds.md, US-F-22_asking-connection-wait.md, F-06_whether-connection-still-holds.md, F-22_asking-connection-wait.md, HMW-09_help-como-commuter-8-23.md, HMW-25_help-german-rail-regular-late.md, SPEC-00_overview.md, SPEC-01_foundation.md, SPEC-04_todays-trip-at-a-glance.md, SPEC-02_real-state-of-the-run.md, SPEC-05_ways-out-when-the-trip-breaks.md, SPEC-06_those-waiting-are-told.md, OQ-17_how-early-before-a-change.md, OQ-18_asking-a-connection-to-wait.md]
---

# SPEC-07: The Connection Ahead

Use this file as a prompt: it describes one behaviour to build within the architecture of the foundation: a frontend-only prototype made of web components, with all data from mock datasets in `data/`.

## User stories served

One row per story this specification serves, copied as written.

| Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- |
| [F-06](../02_Analysis/03_User_Stories/US-F-06_whether-connection-still-holds.md) | the Como commuter | As the Como commuter, on the 8:23 towards Lugano as the delay grows towards 12 minutes, I want to be told before reaching the change whether the connection still holds and, if not, the next one that does, so that he can warn the people he is meeting before he arrives. | Whether the connection holds and the next one that does; warning the people met is in SPEC-06 |
| [F-22](../02_Analysis/03_User_Stories/US-F-22_asking-connection-wait.md) | a German rail regular (desk persona) | As a German rail regular (desk persona), on a late train before the last connection of the day, I want to ask from the train that the connecting service be told, and see the answer, so that the connection waits for him. | All of it |

**Why these stories belong together:** Both stories are the change ahead of a late run: whether it holds, and asking it to wait.

## Traceability

| | |
| --- | --- |
| **Features** | [F-06](../02_Analysis/02_Features/F-06_whether-connection-still-holds.md), [F-22](../02_Analysis/02_Features/F-22_asking-connection-wait.md) |
| **Touchpoints** | [TP-053](../02_Analysis/01_Touchpoints/TP-053_taking-local-bus-station.md), [TP-057](../02_Analysis/01_Touchpoints/TP-057_giving-up-public-transport.md), [TP-060](../02_Analysis/01_Touchpoints/TP-060_changing-train-intermediate-station.md), [TP-061](../02_Analysis/01_Touchpoints/TP-061_checking-phone-before-arriving.md), [TP-068](../02_Analysis/01_Touchpoints/TP-068_connection-cannot-kept-missed.md), [TP-106](../02_Analysis/01_Touchpoints/TP-106_telling-people-waiting-colleagues.md), [TP-069](../02_Analysis/01_Touchpoints/TP-069_asking-conductor-phone-ahead.md) |
| **Problem questions** | [HMW-09](../03_Ideation/01_How_Might_We/HMW-09_help-como-commuter-8-23.md), [HMW-25](../03_Ideation/01_How_Might_We/HMW-25_help-german-rail-regular-late.md) |
| **Concepts** | [C09-01](../03_Ideation/02_Ideas/C09-01_holds.md), [C09-02](../03_Ideation/02_Ideas/C09-02_own-threshold.md), [C09-03](../03_Ideation/02_Ideas/C09-03_whose-word-connection.md), [C09-04](../03_Ideation/02_Ideas/C09-04_warned-him.md), [C09-05](../03_Ideation/02_Ideas/C09-05_message-ready-send.md), [C09-06](../03_Ideation/02_Ideas/C09-06_connection-held.md), [C09-07](../03_Ideation/02_Ideas/C09-07_cross-border-duty.md), [C09-08](../03_Ideation/02_Ideas/C09-08_conductor-knows.md), [C09-09](../03_Ideation/02_Ideas/C09-09_those-already-change.md), [C09-10](../03_Ideation/02_Ideas/C09-10_earlier-train-matters.md), [C09-11](../03_Ideation/02_Ideas/C09-11_margin-agreed-work.md), [C09-12](../03_Ideation/02_Ideas/C09-12_new-arrival-stated.md), [C25-01](../03_Ideation/02_Ideas/C25-01_ask-train.md), [C25-02](../03_Ideation/02_Ideas/C25-02_reported-itself.md), [C25-03](../03_Ideation/02_Ideas/C25-03_crew-passes.md), [C25-04](../03_Ideation/02_Ideas/C25-04_staff-hold.md), [C25-05](../03_Ideation/02_Ideas/C25-05_answer-visible.md), [C25-06](../03_Ideation/02_Ideas/C25-06_last-day-waits.md), [C25-07](../03_Ideation/02_Ideas/C25-07_holding-duty.md), [C25-08](../03_Ideation/02_Ideas/C25-08_ride-paid-if-missed.md), [C25-09](../03_Ideation/02_Ideas/C25-09_many-need.md), [C25-10](../03_Ideation/02_Ideas/C25-10_train-before-last.md), [C25-11](../03_Ideation/02_Ideas/C25-11_planned-last.md), [C25-12](../03_Ideation/02_Ideas/C25-12_word-connection.md) |
| **Families** | [FAM-03](../03_Ideation/02_Ideas/FAM-03_travellers-report.md) Travellers report, [FAM-04](../03_Ideation/02_Ideas/FAM-04_source-made-visible.md) The source made visible, [FAM-08](../03_Ideation/02_Ideas/FAM-08_one-answer-data.md) One answer, not data, [FAM-12](../03_Ideation/02_Ideas/FAM-12_person-spot.md) A person on the spot, [FAM-13](../03_Ideation/02_Ideas/FAM-13_those-depending-them-told.md) Those depending on them are told, [FAM-15](../03_Ideation/02_Ideas/FAM-15_knows-traveller.md) It knows the traveller, [FAM-16](../03_Ideation/02_Ideas/FAM-16_settled-beforehand.md) Settled beforehand, [FAM-22](../03_Ideation/02_Ideas/FAM-22_money-covers-failure.md) Money covers the failure, [FAM-23](../03_Ideation/02_Ideas/FAM-23_connection-held.md) The connection held, [FAM-25](../03_Ideation/02_Ideas/FAM-25_rules-rights.md) Rules and rights, [FAM-27](../03_Ideation/02_Ideas/FAM-27_change-trip-habit.md) Change the trip or the habit |
| **Stages covered** | first mile, transfer, disruption |
| **Marks** | FAM-03 2 · 2 · 3; FAM-04 2 · 1 · 3; FAM-08 3 · 1 · 3; FAM-12 2 · 1 · 3; FAM-13 3 · 1 · 3; FAM-15 2 · 3 · 2; FAM-16 2 · 3 · 2; FAM-22 1 · 1 · 1; FAM-23 3 · 1 · 3; FAM-25 2 · 1 · 1; FAM-27 1 · 1 · 0 (valuable · feasible · relevant, by family, from [04_Ideas_prioritization.md](../03_Ideation/02_Ideas/04_Ideas_prioritization.md)) |
| **Foundation** | Principles 1, 2; States (connection); Sources of information |

Concepts and families are references only: the behaviour below comes from the stories.

## Description

Tells the commuter, before they reach a change, whether the connection still holds with the current delay and, if not, the next one that does; and lets them ask, from the late run, that the connecting service be told, and see the answer.

## Operating logic

- **Starts when:** The expected arrival of the run before a change moves (SPEC-02), or the commuter asks for the connection to wait.
- **Needs to know:** The trip of the day and its connections (SPEC-04); the real state of the incoming and connecting runs (SPEC-02); the commuter's minimum change time (SPEC-01); the answer of the connecting service (operator).
- **Rules:**
  1. Before the change, compare the expected arrival with the departure of the connection, the way between them and the commuter's minimum change time.
  2. Tell the commuter when the connection becomes at risk or lost, with the source of the delay.
  3. When it is lost, give the next connection that holds and the new arrival at the door.
  4. Let the commuter ask that the connecting service be told; show the request until an answer comes.
  5. Show the connection as held only on an answer that says so.
- **States:** Connection: holds → at risk → lost. Request: `sent` → `will wait`, `will not wait` or `no answer`.
- **The user receives:** A message on the chosen channel when the connection changes state; inside the product, the request and its answer.
- **Depends on:** Trip of the day ([SPEC-04](SPEC-04_todays-trip-at-a-glance.md)); Real state of a run ([SPEC-02](SPEC-02_real-state-of-the-run.md)); Own rules ([SPEC-01](SPEC-01_foundation.md), Initial set-up); Channels ([SPEC-01](SPEC-01_foundation.md), Initial set-up)
- **Provides:** State of a connection, to [SPEC-05](SPEC-05_ways-out-when-the-trip-breaks.md), [SPEC-06](SPEC-06_those-waiting-are-told.md)

## Architecture

- **Pages** (from the information architecture of [SPEC-01](SPEC-01_foundation.md)): **Connection** (PG-03): the whole page; **Today (start page)** (PG-01): the change, as a line of the trip.
- **Components:**
  - `<connection-state>`: the change ahead: the station, the two runs, the way between them, where to board, the margin against the commuter's own rule, and the next connection that holds; reads `connections`, `profile.own_rules`; reacts to the scenario changing.
  - `<wait-request>`: asking, from the late run, that the connecting service be told, and its answer; reads `connections.by_scenario.<key>.request_answer`, `connections.request_answer_text`; reacts to "Ask".
  - `<run-card>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused.
  - `<message-preview>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused.
- **Datasets:**
  - `connections` (defined in the foundation): `station`, `from_run`, `to_run`, `walk_minutes`, `board_where`, `by_scenario.<key>{state, margin, next_dep, door_arrival, warn_at, request_answer}`, `request_answer_text`.
  - `runs` (defined in the foundation): the incoming and outgoing runs.
  - `profile` (defined in the foundation): `own_rules.min_change`, `own_rules.per_station`.
  - `notifications` (defined in the foundation): `connection.<scenario or any>[]`.
- **Simulated events:**
  - The warning before the change: a timer set to `warn_at` on the mock clock, or the "Simulate a message" control, shows `notifications.connection`.
  - The answer of the connecting service: after "Ask", a short timer shows the answer of the scenario from `request_answer`.

## When things go wrong

- **No minimum change time set:** the default of the station or schedule is used, and the commuter is told it can be set in SPEC-01.
- **No answer from the connecting service:** the connection is not shown as held.
- **Sources disagree on whether the connection left:** both are shown.
- **No trip of the day:** nothing to watch; the commuter can open a run directly in SPEC-02.

## Out of scope

Telling the people met (SPEC-06); the ways out if the connection is lost and no next one fits (SPEC-05).

## Acceptance criteria

- **Given** a margin of 10 minutes and a minimum change time of 4 **when** the delay reaches 7 minutes **then** the commuter is told the connection is at risk, with the source.
- **Given** the connection is lost **when** the commuter is told **then** they also see the next connection that holds and the new arrival.
- **Given** the commuter asks the connection to wait **when** no answer has come **then** the request is shown as sent and the connection is not shown as held.
- **Given** the connecting service answers it will wait **when** the commuter looks **then** the connection shows as held, with that answer.

## Open questions

Each question has its own file in [01_Open_Questions/](01_Open_Questions/00_Open_questions_index.md), with its chain to the research.

- **[OQ-17](01_Open_Questions/OQ-17_how-early-before-a-change.md)** How long before the change does the commuter learn whether the connection still holds? [not traced] Research: ⚠ not supported.
- **[OQ-18](01_Open_Questions/OQ-18_asking-a-connection-to-wait.md)** Is the request to hold a connection built before any operator can receive or answer it? [not traced] Research: ⚠ not supported.

## Connections

- [US-F-06_whether-connection-still-holds.md](../02_Analysis/03_User_Stories/US-F-06_whether-connection-still-holds.md): a story this specification serves.
- [US-F-22_asking-connection-wait.md](../02_Analysis/03_User_Stories/US-F-22_asking-connection-wait.md): a story this specification serves.
- [F-06_whether-connection-still-holds.md](../02_Analysis/02_Features/F-06_whether-connection-still-holds.md): the feature behind story F-06.
- [F-22_asking-connection-wait.md](../02_Analysis/02_Features/F-22_asking-connection-wait.md): the feature behind story F-22.
- [HMW-09_help-como-commuter-8-23.md](../03_Ideation/01_How_Might_We/HMW-09_help-como-commuter-8-23.md): the problem question written from a story it serves.
- [HMW-25_help-german-rail-regular-late.md](../03_Ideation/01_How_Might_We/HMW-25_help-german-rail-regular-late.md): the problem question written from a story it serves.
- [SPEC-00_overview.md](SPEC-00_overview.md): the overview that lists this specification.
- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation it stands on.
- [SPEC-04_todays-trip-at-a-glance.md](SPEC-04_todays-trip-at-a-glance.md): provides elements this specification depends on.
- [SPEC-02_real-state-of-the-run.md](SPEC-02_real-state-of-the-run.md): provides elements this specification depends on.
- [SPEC-05_ways-out-when-the-trip-breaks.md](SPEC-05_ways-out-when-the-trip-breaks.md): depends on elements this specification provides.
- [SPEC-06_those-waiting-are-told.md](SPEC-06_those-waiting-are-told.md): depends on elements this specification provides.
- [OQ-17_how-early-before-a-change.md](01_Open_Questions/OQ-17_how-early-before-a-change.md): an open question this specification raises.
- [OQ-18_asking-a-connection-to-wait.md](01_Open_Questions/OQ-18_asking-a-connection-to-wait.md): an open question this specification raises.
