const eqObjects = require("./eqObjects.js"); // Pull eqObjects to check if objects within array are equal

const eqArrays = function(arrOne, arrTwo) {
  if (!arrOne || !arrTwo) { // Fail safes to check if arrays are unequal on the surface
    return false;
  } else if (arrOne.length != arrTwo.length) {
    return false;
  }
  
  for (let i = 0; i < arrOne.length; i++) { // Loop through each element of both arrays, given they are the same length
    // If elements are a nested array
    if (Array.isArray(arrOne[i]) && Array.isArray(arrTwo[i])) {
      if (!eqArrays(arrOne[i], arrTwo[i])) { return false }
    // If elements are a nested object
    } else if ((typeof arrOne[i] === "object" && !Array.isArray(arrOne[i]) && arrOne[i] !== null) && (typeof arrTwo[i] === "object" && !Array.isArray(arrTwo[i]) && arrTwo[i] !== null)) {
      if (!eqObjects(arrOne[i], arrTwo[i])) { return false }
    // If elements do not match array status
    } else if ((Array.isArray(arrOne[i]) && !Array.isArray(arrTwo[i])) || (!Array.isArray(arrOne[i]) && Array.isArray(arrTwo[i]))) {
      return false;
    // If elements are primitive data and do not match
    } else if (arrOne[i] !== arrTwo[i]) { return false }
  }
  return true;
};

module.exports = eqArrays; // Export eq function to be used elsewhere