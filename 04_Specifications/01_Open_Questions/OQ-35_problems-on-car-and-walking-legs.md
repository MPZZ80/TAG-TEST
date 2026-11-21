---
source: Claude
date: 2026-11-18 23:55
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, desk, questions, disruption, first-last-mile]
related: [00_Open_questions_index.md, SPEC-02_real-state-of-the-run.md, F-14b_state-usual-drive-known.md, F-05_legs-both-ends-real.md, TP-045_checking-traffic-app-before.md, TP-079_sitting-traffic-nothing-else.md, TP-108_car-commuter-meets-traffic.md, 07_survey_results.md, Matteo_Rizzetto_notes.md, GR-035_bfs-are_2023_mikrozensus-mobilitaet-verkehr-2021.md, OR-001_apple-app-store_2026_google-maps-it.md]
---

# OQ-35: Problems on car and walking legs

One open question of the specifications, listed in [00_Open_questions_index.md](00_Open_questions_index.md).

| | |
| --- | --- |
| **Question** | Do commuters want to be told of traffic and accidents on their car legs, and of works or closed streets on their walking legs? And which services would tell the product: a traffic service (for example Google Maps Platform, TomTom or HERE, which offer traffic and incident data to developers), community reports, the city's open data on road works? |
| **Raised in** | [SPEC-02](../SPEC-02_real-state-of-the-run.md) (rule 15), and [SPEC-04](../SPEC-04_todays-trip-at-a-glance.md) which shows the same on Today |
| **Marker** | [not traced] (the value for the commuter); [technology choice open] (the source of the data) |
| **Research support** | Partly: traffic on the drive is in the research, but the feature that answered it (F-14b) was sent back because no outcome the person seeks could be traced; closed streets on walking legs are not in the research |
| **State** | open |
| **Decision** | none yet |
| **Decided on** | none yet |

## Why it is open

Marco asked on 2026-11-18 that problems on car and walking legs be shown as a use case of the Run page, as for the runs. The prototype shows them from mock data; the product would need a source it cannot reach without a backend, and the research does not say what the commuter would do with them.

## Chain to the research

| Step | Item | What it says |
| --- | --- | --- |
| Specification | [SPEC-02](../SPEC-02_real-state-of-the-run.md) | State of the run, rule 15 |
| Feature | [F-14b](../../02_Analysis/02_Features/F-14b_state-usual-drive-known.md) | The state of the usual drive, with known works: sent back, value not traced |
| Touchpoint | [TP-045](../../02_Analysis/01_Touchpoints/TP-045_checking-traffic-app-before.md) | Checking a traffic app before driving |
| Survey | [07_survey_results](../../01_Research/05_Survey/07_survey_results.md) | "Checks a traffic app before leaving" |
| Touchpoint | [TP-108](../../02_Analysis/01_Touchpoints/TP-108_car-commuter-meets-traffic.md) | A car commuter meets traffic and waits |
| Survey | [07_survey_results](../../01_Research/05_Survey/07_survey_results.md) | "the last problem was traffic, met during the trip, and he waited" |
| Touchpoint | [TP-079](../../02_Analysis/01_Touchpoints/TP-079_sitting-traffic-nothing-else.md) | Sitting in traffic, with nothing else to do |
| Interview | [Matteo Rizzetto notes](../../01_Research/04_Interviews/Matteo_Rizzetto_notes.md) | "è proprio una tortura per me stare fermo in macchina" (it is real torture for me to be stuck in the car) |
| Source | [GR-035](../../01_Research/03_Desk_Research/Doc_Notes/Global_Reports/GR-035_bfs-are_2023_mikrozensus-mobilitaet-verkehr-2021.md) | 21% of drivers are in a traffic jam on the way to work or study at least once a week |
| Source | [OR-001](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-001_apple-app-store_2026_google-maps-it.md) | 'l'aumento del tempo di percorrenza era perfettamente prevedibile' (the longer journey time was perfectly predictable) |
| Feature | [F-05](../../02_Analysis/02_Features/F-05_legs-both-ends-real.md) | The legs at both ends at their real length (walking legs) |

## What the research says

Traffic on the way to work is common (a fifth of drivers weekly in Switzerland) and people check a traffic app before leaving, but no note says what the commuter would do with the warning; the feature was sent back for that reason. On walking legs the research asks for real lengths (F-05), not for works or closures.

## Connections

- [SPEC-02_real-state-of-the-run.md](../SPEC-02_real-state-of-the-run.md): the specification that raises this question.
- [F-14b_state-usual-drive-known.md](../../02_Analysis/02_Features/F-14b_state-usual-drive-known.md), [F-05_legs-both-ends-real.md](../../02_Analysis/02_Features/F-05_legs-both-ends-real.md): the features behind it.
- [TP-045_checking-traffic-app-before.md](../../02_Analysis/01_Touchpoints/TP-045_checking-traffic-app-before.md), [TP-079_sitting-traffic-nothing-else.md](../../02_Analysis/01_Touchpoints/TP-079_sitting-traffic-nothing-else.md), [TP-108_car-commuter-meets-traffic.md](../../02_Analysis/01_Touchpoints/TP-108_car-commuter-meets-traffic.md): the touchpoints of the chain.
- [07_survey_results.md](../../01_Research/05_Survey/07_survey_results.md), [Matteo_Rizzetto_notes.md](../../01_Research/04_Interviews/Matteo_Rizzetto_notes.md), [GR-035_bfs-are_2023_mikrozensus-mobilitaet-verkehr-2021.md](../../01_Research/03_Desk_Research/Doc_Notes/Global_Reports/GR-035_bfs-are_2023_mikrozensus-mobilitaet-verkehr-2021.md), [OR-001_apple-app-store_2026_google-maps-it.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-001_apple-app-store_2026_google-maps-it.md): the evidence quoted.
