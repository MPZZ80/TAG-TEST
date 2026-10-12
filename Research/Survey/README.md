# Survey

The online survey for commuters: the questions in five languages, where to post them, and a script that builds the forms.

| File | What it is |
| --- | --- |
| `survey_en.md` | The reference text: 24 questions, the notes for building the form and what each block is for. Read this one first |
| `survey_it.md`, `survey_de.md`, `survey_fr.md`, `survey_nl.md` | Working translations for respondents, to be checked by a native speaker |
| `posting_venues.md` | Where to post each language version, with links, whether permission is needed and who to ask |
| `build_google_forms.gs` | A Google Apps Script that creates one Google Form per language from the same texts |

- The translations are an exception to the rule that every file is in English: they are texts for respondents.
- To change a question, change it in every language file and in `build_google_forms.gs`.
- No answers have been collected yet.
