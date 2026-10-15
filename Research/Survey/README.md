# Survey

The online survey for commuters: the questions in six languages, where to post them, and a script that builds the forms.

| File | What it is |
| --- | --- |
| `survey_en.md` | The reference text: 24 questions, the notes for building the form and what each block is for. Read this one first |
| `survey_it.md`, `survey_de.md`, `survey_fr.md`, `survey_nl.md`, `survey_es.md` | Working translations for respondents, to be checked by a native speaker |
| `posting_venues.md` | Where to post each language version, with links, whether permission is needed and who to ask |
| `direct_posts.md` | The post for places where no permission is needed, in the six languages, each with the link to its form |
| `permission_requests.md` | The message asking permission to post the survey, in the six languages, each with the link to its form |
| `build_google_forms.gs` | A Google Apps Script that creates one Google Form per language from the same texts |

- The translations are an exception to the rule that every file is in English: they are texts for respondents.
- To change a question, change it in every language file and in `build_google_forms.gs`.
- No answers have been collected yet.
