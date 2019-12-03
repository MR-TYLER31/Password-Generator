// Generate a random password with the input provided by the user
var resultEl = document.getElementById('password');
var generateBtn = document.getElementById('generate');
var copyBtn = document.getElementById('copy');



// Global Variables
var lowerCaseEl,
    upperCaseEl,
    numberEl,
    symbolEl,  
    lengthEl,
    length,
    lowercase,
    uppercase,
    symbol,
    number;

   var masterPassword= [];
   var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
   var symbolArr = ['!','@','#','$','%','^','&','*','(',')','_','+','=','/','{','}'];
   var numberArr = [0,1,2,3,4,5,6,7,8,9];

 

   function inputLength() {
            var lengthEl = prompt("Pick a number between a 8 and 128 for the password length");
            var length = parseInt(lengthEl);
            if(lengthEl >= 8 && lengthEl <= 128) {
                console.log(parseInt(length));
            } else {
               inputLength();
            }     
        }
    function userInput() {
        // Asks user if they want to use lowercase letters
        var lowerCaseEl = confirm("Would you like lower case characters?");
        var lowercase = lowerCaseEl;
            if(lowerCaseEl) {      
                masterPassword += lowerCaseArr;      
                console.log(lowercase)
            }  

            // Asks user if they want to use uppercase letters
            var upperCaseEl = confirm("Would you like upper case characters?");
            var uppercase = upperCaseEl;
            if(upperCaseEl) {   
                masterPassword += upperCaseArr;   
                console.log(upperCaseEl);
            }

            // Asks user if they want to use a symbol
            var symbolEl = confirm("Would you like special characters?");
            var symbol = symbolEl;
            if(symbolEl) {    
                masterPassword += symbolArr          
                console.log(symbol)
            }

            // Asks user if they want to use a number
            var numberEl = confirm("Would you like numbers?");
            var number = numberEl;
            if(numberEl) { 
                masterPassword += numberArr                     
                console.log(number)
            }

            console.log(masterPassword)
    }


    // click even to generate random password from users input
generateBtn.addEventListener('click', function() {

    
});

    

 
// pull in selected input from user
// take user input and randomize by the length of the user input length


inputLength();
userInput();




// password min length 8 and max of 128
// 1. how to get info from user
// 2. do something with info
        // a. check if user wants upper case
        // b. check if user want lower case
        // c. check if user wants special character
        // d. check if user wants a number
            // if yes than 
                // console the input
// 2. 
        






//     // Generate random character
//     function generateLowerCase(){
//         var letterLower = lowerCaseArr[Math.floor(Math.random() * 26)]
//         console.log(letterLower);
//     }

//     // Generate random character
//     function generateUpperCase(){
   
//             var letterUpper = upperCaseArr[Math.floor(Math.random() * 26)]
//         console.log(letterUpper);     
//    }

//     // Generate random character
//     function generateSymbol(){
//         var randSymbol = symbolsArr[Math.floor(Math.random() * 20)]
//         console.log(randSymbol);
//     }

//     // Generate random character
//     function generateNum(){
//         var randNum = numbersArr[Math.floor(Math.random() * 10)];
//         console.log(randNum);
//     }

//     // Get the length input from user
//     function inputLength() {
//         var lengthEl = prompt("Pick a number between a 8 and 128 for the password length");
        
//         if(lengthEl >= 8 && lengthEl <= 128) {
//             console.log(`Your password will be ${lengthEl} characters long`);
//             console.log(parseInt(lengthEl));
//         } else {
//            inputLength();
//         }     
//     }

//     // Get the symbol input from user
//     function symbolInput() {
//         var symbolsEl = confirm("Would you like special characters?");

//         if (symbolsEl) {
//             console.log(symbolsEl)
//           }      
//     }

//     // Get the lowercase input from user
//     function lowerInput() {
//         var lowerCaseEl = confirm("Would you like lower case characters?");

//         if (lowerCaseEl) {
//             console.log(lowerCaseEl)
//           }   
//     }

//     // Get the uppercase input from user
//     function upperInput() {
//         var upperCaseEl = confirm("Would you like upper case characters?");

//         if (upperCaseEl) {
//             console.log(upperCaseEl);
//           }
//     }

//     // Get the number input from user
//     function numInput() {
//         var numberEl = confirm("Would you like numbers?");

//         if (numberEl) {
//             console.log(numberEl)
//           } 
//         }

   


  

  


// inputLength()
// symbolInput()
// lowerInput()
// upperInput()
// numInput()
// generateLowerCase()
// generateUpperCase()
// generateSymbol()
// generateNum()





// alert('Click the generate button to see your new password')

