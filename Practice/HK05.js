function maxArea(heights) {
  let maxArea = 0;
  let left = 0;
  let right = heights.length - 1;

  while (left < right) {
    const h = Math.min(heights[left], heights[right]);
    const w = right - left;
    const area = h * w;

    maxArea = Math.max(maxArea, area);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

// Test the function
const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(heights)); // Should return 49

