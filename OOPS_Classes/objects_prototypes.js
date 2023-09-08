function multiplyTwo(num){
    return num*2
}
multiplyTwo.power = 2
console.log(multiplyTwo(2)) 
console.log(multiplyTwo.power) //accessing as object
// here prototype returns all prototypal properites and also provides "this" context
console.log(multiplyTwo.prototype) 
// function is a function and also a object too

function createUser(username,marks){
    this.username = username
    this.marks = marks
}
// Creating our own functions
createUser.prototype.increment = function(){
    this.marks++
}
createUser.prototype.score = function(){
    console.log(`marks are $(this.marks)`)
}
const pallavi = new createUser("pallavi",80)
const karthik = new createUser("karthik",98)

pallavi.score()