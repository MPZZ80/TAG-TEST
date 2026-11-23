---
source: Claude
date: 2026-11-23 21:20
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, rules]
related: [Style_instructions.md, SPEC-01_foundation.md, Prototype_Instructions.md]
---

# Style

The base of the design library of the prototype: the look, the tokens and the components, taken from the nine images Marco selected in [01_Moodboard/Selected_Style/](01_Moodboard/Selected_Style/) and from his note on each, following [Style_instructions.md](Style_instructions.md). Pages are those of the information architecture of [SPEC-01](../04_Specifications/SPEC-01_foundation.md#information-architecture).

Colours were sampled from the screenshots and are **estimated**. A value marked **proposal** is not visible in the images and is listed under "Open questions".

## Sources

| Image | Taken | Ignored | Marco's note (translation below) |
| --- | --- | --- | --- |
| [Traderepublic_1](01_Moodboard/Selected_Style/Traderepublic_1/) | Look: geometric, minimal cards, simple sans serif, cards set side by side in an ordered grid. Principle: the map always visible | The dark theme (see Open questions), the financial content | "Di questa mi piace lo stile a card geometriche e minimalista con un uso del font bastone super semplice. Inoltre come si affiancano le card in maniera molto ordinata, però deve sempre essere visibile la mappa, questo usalo per lo stile" |
| [Traderepublic_2](01_Moodboard/Selected_Style/Traderepublic_2/) | Look: white, black text, one blue accent, bold titles, plain lists, small tinted controls | The content | "Questo va sempre bene per lo stile minimalista e l'utilizzo del font" |
| [1Jelbi-Home](01_Moodboard/Selected_Style/1Jelbi-Home/) | Pattern: the search bar floating over the map; the choice of means | Jelbi's colours and round icons, the map pins | "Di questa schermata mi piace la searchbar floating e la possibilità di scegliere quale tipologia di mezzi posso usare" |
| [1Jelbi-Intermodal](01_Moodboard/Selected_Style/1Jelbi-Intermodal/) | Pattern: the structure of the legs, on Today | Jelbi's green, "Scan to unlock" | "Di questo mi piace la struttura delle LEG che potrebbe stare dentro a Today" |
| [1Jelbi-PT](01_Moodboard/Selected_Style/1Jelbi-PT/) | Pattern: the search results, departures grouped by stop | Jelbi's colours | "Di questa schermata mi piacciono i risultati della ricerca" |
| [1Jelbi-Payment](01_Moodboard/Selected_Style/1Jelbi-Payment/) | Pattern only: more than one payment method can be chosen | The whole look (green pill buttons, dark overlay) | "Di questo non mi piace lo stile, ma il fatto che si possa scegliere più di un metodo di pagamento" |
| [transit-hero](01_Moodboard/Selected_Style/transit-hero-1711756154556/) | Centre screen. Pattern: results laid out on a timeline by departure time and duration | Left and right screens (the right one is taken from transit-itinerary) | "Di questo mi piace la schermata centrale che mostra i risultati della ricerca disposti in una linea temporale in base a che ora partono e quanto durano" |
| [transit-itinerary](01_Moodboard/Selected_Style/transit-itinerary-1711756152895/) | Left screen: the same timeline. Centre: the map of the chosen way, with a floating card of the trip's main details. Right: pulled up, the legs of the way | Transit's green header | "Di questo mi piace la schermata a sinistra che mostra i risultati della ricerca disposti in una linea temporale in base a che ora partono e quanto durano. La schermata di dettaglio centrale di una delle alternative mi piace che fa vedere la mappa, ma sotto vorrei vedere una card floating che fa vedere i dettagli macro del trip, e se scorro in alto vedo i dettagli delle varie leg di quella soluzione (schermata a destra)" |
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

1. **Quiet and geometric.** Flat cards with plain corners, one typeface, black on white, one accent. Colour carries information (the means, the line, the state), not decoration. (Traderepublic_1, _2)
2. **The map is always there.** On every page that shows a trip, a way or a leg, the map fills the screen behind the content, and the content sits on floating cards over it. The cards never cover the whole map: at least its top third stays visible. (Traderepublic_1 note; transit-itinerary, centre; 1Jelbi-Home)
3. **Ordered cards.** Cards share one width, one gutter and one corner radius, and line up on a single column on the phone, on a grid where there is room. (Traderepublic_1)
4. **Time is a length.** Wherever ways or legs are compared, their duration is drawn to scale on a shared time axis. (transit-hero, transit-itinerary)
5. **Flat on the page, shadow only over the map.** What sits on the page is separated by tone; only what floats over the map has a shadow. (Traderepublic_1, _2; transit-itinerary)
6. **One fact first.** Each card leads with one line in large type ("Go in 3 min", "Get off in 17 stops"), then the details. (transit-hero, transit-live-activity)

## Colour

Light theme, from Traderepublic_2; the transit images give the colours of the means and of the timeline.

| Token | Value | Use | Source |
| --- | --- | --- | --- |
| `--colour-text` | `#111111` | Text, titles, icons | Traderepublic_2 |
| `--colour-muted` | `#6b6b70` | Secondary text: subtitles, axis labels, captions | Traderepublic_2 |
| `--colour-page` | `#f4f4f5` | Page background where there is no map | Traderepublic_2 (tinted controls) |
| `--colour-surface` | `#ffffff` | Cards, floating cards, sheets | Traderepublic_2; transit-itinerary |
| `--colour-field` | `#f1f3f7` | Search fields, segmented controls, secondary buttons | Traderepublic_2 (search field) |
| `--colour-line` | `#e6e6e8` | Dividers between rows, borders of cards on the page | transit-hero (estimated from the grey segments) |
| `--colour-accent` | `#2356f6` | The one accent: links, the primary button, the selected item, the position on a progress bar | Traderepublic_2 (avatar, "Trend quotidiano") |
| `--colour-ok` | `#1f7a3a` | On time, "live" times, positive state | Traderepublic_1, _2 (greens of the gains), darkened for text |
| `--colour-warn` | `#9a5b00` | Late, tight connection: text | proposal |
| `--colour-warn-fill` | `#e3b329` | Late, tight connection: fills and bars behind dark text | transit-hero (yellow bar) |
| `--colour-bad` | `#c62a1f` | Cancelled, broken connection; the close button | transit-hero (red close mark), darkened for text |
| `--colour-message` | `#fff6d6` | Background of a simulated message in the prototype | kept from the placeholder |
| `--colour-wait` | `#e6e6e8` | Waiting time on the timeline, with a clock icon | transit-hero |
| `--colour-walk` | `#e6e6e8` | Walking on the timeline: the fill of the segment, with a walking icon. The dotted walking line of the legs uses `--colour-muted` | transit-hero, 1Jelbi-Intermodal |
| `--colour-train` | `#b0122c` | Default colour of a train leg when the data gives no line colour | proposal |
| `--colour-coach` | `#295f84` | Default colour of a coach or bus leg | 1Jelbi-Home (blue) |
| `--colour-underground` | `#1a7f3c` | Default colour of an underground leg | proposal |
| `--colour-car` | `#3a3a3c` | A car leg | proposal |
| `--colour-phone` | `#1c1c1e` | Frame of the simulated phone, lock screen background | transit-live-activity |
| `--colour-phone-text` | `#ffffff` | Text on the lock screen | transit-live-activity |
| `--colour-phone-card` | `rgba(255, 255, 255, 0.92)` | The trip card on the lock screen | transit-live-activity, left |
| `--colour-config` | `#ececee` | Background of the prototype's configurator (scenario, clock), outside the product | neutral of the palette |

**The line comes first.** A leg takes the colour of its line from the data (for example M2 in Milan); the `--colour-<means>` tokens are only the fallback.

**Contrast** (WCAG ratio, computed on the values above):

| Pair | Ratio |
| --- | --- |
| text on surface | 18.9 |
| text on page | 17.2 |
| text on line, wait, walk | 15.2 |
| text on message | 17.4 |
| text on config | 16.0 |
| muted on surface | 5.3 |
| muted on page | 4.8 |
| muted on config | 4.5 |
| accent on surface; surface text on accent | 5.6 |
| ok on surface | 5.4 |
| warn on surface | 5.4 |
| bad on surface | 5.6 |
| text on warn-fill | 9.7 |
| white on train | 7.1 |
| white on coach | 6.9 |
| white on underground | 5.1 |
| white on car | 11.3 |
| phone-text on phone | 17.0 |

A line colour from the data that gives white text less than 4.5 gets black text instead.

## Typography

- **Font:** one plain sans serif, as in Traderepublic_1 and _2. `--font: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif`. Inter is used if installed; otherwise the system font (San Francisco on the iPhone, close to both references). Loading Inter is an open question.
- **Numbers:** times, minutes and stop counts use tabular figures (`font-variant-numeric: tabular-nums`) so that columns of times line up.
- **Weights:** 700 for titles and the leading fact of a card, 600 for labels, line names and buttons, 400 for text.

| Token | Size | Weight | Line height | Use |
| --- | --- | --- | --- | --- |
| `--size-display` | 1.75rem | 700 | 1.15 | The leading fact of a card: "Go in 3 min", the time of the trip | 
| `--size-title` | 1.375rem | 700 | 1.2 | Page titles, card titles |
| `--size-text` | 1rem | 400 / 600 | 1.4 | Text, rows of lists |
| `--size-small` | 0.875rem | 400 | 1.35 | Subtitles: platform, direction, "You'll arrive at" |
| `--size-caption` | 0.75rem | 600, uppercase, letter-spacing 0.04em | 1.3 | Section labels ("Other options", "Every 4 minutes"), axis times |

## Spacing and grid

- Base unit 4 px. Steps: `--space-1` 0.25rem, `--space-2` 0.5rem, `--space-3` 1rem, `--space-4` 1.5rem, `--space-5` 2rem.
- **Screen margin** `--space-3`; **gap between cards** `--space-2` on the phone, `--space-3` in a grid; **padding inside a card** `--space-3`; **gap between sections** `--space-5`. (Traderepublic_1 and _2: generous white space, ordered gutters.)
- **Grid:** one column up to `--max-width` (40rem); above it, cards of equal width in two or three columns with the same gutter (Traderepublic_1).

## Shape and elevation

- **Radius:** `--radius` 0.75rem for cards, sheets and fields; `--radius-small` 0.25rem for line badges and the segments of the timeline; `--radius-pill` 999px for chips and the small buttons on the map. (Traderepublic_1 cards; transit-hero badges and "Leave now")
- **Borders:** none on cards over the map; a 1px `--colour-line` border, or tone alone, on the page. Rows inside a card are divided by a 1px `--colour-line`.
- **Elevation:** one shadow, `--shadow-float: 0 4px 16px rgba(0, 0, 0, 0.12)`, only for what floats over the map: the search bar, the trip card, the round map buttons.

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

The geometric card of Principle 3: `--colour-surface`, `--radius`, `--space-3` padding, a title row (title 700 and an optional menu or link on the right), then content. On the page it is flat; over the map it takes `--shadow-float`. Several cards line up in the grid of "Spacing and grid".
- **Pages:** every page.
- **Source:** Traderepublic_1, _2.

### Buttons

- **Primary:** `--colour-accent` fill, white text 600, `--radius`, at least 44px high. One per screen.
- **Secondary:** `--colour-field` fill, `--colour-text`.
- **On the map:** round, 40px, `--colour-surface`, `--shadow-float`, icon only (close in `--colour-bad`, position, swap).
- **Chip:** `--radius-pill`, `--colour-field`; selected `--colour-text` fill and white text.
- **Source:** Traderepublic_1 ("Aggiungi", "Trading"), Traderepublic_2 (period chips "1G 1S 1M"), transit-hero ("Leave now", close).

## Tokens for the prototype

Ready to replace the `:root` block of `05_Prototype/css/style.css`. No token was dropped; the new ones are `--size-display`, `--size-caption`, `--space-5`, `--radius-small`, `--radius-pill`, `--shadow-float`, `--colour-field`, `--colour-warn-fill`, `--colour-wait`, `--colour-car`. `--colour-walk` changes from a dark grey to a light fill, so the dashed walking line (`.seg-walk` in `style.css`) must move to `--colour-muted` when the style is applied, or it disappears on white.

```css
:root {
  --font: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
  --size-display: 1.75rem;
  --size-title: 1.375rem;
  --size-text: 1rem;
  --size-small: 0.875rem;
  --size-caption: 0.75rem;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 1rem;
  --space-4: 1.5rem;
  --space-5: 2rem;
  --radius-small: 0.25rem;
  --radius: 0.75rem;
  --radius-pill: 999px;
  --shadow-float: 0 4px 16px rgba(0, 0, 0, 0.12);
  --max-width: 40rem;
  --colour-text: #111111;
  --colour-muted: #6b6b70;
  --colour-page: #f4f4f5;
  --colour-surface: #ffffff;
  --colour-field: #f1f3f7;
  --colour-line: #e6e6e8;
  --colour-accent: #2356f6;
  --colour-ok: #1f7a3a;
  --colour-warn: #9a5b00;
  --colour-warn-fill: #e3b329;
  --colour-bad: #c62a1f;
  --colour-message: #fff6d6;
  --colour-wait: #e6e6e8;
  --colour-walk: #e6e6e8;
  --colour-train: #b0122c;
  --colour-coach: #295f84;
  --colour-underground: #1a7f3c;
  --colour-car: #3a3a3c;
  --colour-phone: #1c1c1e;
  --colour-phone-text: #ffffff;
  --colour-phone-card: rgba(255, 255, 255, 0.92);
  --colour-config: #ececee;
}
```

## Open questions

1. **Light or dark.** Traderepublic_1 is dark, Traderepublic_2 light; both are named for the style. The style is written light; a dark theme can be added by redefining the same tokens.
2. **The font.** Inter is close to both references but must be installed or loaded from outside, which the prototype avoids unless necessary. Until Marco decides, the system font is what shows.
3. **The colours of the means** (`--colour-train`, `--colour-underground`, `--colour-car`) and `--colour-warn` are proposals: the images show the lines of Paris and Berlin, not those of the Verona–Milan trip.
4. **The map in the prototype.** Principle 2 needs a map on many pages; a frontend-only prototype without libraries can show a static image or a drawing, not a live map.
5. **Durations of motion** are proposals.
6. **Not taken, not mentioned by the notes:** Jelbi's bottom tab bar and the crowding question of transit-live-activity. The navigation of SPEC-01 (six items) has no reference yet.
7. **Departures by stop** is placed on Ways and Station; Marco's note says only "the search results", so the place is a proposal.

## Connections

- [Style_instructions.md](Style_instructions.md): the instructions this file follows.
- [SPEC-01_foundation.md](../04_Specifications/SPEC-01_foundation.md): the pages of the information architecture on which the components are placed, and the rule that news sits on its leg.
- [Prototype_Instructions.md](../05_Prototype/instructions/Prototype_Instructions.md): section 4, the custom properties that the tokens fill.
