---
source: Claude
date: 2026-10-28 11:37
method: generated
status: draft
grade: n/a
confidence: n/a
tags: [research, internal, script]
related: [plan.md, open_issues.md, posting_venues.md]
---

# Commuter Survey: English Version

The reference text of the survey: 24 questions, 22 closed and 2 open and optional, about 5 minutes. The other language versions are translations of this file. Where to post it is in [posting_venues.md](posting_venues.md).

## Commuting between towns and cities: a 5-minute survey

> I am a designer studying how people commute between towns or cities. This survey takes about 5 minutes and is anonymous: no name or e-mail is asked. Thank you.

### A. Your commute

**1. Do you travel regularly between two different towns or cities for work or study?**

- Yes, at least once a week
- Yes, a few times a month
- No *(end of survey)*

**2. How long does one trip take, from your door to your destination?**

- Less than 30 minutes
- 30 to 59 minutes
- 60 to 89 minutes
- 90 to 120 minutes
- More than 2 hours

**3. In which country do you commute?**

- Italy
- Germany
- France
- Switzerland
- Netherlands
- Belgium
- Austria
- Spain
- United Kingdom
- Another European country
- Outside Europe
- I cross a border

### B. You and your week

**4. How many days do you make this trip in a normal week?**

- 1
- 2
- 3
- 4
- 5 or more
- It changes every week

**5. Who decides on which days you travel?**

- My employer or school fixes them
- My team agrees them
- I choose
- It depends on the week

**6. What happens if you arrive 20 minutes late?**

- Nothing, my hours are flexible
- I have to tell someone, but there is no consequence
- It is a real problem (clocking in, shifts, lessons, customers)

**7. If the trip fails completely, can you work or study from home that day?**

- Yes, always
- Sometimes
- No

### C. Your trip, piece by piece

**8. Which of these do you use on a normal trip, in one direction?** *(tick all that apply)*

- Walking for more than 5 minutes
- Bicycle or scooter, my own
- Shared bicycle or scooter
- Car, as driver
- Car, as passenger or with a lift
- Carpooling with colleagues or an app
- Local bus, tram or underground
- Regional or suburban train
- Long-distance or high-speed train
- Coach
- Taxi or ride-hailing

**9. How many times do you change vehicle on one trip?**

- Never
- Once
- Twice
- Three times or more

**10. Which part takes the most effort or worry?**

- Getting from home to the first stop or station
- The main part of the trip
- Changing from one vehicle to another
- Getting from the last stop or station to my destination
- Parking
- No part in particular

**11. Could you make the same trip in another way?**

- Yes, and I sometimes do
- Yes, but I never do
- Not really: this is the only way that works

### D. Before you leave

**12. Before leaving, do you check whether your trip is running normally?**

- Always
- Only when the day is important
- Rarely
- Never: I find out on the way

**13. What do you use to check?** *(tick all that apply)*

- The operator's own app or website
- A general map app
- Another journey planner or train-tracking app
- A navigation app for traffic
- Messages from colleagues, friends or family
- Social media or a commuters' group
- Screens and announcements at the stop or station
- Nothing
- Other: …

**14. Do you receive automatic alerts about your usual trip?**

- Yes, and they are useful
- Yes, but I ignore them
- No, but I would like them
- No, and I do not want them
- I did not know it was possible

**15. When two sources say different things, which do you believe?**

- The operator's app
- Another app
- The screens at the station
- Staff
- Other travellers
- My own experience
- It has never happened to me

### E. When something goes wrong

**16. In the last month, how often did a trip not go as planned?**

- Never
- Once or twice
- About once a week
- Several times a week

**17. What went wrong the last time?** *(tick all that apply)*

- Delay of public transport
- Cancellation
- A missed connection
- Traffic or an accident on the road
- No parking space
- A strike
- A crowded vehicle I could not board
- The first or last part of the trip (bus, bike, lift) failed
- Nothing went wrong recently
- Other: …

**18. When did you find out?**

- Before leaving home
- On the way to the stop or station
- At the stop or station
- During the trip
- Nobody told me: I worked it out myself

**19. What did you do?**

- Waited
- Took another route by public transport
- Switched to the car
- Took a taxi or asked for a lift
- Went back or stayed at home
- Other: …

**20. Do you have a backup plan ready for this trip?**

- Yes, I know exactly what I would do
- More or less
- No

### F. Tickets and what bothers you

**21. What do you pay with for the main part of the trip?**

- Monthly or annual pass
- Carnet or multi-trip ticket
- Single tickets
- Fuel, tolls and parking
- My employer pays
- A mix

**22. Which of these bother you most?** *(pick up to three)*

- Delay or cancellation information that is late or wrong
- No help or alternative when something is cancelled
- Connections that are too tight or do not wait
- Getting to the first stop or from the last one
- A pass or ticket that does not fit the days I travel
- The service itself: delays, cancellations, missing runs
- Not being able to see my usual trip at a glance
- Tickets that are not valid on another operator or service
- Refunds and compensation
- Crowded vehicles
- Traffic and parking
- Cost
- Nothing in particular

### G. In your words

**23. If you could change one thing about your commute, what would it be?** *(optional)*

**24. Is there a trick or personal rule you use to make the trip work?** *(optional)*

## Notes for building the form

- Questions 8, 13 and 17 are multiple choice; 22 allows up to three answers; question 3 is a drop-down list; all the others take one answer.
- "Other" with a short text field only on questions 13, 17 and 19.
- Respondents who answer "No" to question 1 leave the survey; those under 30 minutes in question 2 stay and are analysed apart.
- The options of question 22 are the pain-point tags of `../../00_Intro/Metadata/metadata_schema.md`, plus traffic, parking and cost. Shuffle their order in the form settings.
- No contact is asked and there is no follow-up conversation: Marco will not have the time for it.
- Use one form per language and one link per posting venue, to know where the answers come from.
- `build_google_forms.gs` in this folder creates the forms in Google Forms from these texts, one language per run.
- Test with three people before posting, and time them.

## What each block is for

| Block | Questions | Open issues of `../open_issues.md` |
| --- | --- | --- |
| A | 1–3 | Screening |
| B | 4–7 | Q-01, Q-05 |
| C | 8–11 | Q-02, Q-09 |
| D | 12–15 | Q-04, Q-08 |
| E | 16–20 | Q-06, Q-13 |
| F | 21–22 | Q-10, Q-11 |
| G | 23–24 | Open, optional |

## Connections

Links to the notes this file rests on. The same files are listed by name in the `related` field of the metadata block.

- Each block of questions answers open issues listed in [open_issues.md](../open_issues.md).
- It is the survey activity of the research plan, [plan.md](../plan.md).
- [posting_venues.md](posting_venues.md) lists where to post it, by language.
