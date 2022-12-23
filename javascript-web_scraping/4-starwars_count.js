#!/usr/bin/node

const req = require('request');
const url = process.argv[2];
req.get(url, (error, res, body) => {
  if (error) console.log(error);
  else {
    let count = 0;
    const films = JSON.parse(body).results;
    films.forEach(film => {
      film.characters.forEach(character => {
        if (character.includes('people/18/')) {
          count++;
        }
      });
    });
    console.log(count);
  }
});
