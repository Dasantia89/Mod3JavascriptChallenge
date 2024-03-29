// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

//Create object constructor for Password object
function Password() {
  this.pwLength = 0,
    this.pwCase = 0,
    this.pwCharacters = 0,

    // Get user choice on whether to include numerical and/or special characters and validate it
    this.getChar = function () {
      var char = prompt("Do you want numerical or special characters in your password? Enter 1 for both. 2 for only numeric. 3 for only special.");
      if (char != 1 && char != 2 && char != 3) {
        alert("Invalid input");
        this.getChar();
      }
      this.pwCharacters = char;
    },


    // Get user input for password length and validate it 
    this.getLength = function () {
      var length = prompt("Enter password length between 8 and 128 characters");
      if (length >= 8 && length <= 128) {
        this.pwLength = length;
      } else {
        alert("Invalid input.");
        this.getLength();
      }

    },

    // Get user input for the password Case and validate it
    this.getCase = function () {
      var userCase = prompt("Do you want uppercase or lowercase values in your password? Enter 1 for both. 2 for only uppercase. 3 for only lowercase.");
      if (userCase != 1 && userCase != 2 && userCase != 3) {
        alert("Invalid input");
        this.getCase();
      }
      this.pwCase = userCase;
    }


};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//If no password generated, copy placeholder text to clipboard otherwise, copy the password to clipboard
function copyToClipboard() {
  txt = document.getElementById("password");
  if (txt.value === "") {
    navigator.clipboard.writeText(txt.placeholder);
    alert("Copied the text \n\"" + txt.placeholder + "\" \nto clipboard.");
  } else {
    navigator.clipboard.writeText(txt.value);
    alert("Copied the text \n\"" + txt.value + "\" \nto clipboard.");
  }

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyToClipboard);

//Prompt user for password settings, generate password and return it
function generatePassword() {
  var password = new Password();
  password.getLength();
  password.getCase();
  password.getChar();

  // create arrays containing all possible characters
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upper = [];
  for (var i = 0; i < lower.length; i++) {
    upper[i] = lower[i].toUpperCase();
  }
  var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var special = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

  //Concatenate character arrays to charArray based on the user's choice
  var charArray = [];

  if (password.pwCase == 1) {
    charArray = charArray.concat(lower, upper);
  } else if (password.pwCase == 2) {
    charArray = charArray.concat(upper)
  } else {
    charArray = charArray.concat(lower);
  }

  if (password.pwCharacters == 1) {
    charArray = charArray.concat(numeric, special);
  } else if (password.pwCharacters == 2) {
    charArray = charArray.concat(numeric);
  } else {
    charArray = charArray.concat(special);
  }

  //select a random character from the array and concatenate it to the password
  var actualPassword = "";
  for (var x = 0; x < password.pwLength; x++) {
    actualPassword += charArray[Math.floor(Math.random() * charArray.length)];
  }
  return actualPassword;
}



