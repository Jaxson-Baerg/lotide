const assertEqual = function(num1, num2) {
  if (num1 === num2) {
    console.log(`🟩🟩🟩  Assertion Passed: ${num1} === ${num2}`);
  } else {
    console.log(`🟥🟥🟥  Assertion Failed: ${num1} !=== ${num2}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);