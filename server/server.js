const express = require("express");
const app = express();
const expressWs = require("express-ws")(app);

const users = [];

app.get("/", function(req, res, next) {
  console.log("get route", req.testing);
  res.end();
});

app.ws("/:username", function(ws, req) {
  console.log("new chatter ", req.params.username);
  
  if (!users.includes(req.params.username)) {
    users[req.params.username] = ws;
  }

  ws.on("message", function(msg) {
    console.log(msg);
    const contents = msg.split(":");
    const recipient = contents[0];
    const text = contents[1];

    // ws.send("hey");
    users[recipient].send(text);
  });
});

app.listen(3000);
