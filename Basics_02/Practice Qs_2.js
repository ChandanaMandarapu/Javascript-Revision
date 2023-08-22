// What will be the output of the following code? Explain the difference between using Object.freeze(user) and directly modifying the name property.

const user = {
  name: "chandu",
  age: 19,
  email: "chandana@xml.com",
  isLoggedIn: false,
  data: [5, 8],
};

user.name = "chandana";
Object.freeze(user);
user.name = "chandrakanth";
console.log(user.name);

//   Write a JavaScript function that takes an array of numbers as input and returns the sum of all the elements in the array.

function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));

//   Write a function in JavaScript that takes a string as input and returns the reverse of the string.

function reverseString(str) {
  return str.split("").reverse().join("");
}
const inputStr = "hello";
console.log(reverseString(inputStr));

//   Given an array of integers, write a function in JavaScript to find and return the largest element in the array

function findLargestElement(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
const numb = [5, 9, 2, 15, 7];
console.log(findLargestElement(numb));

// Array Intersection Count

function intersectionCount(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    let count = 0;

    for (const num of set1) {
        if (set2.has(num)) {
            count++;
        }
    }

    return count;
}

const arr1 = [1, 2, 2, 1, 3];
const arr2 = [2, 2, 3];
console.log(intersectionCount(arr1, arr2));  
