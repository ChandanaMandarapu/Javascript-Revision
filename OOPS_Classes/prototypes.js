
// Creating a Property using prototypes

/*Creating Properties and Methods using Prototypes:

We have an array called cartoons containing some cartoon names.
We create an object called cartoonPower with properties for specific cartoons and a method to get Doreamon's power.
We extend the base Object prototype by adding a method called chandana. This means all objects in JavaScript can now use this method.
We also extend the Array prototype by adding a method called heyChandana. However, this method won't work on arrays since it's not intended for them.*/

let cartoons = ["doreamon","shinchan"]

let cartoonPower = {
    doreamon: "gadgets",
    shinchan: "humour",

    getdoreamonPower: function(){
        console.log(`Doreamon power is ${this.doreamon}`)
    }
}

Object.prototype.chandana = function(){
    console.log(`chandana exists in all objects`)
}
Array.prototype.heyChandana = function(){
    console.log(`Chandana Hi`)
}
// cartoonPower.chandana()
cartoons.chandana()
cartoons.heyChandana()
// cartoonPower.heyChandana()

// Inheritance accessing and linking all properties 
// Old syntax
/* Inheritance, Accessing, and Linking Properties:

Old Syntax:

We define some objects (user, friend, bestFriend, and support) where friend inherits properties from user and support inherits from bestFriend.
This inheritance is achieved using the __proto__ property. friend.__proto__ links it to user, and support.__proto__ links it to bestFriend.
Modern Syntax:

We use Object.setPrototypeOf to set the prototype of friend to bestFriend. This achieves the same inheritance as in the old syntax.*/

const user={
    name : "karthik"
}
const friend = {
    doProject: true
}
const bestFriend = {
    doExist: false
}
const support = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: bestFriend
}
friend.__proto__ = user

// modern syntax

Object.setPrototypeOf(friend,bestFriend)

// Setting our own property named truelength
 
let anotherUsername = "sarithamandarapu   "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True Length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"chandana   ".trueLength()
"saritha".trueLength()