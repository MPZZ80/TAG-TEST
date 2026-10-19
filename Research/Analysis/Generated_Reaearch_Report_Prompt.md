You are working in my research repository for a course project on
door to door multimodal commute. The base
follows the usual structure: plan.md, index.md, notes/, transcripts/,
and a synthesis document with three tables — touchpoints, features,
user stories — every row citing its note and quote.

TASK — build the research as a web interface:

1. Read index.md, every note it points to, and the synthesis
   document. The interface renders what is there — nothing else.
2. Produce ONE self-contained HTML file: research.html. No server,
   no build step, no frameworks, no external requests — it must
   open by double-click and work offline.
3. Structure the file in two directions:
   - Browsable: the three tables, then every note in full, in the
     order of index.md. From any row, a link to the note it
     cites; from any note, links back to the rows that cite it.
   - Searchable: one search field at the top, live filter over
     every visible text — touchpoint, feature, story, persona,
     quote. Inline vanilla JS only, no dependencies.
4. Keep the marks: contradictions stay marked, dropped features
   stay listed, weak evidence stays [weak].

RULES:
- Everything on the page comes from the files. You arrange and
  link; you do not write, improve, or summarize content.
- Every touchpoint, feature and user story row keeps its source
  line visible — note and quote. An unanchored row is a bug, not
  a simplification.
- Contradictions keep their marks. The interface shows them, it
  does not resolve them.
- Plain layout: black on white, one system font, links
  underlined, tables ruled. No cards, no colors, no decoration —
  it should read like a document, because it is one.
- Search finds, it does not interpret: no ranking, no relevance,
  no filters I did not ask for. A match is a match.

FINALLY:
- Report the counts: notes read, touchpoints, features, stories,
  contradictions carried over.
- List anything you could not include, with the reason. Omission
  is information.