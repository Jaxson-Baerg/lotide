const assertArraysEqual = require("./assertArraysEqual.js"); // Pull assert functions for test cases
const assertEqual = require("./assertEqual.js");

const letterPositions = function(str) {
  letters = str.split(""); // Split passed string into letters
  positions = {}; // Initialize return object

  for (let i = 0; i < letters.length; i++) { // Loop through each letter
    if (!positions[letters[i]]) { // Initialize key if undefined
      positions[letters[i]] = [];
    }
    positions[letters[i]].push(i); // Push into key array
  }
  delete positions[" "]; // Remove the space key from returned object
  return positions;
};

/*
const temp = letterPositions("lighthouse in the house");

assertArraysEqual(temp["i"], [1, 11]);
assertArraysEqual(temp["h"], [3, 5, 15, 18]);
assertArraysEqual(temp["e"], [9, 16, 22]);
assertEqual(temp[" "], undefined);
*/