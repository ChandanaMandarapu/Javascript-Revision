let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString())
console.log(myDate.toJSON())
console.log(typeof myDate)

// to declare a date

// let myNewDate = new Date(2023,6,26)
let myNewDate = new Date("2023-07-26")
console.log(myNewDate.toLocaleString())


// Timestamps

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myNewDate.getTime()) //To compare between milliseconds

// To get in seconds

console.log(Math.floor(Date.now()/1000))

let newDates = new Date()
// To get specific date month year hours

console.log(newDates);
console.log(newDates.getMonth() + 1)
console.log(newDates.getDay())

// MOST USED AND IMP WAY OF DATES

newDates.toLocaleString('default',{
    weekday: "long",
})