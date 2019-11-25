// Generate a random password with the input provided by the user


var password = {
    serPassword: [],
    passwordLength: null,
    containsSpecial: false,
    containsUppercase: false,
    containsLowercase: false,
    lowerCaseArr: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    upperCaseArr: ["A","B","C","D","E","F","G","H","I","J","K","L","M","O","N","P","Q","R","S","T","U","V","W","X","Y","Z"],
    symbolsArr: ["~","`","!","@","#","$","%","^","&","*","(",")","=","{","}","?","<",">",":",";"],
    numbersArr: [1,2,3,4,5,6,7,8,9,0],

    inputLength: function() {
        var lengthInput = prompt("Pick a number between a 8 and 128 for the password length");
          lengthInput = parseInt(lengthInput)
        
        if(lengthInput >= 8 && lengthInput <= 128) {
            password.passwordLength = lengthInput
        } else {
            inputLength();
        }
          
        console.log(`Your password will be ${lengthInput} characters long`)
    },

    symbolInput: function() {
        var symbols = confirm("Would you like special characters?");

        if (symbols) {
            password.containsSpecial = true
          }
        
        console.log(symbols)
    },

    randomLower: function() {
        var lowerCase = confirm("Would you like lower case characters?");

        if (lowerCase) {
            password.containsLowercase = true
          }

         console.log(lowerCase)
    },

    randomUpper: function() {
        var upperCase = confirm("Would you like upper case characters?");

        if (upperCase) {
            password.containsUppercase = true
          }
          
        console.log(upperCase)
    }
}




password.inputLength()
password.symbolInput()
password.randomLower()
password.randomUpper()


alert('Click the generate button to see your new password')












