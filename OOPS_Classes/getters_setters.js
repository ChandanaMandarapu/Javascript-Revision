class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
         this._email = value
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}
const chandu = new User("chandu@gv","vit")
console.log(chandu.password)
console.log(chandu.email)

// old method using properties for getters and setters using function 

function User(email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this,'password',{
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const pallavi = new User('pallavi@ac.com',"vit")
console.log(pallavi.email)

// Object based syntax for getters and setters

const User = {
    _email: 'harsha@ac.com',
    _password: "vit",

    get email(){

        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const harsha = Object.create(User)
console.log(harsha.email)