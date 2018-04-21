const express = require("express");
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());


// app.get("/", (request, response) => {
//   queries
//     .list("matches")
//     .then(matches =>
//       response.json({
//         matches: matches,
//       })
//     )
//     .catch(console.error);
// });
// app.get("/", (request, response) => {
//   queries
//     .list("champions")
//     .then(champions =>
//       response.json({
//         champions: champions,
//       })
//     )
//     .catch(console.error);
// });

// database named rm cup
// four tables
// matches
// champions
// goals
// stutouts



// shows the managers table
app.get("/matches", (request, response) => {
  queries
    .list("matches")
    .then(matches => {
      response.json({
        matches
      });
    })
    .catch(console.error);
});
// shows the managers table
app.get("/champions", (request, response) => {
  queries
    .list("champions")
    .then(champions => {
      response.json({
        champions
      });
    })
    .catch(console.error);
});

// shows the managers table
app.get("/shutouts", (request, response) => {
  queries
    .list("shutouts")
    .then(shutouts => {
      response.json({
        shutouts
      });
    })
    .catch(console.error);
});

// shows the managers table
app.get("/goals", (request, response) => {
  queries
    .list("goals")
    .then(goals => {
      response.json({
        goals
      });
    })
    .catch(console.error);
});

// it hit none of the paths
app.use((request, response) => {
  response.sendStatus(404);
});
// export entire app
module.exports = app;
