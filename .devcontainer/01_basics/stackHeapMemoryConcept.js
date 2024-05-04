// #Stack Memory (applied only on primitive datatype)
let userName="shubham"
let anotherUser=userName //giving value to 2 variable of 1st one
 anotherUser="arya" //here changing or updating the value of 2nd variable
 console.log(anotherUser);  //output-arya because value has updated
 console.log(userName);  //it will remain unchanged


 // #heap memory (applied on non-primitive or reference data type)

 let userOne={
    email:"shubham@gmail.com",
    Age:26
 }

let userTwo=userOne  //we are creating 2nd user and give it reference of 1st user

userTwo.email="arya@gmail.com" //here we are updating one of its key value pair which will update user one email also due to its property of heap memory and whenever we will print both user the key value pair which has updated or changed will give same output for both users. 
console.log(userOne.email)
console.log(userTwo.email);