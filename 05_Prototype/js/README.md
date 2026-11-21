# Prototype Scripts

One script per screen, with the same name as its HTML file, plus `common.js` for what several screens share. The web components are in `../components/`.

| File | What it does |
| --- | --- |
| `common.js` | The configurator bar and the app bar (product, mock clock, navigation), what the configurator set (from the address or `data/config.js`), and the helpers (`Proto`) the web components use: texts, links that keep the configurator's choices, the state of each leg and of the trip, the next travel day, the state of a run, the facts on which sources disagree, the trips |
| `index.js` | The starting point: the notifications of a late and a cancelled run, and the list of the screens |
| `today.js` | Fills the Today page (SPEC-04, and the start page of SPEC-01) |
| `run.js` | Fills the Run page (SPEC-02) and opens the dialog of the sources |
| `alternative.js` | Fills the page of an alternative and passes the choice to Run and Today (`?choice=`) |
| `trips.js` | Fills the Trips page (SPEC-17) |
| `alerts.js` | Fills the Alerts page (SPEC-03) |
| `contacts.js` | Fills the Contacts page (SPEC-06) |
| `lockscreen.js` | Fills the lock screen with the messages of the scenario |
