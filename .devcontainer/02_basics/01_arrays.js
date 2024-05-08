//Array typeof() of an Array is object.

/*const myArray=[1,2,3,4]   //normal array declaration
const myArr=new Array(1,2,3,4,5) //array declaration with new keyword or can say by Array constructor ..
console.log(myArray[0]); //Value of array at 0th index
console.log(myArr[2]); ////Value of array at 2nd index

//Array Methods
const ArrayMethods=[1,2,3,4]
ArrayMethods.push(5) //push adds value at last of array
ArrayMethods.push(6) //push adds value at last of array
console.log(ArrayMethods)
ArrayMethods.pop() //pop delete last value of the array
console.log(ArrayMethods)
console.log(ArrayMethods.length) //.length is used to know length of the array
ArrayMethods.unshift(8)
console.log(ArrayMethods) //unshift adds value at starting of array
ArrayMethods.shift()
console.log(ArrayMethods) //shift removes value at starting of array
*/
const newArray=[4,5,6,7,8,9]
console.log(newArray.slice(1,3))  // slice give return inside range excluding the last range limit
console.log(newArray);
console.log(newArray.splice(1,3)) //splice includes value till range given like till 3 in this example 
console.log(newArray); //when we print array after splice the value of array given will be total removed and it means the value of array is now totally changed

console.log(newArray.includes(11)); //includes() check whether the vaue is avialble or not if avaialble it give true otherwise false that means it give boolean result in output .

console.log(newArray.indexOf(5)) //indexOf() gives index of value asked in this case we gave indexOf(5)) where we see 5 is not available in array so it will give -1 always
console.log(newArray.indexOf(4)) //indexOf() gives index of value 4 as 0 as 4 is available at 0th index in array

// Join the array elements with a comma separator
const joinArray=newArray.join() //join converts the array into string .the join() method is used to join the elements of an array into a single string.
console.log(newArray)
console.log(joinArray)

// Join the array elements with a hyphen separator
const joinArrayWithHyphen=newArray.join('-')
console.log((joinArrayWithHyphen));

console.log(typeof newArray) //typeof of a newArray will be object.
console.log(typeof joinArray) //as we have converted the array to string it will output typeof() to string

//reverse()
const reverseArray=[1,2,8,3,4,5]
console.log(reverseArray.reverse())
//sort()
console.log(reverseArray.sort())