const assertArraysEqual = require("./assertArraysEqual.js"); // Pull assert function for test cases

const flatten = function(array) {
  let flat = []; // Initialize return array
  for (let el of array) { // Loop through each element of passed array
    if (Array.isArray(el)) { // If element is nested array
      flat.push(...flatten(el)); // Push into return array the elements of returned recursion call of element
      continue; // Continue to next for iteration to skip rest of loop
    }
    flat.push(el); // If element is not a nested array, push to return array
  }
  return flat;
};

/*
assertArraysEqual(flatten([1, 2, [[3, 11, 22, [9, 8, [7, 123]]], 4, 44], 22, 5, [[[6]]]]), [1, 2, 3, 11, 22, 9, 8, 7, 123, 4, 44, 22, 5, 6]);

// More Recursion compass assignment
const temp = flatten(["A", ["B", "C"], "D", "E"]);
for (el of temp) {
  console.log(el);
}
*/