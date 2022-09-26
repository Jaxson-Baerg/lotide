const assertEqual = require("./assertEqual.js"); // Pull assert function for test cases

const head = function(data) {
  return data[0]; // Return first element of passed array
};

/*
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
*/