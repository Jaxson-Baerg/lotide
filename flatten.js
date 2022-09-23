const assertArraysEqual = require("./assertArraysEqual.js");
const eqArrays = require("./eqArrays.js");

const flatten = function(arr) {

  let data = [];
  data = data.concat(arr);
  let arrFlat = [];

  for (let val of data) {

    if (Array.isArray(val)) {

      let frontReplace = 0;
      arrNested = [...val];

      for (el of arrNested) {

        if (Array.isArray(el)) {

          let arrNestFlat = [...arrNested];
          arrNestFlat = flatten(arrNestFlat);

          arrNestFlat = arrNestFlat.slice(frontReplace);

          arrFlat.push(...arrNestFlat);
          break;
          
        } else {
          arrFlat.push(el);
          frontReplace++;
        }
      }
    } else {
      arrFlat.push(val);
    }
    
  }
  return arrFlat;
};

assertArraysEqual(flatten([1, 2, [[3, 11, 22, [9, 8, [7, 123]]], 4, 44], 22, 5, [[[6]]]]), [1, 2, 3, 11, 22, 9, 8, 7, 123, 4, 44, 22, 5, 6]);

// More Recursion compass assignment
const temp = flatten(["A", ["B", "C"], "D", "E"]);
for (el of temp) {
  console.log(el);
}