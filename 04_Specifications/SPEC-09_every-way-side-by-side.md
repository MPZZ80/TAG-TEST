---
source: Claude
date: 2026-11-02 23:59
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, planning, mode-choice, tools, habit, ticket-carryover]
related: [SPEC-01_foundation.md, SPEC-06_ways-out-when-the-trip-breaks.md, SPEC-10_times-that-can-be-kept.md, SPEC-11_tickets-that-work-when-needed.md, 04_Generated_User_Stories.md, 06_Chosen_concept.md, 02_Human_Ideas.md, US-F-04_one-search-one-booking.md, US-F-10_car-against-train-office.md]
---

# SPEC-09: Every Way Side by Side, Door to Door

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

| Priority | Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- | --- |
| concept | [F-04](../02_Analysis/03_User_Stories/US-F-04_one-search-one-booking.md) | the Verona–Milan commuter | As the Verona–Milan commuter, booking three or four days ahead and finding the train he wanted sold out, I want every way to make the trip door to door shown with its time and price, and booked as one journey, so that he still finds a train at the time he wants. | Every way shown with its time and price. Booking as one journey is SPEC-11 |
| concept | [F-10](../02_Analysis/03_User_Stories/US-F-10_car-against-train-office.md) | the Como commuter | As the Como commuter, looking at the timetables to see whether he can go back from the car to the train, I want the train and the car compared door to door for a given day and departure, on time, cost and arrival home, so that he can see whether the train still brings him back to Como when the working day ends. | All of it |

These stories belong together because both are a commuter, before the trip, weighing every way of making it from door to door, across modes and sellers, on time, price and arrival.

## Traceability

| | |
| --- | --- |
| **Priority** | concept |
| **Features** | [F-04](../02_Analysis/02_Features/F-04_one-search-one-booking.md), [F-10](../02_Analysis/02_Features/F-10_car-against-train-office.md) |
| **Touchpoints** | [TP-005](../02_Analysis/01_Touchpoints/TP-005_booking-train-days-ahead.md), [TP-013](../02_Analysis/01_Touchpoints/TP-013_choosing-each-day-means.md), [TP-016](../02_Analysis/01_Touchpoints/TP-016_knowing-public-transport-option.md), [TP-019](../02_Analysis/01_Touchpoints/TP-019_choosing-slower-route-because.md), [TP-020](../02_Analysis/01_Touchpoints/TP-020_booking-online-without-comparing.md), [TP-021](../02_Analysis/01_Touchpoints/TP-021_deciding-combine-means-operators.md), [TP-022](../02_Analysis/01_Touchpoints/TP-022_searching-each-leg-different.md), [TP-065](../02_Analysis/01_Touchpoints/TP-065_topping-up-card-middle.md), [TP-009](../02_Analysis/01_Touchpoints/TP-009_keeping-car-after-pass.md), [TP-010](../02_Analysis/01_Touchpoints/TP-010_weighing-car-against-train.md), [TP-011](../02_Analysis/01_Touchpoints/TP-011_looking-timetables-decide-whether.md), [TP-044](../02_Analysis/01_Touchpoints/TP-044_taking-car-keys-late.md) |
| **Problem questions** | [HMW-06](../03_Ideation/01_How_might_we.md), [HMW-07](../03_Ideation/01_How_might_we.md), [HMW-13](../03_Ideation/01_How_might_we.md) |
| **Concepts** | [S06](../03_Ideation/02_Human_Ideas.md), [C06-01](../03_Ideation/03_AI_Ideas.md), [C06-10](../03_Ideation/03_AI_Ideas.md), [C07-01](../03_Ideation/03_AI_Ideas.md), [C07-02](../03_Ideation/03_AI_Ideas.md), [C07-03](../03_Ideation/03_AI_Ideas.md), [C07-04](../03_Ideation/03_AI_Ideas.md), [C07-05](../03_Ideation/03_AI_Ideas.md), [C07-09](../03_Ideation/03_AI_Ideas.md), [C07-11](../03_Ideation/03_AI_Ideas.md), [C07-12](../03_Ideation/03_AI_Ideas.md), [C13-01](../03_Ideation/03_AI_Ideas.md), [C13-02](../03_Ideation/03_AI_Ideas.md), [C13-03](../03_Ideation/03_AI_Ideas.md), [C13-04](../03_Ideation/03_AI_Ideas.md), [C13-07](../03_Ideation/03_AI_Ideas.md), [C13-10](../03_Ideation/03_AI_Ideas.md), [C13-12](../03_Ideation/03_AI_Ideas.md) |
| **Families** | [FAM-18](../03_Ideation/04_Human+AI_Ideas.md), [FAM-08](../03_Ideation/04_Human+AI_Ideas.md), [FAM-04](../03_Ideation/04_Human+AI_Ideas.md), [FAM-15](../03_Ideation/04_Human+AI_Ideas.md), [FAM-09](../03_Ideation/04_Human+AI_Ideas.md), [FAM-03](../03_Ideation/04_Human+AI_Ideas.md), [FAM-26](../03_Ideation/04_Human+AI_Ideas.md), [FAM-06](../03_Ideation/04_Human+AI_Ideas.md) |
| **Stages covered** | planning, whole journey |
| **[Marks](../03_Ideation/05_Ideas_prioritization.md)** | S06 3·1·2, C06-01 3·1·3, C06-10 3·1·3, C07-01 3·1·3, C07-02 1·1·3, C07-03 3·1·3, C07-04 2·3·3, C07-05 2·1·3, C07-09 1·3·2, C07-11 1·2·2, C07-12 2·3·3, C13-01 3·1·3, C13-02 3·1·3, C13-03 3·1·3, C13-04 3·1·3, C13-07 2·2·2, C13-10 2·3·3, C13-12 3·1·3 |
| **Foundation** | Principles 3, 6; The user (doors, contacts); The things it deals with (way, leg, run); Sources of information; Rules that hold everywhere |

## Description

Before the trip, for a given day and time, the product shows every way of making it from the commuter's door to the destination door, side by side: trains of every seller, buses, the car with its parking and fuel, combinations, and lifts from the commuter's saved contacts (C07-12), each with its door to door time, its price, its arrival, who runs each leg (C07-02), and for an office day, when the commuter would be home again in the evening (C13-03). When the train they wanted is sold out, it says which other way arrives closest to the time they wanted (C06-01). The Verona–Milan commuter wants a tool "che magari mi fa vedere tutto quanto, tutte le opzioni possibili" (which shows me everything, all the possible options); the Como commuter wants to see whether the train "lets him be back in Como when the working day ends".

## Operating logic

- **Starts when:** the commuter asks to plan a trip for a day, or opens a usual trip for a coming day.
- **Needs to know:** the doors, known once (C07-09); the day and the time to leave or arrive; for an office day, the time the working day ends; the schedule and availability of every seller (C06-10); road times and costs, parking and fuel [not traced: the cost basis]; the contacts who can give a lift and on which days (C07-12); the commuter's habits and rules (C07-04, SPEC-10); the times that allow for reality (SPEC-10, C13-12).
- **Rules:**
  1. Build every way from door to door for the day and time, including the first and last mile (C07-03).
  2. For each way show: leave the door, arrive at the door, door to door time, price, who runs and sells each leg (C07-02, C06-10), availability (seats left or sold out).
  3. Put the ways side by side (C07-01, C13-01); when two ways are close, say only what differs between them (C07-05).
  4. For an office day, add the return: the evening ways back after the working day, when the commuter would be home (C13-02, C13-03), and the latest they can leave the office to make the last good one (C13-04).
  5. When the way the commuter wanted is sold out, put first the way that arrives closest to the time they wanted (C06-01).
  6. Offer only ways that fit the commuter's rules and habits (C07-04), and show how many were set aside and why, so they can see them.
  7. When other commuters have reported how a way really goes (SPEC-03), show it beside the way (C07-11, C13-07).
  8. Price includes everything the way needs: tickets of every leg, parking, fuel or tolls [not traced: how fuel is costed].
- **States:** none of its own.
- **The commuter receives:** in the product, the ways side by side; for a sold-out train, the closest way first.

## When things go wrong

- **A seller's availability is unknown:** the way is shown, marked "availability unknown".
- **A price is unknown:** marked unknown, never estimated without saying so.
- **No way reaches the destination at that time:** say so, and show the nearest times that work.
- **Live data is missing for the day:** the plan uses the schedule and says so.

## Out of scope

- Booking: SPEC-11.
- Times that allow for real lateness, walks and the commuter's change rules: SPEC-10 (used here).
- Ways out during a broken trip: SPEC-06.
- A waiting list or held seat (C06-03, C06-05, C06-09, FAM-20, background), a person who assembles the journey (C06-11, C07-10, FAM-14, background), extra seats or evening departures (C06-04, C13-09, FAM-24, background), a pass for any train (C06-08, FAM-21, background), a trial week or mixed days (C13-05, C13-06, FAM-27).

## Acceptance criteria

- **Given** a day and a time to arrive **when** the commuter plans **then** every way door to door is shown side by side with time, price, arrival and who runs each leg.
- **Given** the train he wanted is sold out **when** he plans **then** the way arriving closest to his wanted time comes first.
- **Given** an office day ending at 18:00 **when** the Como commuter compares train and car **then** each shows when he would be home, and the latest he can leave the office for the train.
- **Given** a lift from a saved contact on that day **when** the ways are shown **then** the lift is among them.
- **Given** a way whose price is unknown **when** it is shown **then** the price is marked unknown.

## Open questions

- How the car is costed (fuel, wear, tolls, parking) [not traced].
- Whether ways set aside by the commuter's rules are hidden or shown greyed [not traced].
- The record of past trips and other users' comments that S06 relies on for delays (FAM-05, background).

## Connections

- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation this specification builds on: Principles 3, 6; The user (doors, contacts); The things it deals with (way, leg, run); Sources of information; Rules that hold everywhere.
- [SPEC-06_ways-out-when-the-trip-breaks.md](SPEC-06_ways-out-when-the-trip-breaks.md): named in this specification (Out of scope), where the two behaviours meet.
- [SPEC-10_times-that-can-be-kept.md](SPEC-10_times-that-can-be-kept.md): named in this specification (Operating logic, Out of scope), where the two behaviours meet.
- [SPEC-11_tickets-that-work-when-needed.md](SPEC-11_tickets-that-work-when-needed.md): named in this specification (User stories served, Out of scope), where the two behaviours meet.
- [04_Generated_User_Stories.md](../02_Analysis/04_Generated_User_Stories.md): the user stories this specification serves: F-04, F-10.
- [06_Chosen_concept.md](../03_Ideation/06_Chosen_concept.md): the chosen concept; this specification draws on its families FAM-18, FAM-08, FAM-04, FAM-15, FAM-09, FAM-03, FAM-26, FAM-06.
- [02_Human_Ideas.md](../03_Ideation/02_Human_Ideas.md): Marco's concepts this specification carries: S06.
- [US-F-04_one-search-one-booking.md](../02_Analysis/03_User_Stories/US-F-04_one-search-one-booking.md), [US-F-10_car-against-train-office.md](../02_Analysis/03_User_Stories/US-F-10_car-against-train-office.md): the user stories this specification serves, one file each.
