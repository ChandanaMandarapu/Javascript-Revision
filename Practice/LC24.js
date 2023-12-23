if (!Array.prototype.customMerge) {
  Array.prototype.customMerge = function(arr) {
    const mergedArray = [];

    const ids = new Set();

    for (const obj of this) {
      mergedArray.push(obj);
      ids.add(obj.id);
    }

    for (const obj of arr) {
      if (!ids.has(obj.id)) {
        mergedArray.push(obj);
      } else {
        const existingObj = mergedArray.find((o) => o.id === obj.id);

        for (const [key, value] of Object.entries(obj)) {
          if (!(key in existingObj)) {
            existingObj[key] = value;
          }
        }
      }
    }

    return mergedArray.sort((a, b) => a.id - b.id);
  };
}

const arr1 = [
  {"id": 1, "x": 1},
  {"id": 2, "x": 9}
];

const arr2 = [
  {"id": 3, "x": 5}
];

const joinedArray1 = arr1.customMerge(arr2);
console.log(joinedArray1);

const arr3 = [
  {"id": 1, "x": 2, "y": 3},
  {"id": 2, "x": 3, "y": 6}
];

const arr4 = [
  {"id": 2, "x": 10, "y": 20},
  {"id": 3, "x": 0, "y": 0}
];

const joinedArray2 = arr3.customMerge(arr4);
console.log(joinedArray2);

const arr5 = [
  {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
];

const arr6 = [
  {"id": 1, "b": {"c": 84}, "v": [1, 3]}
];

const joinedArray3 = arr5.customMerge(arr6);
console.log(joinedArray3);
