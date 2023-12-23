if (!Array.prototype.customSort) {
  Array.prototype.customSort = function(fn) {
    return this.slice().sort((a, b) => fn(a) - fn(b));
  };
}

const arr1 = [5, 4, 1, 2, 3];
const fn1 = (x) => x;
const sortedArr1 = arr1.customSort(fn1);
console.log(sortedArr1);

const arr2 = [{"x": 1}, {"x": 0}, {"x": -1}];
const fn2 = (d) => d.x;
const sortedArr2 = arr2.customSort(fn2);
console.log(sortedArr2);

const arr3 = [[3, 4], [5, 2], [10, 1]];
const fn3 = (x) => x[1];
const sortedArr3 = arr3.customSort(fn3);
console.log(sortedArr3);
