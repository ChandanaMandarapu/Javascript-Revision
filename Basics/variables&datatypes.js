// let var const

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

"use strict"; //treating all JS CODE as newer version of ECMA

// alert( 5 + 5 ) //using of alert is diff in node compared to browser

// PRIMITVE DATATYPES - NNSSBBU 
/*
number range => 2^53
NULL an empty value which neither assigned nor declared
undefined which isnt defined
symbol used in REACT
 */
let name = "chandu"
let age = 19
let isTrue = true
console.log(typeof null) //object
console.log(typeof undefined); //undefined

// String to Number conversion 

let n = "99"

console.log(typeof n)
let n1 =Number(n)
console.log(typeof n1)

// 99 => 99
// "99abc" => NaN type is number but value is NaN
// true => 1 false => 0

// Boolean conversion

let bool = 1;
let booleanCheck = Boolean(bool)
console.log(booleanCheck);

// "" => false for empty conversion
// "String" => true for string conversions

// COMPARISIONS OF DATATYPES
// make sure to compare values of same datatypes
console.log("3" > 2);
console.log("02" > 1)

console.log(null > 0) // here null = 0 
console.log(null == 0) // here equality and comparision operators work differntly in JS
console.log(null >= 0) //which returns true because here js converts null into 0 so in this case its true