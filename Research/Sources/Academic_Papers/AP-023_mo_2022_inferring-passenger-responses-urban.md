---
source: external
date: 2026-10-07 19:15
channel: web
method: review
status: draft
grade: B
confidence: n/a
tags: [source, disruption]
---

# Inferring passenger responses to urban rail disruptions using smart card data: A probabilistic framework

| | |
| --- | --- |
| **ID** | AP-023 |
| **Link** | [Inferring passenger responses to urban rail disruptions using smart card data: A probabilistic framework](https://doi.org/10.1016/j.tre.2022.102628) (open-access PDF: <https://dspace.mit.edu/bitstream/1721.1/156454/2/Inferring_passenger_behaviors_after_rail_disruptions_using_smart_card_data_Journal.pdf>) |
| **Local copy** | [AP-023_mo_2022_inferring-passenger-responses-urban.pdf](../../docs/Academic_Papers/AP-023_mo_2022_inferring-passenger-responses-urban.pdf), provided by Marco on 2026-10-07 |
| **Markdown copy** | [AP-023_mo_2022_inferring-passenger-responses-urban.md](../../docs_md/Academic_Papers/AP-023_mo_2022_inferring-passenger-responses-urban.md) |
| **Produced by** | Baichuan Mo et al. (3 authors; institutions in United States) |
| **Published by** | Transportation Research Part E Logistics and Transportation Review |
| **Kind of source** | Peer-reviewed journal article (green open access) |
| **Published on** | 2022-02-23 |
| **Opened on** | 2026-10-07 |
| **Read** | Main text in full, 30 pages (author's final manuscript from the MIT repository): introduction, framework, the case study, table 2 and the conclusions. The equations of section 3 were read for their logic, not checked. Appendix A, with the formulas for the remaining passenger groups, and figures 1 to 11 were not read; the reference list was skimmed (2026-10-07) |
| **Geography** | Study area not extracted; authors' institutions in United States |
| **Language** | English |
| **How it was produced** | Not stated in the abstract or no abstract; the paper was not read |
| **Who paid for it or has an interest** | Not checked: the funding statement was not read |
| **Cited by** | 44 citations in OpenAlex on 2026-10-07 (academic papers are counted there, not among the source files) |
| **Grade** | B — 5 points: reliability 3 (peer-reviewed), date 1, citations 1, method 0 |

## What it says

A method, tested on one real incident, for telling from fare-card taps what passengers did when a rail line stopped. Two trains collided on the Chicago network at 9:09 on a weekday morning and five stations were blocked for 70 minutes. Of the passengers affected, about 70% stayed on rail by another route, 16% took a bus, 7% waited or left later and 8% left public transport; almost nobody cancelled the trip. The authors stress that this incident had a parallel line close by. It is one of the few sources in this research with behaviour observed in data and not stated in a survey, and it is an urban one.

## Data and quotes used

- Method: fare-card and train-location data of the Chicago Transit Authority, a system where cards are tapped only on entry; each passenger's taps on the incident day are compared with the same passenger's taps on normal days to estimate the probability that an unusual tap is a reaction to the incident; 19 possible reactions are defined by where the passenger was when it happened. Normal days: the Fridays of September and October 2019 (PDF p.4-8, p.21).
- The incident: 24 September 2019, 9:09, collision of two trains at Sedgwick; five stations on two parallel lines blocked; service resumed at 10:19. Passengers in blocked trains and stations were put off the system; closure signs at the gates; the operator announced it in its fare app, on Twitter and over train and platform announcements 'right after the disruption'; shuttle buses ran between two stations with no tap needed (PDF p.20-21).
- Who was affected: 97.43% of passengers travelling in the period were not affected (PDF p.26-27).
- What the affected passengers did: used rail by another route 69.51%; used a bus 15.72%; used rail on the same route by waiting or leaving later 6.57%; did not use public transport 8.09%, which includes the untapped shuttle buses, ride-hailing, walking and cancelled trips (table 2, PDF p.27).
- Passengers already inside the system when it happened: 46% changed line without leaving the system, 23% left and entered another rail station, 19% left and took a bus, about 10% used a mode the cards do not see, 2% waited, 0.3% cancelled (PDF p.27).
- Passengers who had not yet entered: 45% changed line inside the system, 25% entered at a different station, 13% took a bus, 11% delayed their departure, 5% used an unseen mode, about 1% cancelled. The authors: 'when passengers are out of the system, they are more flexible in choosing rail routes' (PDF p.27).
- Why rail kept most of them: 'The incident we analyzed has high service redundancy', with a third line running next to the two blocked ones; entries on that line rose by 1,413 in the incident period while the two blocked lines lost at least 1,186 (PDF p.23, p.29).
- Scale of people put off trains: the operator's log records about 300 passengers unloaded from one train and about 500 from another, and the data suggest 437 more waiting on the platforms of the blocked stations (PDF p.28).
- The stage of the trip matters: 'Transit users' behavior can be significantly different in the event of service disruptions and vary depending on the stage of the trip at the time of the disruption' (PDF p.3, citing Lin et al. 2018).
- When people react at all: 'passenger responses to a service disruption are generally triggered when the delay time is long enough (e.g., greater than 30 minutes)' (PDF p.6, citing Sun et al. 2016).
- State of knowledge according to the authors: 'nearly all of the previous research investigated passenger behavior using survey-based methods', and stated-preference surveys 'may not reflect the actual travel choices of passengers' (PDF p.3).
- What the data cannot see: a passenger who takes a ride-hailing car both ways looks the same as one who cancelled; the share who would change line when a transfer exists (0.95) and one other share (0.9) are not measured but set from an earlier survey of Chicago riders (PDF p.16, p.21).
- Paying again: passengers put off a blocked train who continued by bus or rail tapped in again and 'were only charged a small transfer fee'; sometimes staff let them ride free (PDF p.21 and footnote 4).
- Accuracy on simulated data: average error of 20.5% in the size of each group, against 60.3% for the simple rule used in earlier studies, which over-counts because it treats every unusual tap as a reaction (PDF p.25).

## Limits

One incident on one network, chosen because it had many alternatives close by, so the 70% who stayed on rail describe a favourable case and not disruptions in general; the authors say so. Urban metro, not intercity: on an intercity line there is usually no parallel line. There is no direct check of the real-data results; the two checks are indirect. Several splits rest on assumed shares, not on data. Nothing on what passengers were told beyond the channels listed, on whether the information reached them or on how long they waited. Data from 2019. The paper's aim is the method; the behavioural result is its by-product. Appendix A was not read.

## Used in

No finding rests on this source yet.
