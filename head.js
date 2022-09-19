const assertEqual = function(num1, num2) {
  if (num1 === num2) {
    console.log(`🟩🟩🟩  Assertion Passed: ${num1} === ${num2}`);
  } else {
    console.log(`🟥🟥🟥  Assertion Failed: ${num1} !=== ${num2}`);
  }
};

const head = function(data) {
  return data[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");