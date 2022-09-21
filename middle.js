const eqArrays = require("./eqArrays.js");
const assertArraysEqual = require("./assertArraysEqual.js");

const middle = function(data) {
  const leng = data.length;
  let mid = [];
  if (leng === 1 || leng === 2) {
    return mid;
  } else if (leng % 2 === 0) {
    mid.splice(0, 0, data[(leng / 2) - 1], data[leng / 2]);
  } else {
    mid.push(data[(Math.ceil(leng / 2)) - 1]);
  }
  return mid;
};

/*
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
*/