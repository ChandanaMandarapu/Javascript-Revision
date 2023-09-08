function setUsername(username){
    this.username = username
    console.log("called")
}
function createUser(username,email,password){
    // to hold the refernce of the function called here actually its called but in execution context after call its being removed for that this is used in call
    setUsername.call(this,username)
    this.email = email
    this.password = password
}

const chandu = new createUser("chandu","chandu@google.com","1234")
console.log(chandu)

/*Setting Up Functions:

We have two functions, setUsername and createUser.
setUsername sets a property called username on the object that calls it.
createUser is a constructor function for creating user objects with a username, email, and password.
Using call Inside createUser:

Inside the createUser function, there's a line: setUsername.call(this, username).
This line uses call to call the setUsername function but with a different this context.
The this keyword inside setUsername refers to the current createUser object being created. Using call like this temporarily changes the this context for the setUsername function.
After the call, the reference to the setUsername function is removed from the execution context, but the username property remains on the createUser object.
Creating chandu Object:

We create a new createUser object named chandu with the following data: username = "chandu," email = "chandu@google.com," password = "1234."
Printing chandu:

Finally, we print the chandu object to the console.*/