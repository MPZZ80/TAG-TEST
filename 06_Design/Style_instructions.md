---
source: Claude
date: 2026-11-23 20:50
method: generated
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, rules]
---

# Instructions for Writing the Style

How an agent writes `06_Design/Style.md`, the base of the design library of the prototype, from the moodboard Marco selected. When someone says "use `Style_instructions.md` to create the style", follow this file from start to end.

## 1. Inputs

| Input | Where | What it gives |
| --- | --- | --- |
| Selected images | `01_Moodboard/Selected_Style/<name>/<name>.<ext>` | The visual material to analyse |
| Marco's notes | `01_Moodboard/Selected_Style/<name>/<name>.md`, one per image | What he likes in each image, what to ignore, and where it should go in the product. They decide what is taken from each image |
| Current stylesheet | `../05_Prototype/css/style.css` | The custom properties in `:root` that the style must fill (section 4 of `../05_Prototype/instructions/Prototype_Instructions.md`) |
| Foundation | `../04_Specifications/SPEC-01_foundation.md` | The pages of the information architecture and the vocabulary, so that patterns are placed on the real pages (for example Today, Ways) |

- **Do not use `01_Moodboard/Not_Selected/`.** Those images were rejected.
- **The note wins over the image.** Take from an image only what its note points to. Some notes say they like a function but not its look (for example the payment screen): take the pattern, not the style. Some notes say to ignore one of the screens in the image: ignore it.
- An image with several screens is described in the note by position (left, centre, right). Keep that reference.
- If an image cannot be opened (for example `.avif` or `.webp`), convert a copy to PNG in the scratchpad, `sips -s format png <image> --out <scratchpad>/<name>.png`, and read the copy. Do not change the files in the moodboard.

## 2. Steps

1. **Read every note**, then open its image. For each image, write down two lists: what is taken for the **look** (colour, type, shape, spacing, elevation) and what is taken for the **pattern** (a component, a layout, a behaviour), each with the note it comes from.
2. **Analyse the look as a senior UX/UI designer setting up a design library.** Look at the images that the notes name for style, and describe what they share:
   - **Colour:** background, surfaces, text, lines, one accent, the states (ok, warning, problem), the colours of the means of transport. Give hex values read from the images; mark them "estimated" since they come from screenshots.
   - **Typography:** the kind of typeface (Marco asks for a simple sans serif), a free font that matches it or the system font, the scale (sizes, weights, line heights) and where each step is used.
   - **Spacing and grid:** the base unit, the steps, the margins of the screen, the gaps between cards.
   - **Shape:** corner radius, borders, lines, how cards sit next to each other.
   - **Elevation:** shadows or their absence, what floats over the map.
   - **Icons:** style (line or filled), size, the icons of the means of transport.
   - **Motion:** only if the images or notes suggest it, for example a card that is pulled up.
3. **Turn the look into tokens.** Every value becomes a custom property with the names already in `style.css` (`--colour-…`, `--space-…`, `--size-…`, `--radius`, `--font`). Add a new token only when no existing one fits, and say why.
4. **Describe the components and patterns** the notes ask for. For each one: what it is, its parts, its states, the tokens it uses, the image and note it comes from, and the page of the foundation where it goes. Examples from the current notes: the floating search bar with the choice of means, the timeline of results by departure time and duration, the legs of a trip, the floating card over the map that is pulled up to show the legs, the progress of a leg on the lock screen and the stops left before the next change.
5. **Write down the layout principles** that hold everywhere, for example that the map is always visible behind the cards.
6. **Check before finishing** (section 4).

## 3. Template of `Style.md`

```markdown
---
source: Claude
date: <date and hour>
method: synthesis
status: draft
grade: n/a
confidence: n/a
tags: [design, internal, rules]
related: [Style_instructions.md, SPEC-01_foundation.md, Prototype_Instructions.md]
---

# Style

## Sources
One row per selected image: name, what is taken (look, pattern, or both), what is ignored, Marco's note quoted in Italian with an English translation.

## Principles
The few rules that hold everywhere: the character of the style and the layout principles (for example the map always visible).

## Colour
Table: token, value, use, source image.

## Typography
Font, fallback, and the scale as a table: token, size, weight, line height, use.

## Spacing and grid
## Shape and elevation
## Icons
## Motion

## Components
One subsection per component or pattern: description, parts, states, tokens, page of the foundation, source image and note.

## Tokens for the prototype
The full `:root` block, ready to replace the one in `05_Prototype/css/style.css`.

## Open questions
What the images do not show and had to be proposed, and the conflicts between notes or images.

## Connections
```

## 4. Checks

- Every selected image is in "Sources", and every element of the style names the image and note it comes from.
- Nothing is taken from a screen or a look that a note excludes.
- A value that does not come from the images (for example a state colour the screenshots do not show) is marked as a proposal and listed under "Open questions".
- Every token in the `:root` block is used by at least one component or rule, and every token of the current `style.css` has a value or is listed as dropped, with the reason.
- The colour pairs used for text have their contrast ratio written next to them.
- Every page named is in the foundation.

## 5. Project rules

- `Style.md` is written in English. Marco's notes are quoted in Italian with a translation (`AGENTS.md`, "Language").
- It starts with the metadata block of `../00_Intro/Metadata/metadata_schema.md`, as `draft`.
- Record its creation in `CHANGELOG.md` and commit (`AGENTS.md`, sections 1 and 2).
- Do not change `05_Prototype/css/style.css` while writing the style. Applying it to the prototype is a separate request from Marco.
