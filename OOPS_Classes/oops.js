// Object literals and this keyword use here this always prints the current context if we print this globally in node its () but in browser its a window object.
const user = {
    username: "karthik",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}
//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

// new keyword makes multiple instances
const promiseOne = new Promise()
const date = new Date()

// using constructors
// LHS IS OUR VARIABLE RHS IS VALUE WE ARE PASSING
function user(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}
// here when userone is printed userTwo overwrites the values in userOne which isnt a good practice for that we use constructor functions like (new) which give a new instance everytime original doesnt affect and it implicitly returns the values

// when we use new keyword an empty obj is created which is a new instance{} 
// 2. constructor function is called due to new keyword all arguments are packed and give it
// 3. this keyword injects all values
// 4. value returns perfectly
const userOne = new user("chandu",3,true)
const userTwo = new user("pallavi",3,false)

console.log(userOne.constructor)
console.log(userTwo)

// instance of