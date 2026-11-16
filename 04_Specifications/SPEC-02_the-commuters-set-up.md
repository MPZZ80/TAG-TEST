---
source: Claude
date: 2026-11-16 23:04
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, planning, tools, usual-trip, workarounds]
related: [US-F-07_trips-planned-commuter-s.md, US-F-11_usual-trip-glance.md, US-F-03_early-warning-usual-trip.md, F-07_trips-planned-commuter-s.md, F-11_usual-trip-glance.md, F-03_early-warning-usual-trip.md, HMW-10_help-german-rail-regular-planner.md, HMW-14_let-dutch-rail-commuter-way.md, HMW-05_let-single-line-commuter-during.md, SPEC-00_overview.md, SPEC-01_foundation.md, SPEC-09_every-way-door-to-door.md, SPEC-03_real-state-of-the-run.md, SPEC-04_alerts-on-the-usual-trip.md, SPEC-05_todays-trip-at-a-glance.md, SPEC-06_ways-out-when-the-trip-breaks.md, SPEC-07_those-waiting-are-told.md, SPEC-08_the-connection-ahead.md, SPEC-10_times-that-can-be-kept.md, SPEC-12_the-fare-that-fits-the-days.md, SPEC-14_the-station-ahead.md, SPEC-15_stop-approaching.md, SPEC-17_sessions-still-running.md, OQ-04_suggesting-the-usual-trip.md, OQ-05_more-than-one-usual-trip.md]
---

# SPEC-02: The Commuter's Set-Up

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

One row per story this specification serves, copied as written.

| Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- |
| [F-07](../02_Analysis/03_User_Stories/US-F-07_trips-planned-commuter-s.md) | a German rail regular (desk persona) | As a German rail regular (desk persona), logging every trip and his connections, when the planner offers a change shorter than his own rule, I want the trip planned with my own minimum change time, margin, number of changes and own leg, and to see how tight each connection is, so that he relies only on connections he counts as real and not on "connections on paper". | Entering the own rules (minimum change time, also per station, margin, number of changes, own leg); planning with them and showing tightness is in SPEC-10 |
| [F-11](../02_Analysis/03_User_Stories/US-F-11_usual-trip-glance.md) | a Dutch rail commuter (desk persona) | As a Dutch rail commuter (desk persona), on the way out of the door in the morning, I want the app to open on my usual trip with its state and its platforms, the change included, without searching, so that I know which platform to go to with no extra step. | Entering the usual trip that the app opens on; the view itself is in SPEC-05 |
| [F-03](../02_Analysis/03_User_Stories/US-F-03_early-warning-usual-trip.md) | the single-line commuter | As the single-line commuter, during the seven minutes he drives to the station on one of his three office days, I want to be told, only when something changes, of a delay, cancellation, strike or works on my usual train, in time to change the decision to leave, so that he can wait in the warm car if the train is late. | Entering the usual trip and the days of travel the alerts are about; the alerts are in SPEC-04 |

**Why these stories belong together:** All three stories rest on something the commuter tells the product once: the usual trip, the days, their own rules. This specification is where it is entered, changed and deleted; the others only use it.

## Traceability

| | |
| --- | --- |
| **Features** | [F-07](../02_Analysis/02_Features/F-07_trips-planned-commuter-s.md), [F-11](../02_Analysis/02_Features/F-11_usual-trip-glance.md), [F-03](../02_Analysis/02_Features/F-03_early-warning-usual-trip.md) |
| **Touchpoints** | [TP-018](../02_Analysis/01_Touchpoints/TP-018_choosing-earlier-service-needed.md), [TP-023](../02_Analysis/01_Touchpoints/TP-023_planner-proposes-change-too.md), [TP-024](../02_Analysis/01_Touchpoints/TP-024_applying-personal-minimum-time.md), [TP-025](../02_Analysis/01_Touchpoints/TP-025_keeping-one-leg-under.md), [TP-073](../02_Analysis/01_Touchpoints/TP-073_using-time-board-work.md), [TP-012](../02_Analysis/01_Touchpoints/TP-012_deciding-means-before-opening.md), [TP-027](../02_Analysis/01_Touchpoints/TP-027_opening-saved-usual-trip.md), [TP-062](../02_Analysis/01_Touchpoints/TP-062_finding-next-platform-change.md), [TP-031](../02_Analysis/01_Touchpoints/TP-031_checking-train-only-days.md), [TP-032](../02_Analysis/01_Touchpoints/TP-032_receiving-alert-usual-train.md), [TP-033](../02_Analysis/01_Touchpoints/TP-033_alerts-set-usual-train.md), [TP-034](../02_Analysis/01_Touchpoints/TP-034_turning-off-ignoring-operator.md), [TP-035](../02_Analysis/01_Touchpoints/TP-035_using-alerts-usual-trip.md), [TP-037](../02_Analysis/01_Touchpoints/TP-037_opening-operator-s-app.md), [TP-039](../02_Analysis/01_Touchpoints/TP-039_news-line-fault-relative.md), [TP-040](../02_Analysis/01_Touchpoints/TP-040_learning-strike-works-days.md), [TP-087](../02_Analysis/01_Touchpoints/TP-087_finding-about-cancellation-station.md), [TP-089](../02_Analysis/01_Touchpoints/TP-089_delay-cancellation-information-comes.md) |
| **Problem questions** | [HMW-10](../03_Ideation/01_How_Might_We/HMW-10_help-german-rail-regular-planner.md), [HMW-14](../03_Ideation/01_How_Might_We/HMW-14_let-dutch-rail-commuter-way.md), [HMW-05](../03_Ideation/01_How_Might_We/HMW-05_let-single-line-commuter-during.md) |
| **Concepts** | [C10-01](../03_Ideation/02_Ideas/C10-01_own-rule-remembered.md), [C10-02](../03_Ideation/02_Ideas/C10-02_rule-station.md), [C10-03](../03_Ideation/02_Ideas/C10-03_tightness-stated.md), [C10-04](../03_Ideation/02_Ideas/C10-04_track-record.md), [C10-05](../03_Ideation/02_Ideas/C10-05_regulars-rate.md), [C10-06](../03_Ideation/02_Ideas/C10-06_rules-shared.md), [C10-07](../03_Ideation/02_Ideas/C10-07_paper-connection-label.md), [C10-08](../03_Ideation/02_Ideas/C10-08_one-margin.md), [C10-09](../03_Ideation/02_Ideas/C10-09_honest-minimum-times.md), [C10-10](../03_Ideation/02_Ideas/C10-10_wider-gaps-timetable.md), [C10-11](../03_Ideation/02_Ideas/C10-11_rights-short-connections.md), [C10-12](../03_Ideation/02_Ideas/C10-12_missed-connection-cover.md), [C14-01](../03_Ideation/02_Ideas/C14-01_platform-door.md), [C14-02](../03_Ideation/02_Ideas/C14-02_wrist.md), [C14-03](../03_Ideation/02_Ideas/C14-03_hall-display.md), [C14-04](../03_Ideation/02_Ideas/C14-04_usual-trip-remembered.md), [C14-05](../03_Ideation/02_Ideas/C14-05_only-one-fact.md), [C14-06](../03_Ideation/02_Ideas/C14-06_only-different.md), [C14-07](../03_Ideation/02_Ideas/C14-07_fixed-platform.md), [C14-08](../03_Ideation/02_Ideas/C14-08_readable-station.md), [C14-09](../03_Ideation/02_Ideas/C14-09_greeter-entrance.md), [C14-10](../03_Ideation/02_Ideas/C14-10_commuter-circle.md), [C14-11](../03_Ideation/02_Ideas/C14-11_confirmed-those-there.md), [C14-12](../03_Ideation/02_Ideas/C14-12_final.md), [S01](../03_Ideation/02_Ideas/S01_delays-sent-chosen-channel.md), [C05-01](../03_Ideation/02_Ideas/C05-01_told-wheel.md), [C05-02](../03_Ideation/02_Ideas/C05-02_line-state-waking.md), [C05-03](../03_Ideation/02_Ideas/C05-03_quiet-unless-changed.md), [C05-04](../03_Ideation/02_Ideas/C05-04_go-wait-word.md), [C05-05](../03_Ideation/02_Ideas/C05-05_own-timings.md), [C05-06](../03_Ideation/02_Ideas/C05-06_usual-train-named-once.md), [C05-07](../03_Ideation/02_Ideas/C05-07_works-strikes-good-time.md), [C05-08](../03_Ideation/02_Ideas/C05-08_others-line.md), [C05-09](../03_Ideation/02_Ideas/C05-09_first-platform.md), [C05-10](../03_Ideation/02_Ideas/C05-10_car-park-sign.md), [C05-11](../03_Ideation/02_Ideas/C05-11_duty-warn-before-departure.md), [C05-12](../03_Ideation/02_Ideas/C05-12_home-office-bad-morning.md) |
| **Families** | [FAM-01](../03_Ideation/02_Ideas/FAM-01_told-where-they.md) Told where they are, [FAM-03](../03_Ideation/02_Ideas/FAM-03_travellers-report.md) Travellers report, [FAM-04](../03_Ideation/02_Ideas/FAM-04_source-made-visible.md) The source made visible, [FAM-05](../03_Ideation/02_Ideas/FAM-05_honest-uncertainty.md) Honest uncertainty, [FAM-06](../03_Ideation/02_Ideas/FAM-06_times-allow-reality.md) Times that allow for reality, [FAM-07](../03_Ideation/02_Ideas/FAM-07_told-sooner.md) Told sooner, [FAM-08](../03_Ideation/02_Ideas/FAM-08_one-answer-data.md) One answer, not data, [FAM-09](../03_Ideation/02_Ideas/FAM-09_less-way.md) Less in the way, [FAM-10](../03_Ideation/02_Ideas/FAM-10_lies-ahead-known-beforehand.md) What lies ahead, known beforehand, [FAM-11](../03_Ideation/02_Ideas/FAM-11_place-shows.md) The place shows it, [FAM-12](../03_Ideation/02_Ideas/FAM-12_person-spot.md) A person on the spot, [FAM-15](../03_Ideation/02_Ideas/FAM-15_knows-traveller.md) It knows the traveller, [FAM-22](../03_Ideation/02_Ideas/FAM-22_money-covers-failure.md) Money covers the failure, [FAM-24](../03_Ideation/02_Ideas/FAM-24_more-different-service.md) More or different service, [FAM-25](../03_Ideation/02_Ideas/FAM-25_rules-rights.md) Rules and rights, [FAM-27](../03_Ideation/02_Ideas/FAM-27_change-trip-habit.md) Change the trip or the habit |
| **Stages covered** | planning, before departure, main leg, transfer, disruption |
| **Marks** | FAM-01 3 · 1 · 3; FAM-03 2 · 2 · 3; FAM-04 2 · 1 · 3; FAM-05 2 · 1 · 3; FAM-06 2 · 1 · 3; FAM-07 2 · 1 · 2; FAM-08 3 · 1 · 3; FAM-09 2 · 1 · 3; FAM-10 3 · 1 · 3; FAM-11 2 · 1 · 3; FAM-12 2 · 1 · 3; FAM-15 2 · 3 · 2; FAM-22 1 · 1 · 1; FAM-24 2 · 1 · 1; FAM-25 2 · 1 · 1; FAM-27 1 · 1 · 0 (valuable · feasible · relevant, by family, from [04_Ideas_prioritization.md](../03_Ideation/02_Ideas/04_Ideas_prioritization.md)) |
| **Foundation** | Principles 5; The user; The things it deals with (door, usual trip); Channels; Rules that hold everywhere (consent to use position, nothing set up yet) |

Concepts and families are references only: the behaviour below comes from the stories.

## Description

Lets the commuter tell the product, once, what every other behaviour relies on: their doors, their usual trip and its days, their own rules for changes, their needs on the way, the channels on which they want news, and whether their position may be used. It is used at the first opening and whenever something changes in the commuter's routine.

## Operating logic

- **Starts when:** The commuter opens the product for the first time, or opens the set-up to change something; or another specification finds an element missing and leads here.
- **Needs to know:** What the commuter enters; the places, stations and runs to choose from, from the schedule.
- **Rules:**
  1. Ask for the doors: at least home and one destination, each with a name.
  2. Ask for the usual trip between two doors: the legs and the runs usually taken, chosen from the schedule; or let the commuter pick one of the ways found by SPEC-09 and save it as usual.
  3. Ask for the days of travel of the usual trip; they can differ week by week (F-12: office days that fell to one a week).
  4. Ask for the own rules: minimum change time (one default, and optionally one per station), margin, maximum number of changes, and an own leg (for example a bicycle or car leg the commuter always makes).
  5. Ask for needs on the way that change how a trip can be made, such as step-free access (F-20).
  6. Ask for the channels on which news may reach the commuter when the product is closed.
  7. Ask whether the commuter's position may be used; the default is no.
  8. Every element can be skipped. A skipped element is missing, not assumed: the behaviours that need it say so (Rules that hold everywhere).
  9. Every element can be changed or deleted at any time; a change applies from the next trip it touches.
- **States:** Each element is `missing` or `set`. The set-up as a whole has no state of its own.
- **The user receives:** Inside the product: what is set and what is missing, and which behaviours each missing element affects.
- **Depends on:** Ways between two places ([SPEC-09](SPEC-09_every-way-door-to-door.md))
- **Provides:** Usual trip, to [SPEC-03](SPEC-03_real-state-of-the-run.md), [SPEC-04](SPEC-04_alerts-on-the-usual-trip.md), [SPEC-05](SPEC-05_todays-trip-at-a-glance.md), [SPEC-12](SPEC-12_the-fare-that-fits-the-days.md), [SPEC-14](SPEC-14_the-station-ahead.md); Channels, to [SPEC-03](SPEC-03_real-state-of-the-run.md), [SPEC-04](SPEC-04_alerts-on-the-usual-trip.md), [SPEC-06](SPEC-06_ways-out-when-the-trip-breaks.md), [SPEC-07](SPEC-07_those-waiting-are-told.md), [SPEC-08](SPEC-08_the-connection-ahead.md), [SPEC-15](SPEC-15_stop-approaching.md), [SPEC-17](SPEC-17_sessions-still-running.md); Days of travel, to [SPEC-04](SPEC-04_alerts-on-the-usual-trip.md), [SPEC-05](SPEC-05_todays-trip-at-a-glance.md), [SPEC-12](SPEC-12_the-fare-that-fits-the-days.md); Doors, to [SPEC-05](SPEC-05_todays-trip-at-a-glance.md), [SPEC-09](SPEC-09_every-way-door-to-door.md); Consent to use position, to [SPEC-06](SPEC-06_ways-out-when-the-trip-breaks.md), [SPEC-15](SPEC-15_stop-approaching.md), [SPEC-17](SPEC-17_sessions-still-running.md); Own rules, to [SPEC-06](SPEC-06_ways-out-when-the-trip-breaks.md), [SPEC-08](SPEC-08_the-connection-ahead.md), [SPEC-09](SPEC-09_every-way-door-to-door.md), [SPEC-10](SPEC-10_times-that-can-be-kept.md); Needs on the way, to [SPEC-06](SPEC-06_ways-out-when-the-trip-breaks.md), [SPEC-10](SPEC-10_times-that-can-be-kept.md), [SPEC-14](SPEC-14_the-station-ahead.md)

## When things go wrong

- **Nothing set up yet:** the product still works for one-off searches (SPEC-09); every behaviour that needs the set-up says what is missing and leads here.
- **A run of the usual trip no longer exists** in the schedule: the commuter is told and asked to choose another; the usual trip is kept until then, marked.
- **The commuter leaves the set-up halfway:** what was entered is kept; the rest stays missing.

## Out of scope

Planning with the own rules (SPEC-10); the alerts and their moments (SPEC-04); contacts (SPEC-07); tickets (SPEC-11).

## Acceptance criteria

- **Given** a commuter who saved home, office and a usual trip **when** they open SPEC-05 **then** the usual trip is shown without searching.
- **Given** a commuter who set a minimum change time of 8 minutes at one station **when** a trip changes at that station **then** SPEC-10 uses 8 minutes there and the default elsewhere.
- **Given** a commuter who skipped the channels **when** a behaviour needs to send a message **then** nothing is sent and the commuter is told, inside the product, that no channel is set.
- **Given** a commuter who deletes the usual trip **when** they open the product **then** no behaviour uses the deleted trip.
- **Given** a commuter who never answered about position **when** any behaviour runs **then** their position is not used.

## Open questions

Each question has its own file in [01_Open_Questions/](01_Open_Questions/00_Open_questions_index.md), with its chain to the research.

- **[OQ-04](01_Open_Questions/OQ-04_suggesting-the-usual-trip.md)** May the product suggest a usual trip from trips the commuter repeats, for them to confirm, or does the commuter always enter it? [not traced] Research: ⚠ not supported.
- **[OQ-05](01_Open_Questions/OQ-05_more-than-one-usual-trip.md)** Does the commuter keep more than one usual trip, for example the morning trip and the evening return, or two trains used most? [not traced] Research: supported.

## Connections

- [US-F-07_trips-planned-commuter-s.md](../02_Analysis/03_User_Stories/US-F-07_trips-planned-commuter-s.md): a story this specification serves.
- [US-F-11_usual-trip-glance.md](../02_Analysis/03_User_Stories/US-F-11_usual-trip-glance.md): a story this specification serves.
- [US-F-03_early-warning-usual-trip.md](../02_Analysis/03_User_Stories/US-F-03_early-warning-usual-trip.md): a story this specification serves.
- [F-07_trips-planned-commuter-s.md](../02_Analysis/02_Features/F-07_trips-planned-commuter-s.md): the feature behind story F-07.
- [F-11_usual-trip-glance.md](../02_Analysis/02_Features/F-11_usual-trip-glance.md): the feature behind story F-11.
- [F-03_early-warning-usual-trip.md](../02_Analysis/02_Features/F-03_early-warning-usual-trip.md): the feature behind story F-03.
- [HMW-10_help-german-rail-regular-planner.md](../03_Ideation/01_How_Might_We/HMW-10_help-german-rail-regular-planner.md): the problem question written from a story it serves.
- [HMW-14_let-dutch-rail-commuter-way.md](../03_Ideation/01_How_Might_We/HMW-14_let-dutch-rail-commuter-way.md): the problem question written from a story it serves.
- [HMW-05_let-single-line-commuter-during.md](../03_Ideation/01_How_Might_We/HMW-05_let-single-line-commuter-during.md): the problem question written from a story it serves.
- [SPEC-00_overview.md](SPEC-00_overview.md): the overview that lists this specification.
- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation it stands on.
- [SPEC-09_every-way-door-to-door.md](SPEC-09_every-way-door-to-door.md): provides elements this specification depends on.
- [SPEC-03_real-state-of-the-run.md](SPEC-03_real-state-of-the-run.md): depends on elements this specification provides.
- [SPEC-04_alerts-on-the-usual-trip.md](SPEC-04_alerts-on-the-usual-trip.md): depends on elements this specification provides.
- [SPEC-05_todays-trip-at-a-glance.md](SPEC-05_todays-trip-at-a-glance.md): depends on elements this specification provides.
- [SPEC-06_ways-out-when-the-trip-breaks.md](SPEC-06_ways-out-when-the-trip-breaks.md): depends on elements this specification provides.
- [SPEC-07_those-waiting-are-told.md](SPEC-07_those-waiting-are-told.md): depends on elements this specification provides.
- [SPEC-08_the-connection-ahead.md](SPEC-08_the-connection-ahead.md): depends on elements this specification provides.
- [SPEC-10_times-that-can-be-kept.md](SPEC-10_times-that-can-be-kept.md): depends on elements this specification provides.
- [SPEC-12_the-fare-that-fits-the-days.md](SPEC-12_the-fare-that-fits-the-days.md): depends on elements this specification provides.
- [SPEC-14_the-station-ahead.md](SPEC-14_the-station-ahead.md): depends on elements this specification provides.
- [SPEC-15_stop-approaching.md](SPEC-15_stop-approaching.md): depends on elements this specification provides.
- [SPEC-17_sessions-still-running.md](SPEC-17_sessions-still-running.md): depends on elements this specification provides.
- [OQ-04_suggesting-the-usual-trip.md](01_Open_Questions/OQ-04_suggesting-the-usual-trip.md): an open question this specification raises.
- [OQ-05_more-than-one-usual-trip.md](01_Open_Questions/OQ-05_more-than-one-usual-trip.md): an open question this specification raises.
