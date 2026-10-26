---
source: Claude
date: 2026-10-26 21:22
method: generated
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, information]
related: [Chosen_concept.md, Human+AI_Ideas.md, AI_Ideas.md, Human_Ideas.md, Generated_User_Stories.md, Matteo_Rizzetto_notes.md, Marco_Palermo_notes.md]
---

# Ideas Prioritization: Proposed Marks

The 27 concepts of [Human+AI_Ideas.md](Human+AI_Ideas.md), each marked on three axes from 0 (out) to 3 (strong). **The marks are proposals.** The concepts are not ranked, and nothing here says which to build: that decision is Marco's. Marks are not averaged. A 0 on any axis puts a concept out, and on this pass no concept received a 0.

## What the marks are measured against

- **Valuable:** the "so that" of the user story behind the question, and its quotes.
  - HMW-01, story F-01: "so that he knows as early as an unofficial app would tell him". He wants "to see where the train really is, when it will really leave and arrive, why it is late and which source says so". The quotes, from Matteo_Rizzetto_notes, are "a 20 inizio a sentire la puzza … aspetto solo che appaia la scritta annullato" and "Non capisco perché un'app non ufficiale te lo possa dire prima, e tu no".
  - HMW-02, story F-09: "so that the person who comes to the station knows when he arrives". He wants "to share the train time and the live arrival, with a confirmation of any delay". The quotes, from Marco_Palermo_notes, are "more on the way back, because someone is coming to fetch him" and "for twenty years his father, who fetches him, has said the trains are always late".
  - Marco's concepts S01–S03 do not name a question. Each is marked against the story it serves most directly, which is named in its reason.
- **Feasible:** one flow, prototyped in this course by Marco and his agent. Following Marco's rule, anything that needs hardware, a timetable or live-delay feed, or an organisation to change gets **1**. Almost every concept needs live delay data, so most score 1. Only the concepts whose delay comes from people score 2. If Marco allows the prototype to run on simulated data, many of the 1s would move up; that is his call.
- **Relevant:** the chosen moment. **Assumption:** the brief does not name one moment. I took the moment of the question each concept answers: waiting on the platform for HMW-01, and the return train with a relative coming to fetch the commuter for HMW-02. A concept that acts in that moment scores high. One that acts elsewhere, or across the whole commute, scores low.

## Marks

| ID | concept | valuable | feasible | relevant | the one-line reasons | family |
| --- | --- | --- | --- | --- | --- | --- |
| S02 | Real delay from passengers' phones: where and when the phones of the passengers who bought that train are, compared with where the train should be | [3] | [1] | [2] | **V:** F-01 "where the train really is", measured, not announced. **F:** needs ticket data from the operator, a timetable feed and many phones. **R:** the result reaches the platform, but the concept works along the whole leg | FAM-01 |
| C1-03 | The train speaks for itself: its position reaches the platform straight from the vehicle | [3] | [1] | [3] | **V:** F-01 "where the train really is". **F:** needs the vehicle's position from the operator, so hardware or an organisation. **R:** read while waiting on the platform | FAM-01 |
| C2-06 | Delay read from the commuter's own trip, compared with the timetable, and passed on [risky] | [2] | [1] | [3] | **V:** F-09 "the person who comes to the station knows when he arrives", but the story never says the commuter accepts sharing their position. **F:** needs a timetable feed. **R:** happens on the return train | FAM-01 |
| S03 | Users report the delay themselves, in the app | [2] | [2] | [2] | **V:** F-01 values an unofficial source that "can tell earlier", but a report comes only when someone makes one. **F:** one reporting flow with no feed; a prototype cannot show many reporters. **R:** not tied to the platform or to the return train | FAM-02 |
| C1-07 | Upstream spotters: commuters at earlier stations confirm when the train passes [risky] | [2] | [2] | [3] | **V:** F-01 "where the train really is", but it depends on others reporting, which the story does not show. **F:** a reporting flow with no feed; other people are needed for it to work. **R:** received while waiting on the platform | FAM-02 |
| C1-08 | Word from on board: passengers on the late train report where it is and why it stopped [risky] | [3] | [2] | [3] | **V:** F-01 "where the train really is … why it is late". **F:** a reporting flow with no feed; passengers are needed for it to work. **R:** received while waiting on the platform | FAM-02 |
| C1-01 | Source label: every delay figure says which source gave it and how old it is | [3] | [1] | [3] | **V:** F-01 "which source says so". **F:** needs at least one live-delay feed. **R:** read on the platform | FAM-03 |
| C1-02 | Disagreement flag: when two sources give different times, the commuter is told by how much | [3] | [1] | [3] | **V:** F-01, the board against "a third-party app [that] shows another time"; "un'app non ufficiale te lo possa dire prima". **F:** needs two live feeds. **R:** read on the platform | FAM-03 |
| C2-09 | Official proof of the delay for the relative | [2] | [1] | [3] | **V:** F-09 "a confirmation of any delay"; nothing shows that the father doubts the commuter's word, only the trains. **F:** needs the operator to issue the confirmation. **R:** happens during the return trip | FAM-03 |
| C1-04 | Delay history of this wait: how the delay has grown since the first announcement | [2] | [1] | [3] | **V:** F-01 already watches the board grow "from 5 to 10 to 15" and reads "the smell" from it, but the history does not tell him earlier. **F:** needs a live-delay feed. **R:** read on the platform | FAM-04 |
| C1-05 | Cancellation likelihood as the delay grows [risky] | [2] | [1] | [3] | **V:** F-01 "aspetto solo che appaia la scritta annullato": knowing a cancellation earlier, but the story does not show that he wants a chance in place of a time. **F:** needs a feed and a history of delays and cancellations. **R:** read on the platform | FAM-04 |
| C1-06 | Range, not a number: earliest and latest departure [risky] | [1] | [1] | [3] | **V:** F-01 wants "when it will really leave"; a range is less exact than what he asks for. **F:** needs a feed and a history. **R:** read on the platform | FAM-04 |
| C1-09 | Distance on the platform: the platform shows how far away the train is | [2] | [1] | [3] | **V:** F-01 "where the train really is", but not when, why or from which source. **F:** hardware on the platform. **R:** on the platform by definition | FAM-05 |
| C2-03 | Pickup board where people wait to fetch someone | [2] | [1] | [2] | **V:** F-09: the relative learns the arrival only once at the station, and a father who drives may not wait inside. **F:** hardware at the station. **R:** acts at the arrival end, not on the return train | FAM-05 |
| C1-10 | A person who knows: the commuter can ask the people running the train | [2] | [1] | [3] | **V:** F-01 "where … why it is late", but only when asked, not "as early as" by default. **F:** needs the operator's staff and an organisation to change. **R:** asked while waiting on the platform | FAM-06 |
| C1-11 | First to know, first to tell: the operator commits to announce a cancellation no later than any source | [3] | [1] | [2] | **V:** F-01 "so that he knows as early as an unofficial app would tell him", word for word. **F:** a commitment by the operator, not a flow; an organisation has to change. **R:** acts at the operator, and its effect lands on the platform | FAM-07 |
| C1-12 | Announcement lateness record, made public | [1] | [1] | [1] | **V:** F-01 "perché un'app non ufficiale te lo possa dire prima" names the gap, but the record does not inform him while he waits. **F:** needs the announcement data of the operator and of other sources over time. **R:** acts after the moment, in public, not on the platform | FAM-07 |
| C2-01 | Follow the train, not the person: the relative sees the live arrival | [3] | [1] | [3] | **V:** F-09 "the live arrival … with the person driving or waiting". **F:** needs a live-delay feed. **R:** during the return trip | FAM-08 |
| C2-02 | Pickup notice from the operator to people registered as fetching a passenger | [3] | [1] | [3] | **V:** F-09 "so that the person who comes to the station knows when he arrives". **F:** needs the operator to run it. **R:** during the return trip | FAM-08 |
| C2-04 | Standing pickup: on the usual return trip, the relative is kept informed every time | [3] | [1] | [3] | **V:** F-09: the usual return, "for twenty years his father, who fetches him". **F:** needs a live-delay feed. **R:** during the return trip | FAM-08 |
| C2-05 | Message that keeps itself true: the time sent once updates itself | [3] | [1] | [3] | **V:** F-09 "share the train time and the live arrival". **F:** needs a live-delay feed. **R:** during the return trip | FAM-08 |
| C2-12 | Household view: the members of a household see each other's commutes [risky] | [1] | [1] | [1] | **V:** F-09 is about one person fetching on one trip; the story does not show a household that wants to share. **F:** needs a feed for every member. **R:** the whole commute of several people, not the moment | FAM-08 |
| S01 | All delays on the user's leg, on the preferred channel (WhatsApp, SMS, call), filtered by type and day | [2] | [1] | [1] | **V:** F-01 "as early as", but it sends to the commuter and not to the relative of F-09, and it does not say where, why or from which source. **F:** needs a live-delay feed and a messaging or phone service. **R:** every delay, incident and work on the line, on any day: the whole commute | FAM-09 |
| C2-11 | A phone call, not an app: a relative without apps gets a call or a text [risky] | [2] | [1] | [3] | **V:** F-09 "with the person driving or waiting", but nothing says the father does not use apps. **F:** needs a feed and a telephony service. **R:** during the return trip | FAM-09 |
| C2-07 | One gesture to tell: the commuter passes on the current delay in a single gesture | [2] | [2] | [3] | **V:** F-09: "On board he does check how the train is doing", and still has to act at each change. **F:** the gesture is one flow, and it can carry the delay the commuter already sees; a live feed is needed only for the exact figure. **R:** on the return train | FAM-10 |
| C2-08 | Confirmed delays only, not every change of a few minutes | [3] | [1] | [3] | **V:** F-09 "with a confirmation of any delay". **F:** needs a live-delay feed. **R:** during the return trip | FAM-11 |
| C2-10 | Leave-home time: the relative is told when to set off [risky] | [2] | [1] | [3] | **V:** F-09 "the person driving", but the story does not say the father plans his departure from the train time. **F:** needs a live-delay feed and travel times by road. **R:** during the return trip, seen from the relative's side | FAM-12 |

## Where the axes disagree

The concepts strong (3) on one axis and weak (1) on another. These are the decisions, not the scores.

- **Valuable 3, feasible 1:** S02, C1-03, C1-01, C1-02, C1-11, C2-01, C2-02, C2-04, C2-05, C2-08. They serve the story directly but need a feed, hardware or the operator. Most of them would move if Marco accepts simulated data in the prototype.
- **Relevant 3, feasible 1, valuable 2 or less:** C2-06, C2-09, C1-04, C1-05, C1-06, C1-09, C1-10, C2-11, C2-10. They sit in the moment, but serve the "so that" only in part or on an assumption, and they cannot be built as specified.
- **Relevant 3, valuable 1:** C1-06. It belongs to the platform moment, but gives less than the exact time the story asks for.
- **Valuable 2, relevant 1:** S01. It serves knowing early, but covers the whole commute, not the moment.
- **Low on all three:** C1-12 and C2-12 (1, 1, 1). They do not disagree; they are weak on every axis.

No concept scores 3 on all three axes. The concepts with no axis at 1 are C1-07, C1-08, S03 and C2-07, all at 2 for feasible. Every one of them relies on a person reporting or telling instead of on a feed.

## Connections

- [Human+AI_Ideas.md](Human+AI_Ideas.md): the families and concepts marked here.
- [AI_Ideas.md](AI_Ideas.md): the AI concepts, the two questions, the stories behind them and the reasons for each [risky] mark.
- [Human_Ideas.md](Human_Ideas.md): Marco's concepts S01–S03.
- [Generated_User_Stories.md](../Analysis/Generated_User_Stories.md): stories F-01 and F-09, whose "so that" the valuable marks are traced to.
- [Matteo_Rizzetto_notes.md](../Interviews/Matteo_Rizzetto_notes.md) and [Marco_Palermo_notes.md](../Interviews/Marco_Palermo_notes.md): the quotes behind the two stories.
- [Chosen_concept.md](Chosen_concept.md): the draft of the concept Marco chose from FAM-01 and FAM-02, with the cut list.
