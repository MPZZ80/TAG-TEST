---
source: Claude
date: 2026-11-21 19:38
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, disruption, mode-choice, no-alternative, crowding]
related: [US-F-02_ways-still-open-trip.md, US-F-19_how-crowded-next-services.md, F-02_ways-still-open-trip.md, F-19_how-crowded-next-services.md, HMW-03_help-teenager-waiting-late-evening.md, HMW-04_help-teenager-stop-late-evening.md, HMW-22_help-outskirts-hybrid-worker-station.md, SPEC-00_overview.md, SPEC-01_foundation.md, SPEC-04_todays-trip-at-a-glance.md, SPEC-02_real-state-of-the-run.md, SPEC-08_every-way-door-to-door.md, SPEC-10_tickets-that-work-when-needed.md, SPEC-07_the-connection-ahead.md, SPEC-06_those-waiting-are-told.md, OQ-11_whether-every-break-is-sent.md, OQ-12_cost-of-each-way-out.md, OQ-13_when-a-vehicle-not-seen-is-not-coming.md, OQ-14_minors-using-the-product-alone.md, OQ-19_a-lift-as-a-way.md]
---

# SPEC-05: Ways Out When the Trip Breaks

Use this file as a prompt: it describes one behaviour to build within the architecture of the foundation: a frontend-only prototype made of web components, with all data from mock datasets in `data/`.

## User stories served

One row per story this specification serves, copied as written.

| Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- |
| [F-02](../02_Analysis/03_User_Stories/US-F-02_ways-still-open-trip.md) | a teenager (desk persona) | As a teenager (desk persona), waiting late in the evening at a stop for a connecting bus that does not come, I want to see the ways that still run and can be reached from where I am, valid on my ticket or not, with arrival time and cost, so that I know from what point it makes sense to call home and be fetched. | The ways out, with validity, arrival and cost; telling home is in SPEC-06 |
| [F-19](../02_Analysis/03_User_Stories/US-F-19_how-crowded-next-services.md) | the outskirts hybrid worker | As the outskirts hybrid worker, at her station when her train is cancelled and the only other train is the packed one to Cadorna, I want to know how full the next services are expected to be, so that she can choose between waiting and a train where "you never get a seat". | All of it |

**Why these stories belong together:** Both stories are the same moment: the trip has broken and the commuter chooses among the ways left.

## Traceability

| | |
| --- | --- |
| **Features** | [F-02](../02_Analysis/02_Features/F-02_ways-still-open-trip.md), [F-19](../02_Analysis/02_Features/F-19_how-crowded-next-services.md) |
| **Touchpoints** | [TP-026](../02_Analysis/01_Touchpoints/TP-026_keeping-ranked-fallback-none.md), [TP-084](../02_Analysis/01_Touchpoints/TP-084_last-service-night-gone.md), [TP-093](../02_Analysis/01_Touchpoints/TP-093_reacting-before-entering-station.md), [TP-094](../02_Analysis/01_Touchpoints/TP-094_going-back-home-take.md), [TP-095](../02_Analysis/01_Touchpoints/TP-095_giving-up-trip-staying.md), [TP-097](../02_Analysis/01_Touchpoints/TP-097_rerouting-another-line-service.md), [TP-098](../02_Analysis/01_Touchpoints/TP-098_taking-replacement-bus.md), [TP-099](../02_Analysis/01_Touchpoints/TP-099_looking-app-s-alternatives.md), [TP-100](../02_Analysis/01_Touchpoints/TP-100_paying-taxi-second-ticket.md), [TP-101](../02_Analysis/01_Touchpoints/TP-101_calling-taxi-hurry-does.md), [TP-102](../02_Analysis/01_Touchpoints/TP-102_ticket-valid-next-service.md), [TP-107](../02_Analysis/01_Touchpoints/TP-107_asking-relative-come-fetch.md), [TP-072](../02_Analysis/01_Touchpoints/TP-072_boarding-crowded-train-letting.md) |
| **Problem questions** | [HMW-03](../03_Ideation/01_How_Might_We/HMW-03_help-teenager-waiting-late-evening.md), [HMW-04](../03_Ideation/01_How_Might_We/HMW-04_help-teenager-stop-late-evening.md), [HMW-22](../03_Ideation/01_How_Might_We/HMW-22_help-outskirts-hybrid-worker-station.md) |
| **Concepts** | [C03-01](../03_Ideation/02_Ideas/C03-01_call-home-point.md), [C03-02](../03_Ideation/02_Ideas/C03-02_last-way-home.md), [C03-03](../03_Ideation/02_Ideas/C03-03_confirmed-running.md), [C03-04](../03_Ideation/02_Ideas/C03-04_valid.md), [C03-05](../03_Ideation/02_Ideas/C03-05_others-stop.md), [C03-06](../03_Ideation/02_Ideas/C03-06_night-helpline.md), [C03-07](../03_Ideation/02_Ideas/C03-07_stop-speaks.md), [C03-08](../03_Ideation/02_Ideas/C03-08_parent-told.md), [C03-09](../03_Ideation/02_Ideas/C03-09_guaranteed-last-ride.md), [C03-10](../03_Ideation/02_Ideas/C03-10_lift-same-stop.md), [C03-11](../03_Ideation/02_Ideas/C03-11_family-plan.md), [C03-12](../03_Ideation/02_Ideas/C03-12_duty-declare.md), [C04-01](../03_Ideation/02_Ideas/C04-01_wait-call-word.md), [C04-02](../03_Ideation/02_Ideas/C04-02_seen-seen.md), [C04-03](../03_Ideation/02_Ideas/C04-03_last-seen-route.md), [C04-04](../03_Ideation/02_Ideas/C04-04_control-room-answers.md), [C04-05](../03_Ideation/02_Ideas/C04-05_home-sees-same.md), [C04-06](../03_Ideation/02_Ideas/C04-06_rule-agreed-home.md), [C04-07](../03_Ideation/02_Ideas/C04-07_wait-together.md), [C04-08](../03_Ideation/02_Ideas/C04-08_lift-cost-covered.md), [C04-09](../03_Ideation/02_Ideas/C04-09_missing-run-declared.md), [C04-10](../03_Ideation/02_Ideas/C04-10_replacement-request.md), [C04-11](../03_Ideation/02_Ideas/C04-11_honest-wait.md), [C04-12](../03_Ideation/02_Ideas/C04-12_last-bus.md), [C22-01](../03_Ideation/02_Ideas/C22-01_expected-fullness.md), [C22-02](../03_Ideation/02_Ideas/C22-02_measured-estimated.md), [C22-03](../03_Ideation/02_Ideas/C22-03_word-packed-train.md), [C22-04](../03_Ideation/02_Ideas/C22-04_regulars-knowledge.md), [C22-05](../03_Ideation/02_Ideas/C22-05_wait-go-word.md), [C22-06](../03_Ideation/02_Ideas/C22-06_seat-time-preference.md), [C22-07](../03_Ideation/02_Ideas/C22-07_extra-carriages.md), [C22-08](../03_Ideation/02_Ideas/C22-08_crowd-spread.md), [C22-09](../03_Ideation/02_Ideas/C22-09_staff-platform.md), [C22-10](../03_Ideation/02_Ideas/C22-10_pay-seat.md), [C22-11](../03_Ideation/02_Ideas/C22-11_home-office-day.md), [C22-12](../03_Ideation/02_Ideas/C22-12_someone-line-warns.md) |
| **Families** | [FAM-03](../03_Ideation/02_Ideas/FAM-03_travellers-report.md) Travellers report, [FAM-04](../03_Ideation/02_Ideas/FAM-04_source-made-visible.md) The source made visible, [FAM-05](../03_Ideation/02_Ideas/FAM-05_honest-uncertainty.md) Honest uncertainty, [FAM-08](../03_Ideation/02_Ideas/FAM-08_one-answer-data.md) One answer, not data, [FAM-10](../03_Ideation/02_Ideas/FAM-10_lies-ahead-known-beforehand.md) What lies ahead, known beforehand, [FAM-11](../03_Ideation/02_Ideas/FAM-11_place-shows.md) The place shows it, [FAM-12](../03_Ideation/02_Ideas/FAM-12_person-spot.md) A person on the spot, [FAM-13](../03_Ideation/02_Ideas/FAM-13_those-depending-them-told.md) Those depending on them are told, [FAM-15](../03_Ideation/02_Ideas/FAM-15_knows-traveller.md) It knows the traveller, [FAM-16](../03_Ideation/02_Ideas/FAM-16_settled-beforehand.md) Settled beforehand, [FAM-20](../03_Ideation/02_Ideas/FAM-20_place-kept.md) A place kept, [FAM-22](../03_Ideation/02_Ideas/FAM-22_money-covers-failure.md) Money covers the failure, [FAM-24](../03_Ideation/02_Ideas/FAM-24_more-different-service.md) More or different service, [FAM-25](../03_Ideation/02_Ideas/FAM-25_rules-rights.md) Rules and rights, [FAM-26](../03_Ideation/02_Ideas/FAM-26_travellers-carry-together.md) Travellers carry it together, [FAM-27](../03_Ideation/02_Ideas/FAM-27_change-trip-habit.md) Change the trip or the habit |
| **Stages covered** | planning, main leg, last mile, disruption |
| **Marks** | FAM-03 2 · 2 · 3; FAM-04 2 · 1 · 3; FAM-05 2 · 1 · 3; FAM-08 3 · 1 · 3; FAM-10 3 · 1 · 3; FAM-11 2 · 1 · 3; FAM-12 2 · 1 · 3; FAM-13 3 · 1 · 3; FAM-15 2 · 3 · 2; FAM-16 2 · 3 · 2; FAM-20 3 · 1 · 3; FAM-22 1 · 1 · 1; FAM-24 2 · 1 · 1; FAM-25 2 · 1 · 1; FAM-26 1 · 2 · 3; FAM-27 1 · 1 · 0 (valuable · feasible · relevant, by family, from [04_Ideas_prioritization.md](../03_Ideation/02_Ideas/04_Ideas_prioritization.md)) |
| **Foundation** | Principles 2, 4; States (trip: broken); Sources of information |

Concepts and families are references only: the behaviour below comes from the stories.

## Description

When the trip of the day breaks (a run cancelled, a connection lost, a vehicle that does not come), shows the ways that still run and can be reached from where the commuter is, each with its arrival, cost, ticket validity and how full it is expected to be, so the commuter can choose to wait, take another way or call to be fetched.

## Operating logic

- **Starts when:** The trip of the day becomes broken (SPEC-02, SPEC-07), or the commuter asks for ways out.
- **Needs to know:** Where the commuter is: their position if allowed (SPEC-01), otherwise the stop or station they enter or the point of the trip they are at; the ways from there to the destination door (SPEC-08); the tickets held (SPEC-10); expected fullness of the next services (operator or other travellers).
- **Rules:**
  1. List the ways that still reach the destination door from where the commuter is, on the page of the leg that broke (rule 6).
  2. Show for each: departure, arrival, cost, whether the ticket held is valid, and how full it is expected to be, with the source of each figure.
  3. Show the time after which no way reaches the destination door that day.
  4. Removed on 2026-11-21 by Marco: no choice between a seat and an earlier arrival. In Italy a booked train, a coach or a shared car ride guarantees a seat, and a regional train cannot be booked, so the choice means little; how full each way is expected to be is still shown (rule 2).
  5. When the commuter chooses a way and confirms, the trip of the day continues on it; nothing is booked or changed before they confirm.
  6. The ways out have no page of their own: they are shown on the Run page of the leg that broke ([SPEC-02](SPEC-02_real-state-of-the-run.md)), with its map and its alternatives as small slots under it ([SPEC-02](SPEC-02_real-state-of-the-run.md) rules 6, 13 and 20), each with the legs that follow it to the door: other trains, a coach, and the car between cities as one leg to the door (for the Verona–Milan commuter, the car left at the station car park in the morning). Choosing one changes the trip of the day ([SPEC-02](SPEC-02_real-state-of-the-run.md) rule 18, [SPEC-04](SPEC-04_todays-trip-at-a-glance.md) rule 5), with the way back to the planned trip. Decided by Marco on 2026-11-21.
  7. Whether the ticket held is valid on a way is one of three: valid, another ticket needed, or no ticket needed (the car).
  8. Removed on 2026-11-21 with the page of its own: the Run page shows the state of the leg (to do, in progress, completed).
  9. On Today, the news that the run is late or cancelled sits on its own leg, not above the trip, and leads to that leg on Run with its alternatives; so does the line of a broken trip at the end of Today, and the message that the trip broke ([SPEC-04](SPEC-04_todays-trip-at-a-glance.md)).
- **States:** Trip: broken → under way (a way chosen) or abandoned.
- **The user receives:** Inside the product: the ways, as the alternatives of the leg that broke. A message on the commuter's channel when the trip breaks [not traced: whether every break is sent].
- **Depends on:** Trip of the day ([SPEC-04](SPEC-04_todays-trip-at-a-glance.md)); Real state of a run ([SPEC-02](SPEC-02_real-state-of-the-run.md)); Ways between two places ([SPEC-08](SPEC-08_every-way-door-to-door.md)); Tickets held ([SPEC-10](SPEC-10_tickets-that-work-when-needed.md)); Consent to use position ([SPEC-01](SPEC-01_foundation.md), Initial set-up); Own rules ([SPEC-01](SPEC-01_foundation.md), Initial set-up); Needs on the way ([SPEC-01](SPEC-01_foundation.md), Initial set-up); Channels ([SPEC-01](SPEC-01_foundation.md), Initial set-up); State of a connection ([SPEC-07](SPEC-07_the-connection-ahead.md))
- **Provides:** A way chosen to continue, to [SPEC-06](SPEC-06_those-waiting-are-told.md)

## Architecture

- **Pages** (from the information architecture of [SPEC-01](SPEC-01_foundation.md)): **Run** (PG-02) of the leg that broke: its alternatives, with the time after which no way reaches the door; **Today (start page)** (PG-01): the news on the leg that broke, and a line at the end of a broken trip, both leading to that leg on Run. **Ways out** (PG-04) is no longer a page of its own.
- **Components:**
  - `<leg-alternatives>`: defined in [SPEC-02](SPEC-02_real-state-of-the-run.md); reused: each alternative's details also show how full it is expected to be, with its source, and whether a ticket is needed.
  - `<leg-map>`: defined in [SPEC-02](SPEC-02_real-state-of-the-run.md); reused, with the routes of the alternatives.
  - `<confirm-choice>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused: nothing changes in the trip without the commuter's yes.
  - `<today-trip>`: defined in [SPEC-04](SPEC-04_todays-trip-at-a-glance.md); reused: the news on the leg.
  - `<message-preview>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); the message that the trip broke is on the lock screen.
  - `<prepared-message>`: defined in [SPEC-06](SPEC-06_those-waiting-are-told.md); under the alternatives, the message ready to send to who waits.
- **Datasets:**
  - `ways` (defined in the foundation): `ways_out{run, last_way}`: the run whose alternatives are the ways out, and the time after which no way reaches the door.
  - `runs` (defined in the foundation): the run that broke, its reason, and its `alternatives[{…, door_arrival, ticket_valid (null: no ticket needed), cost, fullness, fullness_level (1 seats likely, 2 busy, 3 full; missing: unknown), fullness_source, legs_after[]}]`.
  - `profile` (defined in the foundation): `doors`, `trips`, `channels`.
  - `notifications` (defined in the foundation): `today.<scenario>[]` and `ways_out.<scenario>[]`, each with the run it is about.
- **Simulated events:**
  - The trip breaking: the scenario of the configurator moves to `cancelled`; the message of `notifications.ways_out` is on the lock screen.
  - Where the commuter is: the configurator (before the trip, a leg, after the trip).

## When things go wrong

- **Position not allowed:** the commuter enters where they are, or picks the point of the trip they are at.
- **No ticket entered:** validity is shown as unknown, with a link to SPEC-10.
- **Fullness unknown:** shown as unknown, never as empty.
- **No way reaches the door:** the product says so, with the time it happened.
- **The commuter does not choose:** nothing changes.

## Out of scope

Telling the person who waits (SPEC-06); buying a ticket for the chosen way (SPEC-10).

## Acceptance criteria

- **Given** a cancelled train and a packed next train **when** the commuter opens its details **then** it shows how full it is expected to be, with its source.
- **Given** a way on which the ticket held is not valid **when** it is shown **then** it says so, with its cost.
- **Given** the last way home leaves at 23:05 **when** it is 22:55 **then** the commuter sees that after 23:05 no way reaches home.
- **Given** the commuter chooses a way **when** they confirm **then** the trip continues on it; nothing was booked before.
- **Given** the 9707 cancelled at Verona Porta Nuova **when** the commuter taps the news on the train leg of Today **then** the Run page of that leg shows its alternatives on the map, the car from the station car park among them, with no ticket needed.

## Open questions

Each question has its own file in [01_Open_Questions/](01_Open_Questions/00_Open_questions_index.md), with its chain to the research.

- **[OQ-11](01_Open_Questions/OQ-11_whether-every-break-is-sent.md)** When the trip of the day breaks, is a message always sent on the commuter's channel, or only for some breaks? [not traced] Research: partly.
- **[OQ-12](01_Open_Questions/OQ-12_cost-of-each-way-out.md)** Is the cost of each way out shown before the commuter chooses it? [not traced] Research: partly.
- **[OQ-13](01_Open_Questions/OQ-13_when-a-vehicle-not-seen-is-not-coming.md)** After how long without any sign of it does a bus or train count as not coming? [not traced] Research: ⚠ not supported.
- **[OQ-14](01_Open_Questions/OQ-14_minors-using-the-product-alone.md)** Do minors use the product alone, and if so what changes (consent, contacts, what is shared with a parent)? [not traced] Research: ⚠ not supported.
- **[OQ-19](01_Open_Questions/OQ-19_a-lift-as-a-way.md)** Does a lift from a relative or friend count as one of the ways from door to door? [not traced] Research: supported.

## Connections

- [US-F-02_ways-still-open-trip.md](../02_Analysis/03_User_Stories/US-F-02_ways-still-open-trip.md): a story this specification serves.
- [US-F-19_how-crowded-next-services.md](../02_Analysis/03_User_Stories/US-F-19_how-crowded-next-services.md): a story this specification serves.
- [F-02_ways-still-open-trip.md](../02_Analysis/02_Features/F-02_ways-still-open-trip.md): the feature behind story F-02.
- [F-19_how-crowded-next-services.md](../02_Analysis/02_Features/F-19_how-crowded-next-services.md): the feature behind story F-19.
- [HMW-03_help-teenager-waiting-late-evening.md](../03_Ideation/01_How_Might_We/HMW-03_help-teenager-waiting-late-evening.md): the problem question written from a story it serves.
- [HMW-04_help-teenager-stop-late-evening.md](../03_Ideation/01_How_Might_We/HMW-04_help-teenager-stop-late-evening.md): the problem question written from a story it serves.
- [HMW-22_help-outskirts-hybrid-worker-station.md](../03_Ideation/01_How_Might_We/HMW-22_help-outskirts-hybrid-worker-station.md): the problem question written from a story it serves.
- [SPEC-00_overview.md](SPEC-00_overview.md): the overview that lists this specification.
- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation it stands on.
- [SPEC-04_todays-trip-at-a-glance.md](SPEC-04_todays-trip-at-a-glance.md): provides elements this specification depends on.
- [SPEC-02_real-state-of-the-run.md](SPEC-02_real-state-of-the-run.md): provides elements this specification depends on.
- [SPEC-08_every-way-door-to-door.md](SPEC-08_every-way-door-to-door.md): provides elements this specification depends on.
- [SPEC-10_tickets-that-work-when-needed.md](SPEC-10_tickets-that-work-when-needed.md): provides elements this specification depends on.
- [SPEC-07_the-connection-ahead.md](SPEC-07_the-connection-ahead.md): provides elements this specification depends on.
- [SPEC-06_those-waiting-are-told.md](SPEC-06_those-waiting-are-told.md): depends on elements this specification provides.
- [OQ-11_whether-every-break-is-sent.md](01_Open_Questions/OQ-11_whether-every-break-is-sent.md): an open question this specification raises.
- [OQ-12_cost-of-each-way-out.md](01_Open_Questions/OQ-12_cost-of-each-way-out.md): an open question this specification raises.
- [OQ-13_when-a-vehicle-not-seen-is-not-coming.md](01_Open_Questions/OQ-13_when-a-vehicle-not-seen-is-not-coming.md): an open question this specification raises.
- [OQ-14_minors-using-the-product-alone.md](01_Open_Questions/OQ-14_minors-using-the-product-alone.md): an open question this specification raises.
- [OQ-19_a-lift-as-a-way.md](01_Open_Questions/OQ-19_a-lift-as-a-way.md): an open question this specification raises.
