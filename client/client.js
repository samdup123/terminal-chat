module.exports = (me, friend) => {
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const WebSocketClient = require("websocket").client;

  const client = new WebSocketClient();

  client.on("connectFailed", function(error) {
    console.log("Connect Error: " + error.toString());
  });

  client.on("connect", function(connection) {
    console.log("WebSocket Client Connected");

    connection.on("error", function(error) {
      console.log("Connection Error: " + error.toString());
    });

    connection.on("close", function() {
      console.log("echo-protocol Connection Closed");
    });

    connection.on("message", function(message) {
      if (message.type === "utf8") {
        console.log(friend + ": " + message.utf8Data);
      }
    });

    rl.on("line", input => {
      connection.sendUTF(friend + ":" + input);
    //   process.stdout.write("me: ");
    });
    // process.stdout.write("me: ");
  });

  client.connect("ws://localhost:3000/" + me, "echo-protocol");
};
