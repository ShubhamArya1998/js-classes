//some advanced Array Methods
//first is to concateante or push array into another array
const sportsChannel=['startSports','JioCinema','Hotstar'];
const seriesChannel=['netflix','prime','sonyLiv']
// Pushing the entire seriesChannel array into the sportsChannel array
sportsChannel.push(seriesChannel)
// Concatenating the arrays and logging each element individually
//#spread Operator
console.log(...sportsChannel,...seriesChannel);


//flat()
const flatArray=[1,2,3,[5,6,[7,6]]] //array inside array and can be n number of array one inside one will be optimize or can say make readable and easy by flat(ifinity or no.like 1 or 2 or) will convert all arrays into one
console.log(flatArray.flat(Infinity));


//isArray fromArray ofArray
//isArray check whether it is array or not
console.log(Array.isArray("checkArrayOrNot")) 

//from creates the array of given parameter
console.log(Array.from("createArray")); 

//create array from key value pair which will give output an empty array
console.log(Array.from({name:"shubham"})) //an object in key value pair will give ouput an empty array beacuse we did not give it specific that it has to create array of key or value

//create an array of key value pair using object.keys & object.values
console.log(Array.from(Object.keys({name: "shubham"}))); // Output: ["name"]
console.log(Array.from(Object.values({name: "shubham"}))); // Output: ["shubham"]
 
//Array.of is used to create array from set of elements or variables
let score1=1
let score2=2
let score3=3
console.log(Array.of(score1,score2,score3))


