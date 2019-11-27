// Generate a random password with the input provided by the user


var password = {
    userPassword: [],
    passwordLength: null,
    containsSpecial: false,
    containsUppercase: false,
    containsLowercase: false,
    containsNum: false,
    lowerCaseArr: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    upperCaseArr: ["A","B","C","D","E","F","G","H","I","J","K","L","M","O","N","P","Q","R","S","T","U","V","W","X","Y","Z"],
    symbolsArr: ["~","`","!","@","#","$","%","^","&","*","(",")","=","{","}","?","<",">",":",";"],
    numbersArr: [1,2,3,4,5,6,7,8,9,0],
    
    generateLowerCase: function(){
        var letterLower = this.lowerCaseArr[Math.floor(Math.random() * 26)]
        console.log(letterLower);

    },

    generateUpperCase: function(){
        var letterUpper = this.upperCaseArr[Math.floor(Math.random() * 26)]
        console.log(letterUpper);

    },

    generateSymbol: function(){
        var randSymbol = this.symbolsArr[Math.floor(Math.random() * 20)]
        console.log(randSymbol);

    },


    inputLength: function() {
        var lengthInput = prompt("Pick a number between a 8 and 128 for the password length");
          lengthInput = parseInt(lengthInput)
        
        if(lengthInput >= 8 && lengthInput <= 128) {
            password.passwordLength = lengthInput
            console.log(`Your password will be ${lengthInput} characters long`)
        } else {
            password.inputLength();
        }     
    },

    symbolInput: function() {
        var symbolsPrompt = confirm("Would you like special characters?");

        if (symbolsPrompt) {
            password.containsSpecial = true
          }
        
        console.log(symbolsPrompt)
    },

    lowerInput: function() {
        var lowerCase = confirm("Would you like lower case characters?");

        if (lowerCase) {
            password.containsLowercase = true
          }

         console.log(lowerCase)
    },

    upperInput: function() {
        var upperCase = confirm("Would you like upper case characters?");

        if (upperCase) {
            password.containsUppercase = true
          }

        console.log(upperCase)
    },
    numInput: function() {
        var num = confirm("Would you like numbers?");

        if (num) {
            password.containsNum = true
          }

        console.log(num)
    },
}


password.inputLength()
password.symbolInput()
password.lowerInput()
password.upperInput()
password.numInput()
password.generateLowerCase()
password.generateUpperCase()
password.generateSymbol()



// alert('Click the generate button to see your new password')












// function that takes the input from user and randomizes into a string 