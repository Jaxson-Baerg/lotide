const assertArraysEqual = require("./assertArraysEqual.js");
const eqArrays = require("./eqArrays.js");

const flatten = function(arr) {

  let arrFlat = [];
  arrFlat = arrFlat.concat(arr);

  for (let i = 0; i < arrFlat.length; i++) {

    if (Array.isArray(arrFlat[i])) {

      let notToReplace = arrFlat[i + 1];
      let frontReplace = 0;

      arrNested = [];
      arrNested = arrNested.concat(arrFlat[i]);

      arrFlat.splice(i, 1);

      for (let x = 0; x < arrNested.length; x++) {

        if (Array.isArray(arrNested[x])) {

          arrNested = flatten(arrNested);

          if (arrFlat[i] === notToReplace) {
            arrFlat.splice(i, 0, ...arrNested);
          } else {
            arrFlat.splice(i, frontReplace, ...arrNested);
          }

          notToReplace = undefined;
          break;
          
        } else {
          arrFlat.splice(i + x, 0, arrNested[x]);
          frontReplace++;
        }
      }
    }
    
  }
  return arrFlat;
};

assertArraysEqual(flatten([1, 2, [[3, 11, 22, [9, 8, [7, 123]]], 4], 5, [[[6]]], 20, 12, [12, [[234, 125, [23]], 44, 11], 1, 26]]), [1, 2, 3, 11, 22, 9, 8, 7, 123, 4, 5, 6, 20, 12, 12, 234, 125, 23, 44, 11, 1, 26]);