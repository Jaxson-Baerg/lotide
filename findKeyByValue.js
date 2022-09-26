const assertEqual = require("./assertEqual.js"); // Pull assert function for test cases

const findKeyByValue = function(obj, val) {
  for (const key in obj) { // Loop through each key in passed object
    if (obj[key] === val) { // If the key has the same value as passed value
      return key;
    }
  }

  return undefined;
};

module.exports = findKeyByValue;

/*
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/