//Js is Dynamically Typed language

// Primitive Datatypes are CALL BY VALUE that means the orginal refernce of data isnt given instead the copy of data is provided and the changes are also done to the copied version.

// Reference Datatypes where reference is directly allocated into the memory 
// Arrays , Objects , Functions all these refernce datatypes return object as a datatype

const cartoons = ["shinchan","doreamon","tom&jerry"]

let myData = {
    name: "chandu",
    age: 19,
}

const myFunction = function (){
    console.log("Hello")
}

// *********************************

// STACK (Primitive) AND HEAP (Reference) MEMORy

// Here originally the real value of variable myName is not changed instead it provided a copy of myName and nickname all primitive datatypes are stored inform of Stack

let myName = "chandana"

let nickName = myName
nickName = "chandu"

console.log(myName)
console.log(nickName)

// object

// Here a refernce value is provided in case of 2users in HEAP means the changes u do are done actually in the original value itself

let userOne = {
    email : "chandana@gmail.com",
    phoneNumber : 9999999
}

let userTwo = userOne

userTwo.email = "chand@google.com"
console.log(userOne.email)
console.log(userTwo.email)


    