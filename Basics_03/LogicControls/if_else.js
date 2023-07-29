const age = 20;

if (age > 18) {
  let access = "drive";
  console.log(`You can ${access}`);
} else {
  console.log("You cant drive");
}
// Implicit scope

if (age > 20) console.log("done");

const isLoggedIn = true;
const upiTransaction = true;
const loggedInFromGoogle = true;
const loggedInEmail = false;

if (isLoggedIn && upiTransaction) {
  console.log("You can shop");
}
if (loggedInEmail || loggedInFromGoogle) {
  console.log("Logged in");
}

// Falsy and Truthy values

// falsy values - false , 0 ,-0 , BigInt 0n , "",null,undefined,NaN

// TRUTHY values

// "0" , "false", " " , [], {} , function(){}

const userEmail = [];

if (userEmail.length === 0) {
  console.log("Empty Array");
}
const userPassword = {};

if (Object.keys(userPassword).length === 0) {
  console.log("Empty Object");
}

// Nullish Coalescing Operator (??) :null undefined

let v1;
v1 = 5 ?? 10; //takes firstvalue
let v2;
// v2 = null ?? 10 // gives 10 for null
v2 = null ?? 88 ?? 99; // gives first value 88
console.log(v1);
console.log(v2);

// Ternary Operator

const price = 100;

price >= 80 ? console.log("u got tea") : console.log("No tea");
