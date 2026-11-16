---
source: Claude
date: 2026-11-16 23:04
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, interview, questions, information, tools]
related: [00_Open_questions_index.md, SPEC-04_alerts-on-the-usual-trip.md, US-F-03_early-warning-usual-trip.md, F-03_early-warning-usual-trip.md, TP-032_receiving-alert-usual-train.md, Matteo_Rizzetto_notes.md, SPEC-16_the-route-stays-with-the-driver.md, US-F-14a_asking-before-rerouting-tolls.md, F-14a_asking-before-rerouting-tolls.md, TP-078_following-navigation-app-changes.md, OR-001_apple-app-store_2026_google-maps-it.md, SPEC-15_stop-approaching.md, US-F-23_stop-approaching.md, F-23_stop-approaching.md, TP-074_staying-alert-so-miss.md, SPEC-01_foundation.md]
---

# OQ-03: Reaching the commuter without looking: driving

One open question of the specifications, listed in [00_Open_questions_index.md](00_Open_questions_index.md).

| | |
| --- | --- |
| **Question** | How does a message reach a commuter who cannot look at a screen, for example while driving to the station or on a rerouted drive? |
| **Raised in** | [SPEC-01](../SPEC-01_foundation.md), [SPEC-04](../SPEC-04_alerts-on-the-usual-trip.md), [SPEC-15](../SPEC-15_stop-approaching.md), [SPEC-16](../SPEC-16_the-route-stays-with-the-driver.md) |
| **Marker** | [technology choice open] |
| **Research support** | ⚠ Not supported by the research: it shows the situation at most, not the answer |
| **State** | open |
| **Decision** | none yet |
| **Decided on** | none yet |

## Why it is open

SPEC-04 sends alerts during the drive to the station, SPEC-16 asks a driver before rerouting, SPEC-15 warns before the stop. Each needs a form the commuter takes in without reading.

## Chain to the research

From the specification back to the evidence: each story under the specification it feeds, each feature under its story, each touchpoint under the feature that answers it, each quote under the touchpoint that holds it. Quotes are copied from the touchpoint and feature files.

| Step | Item | What it says |
| --- | --- | --- |
| Specification | [SPEC-04](../SPEC-04_alerts-on-the-usual-trip.md) | Alerts on the Usual Trip |
| User story | [F-03](../../02_Analysis/03_User_Stories/US-F-03_early-warning-usual-trip.md) | As the single-line commuter, during the seven minutes he drives to the station on one of his three office days, I want to be told, only when something changes, of a delay, cancellation, strike or works on my usual train, in time to change the decision to leave, so that he can wait in the warm car if the train is late. |
| Feature | [F-03](../../02_Analysis/02_Features/F-03_early-warning-usual-trip.md) | Early warning on the usual trip |
| Touchpoint | [TP-032](../../02_Analysis/01_Touchpoints/TP-032_receiving-alert-usual-train.md) | Receiving an alert on the usual train, timed for leaving |
| Interview | [Matteo Rizzetto notes](../../01_Research/04_Interviews/Matteo_Rizzetto_notes.md) | A friend gets "one notification on the state of the line when he wakes up, and others timed for the seven minutes he drives to the station" |
| Specification | [SPEC-16](../SPEC-16_the-route-stays-with-the-driver.md) | The Route Stays With the Driver |
| User story | [F-14a](../../02_Analysis/03_User_Stories/US-F-14a_asking-before-rerouting-tolls.md) | As an Italian driver (desk persona), following a map app, when there is a queue and the app changes the route by itself, or sends him onto a foreign motorway, I want to be asked before the route is changed and warned of the tolls or stickers the route needs, so that he decides the route and is not fined. |
| Feature | [F-14a](../../02_Analysis/02_Features/F-14a_asking-before-rerouting-tolls.md) | Asking before rerouting, with tolls warned (split from F-14) |
| Touchpoint | [TP-078](../../02_Analysis/01_Touchpoints/TP-078_following-navigation-app-changes.md) | Following the navigation app, which changes route by itself or ignores known works and tolls |
| Source | [OR-001](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-001_apple-app-store_2026_google-maps-it.md) | 'lui decide per me' (it decides for me); routed onto a motorway without a warning that a toll sticker was needed |
| Specification | [SPEC-15](../SPEC-15_stop-approaching.md) | The Stop Approaching |
| User story | [F-23](../../02_Analysis/03_User_Stories/US-F-23_stop-approaching.md) | As a young commuter in Madrid (desk persona), on a bus, two stops before her own, I want to be told when my stop is approaching, so that she can sit without thinking about the stop and not miss it if she falls asleep. |
| Feature | [F-23](../../02_Analysis/02_Features/F-23_stop-approaching.md) | The stop approaching |
| Touchpoint | [TP-074](../../02_Analysis/01_Touchpoints/TP-074_staying-alert-so-miss.md) | Staying alert so as not to miss the stop |

## What the research says

The research shows the moment (alerts timed for the drive, told second hand by one participant; a driver rerouted without being asked) but not how a message should reach someone who is driving. It is a technology choice: the research gives the need only.

## Connections

- [00_Open_questions_index.md](00_Open_questions_index.md): the list of all the open questions.
- [SPEC-01_foundation.md](../SPEC-01_foundation.md): raises this question.
- [SPEC-04_alerts-on-the-usual-trip.md](../SPEC-04_alerts-on-the-usual-trip.md): raises this question.
- [US-F-03_early-warning-usual-trip.md](../../02_Analysis/03_User_Stories/US-F-03_early-warning-usual-trip.md): a story behind the question.
- [F-03_early-warning-usual-trip.md](../../02_Analysis/02_Features/F-03_early-warning-usual-trip.md): the feature behind that story.
- [TP-032_receiving-alert-usual-train.md](../../02_Analysis/01_Touchpoints/TP-032_receiving-alert-usual-train.md): the moment of the journey the evidence is about.
- [Matteo_Rizzetto_notes.md](../../01_Research/04_Interviews/Matteo_Rizzetto_notes.md): an interview quoted in the chain.
- [SPEC-16_the-route-stays-with-the-driver.md](../SPEC-16_the-route-stays-with-the-driver.md): raises this question.
- [US-F-14a_asking-before-rerouting-tolls.md](../../02_Analysis/03_User_Stories/US-F-14a_asking-before-rerouting-tolls.md): a story behind the question.
- [F-14a_asking-before-rerouting-tolls.md](../../02_Analysis/02_Features/F-14a_asking-before-rerouting-tolls.md): the feature behind that story.
- [TP-078_following-navigation-app-changes.md](../../02_Analysis/01_Touchpoints/TP-078_following-navigation-app-changes.md): the moment of the journey the evidence is about.
- [OR-001_apple-app-store_2026_google-maps-it.md](../../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-001_apple-app-store_2026_google-maps-it.md): a source quoted in the chain.
- [SPEC-15_stop-approaching.md](../SPEC-15_stop-approaching.md): raises this question.
- [US-F-23_stop-approaching.md](../../02_Analysis/03_User_Stories/US-F-23_stop-approaching.md): a story behind the question.
- [F-23_stop-approaching.md](../../02_Analysis/02_Features/F-23_stop-approaching.md): the feature behind that story.
- [TP-074_staying-alert-so-miss.md](../../02_Analysis/01_Touchpoints/TP-074_staying-alert-so-miss.md): the moment of the journey the evidence is about.
