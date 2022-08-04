const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe(("substitution()"), () => {
    it(("Should encode a single word"), () => {
        const input = "thinkful";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "jrufscpw";
        const actual = substitution(input, alphabet);
        expect(actual).to.eql(expected);
    });
    it(("Should encode a sentence"), () => {
        const input = "You are an excellent spy";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution(input, alphabet);
        expect(actual).to.eql(expected);
    });
    it(("Should decode a single word"), () => {
        const input = "jrufscpw";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "thinkful";
        const encode = false;
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.eql(expected);
    });
    it(("Should encode using symbols"), () => {
        const input = "message";
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
        const expected = "y&ii$r&";
        const actual = substitution(input, alphabet);
        expect(actual).to.eql(expected);
    });
    it(("Should decode using symbols"), () => {
        const input = "4y&ii$r&";
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
        const expected = "message";
        const encode = false;
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.eql(expected);
    });
    it(("Should return false if alphabet too short"), () => {
        const input = "thinkful";
        const alphabet = "oakdnf";
        const expected = false;
        const actual = substitution(input, alphabet);
        expect(actual).to.eql(expected);
    });
    it(("Should return false if there are repeated characters"), () => {
        const input = "thinkful";
        const alphabet = "abcabcabcabcabcabcabcabcyz";
        const expected = false;
        const actual = substitution(input, alphabet);
        expect(actual).to.eql(expected);
    });
    it(("Should return false if there is no alphabet"), () => {
        const input = "thinkful";
        const expected = false;
        const actual = substitution(input);
        expect(actual).to.eql(expected);
    });
});
