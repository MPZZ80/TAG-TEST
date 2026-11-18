---
source: Claude
date: 2026-11-18 19:25
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, synthesis]
related: [04_open_issues.md, OQ-01_sources-of-the-real-position.md, OQ-02_age-limit-of-a-fact.md, OQ-03_reaching-the-commuter-without-looking.md, OQ-04_suggesting-the-usual-trip.md, OQ-05_more-than-one-usual-trip.md, OQ-06_length-of-the-record-of-past-runs.md, OQ-07_saying-that-nothing-changed.md, OQ-08_how-early-works-and-strikes-are-told.md, OQ-09_first-view-with-no-usual-trip.md, OQ-10_another-run-taken-without-saying.md, OQ-11_whether-every-break-is-sent.md, OQ-12_cost-of-each-way-out.md, OQ-13_when-a-vehicle-not-seen-is-not-coming.md, OQ-14_minors-using-the-product-alone.md, OQ-15_when-the-contact-is-told-again.md, OQ-16_telling-the-contact-when-to-set-off.md, OQ-17_how-early-before-a-change.md, OQ-18_asking-a-connection-to-wait.md, OQ-19_a-lift-as-a-way.md, OQ-20_which-car-costs-are-counted.md, OQ-21_source-of-walking-times.md, OQ-22_how-long-records-are-kept-to-time-a-leg.md, OQ-23_booking-and-paying-across-sellers.md, OQ-24_moving-a-ticket-with-no-signal.md, OQ-25_period-over-which-days-are-counted.md, OQ-26_telling-first-that-the-fare-no-longer-fits.md, OQ-27_claims-on-tickets-from-a-seller.md, OQ-28_source-of-the-state-of-facilities.md, OQ-29_how-far-before-the-stop.md, OQ-30_reaching-a-commuter-who-is-asleep.md, OQ-31_whether-a-drivers-route-fits.md, OQ-32_how-a-session-is-known-and-ended.md, OQ-33_the-reminder-interval.md]
---

# Open Questions of the Specifications

The questions the specifications left open, one file each, so that they can be checked and decided later. Each file traces the question back to the research: specification, user story, feature, touchpoint, and the interview, survey or source quoted there.

33 questions. Research support: 2 supported, 9 partly, 22 not supported. A question the research does not support is kept and marked ⚠.

The specifications that raised these questions were deleted on 2026-11-18, to be rewritten with the revised instructions. The questions are kept: the "Raised in" column names the deleted specifications by number, and the new specifications will link the questions again.

## How to read it

- **Marker:** [not traced] for a behaviour the stories and their evidence do not settle; [technology choice open] for a need that cannot be described without choosing a technology.
- **Research support:** supported, the research points to an answer; partly, it shows the situation and some signs; ⚠ not supported, it shows the situation at most, never the answer. Questions marked [technology choice open] are never answered by the research: it gives the need only.
- **State:** `open` until Marco decides. When he does, the file records the decision and its date, the state becomes `decided`, and the specifications that raise it are edited to remove the marker.

## The questions

| ID | Question | Raised in | Marker | Research support | State |
| --- | --- | --- | --- | --- | --- |
| [OQ-01](OQ-01_sources-of-the-real-position.md) | Which sources tell the real position and the expected time of a vehicle (the operator, the position of travellers on board, what travellers report), and which one leads when they disagree? | SPEC-01, SPEC-03 | [not traced] | partly | open |
| [OQ-02](OQ-02_age-limit-of-a-fact.md) | After how long without news is a fact (a time, a state, a position) marked outdated, and a run marked `no news`? | SPEC-01, SPEC-03 | [not traced] | ⚠ not supported | open |
| [OQ-03](OQ-03_reaching-the-commuter-without-looking.md) | How does a message reach a commuter who cannot look at a screen, for example while driving to the station or on a rerouted drive? | SPEC-01, SPEC-04, SPEC-15, SPEC-16 | [technology choice open] | ⚠ not supported | open |
| [OQ-04](OQ-04_suggesting-the-usual-trip.md) | May the product suggest a usual trip from trips the commuter repeats, for them to confirm, or does the commuter always enter it? | SPEC-02 | [not traced] | ⚠ not supported | open |
| [OQ-05](OQ-05_more-than-one-usual-trip.md) | Does the commuter keep more than one usual trip, for example the morning trip and the evening return, or two trains used most? | SPEC-02, SPEC-05, SPEC-07 | [not traced] | supported | open |
| [OQ-06](OQ-06_length-of-the-record-of-past-runs.md) | Over how many past runs, or how long a period, is the record kept to tell how late a run usually is? | SPEC-03 | [not traced] | ⚠ not supported | open |
| [OQ-07](OQ-07_saying-that-nothing-changed.md) | Is "nothing changed" or "no news" ever sent as a message, for example once at the first moment of the day, or only shown inside the product? | SPEC-04 | [not traced] | partly | open |
| [OQ-08](OQ-08_how-early-works-and-strikes-are-told.md) | How many days before a travel day are planned works and strikes told, and how often is the message repeated? | SPEC-04 | [not traced] | partly | open |
| [OQ-09](OQ-09_first-view-with-no-usual-trip.md) | What does the first view show when the commuter opens the product at a stop or station from which no usual trip starts? | SPEC-05 | [not traced] | ⚠ not supported | open |
| [OQ-10](OQ-10_another-run-taken-without-saying.md) | When the commuter takes another run than the planned one without saying so, may the product infer it and follow that run? | SPEC-05 | [not traced] | partly | open |
| [OQ-11](OQ-11_whether-every-break-is-sent.md) | When the trip of the day breaks, is a message always sent on the commuter's channel, or only for some breaks? | SPEC-06 | [not traced] | partly | open |
| [OQ-12](OQ-12_cost-of-each-way-out.md) | Is the cost of each way out shown before the commuter chooses it? | SPEC-06 | [not traced] | partly | open |
| [OQ-13](OQ-13_when-a-vehicle-not-seen-is-not-coming.md) | After how long without any sign of it does a bus or train count as not coming? | SPEC-06 | [not traced] | ⚠ not supported | open |
| [OQ-14](OQ-14_minors-using-the-product-alone.md) | Do minors use the product alone, and if so what changes (consent, contacts, what is shared with a parent)? | SPEC-06, SPEC-07 | [not traced] | ⚠ not supported | open |
| [OQ-15](OQ-15_when-the-contact-is-told-again.md) | By how much must the expected arrival move before the person waiting is told again? | SPEC-07 | [not traced] | ⚠ not supported | open |
| [OQ-16](OQ-16_telling-the-contact-when-to-set-off.md) | Is the person who comes to the station also told when to leave, not only when the commuter arrives? | SPEC-07 | [not traced] | ⚠ not supported | open |
| [OQ-17](OQ-17_how-early-before-a-change.md) | How long before the change does the commuter learn whether the connection still holds? | SPEC-08 | [not traced] | ⚠ not supported | open |
| [OQ-18](OQ-18_asking-a-connection-to-wait.md) | Is the request to hold a connection built before any operator can receive or answer it? | SPEC-08 | [not traced] | ⚠ not supported | open |
| [OQ-19](OQ-19_a-lift-as-a-way.md) | Does a lift from a relative or friend count as one of the ways from door to door? | SPEC-09, SPEC-06 | [not traced] | supported | open |
| [OQ-20](OQ-20_which-car-costs-are-counted.md) | Which costs of the car are counted when it is compared with the train: fuel, tolls, parking? | SPEC-09 | [not traced] | partly | open |
| [OQ-21](OQ-21_source-of-walking-times.md) | Where do the real walking times come from: at both ends, and between platforms? | SPEC-10 | [technology choice open] | ⚠ not supported | open |
| [OQ-22](OQ-22_how-long-records-are-kept-to-time-a-leg.md) | How long are reports and records kept to time a leg (a walk, a change, a drive)? | SPEC-10 | [not traced] | ⚠ not supported | open |
| [OQ-23](OQ-23_booking-and-paying-across-sellers.md) | How is a trip with legs from different sellers booked and paid in one step? | SPEC-11 | [technology choice open] | ⚠ not supported | open |
| [OQ-24](OQ-24_moving-a-ticket-with-no-signal.md) | Can a ticket be shown and moved to another run when there is no signal? | SPEC-11 | [technology choice open] | ⚠ not supported | open |
| [OQ-25](OQ-25_period-over-which-days-are-counted.md) | Over which period are the days actually travelled counted to compare fares: a week, a month, longer? | SPEC-12 | [not traced] | partly | open |
| [OQ-26](OQ-26_telling-first-that-the-fare-no-longer-fits.md) | Does the product say on its own that the ticket held no longer fits the days travelled, or only when the commuter asks? | SPEC-12 | [not traced] | ⚠ not supported | open |
| [OQ-27](OQ-27_claims-on-tickets-from-a-seller.md) | How does a compensation claim reach the operator when the ticket was bought from a ticket seller? | SPEC-13 | [technology choice open] | ⚠ not supported | open |
| [OQ-28](OQ-28_source-of-the-state-of-facilities.md) | Where does the product learn the state of lifts, lighting, staff and parking at a station? | SPEC-14 | [technology choice open] | ⚠ not supported | open |
| [OQ-29](OQ-29_how-far-before-the-stop.md) | How far before the stop is the commuter told, and how often is it repeated if they do not respond? | SPEC-15 | [not traced] | ⚠ not supported | open |
| [OQ-30](OQ-30_reaching-a-commuter-who-is-asleep.md) | What reaches a commuter who has fallen asleep before their stop? | SPEC-15 | [technology choice open] | ⚠ not supported | open |
| [OQ-31](OQ-31_whether-a-drivers-route-fits.md) | Does a product mostly about public transport also look after a commuter's drive, as story F-14a asks? | SPEC-16 | [not traced] | partly | open |
| [OQ-32](OQ-32_how-a-session-is-known-and-ended.md) | How does the product know that a paid session (parking, a shared vehicle) is running, and can it end the session by itself? | SPEC-17 | [technology choice open] | ⚠ not supported | open |
| [OQ-33](OQ-33_the-reminder-interval.md) | After how long is the commuter reminded of a session still running, and how often? | SPEC-17 | [not traced] | ⚠ not supported | open |

## Connections

- [04_open_issues.md](../../01_Research/02_Plan/04_open_issues.md): the open questions of the research, several of which these questions point to.
- [OQ-01_sources-of-the-real-position.md](OQ-01_sources-of-the-real-position.md): one open question.
- [OQ-02_age-limit-of-a-fact.md](OQ-02_age-limit-of-a-fact.md): one open question.
- [OQ-03_reaching-the-commuter-without-looking.md](OQ-03_reaching-the-commuter-without-looking.md): one open question.
- [OQ-04_suggesting-the-usual-trip.md](OQ-04_suggesting-the-usual-trip.md): one open question.
- [OQ-05_more-than-one-usual-trip.md](OQ-05_more-than-one-usual-trip.md): one open question.
- [OQ-06_length-of-the-record-of-past-runs.md](OQ-06_length-of-the-record-of-past-runs.md): one open question.
- [OQ-07_saying-that-nothing-changed.md](OQ-07_saying-that-nothing-changed.md): one open question.
- [OQ-08_how-early-works-and-strikes-are-told.md](OQ-08_how-early-works-and-strikes-are-told.md): one open question.
- [OQ-09_first-view-with-no-usual-trip.md](OQ-09_first-view-with-no-usual-trip.md): one open question.
- [OQ-10_another-run-taken-without-saying.md](OQ-10_another-run-taken-without-saying.md): one open question.
- [OQ-11_whether-every-break-is-sent.md](OQ-11_whether-every-break-is-sent.md): one open question.
- [OQ-12_cost-of-each-way-out.md](OQ-12_cost-of-each-way-out.md): one open question.
- [OQ-13_when-a-vehicle-not-seen-is-not-coming.md](OQ-13_when-a-vehicle-not-seen-is-not-coming.md): one open question.
- [OQ-14_minors-using-the-product-alone.md](OQ-14_minors-using-the-product-alone.md): one open question.
- [OQ-15_when-the-contact-is-told-again.md](OQ-15_when-the-contact-is-told-again.md): one open question.
- [OQ-16_telling-the-contact-when-to-set-off.md](OQ-16_telling-the-contact-when-to-set-off.md): one open question.
- [OQ-17_how-early-before-a-change.md](OQ-17_how-early-before-a-change.md): one open question.
- [OQ-18_asking-a-connection-to-wait.md](OQ-18_asking-a-connection-to-wait.md): one open question.
- [OQ-19_a-lift-as-a-way.md](OQ-19_a-lift-as-a-way.md): one open question.
- [OQ-20_which-car-costs-are-counted.md](OQ-20_which-car-costs-are-counted.md): one open question.
- [OQ-21_source-of-walking-times.md](OQ-21_source-of-walking-times.md): one open question.
- [OQ-22_how-long-records-are-kept-to-time-a-leg.md](OQ-22_how-long-records-are-kept-to-time-a-leg.md): one open question.
- [OQ-23_booking-and-paying-across-sellers.md](OQ-23_booking-and-paying-across-sellers.md): one open question.
- [OQ-24_moving-a-ticket-with-no-signal.md](OQ-24_moving-a-ticket-with-no-signal.md): one open question.
- [OQ-25_period-over-which-days-are-counted.md](OQ-25_period-over-which-days-are-counted.md): one open question.
- [OQ-26_telling-first-that-the-fare-no-longer-fits.md](OQ-26_telling-first-that-the-fare-no-longer-fits.md): one open question.
- [OQ-27_claims-on-tickets-from-a-seller.md](OQ-27_claims-on-tickets-from-a-seller.md): one open question.
- [OQ-28_source-of-the-state-of-facilities.md](OQ-28_source-of-the-state-of-facilities.md): one open question.
- [OQ-29_how-far-before-the-stop.md](OQ-29_how-far-before-the-stop.md): one open question.
- [OQ-30_reaching-a-commuter-who-is-asleep.md](OQ-30_reaching-a-commuter-who-is-asleep.md): one open question.
- [OQ-31_whether-a-drivers-route-fits.md](OQ-31_whether-a-drivers-route-fits.md): one open question.
- [OQ-32_how-a-session-is-known-and-ended.md](OQ-32_how-a-session-is-known-and-ended.md): one open question.
- [OQ-33_the-reminder-interval.md](OQ-33_the-reminder-interval.md): one open question.
