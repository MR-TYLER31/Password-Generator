

var chars = {
    lowerCase: ['abcdefghijklmnopqrstuvwxyz'],
    upperCase: ['ABCDEFGHIJKLMONPQRSTUVWXYZ'],
    symbols: ['~`!@#$%^&*()={}?<>:;'],
    numbers: [1,2,3,4,5,6,7,8,9,0],

    inputLength: function() {
        var lengthInput = prompt("Pick a number between a 8 and 128 the password length");
          lengthInput = parseInt(lengthInput)
        
        console.log(lengthInput)
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




chars.inputLength()
chars.symbolInput()
chars.randomLower()
chars.randomUpper()













