# Prototype Scripts

One script per screen, with the same name as its HTML file, plus `common.js` for what several screens share.

| File | What it does |
| --- | --- |
| `common.js` | The app bar (product, mock clock, navigation, scenario selector) and the web components of SPEC-01 built so far: `<scenario-switch>`, `<fact-line>`, `<run-card>`, `<usual-delay>`, `<message-preview>`, `<missing-setup>` |
| `index.js` | Fills the index of the screens from `data/screens.js` |
| `run.js` | Fills the Run page (SPEC-02) and defines `<source-gap>` |
