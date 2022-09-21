const assertEqual = require("./assertEqual.js");

const countOnly = function(data, count) {
  const dataToCount = [...data];
  const countArr = Object.keys(count);
  let counted = {};

  for (let i = 0; i < dataToCount.length; i++) {
    for (let x = 0; x < countArr.length; x++) {
      if (dataToCount[i] === countArr[x] && count[countArr[x]] === true) {
        if (counted[countArr[x]] === undefined) {
          counted[countArr[x]] = 0;
        }
        counted[countArr[x]] += 1;
      }
    }
  }
  return counted;
};

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