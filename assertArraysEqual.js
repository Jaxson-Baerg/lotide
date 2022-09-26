const eqArrays = require("./eqArrays.js"); // Pull eqArrays function to test if arrays equal

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) { // Call eqArrays function
    console.log(`🟩🟩🟩  Assertion Passed: ${arrOne} === ${arrTwo}`);
    return true;
  } else {
    console.log(`🟥🟥🟥  Assertion Failed: ${arrOne} !=== ${arrTwo}`);
    return false;
  }
};

module.exports = assertArraysEqual; // Export assert function to use elsewhere