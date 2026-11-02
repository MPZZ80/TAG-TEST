---
source: Claude
date: 2026-11-03 00:35
method: generated
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, information, disruption]
related: [00_User_Stories_index.md, 02_AI_Ideas_index.md, 03_Families_index.md, 05_Chosen_concept.md, SPEC-00_overview.md, SPEC-02_real-state-of-the-run.md]
---

# How Might We: Questions from the User Stories

One question for each of the 24 stories in [00_User_Stories_index.md](../../02_Analysis/03_User_Stories/00_User_Stories_index.md), and one more at a different width for the three stories with the strongest evidence: 27 questions. Nothing is filtered or ranked; choosing is Marco's.

- **Strongest evidence:** F-01, F-02 and F-04, the only stories marked both [strong] and High.
- **Width:** [narrow] fewer than three concepts could answer it; [calibrated] three or more, and each can be traced to the story; [wide] it asks beyond what the story's capability covers, so a concept could be hard to trace.
- **This file is the index.** Each question has its own file in this folder, with its quote and its width in one line; each cluster and supercluster has one too.
- **Quotes**, in the question files, come from the source line of each story, shortened with "…". Translations are working translations.

## Questions

| ID | question | the story behind it | width | cluster |
| --- | --- | --- | --- | --- |
| [HMW-01](HMW-01_help-como-commuter-standing-platform.md) | How might we help the Como commuter, standing on the platform watching the delay on the board grow from 5 to 10 to 15 minutes, know where his train really is and when it will really leave, as early as an unofficial app would tell him? | F-01, Como commuter | [calibrated] | [CL-01](CL-01_exact-place-delay.md) |
| [HMW-02](HMW-02_spare-como-commuter-platform-during.md) | How might we spare the Como commuter, on the platform during a growing delay, from reading the numbers on the board to guess that a cancellation is coming? | F-01, Como commuter | [wide] | [CL-01](CL-01_exact-place-delay.md) |
| [HMW-03](HMW-03_help-teenager-waiting-late-evening.md) | How might we help a teenager, waiting late in the evening at a stop for a connecting bus that does not come, know which ways still run from there and from what point it makes sense to call home and be fetched? | F-02, teenager (desk persona) | [calibrated] | [CL-04](CL-04_trip-breaks.md) |
| [HMW-04](HMW-04_help-teenager-stop-late-evening.md) | How might we help a teenager, at a stop late in the evening when the connecting bus does not come, decide whether to keep waiting or call home? | F-02, teenager (desk persona) | [narrow] | [CL-04](CL-04_trip-breaks.md) |
| [HMW-05](HMW-05_let-single-line-commuter-during.md) | How might we let the single-line commuter, during the seven minutes he drives to the station on one of his three office days, know in time of a change on his usual train, so that he can wait in the warm car if it is late? | F-03, single-line commuter | [calibrated] | [CL-02](CL-02_usual-trip.md) |
| [HMW-06](HMW-06_help-verona-milan-commuter-booking.md) | How might we help the Verona–Milan commuter, booking three or four days ahead and finding the train he wanted sold out, still travel door to door at the time he wants? | F-04, Verona–Milan commuter | [calibrated] | [CL-05](CL-05_choosing-travel.md) |
| [HMW-07](HMW-07_let-verona-milan-commuter-he.md) | How might we let the Verona–Milan commuter, when he books three or four days ahead, weigh every way of making the trip door to door as one journey? | F-04, Verona–Milan commuter | [wide] | [CL-05](CL-05_choosing-travel.md) |
| [HMW-08](HMW-08_help-london-traveller-changing-king.md) | How might we help a London traveller, changing at King's Cross for a train to Luton when the app says the walk to the platform takes 3 minutes, know how long the way really takes, so that they do not miss the train after running for 10 minutes? | F-05, London traveller (desk persona) | [calibrated] | [CL-03](CL-03_whether-change-holds.md) |
| [HMW-09](HMW-09_help-como-commuter-8-23.md) | How might we help the Como commuter, on the 8:23 towards Lugano as the delay grows towards 12 minutes, know before the change whether his connection still holds, so that he can warn the people he is meeting before he arrives? | F-06, Como commuter | [calibrated] | [CL-03](CL-03_whether-change-holds.md) |
| [HMW-10](HMW-10_help-german-rail-regular-planner.md) | How might we help a German rail regular, when the planner offers a change shorter than his own rule, rely only on connections he counts as real and not on "connections on paper"? | F-07, German rail regular (desk persona) | [calibrated] | [CL-03](CL-03_whether-change-holds.md) |
| [HMW-11](HMW-11_let-verona-milan-commuter-still.md) | How might we let the Verona–Milan commuter, still in the underground five minutes before his train leaves and perhaps with no signal, take another train or travel another day without losing his ticket? | F-08, Verona–Milan commuter | [calibrated] | [CL-06](CL-06_tickets-passes-charges.md) |
| [HMW-12](HMW-12_make-sure-person-coming-fetch.md) | How might we make sure the person coming to fetch the Verona–Milan commuter at the station knows when he arrives, while he is on the train back to Verona? | F-09, Verona–Milan commuter | [calibrated] | [CL-01](CL-01_exact-place-delay.md) |
| [HMW-13](HMW-13_help-como-commuter-looking-timetables.md) | How might we help the Como commuter, looking at the timetables to see whether he can go back from the car to the train, see whether the train still brings him home to Como when the working day ends? | F-10, Como commuter | [calibrated] | [CL-05](CL-05_choosing-travel.md) |
| [HMW-14](HMW-14_let-dutch-rail-commuter-way.md) | How might we let a Dutch rail commuter, on the way out of the door in the morning, know which platform to go to with no extra step? | F-11, Dutch rail commuter (desk persona) | [narrow] | [CL-02](CL-02_usual-trip.md) |
| [HMW-15](HMW-15_keep-como-commuter-whose-office.md) | How might we keep the Como commuter, whose office days fell to about one a week while the pass still cost 70 euro a month, from paying for a pass meant for daily travel? | F-12, Como commuter | [calibrated] | [CL-06](CL-06_tickets-passes-charges.md) |
| [HMW-16](HMW-16_make-time-promised-verona-milan.md) | How might we make the time promised to the Verona–Milan commuter, planning a trip while taking for granted that his train will be 5 to 15 minutes late, the time that is kept? | F-13, Verona–Milan commuter | [calibrated] | [CL-05](CL-05_choosing-travel.md) |
| [HMW-17](HMW-17_keep-route-decision-italian-driver.md) | How might we keep the route decision with an Italian driver following a map app, when there is a queue or the route leads onto a foreign motorway, so that he decides and is not fined? | F-14a, Italian driver (desk persona) | [calibrated] | [CL-09](CL-09_driver-s-route.md) |
| [HMW-18](HMW-18_spare-woman-driving-station-before.md) | How might we spare a woman driving to the station, before she leaves home for the 8:17 train she takes because she starts later, from having to go back to leaving earlier for fear of finding no place to leave her car or bike? | F-15, woman driving to the station (desk persona) | [calibrated] | [CL-07](CL-07_state-station.md) |
| [HMW-19](HMW-19_help-british-traveller-after-delay.md) | How might we help a British traveller, after a delay on a ticket bought through a ticket seller, claim compensation without depending on going to the train company? | F-16, British traveller (desk persona) | [calibrated] | [CL-06](CL-06_tickets-passes-charges.md) |
| [HMW-20](HMW-20_help-daily-traveller-british-city.md) | How might we help a daily traveller in a British city, waiting at a station late at night, know what the station and the walk at the end will be like at that hour, so that the wait is not a moment of fear? | F-17a, daily traveller in a British city (desk persona) | [calibrated] | [CL-07](CL-07_state-station.md) |
| [HMW-21](HMW-21_keep-italian-driver-leaving-car.md) | How might we keep an Italian driver, leaving the car for the day on street parking paid in an app, from paying for eight or ten hours by forgetting a session still running? | F-18, Italian driver (desk persona) | [calibrated] | [CL-06](CL-06_tickets-passes-charges.md) |
| [HMW-22](HMW-22_help-outskirts-hybrid-worker-station.md) | How might we help the outskirts hybrid worker, at her station when her train is cancelled and the only other train is the packed one to Cadorna, choose between waiting and a train where "you never get a seat"? | F-19, outskirts hybrid worker | [calibrated] | [CL-04](CL-04_trip-breaks.md) |
| [HMW-23](HMW-23_spare-wheelchair-user-before-getting.md) | How might we spare a wheelchair user, before getting off at a German station with stairs unlit for two months and no lift, from having to ride past the station and come back? | F-20, wheelchair user (desk persona) | [calibrated] | [CL-07](CL-07_state-station.md) |
| [HMW-24](HMW-24_keep-charge-running-shared-bike.md) | How might we keep the charge from running on for a shared-bike rider in South Korea, going home from work, at the end of a ride when the return zone is far or the position is wrong? | F-21, shared-bike rider in South Korea (desk persona) | [calibrated] | [CL-06](CL-06_tickets-passes-charges.md) |
| [HMW-25](HMW-25_help-german-rail-regular-late.md) | How might we help a German rail regular, on a late train before the last connection of the day, have that connection wait for him? | F-22, German rail regular (desk persona) | [narrow] | [CL-03](CL-03_whether-change-holds.md) |
| [HMW-26](HMW-26_let-young-commuter-madrid-bus.md) | How might we let a young commuter in Madrid, on a bus two stops before her own, sit without thinking about the stop and not miss it if she falls asleep? | F-23, young commuter in Madrid (desk persona) | [narrow] | [CL-08](CL-08_attention-moment.md) |
| [HMW-27](HMW-27_keep-few-seconds-deciding-whether.md) | How might we keep a few seconds from deciding whether an Italian bus user, in a hurry and opening the app at the stop, catches the bus? | F-24, Italian bus user (desk persona) | [narrow] | [CL-08](CL-08_attention-moment.md) |

**Counts:** 27 questions: 20 [calibrated], 5 [narrow], 2 [wide].

## Stories that could not be questioned

None was left out: every story has a question, because the brief for this file says not to filter. Three rest on a "so that" too thin to build on with confidence, and are marked here rather than strengthened.

- **F-13 ([HMW-16](HMW-16_make-time-promised-verona-milan.md)):** the "so that" close to restates the capability. The note says a looser timetable would change nothing for him, so it shows little that he would gain.
- **F-17a ([HMW-20](HMW-20_help-daily-traveller-british-city.md)):** the source line shows fear at night and a dark walk, but no outcome the person says they seek. "Not a moment of fear" is the absence of the problem.
- **F-22 ([HMW-25](HMW-25_help-german-rail-regular-late.md)):** "so that the connection waits" is close to a mechanism, not an outcome. Why the connection matters to him is not stated in the story.

One part left out on purpose: the cost in F-02. [00_User_Stories_index.md](../../02_Analysis/03_User_Stories/00_User_Stories_index.md) records that it has no traced value of its own, so [HMW-03](HMW-03_help-teenager-waiting-late-evening.md) does not ask about it.

## Compared with Marco's drafts

Marco's drafts are in [../_old/How_might_we.md](../_old/How_might_we.md). They are from the first round: [HMW-01](HMW-01_help-como-commuter-standing-platform.md) and [HMW-02](HMW-02_spare-como-commuter-platform-during.md) are written and [HMW-03](HMW-03_help-teenager-waiting-late-evening.md) is empty. No new drafts exist for this round. The draft numbers are not the numbers in the table above.

- **Who:** the drafts ask for "the daily commuter"; these ask for the person in the story. The Como commuter's office days fell to about one a week (F-12).
- **Value:** the drafts stop at being informed or alerting; these carry the "so that", such as knowing as early as an unofficial app ([HMW-01](HMW-01_help-como-commuter-standing-platform.md)).
- **Moment:** draft [HMW-01](HMW-01_help-como-commuter-standing-platform.md) says "while waiting on the platform"; [HMW-01](HMW-01_help-como-commuter-standing-platform.md) here has the delay growing from 5 to 10 to 15 minutes.
- **Promise:** draft [HMW-01](HMW-01_help-como-commuter-standing-platform.md) asks for the "exact" delay and location; the story asks for the real position and time, as early as another app has them.
- **Who acts:** draft [HMW-02](HMW-02_spare-como-commuter-platform-during.md) has the commuter alert the relatives, which already picks an answer; [HMW-12](HMW-12_make-sure-person-coming-fetch.md) here asks that the person fetching him knows, whoever passes it on.
- **Who is told:** draft [HMW-02](HMW-02_spare-como-commuter-platform-during.md) says "relatives"; the story has one person, his father, coming to the station.
- **Coverage:** the drafts cover two stories, F-01 and F-09; this table covers all 24, including the awkward ones.

## Clusters

The 27 questions grouped by what they ask about, each in one cluster. [CL-01](CL-01_exact-place-delay.md) is Marco's own grouping, on the exact place and delay; the others follow his example and are proposals. Nothing is ranked.

| ID | theme | questions | what connects them, one line |
| --- | --- | --- | --- |
| [CL-01](CL-01_exact-place-delay.md) | Exact place and delay | [HMW-01](HMW-01_help-como-commuter-standing-platform.md), [HMW-02](HMW-02_spare-como-commuter-platform-during.md), [HMW-12](HMW-12_make-sure-person-coming-fetch.md) | Knowing where the train really is and when it will really leave or arrive, for the commuter or for the person fetching him |
| [CL-02](CL-02_usual-trip.md) | The usual trip | [HMW-05](HMW-05_let-single-line-commuter-during.md), [HMW-14](HMW-14_let-dutch-rail-commuter-way.md) | Knowing the state or the platform of the regular train, without having to look for it |
| [CL-03](CL-03_whether-change-holds.md) | Whether the change holds | [HMW-08](HMW-08_help-london-traveller-changing-king.md), [HMW-09](HMW-09_help-como-commuter-8-23.md), [HMW-10](HMW-10_help-german-rail-regular-planner.md), [HMW-25](HMW-25_help-german-rail-regular-late.md) | Making a change between services: the walk it takes, the delay it can bear, the margin it needs, the connection waiting |
| [CL-04](CL-04_trip-breaks.md) | When the trip breaks | [HMW-03](HMW-03_help-teenager-waiting-late-evening.md), [HMW-04](HMW-04_help-teenager-stop-late-evening.md), [HMW-22](HMW-22_help-outskirts-hybrid-worker-station.md) | Choosing what to do when the bus or train does not come: which ways are left, keep waiting or not |
| [CL-05](CL-05_choosing-travel.md) | Choosing how to travel | [HMW-06](HMW-06_help-verona-milan-commuter-booking.md), [HMW-07](HMW-07_let-verona-milan-commuter-he.md), [HMW-13](HMW-13_help-como-commuter-looking-timetables.md), [HMW-16](HMW-16_make-time-promised-verona-milan.md) | Deciding before the trip, from the options and the times that can really be counted on |
| [CL-06](CL-06_tickets-passes-charges.md) | Tickets, passes and charges | [HMW-11](HMW-11_let-verona-milan-commuter-still.md), [HMW-15](HMW-15_keep-como-commuter-whose-office.md), [HMW-19](HMW-19_help-british-traveller-after-delay.md), [HMW-21](HMW-21_keep-italian-driver-leaving-car.md), [HMW-24](HMW-24_keep-charge-running-shared-bike.md) | Not losing money or a ticket: moving it, the right pass, compensation, a parking session or bike charge still running |
| [CL-07](CL-07_state-station.md) | The state of the station | [HMW-18](HMW-18_spare-woman-driving-station-before.md), [HMW-20](HMW-20_help-daily-traveller-british-city.md), [HMW-23](HMW-23_spare-wheelchair-user-before-getting.md) | Knowing before arriving what the station offers: a parking place, staff and light, a working lift |
| [CL-08](CL-08_attention-moment.md) | Attention at the moment | [HMW-26](HMW-26_let-young-commuter-madrid-bus.md), [HMW-27](HMW-27_keep-few-seconds-deciding-whether.md) | Not having to spend attention or seconds on the app or on the stop while travelling |
| [CL-09](CL-09_driver-s-route.md) | The driver's route | [HMW-17](HMW-17_keep-route-decision-italian-driver.md) | Alone: the only question about driving, and the decision stays with the driver |

**Close to another cluster:** [HMW-05](HMW-05_let-single-line-commuter-during.md) and [HMW-09](HMW-09_help-como-commuter-8-23.md) also concern a delay, as [CL-01](CL-01_exact-place-delay.md) does, but they ask what the delay means for a decision and not where the train is. [HMW-22](HMW-22_help-outskirts-hybrid-worker-station.md) also concerns crowding, which no other question does. [HMW-16](HMW-16_make-time-promised-verona-milan.md) also concerns the delay, but it asks about the time promised before the trip.

## Superclusters

Marco's grouping of the clusters. The names are proposals. [CL-06](CL-06_tickets-passes-charges.md), [CL-07](CL-07_state-station.md), [CL-08](CL-08_attention-moment.md) and [CL-09](CL-09_driver-s-route.md) are in no supercluster of Marco's; on his instruction of 2026-11-03 they are gathered in [SC-00](SC-00_clusters-assigned-supercluster.md), "Clusters not assigned to a supercluster".

| ID | theme | clusters | questions | what connects them, one line |
| --- | --- | --- | --- | --- |
| [SC-01](SC-01_state-my-train.md) | The state of my train | [CL-01](CL-01_exact-place-delay.md), [CL-02](CL-02_usual-trip.md) | [HMW-01](HMW-01_help-como-commuter-standing-platform.md), [HMW-02](HMW-02_spare-como-commuter-platform-during.md), [HMW-05](HMW-05_let-single-line-commuter-during.md), [HMW-12](HMW-12_make-sure-person-coming-fetch.md), [HMW-14](HMW-14_let-dutch-rail-commuter-way.md) | Knowing how the train stands, for this trip or for the usual one |
| [SC-02](SC-02_finding-way-works.md) | Finding a way that works | [CL-03](CL-03_whether-change-holds.md), [CL-04](CL-04_trip-breaks.md), [CL-05](CL-05_choosing-travel.md) | [HMW-03](HMW-03_help-teenager-waiting-late-evening.md), [HMW-04](HMW-04_help-teenager-stop-late-evening.md), [HMW-06](HMW-06_help-verona-milan-commuter-booking.md), [HMW-07](HMW-07_let-verona-milan-commuter-he.md), [HMW-08](HMW-08_help-london-traveller-changing-king.md), [HMW-09](HMW-09_help-como-commuter-8-23.md), [HMW-10](HMW-10_help-german-rail-regular-planner.md), [HMW-13](HMW-13_help-como-commuter-looking-timetables.md), [HMW-16](HMW-16_make-time-promised-verona-milan.md), [HMW-22](HMW-22_help-outskirts-hybrid-worker-station.md), [HMW-25](HMW-25_help-german-rail-regular-late.md) | Deciding how to make the trip: before leaving, at a change, or when it breaks |
| [SC-00](SC-00_clusters-assigned-supercluster.md) | Clusters not assigned to a supercluster | [CL-06](CL-06_tickets-passes-charges.md), [CL-07](CL-07_state-station.md), [CL-08](CL-08_attention-moment.md), [CL-09](CL-09_driver-s-route.md) | [HMW-11](HMW-11_let-verona-milan-commuter-still.md), [HMW-15](HMW-15_keep-como-commuter-whose-office.md), [HMW-19](HMW-19_help-british-traveller-after-delay.md), [HMW-21](HMW-21_keep-italian-driver-leaving-car.md), [HMW-24](HMW-24_keep-charge-running-shared-bike.md), [HMW-18](HMW-18_spare-woman-driving-station-before.md), [HMW-20](HMW-20_help-daily-traveller-british-city.md), [HMW-23](HMW-23_spare-wheelchair-user-before-getting.md), [HMW-26](HMW-26_let-young-commuter-madrid-bus.md), [HMW-27](HMW-27_keep-few-seconds-deciding-whether.md), [HMW-17](HMW-17_keep-route-decision-italian-driver.md) | The clusters that are in no supercluster; kept together so that they can be indexed like the others |

## Connections

- [00_User_Stories_index.md](../../02_Analysis/03_User_Stories/00_User_Stories_index.md) holds the 24 stories behind these questions, with the source line of each quote.
- [02_AI_Ideas_index.md](../02_Ideas/02_AI_Ideas_index.md) holds the concepts proposed for these questions.
- [03_Families_index.md](../02_Ideas/03_Families_index.md) says which of these questions Marco's concepts answer.
- [05_Chosen_concept.md](../02_Ideas/05_Chosen_concept.md): the chosen concept, which lists for each family the questions it answers.
- [SPEC-00_overview.md](../../04_Specifications/SPEC-00_overview.md), [SPEC-02_real-state-of-the-run.md](../../04_Specifications/SPEC-02_real-state-of-the-run.md): the specifications that trace to these questions.
