---
source: Claude
date: 2026-11-22 17:06
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, information, disruption, first-last-mile, late-info]
related: [US-F-09_arrival-shared-whoever-waits.md, US-F-06_whether-connection-still-holds.md, US-F-02_ways-still-open-trip.md, F-09_arrival-shared-whoever-waits.md, F-06_whether-connection-still-holds.md, F-02_ways-still-open-trip.md, HMW-12_make-sure-person-coming-fetch.md, HMW-09_help-como-commuter-8-23.md, HMW-03_help-teenager-waiting-late-evening.md, HMW-04_help-teenager-stop-late-evening.md, SPEC-00_overview.md, SPEC-01_foundation.md, SPEC-04_todays-trip-at-a-glance.md, SPEC-02_real-state-of-the-run.md, SPEC-05_ways-out-when-the-trip-breaks.md, SPEC-07_the-connection-ahead.md, OQ-05_more-than-one-usual-trip.md, OQ-14_minors-using-the-product-alone.md, OQ-15_when-the-contact-is-told-again.md, OQ-16_telling-the-contact-when-to-set-off.md]
---

# SPEC-06: Those Waiting Are Told

Use this file as a prompt: it describes one behaviour to build within the architecture of the foundation: a frontend-only prototype made of web components, with all data from mock datasets in `data/`.

## User stories served

One row per story this specification serves, copied as written.

| Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- |
| [F-09](../02_Analysis/03_User_Stories/US-F-09_arrival-shared-whoever-waits.md) | the Verona–Milan commuter | As the Verona–Milan commuter, on the train back to Verona with his father coming to fetch him at the station, I want to share the train time and the live arrival, with a confirmation of any delay, with the person driving or waiting, so that the person who comes to the station knows when he arrives. | All of it |
| [F-06](../02_Analysis/03_User_Stories/US-F-06_whether-connection-still-holds.md) | the Como commuter | As the Como commuter, on the 8:23 towards Lugano as the delay grows towards 12 minutes, I want to be told before reaching the change whether the connection still holds and, if not, the next one that does, so that he can warn the people he is meeting before he arrives. | Warning the people he is meeting; whether the connection holds is in SPEC-07 |
| [F-02](../02_Analysis/03_User_Stories/US-F-02_ways-still-open-trip.md) | a teenager (desk persona) | As a teenager (desk persona), waiting late in the evening at a stop for a connecting bus that does not come, I want to see the ways that still run and can be reached from where I am, valid on my ticket or not, with arrival time and cost, so that I know from what point it makes sense to call home and be fetched. | Knowing when to call home; the ways out are in SPEC-05 |

**Why these stories belong together:** All three are about the person who waits for the commuter: who drives to fetch them, who they are meeting, who would come to get them.

## Traceability

| | |
| --- | --- |
| **Features** | [F-09](../02_Analysis/02_Features/F-09_arrival-shared-whoever-waits.md), [F-06](../02_Analysis/02_Features/F-06_whether-connection-still-holds.md), [F-02](../02_Analysis/02_Features/F-02_ways-still-open-trip.md) |
| **Touchpoints** | [TP-004](../02_Analysis/01_Touchpoints/TP-004_fixing-departure-time-days.md), [TP-048](../02_Analysis/01_Touchpoints/TP-048_being-driven-station-relative.md), [TP-075](../02_Analysis/01_Touchpoints/TP-075_following-train-app-board.md), [TP-106](../02_Analysis/01_Touchpoints/TP-106_telling-people-waiting-colleagues.md), [TP-107](../02_Analysis/01_Touchpoints/TP-107_asking-relative-come-fetch.md), [TP-053](../02_Analysis/01_Touchpoints/TP-053_taking-local-bus-station.md), [TP-057](../02_Analysis/01_Touchpoints/TP-057_giving-up-public-transport.md), [TP-060](../02_Analysis/01_Touchpoints/TP-060_changing-train-intermediate-station.md), [TP-061](../02_Analysis/01_Touchpoints/TP-061_checking-phone-before-arriving.md), [TP-068](../02_Analysis/01_Touchpoints/TP-068_connection-cannot-kept-missed.md), [TP-026](../02_Analysis/01_Touchpoints/TP-026_keeping-ranked-fallback-none.md), [TP-084](../02_Analysis/01_Touchpoints/TP-084_last-service-night-gone.md), [TP-093](../02_Analysis/01_Touchpoints/TP-093_reacting-before-entering-station.md), [TP-094](../02_Analysis/01_Touchpoints/TP-094_going-back-home-take.md), [TP-095](../02_Analysis/01_Touchpoints/TP-095_giving-up-trip-staying.md), [TP-097](../02_Analysis/01_Touchpoints/TP-097_rerouting-another-line-service.md), [TP-098](../02_Analysis/01_Touchpoints/TP-098_taking-replacement-bus.md), [TP-099](../02_Analysis/01_Touchpoints/TP-099_looking-app-s-alternatives.md), [TP-100](../02_Analysis/01_Touchpoints/TP-100_paying-taxi-second-ticket.md), [TP-101](../02_Analysis/01_Touchpoints/TP-101_calling-taxi-hurry-does.md), [TP-102](../02_Analysis/01_Touchpoints/TP-102_ticket-valid-next-service.md) |
| **Problem questions** | [HMW-12](../03_Ideation/01_How_Might_We/HMW-12_make-sure-person-coming-fetch.md), [HMW-09](../03_Ideation/01_How_Might_We/HMW-09_help-como-commuter-8-23.md), [HMW-03](../03_Ideation/01_How_Might_We/HMW-03_help-teenager-waiting-late-evening.md), [HMW-04](../03_Ideation/01_How_Might_We/HMW-04_help-teenager-stop-late-evening.md) |
| **Concepts** | [S04](../03_Ideation/02_Ideas/S04_trip-update-sent-relatives.md), [C12-01](../03_Ideation/02_Ideas/C12-01_live-arrival-driver.md), [C12-02](../03_Ideation/02_Ideas/C12-02_word-home-without-him.md), [C12-03](../03_Ideation/02_Ideas/C12-03_confirmation-he.md), [C12-04](../03_Ideation/02_Ideas/C12-04_told-car.md), [C12-05](../03_Ideation/02_Ideas/C12-05_word-passed-one-gesture.md), [C12-06](../03_Ideation/02_Ideas/C12-06_set-off.md), [C12-07](../03_Ideation/02_Ideas/C12-07_confirmed-estimated.md), [C12-08](../03_Ideation/02_Ideas/C12-08_allowed-arrival.md), [C12-09](../03_Ideation/02_Ideas/C12-09_pick-up-waiting-point.md), [C12-10](../03_Ideation/02_Ideas/C12-10_fetching-rota.md), [C12-11](../03_Ideation/02_Ideas/C12-11_need-fetched.md), [C12-12](../03_Ideation/02_Ideas/C12-12_agreed-plan.md), [C09-01](../03_Ideation/02_Ideas/C09-01_holds.md), [C09-02](../03_Ideation/02_Ideas/C09-02_own-threshold.md), [C09-03](../03_Ideation/02_Ideas/C09-03_whose-word-connection.md), [C09-04](../03_Ideation/02_Ideas/C09-04_warned-him.md), [C09-05](../03_Ideation/02_Ideas/C09-05_message-ready-send.md), [C09-06](../03_Ideation/02_Ideas/C09-06_connection-held.md), [C09-07](../03_Ideation/02_Ideas/C09-07_cross-border-duty.md), [C09-08](../03_Ideation/02_Ideas/C09-08_conductor-knows.md), [C09-09](../03_Ideation/02_Ideas/C09-09_those-already-change.md), [C09-10](../03_Ideation/02_Ideas/C09-10_earlier-train-matters.md), [C09-11](../03_Ideation/02_Ideas/C09-11_margin-agreed-work.md), [C09-12](../03_Ideation/02_Ideas/C09-12_new-arrival-stated.md), [C03-01](../03_Ideation/02_Ideas/C03-01_call-home-point.md), [C03-02](../03_Ideation/02_Ideas/C03-02_last-way-home.md), [C03-03](../03_Ideation/02_Ideas/C03-03_confirmed-running.md), [C03-04](../03_Ideation/02_Ideas/C03-04_valid.md), [C03-05](../03_Ideation/02_Ideas/C03-05_others-stop.md), [C03-06](../03_Ideation/02_Ideas/C03-06_night-helpline.md), [C03-07](../03_Ideation/02_Ideas/C03-07_stop-speaks.md), [C03-08](../03_Ideation/02_Ideas/C03-08_parent-told.md), [C03-09](../03_Ideation/02_Ideas/C03-09_guaranteed-last-ride.md), [C03-10](../03_Ideation/02_Ideas/C03-10_lift-same-stop.md), [C03-11](../03_Ideation/02_Ideas/C03-11_family-plan.md), [C03-12](../03_Ideation/02_Ideas/C03-12_duty-declare.md), [C04-01](../03_Ideation/02_Ideas/C04-01_wait-call-word.md), [C04-02](../03_Ideation/02_Ideas/C04-02_seen-seen.md), [C04-03](../03_Ideation/02_Ideas/C04-03_last-seen-route.md), [C04-04](../03_Ideation/02_Ideas/C04-04_control-room-answers.md), [C04-05](../03_Ideation/02_Ideas/C04-05_home-sees-same.md), [C04-06](../03_Ideation/02_Ideas/C04-06_rule-agreed-home.md), [C04-07](../03_Ideation/02_Ideas/C04-07_wait-together.md), [C04-08](../03_Ideation/02_Ideas/C04-08_lift-cost-covered.md), [C04-09](../03_Ideation/02_Ideas/C04-09_missing-run-declared.md), [C04-10](../03_Ideation/02_Ideas/C04-10_replacement-request.md), [C04-11](../03_Ideation/02_Ideas/C04-11_honest-wait.md), [C04-12](../03_Ideation/02_Ideas/C04-12_last-bus.md) |
| **Families** | [FAM-03](../03_Ideation/02_Ideas/FAM-03_travellers-report.md) Travellers report, [FAM-04](../03_Ideation/02_Ideas/FAM-04_source-made-visible.md) The source made visible, [FAM-05](../03_Ideation/02_Ideas/FAM-05_honest-uncertainty.md) Honest uncertainty, [FAM-06](../03_Ideation/02_Ideas/FAM-06_times-allow-reality.md) Times that allow for reality, [FAM-08](../03_Ideation/02_Ideas/FAM-08_one-answer-data.md) One answer, not data, [FAM-10](../03_Ideation/02_Ideas/FAM-10_lies-ahead-known-beforehand.md) What lies ahead, known beforehand, [FAM-11](../03_Ideation/02_Ideas/FAM-11_place-shows.md) The place shows it, [FAM-12](../03_Ideation/02_Ideas/FAM-12_person-spot.md) A person on the spot, [FAM-13](../03_Ideation/02_Ideas/FAM-13_those-depending-them-told.md) Those depending on them are told, [FAM-15](../03_Ideation/02_Ideas/FAM-15_knows-traveller.md) It knows the traveller, [FAM-16](../03_Ideation/02_Ideas/FAM-16_settled-beforehand.md) Settled beforehand, [FAM-22](../03_Ideation/02_Ideas/FAM-22_money-covers-failure.md) Money covers the failure, [FAM-23](../03_Ideation/02_Ideas/FAM-23_connection-held.md) The connection held, [FAM-24](../03_Ideation/02_Ideas/FAM-24_more-different-service.md) More or different service, [FAM-25](../03_Ideation/02_Ideas/FAM-25_rules-rights.md) Rules and rights, [FAM-26](../03_Ideation/02_Ideas/FAM-26_travellers-carry-together.md) Travellers carry it together, [FAM-27](../03_Ideation/02_Ideas/FAM-27_change-trip-habit.md) Change the trip or the habit |
| **Stages covered** | planning, first mile, main leg, transfer, last mile, disruption |
| **Marks** | FAM-03 2 · 2 · 3; FAM-04 2 · 1 · 3; FAM-05 2 · 1 · 3; FAM-06 2 · 1 · 3; FAM-08 3 · 1 · 3; FAM-10 3 · 1 · 3; FAM-11 2 · 1 · 3; FAM-12 2 · 1 · 3; FAM-13 3 · 1 · 3; FAM-15 2 · 3 · 2; FAM-16 2 · 3 · 2; FAM-22 1 · 1 · 1; FAM-23 3 · 1 · 3; FAM-24 2 · 1 · 1; FAM-25 2 · 1 · 1; FAM-26 1 · 2 · 3; FAM-27 1 · 1 · 0 (valuable · feasible · relevant, by family, from [04_Ideas_prioritization.md](../03_Ideation/02_Ideas/04_Ideas_prioritization.md)) |
| **Foundation** | The user (whoever waits); Rules that hold everywhere (never shared beyond the trip) |

Concepts and families are references only: the behaviour below comes from the stories.

## Description

Lets the commuter share a trip with whoever waits for them, from the phone's own share sheet (WhatsApp, Messages, Mail and the like), so that person knows when the commuter really arrives. The commuter chooses the app and the person and writes the message; the product only gives the link to the trip as it goes. No contacts are entered in the product (Marco, 2026-11-22).

## Operating logic

- **Starts when:** The commuter taps "Share updates" on Today or on a leg.
- **Needs to know:** The trip of the day (SPEC-04); the real state of its runs (SPEC-02); the way chosen when the trip broke (SPEC-05).
- **Rules:**
  1. "Share updates", with the share icon, opens the share sheet of the phone with the title of the trip and a link to it; nothing else.
  2. The message is the commuter's own: the product writes none and keeps no list of people.
  3. Whoever opens the link sees the run and the expected arrival at the door, marked confirmed or estimated, with its source; after a way is chosen, that way and its arrival.
  4. The link shows the trip only until it is completed; "Share updates" is not offered after the trip, on a day with no travel or with no trip set up.
- **States:** Sharing: the link shows the trip from when it is shared until the trip is completed.
- **The user receives:** The commuter: the share sheet of the phone. Whoever waits: the message the commuter wrote, with the link.
- **Depends on:** Trip of the day ([SPEC-04](SPEC-04_todays-trip-at-a-glance.md)); Real state of a run ([SPEC-02](SPEC-02_real-state-of-the-run.md)); A way chosen to continue ([SPEC-05](SPEC-05_ways-out-when-the-trip-breaks.md)); State of a connection ([SPEC-07](SPEC-07_the-connection-ahead.md))
- **Provides:** none

## Architecture

- **Pages** (from the information architecture of [SPEC-01](SPEC-01_foundation.md)): **Today (start page)** (PG-01): "Share updates" in the box of the expected arrival at the door, after the last leg; **Run** (PG-02): "Share updates" on every leg, including the leg that broke, under the ways out ([SPEC-05](SPEC-05_ways-out-when-the-trip-breaks.md)). No page of its own: PG-14 Contacts was dropped on 2026-11-22.
- **Components:**
  - `<share-updates>`: a button with the share icon that hands the title of the trip and its link to the share sheet of the phone (`navigator.share`); where the browser has none, the prototype draws a sheet of its own with the apps and "Copy link", and nothing is sent; reads `share`, the trip (attribute `trip`), `clock.iso`; reacts to a tap.
- **Datasets:**
  - `share` (defined here): `url` (with `{trip}` and `{date}`), `title` (with `{from}` and `{to}`), `apps[]` (the apps of the prototype's own sheet).
  - `config` (defined in the foundation): `at` and `day`, which decide whether "Share updates" is offered.
- **Simulated events:** the share sheet, where the browser has none: choosing an app says that it opened, and nothing is sent. The page the link opens for whoever waits is not built: they have no screen in the prototype.

## When things go wrong

- **No data about the run:** whoever opens the link is told there is no news, not the planned time.
- **The commuter shares nothing:** nothing is sent.
- **No trip of the day:** nothing to share; the commuter is invited to set up the first trip.
- **A day with no travel, or the trip completed:** "Share updates" is not offered.

## Out of scope

Whether the connection holds (SPEC-07); the ways out (SPEC-05); the page whoever waits sees when they open the link.

## Acceptance criteria

- **Given** the trip of the day under way **when** the commuter taps "Share updates" on Today or on a leg **then** the share sheet opens with the title of the trip and its link, and no message written for them.
- **Given** the share sheet open **when** the commuter chooses an app **then** they choose the person and write the message there.
- **Given** the 9707 cancelled **when** the commuter opens the leg that broke **then** "Share updates" is under the ways out, and no message is prepared.
- **Given** the trip is completed, or a day with no travel **when** the commuter opens Today **then** "Share updates" is not offered.

## Open questions

Each question has its own file in [01_Open_Questions/](01_Open_Questions/00_Open_questions_index.md), with its chain to the research.

- **[OQ-05](01_Open_Questions/OQ-05_more-than-one-usual-trip.md)** Does the commuter keep more than one usual trip, for example the morning trip and the evening return, or two trains used most? [not traced] Research: supported.
- **[OQ-14](01_Open_Questions/OQ-14_minors-using-the-product-alone.md)** Do minors use the product alone, and if so what changes (consent, contacts, what is shared with a parent)? [not traced] Research: ⚠ not supported.
- **[OQ-15](01_Open_Questions/OQ-15_when-the-contact-is-told-again.md)** By how much must the expected arrival move before the person waiting is told again? [not traced] Research: ⚠ not supported.
- **[OQ-16](01_Open_Questions/OQ-16_telling-the-contact-when-to-set-off.md)** Is the person who comes to the station also told when to leave, not only when the commuter arrives? [not traced] Research: ⚠ not supported.

## Connections

- [US-F-09_arrival-shared-whoever-waits.md](../02_Analysis/03_User_Stories/US-F-09_arrival-shared-whoever-waits.md): a story this specification serves.
- [US-F-06_whether-connection-still-holds.md](../02_Analysis/03_User_Stories/US-F-06_whether-connection-still-holds.md): a story this specification serves.
- [US-F-02_ways-still-open-trip.md](../02_Analysis/03_User_Stories/US-F-02_ways-still-open-trip.md): a story this specification serves.
- [F-09_arrival-shared-whoever-waits.md](../02_Analysis/02_Features/F-09_arrival-shared-whoever-waits.md): the feature behind story F-09.
- [F-06_whether-connection-still-holds.md](../02_Analysis/02_Features/F-06_whether-connection-still-holds.md): the feature behind story F-06.
- [F-02_ways-still-open-trip.md](../02_Analysis/02_Features/F-02_ways-still-open-trip.md): the feature behind story F-02.
- [HMW-12_make-sure-person-coming-fetch.md](../03_Ideation/01_How_Might_We/HMW-12_make-sure-person-coming-fetch.md): the problem question written from a story it serves.
- [HMW-09_help-como-commuter-8-23.md](../03_Ideation/01_How_Might_We/HMW-09_help-como-commuter-8-23.md): the problem question written from a story it serves.
- [HMW-03_help-teenager-waiting-late-evening.md](../03_Ideation/01_How_Might_We/HMW-03_help-teenager-waiting-late-evening.md): the problem question written from a story it serves.
- [HMW-04_help-teenager-stop-late-evening.md](../03_Ideation/01_How_Might_We/HMW-04_help-teenager-stop-late-evening.md): the problem question written from a story it serves.
- [SPEC-00_overview.md](SPEC-00_overview.md): the overview that lists this specification.
- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation it stands on.
- [SPEC-04_todays-trip-at-a-glance.md](SPEC-04_todays-trip-at-a-glance.md): provides elements this specification depends on.
- [SPEC-02_real-state-of-the-run.md](SPEC-02_real-state-of-the-run.md): provides elements this specification depends on.
- [SPEC-05_ways-out-when-the-trip-breaks.md](SPEC-05_ways-out-when-the-trip-breaks.md): provides elements this specification depends on.
- [SPEC-07_the-connection-ahead.md](SPEC-07_the-connection-ahead.md): provides elements this specification depends on.
- [OQ-05_more-than-one-usual-trip.md](01_Open_Questions/OQ-05_more-than-one-usual-trip.md): an open question this specification raises.
- [OQ-14_minors-using-the-product-alone.md](01_Open_Questions/OQ-14_minors-using-the-product-alone.md): an open question this specification raises.
- [OQ-15_when-the-contact-is-told-again.md](01_Open_Questions/OQ-15_when-the-contact-is-told-again.md): an open question this specification raises.
- [OQ-16_telling-the-contact-when-to-set-off.md](01_Open_Questions/OQ-16_telling-the-contact-when-to-set-off.md): an open question this specification raises.
