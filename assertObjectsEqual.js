const eqObjects = require("./eqObjects.js");
const isArray = require("./eqObjects.js");

const assertObjectsEqual = function(objOne, objTwo) {
  const inspect = require("util").inspect;

  if (eqObjects(objOne, objTwo)) {
    console.log(`🟩🟩🟩  Assertion Passed: ${inspect(objOne)} === ${inspect(objTwo)}`);
  } else {
    console.log(`🟥🟥🟥  Assertion Failed: ${inspect(objOne)} !=== ${inspect(objTwo)}`);
  }
};

//assertObjectsEqual({ c: "1", d: ["2", [3, 4]] }, { d: ["2", [3, 4]], c: "1" });