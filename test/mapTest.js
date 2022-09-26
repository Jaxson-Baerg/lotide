const assert = require("chai").assert;
const _ = require("../index");

describe("#map", () => {
  it("returns [6, 7, 2, 5, 3] for (['ground', 'control', 'to', 'major', 'tom'], x => x.length)", () => {
    assert.deepEqual(_.map(["ground", "control", "to", "major", "tom"], x => x.length), [6, 7, 2, 5, 3]);
  });
  it("returns [false, false, false, true, false, true] for ([23, 54, 876, 9, 32, 5], x => x < 10)", () => {
    assert.deepEqual(_.map([23, 54, 876, 9, 32, 5], x => x < 10), [false, false, false, true, false, true]);
  });
});