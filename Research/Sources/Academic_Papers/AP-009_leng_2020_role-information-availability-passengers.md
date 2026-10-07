---
source: external
date: 2026-10-07 19:11
channel: web
method: review
status: draft
grade: A
confidence: n/a
tags: [source, information, disruption]
---

# The role of information availability to passengers in public transport disruptions: An agent-based simulation approach

| | |
| --- | --- |
| **ID** | AP-009 |
| **Link** | [The role of information availability to passengers in public transport disruptions: An agent-based simulation approach](https://doi.org/10.1016/j.tra.2020.01.007) (open-access PDF: <https://www.sciencedirect.com/science/article/pii/S0965856419305075?via%3Dihub>) |
| **Local copy** | [AP-009_leng_2020_role-information-availability-passengers.pdf](../../docs/Academic_Papers/AP-009_leng_2020_role-information-availability-passengers.pdf), provided by Marco on 2026-10-07 |
| **Markdown copy** | [AP-009_leng_2020_role-information-availability-passengers.md](../../docs_md/Academic_Papers/AP-009_leng_2020_role-information-availability-passengers.md) |
| **Produced by** | Nuannuan Leng et al. (2 authors; institutions in Switzerland) |
| **Published by** | Transportation Research Part A Policy and Practice |
| **Kind of source** | Peer-reviewed journal article (hybrid open access) |
| **Published on** | 2020-02-05 |
| **Opened on** | 2026-10-07 |
| **Read** | In full, 23 pages of text and tables 1 and 2 (the equations came out garbled and were read for their meaning in the text only; figures 1 to 13 are described in the text and were not read as images; the reference list was skimmed) (2026-10-07) |
| **Geography** | Study area not extracted; authors' institutions in Switzerland |
| **Language** | English |
| **How it was produced** | The abstract states the method (see below); the paper was not read |
| **Who paid for it or has an interest** | Not checked: the funding statement was not read |
| **Cited by** | 63 citations in OpenAlex on 2026-10-07 (academic papers are counted there, not among the source files) |
| **Grade** | A — 7 points: reliability 3 (peer-reviewed), date 1, citations 2, method 1 |

## What it says

A computer simulation, not a study of real passengers. It models Zurich's population travelling through a three-hour blockage of two rail routes in the evening peak, under three assumptions about what passengers know: nothing, everything in advance, or everything from the moment the disruption starts. With no information the simulated passengers wait and lose two hours on average; told at the moment it starts, with the new timetable and the end time, they lose about ten minutes. The paper also offers a simple way to describe disruption information: who knows, when, where and what.

## Data and quotes used

- Method: agent-based simulation with MATSim on a calibrated model of Zurich; 15,286 agents stand for a 1% sample of the population; disruption: two of three rail routes between Zurich main station and Oerlikon closed from 16:00 to 19:00, trains cancelled; 128 agents affected, standing for 12,800 passengers, 'more than 2% of the population typically using public transport' (PDF p.15-16).
- Behaviour is assumed, not observed: with no information agents wait at the station until service resumes and then follow the original plan; with advance information they can change mode, route, time or activity; with timely information they are told everything at the start, cannot switch to a car or bike, cannot leave work earlier, and re-plan at once. Taxi and shared vehicles are left out (PDF p.8-11).
- Average delay on the affected trip: 2.4 hours with no information (about 2 hours for those who complete their day), 9.8 minutes with timely information, 1.6 minutes with advance information (PDF p.19).
- Median delay: 120 minutes with no information, 3 minutes with timely information, 0 with advance information. 90th percentile: 333.5, 40.2 and 21.9 minutes (table 2, PDF p.22).
- With no information 15.6% of affected agents 'fail to finish their whole-day plan', because the service they were waiting for no longer runs when the line reopens (PDF p.16, p.19).
- Where they go when informed: with timely information bus and tram take 59.9% of the stages of the affected trip (28.2% on a normal day) and the open rail tunnel 10.0% (0.8%); with advance information 27.1% switch to car or bike and 43.5% use bus and tram (table 1, PDF p.18).
- Satisfaction score against a normal day: minus 211.4% with no information, minus 22.1% with timely information, minus 6.5% with advance information, with large variances (PDF p.19).
- The authors' main conclusion: 'agents' satisfaction decreases only slightly when they know of a disruption after its occurrence, as far as they know all details and react immediately' (PDF p.22).
- The four dimensions of disruption information: who is reached (all, some, none), where (anywhere, only at the disrupted station, nowhere), when (in advance, when it starts, never) and what (that it is happening, the replacement timetable, crowding, replacement services, how long it will last, the best route) (PDF p.7-8).
- The minimum every passenger gets: 'All passengers facing the disruption would ultimately know at least that the disruption is occurring, at the time they try to board a service which is not running anymore' (PDF p.7).
- Who is in the 'no information' case in real life, according to the authors: people unfamiliar with the network, people without mobile data, stations without a live link to the control centre, stops without a plan of the services running (PDF p.11).
- Why real data are scarce: observing real behaviour 'is difficult due to rare, unexpected occurrence of disruptions, and possible answers' bias (e.g. anger) from passengers under pressure' (PDF p.2).
- From the literature it reviews: passengers 'value delays differently depending on the informed cause and where they occur within their trip'; information that explains the timing and place of a disruption helps passengers choose the reaction; a study of rail users found that knowing before reaching the station changed the pattern of reactions little; social media 'can only supplement, but not replace' the usual channels (PDF p.2-3).
- Scenarios the authors say are more realistic and did not simulate: passengers learn of the disruption only on reaching the station; they know the start and not the end; only a share of them is informed (PDF p.22).
- The Zurich network is one integrated system 'with a single payment scheme', so the simulated passengers change service 'without extra charges' (PDF p.15).

## Limits

A model. The delays come from the rules given to the simulated passengers, above all the rule that an uninformed passenger waits three hours and an informed one re-plans perfectly and at once; real people do neither. The 'timely' case assumes complete and correct information reaching everyone at the same second, with the end time known, which is the opposite of what the surveys in this research report. One city with a dense, integrated network and one fare system; one disruption; 128 simulated agents; alternatives are assumed to have room. It shows the size of what is at stake between the two extremes, not what happens in practice. No intercity commuting as such, though several of the cancelled services are intercity trains.

## Used in

No finding rests on this source yet.
