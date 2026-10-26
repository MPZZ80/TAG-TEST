---
source: Claude
date: 2026-10-26 20:51
method: coding
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, synthesis, information]
related: [Human_Ideas.md, AI_Ideas.md, Ideas_prioritization.md]
---

# Human and AI Ideas: Families of Concepts

The concepts of [Human_Ideas.md](Human_Ideas.md), written by Marco, and of [AI_Ideas.md](AI_Ideas.md), written by Claude, grouped by direction: two concepts are in one family when they answer the question in the same way. Nothing is added; the families are not ranked. The column "what each concept does" repeats the one-line description of each AI concept from `AI_Ideas.md` as written, and gives a one-line summary of each of Marco's concepts.

- **Concepts in:** 27. Marco: S01, S02 and S03. AI: C1-01 to C1-12 (for HMW-01) and C2-01 to C2-12 (for HMW-02). The five concepts listed as dropped in `AI_Ideas.md` are not concepts of that file and are left out.
- **Families out:** 12.
- **Unclassified:** 0.
- Marco's concepts do not name the HMW question they answer. They are clustered as written, and no question is assigned to them.
- The **[risky]** marks are those of `AI_Ideas.md`.

## Families

| ID | family | its direction, one line | concepts (by number) | what each concept does | authors |
| --- | --- | --- | --- | --- | --- |
| FAM-01 | Real position, not the timetable | Where the train is gets measured from the train or from the people on it, and is compared with where the timetable says it should be | S02, C1-03, C2-06 [risky] | **S02:** The delay is worked out by comparing where and when the phones of the passengers who bought that train are with where and when the train should be, then sent on the preferred channel<br>**C1-03:** The train's position reaches the platform straight from the vehicle, not through the timetable<br>**C2-06:** The delay is worked out from where the commuter actually is, compared with the timetable, and passed on | Marco, AI |
| FAM-02 | Travellers report | People on the line, on the train or at other stations say what they see | S03, C1-07 [risky], C1-08 [risky] | **S03:** Users report the delay themselves, directly in the app<br>**C1-07:** Commuters waiting at earlier stations confirm when the train passes them<br>**C1-08:** Passengers already on the late train report where it is and why it stopped | Marco, AI |
| FAM-03 | The source made visible | Each figure says who gave it, flags when sources disagree, or comes with the operator's own confirmation | C1-01, C1-02, C2-09 | **C1-01:** Every delay figure on the platform says which source gave it and how old it is<br>**C1-02:** When two sources give different times for the same train, the commuter is told they disagree and by how much<br>**C2-09:** The relative receives the operator's own confirmation of the delay, not only the commuter's word | AI |
| FAM-04 | Honest uncertainty | The delay comes with its history, its range or its likelihood, not as one number | C1-04, C1-05 [risky], C1-06 [risky] | **C1-04:** The commuter sees how the delay of this train has grown since the first announcement, not only the latest number<br>**C1-05:** As the delay grows, the commuter is told how likely the train is to be cancelled, turning "the smell" into a stated chance<br>**C1-06:** The expected departure is given as an earliest and latest time instead of a single minute | AI |
| FAM-05 | The place shows it | The platform, or the place where people wait to pick someone up, carries the information | C1-09, C2-03 | **C1-09:** The platform itself shows how far away the train is, in stations or kilometres<br>**C2-03:** The place where people wait to fetch someone shows the live arrival of the trains they are waiting for | AI |
| FAM-06 | Ask a person | Someone who runs the train can be asked directly | C1-10 | **C1-10:** The waiting commuter can reach the people who are running the train and ask where it is | AI |
| FAM-07 | The operator held to account | The operator commits to telling first, and its record of late announcements is made public | C1-11, C1-12 | **C1-11:** The operator commits to tell the platform about a cancellation as soon as it knows it, no later than any other source<br>**C1-12:** How much later the official channels announced a delay or cancellation than the unofficial ones is recorded and made public | AI |
| FAM-08 | Followed without asking | Whoever needs to know, the commuter's relative or household, follows the train continuously, without the commuter acting on each trip | C2-01, C2-02, C2-04, C2-05, C2-12 [risky] | **C2-01:** The relative follows the commuter's train directly and sees its live arrival<br>**C2-02:** The operator tells the people registered as fetching a passenger when that train will really arrive<br>**C2-04:** On the usual return trip, the relative is kept informed every time without the commuter doing anything<br>**C2-05:** The time the commuter sent once updates itself while the delay changes<br>**C2-12:** The members of a household see each other's commutes and their delays in one place | AI |
| FAM-09 | On the person's own channel | The delay reaches the person through the channel they already use: messaging, text or a phone call | S01, C2-11 [risky] | **S01:** All the delays on the user's own leg are sent as soon as they are known, on the channel the user prefers (WhatsApp, SMS, phone call), filtered by type and day<br>**C2-11:** A relative who does not use apps gets a spoken call or a text when the delay changes | Marco, AI |
| FAM-10 | The commuter tells, at less cost | The commuter still decides to tell, with almost no effort | C2-07 | **C2-07:** The commuter passes on the exact current delay in a single gesture | AI |
| FAM-11 | Only what is worth telling | What reaches the person is filtered, for example confirmed delays only | C2-08 | **C2-08:** The relative is alerted only when a delay is confirmed, not at every change of a few minutes | AI |
| FAM-12 | Turned into the recipient's next step | The relative is told what to do, not only when the train arrives | C2-10 [risky] | **C2-10:** The relative is told when to set off to meet the train, not only when it arrives | AI |

## Concepts with a second direction

Each concept is placed in one family, the one its main sentence answers. Some carry a second direction as well. They are listed here so that the second direction is not lost.

| Concept | Placed in | Also touches | What in the concept touches it |
| --- | --- | --- | --- |
| S01 | FAM-09 | FAM-11 | "the notifications can be filtered by type (delay, incidents, works on the line) and day" |
| S01 | FAM-09 | FAM-08 | "gathers all delays inherent to the users leg and communicates them as soon as is available" |
| S02 | FAM-01 | FAM-09 | "then communicates the delay to the user on the preferred channel" |
| C2-11 | FAM-09 | FAM-08 | the relative "gets a spoken call or a text when the delay changes" |

## Families held by one hand

- **Marco only:** none. Each of Marco's three concepts is in a family that also holds AI concepts (FAM-01, FAM-02, FAM-09).
- **AI only:** nine families: FAM-03, FAM-04, FAM-05, FAM-06, FAM-07, FAM-08, FAM-10, FAM-11 and FAM-12.
- **Both hands:** FAM-01, FAM-02 and FAM-09. Marco's concepts are about how the delay is collected (FAM-01, FAM-02) and how it is delivered (FAM-09). None of them is about trusting the figure, its uncertainty, the place, a person or the operator's accountability.

## Unclassified

None. Every concept answers the question in a way that one of the families describes.

## Connections

- [Human_Ideas.md](Human_Ideas.md): Marco's concepts S01–S03, clustered here.
- [AI_Ideas.md](AI_Ideas.md): the AI concepts C1-01 to C2-12, clustered here, with the questions, the stories and the reasons for each [risky] mark.
- [Ideas_prioritization.md](Ideas_prioritization.md): proposed marks for each concept on value, feasibility and relevance.
