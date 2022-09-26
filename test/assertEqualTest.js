const assert = require("chai").assert;
const _ = require("../index");

describe("#assertEqual", () => {
  it("returns true for 1 and 1", () => {
    assert.equal(_.assertEqual(1, 1), true);
  });
  it("returns false for 1 and 2", () => {
    assert.equal(_.assertEqual(1, 2), false);
  });
});