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
       // Ask the user how long they want their password
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
        







