#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

request(`https://swapi-api.hbtn.io/api/films/${movieId}/`, function(error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const movie = JSON.parse(body);
    const characterUrls = movie.characters;
    const characters = new Array(characterUrls.length).fill(null);
    
    const printCharacters = function() {
      characters.forEach(function(character) {
        console.log(character.name);
      });
    };
    
    characterUrls.forEach(function(characterUrl, index) {
      request(characterUrl, function(error, response, body) {
        if (error) {
          console.error(error);
        } else {
          const character = JSON.parse(body);
          characters[index] = character;
          
          if (!characters.includes(null)) {
            printCharacters();
          }
        }
      });
    });
  }
});

