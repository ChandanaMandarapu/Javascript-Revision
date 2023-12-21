function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn(...args);
      return result;
    } else {
      return undefined;
    }
  };
}

// Example 1
const fn1 = (a, b, c) => a + b + c;
const calls1 = [[1, 2, 3], [2, 3, 6]];
const onceFn1 = once(fn1);
const output1 = calls1.map(args => ({ calls: onceFn1(...args) === undefined ? 0 : 1, value: onceFn1(...args) }));
console.log(output1);
// Output: [{"calls":1,"value":6}]

// Example 2
const fn2 = (a, b, c) => a * b * c;
const calls2 = [[5, 7, 4], [2, 3, 6], [4, 6, 8]];
const onceFn2 = once(fn2);
const output2 = calls2.map(args => ({ calls: onceFn2(...args) === undefined ? 0 : 1, value: onceFn2(...args) }));
console.log(output2);
// Output: [{"calls":1,"value":140},{"calls":0,"value":undefined},{"calls":0,"value":undefined}]
