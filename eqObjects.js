const eqArrays = function(arrOne, arrTwo) { // Pasted eqArrays function to avoid circular dependancy with master index object
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

const eqObjects = function(objOne, objTwo) {
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

module.exports = eqObjects; // Export eq function to be used elsewhere