// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCasedChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCasedChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*']
var password = ''
var passwordOptions = []
//1.Prompt the user for password criteria
//1a.length must be 8 but longer than 128
//1b. Lowercase, Uppercase, Numbers, Special Charaters
//2.Validate the user
//3.Generate password
//4.Display password

function getRandom(arr) {
  // return needed
  return arr[Math.floor(Math.random() * arr.length)]

}


function generatePassword() {
  var passwordLength = parseInt(prompt("How long would you like your password?"));
  while (passwordLength > 128 || passwordLength < 8 || isNaN(passwordLength)) {
    passwordLength = parseInt(prompt("Must be at least 8 Characters"));
  }
  var passwordNumber = confirm("Would you like any numbers in password?");
  var passwordUpperCase = confirm("Would you like any uppercase in password?");
  var passwordLowerCase = confirm("Would you like any lowercase in password?");
  var passwordSpecial = confirm("Would you like and special characters in password?");


  // If statement needed
  if (passwordNumber) {
    passwordOptions = [...numbers, ...passwordOptions]
    password += getRandom(numbers)
  }

  if (passwordUpperCase) {
    passwordOptions = [...upperCasedChar, ...passwordOptions]
    password += getRandom(upperCasedChar)
  }

  if (passwordLowerCase) {
    passwordOptions = [...lowerCasedChar, ...passwordOptions]
    password += getRandom(lowerCasedChar)
  }

  if (passwordSpecial) {
    passwordOptions = [...specialChar, ...passwordOptions]
    password += getRandom(specialChar)
  }

  for (let i = password.length; i < passwordLength; i++) {
    password += getRandom(passwordOptions)

  }


  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);