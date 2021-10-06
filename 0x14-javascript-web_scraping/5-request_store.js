#!/usr/bin/node

const args = process.argv.slice(2);
const x = require('request');
const fs = require('fs');
const http = args[0];
const path = args[1];
x.get(http, function (err, response, body) {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(path, body, 'utf-8', function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
});
