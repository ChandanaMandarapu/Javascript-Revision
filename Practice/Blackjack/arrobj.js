const arr = ["chandu", 19, false];
arr.push("art");
arr.pop();

let cards = [7, 4];
cards.push(6);
let messages = [
  "Hey, how's it going?",
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
  "Nice yrr",
];

let newMessage = "Same here!";
messages.push(newMessage);
console.log(messages);

messages.pop();
console.log(messages);

//    START           FINISH       STEP SIZE
for (let count = 10; count < 21; count += 1) {
  console.log(count);
}
for (let i = 0; i < messages.length; i++) {
  console.log(messages[i]);
}
// combining for loops arrays and manipulating dom
let sentence = ["Hello", "my", "name", "is", "Chandu"];
let greetingEl = document.getElementById("greeting-el");

// How do you keep the spaces between the words if I remve them from the array?

for (let i = 0; i < sentence.length; i++) {
  greetingEl.textContent += sentence[i] + " ";
}
let player1Time = 102;
let player2Time = 107;

function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player2Time < player1Time) {
    return player2Time;
  } else {
    return player1Time;
  }
}

let fastestRace = getFastestRaceTime();

console.log(fastestRace);

function getTotalRaceTime() {
  return player1Time + player2Time;
}

let totalTime = getTotalRaceTime();

console.log(totalTime);

// let randomNumber = Math.random() * 6

let flooredNumber = Math.floor(3.45632);

console.log(flooredNumber);

/* 

What does Math.floor() do to positive numbers?

Your answer: it removes the decimals

*/

// generating a random number b/w 1-6

function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

console.log(rollDice());
// logical operators
let hasCompletedCourse = true;
let givesCertificate = true;

if (hasCompletedCourse === true && givesCertificate === true) {
  generateCertificate();
}

function generateCertificate() {
  console.log("Generating certificate....");
}

let hasSolvedChallenge = true;
let hasHintsLeft = false;

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function

if (hasSolvedChallenge === false && hasHintsLeft === false) {
  showSolution();
}

function showSolution() {
  console.log("Showing the solution....");
}

let likesDocumentaries = true;
let likesStartups = true;

if (likesDocumentaries === true || likesStartups === true) {
  recommendMovie();
}

function recommendMovie() {
  console.log("Hey, check out this new film we think you will like!");
}

// all on objects

let course = {
  title: "Learn frontend",
  lessons: 16,
  creator: "chandana",
  length: 63,
  level: 2,
  isFree: true,
  tags: ["html", "css"],
};

console.log(course.tags);

let castle = {
  title: "charminar",
  price: 190,
  isHost: true,
  images: ["img/castle.png"],
};
console.log(castle.price);
console.log(castle.title);
