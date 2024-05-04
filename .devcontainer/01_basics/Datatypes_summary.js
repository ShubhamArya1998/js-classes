//primitive data types
// Symbol,String,boolean,bigInt,Number,Null,Undefined
const id= Symbol ('123') //Symbol is used to create a totally unique, one-of-a-kind identifier.Even if you call Symbol with the same string, the instances will be different.
const anotherId= Symbol('123')
console.log(id===anotherId) //both are not equal
console.log(typeof anotherId);

let stringExample="ABC231"  //STRING EXAMPLE
let IsLoggedIn=false //BOOLEAN EXAMPLE if we are login someuser and it is not available it will print false
let outsideTemp=null // NULL EXAMPLE we are give outside temperature null it means it will be empty not 0
console.log(outsideTemp); //it will print null

let bigNumber=2124545451215454454545454545454545454n
console.log(typeof bigNumber);

const num1=50 //normal number
const num2=50.50 //decimal number
console.log(num1,num2);

let undefinedExample // undefined can be code like this
let undefinedExample1=undefined //undefined can be code like this also 
console.log(undefinedExample,undefinedExample1);



//Reference(non-primitive data type)
// ARRAY,OBJECT,FUNCTION

const heros = ["shaktiman", "naagraj", "doga"]; //heros is an array, which is an ordered collection of values.In JavaScript, arrays can contain elements of different types, including numbers, strings, objects, or even other arrays.

let myObj = {
    name: "hitesh",
    age: 22,
}  //'myObj' is an object, which is an unordered collection of key-value pairs.  

console.log(heros,myObj); //Print values of array and object
//SUMMARY OF Array and Object
//Arrays are used to store ordered collections of values, while objects are used to store key-value pairs, allowing for more structured data representation. Each has its own use cases and advantages depending on the specific requirements of your program.



const myFunction = function(){
    console.log("Hello world");
}




