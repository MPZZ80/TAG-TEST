TASK — extract the touchpoints, analysing the documents in the "Research" folder notes.

1. Read index.md, then every interview, observation and desk note
   it points to. Search the transcripts for relevant quotes
2. Extract every relevant moment of the journey, from the first
   thought about travelling to the arrival at the final destination,
   classified in three types:

   a. DIRECT interaction — a moment of contact between person and
      a mobility service: app, board, train, bus, ticket machine,
      gate, staff, sharing vehicle, taxi or ride-hailing, parking,
      toll, fuel station, carpooling platform.

   b. INDIRECT interaction — a moment that happens around the
      journey and shapes it without touching any service channel.
      Example: evaluating which means of transport to use and how
      long it will take to reach the departure point (walking, bus,
      car, bike, time of leaving home). Other cases: deciding when
      to leave, comparing modes, checking weather or traffic before
      setting out, planning around a connection or a parking spot.

   c. MISSED interaction — a moment where the person could have
      interacted with a service and does not. Example: not checking
      notifications, not opening a provider's website or app to look
      for news or delays, not looking at the board. Record WHAT was
      skipped and WHY, as the notes state it (habit, distrust, lack
      of time, belief that it is useless, not knowing the channel
      exists, relying on another source such as a friend or a
      messaging group).

   A touchpoint of any type is a specific moment — not a category,
   not a solution.

3. Tag each touchpoint with:
- ID to number each touchpoint	
   - phase: planning / before departure / first mile / main leg /
     transfer / disruption (unexpected situation) / last mile
   - mode: public transport / private vehicle / other mobility
     service / on foot-bike / multiple / not stated
   Use only what the note shows. If the note does not say, write
   "not stated".

4. Output a markdown table, in a markdown file Named: Generated_Touchpoints.md in the Analysis Folder.
Structure: one row per touchpoint:

  ID | type | phase | mode | touchpoint | when exactly it happens | note + quote |

   where type is one of: direct / indirect / missed.

RULES:
- Only what the notes say. No invented moments, no industry
  standards, no "users typically…". The project context above tells
  you where to look, not what to find.
- Every row cites its note and the quote that shows the moment.
  A row without a citation is deleted, not defended.
- Merge duplicates: the same moment surfacing in two interviews
  is one touchpoint with two citations.
- No features smuggled in. "An app that explains delays" is not a
  touchpoint; "reading the board during a delay" is.
- Do not assume a dominant mode. Do not treat the share of car users
  in any country as a finding: extract what each note says, whatever
  the mode.
- MISSED interactions need explicit evidence: the note must say or
  clearly show that the person did not do the thing. Absence of
  mention in the notes is NOT evidence of a missed interaction —
  never infer it from silence.
- For a missed interaction, the cell "when exactly it happens"
  states the moment in which the check would have been possible
  (e.g. "while waiting on the platform"), and the quote must show
  the omission or the reason for it.
- INDIRECT interactions must be tied to the journey: say which
  moment of the journey the choice affects (e.g. the departure time
  of the train the person aims for, the choice between car and
  train). If the note gives no such link, keep the row and mark the
  link as unclear.
- Ambiguous moments stay in, as-is, with the quote that makes them
  ambiguous, and keep the type you are unsure about marked
  ("indirect? / missed?"). Marking beats guessing.
- Multimodal moments stay visible: when the same journey combines
  modes (e.g. car to the station, then train), extract the
  touchpoints of each mode and mark the handover between them as a
  transfer row.

FINALLY:
- Report contradictions: notes that describe the same moment in
  conflicting ways (including one person checking a channel that
  another says they ignore). Keep both rows, mark the conflict —
  it is a finding, not a failure.
- Report coverage gaps: phases of the journey or modes with no
  touchpoints, and contexts (country or city, as stated in the
  notes' metadata) that are over- or under-represented in the base.
  Do not fill gaps, only name them.
- Count: how many notes read, how many touchpoints in total and
  split by type (direct / indirect / missed), by phase and by mode,
  how many dropped for missing citations.