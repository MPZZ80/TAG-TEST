---
source: Marco
date: 2026-11-03 00:35
method: verbatim
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, output]
related: [HMW-01_help-como-commuter-standing-platform.md, FAM-02_delay-measured-real-position.md]
---

# S02: Delay from device position

One of Marco's concepts, listed in [01_Human_Ideas_index.md](01_Human_Ideas_index.md). Its marks are in [04_Ideas_prioritization.md](04_Ideas_prioritization.md).

## Marco's text

A system that gathers delay information by:

- comparing the position of the mobile device of the users that bought a certain train and the supposed position of the train
- comparing the timestamp of the mobile device of the users that bought a certain train and the supposed arrival time of the train in a certain location

and then communicates the delay to the user on the preferred channel.

## In short

| | |
| --- | --- |
| **What it does** | Works out the delay by comparing the devices of those who bought the train with where the train should be, then sends it on the chosen channel |
| **Family** | [FAM-02](FAM-02_delay-measured-real-position.md): Delay measured from the real position |

## Questions

From "Questions for Marco's concepts" in [03_Families_index.md](03_Families_index.md), confirmed by Marco. **Answers** means the concept does what the question asks; **partly** means it covers one part.

| | |
| --- | --- |
| **Answers** | [HMW-01](../01_How_Might_We/HMW-01_help-como-commuter-standing-platform.md): where the train really is, without depending on the board |
| **Partly** | [HMW-02](../01_How_Might_We/HMW-02_spare-como-commuter-platform-during.md): a measured delay means less guessing, but it does not say a cancellation is coming<br>[HMW-05](../01_How_Might_We/HMW-05_let-single-line-commuter-during.md): in time only if devices are already on board before he leaves<br>[HMW-09](../01_How_Might_We/HMW-09_help-como-commuter-8-23.md): the measured delay, but not whether the connection holds |
| **Not assigned, though close** | [HMW-12](../01_How_Might_We/HMW-12_make-sure-person-coming-fetch.md): same reason as [S01](S01_delays-sent-chosen-channel.md) |

## Connections

- [FAM-02_delay-measured-real-position.md](FAM-02_delay-measured-real-position.md): the family this concept belongs to.
- [HMW-01_help-como-commuter-standing-platform.md](../01_How_Might_We/HMW-01_help-como-commuter-standing-platform.md): the question this concept answers, as Marco confirmed.
