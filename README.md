# NASA Mission Control Dashboard
## A dashboard that loads NASA Exoplanet data that parses for habitable planets
---
### Parsing Kepler Space Telescope Data
  * `csv-parse` npm package is used to parse NASA's Kepler Space Telescope data from a 9000+line csv file
  * Planet Data Model is loaded immediately on server state asynchronously through `loadPlanetData()`
  * Use of `fs` to create ReadStream and `.pipe event emitter to transform it to a wratable stream to produce an array of objects of Habitable planets
  * Utilized promises to allows data model to be triggered upon startup and run asynchronously while parsing through the data

---
### Express
  * HTTP server created to pass express app with various router configurations
  * Routers are modular and are separated with `/planets` GET endpoint
  * Express MVC pattern allows for clear flow from Front end making a request on specific route -> Router -> Controller -> Model -> View cycle
  * Handling of CORS to whitelist specific using middleware
---
### React Front End
  * Front end of project built with create react app
  * Styling done with `ARWES` Futuristic Sci-Fi UI
  * Use of hooks, `.fetch` to retrieve data from backend
---
### HTTP Routes
  * `/planets` GET Request: Gets all planets through API GET request from Express server
  * `/launches` GET Request: Gets all NASA launch data through API GET request from Express server
  * `/launches` POST Request (Add launches): Add launch data from `req.body` through API POST request to add user submitted data to data model using a function controller.
  * `launches/:id` DELETE Request: Delete specific launch by launch ID using `req.params` to get from Front end. The API route triggers a controller function which then 
  ```
    await fetch(`${API_URL}/launches`, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(launch),
  }) 
  ```

---
### Custom Scripts for Automation
  * Custom scripts to build optimized version of front end application
  * `npm run deploy` effectively triggers client to build && once complete triggers server to start to serve the files on the same port in public folder on backend
---
### MVC Patterns
  * Separation of Project Architecture: UI, Business Logic, Data Access
