// declare variables
var upperCase = false;
var lowerCase = false;
var numbers = false;
var special = false;
var characterLength = 0;
var createPassword = [];
var options = '';
var generateBtn = document.querySelector("#generate");

// declare constants
const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "1234567890";
const specialCharacters = "@#$%^&*(){}[]=<>/,.";

// password generation
function generatePassword () {
  // prompt for password length
  characterLength = window.prompt ("Please choose between 8 and 128 characters to generate your password.");
  
  if (!characterLength || characterLength  < 8 || characterLength > 128) {
    window.alert("Please try again! You must choose between 8 and 128 characters to generate your password.");
    return '';
  } else {
    // prompt for password criteria
    lowerCase = window.confirm("Click 'OK' to add lowercase letters to your password or 'Cancel' to skip.");
    upperCase = window.confirm("Click 'OK' to add uppercase letters to your password or 'Cancel' to skip.");
    numbers = window.confirm("Click 'OK' to add numbers to your password or 'Cancel' to skip.");
    special = window.confirm("Click 'OK' to add special characters to your password or 'Cancel' to skip.");
  }

  if (!lowerCase && !upperCase && !numbers && !special) {
      return window.alert("Please try again! You must choose between 8 and 128 characters to generate your password.");
  }

  // append characters to options based on criteria
  if (lowerCase) {
    options += lowerCaseCharacters;
  }

  if (upperCase) {
    options += upperCaseCharacters
  }

  if (numbers) {
    options += numberCharacters
  }

  if (special) {
    options += specialCharacters
  }

  for (var i = 0; i < characterLength; i++) {
    var randomChar = options[Math.floor(Math.random() * options.length)];
    createPassword.push(randomChar);
  } 

  // create password string from array
  var generatePassword = createPassword.join("");

  // reset variables
  createPassword = [];
  options = '';

  return generatePassword;
};

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password != undefined ? password : '';
}