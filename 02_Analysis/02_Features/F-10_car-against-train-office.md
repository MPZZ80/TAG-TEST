---
source: Claude
date: 2026-11-18 19:55
method: synthesis
status: draft
grade: n/a
confidence: low
tags: [research, desk, synthesis]
related: [TP-009_keeping-car-after-pass.md, TP-010_weighing-car-against-train.md, TP-011_looking-timetables-decide-whether.md, TP-044_taking-car-keys-late.md, US-F-10_car-against-train-office.md, OQ-12_cost-of-each-way-out.md, OQ-20_which-car-costs-are-counted.md, OQ-31_whether-a-drivers-route-fits.md, SPEC-08_every-way-door-to-door.md]
---

# F-10: Car against train for the office day

One row of [00_Features_index.md](00_Features_index.md), where the impact, the strength rule and the dropped features are explained.

| | |
| --- | --- |
| **What it does** | Compares door to door, for a given day and departure, the train and the car on time, cost and arrival home |
| **Evidence** | strong (strong: [TP-010](../01_Touchpoints/TP-010_weighing-car-against-train.md)) |
| **Impact** | Medium · 4 |
| **Touchpoints it answers** | [TP-009](../01_Touchpoints/TP-009_keeping-car-after-pass.md), [TP-010](../01_Touchpoints/TP-010_weighing-car-against-train.md), [TP-011](../01_Touchpoints/TP-011_looking-timetables-decide-whether.md), [TP-044](../01_Touchpoints/TP-044_taking-car-keys-late.md) |
| **User story** | [US-F-10_car-against-train-office.md](../03_User_Stories/US-F-10_car-against-train-office.md) |

## Evidence (note + quote)

- [Matteo_Rizzetto_notes](../../01_Research/04_Interviews/Matteo_Rizzetto_notes.md): "By train he would be home at about 19:30 with everything still to do."; "He is looking at the timetables to see whether he can go back to the train"; "if he is late himself he takes the car keys with him"
- [AP-016](../../01_Research/03_Desk_Research/Doc_Notes/Academic_Papers/AP-016_mcilroy_2024_reservation-i-have-that.md): 'I add up all the costs usually (tickets + car park) vs taking my car'
- [GR-037](../../01_Research/03_Desk_Research/Doc_Notes/Global_Reports/GR-037_imove-australia_2021_sydney-maas-trial-final-report.md): public transport considered only if it takes less than double the driving time

## Connections

- [TP-009_keeping-car-after-pass.md](../01_Touchpoints/TP-009_keeping-car-after-pass.md), [TP-010_weighing-car-against-train.md](../01_Touchpoints/TP-010_weighing-car-against-train.md), [TP-011_looking-timetables-decide-whether.md](../01_Touchpoints/TP-011_looking-timetables-decide-whether.md), [TP-044_taking-car-keys-late.md](../01_Touchpoints/TP-044_taking-car-keys-late.md): the touchpoints this feature answers.
- [US-F-10_car-against-train-office.md](../03_User_Stories/US-F-10_car-against-train-office.md): the user story written from this feature.
- [OQ-12_cost-of-each-way-out.md](../../04_Specifications/01_Open_Questions/OQ-12_cost-of-each-way-out.md), [OQ-20_which-car-costs-are-counted.md](../../04_Specifications/01_Open_Questions/OQ-20_which-car-costs-are-counted.md), [OQ-31_whether-a-drivers-route-fits.md](../../04_Specifications/01_Open_Questions/OQ-31_whether-a-drivers-route-fits.md): an open question of the specifications whose chain to the research passes through this file.
- [SPEC-08_every-way-door-to-door.md](../../04_Specifications/SPEC-08_every-way-door-to-door.md): a specification built on this feature.
