const assertArraysEqual = require("./assertArraysEqual.js"); // Pull assert function for test cases

const without = function(data, dataToRemove) {
  let dataWithout = [...data]; // Copy over passed array
  for (let i = 0; i < data.length; i++) { // Loop through each element in passed array to remove from
    for (let el of dataToRemove) { // Loop through each element in passed array to remove
      if (dataWithout[i] === el) {
        dataWithout.splice(i, 1); // Remove elements that match
        i--; // Jump back due to splice removing element
      }
    }
  }
  return dataWithout;
};

module.exports = without;

/*
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/

//assertArraysEqual(without([1, 1, 2, 3, 1, 1, 2, 3], [1]), [2, 3, 2, 3]);
//assertArraysEqual(without([1, 2, 3, 1, 2, 3], [1, 2]), [3, 3]);