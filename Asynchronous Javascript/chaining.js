function asyncOperation(value) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value * 2), 1000);
  });
}

async function chainedOperations() {
  const result = await asyncOperation(5)
    .then(result1 => asyncOperation(result1))
    .then(result2 => asyncOperation(result2));
  
  console.log(result);
}

chainedOperations();
