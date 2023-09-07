// promises is a object representing the eventual completion
// creating promises
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is done");
    resolve();
  }, 1000);
});

// Consumption of promises
// then => resolve then gives a callback function which automatically recives a argument here the value returns
// connecting then and resolve
promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task two done");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chandana", email: "chand@exam.com" });
  }, 1000);
});
// taking data here we get the paramtre in this method
promiseThree.then(function (user) {
  console.log(user);
});
// In promise four learned about chaining of this and catch and resolving username if its false if its true rejecting the pomise using then() and catch()
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "pallavi", password: "23030" });
    } else {
      reject("ERROR something went wrong");
    }
  }, 1000);
});
// here we chained the then function to access username to prevent callback hell
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("Promise is resolved or rejected"));

// Using async await try catch block to handle promises gracefully
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "karthik", password: "23030" });
    } else {
      reject("ERROR all went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const result = await promiseFive;
    console.log(result);
  } catch (error) {
    console.log("error");
  }
}
consumePromiseFive();

// using asyn await to fetch here again waiting for the response hold value in variable response but error is thrown as response is converted to json format its a time taking proccess so need to use await for conversion too

async function getUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch(error){
        console.log("Error")
    }
}

// getUsers()

// using then and catch

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("error");
//   });
