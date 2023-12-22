const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

const sumPromises = (promise1, promise2) => {
  return new Promise((resolve, reject) => {
    let result1, result2;

    promise1.then(value => {
      result1 = value;

      if (result2 !== undefined) {
        resolve(result1 + result2);
      }
    });

    promise2.then(value => {
      result2 = value;

      if (result1 !== undefined) {
        resolve(result1 + result2);
      }
    });
  });
};

sumPromises(promise1, promise2).then(result => {
  console.log(result); // Output: 7
});

const promise3 = new Promise(resolve => setTimeout(() => resolve(10), 50));
const promise4 = new Promise(resolve => setTimeout(() => resolve(-12), 30));

sumPromises(promise3, promise4).then(result => {
  console.log(result); // Output: -2
});

