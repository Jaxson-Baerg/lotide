const assertArraysEqual = require("./assertArraysEqual.js");
const eqArrays = require("./eqArrays.js");

const letterPositions = function(str) {
  letters = str.split("");
  positions = {};

  for (let i = 0; i < letters.length; i++) {
    if (positions[letters[i]] === undefined) {
      positions[letters[i]] = [];
    }
    positions[letters[i]].push(i);
  }
  delete positions[" "];
  return positions;
};

/*
const temp = letterPositions("lighthouse in the house");

assertArraysEqual(temp["i"], [1, 11]);
assertArraysEqual(temp["h"], [3, 5, 15, 18]);
assertArraysEqual(temp["e"], [9, 16, 22]);
assertArraysEqual(temp[" "], undefined);
*/