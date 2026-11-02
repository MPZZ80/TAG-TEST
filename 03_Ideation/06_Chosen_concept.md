---
source: Claude
date: 2026-11-02 23:52
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, information, disruption]
related: [05_Ideas_prioritization.md, 04_Human+AI_Ideas.md, 03_AI_Ideas.md, 02_Human_Ideas.md, 01_How_might_we.md, 04_Generated_User_Stories.md, 03_Generated_Features.md, SPEC-00_overview.md, SPEC-01_foundation.md, SPEC-02_real-state-of-the-run.md, SPEC-03_travellers-report.md, SPEC-04_alerts-on-the-usual-trip.md, SPEC-05_usual-trip-at-a-glance.md, SPEC-06_ways-out-when-the-trip-breaks.md, SPEC-07_those-waiting-are-told.md, SPEC-08_the-connection-ahead.md, SPEC-09_every-way-side-by-side.md, SPEC-10_times-that-can-be-kept.md, SPEC-11_tickets-that-work-when-needed.md, SPEC-12_the-fare-that-fits-the-days.md, SPEC-13_compensation-from-the-trip.md, SPEC-14_the-station-ahead.md, SPEC-15_stop-approaching.md, SPEC-16_the-route-stays-with-the-driver.md, SPEC-17_sessions-still-running.md]
---

# Chosen Concept: The Whole Commute, Told As It Is

**Draft.** Marco chose to keep all 27 families of [04_Human+AI_Ideas.md](04_Human+AI_Ideas.md) in the concept, with nine of them in the background: FAM-05, FAM-10, FAM-12, FAM-14, FAM-20, FAM-21, FAM-22, FAM-23 and FAM-24. This file drafts that choice; it does not revisit it.

- **Main families (18):** they make the concept. Their concepts shape the behaviour, and the specifications start from them.
- **Background families (9):** they stay in the concept and are not cut. They come after the main families: a background concept is used where no main concept meets a story's need, and it does not change a behaviour a main concept sets.
- **The two unclassified concepts** of `04_Human+AI_Ideas.md`, C21-10 and C22-08, belong to no family and are not part of the concept.

## The concept

A service that knows the commuter's usual door to door trip and tells them, and the people who depend on them, how that trip really stands: the delay measured from where the vehicle really is and reported by the travellers on the line, with its source and a time that allows for reality, said as early as it is known and given as one answer to act on. The place itself shows it too. When the trip breaks, every way still open is shown side by side, the fallbacks the commuter settled beforehand come into play, and nothing changes for them without their consent. Travellers carry part of it together, the trip can be bought as one, rules and rights oblige operators to act, and the trip or the habit can change so that the problem does not arise.

It is for the commuters of the stories in [04_Generated_User_Stories.md](../02_Analysis/04_Generated_User_Stories.md), first those of the interviews:

- **The Como commuter**, on the platform while the delay on the board grows (F-01): "a 20 inizio a sentire la puzza, a 25 la puzza si fa più forte e aspetto solo che appaia la scritta annullato" (at 20 I begin to smell it, at 25 the smell is stronger and I only wait for the word cancelled to appear).
- **The single-line commuter**, during the seven minutes he drives to the station, who wants to "wait in the warm car" if the train is late (F-03).
- **The Verona–Milan commuter**, who wants "tutte le opzioni possibili" (all the possible options) before the trip (F-04), and whose father, coming to fetch him, should know when he arrives (F-09).
- **The outskirts hybrid worker**, on a full train at peak hour (F-19).

The desk personas of the other stories are served too: see "The questions behind it".

## Main families

Marks are those of "Marks by family" in [05_Ideas_prioritization.md](05_Ideas_prioritization.md): valuable · feasible · relevant, 0 to 3. HMW are the questions the family's concepts answer; for Marco's concepts, the questions assigned in `04_Human+AI_Ideas.md`.

| ID | family | what it brings to the concept | concepts | Marco's | HMW | features | marks |
| --- | --- | --- | --- | --- | --- | --- | --- |
| FAM-01 | Told where they are | The news reaches the commuter on the channel and at the moment they chose | 17 | S01 | 01, 05, 11, 14, 21, 23, 24, 26, 27 | F-01, F-03, F-08, F-11, F-18, F-20, F-21, F-23, F-24 | 3 · 1 · 3 |
| FAM-02 | Delay measured from the real position | The delay comes from where the vehicle really is | 3 | S02 | 01 | F-01 | 3 · 1 · 3 |
| FAM-03 | Travellers report | People on the line say what they see, and the others read it | 27 | S03 | 01–05, 07–10, 13–18, 20, 22–25, 27 | F-01–F-07, F-10–F-13, F-14a, F-15, F-17a, F-19–F-22, F-24 | 2 · 2 · 3 |
| FAM-04 | The source made visible | Every fact says who gave it, how old it is and whether it is final | 13 | | 01–04, 07–09, 12, 14, 16, 17, 22 | F-01, F-02, F-04–F-06, F-09, F-11, F-13, F-14a, F-19 | 2 · 1 · 3 |
| FAM-06 | Times that allow for reality | Times include the usual lateness, crowds and real margins | 9 | | 08, 10, 12, 13, 16 | F-05, F-07, F-09, F-10, F-13 | 2 · 1 · 3 |
| FAM-07 | Told sooner | What is known, such as a strike or works, is said earlier | 7 | S05 | 05 | F-03 | 2 · 1 · 2 |
| FAM-08 | One answer, not data | One verdict to act on, in place of data to weigh | 28 | | 01–06, 08–10, 13, 15, 16, 18–20, 22–27 | F-01–F-07, F-10, F-12, F-13, F-15, F-16, F-17a, F-19–F-24 | 3 · 1 · 3 |
| FAM-09 | Less in the way | Only the fact that matters is shown | 6 | | 07, 14, 27 | F-04, F-11, F-24 | 2 · 1 · 3 |
| FAM-11 | The place shows it | The platform, stop, vehicle or car park carries the information | 10 | | 01, 03, 05, 08, 12, 14, 17, 26, 27 | F-01–F-03, F-05, F-09, F-11, F-14a, F-23, F-24 | 2 · 1 · 3 |
| FAM-13 | Those depending on them are told | Whoever waits for the commuter knows without the commuter managing it | 13 | S04 | 03, 04, 09, 12, 20, 21 | F-02, F-06, F-09, F-17a, F-18 | 3 · 1 · 3 |
| FAM-15 | It knows the traveller | The usual trip, needs and limits are kept, so they are not said again | 15 | | 05, 07–10, 14, 15, 17, 21–23, 26, 27 | F-03–F-07, F-11, F-12, F-14a, F-18–F-20, F-23, F-24 | 2 · 3 · 2 |
| FAM-16 | Settled beforehand | A rule or fallback is agreed before the moment | 8 | | 02–04, 09, 11, 12, 21, 26 | F-01, F-02, F-06, F-08, F-09, F-18, F-23 | 2 · 3 · 2 |
| FAM-17 | The decision stays with the person | Nothing changes without the commuter's consent | 2 | | 17 | F-14a | 3 · 1 · 3 |
| FAM-18 | All ways side by side | Every way of making the trip compared, door to door | 7 | S06 | 06, 07, 13 | F-04, F-10 | 3 · 1 · 3 |
| FAM-19 | The trip as one purchase | The whole trip with one price and one protection | 2 | | 07 | F-04 | 1 · 1 · 1 |
| FAM-25 | Rules and rights | A duty or a right obliges someone to act | 19 | | 01–05, 07, 09–11, 15–17, 19, 21, 23–25, 27 | F-01–F-04, F-06–F-08, F-12, F-13, F-14a, F-16, F-18, F-20–F-22, F-24 | 2 · 1 · 1 |
| FAM-26 | Travellers carry it together | Lifts, tickets, company or tasks shared on the same way | 15 | | 03, 04, 06, 07, 11–13, 15, 17–20, 26 | F-02, F-04, F-08–F-10, F-12, F-14a, F-15–F-17a, F-23 | 1 · 2 · 3 |
| FAM-27 | Change the trip or the habit | The trip, hour or habit changes, so the moment does not arise | 17 | | 02, 04–06, 09, 12, 13, 15, 18, 20, 22, 24–26 | F-01–F-04, F-06, F-09, F-10, F-12, F-15, F-17a, F-19, F-21–F-23 | 1 · 1 · 0 |

## Background families

Marco's choice; reason not stated.

| ID | family | what it would bring | concepts | HMW | features | marks |
| --- | --- | --- | --- | --- | --- | --- |
| FAM-05 | Honest uncertainty | A range, a likelihood or a past record in place of one firm figure | 12 | 01, 02, 04, 06, 08, 10, 16, 18, 22 | F-01, F-02, F-04, F-05, F-07, F-13, F-15, F-19 | 2 · 1 · 3 |
| FAM-10 | What lies ahead, known beforehand | The state of the station, road or car park before getting there | 13 | 03, 10, 17, 18, 20, 23, 24, 26 | F-02, F-07, F-14a, F-15, F-17a, F-20, F-21, F-23 | 3 · 1 · 3 |
| FAM-12 | A person on the spot | Staff or someone reachable answers or decides at that moment | 18 | 01–04, 08, 09, 11, 14, 16, 18, 20, 22–24, 26, 27 | F-01, F-02, F-05, F-06, F-08, F-11, F-13, F-15, F-17a, F-19–F-21, F-23, F-24 | 2 · 1 · 3 |
| FAM-14 | The step done for them | The service or a person does the step, such as rebooking or claiming | 12 | 06, 07, 11, 15, 19, 21, 23 | F-04, F-08, F-12, F-16, F-18, F-20 | 3 · 1 · 3 |
| FAM-20 | A place kept | A seat or a parking place is held before the moment | 6 | 06, 18, 22 | F-04, F-15, F-19 | 3 · 1 · 3 |
| FAM-21 | Prices and tickets that fit the real use | What is paid follows how the person really travels | 13 | 06, 11, 15, 17, 18, 21 | F-04, F-08, F-12, F-14a, F-15, F-18 | 2 · 1 · 1 |
| FAM-22 | Money covers the failure | Money or a paid alternative carries the cost when it goes wrong | 15 | 03, 04, 08, 10, 11, 16, 17, 19, 21, 23–26 | F-02, F-05, F-07, F-08, F-13, F-14a, F-16, F-18, F-20–F-23 | 1 · 1 · 1 |
| FAM-23 | The connection held | The connecting service waits for the late one | 7 | 09, 25 | F-06, F-22 | 3 · 1 · 3 |
| FAM-24 | More or different service | The operator runs more or different service, or repairs what fails | 14 | 04, 06, 11, 13, 14, 18, 20, 22–24, 27 | F-02, F-04, F-08, F-10, F-11, F-15, F-17a, F-19–F-21, F-24 | 2 · 1 · 1 |

## The questions behind it

Every one of the 27 questions of [01_How_might_we.md](01_How_might_we.md) is answered by at least one concept of a main family, so every user story with a question is a story of the concept. The counts are concepts: main · background.

| HMW | feature | persona | main | background | lead families |
| --- | --- | --- | --- | --- | --- |
| HMW-01 | F-01 | Como commuter | 11 | 3 | FAM-02, FAM-03, FAM-04; FAM-05 in the background |
| HMW-02 | F-01 | Como commuter | 6 | 4 | none above one; FAM-05, FAM-12 in the background |
| HMW-03 | F-02 | teenager (desk persona) | 9 | 3 | FAM-08 |
| HMW-04 | F-02 | teenager (desk persona) | 8 | 4 | none above one |
| HMW-05 | F-03 | single-line commuter | 13 | 0 | FAM-01, FAM-03 |
| HMW-06 | F-04 | Verona–Milan commuter | 5 | 7 | FAM-26; FAM-20 in the background |
| HMW-07 | F-04 | Verona–Milan commuter | 12 | 1 | FAM-15, FAM-18, FAM-19 |
| HMW-08 | F-05 | London traveller (desk persona) | 7 | 3 | FAM-08 |
| HMW-09 | F-06 | Como commuter | 10 | 2 | FAM-08, FAM-13 |
| HMW-10 | F-07 | German rail regular (desk persona) | 9 | 3 | FAM-03, FAM-06, FAM-08, FAM-15 |
| HMW-11 | F-08 | Verona–Milan commuter | 4 | 8 | none above one; FAM-21 in the background |
| HMW-12 | F-09 | Verona–Milan commuter | 13 | 0 | FAM-13 |
| HMW-13 | F-10 | Como commuter | 11 | 1 | FAM-08, FAM-18, FAM-27 |
| HMW-14 | F-11 | Dutch rail commuter (desk persona) | 10 | 2 | FAM-01, FAM-03, FAM-09 |
| HMW-15 | F-12 | Como commuter | 7 | 5 | FAM-08; FAM-21 in the background |
| HMW-16 | F-13 | Verona–Milan commuter | 8 | 4 | FAM-06; FAM-05 in the background |
| HMW-17 | F-14a | Italian driver (desk persona) | 8 | 4 | FAM-17; FAM-10 in the background |
| HMW-18 | F-15 | woman driving to the station (desk persona) | 4 | 8 | none above one; FAM-20, FAM-24 in the background |
| HMW-19 | F-16 | British traveller (desk persona) | 4 | 7 | FAM-25; FAM-14, FAM-22 in the background |
| HMW-20 | F-17a | daily traveller in a British city (desk persona) | 6 | 6 | FAM-26; FAM-10, FAM-24 in the background |
| HMW-21 | F-18 | Italian driver (desk persona) | 6 | 5 | FAM-01; FAM-21 in the background |
| HMW-22 | F-19 | outskirts hybrid worker | 7 | 4 | FAM-03 |
| HMW-23 | F-20 | wheelchair user (desk persona) | 5 | 7 | none above one; FAM-10, FAM-12 in the background |
| HMW-24 | F-21 | shared-bike rider in South Korea (desk persona) | 5 | 7 | none above one; FAM-10, FAM-22, FAM-24 in the background |
| HMW-25 | F-22 | German rail regular (desk persona) | 5 | 7 | FAM-27; FAM-23 in the background |
| HMW-26 | F-23 | young commuter in Madrid (desk persona) | 9 | 3 | FAM-01, FAM-11 |
| HMW-27 | F-24 | Italian bus user (desk persona) | 10 | 2 | FAM-08, FAM-09 |

- **Lead families:** the main families with two or more concepts for that question; "in the background" names a background family with two or more.
- **Where the background holds most of the answers:** HMW-06, HMW-11, HMW-18, HMW-19, HMW-23, HMW-24 and HMW-25 have more background concepts than main ones; HMW-20 has as many. Their stories are in the concept, but their main answers are thin: see the next section.
- **Features with no story:** F-14b and F-17b were sent back in `04_Generated_User_Stories.md`, so no question and no family reaches them.

## Where the material is thin

- **Feasible is weak almost everywhere.** 14 of the 18 main families have feasible 1: what they tell comes from a feed, or an operator has to change. Only FAM-03, FAM-15, FAM-16 and FAM-26 work on what people enter.
- **FAM-27 is out on relevant** (its most common mark is 0), and FAM-19 and FAM-25 are weak on all three or on two axes. They are main families by Marco's choice; their marks are reported, not used to demote them.
- **[risky] concepts** in the main families: FAM-01 1, FAM-02 2, FAM-03 1, FAM-09 1, FAM-13 2, FAM-19 1, FAM-26 8, FAM-27 3. FAM-26 holds the most: 8 of its 15.
- **Assumptions of Marco's concepts,** from `04_Human+AI_Ideas.md`: S02 needs travellers to share their device's position, the same assumption that marks C01-05 [risky]; S04 needs the relative to accept messages from the service, and its automatic alert rests on S01, S02, S03 or a feed; S06 needs a record of past trips, enough comments from other users, and a traffic feed for private transport.
- **[not traced]** That travellers are willing to report a delay or to have their position used is in no note, as the earlier round found; the only trace is the 2 of 17 Belgian respondents who believe other travellers (TP-090).

## Decisions taken

- **FAM-23 listed twice** in Marco's list: read as one family, so nine background families.
- **Background means after, not out.** Marco said "in secondo piano" (in the background); read as: kept in the concept, used after the main families, never overriding them. The alternative, leaving them out of the specifications, was set aside because he asked to contemplate all families.
- **Lead families** are counted from the concepts each family has for a question, as a reading aid only; they are not marks and not a ranking.
- **File and folder numbers.** This file is `06_`, after the prioritization; the specification folder, until now `06_Specifications/`, became `07_Specifications/` to follow the process; on 2026-11-02 it moved out of `03_Ideation/` to `../04_Specifications/`.

## Connections

- [05_Ideas_prioritization.md](05_Ideas_prioritization.md): the family marks quoted in both tables.
- [04_Human+AI_Ideas.md](04_Human+AI_Ideas.md): the 27 families, their concepts and the questions of Marco's concepts.
- [03_AI_Ideas.md](03_AI_Ideas.md): the AI concepts, from whose IDs the questions of each family are read.
- [02_Human_Ideas.md](02_Human_Ideas.md): Marco's concepts S01 to S06, in FAM-01, FAM-02, FAM-03, FAM-07, FAM-13 and FAM-18.
- [01_How_might_we.md](01_How_might_we.md): the 27 questions, each with its feature and persona.
- [04_Generated_User_Stories.md](../02_Analysis/04_Generated_User_Stories.md): the stories behind the questions, and the personas.
- [03_Generated_Features.md](../02_Analysis/03_Generated_Features.md): the features named in the tables.
- [SPEC-00_overview.md](../04_Specifications/SPEC-00_overview.md), [SPEC-01_foundation.md](../04_Specifications/SPEC-01_foundation.md), [SPEC-02_real-state-of-the-run.md](../04_Specifications/SPEC-02_real-state-of-the-run.md), [SPEC-03_travellers-report.md](../04_Specifications/SPEC-03_travellers-report.md), [SPEC-04_alerts-on-the-usual-trip.md](../04_Specifications/SPEC-04_alerts-on-the-usual-trip.md), [SPEC-05_usual-trip-at-a-glance.md](../04_Specifications/SPEC-05_usual-trip-at-a-glance.md), [SPEC-06_ways-out-when-the-trip-breaks.md](../04_Specifications/SPEC-06_ways-out-when-the-trip-breaks.md), [SPEC-07_those-waiting-are-told.md](../04_Specifications/SPEC-07_those-waiting-are-told.md), [SPEC-08_the-connection-ahead.md](../04_Specifications/SPEC-08_the-connection-ahead.md), [SPEC-09_every-way-side-by-side.md](../04_Specifications/SPEC-09_every-way-side-by-side.md), [SPEC-10_times-that-can-be-kept.md](../04_Specifications/SPEC-10_times-that-can-be-kept.md), [SPEC-11_tickets-that-work-when-needed.md](../04_Specifications/SPEC-11_tickets-that-work-when-needed.md), [SPEC-12_the-fare-that-fits-the-days.md](../04_Specifications/SPEC-12_the-fare-that-fits-the-days.md), [SPEC-13_compensation-from-the-trip.md](../04_Specifications/SPEC-13_compensation-from-the-trip.md), [SPEC-14_the-station-ahead.md](../04_Specifications/SPEC-14_the-station-ahead.md), [SPEC-15_stop-approaching.md](../04_Specifications/SPEC-15_stop-approaching.md), [SPEC-16_the-route-stays-with-the-driver.md](../04_Specifications/SPEC-16_the-route-stays-with-the-driver.md), [SPEC-17_sessions-still-running.md](../04_Specifications/SPEC-17_sessions-still-running.md): the specifications written from this concept.
