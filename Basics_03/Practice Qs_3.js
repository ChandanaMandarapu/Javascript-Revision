// Title Case Conversion

function titleCaseConversion(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  }

//   Odd or Even Elements

function separateOddEven(arr) {
    const odds = arr.filter(num => num % 2 !== 0);
    const evens = arr.filter(num => num % 2 === 0);
    return { odds, evens };
  }

//   Positive, Negative, and Zero Elements Count

function countPositiveNegativeZero(arr) {
    let count = { positive: 0, negative: 0, zero: 0 };
    for (const num of arr) {
      if (num > 0) {
        count.positive++;
      } else if (num < 0) {
        count.negative++;
      } else {
        count.zero++;
      }
    }
    return count;
  }

  // Write a JavaScript function that takes two numbers as input and returns the greater number. 

  function findGreaterNumber(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else if (num2 > num1) {
      return num2;
    } else {
      return "Both numbers are equal.";
    }
  }
  // Write a JavaScript function that takes an array of numbers as input and returns the sum of all even numbers in the array.

  function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum += arr[i];
      }
    }
    return sum;
  }

  // Write a JavaScript function that takes a string as input and returns "Long" if the length of the string is greater than 10 characters, "Short" if it's less than 10 characters, and "Medium" if it's exactly 10 characters long.

  function checkStringLength(str) {
    if (str.length > 10) {
      return "Long";
    } else if (str.length < 10) {
      return "Short";
    } else {
      return "Medium";
    }
  }
  