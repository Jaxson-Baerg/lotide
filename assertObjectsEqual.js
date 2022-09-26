const eqObjects = require("./eqObjects.js"); // Pull eqObjects to test if objects equal

const assertObjectsEqual = function(objOne, objTwo) {
  const inspect = require("util").inspect; // Pull inspect function too display objects prettier

  if (eqObjects(objOne, objTwo)) { // Call eqObjects function
    console.log(`🟩🟩🟩  Assertion Passed: ${inspect(objOne)} === ${inspect(objTwo)}`);
  } else {
    console.log(`🟥🟥🟥  Assertion Failed: ${inspect(objOne)} !=== ${inspect(objTwo)}`);
  }
};

module.exports = assertObjectsEqual; // Export assert function to use elsewhere

// assertObjectsEqual({ c: "1", d: ["2", [3, 4]] }, { d: ["2", [3, 4]], c: "1" });