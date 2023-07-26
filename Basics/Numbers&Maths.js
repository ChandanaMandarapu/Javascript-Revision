const points = 200;
console.log(points)
// This is strictly a number
const score = new Number(99)
console.log(typeof score)
console.log(score);

// Converting Numbers to Strings

console.log(score.toString().length);
console.log(score.toFixed(1))

const balance = 134.567
console.log(balance.toPrecision(3))

const thousands = 1000000
console.log(thousands.toLocaleString('en-IN'));

// ********** MATHS********************//

console.log(Math)
console.log(Math.abs(-9)) //always return +ve value
console.log(Math.round(4.3))
console.log(Math.ceil(4.2)) //rounds of topvalue
console.log(Math.floor(4.8))//rounds of leastvalue
console.log(Math.min(9,8,7,6))
console.log(Math.max(9,8,7,6))

// All about Math.random()

console.log(Math.random())//this gives a value between 0 & 1
console.log((Math.random()*10) + 1 ) //just whenever the random number is generated it should be in between 1-9 no 0
console.log(Math.floor((Math.random()*10) + 1 )) // here to avoid the decimal numbers we are considering the least value to be generated every time code is executed

// Actual Example to generate Numbers b/w 10-20

// Here now we are multiplying the random number with (max - min + 1)) to generate the range between 10-20 and to avoid 0 adding 1 everytime at last added min number so that the everytime the number generates it will include min value too

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

