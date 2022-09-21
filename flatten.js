const assertArraysEqual = require("./assertArraysEqual.js");
const eqArrays = require("./eqArrays.js");

const flatten = function(arr) {

  let data = [];
  data = data.concat(arr);
  let arrFlat = [];

  for (let i = 0; i < data.length; i++) {

    if (Array.isArray(data[i])) {

      let frontReplace = 0;
      arrNested = [...data[i]];

      for (let x = 0; x < arrNested.length; x++) {

        if (Array.isArray(arrNested[x])) {

          let arrNestFlat = [...arrNested];
          arrNestFlat = flatten(arrNestFlat);

          arrNestFlat = arrNestFlat.slice(frontReplace);

          arrFlat.push(...arrNestFlat);
          break;
          
        } else {
          arrFlat.push(arrNested[x]);
          frontReplace++;
        }
      }
    } else {
      arrFlat.push(data[i]);
    }
    
  }
  return arrFlat;
};

assertArraysEqual(flatten([1, 2, [[3, 11, 22, [9, 8, [7, 123]]], 4, 44], 22, 5, [[[6]]]]), [1, 2, 3, 11, 22, 9, 8, 7, 123, 4, 44, 22, 5, 6]);