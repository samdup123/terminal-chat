'use strict';

const minimist = require('minimist');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  console.log('Welcome to terminal chat!');
  console.log(args);
}