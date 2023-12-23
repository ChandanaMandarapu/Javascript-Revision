const isEmpty = (obj) => Object.keys(obj).length === 0;

console.log(isEmpty({"x": 5, "y": 42})); // Output: false
console.log(isEmpty({})); // Output: true
console.log(isEmpty([null, false, 0])); // Output: false
if (!Array.prototype.last) {
  Array.prototype.last = function() {
    return this.length === 0 ? -1 : this[this.length - 1];
  };
}

// Example 1
const nums1 = [null, {}, 3];
console.log(nums1.last()); // Output: 3

// Example 2
const nums2 = [];
console.log(nums2.last()); // Output: -1
