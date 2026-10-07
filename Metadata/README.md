# Metadata

| File | What it is | Read it when |
| --- | --- | --- |
| `metadata_schema.md` | The metadata block that opens every project file, with the fixed list of values for each field | Before creating or changing any file |

- The block has eight fields: `source`, `date`, `channel`, `method`, `status`, `grade`, `confidence`, `tags`.
- Use only the values listed in the schema. A new value needs Marco's approval and goes into the schema first.
- The schema is still a draft, and the files written before it (brief, questions, plan, interview script, instructions) still carry free-text metadata.
- The rules for scoring a source and for rating confidence are not here: they are in section 12 of `../Research/desk_research_instructions.md`.
- `README.md` files, `CHANGELOG.md` and `CLAUDE.md` have no metadata block.
