// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare variables
var length;
var lettersConfirm;
var capLettersConfirm;
var numbersConfirm;
var symbolsConfirm;
var stored;

// Declare values
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // Letters
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
symbols = ['!', '@', '#', '$', '%','^', '&', '*', '(', ')']; 
stored = []; 

var select; 

var upper = function (x) {
  return x.toUpperCase();
}

lettersCap = letters.map(upper);

// Write password to the #password input
function writePassword() {

  length = parseInt(window.prompt("Enter Length (Must be between 8 and 128 characters)."));

  if (!length) {
    alert("You need to choose something!");
  
  } else if (length < 8 || length > 128) {
    length = parseInt(length("Must be between 8 and 128 characters."));
  
  } else {
    var lettersConfirm = confirm("Are you using lowercase letters?");
    var capLettersConfirm = confirm("Are you using capital letters?");
    var numbersConfirm = confirm("Are you using numbers?");
    var symbolsConfirm = confirm("Are you using symbols?");
  }

  if (!lettersConfirm && numbersConfirm && symbolsConfirm && capLettersConfirm) {
    select = alert("You must choose something!");
  }
  else if (lettersConfirm && numbersConfirm && symbolsConfirm && capLettersConfirm) {
    select = symbols.concat(numbers, letters, lettersCap);
    }
    else if (symbolsConfirm && numbersConfirm && capLettersConfirm) {
      select = character.concat(number, lettersCap);
  }
  else if (symbolsConfirm && numbersConfirm && lettersConfirm) {
      select = character.concat(number, letters);
  }
  else if (symbolsConfirm && lettersConfirm && confirmUppercase) {
      select = character.concat(letters, lettersCap);
  }
  else if (numbersConfirm && lettersConfirm && capLettersConfirm) {
      select = number.concat(letters, lettersCap);
  }
  else if (capsLetterConfirm) {
    select = stored.concat(lettersCap);
  };
  var password = [];

  for (var i = 0; i<length; i++) {
    var writePassword = select[Math.floor(Math.random()* select.length)];
    password.push(writePassword);
  }
}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

