// innerTwo function cant access siblings inner function and also parent access the secret value of inner child function its lexical scoping
function outer() {
  let username = "chandana";
  console.log("OUTER", secret);
  function inner() {
    let secret = "my123";
    console.log("inner", username);
  }
  function innerTwo() {
    console.log("innerTwo", username);
    console.log(secret);
  }
  inner();
  innerTwo();
}
outer();
console.log("TOO OUTER", username);
