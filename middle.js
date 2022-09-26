const assertArraysEqual = require("./assertArraysEqual.js"); // Pull assert function for test cases

const middle = function(data) {
  const leng = data.length; // Assign length of passed array
  let mid = []; // Initialize return array
  if (leng === 1 || leng === 2) { // Gate for array of one or two elements
    return mid;
  } else if (leng % 2 === 0) { // Gate if array is even, returns two middle numbers
    mid.splice(0, 0, data[(leng / 2) - 1], data[leng / 2]);
  } else {
    mid.push(data[(Math.ceil(leng / 2)) - 1]);
  }
  return mid;
};


assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
