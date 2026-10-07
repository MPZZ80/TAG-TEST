# Sources

The evidence base of the desk research: 132 sources on 2026-10-07, one Markdown file each, in six category folders. Every folder has a `README.md` with the index of its sources. **Start from those indexes; do not open the source files one by one.**

| Folder | Code | Sources | What it holds |
| --- | --- | --- | --- |
| [`Global_Reports/`](Global_Reports/README.md) | `GR` | 56 | Official statistics and reports, regulators, industry bodies, consultancies, data portals |
| [`Academic_Papers/`](Academic_Papers/README.md) | `AP` | 28 | Peer-reviewed papers and reviews |
| [`Products/`](Products/README.md) | `PR` | 17 | Apps and mobility services, from their own sites and App Store listings |
| [`Online_Reviews/`](Online_Reviews/README.md) | `OR` | 17 | Samples of App Store user reviews of those products |
| [`Online_Forums/`](Online_Forums/README.md) | `OF` | 4 | Forum and community threads |
| [`Articles/`](Articles/README.md) | `AR` | 10 | Press, trade press and blog articles |

## How the pieces fit

- **Source file** (`Sources/<Category>/<ID>_<producer>_<year>_<short-title>.md`): who produced the source, when, how, with what interest, its grade with the points, what it says, the data extracted so far with page numbers, and its limits.
- **Document** (`../docs/<Category>/`, same base name): the downloaded PDF or data file, when there is one.
- **Text copy** (`../docs_md/<Category>/`, same base name): the document converted to Markdown, or the text of the web page. Use it for searching.
- **Source ID** (for example `GR-047`): what outputs use to cite a source. A number is never reused.

## Finding something

| You want | Go to |
| --- | --- |
| Sources on a topic | The `Topics` column of the category indexes (`who`, `planning`, `mode-choice`, `information`, `disruption`, `tools`, `why-now`, `success`) |
| The strongest sources | The `Grade` column: A, then B, then C |
| Sources for a country or a language | The `Geography` and `Language` columns |
| What could not be obtained, and gaps | The `*_to_obtain.md` file of each category |
| How a category was searched and what was left out | `GR_candidates.md` and `AP_candidates.md` |

## Things to know before using a source

- **Most figures are not extracted yet.** Many source files say "None extracted yet": only the first pages or the abstract were read. Extraction is part of the activities, which have not started.
- **Grades are provisional**: the citations between sources are not counted yet.
- **Search summaries were wrong several times.** A figure counts only if the source file gives it with its page or section.
- **Translations** of German, French, Dutch, Spanish, Japanese and Korean passages are working translations by the agent.
- **Forums are thin** and reviews are Apple App Store only.

## Adding a source

Follow sections 11 and 12 of `../desk_research_instructions.md`: create the source file, save the document and its text copy in the folders of the same category, then add the row to that category's `README.md`.
