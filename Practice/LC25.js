if (!Array.prototype.customFlatten) {
  Array.prototype.customFlatten = function(n) {
    const flattenedArray = [];

    const flattenHelper = (arr, depth) => {
      for (const element of arr) {
        if (Array.isArray(element) && depth < n) {
          flattenHelper(element, depth + 1);
        } else {
          flattenedArray.push(element);
        }
      }
    };

    flattenHelper(this, 0);

    return flattenedArray;
  };
}

const arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n1 = 0;
const result1 = arr1.customFlatten(n1);
console.log(result1);

const arr2 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n2 = 1;
const result2 = arr2.customFlatten(n2);
console.log(result2);

const arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n3 = 2;
const result3 = arr3.customFlatten(n3);
console.log(result3);
