---
source: Claude
date: 2026-11-23 21:42
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, tools, planning, ticket-carryover]
related: [US-F-04_one-search-one-booking.md, US-F-08_ticket-works-moment-needed.md, F-04_one-search-one-booking.md, F-08_ticket-works-moment-needed.md, HMW-06_help-verona-milan-commuter-booking.md, HMW-07_let-verona-milan-commuter-he.md, HMW-11_let-verona-milan-commuter-still.md, SPEC-00_overview.md, SPEC-01_foundation.md, SPEC-08_every-way-door-to-door.md, SPEC-05_ways-out-when-the-trip-breaks.md, SPEC-11_the-fare-that-fits-the-days.md, SPEC-12_compensation-from-the-trip.md, OQ-23_booking-and-paying-across-sellers.md, OQ-24_moving-a-ticket-with-no-signal.md]
---

# SPEC-10: Tickets That Work When Needed

Use this file as a prompt: it describes one behaviour to build within the architecture of the foundation: a frontend-only prototype made of web components, with all data from mock datasets in `data/`.

## User stories served

One row per story this specification serves, copied as written.

| Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- |
| [F-04](../02_Analysis/03_User_Stories/US-F-04_one-search-one-booking.md) | the Verona–Milan commuter | As the Verona–Milan commuter, booking three or four days ahead and finding the train he wanted sold out, I want every way to make the trip door to door shown with its time and price, and booked as one journey, so that he still finds a train at the time he wants. | Booking a way as one journey; showing every way is in SPEC-08 |
| [F-08](../02_Analysis/03_User_Stories/US-F-08_ticket-works-moment-needed.md) | the Verona–Milan commuter | As the Verona–Milan commuter, still in the underground five minutes before his train leaves, I want to buy, move and show a valid ticket in one step, up to departure and with no signal, so that he can take another train, or travel another day, without losing the ticket. | All of it |

**Why these stories belong together:** Both stories ask that buying and holding a ticket never stop the trip: one journey for all legs, a ticket that moves and shows with no signal.

## Traceability

| | |
| --- | --- |
| **Features** | [F-04](../02_Analysis/02_Features/F-04_one-search-one-booking.md), [F-08](../02_Analysis/02_Features/F-08_ticket-works-moment-needed.md) |
| **Touchpoints** | [TP-005](../02_Analysis/01_Touchpoints/TP-005_booking-train-days-ahead.md), [TP-013](../02_Analysis/01_Touchpoints/TP-013_choosing-each-day-means.md), [TP-016](../02_Analysis/01_Touchpoints/TP-016_knowing-public-transport-option.md), [TP-019](../02_Analysis/01_Touchpoints/TP-019_choosing-slower-route-because.md), [TP-020](../02_Analysis/01_Touchpoints/TP-020_booking-online-without-comparing.md), [TP-021](../02_Analysis/01_Touchpoints/TP-021_deciding-combine-means-operators.md), [TP-022](../02_Analysis/01_Touchpoints/TP-022_searching-each-leg-different.md), [TP-065](../02_Analysis/01_Touchpoints/TP-065_topping-up-card-middle.md), [TP-008](../02_Analysis/01_Touchpoints/TP-008_buying-pass-ticket-payment.md), [TP-071](../02_Analysis/01_Touchpoints/TP-071_buying-ticket-station-just.md), [TP-076](../02_Analysis/01_Touchpoints/TP-076_showing-ticket-inspector-gate.md), [TP-077](../02_Analysis/01_Touchpoints/TP-077_forgetting-check-fixed-route.md), [TP-103](../02_Analysis/01_Touchpoints/TP-103_moving-ticket-another-train.md) |
| **Problem questions** | [HMW-06](../03_Ideation/01_How_Might_We/HMW-06_help-verona-milan-commuter-booking.md), [HMW-07](../03_Ideation/01_How_Might_We/HMW-07_let-verona-milan-commuter-he.md), [HMW-11](../03_Ideation/01_How_Might_We/HMW-11_let-verona-milan-commuter-still.md) |
| **Concepts** | [C06-01](../03_Ideation/02_Ideas/C06-01_nearest-arrival.md), [C06-02](../03_Ideation/02_Ideas/C06-02_sell-warning.md), [C06-03](../03_Ideation/02_Ideas/C06-03_standing-hold.md), [C06-04](../03_Ideation/02_Ideas/C06-04_extra-seats-evening-trains.md), [C06-05](../03_Ideation/02_Ideas/C06-05_waiting-list.md), [C06-06](../03_Ideation/02_Ideas/C06-06_booking-handover.md), [C06-07](../03_Ideation/02_Ideas/C06-07_lift-verona.md), [C06-08](../03_Ideation/02_Ideas/C06-08_any-train-pass.md), [C06-09](../03_Ideation/02_Ideas/C06-09_quota-regulars.md), [C06-10](../03_Ideation/02_Ideas/C06-10_every-seller-together.md), [C06-11](../03_Ideation/02_Ideas/C06-11_someone-finds.md), [C06-12](../03_Ideation/02_Ideas/C06-12_travel-same-morning.md), [S06](../03_Ideation/02_Ideas/S06_alternatives-estimated-delays.md), [C07-01](../03_Ideation/02_Ideas/C07-01_all-ways-one-page.md), [C07-02](../03_Ideation/02_Ideas/C07-02_runs-each-leg.md), [C07-03](../03_Ideation/02_Ideas/C07-03_real-door-time.md), [C07-04](../03_Ideation/02_Ideas/C07-04_only-those-fit.md), [C07-05](../03_Ideation/02_Ideas/C07-05_only-differs.md), [C07-06](../03_Ideation/02_Ideas/C07-06_one-price.md), [C07-07](../03_Ideation/02_Ideas/C07-07_whole-trip-protection.md), [C07-08](../03_Ideation/02_Ideas/C07-08_duty-sell-through.md), [C07-09](../03_Ideation/02_Ideas/C07-09_doors-known.md), [C07-10](../03_Ideation/02_Ideas/C07-10_person-assembles.md), [C07-11](../03_Ideation/02_Ideas/C07-11_regulars-accounts.md), [C07-12](../03_Ideation/02_Ideas/C07-12_lifts-count-way.md), [C11-01](../03_Ideation/02_Ideas/C11-01_move-signal.md), [C11-02](../03_Ideation/02_Ideas/C11-02_next-one-if-i.md), [C11-03](../03_Ideation/02_Ideas/C11-03_any-train-day.md), [C11-04](../03_Ideation/02_Ideas/C11-04_ticket-follows-him.md), [C11-05](../03_Ideation/02_Ideas/C11-05_someone-moves.md), [C11-06](../03_Ideation/02_Ideas/C11-06_open-time-carnet.md), [C11-07](../03_Ideation/02_Ideas/C11-07_credit-missed-train.md), [C11-08](../03_Ideation/02_Ideas/C11-08_right-change-until-departure.md), [C11-09](../03_Ideation/02_Ideas/C11-09_staff-accept.md), [C11-10](../03_Ideation/02_Ideas/C11-10_signal-underground.md), [C11-11](../03_Ideation/02_Ideas/C11-11_last-moment-warned.md), [C11-12](../03_Ideation/02_Ideas/C11-12_pass.md) |
| **Families** | [FAM-01](../03_Ideation/02_Ideas/FAM-01_told-where-they.md) Told where they are, [FAM-03](../03_Ideation/02_Ideas/FAM-03_travellers-report.md) Travellers report, [FAM-04](../03_Ideation/02_Ideas/FAM-04_source-made-visible.md) The source made visible, [FAM-05](../03_Ideation/02_Ideas/FAM-05_honest-uncertainty.md) Honest uncertainty, [FAM-08](../03_Ideation/02_Ideas/FAM-08_one-answer-data.md) One answer, not data, [FAM-09](../03_Ideation/02_Ideas/FAM-09_less-way.md) Less in the way, [FAM-12](../03_Ideation/02_Ideas/FAM-12_person-spot.md) A person on the spot, [FAM-14](../03_Ideation/02_Ideas/FAM-14_step-done-them.md) The step done for them, [FAM-15](../03_Ideation/02_Ideas/FAM-15_knows-traveller.md) It knows the traveller, [FAM-16](../03_Ideation/02_Ideas/FAM-16_settled-beforehand.md) Settled beforehand, [FAM-18](../03_Ideation/02_Ideas/FAM-18_all-ways-side-side.md) All ways side by side, [FAM-19](../03_Ideation/02_Ideas/FAM-19_trip-one-purchase.md) The trip as one purchase, [FAM-20](../03_Ideation/02_Ideas/FAM-20_place-kept.md) A place kept, [FAM-21](../03_Ideation/02_Ideas/FAM-21_prices-tickets-fit-real.md) Prices and tickets that fit the real use, [FAM-22](../03_Ideation/02_Ideas/FAM-22_money-covers-failure.md) Money covers the failure, [FAM-24](../03_Ideation/02_Ideas/FAM-24_more-different-service.md) More or different service, [FAM-25](../03_Ideation/02_Ideas/FAM-25_rules-rights.md) Rules and rights, [FAM-26](../03_Ideation/02_Ideas/FAM-26_travellers-carry-together.md) Travellers carry it together, [FAM-27](../03_Ideation/02_Ideas/FAM-27_change-trip-habit.md) Change the trip or the habit |
| **Stages covered** | planning, main leg, transfer, disruption |
| **Marks** | FAM-01 3 · 1 · 3; FAM-03 2 · 2 · 3; FAM-04 2 · 1 · 3; FAM-05 2 · 1 · 3; FAM-08 3 · 1 · 3; FAM-09 2 · 1 · 3; FAM-12 2 · 1 · 3; FAM-14 3 · 1 · 3; FAM-15 2 · 3 · 2; FAM-16 2 · 3 · 2; FAM-18 3 · 1 · 3; FAM-19 1 · 1 · 1; FAM-20 3 · 1 · 3; FAM-21 2 · 1 · 1; FAM-22 1 · 1 · 1; FAM-24 2 · 1 · 1; FAM-25 2 · 1 · 1; FAM-26 1 · 2 · 3; FAM-27 1 · 1 · 0 (valuable · feasible · relevant, by family, from [04_Ideas_prioritization.md](../03_Ideation/02_Ideas/04_Ideas_prioritization.md)) |
| **Foundation** | Principle 4; The things it deals with (ticket) |

Concepts and families are references only: the behaviour below comes from the stories.

## Description

Lets the commuter buy a way as one journey, hold their tickets, move a ticket to another run or day, and show a valid ticket in one step, up to departure and with no signal. It also lets them enter tickets bought elsewhere.

## Operating logic

- **Starts when:** The commuter books a way (SPEC-08), opens their tickets, or needs to show or move one.
- **Needs to know:** The way chosen (SPEC-08); sellers and their conditions (operators, ticket sellers); the commuter's payment [technology choice open]; tickets bought elsewhere, entered by the commuter.
- **Rules:**
  1. Book every leg of a way as one journey, with one price.
  2. Keep the tickets held, including those the commuter enters after buying elsewhere.
  3. Show a valid ticket in one step, also with no signal.
  4. Let the commuter move a ticket to another run or day where its conditions allow, up to departure, and show what moving costs before they confirm.
  5. Change nothing on a ticket without the commuter's yes.
  6. Let the commuter hold more than one way to pay (a card, a direct debit, a wallet), add one, and choose which is used first; when booking, they may pick another (Marco's note on the moodboard image 1Jelbi-Payment, 2026-11-23: "si possa scegliere più di un metodo di pagamento"). What is added is shown, not kept.
- **States:** Ticket: `held` → `used` or `moved` or `expired`.
- **The user receives:** Inside the product: the tickets held and what each covers.
- **Depends on:** Ways between two places ([SPEC-08](SPEC-08_every-way-door-to-door.md))
- **Provides:** Tickets held, to [SPEC-05](SPEC-05_ways-out-when-the-trip-breaks.md), [SPEC-11](SPEC-11_the-fare-that-fits-the-days.md), [SPEC-12](SPEC-12_compensation-from-the-trip.md)

## Architecture

- **Pages** (from the information architecture of [SPEC-01](SPEC-01_foundation.md)): **Tickets** (PG-07): the tickets, first, then adding one bought elsewhere and a link to find a way and book it; **Way detail** (PG-06): buying the way as one journey.
- **Components:**
  - `<way-booking>`: the way bought as one journey: one price, the operators of every leg, "Book for" the price, then `<confirm-choice>` (every leg booked together, or none); a way with nothing to book (the car the whole way) or with an unknown price says so; reads one way of `ways.search.ways[]`; reacts to "Book" (nothing is paid or kept).
  - `<ticket-list>`: the whole Tickets page: the tickets held as `<ticket-card>`s, `<ticket-entry>` and the link to find a way and book it; reads `tickets[]`, `config.signal`; no events of its own.
  - `<ticket-card>`: a ticket held: what it covers, the seller, whether it was entered by the commuter, its state; holds `<ticket-show>` and `<ticket-move>`; reads `tickets[]`.
  - `<ticket-move>`: the runs or days a ticket can be moved to and what each move costs; a seller that does not allow moving is said so before the commuter tries; reads `tickets[].moves[]`, `tickets[].no_move`; reacts to a move being chosen, then `<confirm-choice>` with its cost.
  - `<ticket-show>`: the ticket ready to show at the gate in one step, also with no signal; reads `tickets[].code`; reacts to "Show ticket".
  - `<ticket-entry>`: entering a ticket bought elsewhere; reacts to "Add" (what is typed is shown, not kept).
  - `<payment-methods>`: the ways to pay held, each with its name and whether it is used first, and adding one; on Tickets, and in `<way-booking>` before "Book"; reads `payments[]`; reacts to choosing the first one, to adding one (shown, not kept) and to picking one for a booking.
  - `<confirm-choice>`: defined in the foundation ([SPEC-01](SPEC-01_foundation.md), Architecture); reused.
- **Datasets:**
  - `tickets` (defined in the foundation): `[{id, title, covers, seller, entered, state, code, moves[{to, cost}], no_move}]`.
  - `config` (defined in the foundation): `signal` (`on`, `off`).
  - `payments` (defined here): `[{id, kind, name, first}]`: the ways to pay of the mock commuter (`kind`: card, debit, wallet).
  - `ways` (defined in the foundation): the way bought as one journey; `not_bookable` says why a way has nothing to book.
- **Simulated events:**
  - No signal: chosen in the configurator (Signal: On / No signal), not with a control on the page, since Marco asked on 2026-11-21 for no simulating controls on the pages; the ticket still shows, buying and moving wait and say so.
  - A move confirmed: the ticket shows its new run from the move chosen.

## When things go wrong

- **No signal:** the ticket is shown from what is kept on the device; buying and moving wait for the signal and say so [technology choice open].
- **Payment fails halfway:** no part of the journey is booked, and the commuter is told.
- **A seller does not allow moving:** the product says so before the commuter tries.

## Out of scope

Which fare fits the days travelled (SPEC-11); compensation (SPEC-12).

## Acceptance criteria

- **Given** a way with three legs from two sellers **when** the commuter books it **then** it is bought as one journey with one price.
- **Given** no signal in the underground **when** the commuter opens the ticket **then** a valid ticket is shown.
- **Given** five minutes to departure **when** the commuter moves the ticket to the next train **then** the cost is shown before they confirm.
- **Given** a ticket bought elsewhere **when** the commuter enters it **then** it is among the tickets held.
- **Given** a card and a wallet held, the card first **when** the commuter books a way **then** the card is proposed and the wallet can be picked instead.

## Open questions

Each question has its own file in [01_Open_Questions/](01_Open_Questions/00_Open_questions_index.md), with its chain to the research.

- **[OQ-23](01_Open_Questions/OQ-23_booking-and-paying-across-sellers.md)** How is a trip with legs from different sellers booked and paid in one step? [technology choice open] Research: ⚠ not supported.
- **[OQ-24](01_Open_Questions/OQ-24_moving-a-ticket-with-no-signal.md)** Can a ticket be shown and moved to another run when there is no signal? [technology choice open] Research: ⚠ not supported.

## Connections

- [US-F-04_one-search-one-booking.md](../02_Analysis/03_User_Stories/US-F-04_one-search-one-booking.md): a story this specification serves.
- [US-F-08_ticket-works-moment-needed.md](../02_Analysis/03_User_Stories/US-F-08_ticket-works-moment-needed.md): a story this specification serves.
- [F-04_one-search-one-booking.md](../02_Analysis/02_Features/F-04_one-search-one-booking.md): the feature behind story F-04.
- [F-08_ticket-works-moment-needed.md](../02_Analysis/02_Features/F-08_ticket-works-moment-needed.md): the feature behind story F-08.
- [HMW-06_help-verona-milan-commuter-booking.md](../03_Ideation/01_How_Might_We/HMW-06_help-verona-milan-commuter-booking.md): the problem question written from a story it serves.
- [HMW-07_let-verona-milan-commuter-he.md](../03_Ideation/01_How_Might_We/HMW-07_let-verona-milan-commuter-he.md): the problem question written from a story it serves.
- [HMW-11_let-verona-milan-commuter-still.md](../03_Ideation/01_How_Might_We/HMW-11_let-verona-milan-commuter-still.md): the problem question written from a story it serves.
- [SPEC-00_overview.md](SPEC-00_overview.md): the overview that lists this specification.
- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation it stands on.
- [SPEC-08_every-way-door-to-door.md](SPEC-08_every-way-door-to-door.md): provides elements this specification depends on.
- [SPEC-05_ways-out-when-the-trip-breaks.md](SPEC-05_ways-out-when-the-trip-breaks.md): depends on elements this specification provides.
- [SPEC-11_the-fare-that-fits-the-days.md](SPEC-11_the-fare-that-fits-the-days.md): depends on elements this specification provides.
- [SPEC-12_compensation-from-the-trip.md](SPEC-12_compensation-from-the-trip.md): depends on elements this specification provides.
- [OQ-23_booking-and-paying-across-sellers.md](01_Open_Questions/OQ-23_booking-and-paying-across-sellers.md): an open question this specification raises.
- [OQ-24_moving-a-ticket-with-no-signal.md](01_Open_Questions/OQ-24_moving-a-ticket-with-no-signal.md): an open question this specification raises.
