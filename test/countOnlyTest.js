const assert = require("chai").assert;
const _ = require("../index");

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const toCount = {
    "Jason": true,
    "Karima": true,
    "Fang": true,
    "Agouhanna": false
  };
  const result = _.countOnly(firstNames, toCount);
  
  it("returns object of { Fang: 2, Jason: 1 } for firstNames array and toCount object", () => {
    assert.equal(result["Jason"], 1);
    assert.equal(result["Karima"], undefined);
    assert.equal(result["Fang"], 2);
    assert.equal(result["Agouhanna"], undefined);
  });
});