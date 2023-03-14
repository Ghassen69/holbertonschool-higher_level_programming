#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, function(error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const todos = JSON.parse(body);
    const completedTasksByUser = {};

    todos.forEach(function(todo) {
      if (todo.completed) {
        if (completedTasksByUser[todo.userId]) {
          completedTasksByUser[todo.userId]++;
        } else {
          completedTasksByUser[todo.userId] = 1;
        }
      }
    });

    console.log(completedTasksByUser);
  }
});

