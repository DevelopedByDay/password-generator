
var pass = "";

complexF = function() {
  var complexity = window.prompt("Please choose a password lenght of 8 t0 128 characters by typing in the desired number here.");
  
  if (parseInt(complexity) < 8 || parseInt(complexity) > 128 ){
    window.alert("That is not within the range of 8 - 128. Please try again");
    complexF();
  }
  else {
    console.log(complexity)
    return complexity
  }
  
}

// generation and prompt function
generatePassword = function() {
  
  // set password lenght/comlexity
  var length = complexF();
  
  length = parseInt(length) - 1;
  

  // possible password values and selectors for those values
  var lcharset = "abcdefghijklmnopqrstuvwxyz";
  var ucharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var ncharset = "0123456789";
  var scharset = "!@#$%^&*?/<>+_-=";
  var charseta = ""

  var confirmL = window.confirm("Do you want lower case letters in your password?")
  var confirmU = window.confirm("Do you want upper case letters in your password?")
  var confirmN = window.confirm("Do you want number in your password?")
  var confirmS = window.confirm("Do you want symobls in your password?")

  if (confirmL) {
    charseta = charseta + lcharset;
  }
  if (confirmN) {
    charseta = charseta + ncharset;
  }

  if (confirmU) {
    charseta = charseta + ucharset;
  }

  if (confirmS) {
    charseta = charseta + scharset;
  }
  console.log(charseta)
  

  for(var i = 0; i <= length; i++) {
    pass = pass + charseta.charAt(Math.floor(Math.random() * Math.floor(charseta.length - 1)));

    console.log(pass);
  }
    return pass; 
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
