const assert = require("chai").assert;
const _ = require("../index");

describe("#assertObjectsEqual", () => {
  it("returns true for two objects that have equal keys and value but are out of order", () => {
    assert.deepEqual(_.assertObjectsEqual({ c: "1", d: ["2", [3, 4]] }, { d: ["2", [3, 4]], c: "1" }), true);
  });
  it("returns false for two objects with the same keys but different values", () => {
    assert.deepEqual(_.assertObjectsEqual({ c: "1", d: ["2", [3, 4]] }, { d: ["2", [3, 1]], c: "1" }), false);
  });
});