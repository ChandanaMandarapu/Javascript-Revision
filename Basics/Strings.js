// Normal way of defining and concatenating Strings
const name = "Chandana"
const projectCount = 100
console.log(name + projectCount);

// Modern way of defining and concatenating strings

console.log(`Hello my name is ${name} and I did almost ${projectCount} projects.`)

// String like a object

const userName = new String('karthik-np-gd ')

console.log(userName[1])
// this shows the given string is a obj
console.log(userName.__proto__);
console.log(userName.length)
console.log(userName.toUpperCase());
console.log(userName.charAt(3))
console.log(userName.indexOf('h'))
// even negitive values of index is assigned it ignores and starts from first itself
const userName2 = userName.substring(0,4)
console.log(userName2);
// slice takes the -ve index too and give the required part

const anotherString = userName.slice(-7,4)
console.log(anotherString);
// Trim is used mainly in input field in a form where if the user exceeds the char limit and add extra spaces we can use this to trim
const trimString = "              chand            "
console.log(trimString);
console.log(trimString.trim());
// replace

const url = "https://google%.com"
console.log(url.replace("%", "-"));
console.log(url.includes('google'));

// split method to convert string into array

console.log(userName.split('-'))