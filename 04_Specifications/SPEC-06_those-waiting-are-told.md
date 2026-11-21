---
source: Claude
date: 2026-11-21 19:34
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
| **Foundation** | The user (contact); Channels (message to a contact); Rules that hold everywhere (consent of contacts, never shared) |

Concepts and families are references only: the behaviour below comes from the stories.

## Description

Lets the commuter share a trip with a person who waits for them, so that person knows when the commuter really arrives, with any delay confirmed, without the commuter having to manage it.

## Operating logic

- **Starts when:** The commuter shares a trip with a contact, or a shared trip's expected arrival changes, or the trip breaks.
- **Needs to know:** The contacts and what each may receive (set here); the trip of the day (SPEC-04); the real state of its runs (SPEC-02); the channels (SPEC-01).
- **Rules:**
  1. Let the commuter add contacts and say, for each, which trips they share: one trip, or the usual trip on travel days.
  2. Ask the contact to accept messages; send nothing until they do.
  3. Send the contact the run and its expected arrival when the trip starts.
  4. Send the new arrival when it moves, marked confirmed or estimated, with its source.
  5. When the trip breaks, prepare a message with the new arrival or the way chosen, for the commuter to send in one step.
  6. Stop sharing when the trip is completed.
- **States:** Contact: `invited` → `accepted` or `refused`. Sharing: `on` from start to completion of the trip.
- **The user receives:** The contact: messages on the channel they accepted, saying on whose behalf they are sent. The commuter: what was sent, and to whom.
- **Depends on:** Trip of the day ([SPEC-04](SPEC-04_todays-trip-at-a-glance.md)); Real state of a run ([SPEC-02](SPEC-02_real-state-of-the-run.md)); Channels ([SPEC-01](SPEC-01_foundation.md), Initial set-up); A way chosen to continue ([SPEC-05](SPEC-05_ways-out-when-the-trip-breaks.md)); State of a connection ([SPEC-07](SPEC-07_the-connection-ahead.md))
- **Provides:** none

## Architecture

- **Pages** (from the information architecture of [SPEC-01](SPEC-01_foundation.md)): **Contacts** (PG-14): the whole page; **Today (start page)** (PG-01): a "Tell someone" link leading to the contacts; **Ways out** (PG-04): the message ready to send to a contact.
- **Components:**
  - `<contact-list>`: the people the commuter keeps informed, what each one shares, whether they accepted and on which channel; reads `contacts.contacts[]`; reacts to adding, inviting or removing a contact (shown, not kept).
  - `<contact-messages>`: the messages a contact receives, each with its status and source, as the contact sees them; reads `contacts.messages.<scenario>[]`; reacts to the scenario changing.
  - `<prepared-message>`: a message ready for the commuter to send in one step when the trip breaks; reads `contacts.prepared.<scenario>`; reacts to "Send".
  - `<message-preview>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused, for the message the contact receives.
- **Datasets:**
  - `contacts` (defined here): `contacts[{id, name, shares, state, channel}]`, `messages.<scenario>[{to, text, status, source}]`, `prepared.<scenario>`.
  - `runs` (defined in the foundation): expected arrival of the run the contact waits for.
  - `notifications` (defined in the foundation): `contacts.any[]`.
- **Simulated events:**
  - A contact accepting: a control moves the contact from `invited` to `accepted`.
  - The message the contact receives when the arrival moves: the lock screen shows `notifications.contacts`; the contact has no screen of their own.

## When things go wrong

- **The contact has not accepted:** nothing reaches them and the commuter is told.
- **No data about the run:** the contact is told there is no news, not the planned time.
- **The commuter does not send the prepared message:** nothing is sent.
- **No trip of the day:** sharing cannot start; the commuter is led to SPEC-04.

## Out of scope

Whether the connection holds (SPEC-07); the ways out (SPEC-05).

## Acceptance criteria

- **Given** the father is a contact for the return trip **when** the train leaves **then** he receives the train and its expected arrival, with its source.
- **Given** the expected arrival moves **when** the trip is under way **then** the contact receives the new arrival, marked confirmed or estimated.
- **Given** the connection is lost **when** the commuter opens the product **then** a message with the new arrival is ready to send in one step.
- **Given** a contact who has not accepted **when** the commuter shares a trip **then** nothing reaches the contact and the commuter is told.
- **Given** the trip is completed **when** the contact looks **then** they no longer see it.

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
