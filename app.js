const express = require("express");
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
// middleware
app.use(cors());
app.use(bodyParser.json());



// this displays both tables
app.get("/", (request, response) => {
  queries
    .list("matches")
    .then(matches =>
      response.json({
        matches: matches
      })
    )
    .catch(console.error);
});
// shows the games table
app.get("/matches", (request, response) => {
  queries
    .list("matches")
    .then(capstone => {
      response.json({ capstone });
    })
    .catch(console.error);
});
// gets the games data table by location name
// app.get("/matches/:location", (request, response) => {
//   queries
//     .read(request.params.location, "games")
//     .then(games => {
//       games ? response.json({ games }) : response.sendStatus(404);
//     })
//     .catch(console.error);
// });

// it hit none of the paths
app.use((request, response) => {
  response.sendStatus(404);
});
// export entire app
module.exports = app;
