#!/usr/bin/node
const args = process.argv;
const URL = args[2];
const request = require('request');
request(URL, function (err, response) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('code:', response.statusCode);
});
