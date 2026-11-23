---
source: Claude
date: 2026-11-23 21:36
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, planning, mode-choice, tools, habit]
related: [US-F-04_one-search-one-booking.md, US-F-10_car-against-train-office.md, F-04_one-search-one-booking.md, F-10_car-against-train-office.md, HMW-06_help-verona-milan-commuter-booking.md, HMW-07_let-verona-milan-commuter-he.md, HMW-13_help-como-commuter-looking-timetables.md, SPEC-00_overview.md, SPEC-01_foundation.md, SPEC-09_times-that-can-be-kept.md, SPEC-04_todays-trip-at-a-glance.md, SPEC-05_ways-out-when-the-trip-breaks.md, SPEC-10_tickets-that-work-when-needed.md, SPEC-17_trips.md, OQ-19_a-lift-as-a-way.md, OQ-20_which-car-costs-are-counted.md]
---

# SPEC-08: Every Way Door to Door

Use this file as a prompt: it describes one behaviour to build within the architecture of the foundation: a frontend-only prototype made of web components, with all data from mock datasets in `data/`.

## User stories served

One row per story this specification serves, copied as written.

| Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- |
| [F-04](../02_Analysis/03_User_Stories/US-F-04_one-search-one-booking.md) | the Verona–Milan commuter | As the Verona–Milan commuter, booking three or four days ahead and finding the train he wanted sold out, I want every way to make the trip door to door shown with its time and price, and booked as one journey, so that he still finds a train at the time he wants. | Showing every way with time and price; booking as one journey is in SPEC-10 |
| [F-10](../02_Analysis/03_User_Stories/US-F-10_car-against-train-office.md) | the Como commuter | As the Como commuter, looking at the timetables to see whether he can go back from the car to the train, I want the train and the car compared door to door for a given day and departure, on time, cost and arrival home, so that he can see whether the train still brings him back to Como when the working day ends. | All of it |

**Why these stories belong together:** Both stories compare the ways of making one trip, door to door, before travelling.

## Traceability

| | |
| --- | --- |
| **Features** | [F-04](../02_Analysis/02_Features/F-04_one-search-one-booking.md), [F-10](../02_Analysis/02_Features/F-10_car-against-train-office.md) |
| **Touchpoints** | [TP-005](../02_Analysis/01_Touchpoints/TP-005_booking-train-days-ahead.md), [TP-013](../02_Analysis/01_Touchpoints/TP-013_choosing-each-day-means.md), [TP-016](../02_Analysis/01_Touchpoints/TP-016_knowing-public-transport-option.md), [TP-019](../02_Analysis/01_Touchpoints/TP-019_choosing-slower-route-because.md), [TP-020](../02_Analysis/01_Touchpoints/TP-020_booking-online-without-comparing.md), [TP-021](../02_Analysis/01_Touchpoints/TP-021_deciding-combine-means-operators.md), [TP-022](../02_Analysis/01_Touchpoints/TP-022_searching-each-leg-different.md), [TP-065](../02_Analysis/01_Touchpoints/TP-065_topping-up-card-middle.md), [TP-009](../02_Analysis/01_Touchpoints/TP-009_keeping-car-after-pass.md), [TP-010](../02_Analysis/01_Touchpoints/TP-010_weighing-car-against-train.md), [TP-011](../02_Analysis/01_Touchpoints/TP-011_looking-timetables-decide-whether.md), [TP-044](../02_Analysis/01_Touchpoints/TP-044_taking-car-keys-late.md) |
| **Problem questions** | [HMW-06](../03_Ideation/01_How_Might_We/HMW-06_help-verona-milan-commuter-booking.md), [HMW-07](../03_Ideation/01_How_Might_We/HMW-07_let-verona-milan-commuter-he.md), [HMW-13](../03_Ideation/01_How_Might_We/HMW-13_help-como-commuter-looking-timetables.md) |
| **Concepts** | [C06-01](../03_Ideation/02_Ideas/C06-01_nearest-arrival.md), [C06-02](../03_Ideation/02_Ideas/C06-02_sell-warning.md), [C06-03](../03_Ideation/02_Ideas/C06-03_standing-hold.md), [C06-04](../03_Ideation/02_Ideas/C06-04_extra-seats-evening-trains.md), [C06-05](../03_Ideation/02_Ideas/C06-05_waiting-list.md), [C06-06](../03_Ideation/02_Ideas/C06-06_booking-handover.md), [C06-07](../03_Ideation/02_Ideas/C06-07_lift-verona.md), [C06-08](../03_Ideation/02_Ideas/C06-08_any-train-pass.md), [C06-09](../03_Ideation/02_Ideas/C06-09_quota-regulars.md), [C06-10](../03_Ideation/02_Ideas/C06-10_every-seller-together.md), [C06-11](../03_Ideation/02_Ideas/C06-11_someone-finds.md), [C06-12](../03_Ideation/02_Ideas/C06-12_travel-same-morning.md), [S06](../03_Ideation/02_Ideas/S06_alternatives-estimated-delays.md), [C07-01](../03_Ideation/02_Ideas/C07-01_all-ways-one-page.md), [C07-02](../03_Ideation/02_Ideas/C07-02_runs-each-leg.md), [C07-03](../03_Ideation/02_Ideas/C07-03_real-door-time.md), [C07-04](../03_Ideation/02_Ideas/C07-04_only-those-fit.md), [C07-05](../03_Ideation/02_Ideas/C07-05_only-differs.md), [C07-06](../03_Ideation/02_Ideas/C07-06_one-price.md), [C07-07](../03_Ideation/02_Ideas/C07-07_whole-trip-protection.md), [C07-08](../03_Ideation/02_Ideas/C07-08_duty-sell-through.md), [C07-09](../03_Ideation/02_Ideas/C07-09_doors-known.md), [C07-10](../03_Ideation/02_Ideas/C07-10_person-assembles.md), [C07-11](../03_Ideation/02_Ideas/C07-11_regulars-accounts.md), [C07-12](../03_Ideation/02_Ideas/C07-12_lifts-count-way.md), [C13-01](../03_Ideation/02_Ideas/C13-01_side-side-door-door.md), [C13-02](../03_Ideation/02_Ideas/C13-02_evening-times-apply.md), [C13-03](../03_Ideation/02_Ideas/C13-03_home-answer.md), [C13-04](../03_Ideation/02_Ideas/C13-04_latest-office-exit.md), [C13-05](../03_Ideation/02_Ideas/C13-05_trial-week.md), [C13-06](../03_Ideation/02_Ideas/C13-06_mixed-day.md), [C13-07](../03_Ideation/02_Ideas/C13-07_those-moved-back.md), [C13-08](../03_Ideation/02_Ideas/C13-08_colleagues-way-back.md), [C13-09](../03_Ideation/02_Ideas/C13-09_evening-departure-added.md), [C13-10](../03_Ideation/02_Ideas/C13-10_true-cost-both.md), [C13-11](../03_Ideation/02_Ideas/C13-11_earlier-end-train-days.md), [C13-12](../03_Ideation/02_Ideas/C13-12_return-time-holds.md) |
| **Families** | [FAM-03](../03_Ideation/02_Ideas/FAM-03_travellers-report.md) Travellers report, [FAM-04](../03_Ideation/02_Ideas/FAM-04_source-made-visible.md) The source made visible, [FAM-05](../03_Ideation/02_Ideas/FAM-05_honest-uncertainty.md) Honest uncertainty, [FAM-06](../03_Ideation/02_Ideas/FAM-06_times-allow-reality.md) Times that allow for reality, [FAM-08](../03_Ideation/02_Ideas/FAM-08_one-answer-data.md) One answer, not data, [FAM-09](../03_Ideation/02_Ideas/FAM-09_less-way.md) Less in the way, [FAM-14](../03_Ideation/02_Ideas/FAM-14_step-done-them.md) The step done for them, [FAM-15](../03_Ideation/02_Ideas/FAM-15_knows-traveller.md) It knows the traveller, [FAM-18](../03_Ideation/02_Ideas/FAM-18_all-ways-side-side.md) All ways side by side, [FAM-19](../03_Ideation/02_Ideas/FAM-19_trip-one-purchase.md) The trip as one purchase, [FAM-20](../03_Ideation/02_Ideas/FAM-20_place-kept.md) A place kept, [FAM-21](../03_Ideation/02_Ideas/FAM-21_prices-tickets-fit-real.md) Prices and tickets that fit the real use, [FAM-24](../03_Ideation/02_Ideas/FAM-24_more-different-service.md) More or different service, [FAM-25](../03_Ideation/02_Ideas/FAM-25_rules-rights.md) Rules and rights, [FAM-26](../03_Ideation/02_Ideas/FAM-26_travellers-carry-together.md) Travellers carry it together, [FAM-27](../03_Ideation/02_Ideas/FAM-27_change-trip-habit.md) Change the trip or the habit |
| **Stages covered** | planning, before departure, transfer |
| **Marks** | FAM-03 2 · 2 · 3; FAM-04 2 · 1 · 3; FAM-05 2 · 1 · 3; FAM-06 2 · 1 · 3; FAM-08 3 · 1 · 3; FAM-09 2 · 1 · 3; FAM-14 3 · 1 · 3; FAM-15 2 · 3 · 2; FAM-18 3 · 1 · 3; FAM-19 1 · 1 · 1; FAM-20 3 · 1 · 3; FAM-21 2 · 1 · 1; FAM-24 2 · 1 · 1; FAM-25 2 · 1 · 1; FAM-26 1 · 2 · 3; FAM-27 1 · 1 · 0 (valuable · feasible · relevant, by family, from [04_Ideas_prioritization.md](../03_Ideation/02_Ideas/04_Ideas_prioritization.md)) |
| **Foundation** | The things it deals with (way, door); Sources of information |

Concepts and families are references only: the behaviour below comes from the stories.

## Description

Shows every way of making a trip door to door, for a given day and time, side by side: public transport, car, and combinations, each with its time, price and arrival at the door.

## Operating logic

- **Starts when:** The commuter asks for ways between two places for a day and a time to leave after or to arrive by, on the Ways page.
- **Needs to know:** The doors (SPEC-01) or places the commuter enters; schedules of the services; travel times by car (third party); prices (operators, third parties); timing of each leg and connection (SPEC-09).
- **Rules:**
  1. List every way that reaches the destination door, side by side, including car and public transport and their combinations. The car between cities is a way of one leg from door to door; the means of each leg follow its kind, in a city or between cities ([SPEC-02](SPEC-02_real-state-of-the-run.md) rule 20). Added by Marco on 2026-11-21.
  2. Show for each: departure, arrival at the door, total time, price, and who runs each leg.
  3. When the wanted service is sold out, put first the way arriving closest to the wanted time.
  4. For a return, show when each way brings the commuter back to the door at the end of the working day.
  5. Mark a price that is unknown as unknown.
  6. Let the commuter choose a way for a trip: it becomes the trip of the day (SPEC-04), or it is saved to their trips ([SPEC-17](SPEC-17_trips.md)), the free list of trips that replaced the single usual trip on 2026-11-18.
  7. The two places are typed as in an address search, with suggestions as the commuter types: their favourite addresses (the doors of [SPEC-01](SPEC-01_foundation.md), Initial set-up) first, marked, then the matching addresses and stations. Before the set-up there are no favourites. Marco, 2026-11-22.
  8. Let the commuter search by a time to leave after or a time to arrive by. Leave after: the earliest departure first. Arrive by: the arrival closest to that time first, the ways that arrive in time before those that arrive late, each late one marked; a sold-out way goes last.
- **States:** A search has no state; a chosen way becomes a trip (`planned`).
- **The user receives:** Inside the product: the ways side by side.
- **Depends on:** Doors ([SPEC-01](SPEC-01_foundation.md), Initial set-up); Own rules ([SPEC-01](SPEC-01_foundation.md), Initial set-up); Timing of legs and connections ([SPEC-09](SPEC-09_times-that-can-be-kept.md))
- **Provides:** Ways between two places, to [SPEC-01](SPEC-01_foundation.md), [SPEC-17](SPEC-17_trips.md), [SPEC-10](SPEC-10_tickets-that-work-when-needed.md); A way chosen for today, to [SPEC-04](SPEC-04_todays-trip-at-a-glance.md)

## Architecture

- **Pages** (from the information architecture of [SPEC-01](SPEC-01_foundation.md)): **Today (start page)** (PG-01), when nothing is set up: `<way-search>` under "Plan a trip"; **Ways** (PG-05): the whole page, reached from the navigation and from the search on Today when nothing is set up, which is this page's `<way-search>` (Marco, 2026-11-22); **Trips** (PG-16): a way saved arrives here ([SPEC-17](SPEC-17_trips.md)). **Way detail** (PG-06) belongs to [SPEC-09](SPEC-09_times-that-can-be-kept.md).
- **Components:**
  - `<way-search>`: two addresses typed with suggestions (the favourite addresses first, then `places`), the day, and a time to leave after or to arrive by; reads `ways.search{from, to, day, when, time}`, `profile.doors`, `places`; reacts to typing (suggestions) and to "Search": on the Ways page, leave after or arrive by and the time reorder the ways; on Today when nothing is set up (attribute `go`), it opens the Ways page with the search in the address. The places and the day are shown, not kept.
  - `<way-card>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused, side by side: legs, departure, arrival at the door, total time, price (unknown when not known), who runs it, how full (unknown when not known), when it brings the commuter back home at the end of the working day, its source, "Sold out" when it is; "Take this way today" (asked first, with `<confirm-choice>`) and "Save to your trips". Saving replaces the `<save-usual>` of the first version.
  - `<way-results>`: the ways found, each a `<way-card>`, ordered by leave after or arrive by, a sold-out way last; reads `ways.search`; reacts to the search and to "way-today" and "way-save" (said so, not kept).
  - `<way-strip>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused, inside each `<way-card>`.
  - `<confirm-choice>`: defined in the foundation; asks before a way becomes the trip of today.
- **Datasets:**
  - `ways` (defined in the foundation): `search{from, to, day, when, time, back_after, ways[{id, label, legs[{mode, text}], dep, arr_door, minutes, price, operators, back_home, fullness, sold_out, source}]}`; `price` or `back_home` null is unknown. Mock ways from the Verona home to the Milan apartment, one per kind of means between the cities: high-speed trains of two operators, a regional, a coach, a shared car, the car the whole way.
  - `profile` (defined in the foundation): `doors`, the favourite addresses.
  - `places` (defined here): the addresses and stations suggested as the commuter types; mock, in place of an address service.
- **Simulated events:**
  - None: the ways of the search are read from `ways.search`. A way taken today or saved is said so, and not kept: Today and Trips show the mock data.

## When things go wrong

- **No doors set:** the commuter types the two places; no favourites are suggested.
- **No price:** shown as unknown.
- **No way found:** the product says so for that day and time.
- **Car times unavailable:** the car way is shown without time, marked.

## Out of scope

Booking the way as one journey (SPEC-10); timing legs at their real length (SPEC-09).

## Acceptance criteria

- **Given** a day and a time to arrive by **when** the commuter plans **then** every way door to door is shown side by side with time, price, arrival and who runs each leg, the closest arrival first.
- **Given** a time to leave after **when** the commuter searches **then** only the ways leaving from that time are shown, the earliest first.
- **Given** the wanted train is sold out **when** he plans **then** the way arriving closest to his wanted time comes first.
- **Given** an office day ending at 18:00 **when** the Como commuter compares train and car **then** each shows when he would be home.
- **Given** a way whose price is unknown **when** it is shown **then** the price is marked unknown.

## Open questions

Each question has its own file in [01_Open_Questions/](01_Open_Questions/00_Open_questions_index.md), with its chain to the research.

- **[OQ-19](01_Open_Questions/OQ-19_a-lift-as-a-way.md)** Does a lift from a relative or friend count as one of the ways from door to door? [not traced] Research: supported.
- **[OQ-20](01_Open_Questions/OQ-20_which-car-costs-are-counted.md)** Which costs of the car are counted when it is compared with the train: fuel, tolls, parking? [not traced] Research: partly.

## Connections

- [US-F-04_one-search-one-booking.md](../02_Analysis/03_User_Stories/US-F-04_one-search-one-booking.md): a story this specification serves.
- [US-F-10_car-against-train-office.md](../02_Analysis/03_User_Stories/US-F-10_car-against-train-office.md): a story this specification serves.
- [F-04_one-search-one-booking.md](../02_Analysis/02_Features/F-04_one-search-one-booking.md): the feature behind story F-04.
- [F-10_car-against-train-office.md](../02_Analysis/02_Features/F-10_car-against-train-office.md): the feature behind story F-10.
- [HMW-06_help-verona-milan-commuter-booking.md](../03_Ideation/01_How_Might_We/HMW-06_help-verona-milan-commuter-booking.md): the problem question written from a story it serves.
- [HMW-07_let-verona-milan-commuter-he.md](../03_Ideation/01_How_Might_We/HMW-07_let-verona-milan-commuter-he.md): the problem question written from a story it serves.
- [HMW-13_help-como-commuter-looking-timetables.md](../03_Ideation/01_How_Might_We/HMW-13_help-como-commuter-looking-timetables.md): the problem question written from a story it serves.
- [SPEC-00_overview.md](SPEC-00_overview.md): the overview that lists this specification.
- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation it stands on.
- [SPEC-09_times-that-can-be-kept.md](SPEC-09_times-that-can-be-kept.md): provides elements this specification depends on.
- [SPEC-04_todays-trip-at-a-glance.md](SPEC-04_todays-trip-at-a-glance.md): depends on elements this specification provides.
- [SPEC-05_ways-out-when-the-trip-breaks.md](SPEC-05_ways-out-when-the-trip-breaks.md): shares the question of a lift as a way (OQ-19); since 2026-11-21 its ways out are the alternatives of the run on the Run page, not ways from this specification.
- [SPEC-10_tickets-that-work-when-needed.md](SPEC-10_tickets-that-work-when-needed.md): depends on elements this specification provides.
- [SPEC-17_trips.md](SPEC-17_trips.md): depends on elements this specification provides: a way saved joins the trips.
- [OQ-19_a-lift-as-a-way.md](01_Open_Questions/OQ-19_a-lift-as-a-way.md): an open question this specification raises.
- [OQ-20_which-car-costs-are-counted.md](01_Open_Questions/OQ-20_which-car-costs-are-counted.md): an open question this specification raises.
