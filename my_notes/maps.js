//All About Map.. Map is an object datatype in js
//The Map object holds key-value pairs and remembers the original insertion order of the keys.

//here i have created map & set its three key value pairs till line 4
const myMap = new Map();
myMap.set("name", "shubham");
myMap.set("surname", "arya");
myMap.set("contact", 299820);

//checking datatype of myMap OUTPUT:object
 console.log(typeof myMap); 

//getting value by key 
console.log(myMap.get("name")); 

//using (for of) loop to get all keys
for (const Keys of myMap.keys())
 {
  console.log(Keys);
}

//using (for of loop) to get all values
for (const Values of myMap.values()) 
 {
  console.log(Values);
}

//using (for of loop) to get both key and value using `${}`(string interpolation)
for (const [key,value] of myMap) 
 {
    console.log(`${key}:${value}`); 
}

//using (for of loop) to get all key and value
for (const [Keys,values] of myMap) {
       console.log(Keys,"=",values);
     }