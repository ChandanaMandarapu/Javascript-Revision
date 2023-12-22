
const timeLimit = (fn, t) => {
  return async (...args) => {
    const start = Date.now();
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });

    try {
      const result = await Promise.race([fn(...args), timeoutPromise]);
      const time = Date.now() - start;
      console.log({ "resolved": result, "time": time });
    } catch (err) {
      const time = Date.now() - start;
      console.log({ "rejected": err, "time": time });
    }
  };
};

// Example 1
const fn1 = async (n) => {
  await new Promise(res => setTimeout(res, 100));
  return n * n;
};
const inputs1 = [5];
const t1 = 50;
const limited1 = timeLimit(fn1, t1);
limited1(...inputs1);

// Example 2
const fn2 = async (n) => {
  await new Promise(res => setTimeout(res, 100));
  return n * n;
};
const inputs2 = [5];
const t2 = 150;
const limited2 = timeLimit(fn2, t2);
limited2(...inputs2);

// Example 3
const fn3 = async (a, b) => {
  await new Promise(res => setTimeout(res, 120));
  return a + b;
};
const inputs3 = [5, 10];
const t3 = 150;
const limited3 = timeLimit(fn3, t3);
limited3(...inputs3);

// Example 4
const fn4 = async () => {
  throw "Error";
};
const inputs4 = [];
const t4 = 1000;
const limited4 = timeLimit(fn4, t4);
limited4(...inputs4);
