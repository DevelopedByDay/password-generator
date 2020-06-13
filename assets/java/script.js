

// function to choose password length 
complexF = function() {
  var complexity = "0"
  complexity = window.prompt("Please choose a password lenght of 8 to 128 characters by typing in the desired number here.");
  
  // force user to select number within bounds
  if (parseInt(complexity) < 8 || parseInt(complexity) > 128 || complexity === "0" || complexity === null) {
    window.alert("That is not within the range of 8 - 128. Please try again");
    return complexF()
  }
  else {
    //confirm length
    console.log(complexity)
    return complexity
  }
}

// function allows for forcing users to choose at least one set of values
confirmer = function() {
  // possible password values and selectors for those values
  var lcharset = "abcdefghijklmnopqrstuvwxyz";
  var ucharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var ncharset = "0123456789";
  var scharset = "!@#$%^&*?/<>+_-=";
  var charseta = "";

  var confirmL = window.confirm("Do you want lower case letters in your password?");
  var confirmU = window.confirm("Do you want UPPER case letters in your password?");
  var confirmN = window.confirm("Do you want numbers in your password?");
  var confirmS = window.confirm("Do you want symobls in your password?");


  //generate character list based on selection
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
  if (charseta === "") {
    window.alert("Please select at least one set of characters.")
    return confirmer()
  }
  return charseta
}

// generation and prompt function
generatePassword = function() {
  var pass = "";
  
  // set password lenght/comlexity
  var length = complexF();
  
  // makes up for extra integer from string and turns into number
  length = parseInt(length) - 1;
  
  // captures value from user input
  charset = confirmer()
  
  
  // confirm character list
  console.log(charset)


  for(var i = 0; i <= length; i++) {
    pass = pass + charset.charAt(Math.floor(Math.random() * Math.floor(charset.length - 1)));
  }
    // confirm password 
    console.log(pass)
    return pass
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
