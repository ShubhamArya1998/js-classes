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