"use strict";

const Client = require("./client/client");

const minimist = require("minimist");

module.exports = () => {
  const args = minimist(process.argv.slice(2));

  console.log("Welcome to terminal chat!");
  console.log(args);

  if (args._.includes("login") && args.me && args.friend) {
    Client(args.me, args.friend);
  }
};
