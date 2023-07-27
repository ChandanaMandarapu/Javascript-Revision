// Thier are 2 ways to declare objects
// Constructor Objects which are singleton and are created using Object.create

// Object Literals
const mySymbol = Symbol("$");
const user = {
  name: "chandu",
  age: 19,
  email: "chandana@xml.com",
  isLoggedIn: false,
  data: [5, 8],
  [mySymbol]: "$", //way of declaring symbols
};

// correct way to access objects

console.log(user["name"]);
console.log(user[mySymbol]); //way to access symbol
user.name = "chandana";
// Object.freeze(user) //freezes the object here
user.name = "chandrakanth";
console.log(user);

// declaring a function

user.greeting = function () {
  console.log("Hello User");
};
// Here this keyword takes the reference of name from the object
user.greetingTwo = function () {
  console.log(`Hello User, ${this.name}`);
};
console.log(user.greeting());
console.log(user.greetingTwo());
