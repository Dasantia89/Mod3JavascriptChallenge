// Assignment Code
var generateBtn = document.querySelector("#generate");

function Password () {
  this.pwLength = 0,
  this.pwCase = 0,
  this.pwCharacters = 0,

  // Get user choice on whether to include numerical and/or special characters and validate it
  this.getChar = function () {
    var char = prompt("Do you want numerical or special characters in your password? Enter 1 for both. 2 for only numeric. 3 for only special.");
    if(char != 1 && char != 2 && char != 3){
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

  }

};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Prompt user for password settings, generate password and return it
function generatePassword() {
  
  
}



