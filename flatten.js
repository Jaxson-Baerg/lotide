const assertArraysEqual = require("./assertArraysEqual.js");

const flatten = function(array) {
  let flat = [];
  for (let el of array) {
    if (Array.isArray(el)) {
      flat.push(...flatten(el));
      continue;
    }
    flat.push(el);
  }
  return flat;
};

assertArraysEqual(flatten([1, 2, [[3, 11, 22, [9, 8, [7, 123]]], 4, 44], 22, 5, [[[6]]]]), [1, 2, 3, 11, 22, 9, 8, 7, 123, 4, 44, 22, 5, 6]);

// More Recursion compass assignment
const temp = flatten(["A", ["B", "C"], "D", "E"]);
for (el of temp) {
  console.log(el);
}