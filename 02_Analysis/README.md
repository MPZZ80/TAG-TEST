# Analysis

Analyses built on top of the research notes.

| File | What it is |
| --- | --- |
| `01_research.html` | The research as one offline web page, opened by double-click: a home page that lists the sections (touchpoints, features, user stories, interviews, survey, desk research, plan and method), one section shown at a time, and one search over all of them. Touchpoints, features, interviews and desk research open on their contradictions. **Snapshot of 2026-11-01, not kept up to date:** it still shows the touchpoints, features and stories as full tables and the folder names before the reorganisation of 2026-11-02; only its links were updated. Marco will rebuild it later with another structure |
| `02_Generated_Touchpoints.md` | The index of the 109 moments of the commute found in the notes and transcripts: one row each with type, phase, mode and the features that answer it; then 9 contradictions, coverage gaps and counts. The quotes are in `01_Touchpoints/` |
| `03_Generated_Features.md` | The index of the 26 features (2 marked [value not traced]), the minimum set that answers the touchpoints: one row each with what it does, the touchpoints it answers, [strong] or [weak], impact and story; then the dropped features, contradictions, counts and decisions. The evidence is in `02_Features/` |
| `04_Generated_User_Stories.md` | The index of the 24 user stories, one per feature with a traced value: persona, evidence and impact, feature; then the personas, the two features sent back and the two splits. The stories and their source lines are in `03_User_Stories/` |
| `05_Human_Touchpoints(not_complete).md` | Marco's own touchpoints, not complete; no metadata block |
| `01_Touchpoints/` | One file per touchpoint, TP-001 to TP-109, the content behind `02_Generated_Touchpoints.md`; see its `README.md` |
| `02_Features/` | One file per feature, F-01 to F-24 with the splits, the content behind `03_Generated_Features.md`; see its `README.md` |
| `03_User_Stories/` | One file per user story, US-F-01 to US-F-24, the content behind `04_Generated_User_Stories.md`; see its `README.md` |
| `Prompts/` | The prompts that generated the files above, numbered like the file each one generates; see its `README.md` |

- Read `02_Generated_Touchpoints.md` by phase: the table is ordered from planning to disruption. Open a touchpoint file for its quotes.
- Each row links to the notes it rests on; open a note only to check a quote.
- Read `03_Generated_Features.md` after the touchpoints: it is ordered by impact.
- Read `04_Generated_User_Stories.md` last: each story names its feature.
