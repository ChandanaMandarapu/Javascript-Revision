const person = {
  name: "chandana",
  age: 19,
  country: "India",
};
function logData() {
  console.log(
    `${person.name} is ${person.age} old and lives in ${person.country}`
  );
}

let age = 15;

if (age < 6) {
  console.log("free");
} else if (age < 18) {
  console.log("child discount");
} else if (age < 27) {
  console.log("student discount");
} else if (age < 67) {
  console.log("full price");
} else {
  console.log("senior citizen discount");
}

let countries = ["india", "america", "russia", "vietnam"];
for (let i = 0; i < countries.length; i++) {
  console.log("- " + countries[i]);
}

let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
largeCountries.pop();
largeCountries.push("pakistan");
largeCountries.shift();
largeCountries.unshift("china");
console.log(largeCountries);

let day = 13;
let weekday = "Friday";

if (day == 13 && weekday == "Friday") {
  console.log("scary");
}

let hands = ["rock", "paper", "scissor"];

function game() {
  let randomIndex = Math.floor(Math.random()) * 3 + 1;
  return hands[randomIndex];
}
console.log(game());

/* 
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let randomIndexOne = Math.floor( Math.random() * fighters.length )
    let randomIndexTwo = Math.floor( Math.random() * fighters.length )
    stageEl.textContent = fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo]
})
*/
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function sortFruit() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
      appleShelf.textContent += "🍎";
    } else if (fruit[i] === "🍊") {
      orangeShelf.textContent += "🍊";
    }
  }
}

function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * calculateFactorial(n - 1);
}

const factorialResult = calculateFactorial(5);
console.log(`The factorial of 5 is ${factorialResult}`);

function findLongestWord(words) {
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

const wordArray = ["apple", "banana", "strawberry", "blueberry", "watermelon"];
const longest = findLongestWord(wordArray);
console.log(`The longest word is: ${longest}`);

// Obj comparision

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const objA = { a: 1, b: 2, c: 3 };
const objB = { a: 1, b: 2, c: 3 };
const objC = { a: 1, b: 2, d: 4 };

console.log("Objects A and B are equal:", compareObjects(objA, objB));
console.log("Objects A and C are equal:", compareObjects(objA, objC));

// If possible, use const. If not, use let.

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
const basePrice = 520;
const discount = 120;
let shippingCost = 12;
let shippingTime = "5-12 days";

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15;
shippingTime = "7-14 days";

// Calculating the full price
const fullPrice = basePrice - discount + shippingCost;

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime);

// Inner Html

// rendering a buy button iside a div container

const container = document.getElementById("container");
container.innerHTML = "<button onclick = 'buy()'>Buy!</button>";

// rendering a para

function buy() {
  container.innerHTML += "<p>Thank you for buying!</p>";

  // one way to render dom to page
  const li = document.createElement("li");
  li.textContent = myLeads[i];
  ulEl.append(li);

  // template strings/literals

  const recipient = "James";
  const user = "chandana"
  // Refactor the email string to use template strings
  const email = `
  Hey ${recipient}! 

  How is it going? 

  Cheers ${user}
`

  console.log(email);
}

// Local storage in JavaScript is like a small, persistent storage space in your browser. It lets you store data like user preferences or settings on a user's device, even after they close the browser. It's easy to use, and you can save and retrieve data without a server.

// localStorage.setItem("myName", "Per Harald Borgen")

let name = localStorage.getItem("myName")
console.log(name)

// localStorage.clear()

let myLeads = `["www.awesomelead.com"]`

// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("www.lead2.com")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)

// truthy and falsy

// "" , 0 , false , null , undefined , NaN - falsy value 
// by default js keeps truth values

let currentViewers = null

currentViewers = ["jane", "nick"]

currentViewers = null

if (currentViewers) {
    // do something , e.g. notify the live streamers
    console.log("we have viewers")
}

// checking some expressions

console.log(  Boolean("")   ) // false
console.log(  Boolean("0")  ) // true
console.log(  Boolean(100)  ) // true
console.log(  Boolean(null) ) // false
console.log(  Boolean([0])  ) // true 
console.log(  Boolean(-0)   ) // false

// function parameters

const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting , name , emoji) {
    welcomeEl.textContent = `${greeting} , ${name} ${emoji}`   
}

greetUser("How are u doing","chandana","😎")

function add(num1, num2) {
  return num1 + num2
}

add(3, 4)

// Arrays as parameters

function getFirst(arr) {
  return arr[0]
}

let first = getFirst([10, 452, 5])

console.log(first)