const assertArraysEqual = require("./assertArraysEqual.js");
const eqArrays = require("./eqArrays.js");

const map = function(arr, func) {
  let newArr = [];
  for (item of arr) {
    newArr.push(func(item));
  }
  return newArr;
};

assertArraysEqual(map(["ground", "control", "to", "major", "tom"], x => x.length), [6, 7, 2, 5, 3]);
assertArraysEqual(map([23, 54, 876, 9, 32, 5], x => x < 10), [false, false, false, true, false, true]);
assertArraysEqual(map(["ground", "control", "to", "major", "tom", "waldo"], x => x === "waldo"), [false, false, false, false, false, true]);