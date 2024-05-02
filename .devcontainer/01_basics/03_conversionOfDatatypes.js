let numberInString="25" //this is string
let convertString=Number(numberInString) //here i m converting string to number
console.log(convertString);  //
console.log(typeof (convertString));

let anotherString="25abc"
let anothercString=Number(anotherString)
console.log(typeof anothercString);
console.log(anothercString) //it will give output Nan because we have digit + alphabets in anotherString which after conversion in number give typeof to Number but when we Print the value of anothercString it will NaN

let numbertoString=33
let convertednumber=String(numbertoString)
console.log(typeof convertednumber); // converted number into string
console.log(convertednumber)
let randomvar=null
console.log(randomvar);
console.log(typeof randomvar) //datatype of null is object . null is its own type, distinct from objects, but historically it was incorrectly labeled as an object due to implementation decisions made in early JavaScript versions.
let undefinedvar=undefined
console.log(typeof undefinedvar) //datatype of undefined var is undefined itself

let isLoggedIn = "shubham"

let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn); //Result will be true because any non-empty string, regardless of its content, is considered "truthy" in JavaScript.

 let boll=""
 let boole=Boolean(boll)
console.log(boole); //When you convert an empty string to a boolean value in most programming languages, the result will be false. This is because an empty string represents a lack of content or absence of characters, which typically corresponds to a "false" state in boolean logic.

// 1 => true; 0 => false
// "" => false
// "shubham" => true

//***********operations***************//

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); //output 12
// console.log(1 + "2"); //output 12
// console.log("1" + 2 + 2); //output 122 if string is at 1st then it will perform arthimetic operation it will consider whole statement as string
 // console.log(1 + 2 + "2"); //output 32  if string is at last then it will perform arthimetic operation and then content of string will be return as it is at last

 // console.log(1 + 2 + "abc"); //output 3abc  if string is at last then it will perform arthimetic operation and then content of string will be return as it is at last
 

console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

/*let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);*/
