# Prototype Components

The web components of the prototype, one file per component, named after its tag. Each file starts with a comment: the component, the specification that defines it, the specifications that use it, the data it reads and the events it reacts to. A component uses the helpers of `../js/common.js` (`Proto`), so a screen loads `common.js` first, then the components it needs, then its own script.

| File | Component | Defined in | Used by |
| --- | --- | --- | --- |
| `scenario-switch.js` | `<scenario-switch>`: the configurator, in a bar at the top: scenario, where the commuter is (before, leg 1 to 4, after), travel day or not, and the link to the lock screen; for testing | SPEC-01 | every screen |
| `fact-line.js` | `<fact-line>`: one fact with its source, time and status | SPEC-01 | SPEC-02, SPEC-04, SPEC-12, SPEC-13 |
| `run-card.js` | `<run-card>`: one run, its state first with an information button when sources disagree, "Why" only for a problem, the facts under "Details" | SPEC-01 | SPEC-02, SPEC-04, SPEC-07 |
| `usual-delay.js` | `<usual-delay>`: how late a run usually is | SPEC-01 | SPEC-02, SPEC-09 |
| `way-card.js` | `<way-card>`: one way door to door: legs, times, price, who runs it, how full, the way back, take today or save | SPEC-01 | SPEC-08 |
| `way-search.js` | `<way-search>`: two addresses with suggestions (favourites first), the day, leave after or arrive by and the time; also on Today when nothing is set up | SPEC-08 | SPEC-08 |
| `works-note.js` | `<works-note>`: the arrival at the door, planned, expected at real times and with the works | SPEC-09 | SPEC-09 |
| `leg-timing.js` | `<leg-timing>`: each part of the trip, planned and real, with its source | SPEC-09 | SPEC-09 |
| `change-tightness.js` | `<change-tightness>`: how tight the change is against the commuter's rule, on paper and with the usual delay | SPEC-09 | SPEC-09 |
| `way-booking.js` | `<way-booking>`: a way booked as one journey, with one price | SPEC-10 | SPEC-10 |
| `ticket-card.js` | `<ticket-card>`: a ticket held, with `<ticket-show>` and `<ticket-move>` | SPEC-10 | SPEC-10 |
| `ticket-show.js` | `<ticket-show>`: the ticket ready to show in one step, also with no signal | SPEC-10 | SPEC-10 |
| `ticket-move.js` | `<ticket-move>`: the runs or days a ticket can be moved to, with the cost, before yes | SPEC-10 | SPEC-10 |
| `ticket-entry.js` | `<ticket-entry>`: adding a ticket bought elsewhere | SPEC-10 | SPEC-10 |
| `message-preview.js` | `<message-preview>`: the messages outside the product, as notifications on the lock screen | SPEC-01 | the lock screen, for SPEC-02, SPEC-03, SPEC-05 and later the others |
| `missing-setup.js` | `<missing-setup>`: what is missing and where it is set up | SPEC-01 | every specification |
| `source-gap.js` | `<source-gap>`: two sources that disagree, and the gap, shown in a dialog | SPEC-02 | SPEC-02 |
| `today-trip.js` | `<today-trip>`: the trip followed today divided into legs, each a section leading to its detail on Run, with the change, the arrival at the door, and the choice of the run taken today | SPEC-04 | SPEC-04 |
| `leg-alternatives.js` | `<leg-alternatives>`: the other ways to make a leg that is late or cancelled, in grey; tapping one selects it and shows "Choose" | SPEC-02 | SPEC-02 |
| `leg-map.js` | `<leg-map>`: the map of a leg: route, stops, the vehicle at its simulated live position, the alternatives in grey (one in colour when tapped), blocked points and ways round | SPEC-02 | SPEC-02 |
| `map-base.js` | `MapBase`, a helper (not a component): the grey background of the maps, from `data/map_features.js` | SPEC-02 | `<leg-map>`, `<route-map>` |
| `run-stops.js` | `<run-stops>`: the stops of a run, with planned and expected times | SPEC-02 | SPEC-02 |
| `route-map.js` | `<route-map>`: a sketch of the route of an alternative, from approximate points | SPEC-02 | SPEC-02 |
| `confirm-choice.js` | `<confirm-choice>`: asks yes or no before anything changes | SPEC-01 | SPEC-02, later SPEC-05, SPEC-10, SPEC-15 |
| `trip-card.js` | `<trip-card>`: one trip door to door, leading to its runs | SPEC-01 | SPEC-02, SPEC-17 |
| `alert-settings.js` | `<alert-settings>`: the kinds of event and the moments of a travel day, each with a switch | SPEC-03 | SPEC-03 |
| `alert-log.js` | `<alert-log>`: the alerts sent today, with time, text and source; nothing outside the days of travel | SPEC-03 | SPEC-03 |
| `connection-state.js` | `<connection-state>`: the change ahead, its state, the margin against the commuter's own rule, the next connection that holds | SPEC-07 | SPEC-07 |
| `announced-list.js` | `<announced-list>`: works and strikes announced for coming travel days, and when the commuter is told | SPEC-03 | SPEC-03 |
| `share-updates.js` | `<share-updates>`: "Share updates" with the share icon: the trip's link handed to the phone's share sheet, or a sheet of the prototype's own that sends nothing | SPEC-06 | SPEC-06, on Today (SPEC-04) and every leg of Run (SPEC-02, SPEC-05) |
| `first-trip-cta.js` | `<first-trip-cta>`: the invitation to set up the first trip | SPEC-01 | SPEC-01, SPEC-02, SPEC-17 |

- Only the components of the screens built so far are here; the others are described in the specifications (`../../04_Specifications/`, section "Architecture") and are added when their screen is built.
