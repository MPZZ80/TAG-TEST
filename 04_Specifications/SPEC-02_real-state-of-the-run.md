---
source: Claude
date: 2026-11-18 19:33
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, information, disruption, late-info, unreliable-service]
related: [US-F-01_real-state-vehicle-source.md, F-01_real-state-vehicle-source.md, HMW-01_help-como-commuter-standing-platform.md, HMW-02_spare-como-commuter-platform-during.md, SPEC-00_overview.md, SPEC-01_foundation.md, SPEC-04_todays-trip-at-a-glance.md, SPEC-03_alerts-on-the-usual-trip.md, SPEC-05_ways-out-when-the-trip-breaks.md, SPEC-06_those-waiting-are-told.md, SPEC-07_the-connection-ahead.md, SPEC-09_times-that-can-be-kept.md, SPEC-12_compensation-from-the-trip.md, SPEC-14_stop-approaching.md, OQ-01_sources-of-the-real-position.md, OQ-02_age-limit-of-a-fact.md, OQ-06_length-of-the-record-of-past-runs.md]
---

# SPEC-02: The Real State of the Run

Use this file as a prompt: it describes one behaviour to build within the architecture of the foundation: a frontend-only prototype made of web components, with all data from mock datasets in `data/`.

## User stories served

One row per story this specification serves, copied as written.

| Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- |
| [F-01](../02_Analysis/03_User_Stories/US-F-01_real-state-vehicle-source.md) | the Como commuter | As the Como commuter, standing on the platform watching the delay on the board grow from 5 to 10 to 15 minutes while a third-party app shows another time, I want to see where the train really is, when it will really leave and arrive, why it is late and which source says so, so that he knows as early as an unofficial app would tell him. | All of it |

**Why these stories belong together:** One story.

## Traceability

| | |
| --- | --- |
| **Features** | [F-01](../02_Analysis/02_Features/F-01_real-state-vehicle-source.md) |
| **Touchpoints** | [TP-028](../02_Analysis/01_Touchpoints/TP-028_deciding-return-train-day.md), [TP-029](../02_Analysis/01_Touchpoints/TP-029_checking-live-departures-before.md), [TP-038](../02_Analysis/01_Touchpoints/TP-038_checking-another-app-site.md), [TP-043](../02_Analysis/01_Touchpoints/TP-043_acting-delay-warning-turns.md), [TP-067](../02_Analysis/01_Touchpoints/TP-067_deciding-spot-whether-wait.md), [TP-070](../02_Analysis/01_Touchpoints/TP-070_waiting-platform-front-departure.md), [TP-075](../02_Analysis/01_Touchpoints/TP-075_following-train-app-board.md), [TP-088](../02_Analysis/01_Touchpoints/TP-088_watching-delay-grow-board.md), [TP-089](../02_Analysis/01_Touchpoints/TP-089_delay-cancellation-information-comes.md), [TP-090](../02_Analysis/01_Touchpoints/TP-090_choosing-source-believe-they.md), [TP-091](../02_Analysis/01_Touchpoints/TP-091_asking-staff-help-point.md), [TP-092](../02_Analysis/01_Touchpoints/TP-092_stuck-stopped-cancelled-train.md), [TP-096](../02_Analysis/01_Touchpoints/TP-096_waiting-next-service.md) |
| **Problem questions** | [HMW-01](../03_Ideation/01_How_Might_We/HMW-01_help-como-commuter-standing-platform.md), [HMW-02](../03_Ideation/01_How_Might_We/HMW-02_spare-como-commuter-platform-during.md) |
| **Concepts** | [S02](../03_Ideation/02_Ideas/S02_delay-device-position.md), [S03](../03_Ideation/02_Ideas/S03_users-report-delay.md), [C01-01](../03_Ideation/02_Ideas/C01-01_source-label.md), [C01-02](../03_Ideation/02_Ideas/C01-02_disagreement-flag.md), [C01-03](../03_Ideation/02_Ideas/C01-03_first-hand-position.md), [C01-04](../03_Ideation/02_Ideas/C01-04_word-board.md), [C01-05](../03_Ideation/02_Ideas/C01-05_position-phones-board.md), [C01-06](../03_Ideation/02_Ideas/C01-06_platform-voice.md), [C01-07](../03_Ideation/02_Ideas/C01-07_honest-range.md), [C01-08](../03_Ideation/02_Ideas/C01-08_next-news-promised.md), [C01-09](../03_Ideation/02_Ideas/C01-09_board-matches-best-source.md), [C01-10](../03_Ideation/02_Ideas/C01-10_single-expected-time.md), [C01-11](../03_Ideation/02_Ideas/C01-11_told-without-watching.md), [C01-12](../03_Ideation/02_Ideas/C01-12_duty-publish-once.md), [C02-01](../03_Ideation/02_Ideas/C02-01_cancellation-likelihood.md), [C02-02](../03_Ideation/02_Ideas/C02-02_nothing-read-yet.md), [C02-03](../03_Ideation/02_Ideas/C02-03_cancellation-declared-decided.md), [C02-04](../03_Ideation/02_Ideas/C02-04_decision-deadline.md), [C02-05](../03_Ideation/02_Ideas/C02-05_limit-growing-delays.md), [C02-06](../03_Ideation/02_Ideas/C02-06_someone-ask.md), [C02-07](../03_Ideation/02_Ideas/C02-07_crew-s-word.md), [C02-08](../03_Ideation/02_Ideas/C02-08_reason-behind-numbers.md), [C02-09](../03_Ideation/02_Ideas/C02-09_happened-last-time.md), [C02-10](../03_Ideation/02_Ideas/C02-10_platform-pool.md), [C02-11](../03_Ideation/02_Ideas/C02-11_own-limit.md), [C02-12](../03_Ideation/02_Ideas/C02-12_wait-elsewhere.md) |
| **Families** | [FAM-01](../03_Ideation/02_Ideas/FAM-01_told-where-they.md) Told where they are, [FAM-02](../03_Ideation/02_Ideas/FAM-02_delay-measured-real-position.md) Delay measured from the real position, [FAM-03](../03_Ideation/02_Ideas/FAM-03_travellers-report.md) Travellers report, [FAM-04](../03_Ideation/02_Ideas/FAM-04_source-made-visible.md) The source made visible, [FAM-05](../03_Ideation/02_Ideas/FAM-05_honest-uncertainty.md) Honest uncertainty, [FAM-07](../03_Ideation/02_Ideas/FAM-07_told-sooner.md) Told sooner, [FAM-08](../03_Ideation/02_Ideas/FAM-08_one-answer-data.md) One answer, not data, [FAM-11](../03_Ideation/02_Ideas/FAM-11_place-shows.md) The place shows it, [FAM-12](../03_Ideation/02_Ideas/FAM-12_person-spot.md) A person on the spot, [FAM-16](../03_Ideation/02_Ideas/FAM-16_settled-beforehand.md) Settled beforehand, [FAM-25](../03_Ideation/02_Ideas/FAM-25_rules-rights.md) Rules and rights, [FAM-27](../03_Ideation/02_Ideas/FAM-27_change-trip-habit.md) Change the trip or the habit |
| **Stages covered** | before departure, main leg, transfer, disruption |
| **Marks** | FAM-01 3 · 1 · 3; FAM-02 3 · 1 · 3; FAM-03 2 · 2 · 3; FAM-04 2 · 1 · 3; FAM-05 2 · 1 · 3; FAM-07 2 · 1 · 2; FAM-08 3 · 1 · 3; FAM-11 2 · 1 · 3; FAM-12 2 · 1 · 3; FAM-16 2 · 3 · 2; FAM-25 2 · 1 · 1; FAM-27 1 · 1 · 0 (valuable · feasible · relevant, by family, from [04_Ideas_prioritization.md](../03_Ideation/02_Ideas/04_Ideas_prioritization.md)) |
| **Foundation** | Principles 1, 2; States (run, fact); Sources of information; Rules that hold everywhere (no data, late data, wrong data) |

Concepts and families are references only: the behaviour below comes from the stories.

## Description

Tells the commuter, for a run they take or are waiting for, where it really is, when it will really leave and arrive, why it is late, and which source says so, as early as any source knows it.

## Operating logic

- **Starts when:** The commuter opens a run, from the usual trip (SPEC-04), from a trip under way, or by looking for it; or a fact about a run of the commuter's trip arrives.
- **Needs to know:** Facts about the run from the sources of the foundation: schedule, operator live, other travellers; the run the commuter takes, from the usual trip (SPEC-01) or the trip of the day (SPEC-04).
- **Rules:**
  1. Show the expected departure and arrival, and where the run is now.
  2. Show the source, the age and the status (confirmed, estimated, reported) of every figure.
  3. When sources disagree, show each figure with its source and the gap between them.
  4. Show the reason for the delay when a source gives it.
  5. Show the run as cancelled only when a source says so, with that source; a growing delay alone never shows it as cancelled.
  6. When no source has said anything for longer than the age limit, show "no news since <time>".
  7. Keep each run's facts over time, so that how late a run usually is can be told (record of past runs).
- **States:** The run states of the foundation: planned, on time, late (minutes), departed, arrived, cancelled, no news.
- **The user receives:** Inside the product: the expected times, position, reason and sources. A message on the commuter's channel when a run of their trip is cancelled.
- **Depends on:** Usual trip ([SPEC-01](SPEC-01_foundation.md), Initial set-up); Trip of the day ([SPEC-04](SPEC-04_todays-trip-at-a-glance.md)); Channels ([SPEC-01](SPEC-01_foundation.md), Initial set-up)
- **Provides:** Real state of a run, to [SPEC-03](SPEC-03_alerts-on-the-usual-trip.md), [SPEC-04](SPEC-04_todays-trip-at-a-glance.md), [SPEC-05](SPEC-05_ways-out-when-the-trip-breaks.md), [SPEC-06](SPEC-06_those-waiting-are-told.md), [SPEC-07](SPEC-07_the-connection-ahead.md), [SPEC-12](SPEC-12_compensation-from-the-trip.md), [SPEC-14](SPEC-14_stop-approaching.md); Record of past runs, to [SPEC-09](SPEC-09_times-that-can-be-kept.md)

## Architecture

- **Components:**
  - `<run-card>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused.
  - `<fact-line>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused.
  - `<source-gap>`: shows two figures for the same thing from two sources, each with its `<fact-line>`, and the gap between them in minutes; reads `runs.<id>.by_scenario.<key>.facts`; reacts to the scenario changing.
  - `<usual-delay>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused.
- **Datasets:**
  - `runs` (defined in the foundation): `service`, `operator`, `from`, `to`, `dep`, `arr`, `platform_dep`, `usual_platform`, `platform_arr`, `usual_delay`, `by_scenario.<key>.state`, `delay`, `exp_dep`, `exp_arr`, `platform`, `platform_may_change`, `position`, `reason`, `facts[]`.
  - `notifications` (defined in the foundation): `today.<scenario>[]`: the message sent when a run of the trip is cancelled.
- **Simulated events:**
  - A new fact about the run (a delay, a cancellation, a reason): the scenario selector moves to `late` or `cancelled`, and the run shows the facts of that scenario.
  - The message on the commuter's channel: the "Simulate a message" control shows `<message-preview>` with the text of `notifications.today`.

## When things go wrong

- **No source says anything:** "no news since <time>"; the planned time is never shown as the real one.
- **A source is late:** its figure shows its age, and is marked outdated past the limit.
- **A later fact contradicts an earlier one:** the earlier one is replaced and the commuter is told what changed.
- **Nothing set up yet:** without a usual trip or a trip of the day, the commuter can still look for any run.

## Out of scope

What to do about a delay: ways out (SPEC-05), alerts (SPEC-03), connections (SPEC-07).

## Acceptance criteria

- **Given** a run the operator shows 5 minutes late and other travellers report 12 **when** the commuter opens it **then** both figures are shown, each with its source and age, and the gap.
- **Given** a run whose delay grows from 5 to 25 minutes **when** no source states a cancellation **then** the run is not shown as cancelled.
- **Given** a source states a cancellation **when** the run is in the commuter's trip **then** the run shows as cancelled with that source, and a message is sent on the commuter's channel.
- **Given** the operator gives a reason **when** the delay is shown **then** the reason is shown with it.
- **Given** no fact for longer than the age limit **when** the commuter looks **then** they see "no news since <time>".

## Open questions

Each question has its own file in [01_Open_Questions/](01_Open_Questions/00_Open_questions_index.md), with its chain to the research.

- **[OQ-01](01_Open_Questions/OQ-01_sources-of-the-real-position.md)** Which sources tell the real position and the expected time of a vehicle (the operator, the position of travellers on board, what travellers report), and which one leads when they disagree? [not traced] Research: partly.
- **[OQ-02](01_Open_Questions/OQ-02_age-limit-of-a-fact.md)** After how long without news is a fact (a time, a state, a position) marked outdated, and a run marked `no news`? [not traced] Research: ⚠ not supported.
- **[OQ-06](01_Open_Questions/OQ-06_length-of-the-record-of-past-runs.md)** Over how many past runs, or how long a period, is the record kept to tell how late a run usually is? [not traced] Research: ⚠ not supported.

## Connections

- [US-F-01_real-state-vehicle-source.md](../02_Analysis/03_User_Stories/US-F-01_real-state-vehicle-source.md): a story this specification serves.
- [F-01_real-state-vehicle-source.md](../02_Analysis/02_Features/F-01_real-state-vehicle-source.md): the feature behind story F-01.
- [HMW-01_help-como-commuter-standing-platform.md](../03_Ideation/01_How_Might_We/HMW-01_help-como-commuter-standing-platform.md): the problem question written from a story it serves.
- [HMW-02_spare-como-commuter-platform-during.md](../03_Ideation/01_How_Might_We/HMW-02_spare-como-commuter-platform-during.md): the problem question written from a story it serves.
- [SPEC-00_overview.md](SPEC-00_overview.md): the overview that lists this specification.
- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation it stands on.
- [SPEC-04_todays-trip-at-a-glance.md](SPEC-04_todays-trip-at-a-glance.md): provides elements this specification depends on.
- [SPEC-03_alerts-on-the-usual-trip.md](SPEC-03_alerts-on-the-usual-trip.md): depends on elements this specification provides.
- [SPEC-05_ways-out-when-the-trip-breaks.md](SPEC-05_ways-out-when-the-trip-breaks.md): depends on elements this specification provides.
- [SPEC-06_those-waiting-are-told.md](SPEC-06_those-waiting-are-told.md): depends on elements this specification provides.
- [SPEC-07_the-connection-ahead.md](SPEC-07_the-connection-ahead.md): depends on elements this specification provides.
- [SPEC-09_times-that-can-be-kept.md](SPEC-09_times-that-can-be-kept.md): depends on elements this specification provides.
- [SPEC-12_compensation-from-the-trip.md](SPEC-12_compensation-from-the-trip.md): depends on elements this specification provides.
- [SPEC-14_stop-approaching.md](SPEC-14_stop-approaching.md): depends on elements this specification provides.
- [OQ-01_sources-of-the-real-position.md](01_Open_Questions/OQ-01_sources-of-the-real-position.md): an open question this specification raises.
- [OQ-02_age-limit-of-a-fact.md](01_Open_Questions/OQ-02_age-limit-of-a-fact.md): an open question this specification raises.
- [OQ-06_length-of-the-record-of-past-runs.md](01_Open_Questions/OQ-06_length-of-the-record-of-past-runs.md): an open question this specification raises.
