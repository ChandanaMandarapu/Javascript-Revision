const user = {
  username: "chandana",
  price: 999,
  // this keyword refers to the current context and prints the values
  greetings: function () {
    console.log(`${this.username} , welcome to my website`);
    console.log(this); //this prints the whole context
  },
};
// In the first context the username chandana is printed
user.greetings();
user.username = "karthik"; // now we changed the context like changed the value of variable
user.greetings();

// Here this keyword in node prints the empty global object but in case of browser window object is given

console.log(this);

// We cant access this in function it works only in an object

const one = function one() {
  let username = "chandana";
  console.log(this.username); //which is undefined
};
one();

// +++++++++++++++++ Arrow Functions+++++++++++++++++

const add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(3, 45));

// IMPLICIT RETURN where we shouldnt use curlybraces only parenthisis is used

const addTwo = (n1, n2) => n1 + n2;
console.log(addTwo(3, 4))(
  // const addTwo = (n1,n2) => ({username:"chandana"}) for objects

  // Immediately Invoked Function Expressions (IIFE) which executes immediately and used to avoid global scope variables pollution we use IIFE and to end this IIFE for sure ; is used

  function two() {
    // Named IIFE
    console.log("connected");
  }
)();

((name) => {
  // Unamed IIFE
  console.log("chandana $(name");
})("mandarapu");
