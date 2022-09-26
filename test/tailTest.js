const assertArraysEqual = require("../assertArraysEqual");
const tail = require("../tail.js");

assertArraysEqual(tail([1, 2, 3]), [2, 3]);