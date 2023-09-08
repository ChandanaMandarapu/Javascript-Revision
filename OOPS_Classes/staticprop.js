class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    // static stops to access the property
    static createId(){
        return `123`
    }
}
const kuldeep = new User("kuldeep")
console.log(kuldeep.createId())

class Teacher extends User {
    constructor(email,username){
    super(username)
    this.email = email
    }
}
const chandana = new Teacher("chandana","chand@hml.com")
chandana.logMe()
console.log(chandana.createId())