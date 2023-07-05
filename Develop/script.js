// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {

  var userName = prompt("What is your name?");

  if (!userName) { //this will return undefined
  return;
}
  else { window.alert(userName + ", Your password should be at least 8 characters long and not more than 128 characters" +
  " and a combination of uppercase letters, lowercase letters, numbers, and symbols. ");
}

  var Uppercase = confirm("Do you want an uppercase in your password?");
  var Lowercase = confirm("Do you want a lowercase in your password?");
  var Numbers = confirm("Do you want an numbers in your password?");
  var Specials = confirm("Do you want an special characters in your password?");

//Get the users desired length
  var passwordLength;
  do {
    passwordLength = parseInt(prompt("Enter the desired length of the password (between 8 and 128):"));
  } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);

  var password = "";
  var options = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*?1234567890";

  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * options.length);
    password += options[index];
  }
  
  return password;

}

