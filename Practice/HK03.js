// // 
// const nums = [2, 7, 11, 15];
// const target = 9;

// console.log(twoSum(nums, target)); // Should return [0, 1] or [1, 0]

function twoSum(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(nums[i], i);
  }

  // No solution found
  return [];
}

// Test the function
const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target)); // Should return [0, 1] or [1, 0]
