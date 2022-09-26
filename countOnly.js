const assertEqual = require("./assertEqual.js"); // Pull assert function for test cases

const countOnly = function(data, count) {
  const dataToCount = [...data]; // Copy over inputed array
  const countArr = Object.keys(count); // Get all keys 
  let counted = {}; // Initialize return object

  for (let nameKey of dataToCount) { // Loop through each element in the array to count from
    for (let countKey of countArr) { // Loop through each key in the object argument
      if (nameKey === countKey && count[countKey]) { // Check if element and key equal and if key is to be counted
        !counted[countKey] ? counted[countKey] = 1 : counted[countKey] += 1; // Ternary to initialize new key or iterate by one
      }
    }
  }
  return counted;
};

module.exports = countOnly;

/*
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
*/