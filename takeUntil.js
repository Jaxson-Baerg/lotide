const assertArraysEqual = require("./assertArraysEqual.js");
const eqArrays = require("./eqArrays.js");

const takeUntil = function(arr, func) {
  let newArr = [];
  for (item of arr) {
    if (!func(item)) {
      newArr.push(item);
    } else {
      return newArr;
    }
  }
};

assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), ["I've", "been", "to", "Hollywood"]);