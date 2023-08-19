const user = new Object(); //singletonobject

user.id = "@3344";
user.name = "chand";
user.isLoggedIn = true;

console.log(user);

const userTwo = {
  email: "chandana@gmail.com",
  // nesting objects inside objects
  fullname: {
    username: {
      firstname: "chandana",
      lastname: "mandarapu",
    },
  },
};
// accessing singleton objects
console.log(userTwo.fullname.username.firstname);

const obj1 = { 1: "A", 2: "B" };
const obj2 = { 3: "C", 4: "D" };
// here it gives the above 2 objects in another object

// const obj3 = { obj1, obj2 };
// console.log(obj3);

// Here it returns the target object
const obj3 = Object.assign(obj1,obj2)
console.log(obj3);

// Here we give a empty braces it gives a exact object perfectly
// {} => Targets
// obj1,obj2 = source to merge objects

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

// using Spread operators

const obj5 = { ...obj1, ...obj2 };
console.log(obj5);

// syntax to merge when values comes from database

const obj6 = [
  {
    id: 23,
    // name: chand
  },
  {
    id: 28,
    // name: chand
  },
  {
    id: 83,
    // name: chand
  },
  {
    id: 8,
    // name: chand
  },
];

obj6[1].id;

// Methods to access some key value pairs in object
console.log(Object.keys(user)); //type is ARRAY
// gives each key value pair in array format
console.log(Object.values(user));

console.log(Object.entries(user));

// To check whether the property is exist or not
// console.log(user.hasOwnProperty('isLoggedIn'))

// Object de-structure

const address = {
  area: "Lb Nagar",
  pincode: "50058",
  colony: "IT colony",
};

// normal way to access

// address.colony

// but to access alot of values we can use this method

const { colony } = address;

console.log(colony);
// destructuring
const navbar = ({friend})=>{

}
navbar(friend = "k")