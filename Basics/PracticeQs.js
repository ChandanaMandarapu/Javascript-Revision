// What is the final value of userEmail, userPassword, userCity, and userState when the console.table is called?

const user = "Chandana";
var userEmail = "chandanamandarapu93@gmail.com";
let userPassword = "1234";
userCity = "Hyderabad";
let userState; //undefined

userEmail = "chandana@gmail.com";
userPassword = "2345";
userCity = "Kerala";

console.table([user, userEmail, userPassword, userCity, userState]);

// What are the primitive data types used in JavaScript, and what does the code output when you log the types of null and undefined?

"use strict";

console.log(typeof null);      
console.log(typeof undefined); 

// What are the different ways of converting a string to a number? Provide an example for each.

let n = "99";
console.log(typeof n);        
let n1 = Number(n);
console.log(typeof n1);       

// What will be the output of the comparison expressions in the code?

console.log("3" > 2);         
console.log("02" > 1);        
console.log(null > 0);        
console.log(null == 0);       
console.log(null >= 0);       

