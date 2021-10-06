#!/usr/bin/node
const fs = require('fs');
const args = process.argv;
const filename = args[2];
const text = args[3];
fs.writeFile(filename, text, 'utf-8', function (err) {
  if (err) {
    console.log(err);
  }
});
