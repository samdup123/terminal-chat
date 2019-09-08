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
    console.log("Begin chatting with " + friend);

    connection.on("error", function(error) {
      console.log("Connection Error: " + error.toString());
    });

    connection.on("close", function() {
      console.log("Connection closed :(");
    });

    connection.on("message", function(message) {
      if (message.type === "utf8") {
        if (message.utf8Data == "nack") {
          console.log('\tNotReceived');
        } else if (message.utf8Data != "ack"){
          console.log(friend + ": " + message.utf8Data);
        }
      }
    });

    rl.on("line", input => {
      connection.sendUTF(friend + ":" + input);
    });
  });

  client.connect("ws://localhost:3000/" + me, "echo-protocol");
};
