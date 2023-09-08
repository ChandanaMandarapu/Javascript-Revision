// USING CLASSES

class user{
    constructor(username,email,password){
    this.username = username
    this.email = email
    this.password = password
    }

    encryptPassword(){
        return `${this.password}cha`
    }
    usersName(){
        return `${this.username}`
    }
}

const chandu = new user("chandu","chandu@xml.com","123")

console.log(chandu.encryptPassword());
console.log(chandu.usersName())

// Behind the scenes using normal prototypes

function User(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.usersName = function(){
    return `${this.username}`
}
const pallavi = new User("pallavi","pallavi@xml.com","123")

console.log(pallavi.encryptPassword())
console.log(pallavi.usersName())