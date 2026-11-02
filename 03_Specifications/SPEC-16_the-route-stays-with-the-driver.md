---
source: Claude
date: 2026-11-02 23:38
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, tools, planning]
related: [SPEC-01_foundation.md, 04_Generated_User_Stories.md, 06_Chosen_concept.md]
---

# SPEC-16: The Route Stays With the Driver

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

| Priority | Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- | --- |
| concept | [F-14a](../01_Research/06_Analysis/04_Generated_User_Stories.md) | an Italian driver (desk persona) | Split from F-14. As an Italian driver (desk persona), following a map app, when there is a queue and the app changes the route by itself, or sends him onto a foreign motorway, I want to be asked before the route is changed and warned of the tolls or stickers the route needs, so that he decides the route and is not fined. | All of it |

## Traceability

| | |
| --- | --- |
| **Priority** | concept |
| **Features** | [F-14a](../01_Research/06_Analysis/03_Generated_Features.md) |
| **Touchpoints** | [TP-078](../01_Research/06_Analysis/02_Generated_Touchpoints.md) |
| **Problem questions** | [HMW-17](../02_Ideation/01_How_might_we.md) |
| **Concepts** | [C17-01](../02_Ideation/03_AI_Ideas.md), [C17-02](../02_Ideation/03_AI_Ideas.md), [C17-03](../02_Ideation/03_AI_Ideas.md), [C17-05](../02_Ideation/03_AI_Ideas.md), [C17-10](../02_Ideation/03_AI_Ideas.md); background: [C17-04](../02_Ideation/03_AI_Ideas.md), [C17-06](../02_Ideation/03_AI_Ideas.md) |
| **Families** | [FAM-17](../02_Ideation/04_Human+AI_Ideas.md), [FAM-04](../02_Ideation/04_Human+AI_Ideas.md), [FAM-15](../02_Ideation/04_Human+AI_Ideas.md), [FAM-03](../02_Ideation/04_Human+AI_Ideas.md); background: [FAM-10](../02_Ideation/04_Human+AI_Ideas.md) |
| **Stages covered** | planning, main leg (by car) |
| **[Marks](../02_Ideation/05_Ideas_prioritization.md)** | C17-01 3·1·3, C17-02 3·1·3, C17-03 2·1·3, C17-05 1·3·2, C17-10 2·2·2; background C17-04 3·1·2, C17-06 3·3·2 |
| **Foundation** | Principle 5; The user (preferences); The things it deals with (leg, way); Channels (voice while driving); Rules that hold everywhere |

## Description

When the commuter drives, the route never changes without his yes (C17-01): a queue does not move him off it (C17-02). When a better route appears, the product proposes it with the reason and the gain (C17-03). Before he takes a road that needs a toll or a sticker, in his country or abroad, he is warned, with what is needed (C17-04, C17-06, background, used because the story asks for it). The Italian driver: "Deve rimanere sulla traccia anche se c'è coda se io non gli dico di modificarla" (it must stay on the route even with a queue unless I tell it to change); routed onto a Slovenian motorway without a warning that a sticker was needed, he was fined 300 euros.

## Operating logic

- **Starts when:** the commuter starts a leg by car with a route.
- **Needs to know:** the chosen route; live traffic; roads he prefers or avoids, stated once (C17-05); tolls and stickers by road and country; other drivers' warnings (C17-10, SPEC-03).
- **Rules:**
  1. Keep the chosen route. Never change it without his explicit yes (Foundation, Principle 5).
  2. When another route saves time, propose it, by voice while he drives, with the reason (for example a queue) and the minutes saved (C17-03).
  3. If he does not answer, keep the route.
  4. Before any road on the route that needs a toll or sticker, warn him what is needed and where to get it (C17-04, C17-06), when planning and again before reaching it.
  5. Never propose a route with a toll or sticker without saying so in the proposal.
  6. Respect the roads he prefers or avoids (C17-05).
- **States:** a proposal is `proposed` → `accepted` or `declined` or `expired` (no answer before the junction).
- **The commuter receives:** proposals with reason and gain; warnings of tolls and stickers.

## When things go wrong

- **Toll or sticker rules unknown for a road:** say so when planning.
- **The proposal expires** (junction passed): it is dropped; the route stays.
- **He leaves the route himself:** the product follows his new way and does not take it back [not traced].

## Out of scope

- A sticker bought in one step (C17-07, FAM-21, background), cover for fines (C17-08, [risky]), a rule requiring consent (C17-09, FAM-25), road signs (C17-11), a passenger handling the route (C17-12).
- The state of the usual drive before leaving (F-14b): sent back, no story.

## Acceptance criteria

- **Given** a queue ahead **when** a faster route appears **then** it is proposed with the reason and minutes saved, and the route stays unless he says yes.
- **Given** he does not answer **when** the junction passes **then** the route is unchanged.
- **Given** a route crossing into a country that requires a sticker **when** he plans or approaches the border **then** he is warned what is needed.
- **Given** a road he avoids **when** routes are proposed **then** it is not used.

## Open questions

- Where toll and sticker rules come from (FAM-10, background) [technology choice open].
- Whether F-14a fits a product for intercity commuting by train and car: drivers are a desk persona [not traced].
