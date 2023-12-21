function customReduce(nums, fn, init) {
  let result = init;

  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }

  return result;
}

// Example 1
const nums1 = [1, 2, 3, 4];
const fn1 = function sum(accum, curr) {
  return accum + curr;
};
const init1 = 0;
const output1 = customReduce(nums1, fn1, init1);
console.log(output1); // Output: 10

// Example 2
const nums2 = [1, 2, 3, 4];
const fn2 = function sum(accum, curr) {
  return accum + curr * curr;
};
const init2 = 100;
const output2 = customReduce(nums2, fn2, init2);
console.log(output2); // Output: 130

// Example 3
const nums3 = [];
const fn3 = function sum(accum, curr) {
  return 0;
};
const init3 = 25;
const output3 = customReduce(nums3, fn3, init3);
console.log(output3); // Output: 25
