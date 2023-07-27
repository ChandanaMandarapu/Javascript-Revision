// {} scope

let a = 800;

if (true) {
  let a = 99;
  const b = 20;
  console.log(a); //block scope
}
console.log(a); //global scope

// Core scope is diff in run time environment and in Browser

// Function scope and understanding how child functions access parent function values

function one() {
  const username = "chand";
  // nesting two() function inside one()
  // here two() can access variable of one() which here is a parent function
  function two() {
    const password = "888";
    console.log(username);
  }
  // console.log(password)  it throws an error as we cant access it out of the block scope
  two();
}
one();

// Using ifelse

if (true) {
  const username = "chandana";

  if (username === "chandana") {
    const website = " google ";
    console.log(username + website);
  }
  // console.log(website) throws an error
}
// console.log(username) throws and error

// An unique concept a normal way of declaring a function and here if we are printing the output even before intialisation its possible in this form of declaring funtion
console.log(addone(4));
function addone(num) {
  return num + 1;
}
// addTwo() throws an error because we hold our function in a variable an intro to mini hoisting conclusion is in this method we cant initilaze value before declaration

const addTwo = function (num) {
  return num + 2;
};
