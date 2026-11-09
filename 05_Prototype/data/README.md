# Data

The datasets every content of the prototype comes from, one `.js` file each, adding one property to the global `DATA`. Each file starts with a comment: what it holds, the screens that use it, its fields, its source (`mock` or `client`) and its date. Mock copies kept when client data replace them are named `<name>.mock.js`. Rules in `../instructions/Prototype_Instructions.md`, section 5.

| File | What it holds | Source |
| --- | --- | --- |
| `ui_text.js` | Every label, button and message template of the interface | mock |
| `scenarios.js` | The five situations of today's trip: on time, late 8 min with sources disagreeing, late 25 min past the limit, cancelled, no news | mock |
| `commuter.js` | The commuter's profile: doors, rules, preference, pass, alert settings | mock |
| `usual_trip.js` | The usual morning trip Como–Lugano, leg by leg | mock |
| `ways_out.js` | The ways that still reach the office when the trip breaks | mock |
| `contacts.js` | The people kept informed, accepted or not | mock |
| `plan_ways.js` | Every way door to door for a planned day | mock |

- The trip, stations and operators are plausible but invented; the commuter is fictional.
