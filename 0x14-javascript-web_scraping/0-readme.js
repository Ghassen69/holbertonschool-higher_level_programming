#!/usr/bin/node
const fs = require('fs');
const args = process.argv;
const filename = args[2];
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
