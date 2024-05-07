//all about Number
/*
const score=400 //it will by default consider it number as it it in general no. format only
console.log(score);
const balance=new Number(100) //here we are giving it Number datatype predefined
console.log(balance);

console.log(balance.toString());  //converting balance to string or no. to string
console.log(balance.toString().length); //to check the length of string

console.log(typeof balance)
console.log(balance.toFixed(1));

const otherNumber=1123.8954
console.log(otherNumber.toPrecision(4)); //give the precise no. like if we give (4) it will output accordin to it if we give (2) then it will print accordingly.

const otherNumberS=1000000
console.log(otherNumberS.toLocaleString('en-IN')); //It will give proper output in , separated and ()if we keep it empty it will give 1,000,000 but if we want it in indian number format then only we will put ('en-IN') in bracket.
*/

//******************** Math *****************************//

/*console.log(Math);
console.log(Math.abs(-4)); //abs is absolute it converts -ve to +ve value 
console.log(Math.abs(4)); //it doesn't convert +ve to -ve value
console.log(Math.round(4.2)); //it give round off no.
console.log(Math.ceil(4.2)); //ceil gives upper side no. only
console.log(Math.floor(4.9)); //floor gives down side no. only so we will use round() only instead if ceil() or floor()
console.log(Math.min(2,2,21,5,9)); //give minimun
console.log(Math.max(2,2,21,5,9)); //give maximum */

console.log(Math.random()); //Math.random() will always  give value between 0 and 1 only
console.log(Math.random()*10); //the value can be 0 also which will result 0 so we will add +1 so atleast the random number generated will be atleast 1 
console.log((Math.random()*10)+1);  //adding +1 so the value will be minmum 1

const min=10
const max=20
 console.log(Math.floor(Math.random()*10) + min); //here we are giving minimum and maximum both and using Math.floor also because we don't want no. in decimal 