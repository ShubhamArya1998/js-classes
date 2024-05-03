//primitive data types
// Symbol,String,boolean,bigInt,Number,Null,Undefined
const id= Symbol ('123') //Symbol is used to create a totally unique, one-of-a-kind identifier.Even if you call Symbol with the same string, the instances will be different.
const anotherId= Symbol('123')
console.log(id===anotherId)

let bigNumber=2124545451215454454545454545454545454
console.log(typeof bigNumber);
