---
source: Claude
date: 2026-10-06 00:40
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

| Stage | Category | Status |
| --- | --- | --- |
| Candidate list | Global reports | Done and vetted: Marco kept all. 26 source files (GR-001 to GR-026) and 4 article source files (AR-001 to AR-004) written, 19 documents in `docs/` |
| Candidate list | Academic papers | Not started |
| Candidate list | Products | Not started |
| Candidate list | Articles | Not started |
| Candidate list | Online forums | Not started |
| Candidate list | Online reviews | Not started |
| Activities A1–A8 | All | Not started. A1 (global reports output) is next once Marco decides |

## Scope

From 2026-10-06 the scope is Western countries and the more advanced countries of the rest of the world that resemble the West (details in section 3 of `desk_research_instructions.md`). Marco asked for it because he is not sure that what was found in Europe is valuable, mainly for technology solutions and pain points. Every candidate list covers the wider scope; the Global reports list was extended first.

## Languages

From 2026-10-06, sources in languages other than English are in scope and are searched for in their own language (German, French, Spanish, Japanese, Korean and so on), together with the wider geographic scope. Rules in section 3 of `desk_research_instructions.md`. Existing source files do not have the "Language" row yet: add it when each file is next touched.

## To install (before searching in other languages)

Not installed yet. Marco asked to note them; install only when needed.

- **OCR language data for `tesseract`**, for scanned PDFs in other languages. Only English, Italian and the orientation data are installed now. Either install all languages with `brew install tesseract-lang` (large), or download only the ones needed, as was done for Italian, by saving `<code>.traineddata` from the `tessdata_fast` repository of tesseract-ocr into `/opt/homebrew/share/tessdata`. Codes: `deu` German, `fra` French, `spa` Spanish, `nld` Dutch, `por` Portuguese, `swe` Swedish, `nor` Norwegian, `fin` Finnish, `jpn` and `jpn_vert` Japanese, `kor` Korean, `chi_sim` and `chi_tra` Chinese. Codes are from memory; check them with `tesseract --list-langs` after installing. Then add the language to the `language` argument of the OCR call in the conversion recipe below.
- **Text conversion of PDFs in other languages** needs nothing more: `pymupdf4llm` reads Unicode text, and only scanned pages need OCR.
- **Translation** needs no plugin: Claude translates the passages. For Marco's own reading of web pages, the browser's built-in page translation is enough.

## Next step

Wait for Marco to vet the 14-candidate extension at the end of `Sources/Global_Reports/GR_candidates.md` (column "Keep?"). Then create the source files and download documents only for the sources he keeps (next IDs: GR-027 onwards), convert the PDFs to Markdown, and decide with him whether to write A1 or draft the next candidate list. The other candidate lists (Academic papers, Products, Articles, Online forums, Online reviews) must also cover the wider scope.

Marco is trying to obtain the items in `Sources/Global_Reports/GR_to_obtain.md`; when he provides files, save them in `docs/` with the naming rule, and create or update the source file.

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
