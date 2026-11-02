---
source: Claude
date: 2026-11-02 23:42
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, information, tools, usual-trip]
related: [SPEC-01_foundation.md, SPEC-02_real-state-of-the-run.md, SPEC-04_alerts-on-the-usual-trip.md, 04_Generated_User_Stories.md, 06_Chosen_concept.md]
---

# SPEC-05: The Usual Trip at a Glance

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

| Priority | Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- | --- |
| concept | [F-11](../02_Analysis/04_Generated_User_Stories.md) | a Dutch rail commuter (desk persona) | As a Dutch rail commuter (desk persona), on the way out of the door in the morning, I want the app to open on my usual trip with its state and its platforms, the change included, without searching, so that I know which platform to go to with no extra step. | All of it |
| concept | [F-24](../02_Analysis/04_Generated_User_Stories.md) | an Italian bus user (desk persona) | As an Italian bus user (desk persona), in a hurry to catch a bus, opening the app at the stop, I want the travel information shown at once, with nothing in front of it, so that a few seconds do not decide whether I catch the bus. | All of it |

These stories belong together because both ask that the first thing the product shows, at the moment it is opened, is the information for the trip being made now, with no step and nothing in front of it.

## Traceability

| | |
| --- | --- |
| **Priority** | concept |
| **Features** | [F-11](../02_Analysis/03_Generated_Features.md), [F-24](../02_Analysis/03_Generated_Features.md) |
| **Touchpoints** | [TP-012](../02_Analysis/02_Generated_Touchpoints.md), [TP-027](../02_Analysis/02_Generated_Touchpoints.md), [TP-062](../02_Analysis/02_Generated_Touchpoints.md), [TP-055](../02_Analysis/02_Generated_Touchpoints.md) |
| **Problem questions** | [HMW-14](../03_Ideation/01_How_might_we.md), [HMW-27](../03_Ideation/01_How_might_we.md) |
| **Concepts** | [C14-01](../03_Ideation/03_AI_Ideas.md), [C14-04](../03_Ideation/03_AI_Ideas.md), [C14-05](../03_Ideation/03_AI_Ideas.md), [C14-06](../03_Ideation/03_AI_Ideas.md), [C14-12](../03_Ideation/03_AI_Ideas.md), [C27-01](../03_Ideation/03_AI_Ideas.md), [C27-04](../03_Ideation/03_AI_Ideas.md), [C27-06](../03_Ideation/03_AI_Ideas.md), [C27-07](../03_Ideation/03_AI_Ideas.md), [C27-08](../03_Ideation/03_AI_Ideas.md) |
| **Families** | [FAM-15](../03_Ideation/04_Human+AI_Ideas.md), [FAM-09](../03_Ideation/04_Human+AI_Ideas.md), [FAM-01](../03_Ideation/04_Human+AI_Ideas.md), [FAM-04](../03_Ideation/04_Human+AI_Ideas.md), [FAM-08](../03_Ideation/04_Human+AI_Ideas.md) |
| **Stages covered** | before departure, first mile, transfer |
| **[Marks](../03_Ideation/05_Ideas_prioritization.md)** | C14-01 3·1·3, C14-04 3·3·3, C14-05 3·1·3, C14-06 2·1·3, C14-12 2·1·2, C27-01 3·3·3, C27-04 3·1·3, C27-06 3·1·2, C27-07 2·3·2, C27-08 3·1·3 |
| **Foundation** | Principles 4, 6; The things it deals with (usual trip, run, connection); States (run); Channels; Rules that hold everywhere |

## Description

When the commuter opens the product, the first thing shown is the next run of the trip they are making now: the usual trip at its usual time (C14-04), with its state, its platform and the platform of the change, and how long they have to reach it (C27-08). Nothing stands in front of it: no advertising, no notice, no search (C27-01). At the time they usually leave, the platform can also reach them before they open anything (C14-01, C27-06).

## Operating logic

- **Starts when:** the commuter opens the product, or the usual leaving time of a travel day arrives.
- **Needs to know:** the usual trips and their usual times and days (C14-04, C27-07); the time now; the real state and platforms of the next runs (SPEC-02); where the commuter is, if they share their position.
- **Rules:**
  1. On opening, choose the trip to show: the usual trip whose usual time is next today; if the commuter is at a stop or station of another usual trip, that one; if none applies, the next departures from the nearest stop if position is shared, otherwise the list of usual trips.
  2. Show, as the first and only thing until the commuter acts: the next run, its expected departure and state, its platform, the platform of the change if there is one, and the minutes left to reach it from where they are, if known (C27-08).
  3. Mark a platform as final or as still able to change (C14-12).
  4. Mark only what differs from the usual: a different platform, a delay, a cancellation (C14-06). What is as usual is shown plainly.
  5. Show nothing in front of this information: no advertising, no message, no request (C27-01). Anything else the product has to say comes after, or in a place the commuter goes to.
  6. At the usual leaving time on a travel day, send the platform and state on the commuter's chosen channel if they asked for it (C14-01, C27-06), and only the one fact (C14-05).
  7. If the commuter is in a hurry, the next departure that can still be reached comes first (C27-04) [not traced: how a hurry is recognised; here, it is the case when the minutes left are fewer than the walk].
- **States:** none of its own; it shows the states of the run.
- **The commuter receives:** on opening, one view with the next run of the trip they are making; on a travel day, the platform at leaving time if they asked.

## When things go wrong

- **No live data:** show the scheduled platform and time, marked as scheduled, and "no news since <time>" (Foundation).
- **Platform not yet given:** "platform not yet known", and when it is usually given [not traced].
- **The wrong trip is chosen:** the commuter switches to another usual trip in one step; the product does not learn from it unless they ask [not traced].
- **No usual trip saved:** show the nearest stop's next departures, or the search.

## Out of scope

- Alerts when something changes: SPEC-04.
- Signs at the station or a stop that show the platform or the next bus (C14-08, C27-05, FAM-11), and a fixed platform (C14-07, background): they need the place or the operator to change.
- Paying for no advertising (C27-03, [risky]).

## Acceptance criteria

- **Given** a usual trip at 7:42 on travel days **when** the commuter opens the product at 7:20 on a travel day **then** the first view is that run, its state, its platform and the change platform, with nothing in front.
- **Given** the platform differs from the usual one **when** the view is shown **then** the platform is marked as changed.
- **Given** the platform may still change **when** it is shown **then** it is marked as not final.
- **Given** the product has an announcement to make **when** the commuter opens it **then** the announcement is not shown before the trip information.
- **Given** the commuter is at a stop with no usual trip from it and shares their position **when** they open the product **then** the next departures from that stop come first, with the minutes left to reach each.

## Open questions

- How the product recognises a hurry (C27-04) [not traced].
- What the commuter sees first on a day that is not a travel day [not traced].

## Connections

- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation this specification builds on: Principles 4, 6; The things it deals with (usual trip, run, connection); States (run); Channels; Rules that hold everywhere.
- [SPEC-02_real-state-of-the-run.md](SPEC-02_real-state-of-the-run.md): named in this specification (Operating logic), where the two behaviours meet.
- [SPEC-04_alerts-on-the-usual-trip.md](SPEC-04_alerts-on-the-usual-trip.md): named in this specification (Out of scope), where the two behaviours meet.
- [04_Generated_User_Stories.md](../02_Analysis/04_Generated_User_Stories.md): the user stories this specification serves: F-11, F-24.
- [06_Chosen_concept.md](../03_Ideation/06_Chosen_concept.md): the chosen concept; this specification draws on its families FAM-15, FAM-09, FAM-01, FAM-04, FAM-08.
