const assertEqual = require("./assertEqual.js");

const head = function(data) {
  return data[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");