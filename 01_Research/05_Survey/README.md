# Survey

The online survey for commuters: the questions in six languages, where to post them, and a script that builds the forms.

| File | What it is |
| --- | --- |
| `01_survey_en.md` | The reference text: 24 questions, the notes for building the form and what each block is for. Read this one first |
| `01_survey_it.md`, `01_survey_de.md`, `01_survey_fr.md`, `01_survey_nl.md`, `01_survey_es.md` | Working translations for respondents, to be checked by a native speaker. They share the number of the English text because they are the same text |
| `02_build_google_forms.gs` | A Google Apps Script that creates one Google Form per language from the same texts |
| `03_posting_venues.md` | Where to post each language version, with links, whether permission is needed and who to ask |
| `04_permission_requests.md` | The message asking permission to post the survey, in the six languages, each with the link to its form |
| `05_direct_posts.md` | The post for places where no permission is needed, in the six languages, each with the link to its form |
| `06_Responses/` | The exported answers, one CSV per language form (kept out of Git); see its `README.md` |
| `07_survey_results.md` | What the answers say so far, with the counts, the open answers and the reading against the interviews and the open issues |

- The translations are an exception to the rule that every file is in English: they are texts for respondents.
- To change a question, change it in every language file and in `02_build_google_forms.gs`.
- No answers have been collected yet.
