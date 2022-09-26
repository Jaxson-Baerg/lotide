const assertArraysEqual = require("./assertArraysEqual.js"); // Pull assert function for test cases

const tail = function(data) {
  return data.slice(1); // Return all elements after the first
};

/*
assertArraysEqual(tail([1, 2, 3]), [2, 3]);
*/