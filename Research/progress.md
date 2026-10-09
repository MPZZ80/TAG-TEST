---
source: Claude
date: 2026-10-07 19:22
channel: conversation
method: generated
status: draft
grade: n/a
confidence: n/a
tags: [plan]
---

# Desk Research Progress

Running record of the desk research, so that a new session can continue without starting over. It is for resuming work only, not a source for findings.

**How to use it:** at the start of every desk research session read this file, then continue from "Next step". After every meaningful step (a search batch, a link opened, a list delivered, a decision from Marco) add a line to the log below, newest first, and update "Current state" and "Next step". Do not log these updates in `CHANGELOG.md`.

## Current state

The collection stage is complete for all six categories, with the extended scope, and on 2026-10-07 all the collected material that could be read was read. Of the 132 sources, 124 were read in full, 1 in part (AR-007, behind a paywall) and 7 could not be read (2 papers not obtained because payment is needed, AP-002 and AP-020; 5 web pages that cannot be captured). In the evening of 2026-10-07 Marco supplied the PDFs of 18 of the 20 blocked papers; they were converted, read and recorded, and the analysis and the interview script (now version 4) were updated. In the night of 2026-10-07 the 17 sources read by chapter or in part were read to the end and recorded; the analysis has findings F1 to F76 and the script, still version 4, has five more checks. The evidence is in the "Data and quotes used" section of each source file, the "Read" row says how much was read, and the ledger below lists every source. `desk_research_partial_analysis.md` was rewritten from this evidence (findings F1 to F52) and the interview script is at version 3. The activities A1 to A8 (outputs, comparison grid, synthesis) have not started. Totals on 2026-10-07: 132 source files, 61 downloaded documents, 110 Markdown copies.

| Category | Source files | Status |
| --- | --- | --- |
| Global reports | 56 (GR-001 to GR-056) | Done. Italy and the EU, the UK, US, Canada, Australia, Switzerland, Germany, France, Netherlands, Spain, Japan, Korea, technology and data landscape. Items not obtained: `Sources/Global_Reports/GR_to_obtain.md` |
| Academic papers | 28 (AP-001 to AP-028) | Done with OpenAlex. 26 PDFs and Markdown copies: 8 downloaded, 18 supplied by Marco on 2026-10-07. AP-002 and AP-020 not obtained, payment needed (`AP_to_obtain.md`) |
| Products | 17 (PR-001 to PR-017) | Done: product pages and App Store listings of multimodal planners, rail and coach operators and commuter apps in Italy, UK, Germany, France, Switzerland, Netherlands, US and Korea. Gaps and blocked sites in `PR_to_obtain.md` |
| Online reviews | 17 (OR-001 to OR-017) | Done: samples of the most recent App Store reviews (up to 100 each) for the 17 products. Google Play not readable (`OR_to_obtain.md`) |
| Online forums | 4 (OF-001 to OF-004) | Thin: most forums and Reddit block automated reading (`OF_to_obtain.md`) |
| Articles | 10 (AR-001 to AR-010) | Done for MaaS failures and plans (Whim, Citymapper, MaaS for Italy), hybrid-work tickets. Blocked items in `AR_to_obtain.md` |

Products, reviews, forums and articles were built directly, keeping everything found, without a separate vetted candidate list, because Marco asked not to be asked and to finish the collection. Grades are provisional until the citations are counted at the start of the activities.

## Scope

From 2026-10-06 the scope is Western countries and the more advanced countries of the rest of the world that resemble the West (details in section 3 of `desk_research_instructions.md`). Marco asked for it because he is not sure that what was found in Europe is valuable, mainly for technology solutions and pain points. Every candidate list covers the wider scope; the Global reports list was extended first.

From 2026-10-08 the subject is intercity commuting in multimodal environments in general, not the Italian commuter: Italy is one case and no longer the starting market (Marco's instruction 23; section 3 of `desk_research_instructions.md`; "Scope" section added to the brief). No new search was made for it yet.

## Languages

From 2026-10-06, sources in languages other than English are in scope and are searched for in their own language (German, French, Spanish, Japanese, Korean and so on), together with the wider geographic scope. Rules in section 3 of `desk_research_instructions.md`. All source files now have the "Language" row.

## Tools for other languages

Installed on 2026-10-06 for `tesseract` (OCR), in `/opt/homebrew/share/tessdata`: Italian, German (`deu`), Japanese (`jpn`), Dutch (`nld`), Spanish (`spa`), French (`fra`) and Korean (`kor`), besides English. The conversion picks the OCR language per source ID.

- **Not installed:** Chinese (`chi_sim`, `chi_tra`), Portuguese (`por`), Swedish (`swe`), Norwegian (`nor`), Finnish (`fin`), vertical Japanese (`jpn_vert`). Download `<code>.traineddata` from the `tessdata_fast` repository of tesseract-ocr when a source needs it. Codes are standard names; check them with `tesseract --list-langs`.
- **Text conversion** of PDFs in other languages needs nothing more: `pymupdf4llm` reads Unicode. The OCR language is only for pages without text.
- **Translation** needs no plugin: Claude translates passages, always as working translations to be checked. For his own reading of web pages Marco can use the browser's page translation.
- **Scans:** the conversion counts a page as scanned if it has fewer than 40 text characters. Pages with charts as images may still lose their contents; check figures in the original PDF.

## Next step

Marco reviews `desk_research_partial_analysis.md` (start from the summary and from "Evidence against the brief's assumptions") and version 4 of `deepdive_interview_script.md`. Then, as he decides: (a) write the activity outputs A1 to A8 and the synthesis from the source files; (b) prepare the Italian wording of the interview topics and a pilot interview; (c) obtain what is missing.

What is missing and would matter most:

- The two papers still missing, AP-002 and AP-020 (`Sources/Academic_Papers/AP_to_obtain.md`): payment is needed. AP-020, on acceptable travel time, matters more. The file `docs/Academic_Papers/AP_002.pdf` is a copy of AP-015 and can be deleted.
- The ISTAT commuting matrix for 2021 (GR-026), published in October 2025 and not opened: it could count the people who commute between specific Italian cities.
- AR-007, the only source read in part: the article is behind a paywall.
- A search aimed at multimodal environments (regions where commuters do combine modes: for example Switzerland, the Netherlands, the Rhine-Ruhr, Greater Tokyo) was not made after the scope was widened; Marco decides whether it is needed.
- The MaaS for Italy white paper (GR-050) and the Eurobarometer report behind GR-005 and AR-003.
- Italian commuter forums and groups, which could not be read.
- The "Used in" section of the source files, to fill with the finding numbers when the outputs are written.

Marco is trying to obtain the items in `Sources/Global_Reports/GR_to_obtain.md`; when he provides files, save them in `docs/` with the naming rule, and create or update the source file.

## Full reading ledger

Sources read in full (or with the chapters named in their "Read" row) during the complete reading asked by Marco on 2026-10-07. A source not listed here has not been read beyond what its file says.
- GR-008: In full, 51 pages
- GR-004: In full, 62 pages
- GR-023: In full, 6 pages
- GR-024: In full, 20 pages
- GR-025: In full: user guide 14 pages and methodological note 2 pages
- GR-051: In full, the whole web page (12 sections and appendix)
- GR-003: In full, 244 pages, in two readings: first the chapters on rail, local public transport, passengers and users' rights (PDF p.8-13, 24, 32-39, 44, 67-78, 91, 109-115, 122, 130-166, 196-235), then all the remaining pages. Several charts are images whose values are not in the text copy; where only the legend could be read this is said (2026-10-07)
- GR-050: In full, the whole web page (a press release; the white paper itself was not downloaded)
- GR-054: In full, the whole web page
- AR-008: In full, the whole article
- GR-001: In full, the whole web page
- GR-016: In full, the whole web page
- GR-006: In full, 254 pages, in two readings: first the introduction, problem definition, objectives, baseline and the synopsis of the consultation (PDF p.1-32, 91-107), then the policy options, their impacts, the comparison and all the annexes (PDF p.33-90, 108-254). One figure page (PDF p.241) is an image read by OCR (2026-10-07)
- GR-007: In full, 75 pages: explanatory memorandum, recitals and articles 1 to 7 (PDF p.1-22) in the first reading; articles 8 to 20, the financial and digital statement and the two annexes (PDF p.23-75) in the second. One annex page with the last rows of the national thresholds is an image and was not read
- GR-020: In full, 40 pages: explanatory memorandum and recitals 1 to 10 (PDF p.1-14) in the first reading; recitals 11 to 16, articles 1 to 15 and the financial and digital statement (PDF p.15-40) in the second
- GR-021: In full: the text of the 2017 regulation as published (recitals as captured, articles 1 to 11 and the annex). The capture kept only some of the recitals; the 2024 amendments are listed but their text is not in the copy
- GR-013: In full, 5 pages
- GR-015: In full, the whole web page
- GR-010: In full, 35 pages (the last page is a list of participants read from an image)
- GR-009: In full, 45 pages (reference list and list of participants included)
- GR-011: In full, 12 pages (two pages are diagrams read by character recognition, with gaps)
- GR-012: In full, 16 pages (three pages with boxes and a diagram read by character recognition, with gaps)
- GR-037: In full, 236 pages: executive summary, main report, appendix A (mid-trial interviews) and appendix F (exit survey) in the first reading (PDF p.5-69, 71-83, 115-127); the rest in the second (PDF p.1-4, 70, 84-114, 128-236: appendices B to E and G to L, which are the papers on bundle design, government's role, the app developer's account, car use, choice of plans, the users' experience, and two opinion papers on the future of the idea). The first reading counted 127 pages; the file has 236
- AP-014: In full, 11 pages (reference list included)
- GR-027: In full: the executive summary captured from the web page (the chapters linked from it and the infographic figures were not captured)
- GR-028: In full: the executive summary captured from the web page (the linked chapters and the infographic figures were not captured)
- GR-029: In full, the whole web page (a newsletter item of three paragraphs)
- GR-030: In full, the whole web page (introduction and main findings; the data tables linked from it were not downloaded)
- GR-052: In full, the whole web page (a government news story of 20 May 2021, marked as withdrawn on 21 June 2021 when the ticket was released)
- GR-053: In full, the whole web page (five sections)
- GR-031: In full, 8 pages (the first page read by character recognition; the tables and charts did not convert, so only figures quoted in the text were read)
- GR-032: In full, the whole web page (the text under the charts; the charts themselves were not captured)
- GR-033: In full, the whole web page (the chart data tables did not convert; figures quoted in the text were read)
- GR-034: In full, the whole web page
- GR-038: In full, the whole web page (a short 'about' page)
- GR-039: In full, the whole web page (a fact sheet of January 2022)
- GR-055: In full, the whole web page
- GR-056: In full, the whole web page (a short interview)
- GR-018: In full, the whole web page (the press release for the United States; the full report it links to was not captured)
- GR-017: In full, 67 pages. The report is a slide deck whose charts do not convert to text, so the chart pages were read from the page images in two readings: first the chapter on mobility habits (PDF p.7, 9, 11-14, 16-22, 24, 29) and the summary pages; then the remaining chart pages (PDF p.8, 10, 25-27, 32-40, 43-49, 52-57, 60-65). The other pages are covers and section dividers (2026-10-07)
- GR-014: In full, 48 pages: introduction, start of chapter 1, the pages on commuting and the annex (PDF p.5-12, 29, 36-37, 43-46) in the first reading; the rest of chapters 1 to 5 and the bibliography (PDF p.1-4, 13-28, 30-35, 38-42, 47-48) in the second. Tables 2 and 7 and figures 2 to 4 converted only in part
- GR-040: In full, 122 pages: contents, introduction, literature review, demand for traveller information and future directions (PDF p.9-33, 110-119) in the first reading; the rest in the second (PDF p.1-8, 34-109, 120-122: foreword, section 4 on technologies, section 5 on 23 systems in North America and Europe, section 6 on other industries, section 7 on regional information systems, glossary). Screenshots of the systems were not read as images
- GR-042: In full: the main publication, 22 pages, and the one-page infographic (the two 'key data' pages are images that did not convert; the charts were read only through the figures quoted in the text)
- GR-045: In full, 80 pages: the chapter of results (PDF p.31-80) and presentation (p.5-9) in the first reading, and the cover, contents, list of zones, method, fieldwork, sampling error, weighting and definitions (PDF p.1-4, 10-30) in the second. Several charts did not convert to text
- GR-043: In full, 59 pages (the key-figure tables on PDF p.14-17 and the charts did not convert to text; figures were read from the commentary)
- GR-044: In full: the summary document as downloaded (the full report was not downloaded)
- GR-041: In full: the long report, 240 pages (summary, trip purposes, public transport, home office, travel, long-distance commuting and conclusions in the first reading, PDF p.11-20, 65-70, 103-116, 211-236; all the other chapters in the second, PDF p.1-10, 21-64, 71-102, 117-210, 237-240), and the short report (Kurzbericht), 34 pages. Many charts did not convert to text and were not read as images. Read with a working translation
- GR-035: In full, 88 pages: introduction, vehicles and passes, distances, legs, means, purposes and work trips (PDF p.7-10, 14-16, 20-32, 36-48) in the first reading; the rest in the second (PDF p.1-6, 11-13, 17-19, 33-35, 49-88: parking and passes, reasons for the choice of means, work trips, groups, agglomerations, journeys, attitudes to transport policy, method, glossary). Most charts did not convert to text and were not read as images
- GR-019: In full (text capture of the web page, about 1 page). The data file itself (zip, 34.3 MB) was not opened
- GR-026: In full (text capture of the web page, about 2 pages). The data files (zip, csv) and the method notes were not opened
- AP-001: In full, 14 pages (text and reference list; tables 2 and 4 converted imperfectly)
- AP-013: In full, 9 pages (figures 1-4 did not convert; their values are taken from the text)
- AP-017: In full, 19 pages (14 of text, 5 of references; figures 1-3 did not convert)
- AP-018: In full, 24 pages (19 of text, 5 of references; figures 2-5 and parts of tables 4-6 did not convert, their values are taken from the text)
- AP-021: In full, 14 pages. Table 1 (the list of 45 factors from the literature, PDF p.3) is an image and did not convert, so it was not read
- AP-024: In full, 14 pages (figures 1-3 and the supplementary material were not available in the text copy; tables 1-6 and appendix B were read)
- AP-028: In full, 31 pages of text. Five table pages came out of OCR as noise and could not be read (tables 2, 8, 9 and 11: PDF p.11, 16, 19-20, 25); their main values are taken from the running text
- AR-001: In full (text capture of the web page, about 2 pages)
- AR-003: In full (text capture of the web page, about 1 page). The Eurobarometer report itself was not read here
- AR-004: In full (text capture of the web page, half a page)
- AR-005: In full (text capture of the web page, about 2 pages)
- AR-006: In full (text capture of the web page, about 2 pages)
- AR-007: Opening only: the article is behind a paywall (about 905 words, of which only the highlights and first lines are open). Not read beyond that; the paywall was not bypassed
- AR-009: In full (text capture of the web page, about 1 page)
- AR-010: In full (text capture of the web page, about 2 pages). The TNO report it summarises was not read
- OF-001: In full: the three pages of the thread, 42 posts from 2 August to 10 September 2019. Page 1 in the first reading, pages 2 and 3 captured and read in the second (2026-10-07)
- OF-003: In full (text capture of the whole thread, about 100 comments, 16-19 March 2023)
- OF-004: In full (text capture of the whole thread, 21 comments, 1-3 November 2025)
- OF-002: In full: all 10 pages of the thread, 278 posts from 7 April 2014 to 12 September 2026. Page 4 was read in the first reading, the other nine pages in the second. German, read in the original; the English renderings are working translations. Nicknames were not copied
- PR-001: In full (text capture of the product's 'about' page, about 1 page). Much of the page is rendered by scripts and did not capture; the app itself was not tested
- PR-002: In full (text capture of the home page, about half a page). Most of the page is aimed at business customers; the app itself was not tested
- PR-003: In full (text capture of the home page, about 1 page: claims and news headlines). The news articles behind the headlines were not opened; the app was not tested
- PR-004: In full (text capture of the home page, about 3 pages with repeated blocks). The app was not tested
- PR-005: In full (text capture of the 'About us' page, about 3 pages). The app was not tested
- PR-006: In full (text capture of the home page as served from the United States, about 3 pages). The app was not tested
- PR-007: In full (text capture of the official product page in German, about 3 pages). The app was not tested
- PR-008: In full (text capture of the official product page in English, about half a page). The app was not tested
- PR-009: In full (text capture of the official product page in English, a few lines). The app was not tested
- PR-010: In full (text capture of the English home page, about 2 pages, partly broken by page code). The app was not tested
- PR-011: In full (text capture of the corporate home page in Korean, about 1 page: slogans, list of services, news headlines). Read with a working translation; the app was not tested
- PR-012: In full (text of the official App Store listing in Italian, about 1 page). The app was not tested
- PR-013: In full (text of the official App Store listing in French, about 2 pages). The app was not tested
- PR-014: In full (text of the official App Store listing in German, about 2 pages). The app was not tested
- PR-015: In full (text of the official App Store listing in Dutch, about 2 pages). Read with a working translation; the app was not tested
- PR-016: In full (text of the official App Store listing in Dutch, about half a page). Read with a working translation; the app was not tested
- PR-017: In full (text of the official App Store listing in Dutch, about 1 page). Read with a working translation; the app was not tested
- GR-049: In full (text capture of the government news page in Korean, about 1 page of content). Read with a working translation
- GR-047: In full, 164 pages: PDF p.1-45 in the first reading; the rest of the measures, the outlook and the appendices (experts, technology survey, list of Japanese MaaS, foreign cases: PDF p.46-164) in the second. Slides: several charts and diagrams did not convert and were not read as images. Read with a working translation
- GR-048: In full, 39 pages, in two readings: first the text of PDF p.1-9 and the chart pages p.10, 14, 15, 16, 19, 20, 23; then all the other pages (p.11-13, 17-18, 21-22, 24-39), and the first chart pages again. The chart pages were read from the page images because the charts do not convert to text. PDF page numbers are one higher than the numbers printed on the slides. Read with a working translation from Japanese (2026-10-07)
- GR-046: In full, 227 pages: purpose, scope and summary of the demand study (PDF p.4-9, 19-41) in the first reading; the rest in the second (PDF p.1-3, 10-18, 42-227: detailed method, survey results by area, interviews, logic trees, workshops, city types, feedback from municipalities, and the whole supply side on financing and leasing of self-driving buses). Slides: several charts did not convert to text and were not read as images. Read with a working translation
- OR-001: In full: all 100 reviews of the sample (15 August to 4 October 2026)
- OR-002: In full: all 100 reviews of the sample (14 July to 2 October 2026)
- OR-003: In full: all 100 reviews of the sample (21 August to 4 October 2026)
- OR-004: In full: all 100 reviews of the sample (28 September to 4 October 2026: one week)
- OR-005: In full: all 100 reviews of the sample (19 August to 4 October 2026)
- OR-006: In full: all 100 reviews of the sample (11 July 2025 to 30 September 2026)
- OR-007: In full: all 100 reviews of the sample (30 September to 4 October 2026: five days)
- OR-008: In full: all 100 reviews of the sample (30 May to 3 October 2026). Read with a working translation from Dutch
- OR-009: In full: all 100 reviews of the sample (4 July to 2 October 2026)
- OR-010: In full: all 100 reviews of the sample (4 May to 4 October 2026)
- OR-011: In full: all 100 reviews of the sample (5 September to 4 October 2026). Read with a working translation from Korean; the reviews are short and full of slang, so nuance may be lost
- OR-012: In full: all 50 reviews of the sample (10 July to 27 August 2026)
- OR-013: In full: all 100 reviews of the sample (2 September to 4 October 2026)
- OR-014: In full: all 100 reviews of the sample (21 June to 4 October 2026), in German, French, English and Italian
- OR-015: In full: all 100 reviews of the sample (29 October 2025 to 2 October 2026). Read with a working translation from Dutch
- OR-016: In full: all 20 reviews of the sample (1 July 2025 to 26 September 2026). Read with a working translation from Dutch
- OR-017: In full: all 85 reviews of the sample (10 January to 29 September 2026). Read with a working translation from Dutch
- AP-002: Not read. Not obtained: payment is needed (Marco, 2026-10-07). Only the catalogue abstract, if any, was read. Not used as evidence
- AP-003: In full, 13 pages of text (figures 1 to 3 are described in the text; figure 3 was not read as an image; the reference list was skimmed)
- AP-004: In full, 18 pages of text including the interview guide (figures 1 to 3 were not read as images; the reference list was skimmed)
- AP-005: In full, 10 pages of text and tables 1 to 5 (figures 1 and 2 were not read as images; table 4 came out garbled in the conversion and was read only for its row labels; the reference list was skimmed)
- AP-006: In full, 9 pages (text and tables 1 to 6; figures 1 to 8 are described in the text and were not read as images; the reference list was skimmed)
- AP-007: In full, 16 pages of text (tables 2 to 4 came out garbled or as images in the conversion and were read only in part; figures 1 to 4 were not read as images; the reference list was skimmed)
- AP-008: In full, 11 pages of text and tables 1 to 7 (figures 1 to 5 were not read as images; the equations came out garbled and were skipped; the reference list was skimmed)
- AP-009: In full, 23 pages of text and tables 1 and 2 (the equations came out garbled and were read for their meaning in the text only; figures 1 to 13 are described in the text and were not read as images; the reference list was skimmed)
- AP-010: In full, 19 pages of text and tables 1 to 7 (figures 1 to 9 were not read as images; the equations were skipped; the reference list was skimmed)
- AP-011: In full, 12 pages of text and tables 1 to 8 (the text layer of this PDF is of poor quality: tables 5 to 8 came out partly garbled and the figures quoted from them are taken from the running text; figures 1 to 5 were not read as images; the reference list was skimmed)
- AP-012: In full, 38 pages: text, table 1, the reference list and the search appendix. Table 2 (PDF p.8-21, one row for each of the 36 studies) came out with its columns interleaved in the conversion; it was read row by row for the study, place, period and main finding, and the figures quoted below are those repeated in the running text. Figures 1 to 3 were not read as images; the abstract is not in the conversion
- AP-015: In full, 18 pages (text; the reference list was skimmed; figures 2 to 6 and the counts in table 2 did not convert, so the order of the themes is taken from the text)
- AP-016: In full, 25 pages (text and the two appendix tables with all sub-themes and example quotes; several counts in the tables and the three appendix figures did not convert)
- AP-019: In full, 15 pages of text and tables 1 and 2 (table 2 is a rotated page that the conversion could not read: it was rendered from the PDF and read as an image; figure 1 was not read as an image; the reference list was skimmed)
- AP-020: Not read. Not obtained: payment is needed (Marco, 2026-10-07). Only the catalogue abstract, if any, was read. Not used as evidence
- AP-022: In full, 25 pages: text, tables 1 to 6 and the appendices (the equations came out garbled and were read for their meaning in the text; figures 1 to 22 were not read as images; the model tables in appendix C were skimmed)
- AP-023: In full, 38 pages (author's final manuscript from the MIT repository): the main text in the first reading and appendix A with the formulas for the remaining passenger groups (PDF p.32-38) in the second. The equations were read for their logic and assumptions, not checked. Figures 1 to 11 were not read as images; the reference list was skimmed
- AP-025: In full, 15 pages (text and tables 1 and 2; the reference list was skimmed; the supplementary tables were not available)
- AP-026: In full, 14 pages of text and tables 1 and 5; tables 4 and 6, whose column headings were lost in the conversion, were rendered from the PDF and read as images; tables 2 and 3 (classification and outstanding functions) could not be matched to the planners and were not used; figures 1 and 2 were not read as images; the reference list was skimmed
- AP-027: In full, 9 pages of text and tables 1 to 4 (figure 1 was not read as an image; the supplementary material was not available; the reference list was skimmed)
- GR-002: Not read line by line. The page is rendered by scripts and could not be captured; on 2026-10-07 it was read again only through an automatic page-fetch summary, which is not a verbatim copy
- GR-005: Not read line by line. The page is rendered by scripts and could not be captured as text; a new attempt on 2026-10-07 returned no content. What is in this file comes from the first opening of the page
- GR-022: Not read line by line. The page is rendered by scripts and could not be captured as text; a new attempt on 2026-10-07 returned no content. What is in this file comes from the first opening of the page
- GR-036: Not read line by line. The page is rendered by scripts and could not be captured as text; a new attempt on 2026-10-07 returned no content. What is in this file comes from the first opening of the page
- AR-002: Not read line by line. The page is rendered by scripts and could not be captured as text; a new attempt on 2026-10-07 returned no content. What is in this file comes from the first opening of the page

## Tools and lessons

- `pdftotext` is not installed. PDF text was extracted with `pypdf`, installed only in the scratchpad: `python3 -m pip install --quiet --target <scratchpad>/lib pypdf`, then run Python with `PYTHONPATH=<scratchpad>/lib`. A helper `page.py` in the scratchpad fetched web pages as text. Both may need to be recreated in a new session.
- `WebFetch` and web search summaries are not reliable for figures: a summary said the ISFORT PDF was image-only (it is not), gave Eurofound and UITP years that were wrong, and quoted figures that are not in the documents. Verify every figure in the document itself and cite the page.
- PDFs are converted with `pymupdf4llm` (installed with `pip install --user`, version 0.0.27 on Python 3.9) and `tesseract` 5.5.3 (Homebrew, with `ita.traineddata` added to `/opt/homebrew/share/tessdata`). The conversion script was a temporary file; to redo it, call `pymupdf4llm.to_markdown(doc, page_chunks=True)` per file, write `<!-- page N -->` markers, OCR with `page.get_textpage_ocr(language='ita+eng', dpi=200, full=True, tessdata=...)` on pages with fewer than 40 text characters, and add the metadata block and note. Results are in `docs_md/`.
- Reddit, McKinsey, INRIX, ITF/OECD web pages and Eurofound web pages block automated requests; see `GR_to_obtain.md`.

## Candidate links found so far

Links found by search. Every one was opened once on 2026-10-05; the results are in the log. Kept as a record for resuming work.

Found by search, not yet opened . Topic in brackets.
- Eurostat, Main place of work and commuting time (Statistics Explained) [Q1-Q8]: https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Main_place_of_work_and_commuting_time_-_statistics
- Eurostat news, Over 12.5 million intra-country commuters in 2022 [Q1-Q8]: https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20231017-1
- Eurostat, Passenger mobility statistics [Q13]: https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Passenger_mobility_statistics
- ISTAT, Matrici del pendolarismo [Q1-Q8]: https://www.istat.it/non-categorizzato/matrici-del-pendolarismo/
- Legambiente, Rapporto Pendolaria 2025 (20th edition) [Q20-Q23]: found via https://www.regione.puglia.it/web/ufficio-statistico/-/legambiente.-rapporto-pendolaria-2025 (look for the original on legambiente.it)
- ISFORT, 22nd Rapporto sulla mobilita degli italiani, synthesis PDF [Q1-Q16]: https://www.isfort.it/wp-content/uploads/2025/11/22-RapportoMobilita_Sintesi.pdf
- ITF/OECD, Integrating Public Transport into Mobility as a Service (2021) [Q27-Q33]: https://www.oecd.org/en/publications/integrating-public-transport-into-mobility-as-a-service_94052f32-en.html
- Eurobarometer 2024 on booking and ticketing, results 1 April 2025 [Q14-Q15]: via https://www.railtarget.eu/passenger/eu-rail-multimodal-ticketing-survey-2025-10419.html and https://www.cer.be/cer-press-releases/european-travellers-report-positive-experience-with-rail-multimodal-bookings (look for the original on the Commission site)
- Commission Delegated Regulation (EU) 2017/1926, multimodal travel information [Q30]: https://eur-lex.europa.eu/legal-content/en/ALL/?uri=CELEX%3A32017R1926
- NAPCORE position paper on revising 2017/1926 [Q30]: https://napcore.eu/wp-content/uploads/2024/02/NAPCORE-Position-paper-on-the-revision-of-the-delegated-regulation-on-multimodal-travel-information-services-EU-20171926-DR-MMTIS.pdf
- Eurofound, hybrid work in Europe (several reports) [Q32]: https://www.eurofound.europa.eu/en/publications/all/shaping-future-work-inside-europes-hybrid-work-strategies
- Europ Assistance 2025 Mobility Barometer (Ipsos) [Q13, Q20]: https://www.ipsos.com/en/europ-assistances-2025-mobility-barometer


Second batch, found by search:
- EU Urban Mobility Observatory, shared mobility hubs case study [Q15]: https://urban-mobility-observatory.transport.ec.europa.eu/resources/case-studies/shared-mobility-hubs-lessons-learnt-sharedimobihub-project_en
- EGUM recommendations, complementing public transport with shared mobility (2024) [Q15]: https://transport.ec.europa.eu/document/download/2476beda-4ffd-4608-89f3-973013c47f60_en?filename=EGUM_Recommendations_public_transport-shared+mobility.pdf
- UITP policy brief on MaaS (2025) [Q27-Q33]: https://www.uitp.org/wp-content/uploads/sites/7/2025/04/Policy-Brief_MaaS_V3_final_web_0.pdf
- UITP policy brief on mobility hubs (2025) [Q15]: https://www.uitp.org/wp-content/uploads/sites/7/2025/04/Policy-Brief-Mobility-hubs-web.pdf
- McKinsey Mobility Consumer Pulse (2025) [Q13]: found via https://pavecampaign.org/mckinsey-mobility-consumer-pulse/ (look for the original on mckinsey.com)
- ART, Relazione annuale 2025, 17 Sept 2025 [Q20-Q23]: https://www.autorita-trasporti.it/wp-content/uploads/2025/09/2025-Relazione-Art.pdf
- Commission proposal on passenger rights in multimodal journeys, 29 Nov 2023 [Q21-Q23]: https://www.europarl.europa.eu/legislative-train/theme-a-new-plan-for-europe-s-sustainable-prosperity-and-competitiveness/file-multimodal-framework-for-passenger-rights
- Commission Passenger Package, 13 May 2026, COM(2026) 232 final (rail ticketing) [Q27-Q33]: https://transport.ec.europa.eu/document/download/a3284ec0-f1ad-4ee4-a558-5d4c17948046_en?filename=Proposal_on_rail_ticketing.pdf ; summary https://www.railwaygazette.com/europe/2026/05/13/european-commission-unveils-passenger-package-to-tackle-fragmented-rail-booking-systems/
- Commission initiative on multimodal digital mobility services and single digital booking (Have Your Say) [Q30]: https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/14626-EU-rules-on-multimodal-digital-mobility-services-and-single-digital-booking-ticketing
- Moovit Global Public Transport Report 2024 (vendor data) [Q1-Q16]: https://moovit.com/press-releases/moovit-2024-global-report-usa/
- INRIX 2025 Global Traffic Scorecard (vendor data) [Q13, Q20]: https://inrix.com/blog/congestion-up-fatalities-down-what-the-2025-inrix-global-traffic-scorecard-reveals/
- Politecnico di Milano, Smart Mobility Report 2025 (MaaS in Italy) [Q27-Q33]: found via https://www.regionieambiente.it/smart-mobility-report-2025/ (look for the original on polimi.it)
- ITF Key Transport Statistics 2025 [Q1-Q16]: https://www.itf-oecd.org/key-transport-statistics-2025

## Log

- 2026-10-08 09:13: Instruction 23 applied: "Scope" section added to the brief, new first bullet and reworded Geography bullet in section 3 of the instructions, scope note and a decision added to the analysis. Findings not rewritten. Marco's 86% is not in the sources as such.
- 2026-10-08 09:12: Second reading finished. Recorded after 23:17: GR-003 (244 pages), GR-006 (254 pages), GR-017 and GR-048 (remaining pages read from page images), OF-001 (pages 2 and 3) and OF-002 (the other nine pages, 278 posts in all, read from `scratchpad/forum/of002_all.txt`; capture appended to the text copy with nicknames removed). All 17 are now "in full"; AR-007 stays "in part" (paywall). Linked files updated: analysis (F62 to F76 new; F18 and F57 extended; counts, summary, open points, limits), interview script (five checks added, timings unchanged, 45 minutes), category indexes ("Read" column), `README.md` of this folder. Not done: instruction 23 (scope) is still to apply.
- 2026-10-07 23:17: Second reading done and recorded for GR-040 (sections 4 to 7 and the glossary), GR-037 (appendices B to E and G to L; the file has 236 pages, not 127) and GR-041 (all remaining chapters of the long report): all three now read in full, charts and screenshots not as images. Done so far: GR-045, GR-020, GR-047, GR-007, GR-014, AP-023, GR-035, GR-046, GR-040, GR-037, GR-041. Next: GR-003 (10 parts), GR-006 (11), then GR-017 and GR-048 images and the forum pages. Parts are read from `scratchpad/q6/` (repeated table cells collapsed). During the reading Marco gave a new general instruction (AGENTS.md no. 23, logged in CHANGELOG at 23:16): widen the scope of the brief from the Italian commuter to multimodal environments in general; to be applied after the reading, not applied yet.
- 2026-10-07 23:13: Second reading done and recorded for GR-035 (all remaining chapters: passes, parking, reasons for the choice of means, work trips, attitudes, method) and GR-046 (detailed method, results by area, workshops, the whole supply side): both now read in full, charts not as images. Done so far: GR-045, GR-020, GR-047, GR-007, GR-014, AP-023, GR-035, GR-046. Next: GR-040 (4 parts), GR-037 (8), GR-041 (10), GR-003 (10), GR-006 (11), then GR-017 and GR-048 images and the forum pages. The parts are now read from `scratchpad/q5/` (same text with repeated table cells removed).
- 2026-10-07 23:10: Second reading done and recorded for GR-007 (articles 8 to 20, statement, annexes), GR-014 (rest of chapters 1 to 5) and AP-023 (appendix A): all three now read in full. Done so far: GR-045, GR-020, GR-047, GR-007, GR-014, AP-023. Next: GR-035 (3 parts), GR-046 (4), GR-040 (4), GR-037 (8), GR-041 (10), GR-003 (10), GR-006 (11), then GR-017 and GR-048 images and the forum pages.
- 2026-10-07 23:09: Second reading done and recorded for GR-045 (method chapters; now read in full), GR-020 (articles and financial statement; in full) and GR-047 (measures, appendices, foreign cases; in full, charts not as images). Next: GR-007, GR-014, AP-023 appendix, then GR-035, GR-046, GR-040, GR-037, GR-041, GR-003, GR-006, GR-017 and GR-048 images, forum pages.
- 2026-10-07 23:08: Marco asked to complete the reading of the sources read only in part (18 after the evening: 12 long reports, GR-017 and GR-048 whose unread pages are charts, AP-023 appendix, OF-001, OF-002, AR-007) and to update the linked files as before. Method: the pages NOT read before were extracted into `scratchpad/q4/<ID>_partNN.txt` (script `mkq4.py`, about 3.4 million characters, 58 parts of at most 68,000 characters); each part is read in full and the source is recorded with `ev.py` (which appends to the evidence) as soon as it is finished. Order: GR-045, GR-020, GR-047, GR-007, GR-014, AP-023 appendix, GR-035, GR-046, GR-040, GR-037, GR-041, GR-003, GR-006, then the chart pages of GR-017 and GR-048 as images, then a new capture of the missing forum pages. AR-007 stays behind its paywall. A line is added here after each source.
- 2026-10-07 19:22: Marco supplied the PDFs of the blocked papers and asked to convert them, analyse them and update the same files as before. 19 files were found: 18 were renamed to the name of their source file and converted with `convert.py`; `AP_002.pdf` is byte for byte the same file as the AP-015 paper, so AP-002 is still missing, and AP-020 was not supplied (Marco tagged both "not obtained, payment needed"). The 18 were read in full from the text copies, one at a time, and recorded with `ev.py` right after each ("Read" row, "What it says", "Data and quotes used" with PDF pages, "Limits"). Pages that did not convert were rendered and read as images: table 2 of AP-019, tables 4 and 6 of AP-026. Not read: appendix A of AP-023 (formulas). Then updated: `desk_research_partial_analysis.md` (F5, F9, F21, F30, F31 rewritten from the full texts; F53 to F61 new; counts and limits; the summary said "seven questions have no material", corrected to three open and nine with indirect evidence), `deepdive_interview_script.md` (version 4: six probes added inside existing points, timings unchanged at 45), `Sources/Academic_Papers/README.md` (18 rows), `AP_to_obtain.md` (two left), `Research/README.md`, `CHANGELOG.md`.
- 2026-10-07 15:16: Complete reading finished. All 64 reading bundles were read and each source was updated right after it was read: "Read" row, "What it says", "Data and quotes used" with page numbers, "Limits". Charts that did not convert were read from page images for GR-017 and GR-048. A new attempt to download the 20 blocked papers from publishers and open repositories was refused again and not worked around; 5 script-built pages returned no text; these 25 sources are marked "Not read". Then: `desk_research_partial_analysis.md` rewritten (F1 to F32 revised, F33 to F52 new), interview script moved to version 3, category indexes given a "Read" column and new one-line summaries, `README.md` of Research updated, `CHANGELOG.md` entry added.
- 2026-10-07 13:26: Marco asked to complete the reading of all the material and to update the source files with the evidence (and the interview script if needed). Method: every text copy is read in 69 bundles (about 3.8 million characters). Documents are read in full, except seven very long ones, read by chapter: the regulator's report GR-003 (pages on rail, local transport and passenger rights), the Commission impact assessment GR-006 (pages 1-32 and the stakeholder annex), the Sydney report GR-037 (body and appendices A and F), MiD GR-041 (summary, trip purposes, public transport, home office, long trips, conclusions, plus the whole short report), the Swiss microcensus GR-035, the Japanese reports GR-046 and GR-047, TCRP GR-040 (summary), Eurofound GR-014 (summary and pages on commuting), CRTM GR-045 (results), the two Commission proposals (explanatory memoranda). After each document the evidence goes into its source file with the script `ev.py` (temporary), which also adds a "Read" row and a line to the "Full reading ledger" below. If the session stops, continue from the first source that is not in the ledger.
- 2026-10-07 12:38: Marco asked to read the material and write a partial analysis with the answers the sources already give, and then a version 2 of the interview script that integrates the open points and keeps the sequence of the experience. Read: the abstracts of the 28 papers, targeted passages of ISFORT, Pendolaria, the regulator's report, the Commission impact assessment, the Sydney trial report, Transport Focus, Eurostat, CRTM, KiM and others, and the 17 review samples (1,555 reviews, keyword coding of the 829 low-rated ones). Wrote `desk_research_partial_analysis.md` (32 findings, 65 sources cited) and rewrote `deepdive_interview_script.md` as version 2 in place. Not done: the "Used in" sections of the source files were not updated with the finding numbers.
- 2026-10-07 10:15: Marco asked for README files in the folders to guide agents without reading every Markdown file. Added `README.md` to Brief, Questions, Metadata, Research, Research/Sources, the six category folders (each an index of its sources, generated from the source files), and to docs and docs_md (local only, not in Git). Rule added to AGENTS.md (entry 22, "Folder guides"): read the folder README first and keep it current. The category indexes were generated by a temporary script that read ID, title, year, geography, language, grade, tags, copies and the first sentence of "What it says" from each source file; update rows by hand or regenerate the same way.
- 2026-10-07 01:45: Finished the collection for all categories with the extended scope, as Marco asked (papers without further questions). Papers: 28 source files, 8 PDFs downloaded and converted, 20 blocked. `docs/` and `docs_md/` split by category. Products: 17 source files with page captures and App Store facts. Online reviews: 17 samples of Apple App Store reviews through the public feed, without reviewer names. Forums: 4 sources (Hacker News through the public API; Reddit, railforums and others blocked). Articles: 6 plus 4 official items (GR-050 to GR-053) and 3 data-landscape pages (GR-054 to GR-056). Checked all 132 source files: no broken links, all have the Language row. Wrote the `*_to_obtain.md` files for each category.
- 2026-10-07 01:31: Marco said not to ask anything more about papers, to split the sources by category and to continue through the remaining categories with the extended scope until the desk research is finished, updating this file. Done: `docs/` and `docs_md/` split into one folder per category like `Sources/` (links rewritten, 0 broken); 28 paper source files AP-001 to AP-028; 8 PDFs downloaded (the rest are blocked by ScienceDirect, Springer, MDPI and similar, listed in AP_to_obtain.md) and converted. Next: Products, Online reviews, Online forums, Articles. Interpretation stays postponed.
- 2026-10-06 23:00: Next category as Marco asked. Queried the OpenAlex API (no key needed; works with curl) on nine topics plus habit, apps and trials, picked 28 papers by relevance and citations, fetched their DOI and open-access links, opened each link once (25 answered 200, 3 answered 403) and wrote `Sources/Academic_Papers/AP_candidates.md`. OpenAlex search helper scripts were temporary files in the scratchpad: the call is `https://api.openalex.org/works?search=<terms>&filter=publication_year:>2016,type:article|review&per-page=8&select=id,doi,title,publication_year,cited_by_count,primary_location,open_access` and papers by id with `filter=openalex:W1|W2`.
- 2026-10-06 22:58: Marco asked for the Markdown files of the sources first and the interpretation later. Captured the text of 20 web pages with pandoc into `docs_md/` (5 pages are rendered by scripts and could not be captured: AR-002, GR-002, GR-005, GR-022, GR-036); added the Language row to the 30 older source files. `docs_md/` now has 51 files. Rule added to the instructions and AGENTS.md (entry 19). Global reports collection is complete; interpretation (A1) is postponed by Marco. Next: Academic papers candidate list.
- 2026-10-06 21:53: Marco asked to generate the Markdown files from the new sources with the Python tools and tesseract. All 31 PDFs already had a Markdown copy. Checked 91 pages with empty or weak text: ran OCR on each at 200 dpi in the right language and added the text where it found at least 40 characters (30 pages across 12 files). The rest are blank pages, covers and section dividers. Web pages are not converted (rule in the desk research instructions: only documents are downloaded).
- 2026-10-06 18:42: Marco said "scarica le fonti": N15 to N23 kept. Installed OCR data for German, Japanese, Dutch, Spanish, French and Korean (tessdata_fast), downloaded 11 documents (MiD 2023 in two versions, SDES publication, infographic and data tables, two KiM reports, CRTM Madrid, Japanese Digital Agency report, MLIT MaaS 2.0 report, MLIT telework survey), wrote 9 source files GR-041 to GR-049 and converted the PDFs to Markdown with OCR language chosen per file. Verified: 43% of Japanese MaaS-related projects ended after the demonstration (GR-047 p.17); CRTM average of 1.10 stages per trip (GR-045 p.40); KiM and SDES figures (source files). The Daegu trial figures and the MiD commuting shares remain unverified. The Korean item is only an announcement from 2023.
- 2026-10-06 16:38: Marco said to proceed with the extended desk research. Treated N1 to N14 as kept (reversible): wrote 14 source files GR-027 to GR-040, downloaded 4 PDFs (US Census brief, Swiss microcensus report, Sydney MaaS trial report, TCRP 92) and converted them to Markdown; added the "Language" row to these 14 files. Then searched in German, French, Dutch, Spanish, Japanese and Korean, opened the links and added 9 candidates (N15 to N23) to `GR_candidates.md` for vetting; blocked or missing items (OTLE, MOLIT press release, MLIT MaaS 2.0 report) went to `GR_to_obtain.md` (items 19 to 21). Verified facts from these sources are recorded in the source files; claims from search summaries are marked as unverified there.
- 2026-10-06 00:40: Marco asked to include sources in languages other than English and to note what to install to read them. Added the Languages and To install sections here, the language rules to the desk research instructions and a "Language" row to the source file template. No searches were done, as asked; Marco commits and the work restarts the next day.
- 2026-10-06 00:37: Opened the new links (blocked: StatCan reference guide, BITRE, Arthur D. Little, Econsult). Wrote the extension list with 14 candidates (UK, US, Canada, Australia, Switzerland, MaaS trial, MobilityData, TCRP) at the end of `GR_candidates.md`, added items 14 to 18 to `GR_to_obtain.md`. Waiting for Marco's vetting; no source files or downloads for these yet.
- 2026-10-06 00:34: Scope extended (see Scope). Two search batches outside the EU done: US Census ACS, UK DfT National Travel Survey, Transport Focus and ORR on disruption information, Statistics Canada, BITRE and ABS in Australia, Swiss Mikrozensus, Sydney MaaS trial, MobilityData, TCRP, Arthur D. Little MaaS report, Helsinki Whim case study. Next: open the links, write the extension list inside `GR_candidates.md` for Marco to vet. Leads for the Academic papers list: MaaS trials what have we learnt (ResearchGate), MaaS trials in Japan, Sydney MaaS users insights (Springer), Singapore MaaS testbed (Springer), real-time information literature review (ResearchGate). Lead for Products: Whim, Tripi/SkedGo, Moovit, Transit.
- 2026-10-06 00:28: Installed `pymupdf4llm` and `tesseract` (with Italian data) at Marco's request, and converted the 17 PDFs in `docs/` to Markdown in `docs_md/` (0 failures; OCR on a few pages, 19 pages for the Ipsos report). Added a "Markdown copy" row to the source files, `docs_md/` to `.gitignore` and the rule to the desk research instructions and AGENTS.md (entry 16). Found in ISFORT: 102.7 million weekday trips in the first half of 2025 (+6.4%). Not found in the converted text: the ART delay rates and the Pendolaria figures for Sicily and Lombardy.
- 2026-10-05 23:52: Marco said to proceed with everything. Done: kept all 19 candidates and added the Left out items and the newer ISTAT material (26 Global report sources); wrote `GR_to_obtain.md` with the links that could not be opened; downloaded 19 documents to `docs/`; extracted PDF text with pypdf and checked dates and key figures; wrote 26 source files and 4 article source files; rebuilt `GR_candidates.md` from them. Corrections found on the way: UITP MaaS brief is 2019, UITP hubs brief is 2023, Eurofound hybrid work report is 2023, ISFORT synthesis is readable, ISTAT report on travel before Covid is dated 8 May 2020, the Pendolaria figures in a summary belong to the 2024 edition. Not done: no in-depth reading of the documents, no A1 output, no other candidate list.
- 2026-10-05 23:44: Marco said to proceed with everything: keep all 19 candidates and add the Left out items; list the Could not do links in a separate file; asked for a newer ISTAT report. Newer ISTAT material found and opened: La mobilita territoriale (page 2024-02-06, interactive product, commuting from the permanent census), Matrici di contiguita, distanza e pendolarismo (2025-10-08, 2021 matrix, work only), Focus SLL 2021 (PDF, 2025-10), Gli spostamenti sul territorio prima del Covid-19 (press release 2020-05-08, data 2019: 22 million to work, 11 million to school; a search result said May 2021, the page says 2020). Next: write GR_to_obtain.md, update GR_candidates.md, create source files and download documents.
- 2026-10-05 23:36: Wrote `Sources/Global_Reports/GR_candidates.md` with 19 candidates, a Left out section and a Could not do section. Stage 1 for Global reports is complete; stopped for Marco's vetting as the plan requires.
- 2026-10-05, links opened: Opened all links (curl status and page title; WebFetch for four). Results. OPEN: Eurostat commuting time page, Eurostat passenger mobility page, Eurostat news on interregional commuters (2023-10-17, EU-LFS), ISTAT commuting matrices (census 2011 data only, page dated 2014), Regione Puglia page on Pendolaria (secondary), RailTarget and CER pages on the 2024 Eurobarometer, EUR-Lex 2017/1926, NAPCORE position paper (PDF), Ipsos Europ Assistance barometer, EU Urban Mobility Observatory hubs page, EGUM recommendations (PDF), UITP MaaS and mobility hubs policy briefs (PDF), ART 2025 report (PDF, 12.8 MB), Commission proposal COM(2026) 232 (PDF), Railway Gazette on the passenger package, Have Your Say page, Moovit 2024 press release, regionieambiente page on PoliMi report, OECD MaaS roundtable PDF (via oecd.org/content/dam path), Eurofound ef22011en PDF. UNREADABLE: ISFORT synthesis PDF opens but is image-only (51 pages, title not extractable). BLOCKED (403, bot protection): ITF/OECD web pages, McKinsey, INRIX, PAVE. Eurofound web page 429. Not found: guessed legambiente URL (the real one is below). Europarl page returns empty (202).
- 2026-10-05, links opened: Better originals found: Pendolaria PDF on legambiente.it; Commission press release on the 2024 Eurobarometer (ip_25_928); proposals COM(2026) 231 and 232, impact assessment SWD(2026) 300 and the Commission news item of 2026-05-13.

- 2026-10-05, second batch: Second search batch done (EU Urban Mobility Observatory, UITP, McKinsey, ART, Commission passenger package, Moovit, INRIX, PoliMi, ITF). 13 more links collected, 25 in total. Search is enough for a first list. Next: open every link once with WebFetch (title, publisher, date, scope), drop the ones that fail, then write GR_candidates.md.
- 2026-10-05, first batch: First search batch done (Eurostat, ISTAT, Legambiente, ISFORT, ITF/OECD, Eurobarometer, MMTIS regulation, Eurofound). 12 links collected, none opened yet. Still to search: EU Urban Mobility Observatory, UITP, EEA, consultancy mobility surveys (McKinsey, Deloitte), ART (Italian transport regulator), rail punctuality (ERA), Italian Ministry of Transport, ITF Transport Outlook, EC passenger rights package.
- 2026-10-05 23:33: Marco asked to proceed with the desk research and keep everything tracked, so that work can resume if tokens run out. Model switched to Sonnet 5.5. Starting the Global reports candidate list as agreed in the plan (stage 1).
