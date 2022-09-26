const assert = require("chai").assert;
const _ = require("../index");

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.deepEqual(_.assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for [1, 2, 3] and [1, 2, '3']", () => {
    assert.deepEqual(_.assertArraysEqual([1, 2, 3], [1, 2, "3"]), false);
  });
});