---
source: Claude
date: 2026-11-21 18:11
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, questions, disruption, mode-choice]
related: [00_Open_questions_index.md, SPEC-02_real-state-of-the-run.md]
---

# OQ-36: The map of a route

One open question of the specifications, listed in [00_Open_questions_index.md](00_Open_questions_index.md).

| | |
| --- | --- |
| **Question** | Which map shows the route of a leg, the live position of the vehicle and the routes of the alternatives in the product, and from which service (a map and routing service, open map data such as OpenStreetMap, the operators' own maps)? The live position itself depends on [OQ-01](OQ-01_sources-of-the-real-position.md). |
| **Raised in** | [SPEC-02](../SPEC-02_real-state-of-the-run.md) (rules 6 and 17, `<leg-map>` and `<route-map>`) |
| **Marker** | [technology choice open] |
| **Research support** | ⚠ Not supported by the research: no note asks for a map; the maps (of an alternative, then of each leg with the live position) were asked by Marco on 2026-11-19 |
| **State** | open |
| **Decision** | none yet |
| **Decided on** | none yet |

## Why it is open

The prototype has no backend and calls no service, so the route is drawn as a sketch from approximate points in the mock data. A real map needs a map service and its terms of use.

## Chain to the research

| Step | Item | What it says |
| --- | --- | --- |
| Specification | [SPEC-02](../SPEC-02_real-state-of-the-run.md) | State of the run, rule 6: a map of each leg with the live position of the vehicle; rule 17: the page of an alternative with a map of its route |
| Request | Marco, 2026-11-19 | A map with the route of the alternative, to see the difference with the planned trip |

## What is known about the services

Checked on 2026-11-21 in public pricing pages and guides; prices change, so they are to be confirmed before a choice.

- **Google Maps Platform:** the map in a native Android or iOS app (Maps SDK) is free with unlimited use, as Google's own usage page says; dynamic maps in a web page or with a map ID have a free cap of 10,000 loads a month, then about $7 per 1,000. Routes, places and Street View are billed separately ([pricing overview](https://developers.google.com/maps/billing/overview/), [Maps SDK for Android usage and billing](https://developers.google.com/maps/documentation/android-sdk/usage-and-billing)).
- **Mapbox:** free up to 25,000 monthly active users on mobile, then from $2 per 1,000; a guide gives 50,000 free web map loads a month ([Mapbox pricing](https://www.mapbox.com/pricing/), [Woosmap guide](https://www.woosmap.com/blog/mapbox-pricing)).
- **OpenStreetMap:** the map data are free with attribution, but the public tile servers are not meant for an app's traffic; an app uses a tile provider or serves its own tiles (from the agent's knowledge, not checked in this session).
- **The live position** of trains, buses and the underground is not given by a map service: it needs the operators' live data ([OQ-01](OQ-01_sources-of-the-real-position.md)).

## What the research says

Nothing: the research asks for the ways still open when a trip breaks (F-02), not for a map of them.

## Connections

- [SPEC-02_real-state-of-the-run.md](../SPEC-02_real-state-of-the-run.md): the specification that raises this question.
