const promiseAll = (functions) => {
  return new Promise((resolve, reject) => {
    const results = [];
    let completedCount = 0;

    functions.forEach((func, index) => {
      func().then(
        (result) => {
          results[index] = result;
          completedCount++;

          if (completedCount === functions.length) {
            resolve({ "t": Date.now(), "resolved": results });
          }
        },
        (error) => {
          reject({ "t": Date.now(), "rejected": error });
        }
      );
    });
  });
};

const functions1 = [
  () => new Promise(resolve => setTimeout(() => resolve(5), 200))
];

promiseAll(functions1).then(console.log);

const functions2 = [
  () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
  () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
];

promiseAll(functions2).then(console.log);

const functions3 = [
  () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
  () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
  () => new Promise(resolve => setTimeout(() => resolve(16), 100))
];

promiseAll(functions3).then(console.log);
