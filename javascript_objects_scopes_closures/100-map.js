#!/usr/bin/node
const data_list = require('./100-data').list;
console.log(data_list);
let i = 0;
const my_list = data_list.map(m => m * i++);
console.log(my_list);