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

let userTwo=userOne  //Both userOne and userTwo now reference the same object in memory. we are creating 2nd user only not object which we can say reference which will refer to same object in memory as userOne.

userTwo.email="arya@gmail.com" // Updates the email property of the shared object. Here we are updating one of its key value pair which will update user one email as we are poiting to same object in both user and whenever we will print both user the proerty which is updated or changed will give reflect in both userOne & userTwo as they are pointing to same object . 
console.log(userOne.email)
console.log(userTwo.email)