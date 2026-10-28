---
source: Claude
date: 2026-10-28 11:24
method: synthesis
status: draft
grade: n/a
confidence: low
tags: [design, internal, output, information, disruption]
related: [Ideas_prioritization.md, Human+AI_Ideas.md, AI_Ideas.md, Human_Ideas.md, Generated_User_Stories.md, Generated_Features.md, Generated_Touchpoints.md, Matteo_Rizzetto_notes.md, Marco_Palermo_notes.md]
---

# Chosen Concept: The Delay as the Travellers See It

**Draft.** Marco chose FAM-01 (*Real position, not the timetable*) and FAM-02 (*Travellers report*) in [Ideas_prioritization.md](Ideas_prioritization.md), and excluded C1-03. This file drafts that choice; it does not revisit it. Every line stays a draft until Marco commits it. Lines that cannot be traced to a note are marked **[not traced]**. Translations are working translations.

## The concept

The commuter learns the real delay of their train from the people who are travelling, not only from the operator's announcement. The delay comes in two ways:
- **Measured:** the position and time of the phones of the passengers on that train are compared with where and when the train should be. This is S02, and C2-06 for the commuter's own trip, whose delay is then passed on.
- **Reported:** passengers report it themselves: anyone in the app (S03), commuters at earlier stations (C1-07), and passengers already on board (C1-08).

It is for two commuters in the stories:
- **On the platform (F-01):** the Como cross-border office-day commuter, "standing on the platform watching the delay on the board grow from 5 to 10 to 15 minutes while a third-party app shows another time". From [Matteo_Rizzetto_notes](../01_Research/Interviews/Matteo_Rizzetto_notes.md): "a 20 inizio a sentire la puzza, a 25 la puzza si fa più forte e aspetto solo che appaia la scritta annullato" (EN: at 20 I begin to smell it, at 25 the smell is stronger and I only wait for the word cancelled to appear), and "Non capisco perché un'app non ufficiale te lo possa dire prima, e tu no" (EN: I do not understand why an unofficial app can tell me earlier and you cannot).
- **On the return train (F-09):** the Verona–Milan commuter, "on the train back to Verona with his father coming to fetch him at the station". From [Marco_Palermo_notes](../01_Research/Interviews/Marco_Palermo_notes.md): "On board he does check how the train is doing, more on the way back, because someone is coming to fetch him".

It acts in these moments:
- waiting on the platform in front of the departure screen (TP-070), while the delay grows until it becomes a cancellation (TP-088);
- when the information comes too late or is wrong (TP-089), and when the commuter has to choose which source to believe (TP-090);
- on board on the way back, following the train to tell the people waiting (TP-075, TP-106).

**[not traced]** That passengers are willing to report a delay, or to have their phone's position used, is in no note. The only trace of travellers as a source is one survey count: other travellers are the source believed by 2 of 17 Belgian respondents (TP-090).

## The questions behind it

- **HMW-01:** How might we enable the daily commuter to be informed about the exact delay and location while waiting on the platform? Answered by C1-07 and C1-08.
- **HMW-02:** How might we enable the daily commuter on their return train to alert their relatives of the exact delay of the train? Answered by C2-06.
- S02 and S03 name no question in [Human_Ideas.md](Human_Ideas.md). In [Ideas_prioritization.md](Ideas_prioritization.md) they were marked against F-01, so they are listed under HMW-01 below.

## The reduced feature set

Five concepts, as written in [Human+AI_Ideas.md](Human+AI_Ideas.md), not merged and not changed. The touchpoints are those that [Generated_Features.md](../01_Research/Analysis/Generated_Features.md) lists under the feature behind each story: F-01 for HMW-01 and F-09 for HMW-02. The marks are those in [Ideas_prioritization.md](Ideas_prioritization.md), shown as valuable / feasible / relevant.

| ID | feature | author | HMW | touchpoint(s) it answers | user story behind it | quotes | marks |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S02 | The delay is worked out by comparing where and when the phones of the passengers who bought that train are with where and when the train should be, then sent on the preferred channel | Marco | HMW-01 (assigned in the marks) | TP-070 waiting on the platform in front of the departure screen; TP-088 watching the delay grow until it becomes a cancellation; TP-089 delay or cancellation information that comes too late, or is wrong | F-01 | TP-088, Matteo_Rizzetto_notes: "a 20 inizio a sentire la puzza … aspetto solo che appaia la scritta annullato"; TP-089, Matteo_Rizzetto_notes: "ti avvisano davvero all'ultimo per i treni cancellati" (EN: they really tell you at the last moment about cancelled trains) | 3 / 1 / 2 |
| C2-06 | The delay is worked out from where the commuter actually is, compared with the timetable, and passed on [risky] | AI | HMW-02 | TP-075 following the train on the app on board, to tell the people waiting; TP-106 telling the people waiting about the delay | F-09 | TP-075, Marco_Palermo_notes: "On board he does check how the train is doing, more on the way back, because someone is coming to fetch him"; TP-106, Marco_Palermo_notes: "to tell the friends who are waiting for him for the evening" | 2 / 1 / 3 |
| S03 | Users report the delay themselves, directly in the app | Marco | HMW-01 (assigned in the marks) | TP-038 checking another app or site trusted more than the operator's; TP-090 choosing which source to believe when they disagree | F-01 | TP-038, Matteo_Rizzetto_notes: "più veritieri rispetto a quelli di Trenitalia, e rispetto a quelli dei tabelloni" (EN: more truthful than the operator's and than the station boards); TP-090, survey_results Q15, Belgium: "other travellers 2" | 2 / 2 / 2 |
| C1-07 | Commuters waiting at earlier stations confirm when the train passes them [risky] | AI | HMW-01 | TP-070 waiting on the platform in front of the departure screen; TP-088 watching the delay grow until it becomes a cancellation | F-01 | TP-070, Marco_Palermo_notes: "At the station he has his place on the platform, in front of the monitor that shows the delays."; TP-088, Matteo_Rizzetto_notes: "a 20 inizio a sentire la puzza …" | 2 / 2 / 3 |
| C1-08 | Passengers already on the late train report where it is and why it stopped [risky] | AI | HMW-01 | TP-088 watching the delay grow until it becomes a cancellation; TP-092 stuck on a stopped or cancelled train while the app shows nothing wrong | F-01 | TP-092, OR-014: 'Ich sitze jetzt wieder mal in der Zuercher S-Bahn fest. Bei meiner Pendelverbindung, die betroffen ist, heisst es alles gruen - fuer morgen' (EN: I am stuck on the Zurich S-Bahn again; for my commuting connection, which is affected, it says all green, for tomorrow) | 3 / 2 / 3 |

The user stories, from [Generated_User_Stories.md](../01_Research/Analysis/Generated_User_Stories.md):

- **F-01** [strong · High]: As the Como cross-border office-day commuter, standing on the platform watching the delay on the board grow from 5 to 10 to 15 minutes while a third-party app shows another time, I want to see where the train really is, when it will really leave and arrive, why it is late and which source says so, so that he knows as early as an unofficial app would tell him.
- **F-09** [strong · Medium]: As the Verona–Milan evening-before commuter, on the train back to Verona with his father coming to fetch him at the station, I want to share the train time and the live arrival, with a confirmation of any delay, with the person driving or waiting, so that the person who comes to the station knows when he arrives.

## The cut list

### Cut at this stage

| ID | concept | family | marks | reason |
| --- | --- | --- | --- | --- |
| C1-03 | The train speaks for itself: its position reaches the platform straight from the vehicle | FAM-01 | 3 / 1 / 3 | Marco: it is enabled by hardware or by a change in the operator's organisation |
| C1-01 | Source label: every delay figure says which source gave it and how old it is | FAM-03 | 3 / 1 / 3 | Its family was not chosen by Marco; reason not stated |
| C1-02 | Disagreement flag: when two sources give different times, the commuter is told by how much | FAM-03 | 3 / 1 / 3 | Its family was not chosen by Marco; reason not stated |
| C2-09 | Official proof of the delay for the relative | FAM-03 | 2 / 1 / 3 | Its family was not chosen by Marco; reason not stated |
| C1-04 | Delay history of this wait | FAM-04 | 2 / 1 / 3 | Its family was not chosen by Marco; reason not stated |
| C1-05 | Cancellation likelihood as the delay grows [risky] | FAM-04 | 2 / 1 / 3 | Its family was not chosen by Marco; reason not stated |
| C1-06 | Range, not a number: earliest and latest departure [risky] | FAM-04 | 1 / 1 / 3 | Its family was not chosen by Marco; reason not stated |
| C1-09 | Distance on the platform | FAM-05 | 2 / 1 / 3 | Its family was not chosen by Marco; reason not stated |
| C2-03 | Pickup board where people wait to fetch someone | FAM-05 | 2 / 1 / 2 | Its family was not chosen by Marco; reason not stated |
| C1-10 | A person who knows: the commuter can ask the people running the train | FAM-06 | 2 / 1 / 3 | Its family was not chosen by Marco; reason not stated |
| C1-11 | First to know, first to tell: the operator commits to announce a cancellation no later than any source | FAM-07 | 3 / 1 / 2 | Its family was not chosen by Marco; reason not stated |
| C1-12 | Announcement lateness record, made public | FAM-07 | 1 / 1 / 1 | Its family was not chosen by Marco; reason not stated |
| C2-01 | Follow the train, not the person | FAM-08 | 3 / 1 / 3 | Its family was not chosen by Marco; reason not stated |
| C2-02 | Pickup notice from the operator | FAM-08 | 3 / 1 / 3 | Its family was not chosen by Marco; reason not stated |
| C2-04 | Standing pickup | FAM-08 | 3 / 1 / 3 | Its family was not chosen by Marco; reason not stated |
| C2-05 | Message that keeps itself true | FAM-08 | 3 / 1 / 3 | Its family was not chosen by Marco; reason not stated |
| C2-12 | Household view [risky] | FAM-08 | 1 / 1 / 1 | Its family was not chosen by Marco; reason not stated |
| S01 | All delays on the user's leg, on the preferred channel, filtered by type and day | FAM-09 | 2 / 1 / 1 | Its family was not chosen by Marco; reason not stated |
| C2-11 | A phone call, not an app [risky] | FAM-09 | 2 / 1 / 3 | Its family was not chosen by Marco; reason not stated |
| C2-07 | One gesture to tell | FAM-10 | 2 / 2 / 3 | Its family was not chosen by Marco; reason not stated |
| C2-08 | Confirmed delays only | FAM-11 | 3 / 1 / 3 | Its family was not chosen by Marco; reason not stated |
| C2-10 | Leave-home time [risky] | FAM-12 | 2 / 1 / 3 | Its family was not chosen by Marco; reason not stated |

### Dropped earlier, at ideation

From [AI_Ideas.md](AI_Ideas.md), with the reasons given there.

| Concept | Question | Reason |
| --- | --- | --- |
| Free parking until the delayed train arrives | HMW-02 | Eases the wait, but does not alert the relative to the delay |
| How late this train usually is, for the relative | HMW-02 | Gives a usual delay, not the exact delay of this train |
| Alternatives offered when the platform delay grows | HMW-01 | Answers what to do next, not being informed about the delay and the location |
| A warm room with a departure screen | HMW-01 | Moves the commuter off the platform; adds no information |
| Automatic compensation claim after the delay | neither | Answers neither question |

## Where the material is thin

- **Travellers as a source.** No interview quote shows a commuter wanting other travellers' reports, or offering their own. The only trace is a survey count: other travellers are believed by 2 of 17 Belgian respondents (TP-090). This affects S03, C1-07 and C1-08.
- **The phone's position.** No note shows a commuter accepting that their phone's position is used: **[not traced]**. This affects S02 and C2-06, and C2-06 is already marked [risky].
- **"The passengers who bought that train" (S02).** No note mentions linking the ticket to the measurement: **[not traced]**.
- **C1-07, earlier stations.** No touchpoint is about earlier stations. The line rests on F-01's wish "to see where the train really is", not on a quote about upstream reports.
- **C1-08, "why it stopped".** It rests on F-01 "why it is late" and on one review, OR-014 (TP-092). No interviewee speaks of reports from on board.
- **F-01 rests on one interview.** Both of its quotes come from Matteo_Rizzetto_notes. Its touchpoints add desk evidence, and F-01 is [strong] through TP-070 and TP-091 (TP-091 is not answered by this set).
- **F-09 rests on one interview.** Its quotes come from Marco_Palermo_notes. TP-075 adds OR-010, OR-008 and GR-040, and TP-106 adds Matteo_Rizzetto_notes and OF-002.
- **The arrival at the return station.** No touchpoint covers the moment the relative waits at the station in the evening. TP-048, being driven to the station, is the morning trip. The return moment rests on TP-075 and TP-106 only.
- **S02 and S03 name no question.** Their HMW and story were assigned in the marks, not by Marco.

## Counts

- **Features in the set:** 5 (S02, C2-06, S03, C1-07, C1-08).
- **Concepts cut at this stage:** 22, out of 27. Marco gave the reason for one of them (C1-03). The other 21 are cut because their family was not chosen, and no reason was stated.
- **Concepts dropped earlier, at ideation:** 5.
- **Reasons given:** 27, one for every cut or dropped concept. Six of them carry a reason about the concept itself: C1-03 and the five dropped at ideation. The other 21 only record that the family was not chosen.

## Connections

- [Ideas_prioritization.md](Ideas_prioritization.md): the marks of every concept here, and the choice of FAM-01 and FAM-02.
- [Human+AI_Ideas.md](Human+AI_Ideas.md): the families and the wording of each concept.
- [AI_Ideas.md](AI_Ideas.md) and [Human_Ideas.md](Human_Ideas.md): the concepts in full, HMW-01 and HMW-02, and the concepts dropped at ideation.
- [Generated_User_Stories.md](../01_Research/Analysis/Generated_User_Stories.md): stories F-01 and F-09.
- [Generated_Features.md](../01_Research/Analysis/Generated_Features.md): features F-01 and F-09 and the touchpoints they answer.
- [Generated_Touchpoints.md](../01_Research/Analysis/Generated_Touchpoints.md): TP-038, TP-070, TP-075, TP-088, TP-089, TP-090, TP-092 and TP-106, with all their citations.
- [Matteo_Rizzetto_notes.md](../01_Research/Interviews/Matteo_Rizzetto_notes.md) and [Marco_Palermo_notes.md](../01_Research/Interviews/Marco_Palermo_notes.md): the interview quotes.
