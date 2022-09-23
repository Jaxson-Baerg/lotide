const assertEqual = require("./assertEqual.js");
const eqArrays = require("./eqArrays.js");

const eqObjects = function(objOne, objTwo) {
  for (key in objOne) {
    if ((typeof objOne[key] === "object" && !Array.isArray(objOne[key]) && objOne[key] !== null) && (typeof objTwo[key] === "object" && !Array.isArray(objTwo[key]) && objTwo[key] !== null)) {
      if (!eqObjects(objOne[key], objTwo[key])) { return false }
    } else if (Array.isArray(objOne[key]) && Array.isArray(objTwo[key])) {
      if (!eqArrays(objOne[key], objTwo[key])) { return false }
    } else if ((Array.isArray(objOne[key]) && !Array.isArray(objTwo[key])) || (!Array.isArray(objOne[key]) && Array.isArray(objTwo[key]))) {
      return false;
    } else if (objOne[key] !== objTwo[key]) { return false }
  }

  return true;
};

module.exports = eqObjects;

/*
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
*/

/*
const cd = { c: "1", d: ["2", [3, 4]] };
const dc = { d: ["2", [3, 4]], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true
*/

/*
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
*/