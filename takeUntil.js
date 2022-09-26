const assertArraysEqual = require("./assertArraysEqual.js"); // Pull assert function for test cases

const takeUntil = function(arr, func) {
  let newArr = []; // Initialize return array
  for (item of arr) { // Loop through each element of passed array
    if (!func(item)) { // Apply function to element
      newArr.push(item);
    } else {
      return newArr;
    }
  }
};

module.exports = takeUntil;

/*
assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), ["I've", "been", "to", "Hollywood"]);
*/