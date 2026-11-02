---
source: Claude
date: 2026-11-02 23:59
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, tools, planning, ticket-carryover]
related: [SPEC-01_foundation.md, SPEC-09_every-way-side-by-side.md, SPEC-06_ways-out-when-the-trip-breaks.md, 04_Generated_User_Stories.md, 06_Chosen_concept.md, SPEC-12_the-fare-that-fits-the-days.md, SPEC-13_compensation-from-the-trip.md, US-F-04_one-search-one-booking.md, US-F-08_ticket-works-moment-needed.md]
---

# SPEC-11: Tickets That Work When They Are Needed

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

| Priority | Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- | --- |
| concept | [F-04](../02_Analysis/03_User_Stories/US-F-04_one-search-one-booking.md) | the Verona–Milan commuter | As the Verona–Milan commuter, booking three or four days ahead and finding the train he wanted sold out, I want every way to make the trip door to door shown with its time and price, and booked as one journey, so that he still finds a train at the time he wants. | Booking as one journey. Showing every way is SPEC-09 |
| concept | [F-08](../02_Analysis/03_User_Stories/US-F-08_ticket-works-moment-needed.md) | the Verona–Milan commuter | As the Verona–Milan commuter, still in the underground five minutes before his train leaves, I want to buy, move and show a valid ticket in one step, up to departure and with no signal, so that he can take another train, or travel another day, without losing the ticket. | All of it |

These stories belong together because both are the ticket: getting it for the whole trip in one go, and being able to use, move or show it at the moment it is needed.

## Traceability

| | |
| --- | --- |
| **Priority** | concept |
| **Features** | [F-04](../02_Analysis/02_Features/F-04_one-search-one-booking.md), [F-08](../02_Analysis/02_Features/F-08_ticket-works-moment-needed.md) |
| **Touchpoints** | [TP-005](../02_Analysis/01_Touchpoints/TP-005_booking-train-days-ahead.md), [TP-020](../02_Analysis/01_Touchpoints/TP-020_booking-online-without-comparing.md), [TP-021](../02_Analysis/01_Touchpoints/TP-021_deciding-combine-means-operators.md), [TP-022](../02_Analysis/01_Touchpoints/TP-022_searching-each-leg-different.md), [TP-008](../02_Analysis/01_Touchpoints/TP-008_buying-pass-ticket-payment.md), [TP-071](../02_Analysis/01_Touchpoints/TP-071_buying-ticket-station-just.md), [TP-076](../02_Analysis/01_Touchpoints/TP-076_showing-ticket-inspector-gate.md), [TP-077](../02_Analysis/01_Touchpoints/TP-077_forgetting-check-fixed-route.md), [TP-103](../02_Analysis/01_Touchpoints/TP-103_moving-ticket-another-train.md) |
| **Problem questions** | [HMW-07](../03_Ideation/01_How_might_we.md), [HMW-11](../03_Ideation/01_How_might_we.md) |
| **Concepts** | [C07-06](../03_Ideation/03_AI_Ideas.md), [C11-02](../03_Ideation/03_AI_Ideas.md), [C11-11](../03_Ideation/03_AI_Ideas.md); background: [C11-01](../03_Ideation/03_AI_Ideas.md), [C11-04](../03_Ideation/03_AI_Ideas.md) |
| **Families** | [FAM-19](../03_Ideation/04_Human+AI_Ideas.md), [FAM-16](../03_Ideation/04_Human+AI_Ideas.md), [FAM-01](../03_Ideation/04_Human+AI_Ideas.md); background: [FAM-21](../03_Ideation/04_Human+AI_Ideas.md), [FAM-14](../03_Ideation/04_Human+AI_Ideas.md) |
| **Stages covered** | planning, before departure, main leg |
| **[Marks](../03_Ideation/05_Ideas_prioritization.md)** | C07-06 2·1·3, C11-02 3·1·2, C11-11 2·1·3; background C11-01 3·1·3, C11-04 3·1·3 |
| **Foundation** | Principle 5; The things it deals with (ticket, trip, way); Rules that hold everywhere |

## Description

The commuter books a whole door to door way as one journey, with one price (C07-06), and holds the tickets in the product so that they can be shown, moved to another run or another day, or bought, in one step, up to departure and with no signal (C11-01). They can say beforehand what should happen if they miss the train (C11-02), and are told when the last moment to move a ticket is coming (C11-11). The Verona–Milan commuter moves his ticket "even five minutes before departure, while he is still in the underground": "riesco sempre a spostarlo" (I always manage to move it).

## Operating logic

- **Starts when:** the commuter chooses a way to book (SPEC-09, SPEC-06), or holds a ticket for a trip.
- **Needs to know:** the way and its legs; the sellers of each leg and their conditions (price, change rules, deadlines); the tickets the commuter holds; what they want if they miss a run (C11-02).
- **Rules:**
  1. Book every leg of the chosen way in one step, with one total price, after the commuter's yes (C07-06).
  2. If a leg cannot be booked, say so before anything is paid, and let the commuter book the rest or stop.
  3. Keep every ticket where it can be shown with no signal (C11-01) [technology choice open].
  4. Moving a ticket: show the runs and days it can move to, with any cost, and move it in one step, up to the deadline the seller sets.
  5. With no signal, a move is recorded and completed as soon as there is a signal; the commuter is told whether it succeeded [technology choice open; whether a move recorded offline is honoured is the seller's rule, not traced].
  6. Tell the commuter when the last moment to move a ticket is near and they are not yet at the station (C11-11) [not traced: how near].
  7. If the commuter set what to do when they miss the train (for example "the next one"), offer that move as soon as the run leaves without them; never move without their yes (Foundation, Principle 5).
- **States:** a ticket is `held` → `moved` (to another run) or `used` or `expired`; a booking is `booking` → `booked` or `partly booked` or `failed`.
- **The commuter receives:** the booking confirmation with one total price; the tickets, available with no signal; the moves and their result; a warning before the move deadline.

## When things go wrong

- **One seller fails during booking:** the commuter is told which leg failed; nothing is charged for a booking they did not confirm [not traced: how payment is split].
- **No signal at the deadline:** the move is recorded; if the seller refuses it later, the commuter is told at once.
- **The ticket cannot be shown** (no battery, no signal): [not traced] what the commuter can do; not in the notes.
- **The commuter does not answer the missed-train offer:** nothing is moved.

## Out of scope

- Comparing the ways: SPEC-09.
- Whole-trip protection when a leg fails (C07-07, [risky]), a duty to sell the trip as one (C07-08, C11-08, FAM-25), credit for a missed train (C11-07, FAM-22, background), a ticket that moves by itself (C11-04, background) beyond the offer in rule 7, open-time carnets and any-train tickets (C11-03, C11-06, FAM-21, background), staff accepting the missed train's ticket (C11-09, FAM-12), signal in the underground (C11-10, [risky]).

## Acceptance criteria

- **Given** a way with a train and a bus from two sellers **when** the commuter books **then** both are booked after one confirmation, with one total price.
- **Given** one leg cannot be booked **when** the commuter confirms **then** they are told which before paying.
- **Given** no signal **when** the commuter opens a ticket **then** it is shown.
- **Given** five minutes before departure in the underground **when** the commuter moves the ticket to the next train **then** the move is recorded at once and confirmed when there is a signal.
- **Given** the commuter set "the next one if I miss it" **when** the train leaves without them **then** the move is offered, and done only on their yes.

## Open questions

- Whether sellers accept booking through one place and one payment (FAM-19, feasible 1) [technology choice open].
- Whether a move made with no signal is honoured [not traced].
- What happens when the ticket cannot be shown at all (TP-076: no signal, a slow code, a flat battery) [not traced].

## Connections

- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation this specification builds on: Principle 5; The things it deals with (ticket, trip, way); Rules that hold everywhere.
- [SPEC-09_every-way-side-by-side.md](SPEC-09_every-way-side-by-side.md): named in this specification (User stories served, Operating logic, Out of scope), where the two behaviours meet.
- [SPEC-06_ways-out-when-the-trip-breaks.md](SPEC-06_ways-out-when-the-trip-breaks.md): named in this specification (Operating logic), where the two behaviours meet.
- [04_Generated_User_Stories.md](../02_Analysis/04_Generated_User_Stories.md): the user stories this specification serves: F-04, F-08.
- [06_Chosen_concept.md](../03_Ideation/06_Chosen_concept.md): the chosen concept; this specification draws on its families FAM-19, FAM-16, FAM-01, FAM-21, FAM-14.
- [SPEC-12_the-fare-that-fits-the-days.md](SPEC-12_the-fare-that-fits-the-days.md), [SPEC-13_compensation-from-the-trip.md](SPEC-13_compensation-from-the-trip.md): the specifications that name this one where their behaviours meet.
- [US-F-04_one-search-one-booking.md](../02_Analysis/03_User_Stories/US-F-04_one-search-one-booking.md), [US-F-08_ticket-works-moment-needed.md](../02_Analysis/03_User_Stories/US-F-08_ticket-works-moment-needed.md): the user stories this specification serves, one file each.
