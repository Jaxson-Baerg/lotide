const assert = require("chai").assert;
const _ = require("../index");

describe("#findKeys", () => {
  it("returns 'noma' for object with numerical key values", () => {
    assert.equal(_.findKeys({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2), "noma");
  });
  it("returns 'Annie' for object with boolean key values", () => {
    assert.equal(_.findKeys({
      "John": { adult: false},
      "Todd": { adult: false},
      "Annie": { adult: true},
      "Sally": { adult: false}
    }, x => x.adult === true), "Annie");
  });
});