// let var const
var x;
// Prefer not to use var because an issue in block and functional scope
const user = "Chandana"
var userEmail = "chandanamandarapu93@gmail.com"
let userPassword = "1234"
userCity = "Hyderabad"
let userState; //undefined

userEmail = "chandana@gmail.com"
userPassword = "2345"
userCity = "Kerala"

console.table([user,userEmail,userPassword,userCity,userState])

// Datatypes and ECMA script

"use strict"; //treating all JS CODE as newer version of ECMA script 

// alert( 5 + 5 ) //using of alert is diff in node compared to browser

// PRIMITVE DATATYPES - NNSSBBU 
/*
number range => 2^53
NULL an empty value which neither assigned nor declared [standalone value]
undefined which isnt defined
symbol used in REACT
 */
let name = "chandu"
let age = 19
let isTrue = true
console.log(typeof null) //object
console.log(typeof undefined); //undefined
const x = Symbol('988')
const y = Symbol("988")
console.log(x === y)
// String to Number conversion 

let n = "99"

console.log(typeof n)
let n1 = Number(n) //converting n string into number
console.log(typeof n1)
console.log(n1) 

// "99" => 99
// "99abc" => NaN type is number but value is NaN
// true => 1 false => 0
// Number to string conversion
let s1 = 44
let sN = String(s1)
console.log(sN)
console.log(typeof sN)

// Boolean conversion

let bool = 1;
let booleanCheck = Boolean(bool)
console.log(booleanCheck);

// "" => false for empty conversion
// "String" => true for string conversions
// If string is first everything is treated as string but if string is in the last first it does the operation and then converts

console.log("1"+2) //12
console.log(1+"2") //12
console.log("1"+2+2) //122
console.log(1 + 2 + "2") //32

// Post and Pre increments

// Post-increment: variable is incremented AFTER its current value is used
let num = 5;  // num starts with the value 5
let result1 = num++;  // The current value of num (5) is assigned to result1, THEN num is increased to 6
console.log(result1); // Output: 5
console.log(num);     // Output: 6

// Pre-increment: variable is incremented BEFORE its current value is used
let numb = 5;  // num starts with the value 5

let result2 = ++numb;  // num is increased to 6, THEN the value of num (6) is assigned to result2
console.log(result2); // Output: 6
console.log(numb);     // Output: 6

// COMPARISIONS OF DATATYPES
// make sure to compare values of same datatypes
console.log("3" > 2);
console.log("02" > 1)

console.log(null > 0) // here null = 0 so it gives false
console.log(null == 0) // here equality and comparision operators work differntly in JS
console.log(null >= 0) //which returns true because here js converts null into 0 so in this case its true

// HOISTING - Here value of x is undefined now the due to hoisting in javascript the let x; moves on to top and x = 12 remains in the bottom itself

console.log(x)
var x = 12