function reduceArray(nums, fn, init) {
    if (nums.length === 0) {
        return init;
    }

    let result = init;

    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }

    return result;
}

// Example 1:
const nums1 = [1, 2, 3, 4];
const sumFn = function sum(accum, curr) {
    return accum + curr;
};
const init1 = 0;
const output1 = reduceArray(nums1, sumFn, init1);
console.log(output1); // Output: 10

// Example 2:
const nums2 = [1, 2, 3, 4];
const sumSquaresFn = function sumSquares(accum, curr) {
    return accum + curr * curr;
};
const init2 = 100;
const output2 = reduceArray(nums2, sumSquaresFn, init2);
console.log(output2); // Output: 130

// Example 3:
const nums3 = [];
const zeroSumFn = function zeroSum(accum, curr) {
    return 0;
};
const init3 = 25;
const output3 = reduceArray(nums3, zeroSumFn, init3);
console.log(output3); // Output: 25
