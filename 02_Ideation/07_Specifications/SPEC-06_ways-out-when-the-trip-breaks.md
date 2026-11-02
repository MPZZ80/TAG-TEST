---
source: Claude
date: 2026-11-02 21:32
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, disruption, mode-choice, no-alternative, crowding, unreliable-service]
related: [SPEC-01_foundation.md, SPEC-02_real-state-of-the-run.md, SPEC-03_travellers-report.md, SPEC-07_those-waiting-are-told.md, SPEC-09_every-way-side-by-side.md, Generated_User_Stories.md, 06_Chosen_concept.md, 02_Human_Ideas.md]
---

# SPEC-06: Ways Out When the Trip Breaks

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

| Priority | Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- | --- |
| concept | [F-02](../../01_Research/Analysis/Generated_User_Stories.md) | a teenager (desk persona) | As a teenager (desk persona), waiting late in the evening at a stop for a connecting bus that does not come, I want to see the ways that still run and can be reached from where I am, valid on my ticket or not, with arrival time and cost, so that I know from what point it makes sense to call home and be fetched. | All of it except telling home, which is SPEC-07 |
| concept | [F-19](../../01_Research/Analysis/Generated_User_Stories.md) | the outskirts hybrid worker | As the outskirts hybrid worker, at her station when her train is cancelled and the only other train is the packed one to Cadorna, I want to know how full the next services are expected to be, so that she can choose between waiting and a train where "you never get a seat". | All of it; reports of how full a run is now come from SPEC-03 |

These stories belong together because both are the moment the planned trip has broken at a stop or station, and the commuter has to choose among the ways still open, with what each costs them: time, money, a seat, a lift from home.

## Traceability

| | |
| --- | --- |
| **Priority** | concept |
| **Features** | [F-02](../../01_Research/Analysis/Generated_Features.md), [F-19](../../01_Research/Analysis/Generated_Features.md) |
| **Touchpoints** | [TP-026](../../01_Research/Analysis/Generated_Touchpoints.md), [TP-084](../../01_Research/Analysis/Generated_Touchpoints.md), [TP-093](../../01_Research/Analysis/Generated_Touchpoints.md), [TP-094](../../01_Research/Analysis/Generated_Touchpoints.md), [TP-095](../../01_Research/Analysis/Generated_Touchpoints.md), [TP-097](../../01_Research/Analysis/Generated_Touchpoints.md), [TP-098](../../01_Research/Analysis/Generated_Touchpoints.md), [TP-099](../../01_Research/Analysis/Generated_Touchpoints.md), [TP-100](../../01_Research/Analysis/Generated_Touchpoints.md), [TP-101](../../01_Research/Analysis/Generated_Touchpoints.md), [TP-102](../../01_Research/Analysis/Generated_Touchpoints.md), [TP-107](../../01_Research/Analysis/Generated_Touchpoints.md), [TP-072](../../01_Research/Analysis/Generated_Touchpoints.md) |
| **Problem questions** | [HMW-03](../01_How_might_we.md), [HMW-04](../01_How_might_we.md), [HMW-22](../01_How_might_we.md), [HMW-07](../01_How_might_we.md) |
| **Concepts** | [S06](../02_Human_Ideas.md), [C03-01](../03_AI_Ideas.md), [C03-02](../03_AI_Ideas.md), [C03-03](../03_AI_Ideas.md), [C03-11](../03_AI_Ideas.md), [C04-01](../03_AI_Ideas.md), [C04-02](../03_AI_Ideas.md), [C04-06](../03_AI_Ideas.md), [C22-02](../03_AI_Ideas.md), [C22-03](../03_AI_Ideas.md), [C22-05](../03_AI_Ideas.md), [C22-06](../03_AI_Ideas.md); background: [C03-04](../03_AI_Ideas.md), [C22-01](../03_AI_Ideas.md) |
| **Families** | [FAM-18](../04_Human+AI_Ideas.md), [FAM-08](../04_Human+AI_Ideas.md), [FAM-04](../04_Human+AI_Ideas.md), [FAM-16](../04_Human+AI_Ideas.md), [FAM-03](../04_Human+AI_Ideas.md), [FAM-15](../04_Human+AI_Ideas.md); background: [FAM-10](../04_Human+AI_Ideas.md), [FAM-05](../04_Human+AI_Ideas.md) |
| **Stages covered** | disruption, first mile, transfer, last mile |
| **[Marks](../05_Ideas_prioritization.md)** | S06 3·1·2, C03-01 3·1·3, C03-02 3·1·3, C03-03 2·1·3, C03-11 3·3·2, C04-01 3·1·3, C04-02 2·1·3, C04-06 3·3·2, C22-02 1·1·3, C22-03 3·2·3, C22-05 3·1·3, C22-06 2·3·2; background C03-04 2·1·3, C22-01 3·1·3 |
| **Foundation** | Principles 2, 3, 5; The user (rules, preferences); The things it deals with (way, ticket, run); States (trip: broken); Sources of information; Rules that hold everywhere |

## Description

When the trip breaks (a run is cancelled, a connection is lost, a bus does not come), the product shows, from where the commuter is, every way that still runs and can be reached, public and private, side by side, each with its arrival, its cost, whether the ticket they hold is valid on it, how full it is expected to be, and how recent the confirmation is that it runs (Marco's concept S06). It then gives one answer: "wait", "take this", or "call home now: after <time> no way reaches home" (C03-01, C04-01, C22-05). The teenager waiting for a bus that does not come asks "ab wann macht es Sinn, sich abholen zu lassen?" (from what point does it make sense to be fetched?); the outskirts hybrid worker chooses between waiting and a packed train where "non si sta mai seduti" (you never get a seat).

## Operating logic

- **Starts when:** the trip becomes `broken` (Foundation, States): a run of the trip is cancelled (SPEC-02), a connection is lost (SPEC-08), a run is past the commuter's limit (SPEC-02), or a run expected at a stop has not been seen past a set wait [not traced: the wait]. Also when the commuter asks for ways out.
- **Needs to know:** where the commuter is (shared position, or the stop or station of the trip they are at); the destination (the door of the trip); the time now; the runs still to come from there and nearby, with their real state (SPEC-02); private ways the commuter has saved (a lift from a contact, taxi, own car); the tickets they hold; how full the runs are now (SPEC-03) and are expected to be (C22-01, background); the commuter's preference, seat or time (C22-06); the limit and fallback they agreed beforehand (C03-11, C04-06).
- **Rules:**
  1. Build every way from where the commuter is to the destination, using the runs still to come and the saved private ways.
  2. Keep only ways that can be reached in time from where the commuter is.
  3. For each way show: departure, arrival at the door, cost, whether the ticket held is valid on it (C03-04), how full it is now and is expected to be, and when its running was last confirmed and by which source (C03-03, C22-02).
  4. Show the ways side by side, ordered by arrival at the door; if the commuter chose seat first, by expected fullness among those that arrive within their margin [not traced: the margin].
  5. Give one answer above the list (C03-01, C04-01, C22-05):
     - "wait for <run>" when the run they were waiting for is still expected and arrives first;
     - "take <way>" when another way is better by the commuter's preference;
     - "call home now" when the last way that reaches home leaves before the expected run, or when no way is confirmed and the latest way that reaches home leaves within a set time (C03-02).
  6. If the commuter agreed a limit or fallback beforehand (for example "if no bus by 22:40, call home"), apply it: when the limit is reached, the answer is the fallback (C03-11, C04-06).
  7. Offer to tell a contact (SPEC-07). Do not book or change anything without the commuter's yes (Foundation, Principle 5).
  8. Update the ways and the answer when a fact changes; tell the commuter if the answer changes.
- **States:** for this behaviour, `looking` (ways shown), `chosen` (the commuter picked a way; the trip goes back to `under way`), `abandoned` (the commuter ends the trip, for example being fetched).
- **The commuter receives:** a message on their channel when the trip breaks, with the answer; in the product, the answer and the ways side by side.

## When things go wrong

- **No way confirmed as running:** say so; show the scheduled ways marked as scheduled, and the latest that would reach home.
- **Position not shared and the stop unknown:** ask the commuter where they are, in one step.
- **Ticket validity unknown:** say "validity unknown" on that way.
- **Fullness unknown:** say so; never show a guess as a figure.
- **A way disappears while the commuter is looking** (it leaves or is cancelled): it is removed and the answer recomputed.
- **The commuter does not respond:** nothing is booked; at the agreed limit, the fallback is shown again.

## Out of scope

- Telling home or a contact: SPEC-07.
- Booking a way: SPEC-11.
- Comparing ways before the trip: SPEC-09.
- A helpline person (C03-06, FAM-12, background), a guaranteed last ride or refunded lift (C03-09, C04-08, FAM-22, background, [risky]), a shared lift from the same stop (C03-10, [risky]), a duty to declare missing runs (C03-12, C04-09, FAM-25).

## Acceptance criteria

- **Given** a bus that should have passed 15 minutes ago and has not been seen **when** the set wait is over **then** the commuter receives the ways that still reach home, side by side, with one answer.
- **Given** the last way home leaves at 23:05 **when** it is 22:55 and the bus is still not seen **then** the answer is "call home now", with the time after which no way reaches home.
- **Given** a cancelled train and a packed next train **when** the commuter chose seat first **then** the way with seats expected, arriving within the margin, comes first, and the packed train shows its fullness and source.
- **Given** a way on which the ticket held is not valid **when** it is shown **then** it says so, with its cost.
- **Given** an agreed fallback "if no bus by 22:40, call home" **when** it is 22:40 **then** the answer is "call home now".
- **Given** the commuter chooses a way **when** they confirm **then** the trip continues on that way; nothing was booked before they confirmed.

## Open questions

- **Cost on each way:** the cost shown has no sought outcome of its own in the notes (Generated_User_Stories, "A part with no traced value of its own"). Left in for Marco to decide.
- The wait after which a bus not seen counts as not coming, the margin for seat first, the time before the last way at which to say "call home" [not traced].
- **Teenagers:** whether a minor can use the product alone, and who sets the family limit [not traced].
- Expected fullness and past delays of the alternatives rest on a record of past trips and on comments from other users (assumptions of S06; FAM-05 background).
