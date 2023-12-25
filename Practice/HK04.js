// const s = "abcabcbb";

// console.log(lengthOfLongestSubstring(s)); // Should return 3, as the longest substring without repeating characters is "abc".
// // 

function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const charIndexMap = new Map();

  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];

    if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
      start = charIndexMap.get(currentChar) + 1;
    }

    charIndexMap.set(currentChar, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Test the function
const s = "abcabcbb";

console.log(lengthOfLongestSubstring(s)); // Should return 3
