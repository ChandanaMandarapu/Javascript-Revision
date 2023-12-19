function map(arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }

    return result;
}

// Example 1:
const arr1 = [1, 2, 3];
const plusone = function plusone(n) {
    return n + 1;
};
const newArray1 = map(arr1, plusone);
console.log(newArray1); // Output: [2, 3, 4]

// Example 2:
const arr2 = [1, 2, 3];
const plusI = function plusI(n, i) {
    return n + i;
};
const newArray2 = map(arr2, plusI);
console.log(newArray2); // Output: [1, 3, 5]

// Example 3:
const arr3 = [10, 20, 30];
const constant = function constant() {
    return 42;
};
const newArray3 = map(arr3, constant);
console.log(newArray3); // Output: [42, 42, 42]
