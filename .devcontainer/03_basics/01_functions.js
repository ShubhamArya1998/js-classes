//FUNCTION AND ITS DIFFERENT METHODS

// function declaration with two parameters and then function call with pasiing arguments and console the sum of the parameters  
/*
 function myUser(number1,number2)
  {
 console.log(number1+number2) 
   }
myUser(2,4); 
*/

/*

function myUser1(number1,number2) {
    return (number1+number2) // Function taking arguments and returning the sum
}
let result = myUser1(2, 4); // Call the function and assign the result to the variable
console.log(result); // Log the result to the console

*/

/*
//In JavaScript, when a return statement is encountered in a function, it immediately exits the function and returns the specified value. Any code written after the return statement will not be executed.

function myUser2(number1,number2) {
    return (number1+number2)
    //any code written after return function will not be executed  
    console.log(number1+number2) 
        }
let result= myUser2(2,4); 
console.log(result)
*/

/*
function myUser4(number1,number2)
 {
    console.log(number1+number2) 
}
 let result= myUser4(2,4); 
 console.log(result) //this console will output undefined as we did not return the function output
 */
 function myUser5(number1,number2)
 {
   return(number1+number2) 
}
 let result= myUser5(2,4); 
 console.log(result) //this console will output result as we return the operation inside the function