# Prototype Scripts

One script per screen, with the same name as its HTML file, plus `common.js` for what several screens share. The web components are in `../components/`.

| File | What it does |
| --- | --- |
| `common.js` | The app bar (product, mock clock, navigation, scenario selector) and the helpers (`Proto`) the web components use: texts, links that keep the scenario, the state of a run, the facts on which sources disagree, the trips |
| `index.js` | The starting point: the notifications of a late and a cancelled run, and the list of the screens |
| `today.js` | Fills the Today page (SPEC-04, and the start page of SPEC-01) |
| `run.js` | Fills the Run page (SPEC-02) and opens the dialog of the sources |
| `alternative.js` | Fills the page of an alternative and passes the choice to Run and Today (`?choice=`) |
| `trips.js` | Fills the Trips page (SPEC-17) |
| `alerts.js` | Fills the Alerts page (SPEC-03) |
