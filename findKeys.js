const assertEqual = require("./assertEqual.js"); // Pull assert function for test cases

const findKeys = function(obj, func) {
  for (key in obj) { // Loop through each key
    if (func(obj[key])) { // Apply passed function to key
      return key;
    }
  }
};

module.exports = findKeys;

/*
assertEqual(findKeys({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");
assertEqual(findKeys({
  "John": { adult: false},
  "Todd": { adult: false},
  "Annie": { adult: true},
  "Sally": { adult: false}
}, x => x.adult === true), "Annie");
*/