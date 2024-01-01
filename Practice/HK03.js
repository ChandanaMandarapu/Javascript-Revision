// // // 
// // const nums = [2, 7, 11, 15];
// // const target = 9;

// // console.log(twoSum(nums, target)); // Should return [0, 1] or [1, 0]

// function twoSum(nums, target) {
//   const numMap = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];

//     if (numMap.has(complement)) {
//       return [numMap.get(complement), i];
//     }

//     numMap.set(nums[i], i);
//   }

//   // No solution found
//   return [];
// }

// // Test the function
// const nums = [2, 7, 11, 15];
// const target = 9;

// console.log(twoSum(nums, target)); // Should return [0, 1] or [1, 0]

// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   }

//   let a = 0;
//   let b = 1;

//   for (let i = 2; i <= n; i++) {
//     let temp = a + b;
//     a = b;
//     b = temp;
//   }

//   return b;
// }

function fisherYatesShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
