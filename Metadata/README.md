# Metadata

| File | What it is | Read it when |
| --- | --- | --- |
| `metadata_schema.md` | The metadata block that opens every project file, with the fixed list of values for each field | Before creating or changing any file |

- The block has seven fields: `source`, `date`, `method`, `status`, `grade`, `confidence`, `tags`.
- Tags go in a fixed order: phase, origin, type, then up to three topics; the marker `contradiction` comes last.
- Research notes also have a `related` field and a "Connections" section that link them to the notes sharing evidence with them.
- Use only the values listed in the schema. A new value needs Marco's approval and goes into the schema first.
- The tags are agreed and applied to every file. The other lists are still a draft, and six files written before the schema still carry free-text values in the other fields.
- The rules for scoring a source and for rating confidence are not here: they are in section 12 of `../Research/desk_research_instructions.md`.
- `README.md` files, `CHANGELOG.md` and `CLAUDE.md` have no metadata block.
