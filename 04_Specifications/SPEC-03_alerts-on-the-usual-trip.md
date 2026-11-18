---
source: Claude
date: 2026-11-18 19:55
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, information, planning, late-info, usual-trip]
related: [US-F-03_early-warning-usual-trip.md, F-03_early-warning-usual-trip.md, HMW-05_let-single-line-commuter-during.md, SPEC-00_overview.md, SPEC-01_foundation.md, SPEC-02_real-state-of-the-run.md, OQ-03_reaching-the-commuter-without-looking.md, OQ-07_saying-that-nothing-changed.md, OQ-08_how-early-works-and-strikes-are-told.md]
---

# SPEC-03: Alerts on the Usual Trip

Use this file as a prompt: it describes one behaviour to build within the architecture of the foundation: a frontend-only prototype made of web components, with all data from mock datasets in `data/`.

## User stories served

One row per story this specification serves, copied as written.

| Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- |
| [F-03](../02_Analysis/03_User_Stories/US-F-03_early-warning-usual-trip.md) | the single-line commuter | As the single-line commuter, during the seven minutes he drives to the station on one of his three office days, I want to be told, only when something changes, of a delay, cancellation, strike or works on my usual train, in time to change the decision to leave, so that he can wait in the warm car if the train is late. | All of it, with the usual trip and days entered in SPEC-01 |

**Why these stories belong together:** One story.

## Traceability

| | |
| --- | --- |
| **Features** | [F-03](../02_Analysis/02_Features/F-03_early-warning-usual-trip.md) |
| **Touchpoints** | [TP-031](../02_Analysis/01_Touchpoints/TP-031_checking-train-only-days.md), [TP-032](../02_Analysis/01_Touchpoints/TP-032_receiving-alert-usual-train.md), [TP-033](../02_Analysis/01_Touchpoints/TP-033_alerts-set-usual-train.md), [TP-034](../02_Analysis/01_Touchpoints/TP-034_turning-off-ignoring-operator.md), [TP-035](../02_Analysis/01_Touchpoints/TP-035_using-alerts-usual-trip.md), [TP-037](../02_Analysis/01_Touchpoints/TP-037_opening-operator-s-app.md), [TP-039](../02_Analysis/01_Touchpoints/TP-039_news-line-fault-relative.md), [TP-040](../02_Analysis/01_Touchpoints/TP-040_learning-strike-works-days.md), [TP-087](../02_Analysis/01_Touchpoints/TP-087_finding-about-cancellation-station.md), [TP-089](../02_Analysis/01_Touchpoints/TP-089_delay-cancellation-information-comes.md) |
| **Problem questions** | [HMW-05](../03_Ideation/01_How_Might_We/HMW-05_let-single-line-commuter-during.md) |
| **Concepts** | [S01](../03_Ideation/02_Ideas/S01_delays-sent-chosen-channel.md), [C05-01](../03_Ideation/02_Ideas/C05-01_told-wheel.md), [C05-02](../03_Ideation/02_Ideas/C05-02_line-state-waking.md), [C05-03](../03_Ideation/02_Ideas/C05-03_quiet-unless-changed.md), [C05-04](../03_Ideation/02_Ideas/C05-04_go-wait-word.md), [C05-05](../03_Ideation/02_Ideas/C05-05_own-timings.md), [C05-06](../03_Ideation/02_Ideas/C05-06_usual-train-named-once.md), [C05-07](../03_Ideation/02_Ideas/C05-07_works-strikes-good-time.md), [C05-08](../03_Ideation/02_Ideas/C05-08_others-line.md), [C05-09](../03_Ideation/02_Ideas/C05-09_first-platform.md), [C05-10](../03_Ideation/02_Ideas/C05-10_car-park-sign.md), [C05-11](../03_Ideation/02_Ideas/C05-11_duty-warn-before-departure.md), [C05-12](../03_Ideation/02_Ideas/C05-12_home-office-bad-morning.md) |
| **Families** | [FAM-01](../03_Ideation/02_Ideas/FAM-01_told-where-they.md) Told where they are, [FAM-03](../03_Ideation/02_Ideas/FAM-03_travellers-report.md) Travellers report, [FAM-07](../03_Ideation/02_Ideas/FAM-07_told-sooner.md) Told sooner, [FAM-08](../03_Ideation/02_Ideas/FAM-08_one-answer-data.md) One answer, not data, [FAM-11](../03_Ideation/02_Ideas/FAM-11_place-shows.md) The place shows it, [FAM-15](../03_Ideation/02_Ideas/FAM-15_knows-traveller.md) It knows the traveller, [FAM-25](../03_Ideation/02_Ideas/FAM-25_rules-rights.md) Rules and rights, [FAM-27](../03_Ideation/02_Ideas/FAM-27_change-trip-habit.md) Change the trip or the habit |
| **Stages covered** | before departure, disruption |
| **Marks** | FAM-01 3 · 1 · 3; FAM-03 2 · 2 · 3; FAM-07 2 · 1 · 2; FAM-08 3 · 1 · 3; FAM-11 2 · 1 · 3; FAM-15 2 · 3 · 2; FAM-25 2 · 1 · 1; FAM-27 1 · 1 · 0 (valuable · feasible · relevant, by family, from [04_Ideas_prioritization.md](../03_Ideation/02_Ideas/04_Ideas_prioritization.md)) |
| **Foundation** | Principle 3; Channels (when the product stays quiet); Rules that hold everywhere |

Concepts and families are references only: the behaviour below comes from the stories.

## Description

Tells the commuter, on their days of travel and only when something changes, of a delay, cancellation, strike or works on their usual trip, early enough to change the decision to leave.

## Operating logic

- **Starts when:** A fact changes the state of a run of the usual trip (SPEC-02), or works or a strike are announced for a coming travel day.
- **Needs to know:** The usual trip and days of travel (SPEC-01); the real state of its runs (SPEC-02); announced works and strikes (schedule, operator); the moments of a travel day when the commuter wants news and the kinds of event (set here); the channels (SPEC-01).
- **Rules:**
  1. Let the commuter choose the kinds of event (delay, cancellation, strike, works, platform change) and the moments of a travel day when news may reach them (for example before leaving, while driving to the station).
  2. On a travel day, within the chosen moments, send a message when a run of the usual trip changes state, with the expected time and its source.
  3. Send nothing when nothing has changed since the last message.
  4. Send works and strikes as soon as they are announced for a coming travel day.
  5. Send nothing outside the days of travel.
  6. Send in a form the commuter can take in while driving, when the moment chosen is a drive [technology choice open].
- **States:** An alert is `sent` or `not needed`. The settings are `set` or `missing`.
- **The user receives:** A message on the chosen channel: what changed, the expected time and its source.
- **Depends on:** Usual trip ([SPEC-01](SPEC-01_foundation.md), Initial set-up); Days of travel ([SPEC-01](SPEC-01_foundation.md), Initial set-up); Channels ([SPEC-01](SPEC-01_foundation.md), Initial set-up); Real state of a run ([SPEC-02](SPEC-02_real-state-of-the-run.md))
- **Provides:** none

## Architecture

- **Pages** (from the information architecture of [SPEC-01](SPEC-01_foundation.md)): **Alerts** (PG-13): the whole page.
- **Components:**
  - `<alert-settings>`: the kinds of event the commuter is told about and the moments of a travel day, each with a switch; reads `alerts.kinds`, `alerts.moments`; reacts to a switch being turned (the change is shown, not kept).
  - `<alert-log>`: the alerts sent today, each with its time, text and source; reads `alerts.sent.<scenario>`; reacts to the scenario changing.
  - `<announced-list>`: works and strikes announced for coming travel days, and when the commuter is told; reads `alerts.announced`; no events.
  - `<message-preview>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused.
  - `<missing-setup>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused.
- **Datasets:**
  - `alerts` (defined here): `kinds[{id, label, on}]`, `moments[{id, label, from, to, heard}]`, `sent.<scenario>[{time, text, source}]`, `announced[{date, text, source, told}]`.
  - `profile` (defined in the foundation): `usual_trip`, `days`, `channels`.
  - `runs` (defined in the foundation): the runs of the usual trip and their state.
  - `notifications` (defined in the foundation): `alerts.<scenario>[]`.
- **Simulated events:**
  - An alert on the way to the station: the "Simulate a message" control shows `<message-preview>` with `notifications.alerts.<scenario>`; a message meant to be heard shows its channel ("Spoken, on the way to the station") and its text, since how it is heard is [technology choice open] ([OQ-03](01_Open_Questions/OQ-03_reaching-the-commuter-without-looking.md)).
  - A strike or works announced: shown from `alerts.announced`; the reminder the evening before is a message in `notifications.alerts.on_time`.

## When things go wrong

- **No usual trip or no days of travel:** no alert can be sent; the commuter is told inside the product and led to SPEC-01.
- **No channel set:** the alert is kept inside the product and the commuter is told no channel is set.
- **Late or no data:** as in SPEC-02; "no news" is not sent as a message [not traced: whether it should be].
- **A message already sent turns out wrong:** a new message says what changed.

## Out of scope

The state of the run itself (SPEC-02); what to do when the trip breaks (SPEC-05).

## Acceptance criteria

- **Given** a usual trip with travel days Monday, Wednesday and Thursday **when** the train is late on a Tuesday **then** no message is sent.
- **Given** a moment set before leaving on a travel day **when** the train is on time **then** nothing is sent.
- **Given** a moment set before leaving **when** the train is 8 minutes late **then** the commuter receives the expected time and its source.
- **Given** works announced for a coming travel day **when** they are published **then** the commuter is told.
- **Given** a delay already sent **when** it does not change **then** nothing more is sent.

## Open questions

Each question has its own file in [01_Open_Questions/](01_Open_Questions/00_Open_questions_index.md), with its chain to the research.

- **[OQ-03](01_Open_Questions/OQ-03_reaching-the-commuter-without-looking.md)** How does a message reach a commuter who cannot look at a screen, for example while driving to the station or on a rerouted drive? [technology choice open] Research: ⚠ not supported.
- **[OQ-07](01_Open_Questions/OQ-07_saying-that-nothing-changed.md)** Is "nothing changed" or "no news" ever sent as a message, for example once at the first moment of the day, or only shown inside the product? [not traced] Research: partly.
- **[OQ-08](01_Open_Questions/OQ-08_how-early-works-and-strikes-are-told.md)** How many days before a travel day are planned works and strikes told, and how often is the message repeated? [not traced] Research: partly.

## Connections

- [US-F-03_early-warning-usual-trip.md](../02_Analysis/03_User_Stories/US-F-03_early-warning-usual-trip.md): a story this specification serves.
- [F-03_early-warning-usual-trip.md](../02_Analysis/02_Features/F-03_early-warning-usual-trip.md): the feature behind story F-03.
- [HMW-05_let-single-line-commuter-during.md](../03_Ideation/01_How_Might_We/HMW-05_let-single-line-commuter-during.md): the problem question written from a story it serves.
- [SPEC-00_overview.md](SPEC-00_overview.md): the overview that lists this specification.
- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation it stands on.
- [SPEC-02_real-state-of-the-run.md](SPEC-02_real-state-of-the-run.md): provides elements this specification depends on.
- [OQ-03_reaching-the-commuter-without-looking.md](01_Open_Questions/OQ-03_reaching-the-commuter-without-looking.md): an open question this specification raises.
- [OQ-07_saying-that-nothing-changed.md](01_Open_Questions/OQ-07_saying-that-nothing-changed.md): an open question this specification raises.
- [OQ-08_how-early-works-and-strikes-are-told.md](01_Open_Questions/OQ-08_how-early-works-and-strikes-are-told.md): an open question this specification raises.
