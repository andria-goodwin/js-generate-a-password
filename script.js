// Assignment Code
var generateBtn = document.querySelector("#generate");

var chars = {
upperCaseChar: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
lowerCaseChar: "abcdefghijklmnopqrstuvwxyz",
numbersChar: "0123456789",
symbolsChar: "*&^%$#@!?><{}"
}

var inputs = [];
var randomPassword = [];

// Define the generatePassword function
function generatePassword() {
// Prompt the user for password criteria
    var passwordLength = prompt ("Enter a number between 8 characters and 128 characters to be the password length and click 'OK'.");

//  password length between 8 - 128 characters
//  validate that input is between 8 an 128 chars
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("You must choose between 8 and 128 characters. Please try again.");
        return;
    }

//Changes passwordLength string to integer
    const confirmLength = parseInt(passwordLength)

// password contains upper case, lower case, numbers, and/or symbols
// validate that at least 1 option has been selected
    var upperCase = confirm("Click 'OK' to include UPPER CASE letters or click 'Cancel' for no upper case letters");

    var lowerCase = confirm("Click 'OK' to include LOWER CASE letters or click 'Cancel' for no lower case letters.");

    var symbols = confirm("Click 'OK' to include SYMBOLS or click 'Cancel' for no symbols.");

    var numbers = confirm("Click 'OK' to include NUMBERS or click 'Cancel' for no numbers.");

    if (upperCase === false && lowerCase === false && symbols === false && numbers === false) {
        alert("You must choose at least one character type.");
        return;
    }

// [upperCase, lowerCase, symbols, numbers]
    var arrayCriteria = [];

// Generate a password that matches input criteria
    if (upperCase === true) {
        for (var i = 0; i < chars.upperCaseChar.length; i++) {
      inputs.push(chars.upperCaseChar[i]);
        }
        arrayCriteria.push(true);
    } else {
        arrayCriteria.push(false);
    }

    if (lowerCase === true) {
      for (var i = 0; i < chars.lowerCaseChar.length; i++) {
        inputs.push(chars.lowerCaseChar[i]);
      }
      arrayCriteria.push(true);
    } else {
        arrayCriteria.push(false);
    }

    if (symbols === true) {
      for (var i = 0; i < chars.symbolsChar.length; i++) {
        inputs.push(chars.symbolsChar[i]);
      }
      arrayCriteria.push(true);
    } else {
        arrayCriteria.push(false);
    }

    if (numbers === true) {
      for (var i = 0; i < chars.numbersChar.length; i++) {
        inputs.push(chars.numbersChar[i]);
      }
      arrayCriteria.push(true);
    } else {
        arrayCriteria.push(false);
    }

    // Ensures there will be at least 1 of each character type included if selected
    var testPassword = [];

    for (var i = 0; i < arrayCriteria.length; i++) {
      // [upperCase, lowerCase, symbols, numbers]
      if (i === 0) {
        if (arrayCriteria[0]) { 
          testPassword += chars.upperCaseChar[Math.floor(Math.random() * chars.upperCaseChar.length)]
        }
      }
      if (i === 1) {
        if (arrayCriteria[1]) {
          testPassword += chars.lowerCaseChar[Math.floor(Math.random() * chars.lowerCaseChar.length)]
        }
      }
      if (i === 2) {
        if (arrayCriteria[2]) {
          testPassword += chars.numbersChar[Math.floor(Math.random() * chars.numbersChar.length)]
        }
      }
      if (i === 3) {
        if (arrayCriteria[3]) {
          testPassword += chars.symbolsChar[Math.floor(Math.random() * chars.symbolsChar.length)]
        }
      }
    }
    
    // Adds however many random places are needed in front of arrayCriteria to fulfill the desired password length
    for (var i = 0; i < confirmLength - testPassword.length; i++) {
      inputs[Math.floor(Math.random() * inputs.length)];
  
      randomPassword += inputs[Math.floor(Math.random() * inputs.length)];
    }

    var finalPassword = randomPassword.concat(testPassword);

// Display generated password to the page
    alert("Your new password has been generated! Click 'OK' to see your new password. If you'd like a different password, refresh the page and then try again");
    return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

// This writes the password to page
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
