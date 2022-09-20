const eqArrays = require("./eqArrays.js");

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`🟩🟩🟩  Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🟥🟥🟥  Assertion Failed: ${arrOne} !=== ${arrTwo}`);
  }
};

module.exports = assertArraysEqual;

/*
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
*/