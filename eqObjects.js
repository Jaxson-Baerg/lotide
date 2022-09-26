const eqObjects = module.exports = function(objOne, objTwo) {
  const keysOne = Object.keys(objOne);
  const keysTwo = Object.keys(objTwo);
  if (keysOne.length !== keysTwo.length) { return false }

  for (let key of keysOne) { // Loop through each key in objects
    // If key has nested object
    if ((typeof objOne[key] === "object" && !Array.isArray(objOne[key]) && objOne[key] !== null) && (typeof objTwo[key] === "object" && !Array.isArray(objTwo[key]) && objTwo[key] !== null)) {
      if (!eqObjects(objOne[key], objTwo[key])) { return false }
    // If key has nested array
    } else if (Array.isArray(objOne[key]) && Array.isArray(objTwo[key])) {
      if (!eqArrays(objOne[key], objTwo[key])) { return false }
    // If keys status of array is unequal
    } else if ((Array.isArray(objOne[key]) && !Array.isArray(objTwo[key])) || (!Array.isArray(objOne[key]) && Array.isArray(objTwo[key]))) {
      return false;
    // If key primitive types are unequal
    } else if (objOne[key] !== objTwo[key]) { return false }
  }

  return true;
};

const eqArrays = require("./eqArrays");