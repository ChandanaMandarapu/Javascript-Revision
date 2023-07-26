// Arrays

const myArr = [1,2,3,4,6,7,8]
console.log(myArr[2])

// Another form to declare Arrays

const myArrTwo = new Array(23,4,5,7,7,22)
console.log(myArrTwo)

// Array Methods

// myArr.push("chand")
// myArr.push("chandu")
// myArr.push("chandra")
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

console.log(myArr.includes(7))
console.log(myArr.indexOf(2))

const newArr = myArr.join()

console.log(myArr)
console.log(newArr) //Here when array joins the output gives the type as string which converts the existing array to a string

// slice,splice

console.log("A ", myArr);

const myA1 = myArr.slice(1,3) //includes from 1 to 2 not 3

console.log(myA1)
console.log("B ",myArr)
// Here in splice the portion ranging from 1 to 3 will be missing from the given array its manipulated array now the result will be
// [1,6,7,8]

// SLICE - Gives the result in between range of 1-3 without last range
// SPLICE - Removes the portion and the array is manipulated
const myA2 = myArr.splice(1,3)
console.log("C ",myArr)
console.log(myA2)

const cartoonOne = ["doreamon","shinchan","kiteretsu"]
const cartoonTwo = ["kidvskat","Tom&Jery","NinjaHattori"]

// Concatenating Arrays

const cartoons = cartoonOne.concat(cartoonTwo)
console.log(cartoons)

// Same using Spread operator

const newCartoons = [...cartoonOne,...cartoonTwo]
console.log(newCartoons)

// Flat which combines all the arrays like if one array is merged in another

const A = [2,4,5,6,[4,6,7,],[8,9,[3,5 ,3]]]

const B = A.flat(Infinity)
console.log(B)

// Checking and converting into array

console.log(Array.isArray("chand"))
console.log(Array.from("chand"))
// This returns an empty array as we didnt mention any index or values,keys
console.log(Array.from({
    name :"chandana"
}))

let x = 900
let y = 800 
let z = 700

console.log(Array.of(x,y,z))
