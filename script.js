// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = document.getElementsByName("length")[0].value;
  var lowercase = document.getElementById("lowercase").checked;
  var uppercase = document.getElementById("uppercase").checked;
  var number = document.getElementById("number").checked;
  var specialCharacter = document.getElementById("specialCharacter").checked;
  
  console.log("passwordLength", passwordLength);
  console.log("lowercase", lowercase);
  console.log("uppercase", uppercase);
  console.log("number", number);
  console.log("specialCharacter", specialCharacter);
  
  if (passwordLength == "" || isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    return "Please enter a number between 8 and 128";
  }
  else if (!(lowercase || uppercase || number || specialCharacter)) {
    return "Please select at least one of Lowercase, Uppercase, Number, or Special Character"
  }
  else {
    
    var specialChar;
    var specialCharIndex;
    if(specialCharacter) {
      var special = "!@#$%^&*()";
      
      var randomCharIndex = Math.floor(Math.random() * special.length);
      specialChar = special.charAt(randomCharIndex);
      console.log("specialChar", specialChar);
      
      specialCharIndex = Math.floor(Math.random() * passwordLength);
      console.log("specialCharIndex", specialCharIndex);
    }
    
    var num;
    var numberIndex;
    if (number) {
      num = Math.floor(Math.random() * 10);
      console.log("num", num);
      
      while (!numberIndex || numberIndex == specialCharIndex) {
        numberIndex = Math.floor(Math.random() * passwordLength);
        console.log("numberIndex", numberIndex);
      }
    }
    
    var returnPassword = "";
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    if (uppercase && !lowercase){
        alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    }
    
    for (var i = 0; i < passwordLength; i++){
      // Adding the special character
      if (i == specialCharIndex){
        returnPassword = returnPassword + specialChar;
      }
      // Adding the number
      else if (i == numberIndex) {
        returnPassword += num.toString();
      }
      else {
        var randomLetIndex = Math.floor(Math.random() * alphabet.length);
        var letterChar = alphabet.charAt(randomLetIndex);
        if (uppercase && lowercase) {
          var random_upper = Math.random() >= 0.5;
          if (random_upper){
            returnPassword += letterChar.toUpperCase();
          }
          else {
            returnPassword += letterChar;
          }
        }
        else {
          returnPassword += letterChar;
        }
      }
    }
    
    return returnPassword;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
