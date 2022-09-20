const assertArraysEqual = require("./assertArraysEqual.js");
const eqArrays = require("./eqArrays.js");

const without = function(data, dataToRemove) {
  let dataWithout = [];
  for (let i = 0; i < data.length; i++) {
    dataWithout.push(data[i]);
    for (let x = 0; x < dataToRemove.length; x++) {
      if (dataWithout[i] === dataToRemove[x]) {
        dataWithout.splice(i, 1);
      }
    }
  }
  return dataWithout;
};

/*
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/