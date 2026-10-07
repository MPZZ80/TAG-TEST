---
source: Claude
date: 2026-10-07 10:15
channel: conversation
method: generated
status: draft
grade: n/a
confidence: n/a
tags: [schema]
---

# Metadata Schema

The metadata block that opens every file in the project, and the fixed lists of values it may contain.

**Status: draft, under review with Marco.** The lists in sections 3 to 9 are a first proposal. The files already in the project still carry free-text metadata and will be aligned once Marco has approved the lists.

The aim of the schema is to keep the metadata small and predictable. Every field except `date` takes its value from a short closed list, so that categories and tags do not multiply as the project grows.

## 1. The block

Every file starts with this block. It is the first thing in the file, before the title.

```markdown
---
source: Claude
date: 2026-10-05 21:15
channel: conversation
method: generated
status: draft
grade: n/a
confidence: n/a
tags: [plan]
---
```

All eight fields are required, in this order. If a value is unknown, write `unknown`. Do not leave a field out and do not guess.

## 2. Rules

1. **Use only the values listed in this file.** Do not invent a new value because none fits perfectly; choose the closest one.
2. **A new value needs Marco's approval.** If nothing fits at all, propose the new value to Marco. When he agrees, add it to this file first, then use it.
3. **One value per field**, except `tags`.
4. **Details do not go in the metadata.** Which reports were read, which prompt was used or which participant was interviewed belongs in the body of the file.
5. **No personal data.** No names or details of interviewees or forum users.
6. Write the block when you create a file. When you modify a file, update `date`, and the other fields if they changed.
7. These files have no metadata block: `CHANGELOG.md`, `CLAUDE.md` and every `README.md` (the repository's front page and the folder guides).

## 3. `source`: who the content comes from

| Value | Use it when |
| --- | --- |
| `Marco` | Marco wrote the content himself |
| `Claude` | An agent wrote the content from Marco's inputs |
| `external` | The content comes from published sources: reports, papers, products, reviews, forums |
| `participant` | The content comes from an interviewed commuter |

For a file with mixed origins, choose the origin of the substance. A research output written by Claude from external sources is `external`.

## 4. `channel`: how the content reached the project

| Value | Use it when |
| --- | --- |
| `conversation` | It was written or pasted in a session between Marco and the agent |
| `web` | It was gathered from websites, reports, papers or product pages |
| `community` | It was gathered from user reviews, Reddit, forums or social media |
| `interview` | It was gathered in an interview |
| `observation` | It was observed first-hand, for example on a commute or while using an app |

## 5. `method`: how the content was produced

| Value | Use it when |
| --- | --- |
| `verbatim` | Copied as given, with no rewriting |
| `generated` | Written by an agent from a prompt or from instructions |
| `review` | Reading and summarising sources: reports, papers, trends, data |
| `comparison` | Analysing several products or options on the same grid |
| `coding` | Grouping qualitative material, such as reviews, posts or interview notes, into themes |
| `interview` | A conversation with a participant, recorded as notes or transcript |
| `synthesis` | Combining the results of several other files |

## 6. `status`: how far the file has been checked by Marco

Every file has a status. It says how settled the file is, not how true its content is.

| Value | Meaning |
| --- | --- |
| `draft` | Written, and not yet reviewed by Marco |
| `reviewed` | Marco has read it, and it may still change |
| `approved` | Marco has explicitly confirmed it |

- A new file written by an agent starts as `draft`. A file in Marco's own words starts as `approved`.
- Only Marco raises a status. An agent never moves a file to `reviewed` or `approved` on its own judgement.
- When an agent changes the substance of an `approved` file, the status goes back to `reviewed` until Marco confirms it again.
- A file that contains evidence becomes `approved` only after Marco has opened the sources behind its key findings.

## 7. `grade`: how reliable the sources are

| Value | Meaning |
| --- | --- |
| `A` | Source score of 7 to 9 |
| `B` | Source score of 4 to 6 |
| `C` | Source score of 0 to 3 |
| `n/a` | The file contains no evidence |

- The score is built from who produced the source, its date, how often it is cited and whether it states its method. The scoring rules are in section 12 of `../Research/desk_research_instructions.md`, which is the only copy.
- The grade applies to files of type `source`, `output` and `synthesis`. A source file carries the grade of its source. An output or synthesis carries the grade most common among the sources behind its findings.
- How to grade interview `notes` will be decided before the interviews. Until then they have `grade: n/a`.

## 8. `confidence`: how solid the evidence is

Confidence applies to files of type `output`, `notes` and `synthesis`. Every other file, including a source file, has `confidence: n/a`.

| Value | Meaning |
| --- | --- |
| `high` | At least two independent sources agree, at least one is grade A and none is grade C |
| `medium` | A single grade A source, two or more grade B sources that agree, or ten or more independent grade C items reporting the same thing |
| `low` | Everything else |
| `n/a` | The file contains no evidence |

- The full rules are in section 12 of `../Research/desk_research_instructions.md`.
- The value in the metadata is the level most common among the findings of the file. Each finding also carries its own rating.
- **Confidence is a value, not an apology.** Set it to what the rules give and state the content plainly. Do not raise it to make a file look stronger, and do not replace it with hedging in the text.
- **A low-confidence file is an honest file.** `low` is a normal and useful value: it tells Marco what still needs checking.

## 9. `tags`: what kind of file it is and what it is about

A file has at most four tags: exactly one type tag, written first, and up to three topic tags.

### Type tags (exactly one)

| Tag | Kind of file |
| --- | --- |
| `brief` | The project brief |
| `questions` | Research questions |
| `prompt` | A saved prompt |
| `plan` | A plan of activities |
| `instructions` | Rules for how agents work |
| `schema` | A definition of structure, such as this file |
| `script` | An interview or test script |
| `source` | The description of one source used in the research |
| `output` | The result of a research activity |
| `notes` | Raw notes from an interview or an observation |
| `synthesis` | Findings combined across activities |

### Topic tags (none to three)

The topics are the eight groups of the initial research questions, so that a file can be traced back to the questions it helps answer.

| Tag | Question group | Questions |
| --- | --- | --- |
| `who` | Who the commuters are | Q1–Q8 |
| `planning` | Planning before leaving | Q9–Q12 |
| `mode-choice` | Comparing and combining options | Q13–Q16 |
| `information` | Information during the journey | Q17–Q19 |
| `disruption` | When plans change | Q20–Q23 |
| `tools` | Current tools and workarounds | Q24–Q26 |
| `why-now` | Why the problems persist | Q27–Q33 |
| `success` | What success looks like | Q34–Q40 |

- Use topic tags only for the topics a file is mainly about.
- A file that covers the whole project, such as the brief or the plan, has no topic tag.
- Do not add tags for the project itself (`intercity-commuting`, `discovery`): they would be on every file and would tell nothing apart.

## 10. Open points for Marco

- Whether the four `source` values are enough, or the detail should be kept, for example the name of the model.
- Whether `community` should stay separate from `web`.
- Whether topic tags should follow the question groups, as proposed, or the research activities (reports, academic, competitors, reviews, forums, trends).
- Whether the limit of four tags is right.
- Whether three `status` values are enough.
