const assertEqual = require("./assertEqual.js");
const eqObjects = require("./eqObjects.js");

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne === undefined || arrTwo === undefined) {
    return false;
  } else if (arrOne.length != arrTwo.length) {
    return false;
  }
  
  for (let i = 0; i < arrOne.length; i++) {
    if (Array.isArray(arrOne[i]) && Array.isArray(arrTwo[i])) {
      if (!eqArrays(arrOne[i], arrTwo[i])) { return false }
    } else if ((typeof arrOne[i] === "object" && !Array.isArray(arrOne[i]) && arrOne[i] !== null) && (typeof arrTwo[i] === "object" && !Array.isArray(arrTwo[i]) && arrTwo[i] !== null)) {
      if (!eqObjects(arrOne[i], arrTwo[i])) { return false }
    } else if ((Array.isArray(arrOne[i]) && !Array.isArray(arrTwo[i])) || (!Array.isArray(arrOne[i]) && Array.isArray(arrTwo[i]))) {
      return false;
    } else if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

/*
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
*/