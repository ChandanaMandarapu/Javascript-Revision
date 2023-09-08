class User{
    constructor(username){
        this.username = username
    }
    printMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Owner extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addContent(){
        console.log(`Content course was added by ${this.username}`)
    }
}

const chandu = new Owner("chandu","chandu@xml.xom","123")
chandu.printMe()
chandu.addContent()

const karthik = new User("karthik")
karthik.printMe()

console.log(chandu instanceof Owner)
console.log(chandu instanceof User)
console.log(karthik instanceof Owner)
console.log(karthik instanceof User)