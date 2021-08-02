// lowercase variable options
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// uppercase variable options
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Number variable options
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Special character variable options
var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "8",
  "(",
  ")",
  "~",
  "`",
  "-",
  "_",
  "+",
  "=",
  "|",
  "}",
  "{",
  "]",
  "[",
  ";",
  ":",
  ",",
  ".",
  "/",
  "<",
  ">",
  "?",
];

// Password functions to ask user for length of password and to ask what variables to include.
function getPasswordOptions() {
  var length = parseInt(
    prompt("How many characters would you like your password to have?")
  );

  if (isNaN(length) === true) {
    alert("Password length must be provided as a number");
    return;
  }
  if (length < 8) {
    alert("Password length must be at least 8 characters");
    return;
  }
  if (length > 128) {
    alert("Password length must less than 129 characters");
    return;
  }

  var confirmLowerCase = confirm(
    "Click OK to confirm to includ of lowercase characters"
  );
  var confirmUpperCase = confirm(
    "Click OK to confirm inclusion of uppercase characters"
  );
  var confirmNumbers = confirm("Click OK to confirm inclusion of numbers");
  var confirmSpecialCharacters = confirm(
    "Click OK to confirm inclusion of special characters"
  );

  if (
    confirmLowerCase === false &&
    confirmUpperCase === false &&
    confirmNumbers === false &&
    confirmSpecialCharacters === false
  ) {
    alert("Must select at least one character type");
    return;
  }

  var passwordOptions = {
    length: length,
    confirmLowerCase: confirmLowerCase,
    confirmUpperCase: confirmUpperCase,
    confirmNumbers: confirmNumbers,
    confirmSpecialCharacters: confirmSpecialCharacters,
  };

  return passwordOptions;
}

// Function to randomize the password that is generated
function random(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];

  return randomElement;
}

// Generating random characters per user's input(lowercase/uppercase/numbers/special characters)
function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (options.confirmLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowercase);
    guaranteedCharacters.push(random(lowercase));
  }
  if (options.confirmUpperCase) {
    possibleCharacters = possibleCharacters.concat(uppercase);
    guaranteedCharacters.push(random(uppercase));
  }
  if (options.confirmNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(random(numbers));
  }
  if (options.confirmSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(random(specialCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = random(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join("");
}

// Assign generate button to HTML id tag
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
