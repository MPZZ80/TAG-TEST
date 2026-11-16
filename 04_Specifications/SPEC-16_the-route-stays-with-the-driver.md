---
source: Claude
date: 2026-11-16 23:04
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, tools, planning]
related: [US-F-14a_asking-before-rerouting-tolls.md, F-14a_asking-before-rerouting-tolls.md, HMW-17_keep-route-decision-italian-driver.md, SPEC-00_overview.md, SPEC-01_foundation.md, OQ-03_reaching-the-commuter-without-looking.md, OQ-31_whether-a-drivers-route-fits.md]
---

# SPEC-16: The Route Stays With the Driver

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

One row per story this specification serves, copied as written.

| Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- |
| [F-14a](../02_Analysis/03_User_Stories/US-F-14a_asking-before-rerouting-tolls.md) | an Italian driver (desk persona) | As an Italian driver (desk persona), following a map app, when there is a queue and the app changes the route by itself, or sends him onto a foreign motorway, I want to be asked before the route is changed and warned of the tolls or stickers the route needs, so that he decides the route and is not fined. | All of it |

**Why these stories belong together:** One story.

## Traceability

| | |
| --- | --- |
| **Features** | [F-14a](../02_Analysis/02_Features/F-14a_asking-before-rerouting-tolls.md) |
| **Touchpoints** | [TP-078](../02_Analysis/01_Touchpoints/TP-078_following-navigation-app-changes.md) |
| **Problem questions** | [HMW-17](../03_Ideation/01_How_Might_We/HMW-17_keep-route-decision-italian-driver.md) |
| **Concepts** | [C17-01](../03_Ideation/02_Ideas/C17-01_ask-first.md), [C17-02](../03_Ideation/02_Ideas/C17-02_stay-route.md), [C17-03](../03_Ideation/02_Ideas/C17-03_why-changed.md), [C17-04](../03_Ideation/02_Ideas/C17-04_tolls-stated.md), [C17-05](../03_Ideation/02_Ideas/C17-05_preferred-roads.md), [C17-06](../03_Ideation/02_Ideas/C17-06_foreign-trip-check.md), [C17-07](../03_Ideation/02_Ideas/C17-07_sticker-one-step.md), [C17-08](../03_Ideation/02_Ideas/C17-08_cover-fines.md), [C17-09](../03_Ideation/02_Ideas/C17-09_consent-required.md), [C17-10](../03_Ideation/02_Ideas/C17-10_drivers-warn-drivers.md), [C17-11](../03_Ideation/02_Ideas/C17-11_signs-before-border.md), [C17-12](../03_Ideation/02_Ideas/C17-12_passenger-decides.md) |
| **Families** | [FAM-03](../03_Ideation/02_Ideas/FAM-03_travellers-report.md) Travellers report, [FAM-04](../03_Ideation/02_Ideas/FAM-04_source-made-visible.md) The source made visible, [FAM-10](../03_Ideation/02_Ideas/FAM-10_lies-ahead-known-beforehand.md) What lies ahead, known beforehand, [FAM-11](../03_Ideation/02_Ideas/FAM-11_place-shows.md) The place shows it, [FAM-15](../03_Ideation/02_Ideas/FAM-15_knows-traveller.md) It knows the traveller, [FAM-17](../03_Ideation/02_Ideas/FAM-17_decision-stays-person.md) The decision stays with the person, [FAM-21](../03_Ideation/02_Ideas/FAM-21_prices-tickets-fit-real.md) Prices and tickets that fit the real use, [FAM-22](../03_Ideation/02_Ideas/FAM-22_money-covers-failure.md) Money covers the failure, [FAM-25](../03_Ideation/02_Ideas/FAM-25_rules-rights.md) Rules and rights, [FAM-26](../03_Ideation/02_Ideas/FAM-26_travellers-carry-together.md) Travellers carry it together |
| **Stages covered** | main leg |
| **Marks** | FAM-03 2 · 2 · 3; FAM-04 2 · 1 · 3; FAM-10 3 · 1 · 3; FAM-11 2 · 1 · 3; FAM-15 2 · 3 · 2; FAM-17 3 · 1 · 3; FAM-21 2 · 1 · 1; FAM-22 1 · 1 · 1; FAM-25 2 · 1 · 1; FAM-26 1 · 2 · 3 (valuable · feasible · relevant, by family, from [04_Ideas_prioritization.md](../03_Ideation/02_Ideas/04_Ideas_prioritization.md)) |
| **Foundation** | Principle 4 |

Concepts and families are references only: the behaviour below comes from the stories.

## Description

When the commuter drives, asks them before the route is changed, and warns them of the tolls or stickers a route needs.

## Operating logic

- **Starts when:** A driving leg is under way and a faster route is found, or a route enters a road with a toll or sticker.
- **Needs to know:** The driving route (here); traffic and road rules: queues, tolls, stickers by country (third parties).
- **Rules:**
  1. Keep the route the driver chose until they agree to change it.
  2. When a faster route is found, ask the driver, with the reason and the time saved.
  3. Before a route enters a road that needs a toll or sticker, warn the driver what it needs.
  4. Change nothing if the driver does not answer.
- **States:** Route: `kept` → `change asked` → `changed` or `kept`.
- **The user receives:** A question and a warning, in a form a driver can take in [technology choice open].
- **Depends on:** none
- **Provides:** none

## When things go wrong

- **No toll data for a country:** the driver is told it is unknown.
- **The driver does not answer:** the route stays as it was.

## Out of scope

Comparing car and train (SPEC-09).

## Acceptance criteria

- **Given** a queue ahead and a faster route **when** the product finds it **then** the driver is asked before the route changes.
- **Given** a route onto a foreign motorway that needs a sticker **when** it is planned **then** the driver is warned.
- **Given** the driver does not answer **when** the question times out **then** the route stays as it was.

## Open questions

Each question has its own file in [01_Open_Questions/](01_Open_Questions/00_Open_questions_index.md), with its chain to the research.

- **[OQ-03](01_Open_Questions/OQ-03_reaching-the-commuter-without-looking.md)** How does a message reach a commuter who cannot look at a screen, for example while driving to the station or on a rerouted drive? [technology choice open] Research: ⚠ not supported.
- **[OQ-31](01_Open_Questions/OQ-31_whether-a-drivers-route-fits.md)** Does a product mostly about public transport also look after a commuter's drive, as story F-14a asks? [not traced] Research: partly.

## Connections

- [US-F-14a_asking-before-rerouting-tolls.md](../02_Analysis/03_User_Stories/US-F-14a_asking-before-rerouting-tolls.md): a story this specification serves.
- [F-14a_asking-before-rerouting-tolls.md](../02_Analysis/02_Features/F-14a_asking-before-rerouting-tolls.md): the feature behind story F-14a.
- [HMW-17_keep-route-decision-italian-driver.md](../03_Ideation/01_How_Might_We/HMW-17_keep-route-decision-italian-driver.md): the problem question written from a story it serves.
- [SPEC-00_overview.md](SPEC-00_overview.md): the overview that lists this specification.
- [SPEC-01_foundation.md](SPEC-01_foundation.md): the foundation it stands on.
- [OQ-03_reaching-the-commuter-without-looking.md](01_Open_Questions/OQ-03_reaching-the-commuter-without-looking.md): an open question this specification raises.
- [OQ-31_whether-a-drivers-route-fits.md](01_Open_Questions/OQ-31_whether-a-drivers-route-fits.md): an open question this specification raises.
