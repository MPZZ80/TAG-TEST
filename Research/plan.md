---
source: Claude (Opus 5.5), from Marco's notes, brief.md and initial_questions.md
date: 2026-10-07 01:45
channel: Claude Code conversation
method: AI-drafted plan, revised on Marco's instructions
confidence: medium
tags: [research-plan, desk-research, interviews, intercity-commuting]
---

# Research Plan

Plan for answering the 40 questions in `../Questions/initial_questions.md` (referred to below as Q1–Q40), based on the brief in `../Brief/brief.md`.

## 1. Scope and constraints

- **Duration:** one week.
- **Marco's availability:** lunch breaks and evenings only.
- **Division of work:** Claude does the desk research. For each source category Claude first drafts a short list of candidate sources and Marco vets it. Which sources are used, how many, and how the work continues are decided together after each list.
- **Three phases:**
  1. Desk research by Claude, starting from the candidate lists that Marco vets (sections 3 and 5).
  2. Marco's review of the results (section 6).
  3. Deep-dive interviews with fellow commuters, started by Marco only after he has seen the results (section 7).
- **Unit of analysis:** the intercity commute door to door, as stated in the brief. This is the whole journey from the door the commuter leaves to the door they arrive at: first mile, main intercity leg, transfers and last mile, including walking, waiting and parking. No activity may reduce the commute to its main leg.
- **Special focus:** apps and platforms that bring several mobility modes, delays and incidents together in one place.

### Working assumptions

Claude proceeds on these without waiting for confirmation and repeats them at the top of the synthesis, so Marco can see what they affected.

| Assumption | Why it matters |
| --- | --- |
| Geographic focus is Western countries and the more advanced countries of the rest of the world that resemble the West, with Italy as the home market (extended from Europe only on 2026-10-06; the list of countries is not confirmed) | Reports, operators, apps and forums differ a lot by country; the wider scope is meant to find technology solutions and pain points that Europe alone does not show |
| An intercity commute is a recurring trip between two cities that takes roughly 30–120 minutes door to door | Decides which studies and apps are relevant. The door-to-door focus is Marco's; the duration range is still an assumption |

## 2. How the desk research runs

- Claude first drafts the candidate lists described in section 5. After Marco's decisions, Claude carries out activities A1–A8 on the selected sources and writes one output file per activity.
- The choice of sources and of products to analyse is Marco's, made on the candidate lists. Smaller choices are made by Claude against stated criteria and recorded with their reasons in the output.
- Every activity looks at the journey door to door and records which leg each finding concerns: first mile, main leg, transfer, last mile, or the whole journey.
- Every source used has its own source file in a category folder under `Sources/`, and downloaded documents go in `docs/`. The outputs link to the source files.
- Detailed working rules are in `desk_research_instructions.md`.

### Evidence rules for all activities

- Every claim carries a source link, publication year and geography.
- Facts are kept separate from interpretation.
- Each finding gets a confidence level: high (several solid sources), medium (one solid source), low (anecdotal).
- Reviews and forum posts are treated as qualitative signals, not as representative data.
- Anything that could not be verified is listed as an open point, not filled in.

## 3. Activities

### A1. Global reports on commuting

- **Goal:** size and describe the commuter population and its behaviours with reliable numbers.
- **Questions covered:** Q1–Q8, Q13, Q20, Q27, Q32.
- **Where to look:** Eurostat and national statistics offices (ISTAT for Italy), OECD/ITF, UITP, EU Urban Mobility Observatory, European Commission mobility surveys, consultancy reports on the future of mobility, traffic and public transport indexes published by mobility data companies, annual reports and punctuality data from rail and bus operators, commuter association reports.
- **What to extract:** how many people commute between cities, how often, how far and with which modes; door-to-door travel times and how they split between first mile, main leg and last mile; modes used to reach and leave stations and stops; share of multimodal trips; punctuality and disruption statistics; effects of hybrid work; stated reasons for mode choice; satisfaction levels.
- **Output:** `01_global_reports.md` with a source table, key figures, and findings mapped to question numbers.
- **Done when:** each of Q1–Q8 has at least one data-backed answer or is marked as "not answerable from reports".

### A2. Academic research

- **Goal:** understand the mechanisms behind commuter behaviour that reports only describe.
- **Questions covered:** Q3, Q9–Q16, Q19–Q23, Q29, Q31, Q34, Q38.
- **Topics to search:** mode choice and habit in commuting; multimodal and intermodal travel behaviour; travel information use and trust; decision-making under uncertainty and time pressure; responses to disruption; commuting stress and wellbeing; adoption and failure of Mobility as a Service (MaaS) pilots; first and last mile, access to stations and its effect on mode choice; how transfers and waiting are perceived compared with time in motion; door-to-door travel time and its reliability.
- **Where to look:** Google Scholar, transport research journals (travel behaviour, transport policy, transport psychology, transport geography), open-access repositories, literature reviews first and single studies second.
- **Output:** `02_academic_research.md` with an annotated list of about 10–15 papers (finding, method, sample, country, year) and a summary of what is well established versus disputed.
- **Done when:** there is a short, sourced explanation for how commuters choose modes, how they use information, and how they react to disruption.

### A3. Competitive analysis

- **Goal:** map which apps and platforms try to solve commuting problems, what they do well and where they stop.
- **Special focus:** aggregators that combine several modes with real-time delay and incident information in one place.
- **Questions covered:** Q14, Q15, Q18, Q24, Q25, Q27–Q31, Q33.
- **Categories to cover:**
  - journey planners and navigation apps;
  - multimodal and MaaS platforms, including ones that closed down;
  - intercity ticketing and booking aggregators;
  - rail and bus operator apps;
  - driving, traffic and parking apps;
  - carpooling and shared mobility services;
  - disruption and alert services, including community-based ones.
- **Choice of products:** Marco selects the products for full analysis on the candidate list. On that list Claude marks the ones it recommends, using these criteria: every aggregator that claims to put modes and disruptions in one place, at least one product per category, the products most used in Italy, and at least one that closed down.
- **Comparison grid (same for every product):** modes covered; intercity versus urban coverage; real-time delays and incidents; alerts and their timing; re-routing when plans change; ticketing and payment; personalisation and saved commutes; door-to-door coverage including first and last mile; geography; business model; main strengths; main gaps.
- **Output:** `03_competitive_analysis.md` with the long list, the shortlist analysed on the grid, a comparison table, and a summary of gaps nobody covers.
- **Door-to-door check:** for each shortlisted product, establish whether it can plan and follow a complete journey from an address in one city to an address in another, which legs it covers itself, and where the commuter has to switch to another tool.
- **Done when:** the comparison table is complete, the door-to-door check is done for every shortlisted product, and the "all in one place" claim of each aggregator has been checked against what it really covers.

### A4. Online reviews

- **Goal:** hear what users of the shortlisted products praise and complain about, in their own words.
- **Questions covered:** Q17–Q19, Q21, Q24–Q26, Q28, Q35.
- **Where to look:** App Store and Google Play reviews of the A3 shortlist, review sites, comments under tech and mobility press articles.
- **Method:** sample recent positive and negative reviews for each product, code them by theme (accuracy, timeliness, coverage, ticketing, usability, trust, missing modes), keep verbatim quotes.
- **Output:** `04_online_reviews.md` with themes per product, recurring cross-product themes, and a quote bank.
- **Done when:** each shortlisted product has its top recurring complaints and praises with example quotes.

### A5. Reddit and forums

- **Goal:** capture unfiltered commuter stories, workarounds and frustrations that are not tied to a single app.
- **Questions covered:** Q4, Q9–Q12, Q16, Q20–Q23, Q26, Q34–Q37.
- **Where to look:** Reddit communities on commuting, transit, trains, cars and specific countries or cities; commuter groups and committees on Facebook and Telegram; replies to operators on social media; comment sections of local news on strikes and disruptions.
- **Method:** search for threads on commute planning, strikes, delays, missed connections, "car or train", park and ride, getting to and from the station, parking at stations, the last mile to the workplace, and "which app do you use"; code posts by journey stage and problem type.
- **Output:** `05_reddit_forums.md` with problem themes, workarounds, tools mentioned, emotional tone, and a quote bank with links.
- **Done when:** there is a ranked list of the most frequently mentioned problems and workarounds.

### A6. Trend mapping

- **Goal:** understand what is changing around the problem and why now could be different.
- **Questions covered:** Q27, Q30, Q32, Q33.
- **Trends to check:** hybrid work and changing commute frequency; MaaS evolution and consolidation; integrated fares and ticketing; open mobility data and real-time data standards; regulation on data sharing and multimodal information; shared and micromobility; electrification and parking policy; conversational and AI-based travel assistance; cost of living and fuel prices.
- **Output:** `06_trend_map.md` with one row per trend: description, evidence, drivers, maturity, relevance to the brief, and whether it helps or hinders a solution.
- **Done when:** each trend has evidence and a clear statement of its impact on the commuter problem.

### A7. Data and integration landscape

- **Goal:** find out which real-time information on delays and incidents exists, who owns it, and why it is not already combined.
- **Questions covered:** Q18, Q29, Q30.
- **Where to look:** operator and public authority open-data portals, national access points for mobility data, documentation of real-time transit and traffic data formats, developer programmes of mobility platforms.
- **Output:** `07_data_landscape.md` with a table of data sources by mode (rail, bus, road traffic, shared mobility, parking), their availability and their limits, and a note on which legs of a door-to-door journey have no real-time data.
- **Done when:** for each mode it is clear whether real-time data exists and how accessible it is.

### A8. Synthesis

- **Goal:** turn the separate outputs into answers, proposed priorities and interview hypotheses.
- **Questions covered:** all, with emphasis on Q34–Q40.
- **Method:** fill a coverage matrix for Q1–Q40 (answered, partly answered, open); cluster findings into problem themes; place the problems along the door-to-door journey, leg by leg; rate each theme by frequency, severity and how poorly existing tools cover it; draft 2–3 use-case scenarios for "what success looks like"; list the open questions that only interviews can answer.
- **Outputs:**
  - `08_synthesis.md`: working assumptions and decisions taken, key findings, problem themes with a proposed ranking, opportunity areas, draft success scenarios, evidence that contradicts the brief;
  - `question_coverage.md`: status and evidence for each of Q1–Q40;
  - an updated `deepdive_interview_script.md` with probes derived from the findings.
- **Done when:** every question has a status, and there is a proposed shortlist of 3–5 problems worth investigating further. The ranking is a proposal; Marco decides.

## 4. Question coverage by activity

| Question group | Main activities | Supporting activities |
| --- | --- | --- |
| Who (Q1–Q8) | A1, A2 | A5, interviews |
| Planning before leaving (Q9–Q12) | A2, A5 | interviews |
| Comparing and combining options (Q13–Q16) | A2, A3 | A1, A5, interviews |
| Information during the journey (Q17–Q19) | A4, A3 | A7, interviews |
| When plans change (Q20–Q23) | A5, A2 | A1, interviews |
| Current tools and workarounds (Q24–Q26) | A3, A4 | A5, interviews |
| Why now (Q27–Q33) | A3, A6, A7 | A1, A2 |
| What success (Q34–Q40) | A8, interviews | A2, A4, A5 |

Desk research will answer the "Why now" questions well. The "Who", "What" and "What success" questions will only be partly answered and need the interviews.

## 5. Order of work

### Stage 1: candidate lists

Before any activity starts, Claude drafts a short list of candidate sources for each source category, and Marco vets it. Nothing else is done in a category until Marco has seen its list: no source files, no downloads, no output.

| Order | Candidate list | File | Feeds |
| --- | --- | --- | --- |
| 1 | Global reports | `Sources/Global_Reports/GR_candidates.md` | A1, A6, A7 |
| 2 | Academic papers | `Sources/Academic_Papers/AP_candidates.md` | A2 |
| 3 | Products | `Sources/Products/PR_candidates.md` | A3 |
| 4 | Articles | `Sources/Articles/AR_candidates.md` | A6 |
| 5 | Online forums | `Sources/Online_Forums/OF_candidates.md` | A5 |
| 6 | Online reviews | `Sources/Online_Reviews/OR_candidates.md` | A4, after the products are chosen |

The Global reports list comes first. Once Marco has seen which candidates there are and how many, he and Claude decide what to do next: which sources to keep, how deep to go, and when to draft the other lists. The same happens after each list.

### Stage 2: activities

The activities A1 to A8 run on the sources Marco selected. Their order, their depth, the model used and how they are split into sessions are decided with Marco after the candidate lists, not fixed here. Two dependencies hold in any case: A4 needs the products chosen in A3, and A8 comes last.

If time runs short, A7 is shortened first, then A6. A3, A4 and A5 are the core.

## 6. Marco's review of the results

Planned to fit lunch breaks and evenings once the research is complete.

| Session | What to read | What to decide |
| --- | --- | --- |
| Lunch (about 30 min) | `08_synthesis.md` | Whether the working assumptions and Claude's decisions hold |
| Evening (60–90 min) | `question_coverage.md`, then the activity files behind anything surprising or doubtful | Which problems to take forward; what needs more research |
| Lunch (about 30 min) | `deepdive_interview_script.md` | Which topics and probes to keep for the interviews |

Each activity file opens with a summary of at most ten lines, so any of them can be skimmed in a few minutes.

Before relying on a finding, click the sources behind it. Every finding lists its source IDs, and the "Sources" table of each file gives the link, the grade of the source and the date the agent opened it.

## 7. Deep-dive interviews

Started by Marco after the review in section 6.

- **Goal:** fill the gaps left by the desk research, mainly on real behaviours, motivations and what success means to commuters.
- **Participants:** 5–6 fellow commuters, mixed on purpose by travel frequency, main mode (train, car, mixed), route familiarity and time pressure. At least two who regularly combine modes.
- **Format:** 30–45 minutes each, remote or in person, recorded with consent.
- **Script:** see `deepdive_interview_script.md`. It is a draft now and is updated by the synthesis.
- **Outputs:** one notes file per interview, `09_interview_findings.md`, and an updated `question_coverage.md`.

## 8. Files in this folder

| File | Content | Status |
| --- | --- | --- |
| `plan.md` | This plan | Draft |
| `desk_research_instructions.md` | Working rules for the desk research | Draft |
| `progress.md` | Running record of the desk research, for resuming work in a new session | Active |
| `deepdive_interview_script.md` | Topics for the interviews | Draft |
| `Sources/<Category>/<CODE>_candidates.md` | Candidate list of each source category, for Marco to vet | Global reports done; the others to do |
| `Sources/Global_Reports/GR_to_obtain.md` | Global report sources that could not be opened, for Marco to try to obtain | Active |
| `Sources/<Category>/` | One file per source, in a folder per category | 132 source files in six categories |
| `docs/<Category>/` | Documents downloaded from the sources | 61 files in six category folders |
| `docs_md/<Category>/` | Markdown copies of documents and text captures of web pages | 110 files in six category folders |
| `01_global_reports.md` to `07_data_landscape.md` | Activity outputs | To do |
| `08_synthesis.md` | Findings and proposed priorities | To do |
| `question_coverage.md` | Status of Q1–Q40 | To do |
| `09_interview_findings.md` | Interview results | After review |

## 9. Risks

| Risk | Mitigation |
| --- | --- |
| A candidate list misses important sources | Each list states what was searched and what was left out, and Marco can add sources he knows |
| Too much material for the review time available | The synthesis is the single entry point; each output opens with a ten-line summary |
| Global data does not match the local commuting context | Record geography for every source and look for national data first |
| Reviews and forums over-represent angry users | Treat them as signals and verify the important ones in interviews |
| Competitive analysis drifts towards features and solutions | Keep the focus on what users can and cannot do, not on what to build |
| Interviewees are too similar to Marco | Recruit outside the immediate circle and vary mode and frequency |
