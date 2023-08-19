// function hmm a very intersting topic
// normally functions are used most often here only 1 thing to remember everytime the code is executed it should return a value and that should be stored into a variable if not the value is displayed but when we actually print the value it will be undefined
function sum(a, b) {
  //   let result = a+b;
  //   return result;
  return a + b;
}
const result = sum(7, 8);
console.log("Result", result);

// many things in the below function
// using string interpolation we returned a statement by passing the argument chandana now if any argument isnt passed we ran a if else condition and then returned it and even at last if user doesnt pass the values we set the default value to chand

function userMessage(username = "chand") {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  // another way of returning functions
  return `${username} just logged in`;
}
console.log(userMessage("chandana"));
console.log(userMessage());

//  When we dont know how many arguments are added we use rest operators which makes a bundle of elements in format of array

function caluclateCartPrice(val1,val2,...num1) {
  return num1;
}
console.log(caluclateCartPrice(599, 999, 888, 666));

// Using objects in functions
const user = {
  name: "chandana",
  price: 99,
};
function useObject(anyobject) {
  console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}
useObject(user);
useObject({
  name: "karthik",
  price: 399,
});

// Using arrays in functions

const myArray = [200, 455, 666, 777];

function returnFirstValue(getArray) {
  return getArray[0];
}
console.log(returnFirstValue(myArray));
console.log(returnFirstValue([200, 500, 400]));
