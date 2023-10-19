const person ={
    name: "chandana",
    age: 19,
    country: "India"
}
function logData(){
    console.log(`${person.name} is ${person.age} old and lives in ${person.country}`)
}

let age = 15

if(age < 6) {
    console.log("free")
}else if(age<18){
    console.log("child discount")
}else if(age< 27) {
    console.log("student discount")
} else if(age < 67){
    console.log("full price")
}else{
    console.log("senior citizen discount")
}

let countries = ["india","america","russia","vietnam"]
for(let i = 0; i<countries.length ; i++){
    console.log("- " + countries[i])
}

let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]
largeCountries.pop()
largeCountries.push("pakistan")
largeCountries.shift()
largeCountries.unshift("china")
console.log(largeCountries)

let day = 13
let weekday = "Friday"

if(day == 13 && weekday == "Friday"){
    console.log("scary")
}

let hands = ["rock", "paper", "scissor"]

function game (){
    let randomIndex = Math.floor(Math.random())*3 + 1
    return hands[randomIndex]
}
console.log(game())

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
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function sortFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊"
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
