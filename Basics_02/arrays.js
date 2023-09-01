// Arrays

// collection of multiple items is a Array. JS arrays are resizable. Arrays make a shallow copy like whatever the changes we will do it will happen in the original array to because arrays are stored like heap in the memory

// Arrays also a deepcopy of an object whose properties dont share the same reference 

const myArr = [1,2,3,4,6,7,8]
console.log(myArr[2])

// Another form to declare Arrays

const myArrTwo = new Array(23,4,5,7,7,22)
console.log(myArrTwo)

// Array Methods

// myArr.push("chand")
// myArr.push("chandu")
// myArr.push("chandra")
// myArr.pop() removes the last element of array

// myArr.unshift(9) shifts the first value of array
// myArr.shift() removes the first element

console.log(myArr.includes(7))
console.log(myArr.indexOf(2))

const newArr = myArr.join()

console.log(myArr)
console.log(newArr)
console.log(typeof newArr) //Here when array joins the output gives the type as string which converts the existing array to a string

// slice,splice

console.log("A ", myArr);

const myA1 = myArr.slice(1,3) //includes from 1 to 2 not 3

console.log(myA1)
console.log("B ",myArr)

// SLICE - Gives the result in between range of 1-3 without last range
// SPLICE - Removes the portion and the array is manipulated

// Here in splice the portion ranging from 1 to 3 will be missing from the given array its manipulated array now the result will be
// [1,6,7,8]
const myA2 = myArr.splice(1,3)
console.log("C ",myArr)
console.log(myA2)

const cartoonOne = ["doreamon","shinchan","kiteretsu"]
const cartoonTwo = ["kidvskat","Tom&Jery","NinjaHattori"]

// Concatenating Arrays

const cartoons = cartoonOne.concat(cartoonTwo)
console.log(cartoons) // returns a new array

// Same using Spread operator

const newCartoons = [...cartoonOne,...cartoonTwo]
console.log(newCartoons)

// Flat which combines all the arrays like if one array is merged in another

const A = [2,4,5,6,[4,6,7,],[8,9,[3,5 ,3]]]

const B = A.flat(Infinity) //returns an a new array all merged arrays in one array
console.log(B)

// Checking and converting into array

console.log(Array.isArray("chand"))

// This returns an empty array as we didnt mention any index or values,keys

console.log(Array.from({
    name :"chandana"
}))

let x = 900
let y = 800 
let z = 700

console.log(Array.of(x,y,z)) //returns a new array from set of elements
