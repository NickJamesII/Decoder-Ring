// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const alph = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function codeify(letter, alphabet) {
    let final = "";
    for (let i = 0; i < alph.length; i++) {
      if (alph[i] == letter) {
        final = alphabet[i];
      }
    }
    return (final);
  }

  function decodeify(letter, alphabet) {
    let result = "";
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet[i] == letter) {
        result = alph[i];
      }
    }
    return (result);
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) {
      return (false);
    }
    alphabet = alphabet.slice("");

    if (alphabet.length < 26) {
      return (false);
    }
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (alphabet[i] == alphabet[j] && i != j) {
          return (false);
        }
      }
    }
    let result = [];
    input = input.toLowerCase();
    let sentence = input.split(" ");
    console.log(sentence);
    sentence.forEach((word) => {
      let letters = word.split("");
      let finalWord = [];
      letters.forEach((character) => {
        if (encode == true) {
          finalWord.push(codeify(character, alphabet));
        } else {
          finalWord.push(decodeify(character, alphabet));
        }
      });
      finalWord = finalWord.join("");
      result.push(finalWord);
    });
    result = result.join(" ");
    return (result);
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
