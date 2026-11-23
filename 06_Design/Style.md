---
source: Claude
date: 2026-11-23 21:18
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, rules]
related: [Style_instructions.md, SPEC-01_foundation.md, Prototype_Instructions.md]
---

# Style

The base of the design library of the prototype: the look, the tokens and the components, taken from the nine images Marco selected in [01_Moodboard/Selected_Style/](01_Moodboard/Selected_Style/) and from his note on each, following [Style_instructions.md](Style_instructions.md). Pages are those of the information architecture of [SPEC-01](../04_Specifications/SPEC-01_foundation.md#information-architecture).

**Revised on 2026-11-23 (Marco):** after seeing the prototype, Marco asked to set the style of everything on the three screens of transit-itinerary ("usa questa schermata per impostare lo stile di tutto": "use this screen to set the style of everything"). The look below now comes from those screens; Traderepublic_1 and _2 are no longer the reference for the look, and the patterns taken from the other images stay.

Colours were sampled from the screenshots and are **estimated**. A value marked **proposal** is not visible in the images and is listed under "Open questions".

## Sources

| Image | Taken | Ignored | Marco's note (translation below) |
| --- | --- | --- | --- |
| [Traderepublic_1](01_Moodboard/Selected_Style/Traderepublic_1/) | Principle: the map always visible; cards set side by side in an ordered grid | The look, since the revision of 2026-11-23; the dark theme, the financial content | "Di questa mi piace lo stile a card geometriche e minimalista con un uso del font bastone super semplice. Inoltre come si affiancano le card in maniera molto ordinata, però deve sempre essere visibile la mappa, questo usalo per lo stile" |
| [Traderepublic_2](01_Moodboard/Selected_Style/Traderepublic_2/) | Nothing since the revision of 2026-11-23 | The look (blue accent, bold black titles), the content | "Questo va sempre bene per lo stile minimalista e l'utilizzo del font" |
| [1Jelbi-Home](01_Moodboard/Selected_Style/1Jelbi-Home/) | Pattern: the search bar floating over the map; the choice of means | Jelbi's colours and round icons, the map pins | "Di questa schermata mi piace la searchbar floating e la possibilità di scegliere quale tipologia di mezzi posso usare" |
| [1Jelbi-Intermodal](01_Moodboard/Selected_Style/1Jelbi-Intermodal/) | Pattern: the structure of the legs, on Today | Jelbi's green, "Scan to unlock" | "Di questo mi piace la struttura delle LEG che potrebbe stare dentro a Today" |
| [1Jelbi-PT](01_Moodboard/Selected_Style/1Jelbi-PT/) | Pattern: the search results, departures grouped by stop | Jelbi's colours | "Di questa schermata mi piacciono i risultati della ricerca" |
| [1Jelbi-Payment](01_Moodboard/Selected_Style/1Jelbi-Payment/) | Pattern only: more than one payment method can be chosen | The whole look (green pill buttons, dark overlay) | "Di questo non mi piace lo stile, ma il fatto che si possa scegliere più di un metodo di pagamento" |
| [transit-hero](01_Moodboard/Selected_Style/transit-hero-1711756154556/) | Centre screen. Pattern: results laid out on a timeline by departure time and duration | Left and right screens (the right one is taken from transit-itinerary) | "Di questo mi piace la schermata centrale che mostra i risultati della ricerca disposti in una linea temporale in base a che ora partono e quanto durano" |
| [transit-itinerary](01_Moodboard/Selected_Style/transit-itinerary-1711756152895/) | **The look of everything** (revision of 2026-11-23): the green band, white cards with a soft shadow, white pill buttons, the rounded type, the segments, the legs. Left screen: the same timeline. Centre: the map of the chosen way, with a floating card of the trip's main details. Right: pulled up, the legs of the way | — | "Di questo mi piace la schermata a sinistra che mostra i risultati della ricerca disposti in una linea temporale in base a che ora partono e quanto durano. La schermata di dettaglio centrale di una delle alternative mi piace che fa vedere la mappa, ma sotto vorrei vedere una card floating che fa vedere i dettagli macro del trip, e se scorro in alto vedo i dettagli delle varie leg di quella soluzione (schermata a destra)" |
| [transit-live-activity](01_Moodboard/Selected_Style/transit-live-activity-1711756160776/) | Left: the progress of the trip, always visible on the lock screen. Right: the leg under way, with the stops left before the next change, opened by tapping the lock-screen card | Centre screen (Marco); the crowding question on the right screen, which the note does not mention | "Di questo mi piace come viene gestito il viaggio durante una leg: a sinistra come si vede il precorso in progress sempre visibile sulla schermata di blocco; la schermata centrale ignorala; la schermata di destra va bene per quando l'utente sta percorrendo una leg in cui vediamo quante fermate mancano al prossimo cambio, è quella che si vede quando tocco il widget della leg nella schermata di sinistra" |

Translations, in the same order:

1. "I like the geometric, minimal card style with a very simple sans serif font. And how the cards sit side by side in a very ordered way; but the map must always be visible. Use this for the style."
2. "This is always fine for the minimal style and the use of the font."
3. "I like the floating search bar and being able to choose which kinds of means I can use."
4. "I like the structure of the legs, which could go inside Today."
5. "I like the search results of this screen."
6. "I don't like the style, but that more than one payment method can be chosen."
7. "I like the centre screen, which shows the search results on a timeline by when they leave and how long they take."
8. "I like the left screen, which shows the search results on a timeline by when they leave and how long they take. In the detail screen of one alternative, in the centre, I like that it shows the map, but underneath I'd like a floating card with the main details of the trip, and if I scroll up I see the details of the legs of that solution (right screen)."
9. "I like how the trip is handled during a leg: on the left, the progress always visible on the lock screen; ignore the centre screen; the right screen is good for when the user is on a leg and we see how many stops are left before the next change; it is what opens when I tap the leg widget on the left screen."

## Principles

1. **White and soft.** A white page; every block is a white card with large rounded corners and a soft shadow. Colour carries the line, the means and the state; one green for what is live and for the main action. (transit-itinerary)
2. **A green band on top.** The product's band, in the brand green, holds the places and the navigation, as the header with the two stations on the left screen. (transit-itinerary, left)
3. **The map is always there.** On every page that shows a trip, a way or a leg, the map fills the width behind the content, and a card floats over its bottom; at least its top stays visible. (Traderepublic_1 note; transit-itinerary, centre)
4. **Time is a length.** Ways and legs are rows of segments: walking and waiting in grey with an icon, rides in the colour of their line with its badge. (transit-itinerary, left)
5. **The legs on a line.** A ride is a card with a line in its colour and hollow rings at its stops; walking between cards is a dotted grey line with the minutes. (transit-itinerary, right)
6. **One fact first.** Each card leads with one line ("Go at 22:43", "Go in 3 min"), then the details; times are right-aligned. (transit-itinerary)

## Colour

From transit-itinerary (revision of 2026-11-23).

| Token | Value | Use | Source |
| --- | --- | --- | --- |
| `--colour-brand` | `#84b817` | The band at the top | transit-itinerary, left (header) |
| `--colour-brand-field` | `#77a514` | Fields and pills on the band | transit-itinerary, left (station fields) |
| `--colour-brand-text` | `#ffffff` | Text on the band | transit-itinerary, left |
| `--colour-text` | `#1c1c1e` | Text, titles, icons | transit-itinerary |
| `--colour-muted` | `#6d6d72` | Secondary text: durations, section labels, captions | transit-itinerary ("25 min", "OTHER OPTIONS") |
| `--colour-page` | `#ffffff` | Page background | transit-itinerary |
| `--colour-surface` | `#ffffff` | Cards, pills, round buttons | transit-itinerary |
| `--colour-field` | `#f4f4f6` | Fields, rows like "Find more trips", pills of state | transit-itinerary ("Find more trips") |
| `--colour-line` | `#ececee` | Dividers between rows | transit-itinerary |
| `--colour-accent` | `#0b7f3f` | Live times, links, the primary button, the selected item | transit-itinerary ("now", "Every 4 minutes", `#17ac53`), darkened for text |
| `--colour-ok` | `#0b7f3f` | On time | as the accent |
| `--colour-warn` | `#9a5b00` | Late, tight connection: text | proposal |
| `--colour-warn-fill` | `#e3b32a` | Late, tight connection: fills | transit-itinerary (line 91) |
| `--colour-bad` | `#e41103` | Cancelled, broken connection; the close mark | transit-itinerary (close mark) |
| `--colour-message` | `#fff6d6` | A simulated message in the prototype | kept |
| `--colour-wait`, `--colour-walk` | `#e2e2e2` | Waiting and walking segments, with their icon | transit-itinerary (grey segments) |
| `--colour-train` | `#b0122c` | Default colour of a train leg | proposal |
| `--colour-coach` | `#295f84` | Default colour of a coach or bus leg | 1Jelbi-Home |
| `--colour-underground` | `#1a7f3c` | Default colour of an underground leg | proposal |
| `--colour-car` | `#3a3a3c` | A car leg | proposal |
| `--colour-phone`, `--colour-phone-text`, `--colour-phone-card` | `#1c1c1e`, `#ffffff`, `rgba(255, 255, 255, 0.94)` | The simulated phone and its lock screen | transit-live-activity |
| `--colour-config` | `#f0f0f2` | The prototype's configurator, outside the product | neutral |

**The line comes first.** A leg takes the colour of its line from the data; the `--colour-<means>` tokens are only the fallback.

**Contrast** (WCAG ratio): text on white 17.0; text on field 15.5; muted on white 5.1; muted on field 4.7; accent on white 5.1; accent on field 4.6; warn on white 5.4; bad on white 4.8; text on warn-fill 8.7; text on walk 13.1; white on train 7.1, coach 6.9, underground 5.1, car 11.3. **White on the brand band is 2.4, and on its fields 2.9: below 4.5**, as in the reference (Open questions).

## Typography

- **Font:** one rounded sans serif, as Transit's. `--font: ui-rounded, "SF Pro Rounded", "Nunito", system-ui, …`: the rounded system font where the browser has it (Safari on Apple devices), otherwise Nunito if installed, otherwise the system font. Nothing is loaded from outside.
- **Weights:** 500 for text (Transit's text is medium, not regular), 600 for titles, labels, line names and buttons.
- **Numbers:** tabular figures, and times right-aligned in their row.

| Token | Size | Weight | Use |
| --- | --- | --- | --- |
| `--size-display` | 1.75rem | 600 | The leading fact of a card |
| `--size-title` | 1.375rem | 600 | Page titles; card titles at 1.25rem |
| `--size-text` | 1rem | 500 | Text, rows of lists |
| `--size-small` | 0.875rem | 500 | Subtitles, durations, captions |
| `--size-caption` | 0.8125rem | 500, uppercase, letter-spacing 0.04em | Section labels ("Other options"), table heads |

## Spacing and grid

- Base unit 4 px. Steps: `--space-1` 0.25rem, `--space-2` 0.5rem, `--space-3` 1rem, `--space-4` 1.5rem, `--space-5` 2rem.
- **Screen margin** `--space-3`; **gap between cards** `--space-2` on the phone, `--space-3` in a grid; **padding inside a card** `--space-3`; **gap between sections** `--space-5`. (transit-itinerary: cards with even gaps on a white page.)
- **Grid:** one column up to `--max-width` (40rem); above it, cards of equal width in two or three columns with the same gutter (Traderepublic_1).

## Shape and elevation

- **Radius:** `--radius` 1rem for cards, sheets and dialogs; `--radius-small` 0.1875rem for the segments of a way; `--radius-pill` for buttons, navigation and state pills; fields 0.625rem.
- **Elevation:** `--shadow-float: 0 2px 12px rgba(0, 0, 0, 0.1)` on every card, pill button and round button, as in the reference; no borders.
- **Lines:** rows inside a card divided by 1px `--colour-line`; legs drawn with a 3px line, hollow rings of 3px, dotted for walking.

## Icons

- Line icons, 1.75px stroke, 20px in rows and 24px on their own, in `--colour-text`; filled only inside a line badge or on a coloured segment. (Jelbi tab bar, transit walking and clock icons)
- One icon per means: walk, train, coach, underground, car, bicycle, shared scooter; plus clock (waiting), change (arrows), live signal (the small arcs next to a live time), close, position, swap.

## Motion

- **The trip card is pulled up** (transit-itinerary, centre to right): a sheet with two stops, collapsed (the summary card, map visible) and expanded (the legs, map still visible at the top). It follows the finger and settles in 250 ms, ease-out. Proposal: the durations are not visible in the images.
- **Sections that open** ("Ride 3 stops", "6 more stops…") expand in 200 ms. Proposal.
- Nothing else moves.

## Components

Each component is a web component in `05_Prototype/components/` when built; the names below are proposals.

### Map backdrop `<map-backdrop>`

The map that fills the screen behind the content (Principle 2). In the prototype, a static image or simple drawing of the route from the data, with the legs drawn in their line colours, the start and end marked, and round buttons (`--radius-pill`, `--shadow-float`, `--colour-surface`) for close and position at the top right.
- **Pages:** Today (PG-01), Ways (PG-05), Way detail (PG-06), Run (PG-02), Stop (PG-10), Drive (PG-11).
- **Source:** Traderepublic_1 note; transit-itinerary, centre; transit-live-activity, right.

### Floating search bar with the choice of means `<trip-search>`

A field floating at the top of the map: magnifier, "Where to?", the two addresses once typed, with the swap button. Under it, a row of chips, one per means (train, coach, underground, car, bicycle, shared), each on or off; the selected chips take `--colour-text` fill with white icon, the others `--colour-field`.
- **States:** empty; addresses typed (with suggestions, favourites first, as in SPEC-08); means filtered.
- **Tokens:** `--colour-surface`, `--shadow-float`, `--radius`, `--colour-field`, `--radius-pill`.
- **Pages:** Ways (PG-05); the "Plan a trip" search of Today when nothing is set up (PG-01).
- **Source:** 1Jelbi-Home. The round coloured icons of Jelbi are not taken; the chips follow Principle 1.

### Timeline of ways `<ways-timeline>`

The results laid out on a shared time axis: times along the top (`--size-caption`, `--colour-muted`); each way is a row of segments starting at its departure and as long as its duration. Walking is a `--colour-walk` segment with a walking icon; waiting a `--colour-wait` segment with a clock; a ride a segment in the line colour with its line badge, the badge text white or black by contrast. Under the row, left: "Go in 3 min" (`--size-text`, 600, the minutes in `--colour-ok` with the live icon when live); right: the duration (`--colour-muted`). Ways that start later are indented by their start time, with a dotted lead-in. At the end, "Find more trips" (a `--colour-field` row) and, under "Other options", walking or car alone.
- **States:** live / scheduled time; late (the minutes in `--colour-warn`); cancelled (the row struck through, `--colour-bad` label); tight connection (`--colour-warn-fill` mark at the change).
- **Pages:** Ways (PG-05).
- **Source:** transit-hero, centre; transit-itinerary, left.

### Departures by stop `<stop-departures>`

The compact form of the results: a card per stop, headed by the means icon, the stop name (600) and direction with walking minutes (`--size-small`, `--colour-muted`); then one row per line: line badge, destination, needs icons (step-free), and the next two departures in minutes on the right, tabular.
- **Pages:** Ways (PG-05), as the list view of the results near the commuter; Station (PG-09) for the departures of a station.
- **Source:** 1Jelbi-PT.

### Line badge `<line-badge>`

A rounded rectangle (`--radius-small`) in the line colour, with the line name in white, 600, `--size-small`; a circle for metro lines where the operator uses one. Used inside every other component.
- **Source:** transit-hero, transit-itinerary, 1Jelbi-PT.

### Legs of a trip `<trip-legs>`

The trip as a vertical line, one segment per leg in its line colour, dots at the stops where the commuter boards, changes or gets off, dotted for walking. Beside the line, rows: "Walk for 2 min"; the stop (600) with platform and time; the leg header with the line badge, direction and departure, and "More ›" to the Run page; "Ride 3 stops for 6 min" with "Show ⌄" to open the stops. Rows are divided by `--colour-line`.
- **States:** each row can carry the state of its run (on time, late, cancelled) and the tightness of a change, on its own line (SPEC-01: news sits on its leg, not above the trip).
- **Pages:** Today (PG-01), the trip of the day; Way detail (PG-06), in the expanded trip card; Run (PG-02), the stops of one leg.
- **Source:** 1Jelbi-Intermodal (structure); transit-itinerary, right (cards per leg, "6 more stops").

### Trip card over the map `<trip-card>`

A floating card at the bottom of the map with the main details of the way: clock icon and "Go at 22:43" (`--size-title`), the way as a row of timeline segments, "You'll arrive at 23:05" and the duration, and a divider with the frequency ("Every 4 minutes") in `--size-caption`, `--colour-ok`. Pulled up, it becomes a sheet with the legs (`<trip-legs>`), each leg in a card of its own, the walking between them as dotted lines; the map stays visible above it.
- **States:** collapsed; expanded; late or broken (the leading line changes, the broken leg marked).
- **Pages:** Way detail (PG-06); Run (PG-02) and Alternative (PG-17) use the collapsed card.
- **Source:** transit-itinerary, centre and right.

### Trip progress on the lock screen `<lock-trip-card>`

The card that stays on the lock screen during the trip: means icon with the line badge, the leading fact ("Go in 2 minutes", "Get off in 18 stops", the minutes in `--colour-ok`), a subtitle (`--size-small`), a progress bar (`--colour-line` track, the leg in its line colour, the commuter's position as an `--colour-accent` marker), "You'll arrive at 09:38" on the left and the minutes left on the right. Tapping it opens the leg under way.
- **Pages:** the simulated lock screen of the prototype (the messages, SPEC-02, SPEC-14); it leads to Stop (PG-10).
- **Source:** transit-live-activity, left.

### Leg under way `<leg-progress>`

The map with the leg drawn and the vehicle's position; over it, a floating card: means icon and "Get off in 17 stops" (`--size-title`), the progress bar of the lock-screen card, the arrival time and the minutes left; below, the next stop and the change ahead.
- **Pages:** Stop (PG-10); Run (PG-02) while the leg is under way.
- **Source:** transit-live-activity, right. The crowding question on that screen is not taken.

### Choice of payment methods `<payment-methods>`

A list of the methods held (card, direct debit, wallet), each a row with its name and a check; more than one can be on, one is the default. Built with the rows, checks and buttons of this style, not with the look of the reference.
- **Pages:** Tickets (PG-07), buying a way as one journey (SPEC-10).
- **Source:** 1Jelbi-Payment, pattern only.

### Card `<base-card>` and grid

The card of Principle 1: `--colour-surface`, `--radius`, `--shadow-float`, `--space-3` padding, a title row (title 600 and an optional link on the right), then content. Several cards line up in the grid of "Spacing and grid".
- **Pages:** every page.
- **Source:** transit-itinerary; the ordered grid from Traderepublic_1.

### Buttons

- **Primary:** `--colour-accent` fill, white text 600, pill, at least 44px high.
- **Secondary:** white pill with `--shadow-float` ("Leave now").
- **Round:** white circle with `--shadow-float`, icon only (close in `--colour-bad`, refresh, position).
- **Navigation:** pills on the band: `--colour-brand-field` with white text; the page open is a white pill with dark text.
- **Source:** transit-itinerary.

## Tokens for the prototype

Applied in `05_Prototype/css/style.css`. The revision of 2026-11-23 added `--colour-brand`, `--colour-brand-field` and `--colour-brand-text`. The dashed walking line (`.seg-walk`) uses `--colour-muted`, since `--colour-walk` is a light fill.

```css
:root {
  --font: ui-rounded, "SF Pro Rounded", "Nunito", system-ui, -apple-system, "Segoe UI", sans-serif;
  --size-display: 1.75rem;
  --size-title: 1.375rem;
  --size-text: 1rem;
  --size-small: 0.875rem;
  --size-caption: 0.8125rem;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 1rem;
  --space-4: 1.5rem;
  --space-5: 2rem;
  --radius-small: 0.1875rem;
  --radius: 1rem;
  --radius-pill: 999px;
  --shadow-float: 0 2px 12px rgba(0, 0, 0, 0.1);
  --max-width: 40rem;
  --colour-brand: #84b817;
  --colour-brand-field: #77a514;
  --colour-brand-text: #ffffff;
  --colour-text: #1c1c1e;
  --colour-muted: #6d6d72;
  --colour-page: #ffffff;
  --colour-surface: #ffffff;
  --colour-field: #f4f4f6;
  --colour-line: #ececee;
  --colour-accent: #0b7f3f;
  --colour-ok: #0b7f3f;
  --colour-warn: #9a5b00;
  --colour-warn-fill: #e3b32a;
  --colour-bad: #e41103;
  --colour-message: #fff6d6;
  --colour-wait: #e2e2e2;
  --colour-walk: #e2e2e2;
  --colour-train: #b0122c;
  --colour-coach: #295f84;
  --colour-underground: #1a7f3c;
  --colour-car: #3a3a3c;
  --colour-phone: #1c1c1e;
  --colour-phone-text: #ffffff;
  --colour-phone-card: rgba(255, 255, 255, 0.94);
  --colour-config: #f0f0f2;
}
```

## Open questions

1. **White on the green band** has a contrast of 2.4 (2.9 on its fields), below 4.5, as in Transit. Dark text on the band would give 7.2; Marco to decide.
2. **The font.** The rounded system font shows only where the browser has it (Safari on Apple devices); elsewhere the system font. Loading Nunito from outside would make it the same everywhere.
3. **The colours of the means** (`--colour-train`, `--colour-underground`, `--colour-car`) and `--colour-warn` are proposals: the images show the lines of Paris and Berlin, not those of the Verona–Milan trip.
4. **The map in the prototype.** Principle 3 needs a map on many pages; a frontend-only prototype without libraries can show a static image or a drawing, not a live map. Today, Ways and Way detail have none yet.
5. **Durations of motion** are proposals.
6. **Not taken, not mentioned by the notes:** Jelbi's bottom tab bar and the crowding question of transit-live-activity.
7. **Departures by stop** is placed on Ways and Station; Marco's note says only "the search results", so the place is a proposal.
8. **Segments to scale and icons.** The ways in the data have no minutes per leg and the prototype has no icon set: the segments share their row by their text, and walking shows its words, not the walking icon.

## Connections

- [Style_instructions.md](Style_instructions.md): the instructions this file follows.
- [SPEC-01_foundation.md](../04_Specifications/SPEC-01_foundation.md): the pages of the information architecture on which the components are placed, and the rule that news sits on its leg.
- [Prototype_Instructions.md](../05_Prototype/instructions/Prototype_Instructions.md): section 4, the custom properties that the tokens fill.
