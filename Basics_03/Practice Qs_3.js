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
  