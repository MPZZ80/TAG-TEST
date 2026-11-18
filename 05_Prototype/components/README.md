# Prototype Components

The web components of the prototype, one file per component, named after its tag. Each file starts with a comment: the component, the specification that defines it, the specifications that use it, the data it reads and the events it reacts to. A component uses the helpers of `../js/common.js` (`Proto`), so a screen loads `common.js` first, then the components it needs, then its own script.

| File | Component | Defined in | Used by |
| --- | --- | --- | --- |
| `scenario-switch.js` | `<scenario-switch>`: the scenario selector, for testing | SPEC-01 | every screen |
| `fact-line.js` | `<fact-line>`: one fact with its source, time and status | SPEC-01 | SPEC-02, SPEC-04, SPEC-12, SPEC-13 |
| `run-card.js` | `<run-card>`: one run, planned and expected, or "no news since" | SPEC-01 | SPEC-02, SPEC-04, SPEC-07 |
| `usual-delay.js` | `<usual-delay>`: how late a run usually is | SPEC-01 | SPEC-02, SPEC-09 |
| `message-preview.js` | `<message-preview>`: a message outside the product, simulated | SPEC-01 | SPEC-02, SPEC-03, SPEC-05, SPEC-06, SPEC-07, SPEC-11, SPEC-13 to SPEC-16 |
| `missing-setup.js` | `<missing-setup>`: what is missing and where it is set up | SPEC-01 | every specification |
| `source-gap.js` | `<source-gap>`: two sources that disagree, and the gap | SPEC-02 | SPEC-02 |

- Only the components of the screens built so far are here; the others are described in the specifications (`../../04_Specifications/`, section "Architecture") and are added when their screen is built.
