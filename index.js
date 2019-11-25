// Generate a random password with the input provided by the user


var password = {
    lowerCaseArr: ['abcdefghijklmnopqrstuvwxyz'],
    upperCaseArr: ['ABCDEFGHIJKLMONPQRSTUVWXYZ'],
    symbolsArr: ['~`!@#$%^&*()={}?<>:;'],
    numbersArr: [1,2,3,4,5,6,7,8,9,0],

    inputLength: function() {
        var lengthInput = prompt("Pick a number between a 8 and 128 for the password length");
          lengthInput = parseInt(lengthInput)
        
        console.log(`Your password will be ${lengthInput} characters long`)
    },

    symbolInput: function() {
        var symbols = confirm("Would you like special characters?");
        
        console.log(symbols)
    },

    randomLower: function() {
        var lowerCase = confirm("Would you like lower case characters?");
         console.log(lowerCase)
    },

    randomUpper: function() {
        var upperCase = confirm("Would you like upper case characters?");
        console.log(upperCase)
    }
}




password.inputLength()
password.symbolInput()
password.randomLower()
password.randomUpper()


alert('Click the generate button to see your new password')












