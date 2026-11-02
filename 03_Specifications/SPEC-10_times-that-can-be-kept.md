---
source: Claude
date: 2026-11-02 23:38
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output, planning, tight-connection, first-last-mile, unreliable-service, workarounds]
related: [SPEC-01_foundation.md, SPEC-03_travellers-report.md, SPEC-08_the-connection-ahead.md, SPEC-09_every-way-side-by-side.md, 04_Generated_User_Stories.md, 06_Chosen_concept.md]
---

# SPEC-10: Times That Can Be Kept

Use this file as a prompt: it describes one behaviour to build, independent of any technology.

## User stories served

| Priority | Story ID or feature | Persona | Story | What this specification covers of it |
| --- | --- | --- | --- | --- |
| concept | [F-05](../01_Research/06_Analysis/04_Generated_User_Stories.md) | a London traveller (desk persona) | As a London traveller (desk persona), changing at King's Cross for a train to Luton, when the app says the walk to the platform takes 3 minutes, I want the way to the first stop and from the last one, where to board included, planned and timed at the length it really takes, so that I do not miss the train after running for 10 minutes. | All of it |
| concept | [F-07](../01_Research/06_Analysis/04_Generated_User_Stories.md) | a German rail regular (desk persona) | As a German rail regular (desk persona), logging every trip and his connections, when the planner offers a change shorter than his own rule, I want the trip planned with my own minimum change time, margin, number of changes and own leg, and to see how tight each connection is, so that he relies only on connections he counts as real and not on "connections on paper". | All of it; regulars' marks on connections come from SPEC-03 |
| concept | [F-13](../01_Research/06_Analysis/04_Generated_User_Stories.md) | the Verona–Milan commuter | As the Verona–Milan commuter, planning the trip while taking it for granted that his train will be 5 to 15 minutes late, I want to see the trip time and arrival I can expect from works and from how late that train usually is, so that the time he is promised is the time that is kept. | All of it |

These stories belong together because each asks that the times used to plan a trip (a walk, a change, an arrival) be the times that really happen, not the nominal ones, so that the plan can be kept.

## Traceability

| | |
| --- | --- |
| **Priority** | concept |
| **Features** | [F-05](../01_Research/06_Analysis/03_Generated_Features.md), [F-07](../01_Research/06_Analysis/03_Generated_Features.md), [F-13](../01_Research/06_Analysis/03_Generated_Features.md) |
| **Touchpoints** | [TP-051](../01_Research/06_Analysis/02_Generated_Touchpoints.md), [TP-054](../01_Research/06_Analysis/02_Generated_Touchpoints.md), [TP-056](../01_Research/06_Analysis/02_Generated_Touchpoints.md), [TP-059](../01_Research/06_Analysis/02_Generated_Touchpoints.md), [TP-064](../01_Research/06_Analysis/02_Generated_Touchpoints.md), [TP-081](../01_Research/06_Analysis/02_Generated_Touchpoints.md), [TP-082](../01_Research/06_Analysis/02_Generated_Touchpoints.md), [TP-018](../01_Research/06_Analysis/02_Generated_Touchpoints.md), [TP-023](../01_Research/06_Analysis/02_Generated_Touchpoints.md), [TP-024](../01_Research/06_Analysis/02_Generated_Touchpoints.md), [TP-025](../01_Research/06_Analysis/02_Generated_Touchpoints.md), [TP-073](../01_Research/06_Analysis/02_Generated_Touchpoints.md), [TP-006](../01_Research/06_Analysis/02_Generated_Touchpoints.md), [TP-017](../01_Research/06_Analysis/02_Generated_Touchpoints.md), [TP-041](../01_Research/06_Analysis/02_Generated_Touchpoints.md) |
| **Problem questions** | [HMW-08](../02_Ideation/01_How_might_we.md), [HMW-10](../02_Ideation/01_How_might_we.md), [HMW-16](../02_Ideation/01_How_might_we.md) |
| **Concepts** | [C08-01](../02_Ideation/03_AI_Ideas.md), [C08-03](../02_Ideation/03_AI_Ideas.md), [C08-04](../02_Ideation/03_AI_Ideas.md), [C08-05](../02_Ideation/03_AI_Ideas.md), [C08-06](../02_Ideation/03_AI_Ideas.md), [C08-10](../02_Ideation/03_AI_Ideas.md), [C10-01](../02_Ideation/03_AI_Ideas.md), [C10-02](../02_Ideation/03_AI_Ideas.md), [C10-05](../02_Ideation/03_AI_Ideas.md), [C10-07](../02_Ideation/03_AI_Ideas.md), [C10-08](../02_Ideation/03_AI_Ideas.md), [C16-02](../02_Ideation/03_AI_Ideas.md), [C16-05](../02_Ideation/03_AI_Ideas.md), [C16-06](../02_Ideation/03_AI_Ideas.md), [C16-07](../02_Ideation/03_AI_Ideas.md); background: [C10-03](../02_Ideation/03_AI_Ideas.md), [C16-04](../02_Ideation/03_AI_Ideas.md) |
| **Families** | [FAM-06](../02_Ideation/04_Human+AI_Ideas.md), [FAM-03](../02_Ideation/04_Human+AI_Ideas.md), [FAM-04](../02_Ideation/04_Human+AI_Ideas.md), [FAM-08](../02_Ideation/04_Human+AI_Ideas.md), [FAM-15](../02_Ideation/04_Human+AI_Ideas.md); background: [FAM-10](../02_Ideation/04_Human+AI_Ideas.md), [FAM-05](../02_Ideation/04_Human+AI_Ideas.md) |
| **Stages covered** | planning, first mile, transfer, last mile |
| **[Marks](../02_Ideation/05_Ideas_prioritization.md)** | C08-01 3·1·3, C08-03 2·2·3, C08-04 1·1·3, C08-05 3·1·3, C08-06 2·1·3, C08-10 2·3·3, C10-01 3·1·3, C10-02 2·1·3, C10-05 3·2·3, C10-07 3·1·3, C10-08 2·1·3, C16-02 2·1·3, C16-05 2·1·3, C16-06 3·1·3, C16-07 2·3·3; background C10-03 3·1·3, C16-04 2·1·3 |
| **Foundation** | Principles 1, 2, 6; The user (rules); The things it deals with (leg, connection, run); Sources of information (record of past trips); Rules that hold everywhere |

## Description

When the product plans a trip, every time in it is one that can be kept: walks to the first stop, through a change and from the last stop are timed at what they really take at that hour and at the commuter's pace (C08-01, C08-10); changes respect the commuter's own minimum change time, margin and number of changes, and each shows how tight it is (C10-01, C10-03); and the arrival shown beside the timetabled one allows for known works and for how late that run usually is (C16-02, C16-04, C16-05). It is for the London traveller who "missed my train from King's Cross to Luton after running for 10 mins to catch it. App said 3 mins walk", the German rail regular for whom "Alles unter 10 Min. Übergangszeit ist für mich kein Anschluss" (anything under 10 minutes of transfer time is no connection for me), and the Verona–Milan commuter, who takes it "per scontato" (for granted) that his train is 5 to 15 minutes late.

## Operating logic

- **Starts when:** the product plans a trip (SPEC-09) or a connection (SPEC-08).
- **Needs to know:** walking times at that place and hour, measured or reported by other travellers (C08-03), with their source (C08-04); the commuter's pace (C08-10); their rules: minimum change time, per station if set (C10-02), margin, number of changes, own legs (for example a leg they always walk or cycle); how late each run usually is, from past trips (C16-04, background); planned works (C16-05); regulars' marks on connections (SPEC-03, C10-05).
- **Rules:**
  1. Time every walk (to the first stop, through a change, from the last stop, including where to board) at the time it takes at that hour, adjusted to the commuter's pace, and say where that time comes from (C08-01, C08-04, C08-10).
  2. Never offer a change shorter than the commuter's rule for that station (C10-01, C10-02); never more changes than their limit; include their own legs as they set them.
  3. For each change show the margin and a tightness label: comfortable, tight, on paper (C10-03, C10-07). A change is "on paper" when the margin is below the commuter's rule or regulars marked it so (C10-05).
  4. When the best way has a tight change, also offer one that respects the rule, even if longer (C10-08).
  5. Show the arrival to plan on beside the timetabled one: the timetabled time plus how late that run usually is, plus known works, saying which works are counted (C16-02, C16-05, C16-06).
  6. If the commuter set their own margin (for example 5 to 15 minutes), add it for them (C16-07).
  7. Right before a change, say whether it can be made from where the commuter is now, and if not, the next train (C08-05, C08-06).
- **States:** a change is `comfortable`, `tight` or `on paper`.
- **The commuter receives:** plans whose walks, changes and arrivals are timed as above, with labels and sources.

## When things go wrong

- **No measured walk for a place:** the nominal time is used, marked as nominal.
- **No record of how late a run usually is:** only the timetabled time, marked as such.
- **The commuter's rule makes the trip impossible:** say so, and show the best way that breaks the rule the least, marked.
- **Reports and operator times disagree:** both shown (Foundation).

## Out of scope

- Whether a connection holds while travelling: SPEC-08.
- The comparison of ways: SPEC-09.
- Signs in stations, platforms announced earlier, longer timetables or minimum times set by operators (C08-07, C08-09, C08-11, C10-09, C10-10, C16-01, C16-08); cover or rights when a connection fails (C08-12, C10-11, C10-12, C16-09, C16-10): they need operators or rules.
- Ranges in place of single times (C08-02) and track records of connections (C10-04, [risky]), background.

## Acceptance criteria

- **Given** a change at King's Cross at 8:00 **when** the measured walk at that hour is 9 minutes **then** the plan uses 9 minutes and says it is measured.
- **Given** a rule of 10 minutes for changes **when** a way has a 6-minute change **then** it is not offered, or is offered only marked "on paper" beside one that respects the rule.
- **Given** a train usually 8 minutes late and works on the line **when** the commuter plans **then** the arrival to plan on is shown beside the timetabled one, with the works named.
- **Given** the commuter set a margin of 10 minutes **when** an arrival is shown **then** the margin is added and said.

## Open questions

- Where measured walking times come from in each city [technology choice open].
- How long a regular's mark of "on paper" lasts (SPEC-03) [not traced].
- Whether regulars should see one another's rules for a station (C10-06) [not traced].
