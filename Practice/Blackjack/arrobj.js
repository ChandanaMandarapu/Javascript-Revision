const arr = ["chandu", 19, false];
arr.push("art");
arr.pop();

let cards = [7, 4];
cards.push(6);
let messages = [
  "Hey, how's it going?",
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
  "Nice yrr"
];

let newMessage = "Same here!";
messages.push(newMessage)
console.log(messages)

messages.pop()
console.log(messages)

//    START           FINISH       STEP SIZE
for ( let count = 10;  count < 21;  count += 1 )  {
    
    console.log(count)

}
for (let i = 0; i < messages.length ; i++) {
    console.log(messages[i])
}