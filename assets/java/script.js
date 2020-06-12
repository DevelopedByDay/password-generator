
var pass = "";

// generation and prompt function
generatePassword = function() {
  
  // set password lenght/comlexity
  var complexity = window.prompt("Please choose a password lenght of 8 t0 128 characters by typing in the desired number here.");
  complexity = parseInt(complexity);
  

  // possible password values and selectors for those values
  var lcharset = "abcdefghijklmnopqrstuvwxyz";
  var ucharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var ncharset = "0123456789";
  var scharset = "!@#$%^&*?/<>+_-=";
  var charseta = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*?/<>+_-="

  var confirmL = window.confirm("Do you want lower case letters in your password?")
  var confirmU = window.confirm("Do you want upper case letters in your password?")
  var confirmN = window.confirm("Do you want number in your password?")
  var confirmS = window.confirm("Do you want symobls in your password?")

  if (confirmL, confirmU, confirmN, confirmS) {
    for(var i = 0; i <= complexity; i++) {
      pass = pass + complexity.charAt(Math.floor(Math.random() * Math.floor(charseta.length - 1)));
    }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
