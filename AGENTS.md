---
source: Marco's instructions, written up by Claude (Opus 5.5)
date: 2026-10-05 23:36
channel: Claude Code conversation
method: Standing instructions recorded as Marco gives them; details drafted by Claude
confidence: medium
tags: [agent-instructions, change-log, metadata, desk-research]
---

# Instructions for Agents

Rules for any AI agent working in this repository. Read this file in full before changing anything.

The project is the discovery phase of a digital product design project about intercity commuting door to door, run by Marco. Start from `Brief/brief.md` and `Questions/initial_questions.md`.

Repository layout:

| Location | What it holds |
| --- | --- |
| Repository root | Only the files that tools or conventions expect there: `AGENTS.md`, `CLAUDE.md`, `README.md`, `CHANGELOG.md` |
| `Brief/` | The project brief |
| `Questions/` | The initial research questions and the prompt that generated them |
| `Metadata/` | The metadata schema: the block every file starts with and its allowed values |
| `Research/` | The research plan, the desk research instructions, the interview script and the research outputs |
| `Research/Sources/` | One file per source, in a folder per source category |
| `Research/docs/` | Documents downloaded from the sources. Excluded from Git |

Put a new document in the folder it belongs to, not in the root. Create a new folder only when a document fits none of these.

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

### Language

- Every file in the project is written in English, whatever language Marco uses in the conversation.
- This covers content, headings, metadata, change logs and file names.
- The only exception is a verbatim quote from a source or an interviewee: keep it in its original language and add an English translation.

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

Every file in the project starts with a metadata block: `source`, `date`, `channel`, `method`, `status`, `grade`, `confidence`, `tags`. It is the first thing in the file, before the title, and it is not optional.

The block, the rules and the allowed values are defined in one place: `Metadata/metadata_schema.md`. That file is the only copy; do not repeat its content here.

- Take every value from the lists in that file. Do not invent new categories or tags.
- If no listed value fits, propose a new one to Marco and add it to the schema before using it.
- `CLAUDE.md` imports the schema, so Claude Code loads it automatically. Other agents must open it themselves.
