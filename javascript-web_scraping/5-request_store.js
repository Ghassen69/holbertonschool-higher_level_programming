#!/usr/bin/node

const req = require('request');
const fs = require('fs');

req.get(process.argv[2], (error, res, body) => {
  if (error) console.log(error);
  else {
    fs.writeFile(process.argv[3], body, 'utf8', (error) => {
      if (error) console.log(error);
    });
  }
});
