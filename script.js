// Assignment Code
var generateBtn = document.querySelector("#generate");

function Password () {
  this.pwLength = 0,
  this.pwCase = 0,
  this.pwCharacters = 0

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



