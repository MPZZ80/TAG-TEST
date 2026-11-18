---
source: Claude
date: 2026-11-18 19:33
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, desk, questions, information, late-info, usual-trip]
related: [00_Open_questions_index.md, SPEC-03_alerts-on-the-usual-trip.md, US-F-03_early-warning-usual-trip.md, F-03_early-warning-usual-trip.md, TP-032_receiving-alert-usual-train.md, Matteo_Rizzetto_notes.md, TP-034_turning-off-ignoring-operator.md, OR-009_apple-app-store_2026_trenitalia-app-it.md, TP-035_using-alerts-usual-trip.md, 07_survey_results.md]
---

# OQ-07: Saying that nothing changed

One open question of the specifications, listed in [00_Open_questions_index.md](00_Open_questions_index.md).

| | |
| --- | --- |
| **Question** | Is "nothing changed" or "no news" ever sent as a message, for example once at the first moment of the day, or only shown inside the product? |
| **Raised in** | [SPEC-03](../SPEC-03_alerts-on-the-usual-trip.md) |
| **Marker** | [not traced] |
| **Research support** | Partly supported: the research shows the situation and some signs, not the answer |
| **State** | open |
| **Decision** | none yet |
| **Decided on** | none yet |

## Why it is open

SPEC-03 sends only changes, and does not send "no news". Whether a calm confirmation is wanted is not in the stories.

## Chain to the research

From the specification back to the evidence: each story under the specification it feeds, each feature under its story, each touchpoint under the feature that answers it, each quote under the touchpoint that holds it. Quotes are copied from the touchpoint and feature files.

| Step | Item | What it says |
| --- | --- | --- |
| Specification | [SPEC-03](../SPEC-03_alerts-on-the-usual-trip.md) | Alerts on the Usual Trip |
| User story | [F-03](../../02_Analysis/03_User_Stories/US-F-03_early-warning-usual-trip.md) | As the single-line commuter, during the seven minutes he drives to the station on one of his three office days, I want to be told, only when something changes, of a delay, cancellation, strike or works on my usual train, in time to change the decision to leave, so that he can wait in the warm car if the train is late. |
| Feature | [F-03](../../02_Analysis/02_Features/F-03_early-warning-usual-trip.md) | Early warning on the usual trip |
| Touchpoint | [TP-032](../../02_Analysis/01_Touchpoints/TP-032_receiving-alert-usual-train.md) | Receiving an alert on the usual train, timed for leaving |
| Interview | [Matteo Rizzetto notes](../../01_Research/04_Interviews/Matteo_Rizzetto_notes.md) | A friend gets "one notification on the state of the line when he wakes up" |
| Touchpoint | [TP-034](../../02_Analysis/01_Touchpoints/TP-034_turning-off-ignoring-operator.md) | Turning off or ignoring the operator's notifications |
| Source | [OR-009](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-009_apple-app-store_2026_trenitalia-app-it.md) | 'Ogni mattina mi arrivano 8/10 notifiche identiche sui lavori notturni ... ho dovuto disattivarle' (every morning I get 8/10 identical notifications about night works ... I had to turn them off) |
| Interview | [Matteo Rizzetto notes](../../01_Research/04_Interviews/Matteo_Rizzetto_notes.md) | "Io odio le notifiche che non siano tali" (I hate notifications that are not real ones) |
| Touchpoint | [TP-035](../../02_Analysis/01_Touchpoints/TP-035_using-alerts-usual-trip.md) | Not using alerts on the usual trip |
| Survey | [survey results](../../01_Research/05_Survey/07_survey_results.md) | Q14, Belgium: "no, would like them 2 · no, do not want them 8 · did not know it was possible 5" (of 17) |

## What the research says

The research points both ways. One friend of a participant gets a message on the state of the line every morning. Repeated identical messages make people turn them off, and most Belgian respondents do not want alerts. It does not settle whether a calm confirmation helps or is noise.

## Connections

- [00_Open_questions_index.md](00_Open_questions_index.md): the list of all the open questions.
- [SPEC-03_alerts-on-the-usual-trip.md](../SPEC-03_alerts-on-the-usual-trip.md): raises this question.
- [US-F-03_early-warning-usual-trip.md](../../02_Analysis/03_User_Stories/US-F-03_early-warning-usual-trip.md): a story behind the question.
- [F-03_early-warning-usual-trip.md](../../02_Analysis/02_Features/F-03_early-warning-usual-trip.md): the feature behind that story.
- [TP-032_receiving-alert-usual-train.md](../../02_Analysis/01_Touchpoints/TP-032_receiving-alert-usual-train.md): the moment of the journey the evidence is about.
- [Matteo_Rizzetto_notes.md](../../01_Research/04_Interviews/Matteo_Rizzetto_notes.md): an interview quoted in the chain.
- [TP-034_turning-off-ignoring-operator.md](../../02_Analysis/01_Touchpoints/TP-034_turning-off-ignoring-operator.md): the moment of the journey the evidence is about.
- [OR-009_apple-app-store_2026_trenitalia-app-it.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-009_apple-app-store_2026_trenitalia-app-it.md): a source quoted in the chain.
- [TP-035_using-alerts-usual-trip.md](../../02_Analysis/01_Touchpoints/TP-035_using-alerts-usual-trip.md): the moment of the journey the evidence is about.
- [07_survey_results.md](../../01_Research/05_Survey/07_survey_results.md): the survey answers quoted in the chain.
