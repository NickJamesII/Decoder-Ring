const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe(("polybius()"), () => {
    it(("Should encode a single word"), () => {
       const input = "thinkful";
       const expected = "4432423352125413";
       const actual = polybius(input);
       expect(actual).to.eql(expected);
    });
    it(("Should encode a sentence"), () => {
        const input = "Hello world";
        const expected = "3251131343 2543241341";
        const actual = polybius(input);
        expect(actual).to.eql(expected);
    });
    it(("Should decode a single word"), () => {
        const input = "3251131343 2543241341";
        const expected = "hello world";
        const encode = false;
        const actual = polybius(input, encode);
        expect(actual).to.eql(expected);
    });
    it(("Should decode a word that has i/j"), () => {
        const input = "4432423352125413";
        const encode = false;
        const expected = "th(i/j)nkful";
        const actual = polybius(input, encode);
        expect(actual).to.eql(expected);
    });
    it(("Should return false if the decode input is odd"), () => {
        const input = "44324233521254134";
        const expected = false;
        const encode = false;
        const actual = polybius(input, encode);
        expect(actual).to.eql(expected);
    });
});
