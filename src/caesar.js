// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  function letterAlt(letter) {
    let result = 0;
      for (let i = 0; i < 26; i++) {
        if (alphabet[i] == letter) {
          result = i;
        }
      }
      return (result);
    }
  function numberAlt(number) {
    return alphabet[number];
    }
  

  function caesar(input, shift, encode = true) {
    if (shift == 0 || shift > 25 || shift < -25 || shift == undefined) {
      return (false);
    }
    if (typeof input !== "string" || input.length == 0) {
      console.log("Please input a string");
    }
    input = input.toLowerCase();
    if (encode == true) {
      shift = shift * -1;
         }
    let message = input.split(" ");
    let codedMessage = [];

    message.forEach((word) => {
      let codedWord = [];
      let splitWord = word.split("");
      splitWord.forEach((character) => {
        if (character.toLowerCase() != character.toUpperCase()) {
          character = letterAlt(character);
          character -= shift;
          if (character < 0) {
            character = character += 26;
          }
          if (character > 25) {
            character = character -= 26;
          }
          character = numberAlt(character);
        }
        codedWord.push(character);
      });
      codedWord = codedWord.join("");
      codedMessage.push(codedWord);
    });

    codedMessage = codedMessage.join(" ");
    return (codedMessage);
  }

  return {
    caesar,
  };
})();

module.exports =  { caesar: caesarModule.caesar };
