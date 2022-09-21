const assertEqual = require("./assertEqual.js");
const eqArrays = require("./eqArrays.js");

const eqObjects = function(objOne, objTwo) {
  keyArrOne = Object.keys(objOne);
  keyArrTwo = Object.keys(objTwo);

  if (keyArrOne.length !== keyArrTwo.length) {
    return false;
  }

  for (let i = 0; i < keyArrOne.length; i++) {
    let objValueOne = objOne[keyArrOne[i]];
    let objValueTwo = objTwo[keyArrOne[i]];

    const checkIfArrayOne = Array.isArray(objValueOne);
    const checkIfArrayTwo = Array.isArray(objValueTwo);

    if (keyArrOne[i] !== keyArrTwo[i]) { // If object keys need to be in same order
      //return false;
    } else if (checkIfArrayOne !== checkIfArrayTwo) {
      return false;
    } else if ((checkIfArrayOne && !checkIfArrayTwo) || (!checkIfArrayOne && checkIfArrayTwo)) { 
      return false;
    } else if (objValueOne !== objValueTwo) {
      return false;
    }

    if (checkIfArrayOne && checkIfArrayTwo) {
      return isArray(objValueOne, objValueTwo);
    }
  }

  return true;
};

const isArray = function(valOne, valTwo) {
  if (valOne.length !== valTwo.length) {
    return false;
  }

  for (let x = 0; x < valOne.length; x++) {
    const checkIfArrayOne = Array.isArray(valOne[x]);
    const checkIfArrayTwo = Array.isArray(valTwo[x]);

    if (checkIfArrayOne && checkIfArrayTwo) {
      return isArray(valOne[x], valTwo[x]);
    } else if ((checkIfArrayOne && !checkIfArrayTwo) || (!checkIfArrayOne && checkIfArrayTwo)) {
      return false;
    }
    if (valOne[x] !== valTwo[x]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
module.exports = isArray;

/*
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
*/

/*
const cd = { c: "1", d: ["2", [3, 4]] };
const dc = { d: ["2", [3, 4]], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true
*/