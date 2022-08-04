// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  let square = [
    ["ERR"],
    ["ERR", "a", "f", "l", "q", "v"],
    ["ERR", "b", "g", "m", "r", "w"],
    ["ERR", "c", "h", "n", "s", "x"],
    ["ERR", "d", "(i/j)", "o", "t", "y"],
    ["ERR", "e", "k", "p", "u", "z"],
];

  function letterAlt(letter) {
    let result = 00;
    for (let i = 0; i < square.length; i++) {
      for (let j = 0; j < square[i].length; j++) {
      if (square[i][j] === letter) {
        result = i * 10 + j;
      }
    }
  }

  if (letter == "i" || letter == "j") {
    result = 42;
  }
  return (result);
};

function numberAlt(number) {
  let i = Math.floor(number / 10);
  let j = number - i * 10;
  return square[i][j];
}

  function polybius(input, encode = true) {
    input = input.toLowerCase();
    let message = input.split(" ");
    let poly = [];
    let code = false;
    message.forEach((word) => {
      let polyWord = [];
      let splitWord = word.split("");
      if (encode == false) {
        console.log(Math.floor(splitWord.length / 2));
        console.log(splitWord.length / 2);
        if (Math.floor(splitWord.length / 2) != splitWord.length / 2) {
          code = true;
        }
        let tempo = [];
        for (let i = 0; i < splitWord.length; i+= 2) {
          tempo.push(parseInt(splitWord[i] + splitWord[i + 1]));
        }
        console.log(tempo);
        splitWord = tempo;
      }
      splitWord.forEach((character) => {
        if (encode == true) {
          character = letterAlt(character);
        } else {
          character = numberAlt(character);
        }
        polyWord.push(character);
      });
      polyWord = polyWord.join("");
      poly.push(polyWord);
    });
    poly = poly.join(" ");
    if (code == false) {
      return (poly);
    } else {
      return (false);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
