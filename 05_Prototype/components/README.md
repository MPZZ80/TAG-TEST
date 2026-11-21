# Prototype Components

The web components of the prototype, one file per component, named after its tag. Each file starts with a comment: the component, the specification that defines it, the specifications that use it, the data it reads and the events it reacts to. A component uses the helpers of `../js/common.js` (`Proto`), so a screen loads `common.js` first, then the components it needs, then its own script.

| File | Component | Defined in | Used by |
| --- | --- | --- | --- |
| `scenario-switch.js` | `<scenario-switch>`: the scenario selector, for testing | SPEC-01 | every screen |
| `fact-line.js` | `<fact-line>`: one fact with its source, time and status | SPEC-01 | SPEC-02, SPEC-04, SPEC-12, SPEC-13 |
| `run-card.js` | `<run-card>`: one run, its state first with an information button when sources disagree, "Why" only for a problem, the facts under "Details" | SPEC-01 | SPEC-02, SPEC-04, SPEC-07 |
| `usual-delay.js` | `<usual-delay>`: how late a run usually is | SPEC-01 | SPEC-02, SPEC-09 |
| `message-preview.js` | `<message-preview>`: a message outside the product, simulated | SPEC-01 | SPEC-02, SPEC-03, SPEC-05, SPEC-06, SPEC-07, SPEC-11, SPEC-13 to SPEC-16 |
| `missing-setup.js` | `<missing-setup>`: what is missing and where it is set up | SPEC-01 | every specification |
| `source-gap.js` | `<source-gap>`: two sources that disagree, and the gap, shown in a dialog | SPEC-02 | SPEC-02 |
| `today-trip.js` | `<today-trip>`: the trip followed today divided into legs, each a section leading to its detail on Run, with the change and the arrival at the door | SPEC-04 | SPEC-04 |
| `leg-alternatives.js` | `<leg-alternatives>`: the other ways to make a leg that is late or cancelled, in grey; tapping one selects it and shows "Choose" | SPEC-02 | SPEC-02 |
| `leg-map.js` | `<leg-map>`: the map of a leg: route, stops, the vehicle at its simulated live position, the alternatives in grey (one in colour when tapped), blocked points and ways round | SPEC-02 | SPEC-02 |
| `map-base.js` | `MapBase`, a helper (not a component): the grey background of the maps, from `data/map_features.js` | SPEC-02 | `<leg-map>`, `<route-map>` |
| `run-stops.js` | `<run-stops>`: the stops of a run, with planned and expected times | SPEC-02 | SPEC-02 |
| `route-map.js` | `<route-map>`: a sketch of the route of an alternative, from approximate points | SPEC-02 | SPEC-02 |
| `confirm-choice.js` | `<confirm-choice>`: asks yes or no before anything changes | SPEC-01 | SPEC-02, later SPEC-05, SPEC-10, SPEC-15 |
| `trip-card.js` | `<trip-card>`: one trip door to door, leading to its runs | SPEC-01 | SPEC-02, SPEC-17 |
| `first-trip-cta.js` | `<first-trip-cta>`: the invitation to set up the first trip | SPEC-01 | SPEC-01, SPEC-02, SPEC-17 |

- Only the components of the screens built so far are here; the others are described in the specifications (`../../04_Specifications/`, section "Architecture") and are added when their screen is built.
