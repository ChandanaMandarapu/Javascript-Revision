function composeFunctions(functions, x) {
  if (functions.length === 0) {
    return x;
  }

  let result = x;

  for (let i = functions.length - 1; i >= 0; i--) {
    result = functions[i](result);
  }

  return result;
}

// Example 1
const functions1 = [x => x + 1, x => x * x, x => 2 * x];
const x1 = 4;
const output1 = composeFunctions(functions1, x1);
console.log(output1); // Output: 65

// Example 2
const functions2 = [x => 10 * x, x => 10 * x, x => 10 * x];
const x2 = 1;
const output2 = composeFunctions(functions2, x2);
console.log(output2); // Output: 1000

// Example 3
const functions3 = [];
const x3 = 42;
const output3 = composeFunctions(functions3, x3);
console.log(output3); // Output: 42
