// Write your tests here!
const { caesar } = require("../src/caesar");
const { expect } = require("chai");

describe("caesar()", () => {
    it(("Should encode the inputed message"), () => {
        const input = "thinkful";
        const shift = 3;
        const expected = "wklqnixo";
        const actual = caesar(input, shift);
        expect(actual).to.eql(expected);
    });
    it(("Should encode the inputed message"), () => {
        const input = "thinkful";
        const shift = -3;
        const expected = "qefkhcri";
        const actual = caesar(input, shift);
        expect(actual).to.eql(expected);
    });
    it(("Should decode the inputed message"), () => {
        const input = "wklqnixo";
        const shift = 3;
        const expected = "thinkful";
        const encode = false;
        const actual = caesar(input, shift, encode);
        expect(actual).to.eql(expected);
    });
    it(("Should encode a sentence"), () => {
        const input = "This is a secret message!";
        const shift = 8;
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar(input, shift);
        expect(actual).to.eql(expected);
    });
    it(("Should decode a sentence"), () => {
        const input = "BPQA qa I amkzmb umaaiom!";
        const shift = 8;
        const expected = "this is a secret message!";
        const encode = false;
        const actual = caesar(input, shift, encode);
        expect(actual).to.eql(expected);
    });
    it(("Should return false if no shift value"), () => {
        const input = "thinkful";
        const expected = false;
        const actual = caesar(input);
        expect(actual).to.eql(expected);
    });
    it(("Should return false if shift is too great"), () => {
        const input = "thinkful";
        const expected = false;
        const shift = 99;
        const actual = caesar(input, shift);
        expect(actual).to.eql(expected);
    });
    it(("Shoudl return false if shift is too small"), () => {
        const input = "thinkful";
        const expected = false;
        const shift = -26;
        const actual = caesar(input, shift);
        expect(actual).to.eql(expected);
    });
});
