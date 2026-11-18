# Prototype Scripts

One script per screen, with the same name as its HTML file, plus `common.js` for what several screens share. The web components are in `../components/`.

| File | What it does |
| --- | --- |
| `common.js` | The app bar (product, mock clock, navigation, scenario selector) and the helpers (`Proto`) the web components in `../components/` use |
| `index.js` | Fills the index of the screens from `data/screens.js` |
| `run.js` | Fills the Run page (SPEC-02) |
