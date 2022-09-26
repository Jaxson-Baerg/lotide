const assertEqual = function(num1, num2) {
  if (num1 === num2) { // Test if equal
    console.log(`🟩🟩🟩  Assertion Passed: ${num1} === ${num2}`);
  } else {
    console.log(`🟥🟥🟥  Assertion Failed: ${num1} !=== ${num2}`);
  }
};

module.exports = assertEqual; // Export assert function to use elsewhere