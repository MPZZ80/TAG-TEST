---
source: Claude
date: 2026-11-23 21:36
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, planning, tight-connection, first-last-mile, unreliable-service]
related: [US-F-05_legs-both-ends-real.md, US-F-07_trips-planned-commuter-s.md, US-F-13_times-commuter-can-plan.md, F-05_legs-both-ends-real.md, F-07_trips-planned-commuter-s.md, F-13_times-commuter-can-plan.md, HMW-08_help-london-traveller-changing-king.md, HMW-10_help-german-rail-regular-planner.md, HMW-16_make-time-promised-verona-milan.md, SPEC-00_overview.md, SPEC-01_foundation.md, SPEC-02_real-state-of-the-run.md, SPEC-08_every-way-door-to-door.md, OQ-21_source-of-walking-times.md, OQ-22_how-long-records-are-kept-to-time-a-leg.md]
---

# SPEC-09: Times That Can Be Kept

Use this file as a prompt: it describes one behaviour to build within the architecture of the foundation: a frontend-only prototype made of web components, with all data from mock datasets in `data/`.

## User stories served

One row per story this specification serves, copied as written.

| Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- |
| [F-05](../02_Analysis/03_User_Stories/US-F-05_legs-both-ends-real.md) | a London traveller (desk persona) | As a London traveller (desk persona), changing at King's Cross for a train to Luton, when the app says the walk to the platform takes 3 minutes, I want the way to the first stop and from the last one, where to board included, planned and timed at the length it really takes, so that I do not miss the train after running for 10 minutes. | All of it |
| [F-07](../02_Analysis/03_User_Stories/US-F-07_trips-planned-commuter-s.md) | a German rail regular (desk persona) | As a German rail regular (desk persona), logging every trip and his connections, when the planner offers a change shorter than his own rule, I want the trip planned with my own minimum change time, margin, number of changes and own leg, and to see how tight each connection is, so that he relies only on connections he counts as real and not on "connections on paper". | Planning with the own rules and showing tightness; entering the rules is in SPEC-01 |
| [F-13](../02_Analysis/03_User_Stories/US-F-13_times-commuter-can-plan.md) | the Verona–Milan commuter | As the Verona–Milan commuter, planning the trip while taking it for granted that his train will be 5 to 15 minutes late, I want to see the trip time and arrival I can expect from works and from how late that train usually is, so that the time he is promised is the time that is kept. | All of it |

**Why these stories belong together:** All three ask that the times of a plan be the times that really happen: the walk at its real length, the change at the commuter's own minimum, the run at its usual lateness.

## Traceability

| | |
| --- | --- |
| **Features** | [F-05](../02_Analysis/02_Features/F-05_legs-both-ends-real.md), [F-07](../02_Analysis/02_Features/F-07_trips-planned-commuter-s.md), [F-13](../02_Analysis/02_Features/F-13_times-commuter-can-plan.md) |
| **Touchpoints** | [TP-051](../02_Analysis/01_Touchpoints/TP-051_walking-station-stop.md), [TP-054](../02_Analysis/01_Touchpoints/TP-054_finding-where-coach-bus.md), [TP-056](../02_Analysis/01_Touchpoints/TP-056_following-walking-time-app.md), [TP-059](../02_Analysis/01_Touchpoints/TP-059_handover-car-bicycle-train.md), [TP-064](../02_Analysis/01_Touchpoints/TP-064_handover-train-underground-bus.md), [TP-081](../02_Analysis/01_Touchpoints/TP-081_long-leg-arrival-station.md), [TP-082](../02_Analysis/01_Touchpoints/TP-082_urban-leg-after-train.md), [TP-018](../02_Analysis/01_Touchpoints/TP-018_choosing-earlier-service-needed.md), [TP-023](../02_Analysis/01_Touchpoints/TP-023_planner-proposes-change-too.md), [TP-024](../02_Analysis/01_Touchpoints/TP-024_applying-personal-minimum-time.md), [TP-025](../02_Analysis/01_Touchpoints/TP-025_keeping-one-leg-under.md), [TP-073](../02_Analysis/01_Touchpoints/TP-073_using-time-board-work.md), [TP-006](../02_Analysis/01_Touchpoints/TP-006_seeing-purchase-works-make.md), [TP-017](../02_Analysis/01_Touchpoints/TP-017_planning-assumed-delay.md), [TP-041](../02_Analysis/01_Touchpoints/TP-041_leaving-home-fixed-margin.md) |
| **Problem questions** | [HMW-08](../03_Ideation/01_How_Might_We/HMW-08_help-london-traveller-changing-king.md), [HMW-10](../03_Ideation/01_How_Might_We/HMW-10_help-german-rail-regular-planner.md), [HMW-16](../03_Ideation/01_How_Might_We/HMW-16_make-time-promised-verona-milan.md) |
| **Concepts** | [C08-01](../03_Ideation/02_Ideas/C08-01_walk-under-real-crowds.md), [C08-02](../03_Ideation/02_Ideas/C08-02_walk-range.md), [C08-03](../03_Ideation/02_Ideas/C08-03_others-real-times.md), [C08-04](../03_Ideation/02_Ideas/C08-04_was-measured.md), [C08-05](../03_Ideation/02_Ideas/C08-05_can-you-make.md), [C08-06](../03_Ideation/02_Ideas/C08-06_next-train-instead.md), [C08-07](../03_Ideation/02_Ideas/C08-07_minutes-station-signs.md), [C08-08](../03_Ideation/02_Ideas/C08-08_staff-concourse.md), [C08-09](../03_Ideation/02_Ideas/C08-09_platform-known-earlier.md), [C08-10](../03_Ideation/02_Ideas/C08-10_own-pace.md), [C08-11](../03_Ideation/02_Ideas/C08-11_change-known-beforehand.md), [C08-12](../03_Ideation/02_Ideas/C08-12_cover-walk-was-wrong.md), [C10-01](../03_Ideation/02_Ideas/C10-01_own-rule-remembered.md), [C10-02](../03_Ideation/02_Ideas/C10-02_rule-station.md), [C10-03](../03_Ideation/02_Ideas/C10-03_tightness-stated.md), [C10-04](../03_Ideation/02_Ideas/C10-04_track-record.md), [C10-05](../03_Ideation/02_Ideas/C10-05_regulars-rate.md), [C10-06](../03_Ideation/02_Ideas/C10-06_rules-shared.md), [C10-07](../03_Ideation/02_Ideas/C10-07_paper-connection-label.md), [C10-08](../03_Ideation/02_Ideas/C10-08_one-margin.md), [C10-09](../03_Ideation/02_Ideas/C10-09_honest-minimum-times.md), [C10-10](../03_Ideation/02_Ideas/C10-10_wider-gaps-timetable.md), [C10-11](../03_Ideation/02_Ideas/C10-11_rights-short-connections.md), [C10-12](../03_Ideation/02_Ideas/C10-12_missed-connection-cover.md), [C16-01](../03_Ideation/02_Ideas/C16-01_looser-timetable.md), [C16-02](../03_Ideation/02_Ideas/C16-02_expected-beside-timetabled.md), [C16-03](../03_Ideation/02_Ideas/C16-03_worst-usual-case.md), [C16-04](../03_Ideation/02_Ideas/C16-04_train-does.md), [C16-05](../03_Ideation/02_Ideas/C16-05_works-ahead.md), [C16-06](../03_Ideation/02_Ideas/C16-06_arrival-plan.md), [C16-07](../03_Ideation/02_Ideas/C16-07_margin-added.md), [C16-08](../03_Ideation/02_Ideas/C16-08_recovery-time.md), [C16-09](../03_Ideation/02_Ideas/C16-09_measured-arrival.md), [C16-10](../03_Ideation/02_Ideas/C16-10_pay-broken-promise.md), [C16-11](../03_Ideation/02_Ideas/C16-11_regulars-estimates.md), [C16-12](../03_Ideation/02_Ideas/C16-12_crew-s-estimate.md) |
| **Families** | [FAM-03](../03_Ideation/02_Ideas/FAM-03_travellers-report.md) Travellers report, [FAM-04](../03_Ideation/02_Ideas/FAM-04_source-made-visible.md) The source made visible, [FAM-05](../03_Ideation/02_Ideas/FAM-05_honest-uncertainty.md) Honest uncertainty, [FAM-06](../03_Ideation/02_Ideas/FAM-06_times-allow-reality.md) Times that allow for reality, [FAM-07](../03_Ideation/02_Ideas/FAM-07_told-sooner.md) Told sooner, [FAM-08](../03_Ideation/02_Ideas/FAM-08_one-answer-data.md) One answer, not data, [FAM-10](../03_Ideation/02_Ideas/FAM-10_lies-ahead-known-beforehand.md) What lies ahead, known beforehand, [FAM-11](../03_Ideation/02_Ideas/FAM-11_place-shows.md) The place shows it, [FAM-12](../03_Ideation/02_Ideas/FAM-12_person-spot.md) A person on the spot, [FAM-15](../03_Ideation/02_Ideas/FAM-15_knows-traveller.md) It knows the traveller, [FAM-22](../03_Ideation/02_Ideas/FAM-22_money-covers-failure.md) Money covers the failure, [FAM-25](../03_Ideation/02_Ideas/FAM-25_rules-rights.md) Rules and rights |
| **Stages covered** | planning, before departure, first mile, main leg, transfer, last mile |
| **Marks** | FAM-03 2 · 2 · 3; FAM-04 2 · 1 · 3; FAM-05 2 · 1 · 3; FAM-06 2 · 1 · 3; FAM-07 2 · 1 · 2; FAM-08 3 · 1 · 3; FAM-10 3 · 1 · 3; FAM-11 2 · 1 · 3; FAM-12 2 · 1 · 3; FAM-15 2 · 3 · 2; FAM-22 1 · 1 · 1; FAM-25 2 · 1 · 1 (valuable · feasible · relevant, by family, from [04_Ideas_prioritization.md](../03_Ideation/02_Ideas/04_Ideas_prioritization.md)) |
| **Foundation** | Principle 1; Sources of information (record of past runs) |

Concepts and families are references only: the behaviour below comes from the stories.

## Description

Times every leg and connection of a planned trip at the length it really takes: the way to the first stop and from the last one, where to board, the commuter's own change times, and how late a run usually is, and shows how tight each connection is.

## Operating logic

- **Starts when:** A trip is planned (SPEC-08) or opened.
- **Needs to know:** The own rules and needs on the way (SPEC-01); walking ways and where to board (operators, third parties) [technology choice open]; announced works (schedule); the record of past runs (SPEC-02).
- **Rules:**
  1. Time the first and last legs and the ways through stations at their real length, including where to board.
  2. Use the commuter's minimum change time (per station if set) and margin; leave out connections shorter than it.
  3. Respect the maximum number of changes and include the own leg.
  4. Show how tight each connection is against the commuter's own rule.
  5. Show the trip time and arrival the commuter can expect from announced works and from how late that run usually is, next to the planned ones.
- **States:** None of its own.
- **The user receives:** Inside the product: for each leg and connection, its real time and tightness; for the trip, the planned and the expected arrival.
- **Depends on:** Own rules ([SPEC-01](SPEC-01_foundation.md), Initial set-up); Needs on the way ([SPEC-01](SPEC-01_foundation.md), Initial set-up); Record of past runs ([SPEC-02](SPEC-02_real-state-of-the-run.md))
- **Provides:** Timing of legs and connections, to [SPEC-08](SPEC-08_every-way-door-to-door.md)

## Architecture

- **Pages** (from the information architecture of [SPEC-01](SPEC-01_foundation.md)): **Way detail** (PG-06): the legs and connections at their real length, and their tightness; reached from "Real times and booking" on a way of the Ways page, and from "How long each leg really takes" in the box of the arrival on Today, for the trip followed today.
- **Components:**
  - `<works-note>`: the arrival at the door, planned and expected at real times, and with the works announced on the route and the minutes they add; reads `timing.arrival`, `timing.works`; no events.
  - `<leg-timing>`: each leg and each way through a station at its planned and real length (longer in colour, unknown said so), with the source and a note such as where to board; reads `timing.legs[]`; no events.
  - `<change-tightness>` (named `<tightness>` in the first version: a web component needs a hyphen in its name): how tight the change is against the commuter's own rule, on paper and with the incoming run as late as usual; when it falls short, the planner counts on the next connection that keeps the rule; reads `connections` (station, the two runs), `runs` (times, `usual_delay`), `profile.own_rules`; no events: the plan is timed from the schedule and the record, not from today's state.
  - `<usual-delay>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused.
  - `<way-strip>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused, the way at the head of the page.
- **Datasets:**
  - `timing` (defined here): `trip`, `way` (the trip followed today and the way of `ways` that is the same), `legs[{label, stage, planned, real, source, note}]`, `works{text, minutes, from}`, `arrival{planned, expected, works}`. Real times are recorded for this trip only; another way shows that none are recorded yet.
  - `connections` (defined in the foundation): `station`, `from_run`, `to_run`.
  - `profile` (defined in the foundation): `own_rules{min_change, per_station, margin, max_changes, own_leg}`.
  - `runs` (defined in the foundation): `usual_delay`.
- **Simulated events:**
  - None.

## When things go wrong

- **No own rules:** the schedule's minimum change times are used, marked, with a link to SPEC-01.
- **No record of past runs:** only the planned time is shown, with a note that no record exists yet.
- **Walking time unknown:** shown as unknown, never as the planner's default.

## Out of scope

Comparing ways (SPEC-08); the live state of a run (SPEC-02).

## Acceptance criteria

- **Given** the commuter's minimum change time of 10 minutes **when** the planner finds a 6-minute change **then** that connection is left out or marked as shorter than the rule.
- **Given** a run usually 10 minutes late **when** the commuter plans **then** the expected arrival is shown next to the planned one.
- **Given** a 3-minute walk to the platform that really takes 10 **when** the trip is timed **then** the walk counts at its real length.
- **Given** works announced on the line **when** the commuter plans **then** the longer trip time is shown.

## Open questions

Each question has its own file in [01_Open_Questions/](01_Open_Questions/00_Open_questions_index.md), with its chain to the research.

- **[OQ-21](01_Open_Questions/OQ-21_source-of-walking-times.md)** Where do the real walking times come from: at both ends, and between platforms? [technology choice open] Research: ⚠ not supported.
- **[OQ-22](01_Open_Questions/OQ-22_how-long-records-are-kept-to-time-a-leg.md)** How long are reports and records kept to time a leg (a walk, a change, a drive)? [not traced] Research: ⚠ not supported.

## Connections

- [US-F-05_legs-both-ends-real.md](../02_Analysis/03_User_Stories/US-F-05_legs-both-ends-real.md): a story this specification serves.
- [US-F-07_trips-planned-commuter-s.md](../02_Analysis/03_User_Stories/US-F-07_trips-planned-commuter-s.md): a story this specification serves.
- [US-F-13_times-commuter-can-plan.md](../02_Analysis/03_User_Stories/US-F-13_times-commuter-can-plan.md): a story this specification serves.
- [F-05_legs-both-ends-real.md](../02_Analysis/02_Features/F-05_legs-both-ends-real.md): the feature behind story F-05.
- [F-07_trips-planned-commuter-s.md](../02_Analysis/02_Features/F-07_trips-planned-commuter-s.md): the feature behind story F-07.
- [F-13_times-commuter-can-plan.md](../02_Analysis/02_Features/F-13_times-commuter-can-plan.md): the feature behind story F-13.
- [HMW-08_help-london-traveller-changing-king.md](../03_Ideation/01_How_Might_We/HMW-08_help-london-traveller-changing-king.md): the problem question written from a story it serves.
- [HMW-10_help-german-rail-regular-planner.md](../03_Ideation/01_How_Might_We/HMW-10_help-german-rail-regular-planner.md): the problem question written from a story it serves.
- [HMW-16_make-time-promised-verona-milan.md](../03_Ideation/01_How_Might_We/HMW-16_make-time-promised-verona-milan.md): the problem question written from a story it serves.
- [SPEC-00_overview.md](SPEC-00_overview.md): the overview that lists this specification.
- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation it stands on.
- [SPEC-02_real-state-of-the-run.md](SPEC-02_real-state-of-the-run.md): provides elements this specification depends on.
- [SPEC-08_every-way-door-to-door.md](SPEC-08_every-way-door-to-door.md): depends on elements this specification provides.
- [OQ-21_source-of-walking-times.md](01_Open_Questions/OQ-21_source-of-walking-times.md): an open question this specification raises.
- [OQ-22_how-long-records-are-kept-to-time-a-leg.md](01_Open_Questions/OQ-22_how-long-records-are-kept-to-time-a-leg.md): an open question this specification raises.
