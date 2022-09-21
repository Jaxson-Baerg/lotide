const assertEqual = require("./assertEqual.js");

const findKeyByValue = function(obj, val) {
  keysArr = Object.keys(obj);
  
  for (let i = 0; i < keysArr.length; i++) {
    if (obj[keysArr[i]] === val) {
      return keysArr[i];
    }
  }

  return undefined;
};

/*
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/