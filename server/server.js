const express = require("express");
const app = express();
const expressWs = require("express-ws")(app);

const users = [];

app.get("/", function(req, res, next) {
  console.log("get route", req.testing);
  res.end();
});

app.ws("/:username", function(ws, req) {
  if (!users.includes(req.params.username)) {
    users.unshift(req.params.username);
    console.log(users);
  }

  ws.on("message", function(msg) {
    console.log(msg);
    ws.send("hey");
  });
});

app.listen(3000);
