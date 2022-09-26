const assertEqual = require("./assertEqual.js"); // Pull assert function for test cases

const countLetters = function(str) {
  const letters = str.split(" ").join("").split(""); // Remove whitespace and seperate into array
  let numOfLetters = {}; // Initialize return object

  for (let letter of letters) { // Loop through each letter in the string
    !numOfLetters[letter] ? numOfLetters[letter] = 1 : numOfLetters[letter] += 1; // Ternary to initialize new key or iterate it by one
  }

  return numOfLetters;
};

module.exports = countLetters;

/*
const temp = countLetters("lighthouse lighthouse");
assertEqual(temp["h"], 4);
*/