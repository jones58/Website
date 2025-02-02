# TODO:

## Frontend

### Improve Design

- Keep improving components and pages.

  - Improve share component on map - hovers
  - Maybe: Skip sign in button, incl. get rid of protected routes for now just so people can see the app.
  - Make it so calculating solar potential actually changes the community energy again.

- NB. Defaults
  - #b91c1c red
  - #16a34a green
  - #d97706 yellow
  - text-neutral-800 instead of black
  - neutral-900 bg, or red-50 or red-100
  - neutral-50 instead of white

## Backend

### Data

- Connect solar api potential (as stored json for now) and use to change the value of community energy chart json

- Work out how to integrate these python functions:

  - If you go to https://github.com/PlutoPowerClub/LibreGrid/blob/main/LibreGrid/core.py, these are the functions one could use to get data for the dashboard. More context is however in the notebook I used to write these, https://github.com/PlutoPowerClub/LibreGrid/blob/main/nbs/00_core.ipynb , there's an example workflow on how to set up the database. That might be nice for pulling data.
  - Let me know what you think and what other functionalities I could add to the database so that it can support some of the plots

  [python serverless functions](https://www.reddit.com/r/nextjs/comments/1brms6j/python_serverless_function_with_next_js/)

- Usage - dummy data or phil’s meter, work on connecting up

### Sign in page

- If time, work out how to set up custom sign in page for AWS Cognito with NextAuth - using AWS Amplify and amazon-cognito-identity-js. This is a backend thing so not super important.
- User journey after that:
  -How to join the individual households into an area (Persons A, B, and C have their own login with their own data and data on community A, Persons D, E, F have their own login and data and data on community B)
  - might be good to map this out

### Privacy Policy page

- How to explain the collection of data

### Stats for Nerds page

- Data explanation
- Add a suggestion form which feeds into airtable or something.

### Sign up page

- Mirror design of sign in page

### Main Dashboard

- Think about whether to have energy generated from solar on there, or just in terms of use (e.g. percentage of use is solar)
  -and whether to have energy sold or whether this is just abstracted

- Steps:
  c) How to gather data from one household:
  ci) On what energy is used, what is sold, what is stored
  cii) On what is generated by solar and what is generated by fossil fuels
  ciii) and then display it in a pie chart
  d) Decide what an area is define as
  e) How to get data from an area:
  ei) On what energy is used, what is sold, what is stored
  eii) On what is generated by solar and what is generated by fossil fuels
  eiii) and then display it in a pie chart

### Community Cashback (component and build out page)

- having solar and how that money can go into community projects, eg. this much is needed to put solar on the school, on the hospital etc.

- If everyone had solar, take average size of roof, then you would all save this much money. Have this idea reflected on community map - that page should show what happens to community total when more of energy is solar etc. (ie not just this percentage of your community's energy is solar).

- improve this so it has like a thermometer on its side thing for a goal, and then link to another page to vote and set what that goal is. Donation goal, thermometer like thing like 10% of way to goal for community project
- Page:
  Building A Solar Community

  Choice of projects:

  Solar panels for local school

  Solar panels for my neighbour

  Solar panel farm

  Solar panels for a community project (community garden/food bank/playground)

  Make your own solar project

  Each project has a money goal (three options: A) a boilerplate estimate B) a tool to help estimate by the user inputting data C) the user can input their own estimate)

  An estimate of goal completion time (changed as more data comes in)

  You can vote on projects to complete as a community

  Links to businesses that will build these projects on a discount (they buy into the scheme with Octopus)

  Links to government website on solar grants

Steps:
f) How much these different projects will cost on average to get the boilerplate estimate
fi) What you will need to find out to have users input their date (such as area of where solar panels will be) (not a priority)
fii) How to get someone to input a value themselves and for it to show to the whole community (not a priority)

fiii) How to display the data found in ei (how much energy is sold)

fiv) How to have a voting feature (not a priority)

fv) Based on data gathered, say, in a week, the average time it will take to complete the money goal

e.g. £10 earned from selling energy in 7 days. If £100 is needed for the project, it will, on average, take 70 days. (not a priority)

g) Find links to local businesses (maybe fake ones for now)
gi) Find links to government website on solar grants

### Tips Page

- Fill out properly
- Could include:
  - When to store energy (bar graph) (changes with more data)
    - Find data on best time to store energy (not a priority)
    - How to display this on a bar graph
  - When to sell energy (bar graph) (changes with more data)
    - Find data on the best times to sell energy
    - How to display this on a bar graph

### Map Page

- Edit map
  - add map controls like on brutalist map
  - some of buildings should be green on start on map - ones with solar.
  - use live building data instead of geojson - think about how to get this with geojson and
  - edit into separate components.
  - use next js server action when update data with click on map ([see here](https://www.youtube.com/watch?v=O94ESaJtHtM))
- Grab weather forecast from api endpoint.
- Community cashback could be a slider, like gameshow thing, or like to total value

## Other ideas

- Focus on bits that people could actually use? Like the estimation part of how much it would cost for something and how long it would take
  - research on average energy generated by an average solar panel in a day
  - average money saved by selling this energy to the grid
  - average cost of a certain project (like a community garden, or a value you can input yourself)
- Tools to pad it out
  - tool to find the optimum placement of a solar panel
  - suncalc which is useful (shows where the sun is), maybe that can be integrated somehow
- embeds (like how you can view a part of Google maps in a website)

  - [Global Solar Atlas](https://globalsolaratlas.info/map?c=14.857133,7.22495,2) -[Suncalc](https://www.suncalc.org/#/27.6936,-97.5195,3/2024.11.26/18:37/1/3) -[SolarWizard](https://solarwizard.org.uk/)
  - Spotlighting solar energy projects page.
  - news feed on solar energy news

**N.B. to edit deployed site have to sync fork in jack repo**
