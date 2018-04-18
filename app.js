const express = require("express");
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());


// this displays ALL tables
app.get("/", (request, response) => {
  queries
    .list("rmcup")
    .then(rmcup =>
      queries.list("rmcup").then(rmcup =>
        response.json({
          matches: matches,
          champions: champions,
          goals: goals,
          shutouts: shutouts
        })
      )
    )
    .catch(console.error);
});

// shows the matches table
app.get("/matches", (request, response) => {
  queries
    .list("matches")
    .then(rmcup => {
      response.json({ rmcup });
    })
    .catch(console.error);
});
// shows the champions table
app.get("/champions", (request, response) => {
  queries
    .list("champions")
    .then(rmcup => {
      response.json({ rmcup });
    })
    .catch(console.error);
});
// shows the goals table
app.get("/goals", (request, response) => {
  queries
    .list("goals")
    .then(rmcup => {
      response.json({ rmcup });
    })
    .catch(console.error);
});
// shows the shutouts table
app.get("/shutouts", (request, response) => {
queries
  .list("shutouts")
  .then(rmcup => {
    response.json({ rmcup });
  })
  .catch(console.error);
});



// gets the matches table by name
// app.get("/matches/", (request, response) => {
//   queries
//     .read(request.params.name, "matches")
//     .then(matches => {
//       matches ? response.json({ matches }) : response.sendStatus(404);
//     })
//     .catch(console.error);
// });

// gets the champions table by name
// app.get("/champions/:name", (request, response) => {
//   queries
//     .read(request.params.name, "champions")
//     .then(champions => {
//       champions ? response.json({ champions }) : response.sendStatus(404);
//     })
//     .catch(console.error);
// });

// adds to the matches table
// app.post("/matches", (request, response) => {
//   queries
//     .create(request.body, "matches")
//     .then(matches => {
//       response.status(201).json({ matches });
//     })
//     .catch(console.error);
// });

// adds to the champions table
// app.post("/champions", (request, response) => {
//   queries
//     .create(request.body, "champions")
//     .then(champions => {
//       response.status(201).json({ champions });
//     })
//     .catch(console.error);
// });

// deletes the matches table by name
// app.delete("/matches/:name", (request, response) => {
//   queries
//     .delete(request.params.name, "matches")
//     .then(() => {
//       response.sendStatus(204);
//     })
//     .catch(console.error);
// });

// deletes the champions table by name
// app.delete("/champions/:name", (request, response) => {
//   console.log(request.params.name)
//   queries
//     .delete(request.params.name, "champions")
//     .then(() => {
//       response.sendStatus(204);
//     })
//     .catch(console.error);
// });

// updates the matches table by name
// app.put("/matches/:name", (request, response) => {
//   queries
//     .update(request.params.name, request.body, "matches")
//     .then(matches => {
//       response.json({ matches });
//     })
//     .catch(console.error);
// });
// updates the champions table by name
// app.put("/champions/:name", (request, response) => {
//   queries
//     .update(request.params.name, request.body, "champions")
//     .then(champions => {
//       response.json({ champions });
//     })
//     .catch(console.error);
// });

// it hit none of the paths
app.use((request, response) => {
  response.sendStatus(404);
});

module.exports = app;
