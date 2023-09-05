// promises is a object representing the eventual completion
// creating promises
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is done")
        resolve()
    },1000)
})

// Consumption of promises
// then => resolve then gives a callback function which automatically recives a argument here the value returns
// connecting then and resolve 
promiseOne.then(function(){
    console.log('Promise consumed')
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task two done")
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved')
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chandana",email: "chand@exam.com"})
    },1000)
})
// taking data
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"pallavi",password:"23030"})
        }
        else{
            reject('ERROR something went wrong')
        }
    },1000)
})
promiseFour