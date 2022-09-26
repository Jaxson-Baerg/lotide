const eqArrays = require("./eqArrays.js"); // Pull eqArrays function to test if arrays equal

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) { // Call eqArrays function
    console.log(`🟩🟩🟩  Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🟥🟥🟥  Assertion Failed: ${arrOne} !=== ${arrTwo}`);
  }
};

module.exports = assertArraysEqual; // Export assert function to use elsewhere

/*
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
*/