---
source: Claude
date: 2026-11-02 23:38
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, information, disruption, first-last-mile, late-info]
related: [SPEC-01_foundation.md, SPEC-02_real-state-of-the-run.md, SPEC-06_ways-out-when-the-trip-breaks.md, SPEC-08_the-connection-ahead.md, 04_Generated_User_Stories.md, 06_Chosen_concept.md, 02_Human_Ideas.md]
---

# SPEC-07: Those Waiting Are Told

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

| Priority | Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- | --- |
| concept | [F-09](../01_Research/06_Analysis/04_Generated_User_Stories.md) | the Verona–Milan commuter | As the Verona–Milan commuter, on the train back to Verona with his father coming to fetch him at the station, I want to share the train time and the live arrival, with a confirmation of any delay, with the person driving or waiting, so that the person who comes to the station knows when he arrives. | All of it |
| concept | [F-06](../01_Research/06_Analysis/04_Generated_User_Stories.md) | the Como commuter | As the Como commuter, on the 8:23 towards Lugano as the delay grows towards 12 minutes, I want to be told before reaching the change whether the connection still holds and, if not, the next one that does, so that he can warn the people he is meeting before he arrives. | Warning the people he is meeting. Whether the connection holds is SPEC-08 |
| concept | [F-02](../01_Research/06_Analysis/04_Generated_User_Stories.md) | a teenager (desk persona) | As a teenager (desk persona), waiting late in the evening at a stop for a connecting bus that does not come, I want to see the ways that still run and can be reached from where I am, valid on my ticket or not, with arrival time and cost, so that I know from what point it makes sense to call home and be fetched. | Calling home: home sees the same state. The ways out are SPEC-06 |

These stories belong together because in each someone else depends on the commuter's arrival (a father fetching him, colleagues he is meeting, a parent who would drive out), and that person should know the arrival without the commuter having to manage it.

## Traceability

| | |
| --- | --- |
| **Priority** | concept |
| **Features** | [F-09](../01_Research/06_Analysis/03_Generated_Features.md), [F-06](../01_Research/06_Analysis/03_Generated_Features.md), [F-02](../01_Research/06_Analysis/03_Generated_Features.md) |
| **Touchpoints** | [TP-004](../01_Research/06_Analysis/02_Generated_Touchpoints.md), [TP-048](../01_Research/06_Analysis/02_Generated_Touchpoints.md), [TP-075](../01_Research/06_Analysis/02_Generated_Touchpoints.md), [TP-106](../01_Research/06_Analysis/02_Generated_Touchpoints.md), [TP-107](../01_Research/06_Analysis/02_Generated_Touchpoints.md), [TP-084](../01_Research/06_Analysis/02_Generated_Touchpoints.md) |
| **Problem questions** | [HMW-12](../02_Ideation/01_How_might_we.md), [HMW-09](../02_Ideation/01_How_might_we.md), [HMW-04](../02_Ideation/01_How_might_we.md), [HMW-03](../02_Ideation/01_How_might_we.md) |
| **Concepts** | [S04](../02_Ideation/02_Human_Ideas.md), [C12-01](../02_Ideation/03_AI_Ideas.md), [C12-02](../02_Ideation/03_AI_Ideas.md), [C12-04](../02_Ideation/03_AI_Ideas.md), [C12-05](../02_Ideation/03_AI_Ideas.md), [C12-06](../02_Ideation/03_AI_Ideas.md), [C12-07](../02_Ideation/03_AI_Ideas.md), [C12-08](../02_Ideation/03_AI_Ideas.md), [C12-12](../02_Ideation/03_AI_Ideas.md), [C09-05](../02_Ideation/03_AI_Ideas.md), [C04-05](../02_Ideation/03_AI_Ideas.md) |
| **Families** | [FAM-13](../02_Ideation/04_Human+AI_Ideas.md), [FAM-04](../02_Ideation/04_Human+AI_Ideas.md), [FAM-06](../02_Ideation/04_Human+AI_Ideas.md), [FAM-16](../02_Ideation/04_Human+AI_Ideas.md) |
| **Stages covered** | main leg, last mile, disruption |
| **[Marks](../02_Ideation/05_Ideas_prioritization.md)** | S04 3·2·3, C12-01 3·1·3, C12-02 3·1·3, C12-04 3·1·3, C12-05 3·2·3, C12-06 3·1·3, C12-07 2·1·3, C12-08 2·1·3, C12-12 2·3·2, C09-05 3·2·3, C04-05 2·1·3 |
| **Foundation** | Principles 2, 5; The user (contacts); The things it deals with (trip, contact); States (trip, run); Channels (message to a contact); Rules that hold everywhere (consent of contacts, never shared) |

## Description

The commuter adds a contact to a trip, or to the return of their usual trip, and the contact then knows the arrival without the commuter acting: the train, the live arrival, any delay and whether it is confirmed or estimated, and for whoever drives, the time to set off (C12-06). The commuter can also pass on an update in one step (Marco's concept S04, C12-05). It is for the Verona–Milan commuter, whose father fetches him at Verona ("for twenty years his father, who fetches him, has said the trains are always late"), and for the Como commuter, who warns the people he is meeting when he knows the connection is lost.

## Operating logic

- **Starts when:** the commuter adds a contact to a trip, or sets a standing contact for a usual trip (for example the return on travel days), or sends an update in one step.
- **Needs to know:** the contact and the channel they accepted; what the contact may see (the run, the live arrival, delays); the trip's real arrival (SPEC-02) and connections (SPEC-08); for a contact who drives, how long they take to reach the station, as the commuter or contact states it (C12-06) [not traced: who enters it]; any plan agreed beforehand, for example "over 20 minutes late, I take the bus" (C12-12).
- **Rules:**
  1. **Automatic:** when the trip is `under way`, send the contact the run and expected arrival; send again whenever the expected arrival changes by more than a set step, or the run is cancelled, or a connection is lost (C12-02).
  2. Every message says whether the time is confirmed or estimated, and its source (C12-07).
  3. For a contact who drives, send the time to set off, not only the arrival (C12-06), allowing for the usual lateness when the commuter chose it (C12-08); while they drive, by voice (C12-04).
  4. **One step:** the commuter can send the current arrival, or a ready message with the new arrival after a lost connection, in one step (C12-05, C09-05). The message is ready before they ask, when a connection is lost or the delay passes their threshold.
  5. **Seen together:** a contact can open the trip and see the same state as the commuter until the trip ends (C12-01, C04-05).
  6. Apply the agreed plan: when its condition is met, tell the contact what the plan says (C12-12).
  7. Every message says on whose behalf it is sent (S04).
  8. Stop when the trip is `completed` or `abandoned`; tell the contact it ended.
- **States:** for each contact on a trip: `invited` → `accepted` → `following` → `ended`; or `declined`.
- **The commuter receives:** confirmation that the contact accepted, and that each automatic message was sent. **The contact receives:** the arrival and its changes, the time to set off if they drive, the end of the trip.

## When things go wrong

- **The contact has not accepted:** nothing is sent to them; the commuter is told and can send in one step through their own means [not traced].
- **No live data:** the contact receives the scheduled arrival marked as scheduled, and "no news since <time>".
- **A message cannot be delivered:** the commuter is told.
- **The commuter forgets to end the trip:** it ends at arrival at the door, or after a set time [not traced].
- **The trip breaks:** the contact is told, and is told the new way when the commuter chooses one (SPEC-06).

## Out of scope

- Whether the connection holds and the next one: SPEC-08.
- The ways out and the "call home" answer: SPEC-06.
- A confirmation that he actually boarded (C12-03), a fetching rota (C12-10, [risky]), a pick-up waiting point at the station (C12-09, FAM-11), the people he is meeting told without his consent (C09-04, [risky]).

## Acceptance criteria

- **Given** the father is a standing contact for the return on travel days **when** the commuter's return train leaves **then** the father receives the train and its expected arrival, with its source.
- **Given** the expected arrival moves by more than the set step **when** the trip is under way **then** the father receives the new arrival, marked confirmed or estimated.
- **Given** the father drives 15 minutes to the station **when** the arrival changes **then** he receives the new time to set off.
- **Given** the connection at Lugano is lost **when** the commuter opens the product **then** a message with the new arrival is ready to send in one step.
- **Given** a contact who has not accepted **when** the commuter shares a trip **then** nothing reaches the contact and the commuter is told.
- **Given** the trip is completed **when** the contact looks **then** they no longer see it.

## Open questions

- That the contact accepts messages from the service, and that a message sent "in the user's name" still comes from the service: assumptions of S04 [not traced].
- The step of change that sends a new message; who enters the drive time of the contact; when a forgotten trip ends [not traced].
- Whether the teenager's family should see the trip by default [not traced].
