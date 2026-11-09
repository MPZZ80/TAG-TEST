# JavaScript

One script per screen, named like its HTML file, plus `common.js`. Scripts read `DATA` and fill the screens; they hold no text or figures.

| File | What it does |
| --- | --- |
| `common.js` | Shared by every screen: `t()` for texts from `ui_text`, the current scenario from the URL, DOM helpers, header navigation, prototype controls |
| `index.js` | Fills the Today screen |
| `trip.js` | Fills the trip detail; report and ask-to-wait buttons |
| `ways_out.js` | Lists the ways out, seat first when the commuter prefers it; confirmation dialog |
| `contacts.js` | Builds the message for contacts; send buttons, refused for contacts who have not accepted |
| `plan.js` | Lists every way for the planned day |
| `alerts.js` | Builds the alert settings (not saved) and the preview of what would be sent now |
