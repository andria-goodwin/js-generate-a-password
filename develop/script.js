// Assignment Code
var generateBtn = document.querySelector("#generate");

var chars = {
upperCaseChar: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
lowerCaseChar: "abcdefghijklmnopqrstuvwxyz",
numbersChar: "0123456789",
symbolsChar: "*&^%$#@!?><{}"
}

var inputs = [""];
var randomPassword = "";

// Define the generatePassword function
function generatePassword() {

// 1. Prompt the user for password criteria
    var passwordLength = prompt ("Enter a number between 8 characters and 128 characters to be the password length and click 'OK'.");

//    a. password length between 8 - 128 characters
//        i. validate that input is between 8 an 128 chars
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("You must choose between 8 and 128 characters. Please try again.");
        return;
    }

      //Changes passwordLength string to integer
    const confirmLength = parseInt(passwordLength)

//    b. password contains upper case, lower case, numbers, and/or symbols
//        i. validate that at least 1 option has been selected
    var upperCase = confirm("Click 'OK' to include upper case letters or click 'Cancel' for no upper case letters");

    var lowerCase = confirm("Click 'OK' to include lower case letters or click 'Cancel' for no lower case letters.");

    var numbers = confirm("Click 'OK' to include numbers letters or click 'Cancel' for no numbers.");

    var symbols = confirm("Click 'OK' to include symbols or click 'Cancel' for no symbols.");

    if (upperCase === false && lowerCase === false && numbers === false && symbols === false) {
        alert("You must choose at least one character type.");
        return;
    }

  // 2. Generate a password that matches input criteria
    if (upperCase === true) {
        for (var i = 0; i < chars.upperCaseChar.length; i++) {
      inputs.push(chars.upperCaseChar[i]);
        }
    }

    if (lowerCase === true) {
      for (var i = 0; i < chars.lowerCaseChar.length; i++) {
        inputs.push(chars.lowerCaseChar[i]);
      }
    }

    if (symbols === true) {
      for (var i = 0; i < chars.symbolsChar.length; i++) {
        inputs.push(chars.symbolsChar[i]);
      }
    }

    if (numbers === true) {
      for (var i = 0; i < chars.numbersChar.length; i++) {
        inputs.push(chars.numbersChar[i]);
      }
    }

    for (var i = 0; i < confirmLength; i++) {
      inputs[Math.floor(Math.random() * inputs.length)];
  
      randomPassword += inputs[Math.floor(Math.random() * inputs.length)];
    }

  // 3. Display generated password to the page
    return randomPassword;
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
