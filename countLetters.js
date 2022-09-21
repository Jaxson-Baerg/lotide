const assertEqual = require("./assertEqual.js");

const countLetters = function(str) {
  const letters = str.split(" ").join("").split("");
  let numOfLetters = {};

  for (let i = 0; i < letters.length; i++) {
    if (numOfLetters[letters[i]] === undefined) {
      numOfLetters[letters[i]] = 0;
    }
    numOfLetters[letters[i]] += 1;
  }

  return numOfLetters;
};

const temp = countLetters("lighthouse lighthouse");

assertEqual(temp["h"], 4);