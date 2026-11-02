---
source: Claude
date: 2026-11-02 23:59
method: synthesis
status: draft
grade: n/a
confidence: low
tags: [research, desk, synthesis]
related: [TP-031_checking-train-only-days.md, TP-032_receiving-alert-usual-train.md, TP-033_alerts-set-usual-train.md, TP-034_turning-off-ignoring-operator.md, TP-035_using-alerts-usual-trip.md, TP-037_opening-operator-s-app.md, TP-039_news-line-fault-relative.md, TP-040_learning-strike-works-days.md, TP-087_finding-about-cancellation-station.md, TP-089_delay-cancellation-information-comes.md, US-F-03_early-warning-usual-trip.md]
---

# F-03: Early warning on the usual trip

One row of [03_Generated_Features.md](../03_Generated_Features.md), where the impact, the strength rule and the dropped features are explained.

| | |
| --- | --- |
| **What it does** | Tells the commuter, on the days they travel and only when something changes, of a delay, cancellation, strike or works on their usual trip, in time to change the decision to leave |
| **Evidence** | weak |
| **Impact** | High · 10 |
| **Touchpoints it answers** | [TP-031](../01_Touchpoints/TP-031_checking-train-only-days.md), [TP-032](../01_Touchpoints/TP-032_receiving-alert-usual-train.md), [TP-033](../01_Touchpoints/TP-033_alerts-set-usual-train.md), [TP-034](../01_Touchpoints/TP-034_turning-off-ignoring-operator.md), [TP-035](../01_Touchpoints/TP-035_using-alerts-usual-trip.md), [TP-037](../01_Touchpoints/TP-037_opening-operator-s-app.md), [TP-039](../01_Touchpoints/TP-039_news-line-fault-relative.md), [TP-040](../01_Touchpoints/TP-040_learning-strike-works-days.md), [TP-087](../01_Touchpoints/TP-087_finding-about-cancellation-station.md), [TP-089](../01_Touchpoints/TP-089_delay-cancellation-information-comes.md) |
| **User story** | [US-F-03_early-warning-usual-trip.md](../03_User_Stories/US-F-03_early-warning-usual-trip.md) |

## Evidence (note + quote)

- [Matteo_Rizzetto_notes](../../01_Research/04_Interviews/Matteo_Rizzetto_notes.md): the friend gets "one notification on the state of the line when he wakes up, and others timed for the seven minutes he drives to the station"; "ti avvisano davvero all'ultimo per i treni cancellati"
- [OR-009](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-009_apple-app-store_2026_trenitalia-app-it.md): 'ho inoltre impostato le notifiche per il treno che prendo normalmente ma non arrivano'; 'Ogni mattina mi arrivano 8/10 notifiche identiche sui lavori notturni ... ho dovuto disattivarle'
- [OR-005](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-005_apple-app-store_2026_trainline-gb.md): 'I still cannot set a simple notification on 2 trains I use the most to tell me if they are late or cancelled every day'
- [Valentina_Di_Floriano_notes](../../01_Research/04_Interviews/Valentina_Di_Floriano_notes.md): "avevo questo sentore, sesto senso, che forse dove[vo] guardare"
- [survey_results](../../01_Research/05_Survey/07_survey_results.md): Q18, Belgium: "Before leaving home 1 · on the way to the stop 3 · at the stop or station 7 · during the trip 2 · nobody told me 4"

## Connections

- [TP-031_checking-train-only-days.md](../01_Touchpoints/TP-031_checking-train-only-days.md), [TP-032_receiving-alert-usual-train.md](../01_Touchpoints/TP-032_receiving-alert-usual-train.md), [TP-033_alerts-set-usual-train.md](../01_Touchpoints/TP-033_alerts-set-usual-train.md), [TP-034_turning-off-ignoring-operator.md](../01_Touchpoints/TP-034_turning-off-ignoring-operator.md), [TP-035_using-alerts-usual-trip.md](../01_Touchpoints/TP-035_using-alerts-usual-trip.md), [TP-037_opening-operator-s-app.md](../01_Touchpoints/TP-037_opening-operator-s-app.md), [TP-039_news-line-fault-relative.md](../01_Touchpoints/TP-039_news-line-fault-relative.md), [TP-040_learning-strike-works-days.md](../01_Touchpoints/TP-040_learning-strike-works-days.md), [TP-087_finding-about-cancellation-station.md](../01_Touchpoints/TP-087_finding-about-cancellation-station.md), [TP-089_delay-cancellation-information-comes.md](../01_Touchpoints/TP-089_delay-cancellation-information-comes.md): the touchpoints this feature answers.
- [US-F-03_early-warning-usual-trip.md](../03_User_Stories/US-F-03_early-warning-usual-trip.md): the user story written from this feature.
