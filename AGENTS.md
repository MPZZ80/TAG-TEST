---
source: Marco's instructions, written up by Claude (Opus 5.5)
date: 2026-10-12 22:49
method: Standing instructions recorded as Marco gives them; details drafted by Claude
confidence: medium
tags: [internal, rules]
---

# Instructions for Agents

Rules for any AI agent working in this repository. Read this file in full before changing anything.

The project is the discovery phase of a digital product design project about intercity commuting door to door, run by Marco. Start from `Brief/brief.md` and `Questions/initial_questions.md`.

Repository layout:

| Location | What it holds |
| --- | --- |
| Repository root | Only the files that tools or conventions expect there: `AGENTS.md`, `CLAUDE.md`, `README.md`, `CHANGELOG.md`, and `Index.md`, the list of the files in `Research/` with their tags (see "Index" below) |
| `Brief/` | The project brief |
| `Questions/` | The initial research questions and the prompt that generated them |
| `Metadata/` | The metadata schema: the block every file starts with and its allowed values |
| `Research/` | The research plan, the desk research instructions, the interview script and the research outputs |
| `Research/Interviews/` | Recordings, automatic transcripts and one notes file per interview |
| `Research/Survey/` | The commuter survey in five languages, where to post it and the script that builds the forms |
| `Research/Desk_Research/Doc_Notes/` | One synthesis note per source, in a folder per source category: notes written from the sources, not the sources themselves |
| `Research/Desk_Research/docs/` | Documents downloaded from the sources, in one folder per category. Excluded from Git |
| `Research/Desk_Research/docs_md/` | Markdown conversions of the documents and text captures of web pages, in one folder per category. Excluded from Git |

Put a new document in the folder it belongs to, not in the root. Create a new folder only when a document fits none of these.

### Index

`Index.md` in the repository root has one line for every Markdown file in the `Research/` folder and its subfolders. Files outside `Research/` are not listed, and neither are the `README.md` files, the interview transcripts and the lists of sources (`*_candidates.md`, `*_to_obtain.md`). It exists so that an agent can connect and find things quickly without searching the whole repository.

- **Format of a line, exactly:** `- filename — [tags · status · grade · confidence]`. The tags include the activity (`desk`, `interview` or `internal`).
- **One line per file.** No summaries, no commentary, no interpretation.
- **Groups and order:** files are grouped by folder; inside a group the lines follow the `date` of the metadata block, oldest first.
- **Status is shown as it is.** A file still marked `draft` keeps that status in its line; do not hide it.
- **Nothing is invented.** A missing field is written `unknown`. A file with no metadata block is listed with every value `unknown`, and Marco is told.
- **Report** to Marco any file that could not be read and any file whose declared activity does not match its file name, for example a file named "interview" whose tags say `desk`.
- **Start from `Index.md` when looking for something.** Search it for a tag (section 8 of `Metadata/metadata_schema.md`), then open only the files it points to. Go to the folder READMEs for what each file says.
- **Keep it current.** When you create, rename, move or delete a file, or change its tags, status, grade, confidence or date, update its line in the same change.

### Folder guides

Every folder has a `README.md` that says what is in it, which file to read for what, and what not to read in full. They exist to save reading.

- **Read the README of a folder before opening its files**, and open only the files it points you to.
- For the sources, go `Research/README.md` → `Research/Desk_Research/Doc_Notes/README.md` → the `README.md` of one category, which is the index of its sources → the single source files you need. Do not open the source files one by one, and do not read the text copies in `Research/Desk_Research/docs_md/` from start to finish: search them.
- **Keep the READMEs current.** When you add, remove, rename or regrade a file, update the README of its folder in the same change, including the counts and the state it reports.
- A README describes and points; it does not hold findings or rules. Rules stay in this file, in `Metadata/metadata_schema.md` and in `Research/desk_research_instructions.md`.
- The `README.md` in the repository root is Marco's own front page; do not change it unless he asks.
- README files have no metadata block.

Contents:

1. General instructions
2. Change log
3. Desk research
4. File metadata

## 1. General instructions

This section is the running list of the standing instructions Marco gives during the project.

### How to keep this list

- Whenever Marco gives an instruction that is generic or general, meaning it applies beyond the task at hand, add it to the log below in the same turn, before or while carrying it out.
- Record the date, the instruction in plain words, and the reason if he gave one. Do not invent a reason.
- An instruction that needs more than a few lines gets its own section in this file, and the log entry points to it.
- If a new instruction replaces an older one, mark the older entry as replaced; do not delete it.
- If you cannot tell whether an instruction is general or only for the current task, ask Marco once and carry on with the task.
- Adding to this list is a modification of this file, so record it in `CHANGELOG.md` as described in section 2.
- Tell Marco what you recorded, so he can correct it.

### Log

| # | Date | Instruction | Reason given |
| --- | --- | --- | --- |
| 1 | 2026-10-05 | Replaced by 7. Never overwrite a document that is being modified: save a new `_v<N>` version with a note explaining why the change was requested. | Not stated |
| 2 | 2026-10-05 | Keep the rules on tracking changes in a Markdown file that every agent uses. | So that every agent follows them |
| 3 | 2026-10-05 | Replaced by 11. Keep the desk research instructions in the agent files. | The agent is the one doing the desk research |
| 4 | 2026-10-05 | Record in this file every generic or general instruction Marco gives while the project goes on. | Not stated |
| 5 | 2026-10-05 | Always use English in every file. Details under "Language" below. | Not stated |
| 6 | 2026-10-05 | Every file starts with a metadata block: source, date, channel, method, confidence, tags. Details in section 4. | Not stated |
| 7 | 2026-10-05 | Updated by 10 (one log for the whole project, not one per file). Do not create a versioned copy for each change. Update the original file under its base name and record each modification in `<name>_log.md`. Details in section 2. | The folders were filling up with files, and working on the base name is simpler for the agent |
| 8 | 2026-10-05 | Updated by 9 (the log is for file history only). Log files have no metadata block. The log can show a new agent what not to do. | The logs are useful to a new instance of the agent to understand what not to do |
| 9 | 2026-10-05 | Do not use the log for the project's analysis and generation activities. It is only there to track the history of the files. Details in section 2. | The log is needed only to track file history |
| 10 | 2026-10-05 | Keep a single log file for the whole project, `CHANGELOG.md`, not one log per document. Details in section 2. | One log per file increases entropy |
| 11 | 2026-10-05 | Keep the desk research instructions in a single file of their own, `Research/desk_research_instructions.md`, not inside this file. Details in section 3. | Marco wants a file that contains only the desk research plan |
| 12 | 2026-10-05 | Keep the metadata block definition in its own file, `Metadata/metadata_schema.md`, and take metadata values only from its fixed lists. Details in section 4. | To systematise the metadata so that categories and tags do not multiply |
| 13 | 2026-10-05 | Grade every source, record confidence as an honest value, verify every citation by opening it, and trace every claim to its source. Details in `Metadata/metadata_schema.md` and `Research/desk_research_instructions.md`. | Not stated; taken from a slide Marco shared ("Sources, confidence") |
| 14 | 2026-10-05 | Do not set arbitrary steps or numbers for the research. For each source category, draft a concise candidate list for Marco to vet; what follows is decided with him once it is known which sources there are and how many. Details in `Research/plan.md` and `Research/desk_research_instructions.md`. | Marco did not like the arbitrary pilot step and wants to vet the sources before deciding |
| 15 | 2026-10-06 | While doing the desk research, keep everything tracked in `Research/progress.md`, updated as the work goes, so that the work can resume without starting over if tokens run out. Details in section 13 of `Research/desk_research_instructions.md`. | Marco may run out of tokens and wants to restart without redoing everything |
| 16 | 2026-10-06 | Convert every downloaded PDF to Markdown with `pymupdf4llm` (OCR with `tesseract` where needed) into `Research/Desk_Research/docs_md/`, with the same name as the PDF. Details in section 11 of `Research/desk_research_instructions.md`. | Marco wants the PDFs as Markdown files and asked to install and use these tools |
| 17 | 2026-10-06 | Extend the research scope from Europe to the Western countries and the more advanced countries of the rest of the world that resemble the West, mainly to find technology solutions and pain points. Details in section 3 of `Research/desk_research_instructions.md`. | Marco is not sure that what was found in Europe is valuable, especially for technology solutions and pain points |
| 18 | 2026-10-06 | Include sources in languages other than English, searched in their own language, and note which tools to install to read them (in `Research/progress.md`). Details in section 3 of `Research/desk_research_instructions.md`. | Marco wants the research to cover the wider scope in the languages of those countries |
| 19 | 2026-10-06 | Every source gets Markdown files: PDFs are converted, and web pages are captured as text, into `Research/Desk_Research/docs_md/`. Details in section 11 of `Research/desk_research_instructions.md`. | Marco wants the Markdown files of the sources first, and the interpretation later |
| 20 | 2026-10-07 | Keep `Research/Desk_Research/docs/` and `Research/Desk_Research/docs_md/` split by category, with the same folder names as `Research/Desk_Research/Doc_Notes/`. Details in section 11 of `Research/desk_research_instructions.md`. | Marco wants the sources divided by category |
| 21 | 2026-10-07 | For the papers, do not ask anything more: keep all, download and convert. Then continue through the remaining categories with the extended scope until the desk research is finished, updating the progress file, and leave the interpretation for later. | Marco wants the collection finished before the interpretation |
| 22 | 2026-10-07 | Keep a `README.md` in every folder that guides agents to the right file, so that they do not read every Markdown file each time; read the README of a folder first and keep it current. Details under "Folder guides" below. | To guide agents without making them read all the Markdown files every time |
| 23 | 2026-10-07 | Widen the scope of the brief: do not think only of the Italian commuter, make a general analysis of commuting in multimodal environments, and decide the rest later ("e poi vediamo"). Applied on 2026-10-08: "Scope" section in `Brief/brief.md` and section 3 of `Research/desk_research_instructions.md`. | In Italy 86% use the car (Marco's figure, as he stated it) |
| 24 | 2026-10-12 | Keep the tags to the smallest possible set, in the order phase, origin, type, topics: a phase tag (`research` now, `design` and `development` later), an origin tag in place of the `channel` field (`desk`, `interview`, `internal`), nine type tags and the eight topic tags. Details in section 8 of `Metadata/metadata_schema.md`. | To assign the tags of the metadata layer correctly, with the fewest tags possible for the knowledge base |
| 25 | 2026-10-12 | Keep `Index.md` in the repository root with one row per file showing the file name and its tags; use it first to find and connect files, and update it whenever a file or its tags change. Details under "Index" above. | To help the agent connect and find things faster, without searching the whole repository |
| 27 | 2026-10-12 | Tag the single pain points with a small, granular set of terms (twelve pain-point tags, section 8 of `Metadata/metadata_schema.md`), and keep the findings of each interview inside its notes file without the finding numbers of the earlier analysis, which will come back under another naming system. | The analysis will come back in another form with another categorisation of the findings |
| 28 | 2026-10-12 | Do not list `README.md` files in `Index.md`. | Not stated |
| 29 | 2026-10-12 | Texts written for respondents, such as the survey, are made in the languages of the places where they are posted, one file per language; the reference version stays in English. | The survey has to reach Italians and people in other countries |
| 30 | 2026-10-12 | Do not list the interview transcripts or the lists of sources (`*_candidates.md`, `*_to_obtain.md`) in `Index.md`. | Not stated; taken from Marco's own edit of the index |
| 31 | 2026-10-16 | Keep the notes on the sources in `Research/Desk_Research/Doc_Notes/`, next to the documents they are written from (`docs/`, `docs_md/`), with a name that says they are synthesis notes and not the original sources. | The folder held synthesis notes, and its old name `Sources` suggested the original sources |

### Language

- Every file in the project is written in English, whatever language Marco uses in the conversation.
- This covers content, headings, metadata, change logs and file names.
- The only exceptions are a verbatim quote from a source or an interviewee, which stays in its original language with an English translation, and the texts written for respondents, such as the survey translations in `Research/Survey/`.

## 2. Change log

Marco wants a trace of what changed in each file and why, without filling the folders with copies or extra files. Each document keeps its base name and is edited in place, and every change is recorded in one log for the whole project: `CHANGELOG.md` in the repository root.

### Rules

1. **Edit the original file in place.** Always work on the file with the base name, for example `Research/plan.md`. Do not create `_v<N>` copies or other duplicates.
2. **Record the change in `CHANGELOG.md`.** There is one log for the whole project. Do not create a log per file or per folder.
3. **One entry per request**, even when the request changed several files. List all of them in the entry.
4. **Never rewrite or delete past entries.** The log only grows.
5. **Update the `date` field** in the metadata block of each document you changed (see section 4).

### What the log is for

- The log tracks the history of the files, and nothing else.
- **Do not use it for the project's analysis or generation work.** It is not a source, not evidence and not context for research, synthesis, questions, scripts or any other project content. Do not quote it or draw findings from it.
- You may consult it to answer a question about a file's history, or to check whether a way of handling files was already tried and dropped. The standing rules themselves are in section 1, which is where to look first.

### When to log

- **Log** every modification to a file that already exists: the brief, the questions, the plan, the interview script, research outputs, this file, and any other Markdown document in the project.
- **Log** the creation of a new file with one "File created" entry.
- **Do not log** the edits you make while still writing a file in the same task that created it.
- Changes to `CHANGELOG.md` itself are not logged.

### Entry format

Entries go newest first, under the introduction of the log:

```markdown
## 2026-10-05 20:42

- **Files:** `Research/plan.md`, `AGENTS.md`
- **Change:** <what was modified, in one to three lines>
- **Why:** <Marco's reason, in his terms>
- **Do not:** <only when the change reverses an earlier approach: what was abandoned and must not be reintroduced>
```

- **Date and hour:** take them from the system clock (run `date`). Do not estimate them.
- **Files:** paths from the repository root.
- **Change:** specific enough that Marco can find the modification in the file.
- **Why:** this is the important line. Record the reason Marco gave for asking, not a second description of the edit. If he gave no reason, quote his request and write "reason not stated". Do not invent a motive. For a change the agent made on its own initiative, say so and give the agent's reason.
- **Do not:** add this line whenever Marco reverses or rejects something. Leave it out otherwise.

### After a change

Tell Marco which files you changed and what you wrote in the log, so he can correct the entry if it is wrong.

## 3. Desk research

The desk research instructions are in their own file: `Research/desk_research_instructions.md`. That file is the only copy; do not repeat its content here.

- Read it in full at the start of every desk research session, before searching for anything.
- `CLAUDE.md` imports it, so Claude Code loads it automatically. Other agents must open it themselves.
- The activities, their outputs and the run order are in `Research/plan.md`.

## 4. File metadata

Every file in the project starts with a metadata block: `source`, `date`, `method`, `status`, `grade`, `confidence`, `tags`. It is the first thing in the file, before the title, and it is not optional.

The block, the rules and the allowed values are defined in one place: `Metadata/metadata_schema.md`. That file is the only copy; do not repeat its content here.

- Take every value from the lists in that file. Do not invent new categories or tags.
- If no listed value fits, propose a new one to Marco and add it to the schema before using it.
- `CLAUDE.md` imports the schema, so Claude Code loads it automatically. Other agents must open it themselves.
