const assert = require("chai").assert;
const _ = require("../index");

describe("#countLetters", () => {
  const letters = _.countLetters("lighthouse lighthouse");
  it("retuns an object of { l: 2, i: 2, g: 2, h: 4, t: 2, o: 2, u: 2, s: 2, e: 2 } for 'lighthouse lighthouse'", () => {
    assert.equal(letters["h"], 4);
  });
});