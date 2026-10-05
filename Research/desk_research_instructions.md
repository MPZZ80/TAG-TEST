---
source: Claude (Opus 5.5), from Marco's instructions and plan.md
date: 2026-10-05 23:36
channel: Claude Code conversation
method: AI-drafted working rules, revised on Marco's instructions
confidence: medium
tags: [desk-research, instructions, evidence-rules, intercity-commuting]
---

# Desk Research Instructions

How the agent runs the desk research of this project: scope, principles, evidence rules, working method and output format. Read this file in full at the start of every desk research session, before searching for anything.

The activities themselves (A1–A8), their sources, outputs and order of work are in `plan.md`. The rules that apply to every file in the project (language, metadata, change log) are in `../AGENTS.md`.

## 1. Context

Marco is running the discovery phase of a digital product design project about intercity commuting door to door. He commutes between cities himself. The project is at the stage of understanding the problem: no product, feature or technology has been chosen, and the research must not push towards one.

You do the desk research, and Marco decides which sources it rests on. For each source category you first draft a short candidate list, which he vets; what happens next is decided together after each list (section 13). Marco works on this at lunch (about 30 minutes) and in the evening (60–90 minutes), so every list and every output has to be quick to read and safe to trust, and every choice you make on your own has to be written down with its reason.

Marco will start interviewing fellow commuters only after he has seen the results. The desk research has to tell him what is already known, so that the interviews can concentrate on what is not.

## 2. Files to read first

| File | What it gives you |
| --- | --- |
| `../Brief/brief.md` | The user, the problem and Marco's motivation |
| `../Questions/initial_questions.md` | The 40 research questions, referred to as Q1–Q40 |
| `plan.md` | The activities (A1–A8), their goals, sources, outputs, order of work and "done when" checks |
| `Sources/` and `docs/` | The source files and downloaded documents already collected (see section 11) |
| Existing `01_…` to `08_…` files in this folder | What earlier sessions already found |

The plan says what each activity must cover and where to look. This file says how to do the work and how to write it up. If the two conflict, follow the plan and note the conflict in the synthesis.

## 3. Scope

These are working assumptions that Marco has not confirmed. Proceed on them without asking, and repeat them at the top of the synthesis so he can see what they affected. If the evidence shows one of them does not fit, adjust it, and record what you changed and why.

- **Geography:** Europe, with Italy as the home market. Look for Italian sources first, then European, then global. Use sources from other regions when they explain a behaviour or a product that is relevant in Europe, and say where they come from.
- **Door to door:** this is Marco's stated focus, not an assumption. The unit of analysis is the whole journey from the door the commuter leaves to the door they arrive at: first mile, main intercity leg, transfers and last mile, including walking, waiting and parking. Do not reduce the commute to the train or motorway part. For every finding, record which leg it concerns. Evidence about a single leg is useful, but say that it covers only that leg.
- **Intercity commute:** a recurring trip between two cities for work or study, roughly 30–120 minutes door to door. Purely urban commuting and occasional long-distance travel are out of scope, but keep findings from them when they clearly transfer and label them as such.
- **Modes:** all of them. Train, bus and coach, private car, carpooling, car sharing, bike and scooter, park and ride, taxi and ride-hailing, walking, and combinations. Do not let the research collapse into public transport only.
- **Journey stages:** both planning before leaving and handling problems during the trip.
- **Recency:** prefer sources from 2022 onwards, because commuting patterns changed with hybrid work. Older sources are fine for stable behavioural mechanisms; give the year so Marco can judge.
- **Special focus:** apps and platforms that bring several modes together with delay and incident information in one place. Whenever one of these appears in any activity, record it for A3.

## 4. Principles

1. **Stay on the problem.** Describe what commuters do, need and struggle with, and what existing services do and fail to do. Do not propose features, and do not assume AI is the answer. If a source suggests a solution, report it as that source's view.
2. **Answer the questions.** Every finding is tied to one or more of Q1–Q40. A finding that answers none of them goes in a separate "Unexpected findings" section, because the research should stay open to surprises.
3. **Never fill a gap with a guess.** If you cannot find evidence, write "not found" and say what you searched. An honest gap is useful, because it tells Marco what to ask in interviews. An invented statistic would damage the whole project.
4. **Look for what contradicts the brief.** The brief assumes that fragmentation of information is the core problem. Actively look for evidence that it is not, for example that commuters are satisfied, that habit matters more than information, or that the real problem is reliability of the service itself.
5. **Keep facts and interpretation apart.** State what the source says, then, separately, what you think it means for the project.
6. **Write for a 30-minute review.** Put conclusions first and details after.
7. **Marco chooses the sources; you decide the rest and show your reasoning.** Which sources and products are used, and how many, is decided by Marco on the candidate lists. Do not set numbers or steps of your own in their place. For the other choices that shape the research, decide against stated criteria and record the choice under "Decisions taken" in the output, with the alternatives you set aside, so Marco can reverse it later.

## 5. Evidence rules

- **Cite the source of everything.** Every finding, figure, quote, product fact and example in an output names its source. Nothing in an output is unsourced except the text under "Interpretation" and "Decisions taken".
- **Trace every claim.** A finding without a source link is an opinion. Each finding points to one or more sources by ID, and each source has a link, the publisher or author, the year and the geography it refers to. The chain is always claim → finding in an output file → source. A statement you cannot link to a source is either removed or written under "Interpretation", never as a finding.
- **Verify every citation.** A reference that an AI produced from memory looks exactly like a real one until it is checked. Open every link you cite, in this session, and confirm three things: the page exists, it is the source you name, and it says what you claim. Record the date you opened it. Never cite a source from memory, from a search snippet or from another article's summary of it. If you could only reach a secondary summary, cite the summary and say so.
- **A citation that fails the check is dropped.** If a link does not open or does not support the claim, list the source under "Could not do" and remove the finding or mark it as unverified. Do not replace it with a similar-looking reference.
- **Make checking easy for Marco.** He will click the sources behind the findings he relies on. Link to the exact page, and give the page number or section for long documents.
- **Grade every source** A, B or C with the scoring rules in section 12. When sources disagree, prefer the higher grade and report the disagreement.
- **Quote numbers exactly**, with what was measured, on whom and when. Do not round a figure into a stronger claim, and do not apply a national or urban figure to intercity commuters without saying it.
- **Rate confidence** for every finding as `high`, `medium` or `low`, derived from the grades of its sources with the rules in section 12.
- **Confidence is a value, not an apology.** Give the rating the evidence supports and state the finding plainly. Do not inflate a rating, and do not hedge in the text in place of rating it. A low-confidence finding is an honest finding and is worth reporting.
- **Weigh the source.** Consultancy and vendor reports promote their own services; app store reviews and forums over-represent strong feelings. Use them, and say what they are.
- **Quotes from reviews and forums are verbatim**, in the original language with an English translation when needed, with a link and date. Do not include usernames or personal details.
- **Product facts change.** For any app, record the date you checked it and whether the information comes from the product's own site, from the store listing, or from a third party. Check whether the product is still operating.
- **Record dead ends.** If an important source is paywalled or unavailable, list it under "Could not do" so Marco can try.

## 6. Working method for each activity

1. Read the activity in the plan and the questions it covers in `../Questions/initial_questions.md`.
2. Read the outputs of earlier activities, so you build on them and do not repeat them.
3. Write down 5–10 search angles before starting, in English and Italian, covering different modes, both journey stages and every leg of the door-to-door journey.
4. Search broadly first, then go deep on the best sources. Prefer primary sources and literature reviews.
5. For each source Marco selected on the candidate list, create its source file and download its document as described in section 11, before citing it.
6. Stop when new sources repeat what you already have, or when the "done when" check in the plan is met. Do not pad.
7. Write the output file using the template in section 7.
8. Add anything relevant to other activities to the "Leads for other activities" section, so it is not lost.
9. Tell Marco what could not be done, as described in section 11, and continue as agreed with him.

This method applies to an activity once Marco has vetted the candidate list of its category and you have agreed how to continue. Before that, the only work is the candidate list, described in section 13. When the synthesis is finished, give him one closing message: where to start reading, the three most important findings, the biggest surprise, the biggest gap, and the decisions he may want to revisit.

## 7. Output template

Every activity output (`01_…` to `07_…`) uses this structure, in English:

```markdown
---
source: external
date: <YYYY-MM-DD HH:MM>
channel: <web | community>
method: <review | comparison | coding>
status: draft
grade: <A | B | C>
confidence: <high | medium | low>
tags: [output, <topic>, <topic>]
---

# <Activity name>

Date of research: <date> · Scope: <geography, period>

## Summary
At most ten lines: the main findings and what they mean for the project.

## Findings by question
### Q<n>. <question text>
- **A<n>-F<n>. Finding:** <what the evidence says>
  - Sources: [<source ID>](Sources/<Category>/<source file>.md), [<source ID>](Sources/<Category>/<source file>.md)
  - Leg: first mile / main leg / transfer / last mile / whole journey
  - Confidence: high / medium / low
  - Interpretation: <what this may mean for the project>

## Unexpected findings
Relevant things that do not map to any question.

## Evidence against the brief's assumptions
Anything suggesting the problem is different from how the brief frames it.

## Decisions taken
Choices made without Marco, with the reason and the alternatives set aside.

## Gaps
Questions this activity was expected to cover and could not, with what was searched.

## Leads for other activities
Sources, products or themes to follow up elsewhere.

## Questions for the interviews
What only commuters themselves can answer.

## Sources
| ID | Source file | Original | Grade |
| --- | --- | --- | --- |
| <source ID> | [<title>](Sources/<Category>/<source file>.md) | [link](<URL>) | <grade> |

## Could not do
Sources that did not open, documents that could not be downloaded, information not found, checks not made.
```

Findings are numbered within each file and prefixed with the activity, for example `A3-F4`, so that any other file can point to them. Sources are identified by the ID of their source file, described in section 11.

Activity-specific additions are listed in section 8.

## 8. Notes for specific activities

### A1. Global reports

- Start from official statistics before consultancy reports.
- For each key figure, add a table row: figure, what it measures, population, year, geography, source.
- Report clearly when a figure is about commuting in general and not about intercity commuting.
- Say whether a travel time is door to door or only station to station. Look for data on how commuters reach and leave stations and stops.

### A2. Academic research

- Start from literature reviews and meta-analyses, then follow their most cited studies.
- For each paper: research question, method, sample size, country, year, main finding, limits.
- Separate what is well established from what is disputed or based on one small study.
- Include the evidence on why Mobility as a Service pilots succeeded or failed.

### A3. Competitive analysis

- Analyse the products Marco selected on the candidate list. Keep the full list in the output, with one line per product saying why it was analysed or left out.
- Cover every category listed in the plan, including products that closed down, since their failure answers Q33.
- Use the comparison grid in the plan identically for every product. Write "unknown" where you cannot verify a cell.
- Run the door-to-door check described in the plan: whether the product can plan and follow a journey from an address in one city to an address in another, which legs it covers, and where the commuter must switch tool.
- Test each "everything in one place" claim: which modes, which regions, which real-time data, and what happens when a trip is disrupted. Distinguish what the product claims from what independent sources or users confirm.
- End with the gaps that no product covers and the gaps that only some cover.
- Describe; do not rank products or recommend what to build.

### A4. Online reviews

- Only for the A3 shortlist.
- Sample recent reviews across star ratings, not just the worst ones. State how many you read per product and from which store and country.
- Code each review by theme, by journey stage (planning, during the trip, disruption) and, where it can be told, by leg.
- Report counts per theme as rough proportions of your sample, never as market data.

### A5. Reddit and forums

- Search by situation, not by product: choosing between car and train, strikes, missed connections, park and ride, getting to and from the station, the last mile to the workplace, long commutes, which apps people use.
- Include Italian-language communities and commuter groups.
- Look for workarounds and personal rules; they show needs that tools do not meet.
- Note the context of each post (country, route type, mode) whenever it is visible.

### A6. Trend mapping

- One row per trend: description, evidence, drivers, maturity (emerging, growing, established, declining), relevance to the brief, and whether it helps or hinders.
- A trend needs evidence from at least two independent sources. Otherwise list it as a weak signal.

### A7. Data and integration landscape

- For each mode: whether real-time data on delays and incidents exists, who publishes it, under which conditions, and with which known limits.
- Keep it non-technical. The aim is to understand why services are not integrated, not to design an architecture.

### A8. Synthesis

- `08_synthesis.md` is the first and possibly the only file Marco reads in his first 30 minutes. Structure it as:
  1. working assumptions and the decisions taken across all activities;
  2. key findings;
  3. evidence that contradicts the brief;
  4. problem themes with a proposed ranking, and their position along the door-to-door journey, leg by leg;
  5. opportunity areas, described as problems worth solving and not as features;
  6. 2–3 draft scenarios of what success looks like for a commuter;
  7. what the desk research could not answer;
  8. a reading guide to the other files.
- Every claim in the synthesis cites the finding IDs it rests on, for example `A3-F4`, so that it can be followed to the output file and from there to the source. A claim with no finding behind it is labelled as interpretation.
- Create `question_coverage.md` with one row per question: status (answered, partly answered, open), the strongest evidence, confidence, and the file where it sits.
- Cluster findings into problem themes. For each theme give frequency, severity and how poorly current tools cover it, with the evidence behind each rating.
- Propose a ranking of the 3–5 problems most worth investigating and label it clearly as a proposal. The choice of which problems to take forward is Marco's.
- Add the probes that came out of the research to `deepdive_interview_script.md`, mark the topics the desk research already answered well, and record the change in `../CHANGELOG.md` as described in section 2 of `../AGENTS.md`.

## 9. When things do not go as planned

Apart from the candidate lists, where you always stop for Marco, do not stop to ask. Handle these as follows and keep going:

| Situation | What to do |
| --- | --- |
| A scope assumption in section 3 does not fit the evidence | Adjust it, record the change under "Decisions taken", and repeat it in the synthesis |
| An activity cannot meet its "done when" check with the sources that exist | Record what was searched under "Gaps" and move on |
| The evidence strongly contradicts the brief | Report it prominently in the output and the synthesis; do not bend the research to rescue the brief, and do not rewrite the brief |
| A choice would shape the rest of the research | Decide against stated criteria and log it |
| A web source or tool fails | Try another route to the same information, then list it under "Could not do" |

## 10. Housekeeping

- Save outputs in this folder with the file names given in the plan.
- Do not change `../Brief/brief.md` or `../Questions/initial_questions.md`.
- If an output file from an earlier session needs revising, edit it in place and record the change in `../CHANGELOG.md` as described in section 2 of `../AGENTS.md`.
- Do not commit or push anything unless Marco asks.

## 11. Source files and documents

### One file per source

- Every source used in the research has its own Markdown file, called a source file, in the folder of its category under `Sources/`.
- An output may cite only sources that have a source file. Create the source file first, then cite it.
- The source file holds everything about the source. Outputs link to it and do not repeat its details.

| Folder | Code | What goes in it | One file per |
| --- | --- | --- | --- |
| `Sources/Global_Reports/` | `GR` | Official statistics and reports from institutions, industry bodies, operators and consultancies | Report or dataset |
| `Sources/Academic_Papers/` | `AP` | Peer-reviewed papers, literature reviews, theses and working papers | Paper |
| `Sources/Products/` | `PR` | Apps, platforms and mobility services, described from their own sites and store listings | Product |
| `Sources/Online_Reviews/` | `OR` | User reviews from app stores and review sites | Product and store: the file describes the sample of reviews read, not a single review |
| `Sources/Online_Forums/` | `OF` | Reddit threads, forum threads and commuter group discussions | Thread, not a single post |
| `Sources/Articles/` | `AR` | Press articles and blog posts | Article |

Do not add a category folder without Marco's approval.

### Names of source files

`<CODE>-<NNN>_<producer>_<year>_<short-title>.md`, for example `GR-003_eurostat_2024_commuting-flows.md`.

- **Code:** the two letters of the category, from the table above.
- **Number:** three digits, in order of creation within the category. A number is never reused or reassigned.
- **Producer:** the organisation, first author, outlet or platform, in lowercase, for example `eurostat`, `rossi`, `reddit`, `app-store`.
- **Year:** the year of publication. Use `nd` if the source is undated, and the year you opened it for a product page or a review sample.
- **Short title:** two to four lowercase words joined by hyphens.
- **Source ID:** the code and number together, for example `GR-003`. This is what outputs use to cite the source.

### What a source file contains

```markdown
---
source: external
date: <YYYY-MM-DD HH:MM>
channel: <web | community>
method: review
status: draft
grade: <A | B | C>
confidence: n/a
tags: [source, <topic>, <topic>]
---

# <Title of the source>

| | |
| --- | --- |
| **ID** | <source ID> |
| **Link** | [<title>](<full URL of the exact page or document>) |
| **Local copy** | [<file name>](../../docs/<file name>), or "not available" with the reason |
| **Produced by** | <authors and organisation> |
| **Published by** | <publisher, journal or platform> |
| **Kind of source** | <official statistics, institutional report, consultancy report, academic paper, forum thread, ...> |
| **Published on** | <date, or "undated"> |
| **Opened on** | <date the agent opened the link> |
| **Geography** | <countries or cities it covers> |
| **How it was produced** | <method, sample size, period of data collection, or "not stated"> |
| **Who paid for it or has an interest** | <funder, sponsor, commercial interest, or "none found"> |
| **Cited by** | <other source files in this research that cite it; for papers, the citation count, where it comes from and the date> |
| **Grade** | <grade> — <one line on why> |

## What it says
The content relevant to the project, in a few lines.

## Data and quotes used
Each figure or quote taken from the source, with the page number or section where it can be found.

## Limits
What the source does not cover, and reasons to read it with caution.

## Used in
Links to the findings that rest on this source.
```

- Fill in every row. Write "not stated" or "none found" when the information is missing; do not leave a row out and do not guess.
- The rows are what Marco needs to judge the source himself: who produced it, when, how, and with what interest.

### Links

- Every source is cited with a clickable Markdown link, so that Marco can open and read it: `[title](URL)`. Do not write a bare title, and do not write a URL as plain text.
- Link to the exact page or document, not to the home page of the site.
- Links between project files are relative, for example `[GR source](Sources/Global_Reports/<file>.md)`.

### Downloaded documents

- When a source is a document, such as a PDF report, a paper, a dataset or a slide deck, download it into `docs/`.
- Give the downloaded file the same base name as its source file, keeping the original extension, so that the two can be matched at a glance: `GR-003_eurostat_2024_commuting-flows.pdf`.
- When a source has more than one document, add a short detail at the end, after an underscore, to tell them apart: `GR-003_eurostat_2024_commuting-flows_UE_Synthesis.pdf`. List every document in the "Local copy" row.
- `docs/` is excluded from Git by `.gitignore`, because the documents belong to their publishers. They stay on Marco's computer and are not pushed to GitHub.
- Put the link to the downloaded file in the "Local copy" row of the source file.
- Web pages are not downloaded. The source file records the link and the date it was opened.
- Do not get around a paywall or a login. If a document cannot be downloaded, write "not available" and the reason in the "Local copy" row.

### Known limits

Marco knows about these and has accepted them. Work within them and report their effect in the "Could not do" list.

- Reddit blocks automated access. Reach threads through web search, and say that coverage is partial.
- Closed Facebook and Telegram groups cannot be read. Leave them out.
- Paywalled papers: use the abstract and open-access versions only.
- App store reviews: a sample is read, never the full set. State the size of the sample.
- Citation counts exist only for academic papers.

### Tell Marco what could not be done

- End every activity with a "Could not do" list in your message to Marco and in the output file: sources that did not open, documents that could not be downloaded, information that was not found, checks that were not made.
- Never skip a step silently, and never present a partial result as complete.

## 12. Grading sources and rating confidence

Rules agreed with Marco on 2026-10-05. Apply them as written; do not adjust a score by feel.

### Score of a source

Each source gets a score from 0 to 9, the sum of four criteria and one bonus.

| Criterion | Points |
| --- | --- |
| **Reliability of who produced it** | 3: public institutions and official statistics (EU, Eurostat, ISTAT, OECD), peer-reviewed journals · 2: industry bodies, official operator data, large consultancies, established press · 1: a company's material about its own product, trade and specialist blogs · 0: anonymous user content (Reddit, reviews, social media) |
| **Date** | 2: published in 2023 or later · 1: published 2019–2022 · 0: published before 2019, or undated |
| **Bonus for 2026** | +1 if the source was published in 2026 |
| **Citations** | 2: cited by three or more other sources found in this research · 1: cited by one or two · 0: cited by none |
| **Method transparency** | 1: the source states how its data was collected · 0: it does not |

- **Date** is the publication date of the version you used. For a live product page or app store listing, use the day you opened it, because it describes the product as it is now.
- **Citations for academic papers** are counted on OpenAlex instead: 2 points for 50 or more citations, 1 point for 10 to 49, 0 below 10. A paper published less than two years ago gets at least 1 point, because it has not had time to be cited.
- **Citations for all other sources** are counted among the source files of this research. Recount at the end of each activity and before the synthesis, and update the grade if it changed.

### Grade of a source

| Grade | Score |
| --- | --- |
| A | 7–9 |
| B | 4–6 |
| C | 0–3 |

Write the grade with its breakdown in the "Grade" row of the source file, for example `B — 5 points: reliability 2, date 2, citations 0, method 1`.

### Confidence of a finding

| Confidence | Condition |
| --- | --- |
| `high` | At least two independent sources agree, at least one of them is grade A, and none is grade C |
| `medium` | A single grade A source; or two or more grade B sources that agree; or ten or more independent grade C items (posts, reviews) reporting the same thing |
| `low` | Everything else |

- **Independent** means the sources do not rest on the same underlying data and do not simply repeat each other.
- **When sources contradict each other**, lower the confidence by one level and report the contradiction.
- **Many grade C items in agreement** show what users perceive, not what is true. Write such a finding as a perception, for example "many users report that…".

### Grade and confidence of a file

- A source file carries the grade of its source and `confidence: n/a`.
- An output or the synthesis carries the grade that is most common among the sources behind its findings, and the confidence level that is most common among its findings.

## 13. Candidate lists

The research on a source category starts with a candidate list that Marco vets. He decides which sources are used and how many; do not decide it for him and do not set a number in advance.

### Keep the progress file up to date

- At the start of every desk research session read `progress.md`, and continue from its "Next step".
- After every meaningful step, such as a search batch, links opened, a list delivered or a decision from Marco, add a line to its log and update "Current state" and "Next step". Do this as you go and not at the end, so that work can resume if the session ends without warning.
- Record links found by search in the file before opening them, and the result of opening them after. Do not log these updates in `../CHANGELOG.md`.

### What to do

- Write one list per category, in the file named in the plan, for example `Sources/Global_Reports/GR_candidates.md`. Start with Global reports.
- Search for the sources that could answer the research questions, and list the relevant ones. Stop when new searches only return weaker versions of what is already listed.
- Open every link once, to confirm that the source exists and is what the list says it is. Do not list a source from memory or from a search snippet.
- Keep it short: one row per candidate, ordered from the most to the least promising.

### What not to do yet

- Do not create source files, assign source IDs, download documents or read the sources in depth.
- Do not write findings or outputs.
- Do not start the next list or any activity. After delivering a list, stop and wait for Marco's decision.

### Format

```markdown
---
source: external
date: <YYYY-MM-DD HH:MM>
channel: <web | community>
method: review
status: draft
grade: n/a
confidence: n/a
tags: [output, <topic>]
---

# Candidate Sources: <Category>

<Two or three lines: how many candidates, what they cover well, what seems to be missing.>

| # | Source | Produced by | Year | Kind | Geography | What it could answer | Access | Expected grade | Keep? |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [<title>](<URL>) | <organisation or author> | <year> | <kind of source> | <area> | <question groups or numbers> | free / paywalled / partly | <A, B or C> | |

## How the search was done
Search terms, sites and languages used.

## Left out
Kinds of source or notable sources that were found and not listed, with the reason.

## Could not do
Sources that did not open, searches that were blocked.
```

- **Expected grade** is provisional. Estimate it with the rules in section 12 from what is visible without reading the source in depth, and say so. The final grade is given in the source file.
- **Keep?** is Marco's column. Leave it empty.
- For products, add a column with the product category from the plan and mark the ones you recommend against the criteria in the plan.
- For forums the candidates are threads or communities; for reviews they are the products and stores to sample.

### After Marco's decision

For the sources Marco keeps, and only for those, continue as agreed with him: create the source files and download the documents as described in section 11, then run the activity.
