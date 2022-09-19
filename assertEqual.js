const assertEqual = function(para1, para2) {
  if (para1 === para2) {
    console.log("🟩🟩🟩  Assertion Passed: " + para1 + " === " + para2);
  } else {
    console.log("🟥🟥🟥  Assertion Failed: " + para1 + " !=== " + para2);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);