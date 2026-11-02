---
source: Claude
date: 2026-11-02 23:59
method: synthesis
status: draft
grade: n/a
confidence: low
tags: [research, desk, synthesis, planning, disruption, tools, late-info, no-alternative, tight-connection, first-last-mile, hybrid-work, unreliable-service, usual-trip, ticket-carryover, refunds, crowding, workarounds]
related: [03_Generated_Features.md, 01_How_might_we.md, 06_Chosen_concept.md, SPEC-00_overview.md, SPEC-01_foundation.md, SPEC-02_real-state-of-the-run.md, SPEC-03_travellers-report.md, SPEC-04_alerts-on-the-usual-trip.md, SPEC-05_usual-trip-at-a-glance.md, SPEC-06_ways-out-when-the-trip-breaks.md, SPEC-07_those-waiting-are-told.md, SPEC-08_the-connection-ahead.md, SPEC-09_every-way-side-by-side.md, SPEC-10_times-that-can-be-kept.md, SPEC-11_tickets-that-work-when-needed.md, SPEC-12_the-fare-that-fits-the-days.md, SPEC-13_compensation-from-the-trip.md, SPEC-14_the-station-ahead.md, SPEC-15_stop-approaching.md, SPEC-16_the-route-stays-with-the-driver.md, SPEC-17_sessions-still-running.md]
---

# User Stories from the Features

One user story for each feature in [03_Generated_Features.md](03_Generated_Features.md) whose value can be traced to the notes. Who, the moment and the "so that" come from the notes; the capability is the feature's own line and is not extended.

- **Each story is followed by its source line:** feature · note · quote. When the moment and the value come from two passages, both are quoted.
- **Personas:** the interviews give four people (listed below). A feature whose moment no interviewee lives takes the person the desk note describes, marked **(desk persona)**. Reviewers and forum writers are anonymous; they are described only by what the note says about them. Persona names are kept short: the other details are in the table below or in the moment of the story.
- **[strong] and [weak]** and the impact are carried over from the features file; they rate the evidence and the reach of the feature, not the story.
- Quotes are as written in the notes, shortened with "…"; translations are working translations.

## Personas from the interviews

| Persona | From | What the notes say |
| --- | --- | --- |
| The Verona–Milan commuter | [Marco_Palermo_notes](../01_Research/04_Interviews/Marco_Palermo_notes.md) | Travels to Milan the evening before the office day by direct high-speed train, driven to the station by his father; books with a carnet; works or reads on board; someone fetches him at Verona on the way back |
| The Como commuter | [Matteo_Rizzetto_notes](../01_Research/04_Interviews/Matteo_Rizzetto_notes.md) | Lives in Como; drives to the office near Lugano out of habit since the pass stopped paying; takes the train to Milan nine times out of ten; checks only when the day matters |
| The single-line commuter | [Matteo_Rizzetto_notes](../01_Research/04_Interviews/Matteo_Rizzetto_notes.md) | A friend of the participant, as told by him: one train line with no alternative, ten minutes of delay reported at work as leave, three office days a week |
| The outskirts hybrid worker | [Valentina_Di_Floriano_notes](../01_Research/04_Interviews/Valentina_Di_Floriano_notes.md) | Goes to the office on Wednesdays by bicycle or car, suburban train, underground and a walk; plans with an alarm; her brother warns her when the line fails |

## Stories

**[F-01](03_User_Stories/US-F-01_real-state-vehicle-source.md)** [strong · High] As the Como commuter, standing on the platform watching the delay on the board grow from 5 to 10 to 15 minutes while a third-party app shows another time, I want to see where the train really is, when it will really leave and arrive, why it is late and which source says so, so that he knows as early as an unofficial app would tell him.
Source: [F-01](02_Features/F-01_real-state-vehicle-source.md) · [Matteo_Rizzetto_notes](../01_Research/04_Interviews/Matteo_Rizzetto_notes.md) · "a 20 inizio a sentire la puzza, a 25 la puzza si fa più forte e aspetto solo che appaia la scritta annullato" (at 20 I begin to smell it, at 25 the smell is stronger and I only wait for the word cancelled to appear); "Non capisco perché un'app non ufficiale te lo possa dire prima, e tu no" (I do not understand why an unofficial app can tell me earlier and you cannot)

**[F-02](03_User_Stories/US-F-02_ways-still-open-trip.md)** [strong · High] As a teenager (desk persona), waiting late in the evening at a stop for a connecting bus that does not come, I want to see the ways that still run and can be reached from where I am, valid on my ticket or not, with arrival time and cost, so that I know from what point it makes sense to call home and be fetched.
Source: [F-02](02_Features/F-02_ways-still-open-trip.md) · [OF-002](../01_Research/03_Desk_Research/Doc_Notes/Online_Forums/OF-002_eisenbahnforum_2016_eisenbahnforum-reiseerlebnisse-bahn.md) · 'wenn der Bus nicht kommt, dann rufst du an und ich fahre dich mit dem Auto' (if the bus does not come, call and I will drive you); teenagers ask 'ab wann macht es Sinn, sich abholen zu lassen?' (from what point does it make sense to be fetched?)

**[F-03](03_User_Stories/US-F-03_early-warning-usual-trip.md)** [weak · High] As the single-line commuter, during the seven minutes he drives to the station on one of his three office days, I want to be told, only when something changes, of a delay, cancellation, strike or works on my usual train, in time to change the decision to leave, so that he can wait in the warm car if the train is late.
Source: [F-03](02_Features/F-03_early-warning-usual-trip.md) · [Matteo_Rizzetto_notes](../01_Research/04_Interviews/Matteo_Rizzetto_notes.md) · "one notification on the state of the line when he wakes up, and others timed for the seven minutes he drives to the station, so that he can wait in the warm car if the train is late"

**[F-04](03_User_Stories/US-F-04_one-search-one-booking.md)** [strong · High] As the Verona–Milan commuter, booking three or four days ahead and finding the train he wanted sold out, I want every way to make the trip door to door shown with its time and price, and booked as one journey, so that he still finds a train at the time he wants.
Source: [F-04](02_Features/F-04_one-search-one-booking.md) · [Marco_Palermo_notes](../01_Research/04_Interviews/Marco_Palermo_notes.md) · "He books three or four days before, since it has happened that the train he wanted was sold out."; a ticket seller's app as backup "che magari mi fa vedere tutto quanto, tutte le opzioni possibili" (which shows me everything, all the possible options) "when his operator has no train at the time he wants"

**[F-05](03_User_Stories/US-F-05_legs-both-ends-real.md)** [strong · Medium] As a London traveller (desk persona), changing at King's Cross for a train to Luton, when the app says the walk to the platform takes 3 minutes, I want the way to the first stop and from the last one, where to board included, planned and timed at the length it really takes, so that I do not miss the train after running for 10 minutes.
Source: [F-05](02_Features/F-05_legs-both-ends-real.md) · [OR-003](../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-003_apple-app-store_2026_citymapper-gb.md) · 'Missed my train from King's Cross to Luton after running for 10 mins to catch it. App said 3 mins walk'

**[F-06](03_User_Stories/US-F-06_whether-connection-still-holds.md)** [strong · Medium] As the Como commuter, on the 8:23 towards Lugano as the delay grows towards 12 minutes, I want to be told before reaching the change whether the connection still holds and, if not, the next one that does, so that he can warn the people he is meeting before he arrives.
Source: [F-06](02_Features/F-06_whether-connection-still-holds.md) · [Matteo_Rizzetto_notes](../01_Research/04_Interviews/Matteo_Rizzetto_notes.md) · if the delay goes over 12 minutes before Lugano, "io il treno l'ho già perso" (I have already missed the train); "Because he knows the threshold, he can warn the people he is meeting before he arrives."

**[F-07](03_User_Stories/US-F-07_trips-planned-commuter-s.md)** [strong · Medium] As a German rail regular (desk persona), logging every trip and his connections, when the planner offers a change shorter than his own rule, I want the trip planned with my own minimum change time, margin, number of changes and own leg, and to see how tight each connection is, so that he relies only on connections he counts as real and not on "connections on paper".
Source: [F-07](02_Features/F-07_trips-planned-commuter-s.md) · [OF-002](../01_Research/03_Desk_Research/Doc_Notes/Online_Forums/OF-002_eisenbahnforum_2016_eisenbahnforum-reiseerlebnisse-bahn.md) · 'Alles unter 10 Min. Übergangszeit ist für mich kein Anschluss, bzw. reine Papieranschlüsse' (anything under 10 minutes of transfer time is no connection for me, only a connection on paper)

**[F-08](03_User_Stories/US-F-08_ticket-works-moment-needed.md)** [strong · Medium] As the Verona–Milan commuter, still in the underground five minutes before his train leaves, I want to buy, move and show a valid ticket in one step, up to departure and with no signal, so that he can take another train, or travel another day, without losing the ticket.
Source: [F-08](02_Features/F-08_ticket-works-moment-needed.md) · [Marco_Palermo_notes](../01_Research/04_Interviews/Marco_Palermo_notes.md) · "The ticket can be moved in the app, even five minutes before departure, while he is still in the underground": "riesco sempre a spostarlo" (I always manage to move it), "sometimes to another day"; "Flexible tickets are what he values in the tools" (agent's reading in the note)

**[F-09](03_User_Stories/US-F-09_arrival-shared-whoever-waits.md)** [strong · Medium] As the Verona–Milan commuter, on the train back to Verona with his father coming to fetch him at the station, I want to share the train time and the live arrival, with a confirmation of any delay, with the person driving or waiting, so that the person who comes to the station knows when he arrives.
Source: [F-09](02_Features/F-09_arrival-shared-whoever-waits.md) · [Marco_Palermo_notes](../01_Research/04_Interviews/Marco_Palermo_notes.md) · "On board he does check how the train is doing, more on the way back, because someone is coming to fetch him"; "for twenty years his father, who fetches him, has said the trains are always late"

**[F-10](03_User_Stories/US-F-10_car-against-train-office.md)** [strong · Medium] As the Como commuter, looking at the timetables to see whether he can go back from the car to the train, I want the train and the car compared door to door for a given day and departure, on time, cost and arrival home, so that he can see whether the train still brings him back to Como when the working day ends.
Source: [F-10](02_Features/F-10_car-against-train-office.md) · [Matteo_Rizzetto_notes](../01_Research/04_Interviews/Matteo_Rizzetto_notes.md) · "He is looking at the timetables to see whether he can go back to the train"; the car "lets him be back in Como when the working day ends, so that he can" "avere una vita" (have a life); "By train he would be home at about 19:30 with everything still to do."

**[F-11](03_User_Stories/US-F-11_usual-trip-glance.md)** [strong · Low] As a Dutch rail commuter (desk persona), on the way out of the door in the morning, I want the app to open on my usual trip with its state and its platforms, the change included, without searching, so that I know which platform to go to with no extra step.
Source: [F-11](02_Features/F-11_usual-trip-glance.md) · [OR-008](../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-008_apple-app-store_2026_ns-app-nl.md) · 'Als ik in de ochtend vertrek, wil ik snel kunnen zien welk perron ik moet zijn. Fijn om daarvoor geen extra handeling uit te hoeven voeren' (when I leave in the morning I want to see quickly which platform I need, without an extra action)

**[F-12](03_User_Stories/US-F-12_ticket-fits-days-travelled.md)** [strong · Low] As the Como commuter, when his office days fell to about one a week and the pass still cost 70 euro a month, I want to know which pass, carnet or single tickets cost least for the days I actually travel, so that he does not pay for a pass meant for daily travel.
Source: [F-12](02_Features/F-12_ticket-fits-days-travelled.md) · [Matteo_Rizzetto_notes](../01_Research/04_Interviews/Matteo_Rizzetto_notes.md) · "70 euro al mese per andare una volta a settimana" (70 euro a month to go once a week) "was the opposite of what a pass is for"

**[F-13](03_User_Stories/US-F-13_times-commuter-can-plan.md)** [weak · Low] As the Verona–Milan commuter, planning the trip while taking it for granted that his train will be 5 to 15 minutes late, I want to see the trip time and arrival I can expect from works and from how late that train usually is, so that the time he is promised is the time that is kept.
Source: [F-13](02_Features/F-13_times-commuter-can-plan.md) · [Marco_Palermo_notes](../01_Research/04_Interviews/Marco_Palermo_notes.md) · "io do sempre per scontato che [è] in ritardo il treno", by 5 to 15 minutes; timetables "dovrebbero essere molto più laschi con il tempo stimato" (should be much looser with the estimated time): "If the 18:27 were shown as 18:40 nothing would change for him and the train would arrive on time or early"

**[F-14a](03_User_Stories/US-F-14a_asking-before-rerouting-tolls.md)** [weak · Low] Split from F-14. As an Italian driver (desk persona), following a map app, when there is a queue and the app changes the route by itself, or sends him onto a foreign motorway, I want to be asked before the route is changed and warned of the tolls or stickers the route needs, so that he decides the route and is not fined.
Source: [F-14a](02_Features/F-14a_asking-before-rerouting-tolls.md) · [OR-001](../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-001_apple-app-store_2026_google-maps-it.md) · 'Impedire all'applicazione di modificare il percorso da sola ... lui decide per me. Deve rimanere sulla traccia anche se c'e coda se io non gli dico di modificarla' (stop the app changing the route by itself ... it decides for me; it must stay on the route even with a queue unless I tell it to change); routed onto a Slovenian motorway without a warning that a toll sticker was needed, fined 300 euros

**[F-15](03_User_Stories/US-F-15_parking-bike-space-station.md)** [strong · Low] As a woman driving to the station (desk persona), before leaving home for the 8:17 train she takes because she starts later, I want to know whether there is a parking space or a safe bike place at the station and what it costs, so that she does not have to go back to leaving earlier.
Source: [F-15](02_Features/F-15_parking-bike-space-station.md) · [OF-002](../01_Research/03_Desk_Research/Doc_Notes/Online_Forums/OF-002_eisenbahnforum_2016_eisenbahnforum-reiseerlebnisse-bahn.md) · A woman who drives to the station: since she starts later she takes the 8:17 train and 'da finde ich immer nur sehr schwierig einen Parkplatz' … 'wenn ich keinen Parkplatz finde, muss ich halt doch wieder früher fahren' (if I find no parking space I will have to leave earlier again)

**[F-16](03_User_Stories/US-F-16_compensation-claim-started-delayed.md)** [strong · Low] As a British traveller (desk persona), after a delay on a ticket bought through a ticket seller, I want to start the compensation claim from the delayed trip itself, wherever the ticket was bought, so that the compensation does not depend on going to the train company.
Source: [F-16](02_Features/F-16_compensation-claim-started-delayed.md) · [OR-005](../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-005_apple-app-store_2026_trainline-gb.md) · 'if train is delayed, you have to claim directly with the train company referencing your trainline tickets .. complete pain'

**[F-17a](03_User_Stories/US-F-17a_staffed-station-lit-walk.md)** [strong · Low] Split from F-17. As a daily traveller in a British city (desk persona), waiting at a station late at night, I want to know whether the station is staffed and whether the walk at the end is in the dark at the hour I travel, so that the wait at night is not a moment of fear.
Source: [F-17a](02_Features/F-17a_staffed-station-lit-walk.md) · [AP-004](../01_Research/03_Desk_Research/Doc_Notes/Academic_Papers/AP-004_alyavina_2020_mobility-as-service-sustainable.md) · fear at stations late at night ('the train station staff are not there'); [AP-015](../01_Research/03_Desk_Research/Doc_Notes/Academic_Papers/AP-015_mcilroy_2023_this-where-public-transport.md) · a dark walk at the other end

**[F-18](03_User_Stories/US-F-18_parking-works-paying-leaving.md)** [weak · Low] As an Italian driver (desk persona), leaving the car for the day on street parking paid in an app, I want to pay, end and leave the parking without delay and be reminded that a session is still running, so that I do not pay for eight or ten hours by forgetting it.
Source: [F-18](02_Features/F-18_parking-works-paying-leaving.md) · [OR-012](../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-012_apple-app-store_2026_telepass-it.md) · 'non possono mettere un alert ogni ora per far sapere che la sosta e ancora attiva; ogni tanto pago per otto, 10 ore perche mi dimentico' (can they not put an alert every hour to say the parking is still active; sometimes I pay for eight or 10 hours because I forget)

**[F-19](03_User_Stories/US-F-19_how-crowded-next-services.md)** [strong · Low] As the outskirts hybrid worker, at her station when her train is cancelled and the only other train is the packed one to Cadorna, I want to know how full the next services are expected to be, so that she can choose between waiting and a train where "you never get a seat".
Source: [F-19](02_Features/F-19_how-crowded-next-services.md) · [Valentina_Di_Floriano_notes](../01_Research/04_Interviews/Valentina_Di_Floriano_notes.md) · "è stra scomodo perché su quel treno c'è tantissima gente, quindi non si sta mai seduti" (it is very uncomfortable because that train is packed, you never get a seat); "Comfort decides between two routes of the same length. A seat against a crowded train" (agent's reading in the note)

**[F-20](03_User_Stories/US-F-20_step-free-lit-way.md)** [strong · Low] As a wheelchair user (desk persona), before getting off the train at a German station with stairs unlit for two months and no lift, I want to know whether the lifts and lights on my way through the station work today, so that I do not have to ride past my station and come back.
Source: [F-20](02_Features/F-20_step-free-lit-way.md) · [OF-002](../01_Research/03_Desk_Research/Doc_Notes/Online_Forums/OF-002_eisenbahnforum_2016_eisenbahnforum-reiseerlebnisse-bahn.md) · stairs unlit for two months and no lift, a wheelchair user must ride past and come back

**[F-21](03_User_Stories/US-F-21_where-shared-vehicle-can.md)** [weak · Low] As a shared-bike rider in South Korea (desk persona), going home from work, at the end of the ride when the return zone is far or the position is wrong, I want to see where the shared bike can be returned near the destination, so that the charge does not keep running after the ride.
Source: [F-21](02_Features/F-21_where-shared-vehicle-can.md) · [OR-011](../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-011_apple-app-store_2026_kakao-t-kr.md) · return zones few and far, position errors that prevent the return so the charge keeps running ('20,000 won taken'); one uses the bike 'only for going home from work'

**[F-22](03_User_Stories/US-F-22_asking-connection-wait.md)** [weak · Low] As a German rail regular (desk persona), on a late train before the last connection of the day, I want to ask from the train that the connecting service be told, and see the answer, so that the connection waits for him.
Source: [F-22](02_Features/F-22_asking-connection-wait.md) · [OF-002](../01_Research/03_Desk_Research/Doc_Notes/Online_Forums/OF-002_eisenbahnforum_2016_eisenbahnforum-reiseerlebnisse-bahn.md) · 'ich bitte um Vormeldung meines Anschlusses' (I ask for my connection to be reported ahead); 'Twelve trips on a route with two 3-minute transfers, the last connection of the day: all trains on time 1; the connection waited 9 times'

**[F-23](03_User_Stories/US-F-23_stop-approaching.md)** [weak · Low] As a young commuter in Madrid (desk persona), on a bus, two stops before her own, I want to be told when my stop is approaching, so that she can sit without thinking about the stop and not miss it if she falls asleep.
Source: [F-23](02_Features/F-23_stop-approaching.md) · [AP-021](../01_Research/03_Desk_Research/Doc_Notes/Academic_Papers/AP-021_jimenez_2018_user-perception-transfers-multimodal.md) · 'I'd rather sit on the bus than have to be thinking two stops until I have to get off. If I fall asleep I'll miss my stop' (woman, 25, Madrid)

**[F-24](03_User_Stories/US-F-24_travel-information-first-hurry.md)** [weak · Low] As an Italian bus user (desk persona), in a hurry to catch a bus, opening the app at the stop, I want the travel information shown at once, with nothing in front of it, so that a few seconds do not decide whether I catch the bus.
Source: [F-24](02_Features/F-24_travel-information-first-hurry.md) · [OR-002](../01_Research/03_Desk_Research/Doc_Notes/Online_Reviews/OR-002_apple-app-store_2026_moovit-it.md) · 'mi compare la pubblicita obbligatoria da 5/10 secondi non skippabile che mi fa perdere secondi preziosi, che possono anche determinare se prendo o perdo (e successo) un autobus' (a compulsory 5-10 second ad that cannot be skipped makes me lose precious seconds, which can decide whether I catch or miss a bus; it has happened)

## Features sent back: value not traced

These have no story. The notes show the moment, but no outcome the person seeks beyond the absence of the problem itself. They are marked "[value not traced]" in [03_Generated_Features.md](03_Generated_Features.md).

| Feature | Why the value could not be traced |
| --- | --- |
| [F-14b](02_Features/F-14b_state-usual-drive-known.md) The state of the usual drive before and during it, with known works (split from F-14) | One respondent checks a traffic app before leaving and waited in traffic; a driver says the longer time 'was perfectly predictable'. Neither says what they would gain |
| [F-17b](02_Features/F-17b_weather-walk-end-split.md) The weather on the walk at the end (split from F-17) | The walk "non mi pesa" except in the rain or in the summer heat; the note does not say what he would do with a warning |

## Splits

- **F-14** became **[F-14a](02_Features/F-14a_asking-before-rerouting-tolls.md)** (asking before rerouting, and warning of tolls and stickers, with a story) and **[F-14b](02_Features/F-14b_state-usual-drive-known.md)** (the state of the drive before and during it, with known works, sent back). The two halves rest on different moments: a driver whose app reroutes or sends him onto a toll road, and a driver who checks traffic or meets works.
- **F-17** became **[F-17a](02_Features/F-17a_staffed-station-lit-walk.md)** (a staffed station and a lit walk, with a story) and **[F-17b](02_Features/F-17b_weather-walk-end-split.md)** (the weather on the walk, sent back). Fear at night and rain on the walk are different moments with different evidence.

## A part with no traced value of its own

- **[F-02](02_Features/F-02_ways-still-open-trip.md), cost.** The story carries the whole feature, and its value (knowing when to be fetched) is traced. The cost shown with each way out has no sought outcome of its own in the notes: they record what people paid (600 euros, 71.75 euros, 63 euros), not a wish to know it beforehand. It is left in the feature for Marco to decide.

## Counts

- **Features in:** 26 after the two splits (24 + 2).
- **Stories:** 24. **Sent back:** 2.
- **Personas:** 10 stories rest on a persona from the interviews (Verona–Milan commuter 4, Como commuter 4, single-line commuter 1, outskirts hybrid worker 1); 14 on a desk persona.
- **[strong] stories:** 16 of 24.

## Decisions taken

- **Desk personas.** The prompt asks for a persona from the interviews. Only 10 features are lived by an interviewee; for the others the person comes from the desk note and is marked. Set aside: forcing an interview persona onto a moment that person never described, which would invent the circumstance.
- **One moment for a broad feature.** The features answer up to 13 touchpoints each. A story carries the whole capability through one moment, the one where the note gives both the circumstance and the outcome sought.
- **What counts as a traced value.** A "so that" is kept when the note states an outcome the person seeks or protects (knowing in time, not being fined, a seat, getting home). It is not kept when the only outcome would be the feature working.
- **When to split.** A feature is split when it joins two moments with different evidence and only one of them shows a sought outcome; otherwise the story carries the whole feature.

## Connections

- [03_Generated_Features.md](03_Generated_Features.md) holds the features these stories carry, with the touchpoints and the evidence behind each.
- [01_How_might_we.md](../03_Ideation/01_How_might_we.md) holds the questions written from these stories.
- [06_Chosen_concept.md](../03_Ideation/06_Chosen_concept.md): the chosen concept, built on the questions written from these stories.
- [SPEC-00_overview.md](../04_Specifications/SPEC-00_overview.md), [SPEC-01_foundation.md](../04_Specifications/SPEC-01_foundation.md), [SPEC-02_real-state-of-the-run.md](../04_Specifications/SPEC-02_real-state-of-the-run.md), [SPEC-03_travellers-report.md](../04_Specifications/SPEC-03_travellers-report.md), [SPEC-04_alerts-on-the-usual-trip.md](../04_Specifications/SPEC-04_alerts-on-the-usual-trip.md), [SPEC-05_usual-trip-at-a-glance.md](../04_Specifications/SPEC-05_usual-trip-at-a-glance.md), [SPEC-06_ways-out-when-the-trip-breaks.md](../04_Specifications/SPEC-06_ways-out-when-the-trip-breaks.md), [SPEC-07_those-waiting-are-told.md](../04_Specifications/SPEC-07_those-waiting-are-told.md), [SPEC-08_the-connection-ahead.md](../04_Specifications/SPEC-08_the-connection-ahead.md), [SPEC-09_every-way-side-by-side.md](../04_Specifications/SPEC-09_every-way-side-by-side.md), [SPEC-10_times-that-can-be-kept.md](../04_Specifications/SPEC-10_times-that-can-be-kept.md), [SPEC-11_tickets-that-work-when-needed.md](../04_Specifications/SPEC-11_tickets-that-work-when-needed.md), [SPEC-12_the-fare-that-fits-the-days.md](../04_Specifications/SPEC-12_the-fare-that-fits-the-days.md), [SPEC-13_compensation-from-the-trip.md](../04_Specifications/SPEC-13_compensation-from-the-trip.md), [SPEC-14_the-station-ahead.md](../04_Specifications/SPEC-14_the-station-ahead.md), [SPEC-15_stop-approaching.md](../04_Specifications/SPEC-15_stop-approaching.md), [SPEC-16_the-route-stays-with-the-driver.md](../04_Specifications/SPEC-16_the-route-stays-with-the-driver.md), [SPEC-17_sessions-still-running.md](../04_Specifications/SPEC-17_sessions-still-running.md): the specifications written from these stories; the story-to-specification table is in SPEC-00_overview.md.
