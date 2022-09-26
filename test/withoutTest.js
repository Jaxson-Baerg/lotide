const assert = require("chai").assert;
const _ = require("../index");

describe("#without", () => {
  it("ensures original array is not altered by without function", () => {
    const words = ["hello", "world", "lighthouse"];
    _.without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
  it("returns [2, 3, 2, 3] for ([1, 1, 2, 3, 1, 1, 2, 3], [1])", () => {
    assert.deepEqual(_.without([1, 1, 2, 3, 1, 1, 2, 3], [1]), [2, 3, 2, 3]);
  });
  it("returns [3, 3] for ([1, 2, 3, 1, 2, 3], [1, 2])", () => {
    assert.deepEqual(_.without([1, 2, 3, 1, 2, 3], [1, 2]), [3, 3]);
  });
});