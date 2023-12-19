function filter(arr, fn) {
    let filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

// Example 1:
const arr1 = [0, 10, 20, 30];
const greaterThan10 = function greaterThan10(n) {
    return n > 10;
};
const newArray1 = filter(arr1, greaterThan10);
console.log(newArray1); // Output: [20, 30]

// Example 2:
const arr2 = [1, 2, 3];
const firstIndex = function firstIndex(n, i) {
    return i === 0;
};
const newArray2 = filter(arr2, firstIndex);
console.log(newArray2); // Output: [1]

// Example 3:
const arr3 = [-2, -1, 0, 1, 2];
const plusOne = function plusOne(n) {
    return n + 1;
};
const newArray3 = filter(arr3, plusOne);
console.log(newArray3); // Output: [-2, 0, 1, 2]
