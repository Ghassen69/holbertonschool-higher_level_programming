#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

request(`https://swapi-api.hbtn.io/api/films/${movieId}/`, function(error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const movie = JSON.parse(body);
    const characterUrls = movie.characters;

    characterUrls.forEach(function(characterUrl) {
      request(characterUrl, function(error, response, body) {
        if (error) {
          console.error(error);
        } else {
          const character = JSON.parse(body);
          console.log(character.name);
        }
      });
    });
  }
});

