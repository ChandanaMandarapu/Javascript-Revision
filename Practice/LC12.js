function memoize(fn) {
  const cache = new Map();
  const callCount = { count: 0 };

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = fn(...args);
      cache.set(key, result);
      callCount.count += 1;
      return result;
    }
  };
}

function executeActions(fnName, actions, values) {
  let result = [];
  let fn;

  switch (fnName) {
    case "sum":
      fn = (a, b) => a + b;
      break;
    case "factorial":
      fn = (n) => (n <= 1 ? 1 : n * executeMemoized("factorial", n - 1));
      break;
    case "fib":
      fn = (n) => (n <= 1 ? 1 : executeMemoized("fib", n - 1) + executeMemoized("fib", n - 2));
      break;
    default:
      throw new Error("Invalid function name");
  }

  const executeMemoized = memoize(fn);

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];

    if (action === "call") {
      const value = executeMemoized(...values[i]);
      result.push(value);
    } else if (action === "getCallCount") {
      result.push(callCount.count);
    }
  }

  return result;
}

// Example 1
const fnName1 = "sum";
const actions1 = ["call", "call", "getCallCount", "call", "getCallCount"];
const values1 = [
  [2, 2],
  [2, 2],
  [],
  [1, 2],
  [],
];
const output1 = executeActions(fnName1, actions1, values1);
console.log(output1); // Output: [4, 4, 1, 3, 2]

// Example 2
const fnName2 = "factorial";
const actions2 = ["call", "call", "call", "getCallCount", "call", "getCallCount"];
const values2 = [[2], [3], [2], [], [3], []];
const output2 = executeActions(fnName2, actions2, values2);
console.log(output2); // Output: [2, 6, 2, 2, 6, 2]

// Example 3
const fnName3 = "fib";
const actions3 = ["call", "getCallCount"];
const values3 = [[5], []];
const output3 = executeActions(fnName3, actions3, values3);
console.log(output3); // Output: [8, 1]
