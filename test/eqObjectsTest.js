const assert = require("chai").assert;
const _ = require("../index");

describe("#eqObjects", () => {
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  it("returns true for two objects with the same keys but out of order", () => {
    assert.equal(_.eqObjects(cd, dc), true);
  });
  const cd2 = { c: "1", d: ["2", 3, 4] };
  it("returns false for two objects with the same keys but different values", () => {
    assert.equal(_.eqObjects(cd, cd2), false);
  });

  const x = { c: "1", d: ["2", [3, 4]] };
  const y = { d: ["2", [3, 4]], c: "1" };
  it("returns true for two objects with nested arrays in values", () => {
    assert.equal(_.eqObjects(x, y), true);
  });

  it("returns true for two equal objects with nested objects", () => {
    assert.equal(_.eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it("returns true for two unequal objects with nested objects", () => {
    assert.equal(_.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it("returns true for two unequal objects with one nested object", () => {
    assert.equal(_.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
});