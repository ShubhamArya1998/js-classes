//object literals

const userData={
    name:"Shubham",
    age:25,
    email:"shubham@google.com",
    address:"Indore",
    lastLoginDays: ["monday","friday"],
    isLoggedin:false
}
console.log(userData.name);
console.log(userData.age);
console.log(userData.email);
console.log(userData.address);
console.log(userData.lastLoginDays);
console.log(userData.isLoggedin);
//console.log(userData["email"]);
userData.email="shubham@chatgpt" //to update ro change the value 
console.log(userData.email);
//Object.freeze(userData) //object.freeze will not let you change the value once enabled
userData.email="shubham@github.com" //it will not get any error but the changes will not be done as we have freezed the object
console.log(userData); 
 
//function
 userData.greeting=function(){
    console.log("Have a good day!")
 }
console.log(userData.greeting()); //print the value available inside function
console.log(userData.greeting); //prints [Function (anonymous)]

userData.greetingtwo=function(){
    //using string interpolation backticks(``) instead of quotes ("")

    //this is used to referring to same object
    console.log(`Hey js user ${this.name}`); //uses string interpolation to include the value of this.name within the string.
}
console.log(userData.greetingtwo());   //it will print whole function value
