---
source: Claude
date: 2026-10-28 11:24
method: generated
status: draft
grade: n/a
confidence: n/a
tags: [internal, rules]
---

# Metadata Schema

The metadata block that opens every file in the project, and the fixed lists of values it may contain.

**Status: draft, under review with Marco.** The tags in section 8 were agreed with Marco on 2026-10-12 and applied to every file. The lists of the other fields are still a first proposal, and six files written before the schema (brief, questions, prompt, plan, `AGENTS.md`, desk research instructions) still carry free-text values in `source`, `method` and `confidence`.

The aim of the schema is to keep the metadata small and predictable. Every field except `date` takes its value from a short closed list, so that categories and tags do not multiply as the project grows.

## 1. The block

Every file starts with this block. It is the first thing in the file, before the title.

```markdown
---
source: Claude
date: 2026-10-05 21:15
method: generated
status: draft
grade: n/a
confidence: n/a
tags: [research, internal, plan]
related: [brief.md]
---
```

The first seven fields are required, in this order. `related` comes last and is required for the notes of the research (section 9). If a value is unknown, write `unknown`. Do not leave a field out and do not guess.

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

## 4. `method`: how the content was produced

| Value | Use it when |
| --- | --- |
| `verbatim` | Copied as given, with no rewriting |
| `generated` | Written by an agent from a prompt or from instructions |
| `review` | Reading and summarising sources: reports, papers, trends, data |
| `comparison` | Analysing several products or options on the same grid |
| `coding` | Grouping qualitative material, such as reviews, posts or interview notes, into themes |
| `interview` | A conversation with a participant, recorded as notes or transcript |
| `synthesis` | Combining the results of several other files |

## 5. `status`: how far the file has been checked by Marco

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

## 6. `grade`: how reliable the sources are

| Value | Meaning |
| --- | --- |
| `A` | Source score of 7 to 9 |
| `B` | Source score of 4 to 6 |
| `C` | Source score of 0 to 3 |
| `n/a` | The file contains no evidence |

- The score is built from who produced the source, its date, how often it is cited and whether it states its method. The scoring rules are in section 12 of `../01_Research/desk_research_instructions.md`, which is the only copy.
- The grade applies to files of type `source`, `output` and `synthesis`. A source file carries the grade of its source. An output or synthesis carries the grade most common among the sources behind its findings.
- How to grade interview `notes` will be decided before the interviews. Until then they have `grade: n/a`.

## 7. `confidence`: how solid the evidence is

Confidence applies to files of type `output`, `notes` and `synthesis`. Every other file, including a source file, has `confidence: n/a`.

| Value | Meaning |
| --- | --- |
| `high` | At least two independent sources agree, at least one is grade A and none is grade C |
| `medium` | A single grade A source, two or more grade B sources that agree, or ten or more independent grade C items reporting the same thing |
| `low` | Everything else |
| `n/a` | The file contains no evidence |

- The full rules are in section 12 of `../01_Research/desk_research_instructions.md`.
- The value in the metadata is the level most common among the findings of the file. Each finding also carries its own rating.
- **Confidence is a value, not an apology.** Set it to what the rules give and state the content plainly. Do not raise it to make a file look stronger, and do not replace it with hedging in the text.
- **A low-confidence file is an honest file.** `low` is a normal and useful value: it tells Marco what still needs checking.

## 8. `tags`: phase, origin, type and topics

Agreed with Marco on 2026-10-12. The aim is the smallest set of tags that still tells the files of the knowledge base apart. The tags are always in this order: phase, origin, type, the topics (up to three), the pain points, and last the marker `contradiction` when present.

```markdown
tags: [research, desk, source, disruption, tools]
tags: [research, interview, notes, planning, disruption]
tags: [research, internal, plan]
```

### Phase (one, written first)

| Tag | Use it when |
| --- | --- |
| `research` | The file belongs to the research: questions, plan, sources, notes, analysis |
| `design` | The file belongs to the design work. Not used yet |
| `development` | The file belongs to the development work. Not used yet |

A file that serves the whole project and not one phase has no phase tag: the brief, `AGENTS.md` and this schema.

### Origin (exactly one)

It replaces the old `channel` field.

| Tag | Use it when |
| --- | --- |
| `desk` | The content comes from published sources: the source files, the lists of sources and the analysis built on them |
| `interview` | The content comes from an interview: notes and interview findings |
| `survey` | The content comes from the answers to a questionnaire: results and counts. Added on 2026-10-19 on Marco's instruction |
| `internal` | The file was written by Marco or by an agent and holds no evidence: brief, questions, plans, rules, scripts, indexes |

A file that combines desk and interview evidence takes the origin of most of its evidence. Whether a desk source is a report, a product page, a review sample or a forum thread is told by its folder and by the "Kind of source" row of the source file, not by a tag.

### Type (exactly one)

| Tag | Kind of file |
| --- | --- |
| `brief` | The project brief |
| `questions` | Research questions |
| `plan` | A plan of activities, or the record of its progress |
| `rules` | How the work is done: instructions for agents, schemas, saved prompts |
| `script` | An interview or test script |
| `source` | The description of one source used in the research |
| `notes` | Notes on one interview or one observation |
| `output` | The result of one research activity, including the lists of candidate sources and of sources to obtain |
| `synthesis` | Findings combined across sources or activities, and indexes of them |

`rules` replaces the earlier `instructions`, `schema` and `prompt`.

### Topics (none to three, written last)

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

### Pain points (none or more, after the topics)

Added on 2026-10-12 on Marco's instruction: a small set of terms for the single pain points, more granular than the topics. A note gets a pain-point tag only when it holds evidence of that pain point; notes that share a tag are linked in `related`.

| Tag | The pain point |
| --- | --- |
| `late-info` | Delay, cancellation or arrival information that comes late or is wrong |
| `no-alternative` | No help or workable alternative when a train is cancelled or a connection is missed |
| `tight-connection` | Changes between services that are tight, broken or costly |
| `first-last-mile` | Getting to the first stop and from the last one: walking, parking, a lift, a local bus |
| `hybrid-work` | Fewer and variable office days, and passes or tickets that no longer fit them |
| `habit` | Habit, or no real choice of means |
| `unreliable-service` | The service itself fails: delays, cancellations, missing runs; the app is blamed for it |
| `usual-trip` | Regular travellers cannot see or follow their usual trip at a glance: saved trips, standing alerts |
| `ticket-carryover` | Tickets, passes and rights that do not carry over between services or operators |
| `refunds` | Complaints, refunds and compensation after a delay |
| `crowding` | Crowded vehicles at peak hours |
| `workarounds` | Personal rules, buffers and fallbacks that travellers build for themselves |

Use `crowding`, not "crowded" or "overcrowding", and so on: one term per pain point.

### Marker (none or one, written last)

| Tag | Use it when |
| --- | --- |
| `contradiction` | The file disagrees with another file on a fact, not on an interpretation. Both files carry the tag, both versions are kept, and each describes the conflict in its "Connections" section |

Added on 2026-10-12 on Marco's instruction.

### What is not a tag

- The project itself (`intercity-commuting`, `discovery`): it would be on every file and would tell nothing apart.
- The country and the language: they are in the body of the file. The leg of the journey has one pain-point tag, `first-last-mile`, and no others.
- Grade, confidence and status: they have their own fields.

## 9. `related`: the links between notes

Added on 2026-10-12 on Marco's instruction, to turn the files into a network.

```markdown
related: [plan.md, desk_research_partial_analysis.md, GR-006_european-commission_2026_swd-300-impact-assessment.md]
```

- It lists, by file name exactly as in `Index.md`, the other files that share material evidence with this one: the same pain point, the same moment of the commute, the same source landscape.
- **Evidence only.** Two notes on the same interview subject link; two notes that merely mention the same word do not. Do not add a link with no evidence behind it to shorten a path.
- Every note of the research has it: source files, lists of sources, interview notes and the interview script. A note links to the plan when the plan names the activity it was collected for.
- Every link has a sentence a person can read: the file ends with a "Connections" section that names each related file and says what is shared.
- Transcripts are never edited. A notes file links to the transcript it derives from; the transcript links to nothing.
- Links are derived from what the notes themselves say, not from an analysis written on top of them. When a note is added or its evidence changes, update `related` and "Connections" on both sides, in the same change.

## 10. Open points for Marco

- Whether the four `source` values are enough, or the detail should be kept, for example the name of the model.
- Whether an origin tag is needed for first-hand observation, which the old `channel` field had and the tags do not.
- Whether three `status` values are enough.
