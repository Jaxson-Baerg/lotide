const eqObjects = require("./eqObjects.js"); // Pull eqObjects to test if objects equal

const assertObjectsEqual = function(objOne, objTwo) {
  const inspect = require("util").inspect; // Pull inspect function too display objects prettier

  if (eqObjects(objOne, objTwo)) { // Call eqObjects function
    console.log(`🟩🟩🟩  Assertion Passed: ${inspect(objOne)} === ${inspect(objTwo)}`);
    return true;
  } else {
    console.log(`🟥🟥🟥  Assertion Failed: ${inspect(objOne)} !=== ${inspect(objTwo)}`);
    return false;
  }
};

module.exports = assertObjectsEqual; // Export assert function to use elsewhere