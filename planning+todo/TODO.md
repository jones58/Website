- Convert charts to receive json which is stored in Redux. Use Redux persist to persist databse between sessions.
- Zuzana’s stuff:
  - connect solar api potential (at least stored json)
  - work out how to integrate these python functions within js. Might be easiest to just rewrite as js
  - If you go to https://github.com/PlutoPowerClub/LibreGrid/blob/main/LibreGrid/core.py, these are the functions one could use to get data for the dashboard. More context is however in the notebook I used to write these, https://github.com/PlutoPowerClub/LibreGrid/blob/main/nbs/00_core.ipynb , there's an example workflow on how to set up the database. That might be nice for pulling data.
  - Let me know what you think and what other functionalities I could add to the database so that it can support some of the plots
  - I have to admit though... can't say all this stuff is very thoroughly tested... (dw about for now)
- usage - dummy data or phil’s meter, work on connecting up

## **N.B. to edit deployed site have to sync fork in jack repo**

Not essential for now

- edit map
  - add map controls like on brutalist map
  - some of buildings should be green on start on map - ones with solar.
  - use live building data instead of geojson - think about how to get this with geojson and
  - edit into separate components.
  - use next js server action when update data with click on map ([see here](https://www.youtube.com/watch?v=O94ESaJtHtM))
- grab weather forecast from api endpoint.
- community cashback could be a slider, like gameshow thing, or like to total value
- deploy on actual domain before sending to community energy groups maybe
- community page full height like dashboard screen
- Styling
  - make full size on desktop
  - make mobile friendly, start with iphone se and work up.