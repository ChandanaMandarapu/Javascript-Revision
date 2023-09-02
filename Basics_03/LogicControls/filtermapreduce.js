const coding = ["js","java","python","cpp"]

// Here in for each loop we cant return anything incase of values

const values = coding.forEach( (item) => {
  console.log(item)
  // return item
})

console.log(values)

// Using Filrer
// Filter is also a callback function here we can access each value and also need to specify a condition to print the outcome the condition need to be satisfied then the value is returned

const num = [1,2,3,4,5,6,7,8,9,10]

const greaterNum = num.filter( (num) => num > 4)
const greatestNum = num.filter( (numb) => {
  return numb > 3; //return keyword should be used in scope
})
console.log(greaterNum)

// Using foreach

const newNums = []

num.forEach((num) =>{
  if(num > 4){
    newNums.push(num)
  }
})

const books = [
  {title:'Book One',genre: 'Fiction',publish: 1999, edition: 2003},,
  {title:'Book Two',genre: 'Non-Fiction',publish: 1976, edition: 2000},
  {title:'Book Three',genre: 'Science',publish: 1969, edition: 1980},
  {title:'Book Four',genre: 'Romance',publish: 1999, edition: 2008},
  {title:'Book Five',genre: 'History',publish: 1967, edition: 2001},
  {title:'Book Six',genre:'Fiction',publish: 1989, edition: 2004},
  {title:'Book Seven',genre: 'Science',publish: 1999, edition: 2003},
  {title:'Book Eight',genre: 'Romance',publish: 1987, edition: 2008},
  {title:'Book Nine',genre: 'History',publish: 1999, edition: 2002},
  {title:'Book Ten',genre: 'Fiction',publish: 1999, edition: 2006}
]

let userBooks = books.filter( (bk) => bk.genre === 'Fiction')
console.log(userBooks)

userBooks = books.filter ( (bk) => {
  return bk.publish > 1900 && bk.genre === "Romance";
})
// Maps and chaining
const numbers = [1,2,3,4,5,6,7,8,9]

// const newNumbers = numbers.map ((num) => num * 10)
// Chaining
const newNumbers = numbers
                   .map((num) => num +10 ) 
                   .map( (num) => num * 10) //gives the value of chained array
                   .filter( (num) => num >= 140)
console.log(newNumbers)

// REDUCE

const myNumbers = [1,2,3]

const myTotal = myNumbers.reduce( function (accumalator,currentvalue){

  console.log(`accumulator: ${accumalator} and currentvalue: ${currentvalue}`)
  return accumalator + currentvalue
}, 0)

console.log(myTotal)

const total = myNumbers.reduce( (acc,curval)=> acc + curval , 0)
console.log(total)

const shoppingCart = [
  {
    choclate: "DairyMilk",
    price: 200
  },
  {
    choclate: "Munch",
    price: 20
  },
  {
    choclate: "Kitkat",
    price: 230
  },
  {
    choclate: "Snickers",
    price: 50
  }
]

const myBill = shoppingCart.reduce( ( acc , item) => acc + item.price, 0)
console.log(myBill)

//BASICS DONE
