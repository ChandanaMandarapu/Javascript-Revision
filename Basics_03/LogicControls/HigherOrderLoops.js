// FOR OF | FOR IN | FOR EACH

const arr1 = [1, 2, 3, 45, 6];
for (const num of arr1) {
  console.log(num);
}

const states = "Hyderabad";
for (const state of states) {
  console.log(`All letters are ${state}`);
}

// Maps are objects which hold key value of pairs remembers the order and maps are unique we cant add the same thing again and again
const map = new Map();
map.set("IN", "India");
map.set("EN", "England");

// console.log(map)

for (const k of map) {
  // this gives an complete array
  console.log(k);
}
// if we want to print the key value pairs seperately for each individual element

for (const [key, value] of map) {
  console.log(key, ":", value);
}

// Objects are not iterable through for of loops

const myObj = {
  name1: "karthik",
  name2: "pallavi",
  name3: "chandana",
  name4: "aditi",
};
// for (const [key,value] of myObj) {
//     // console.log(key,value) throws an error
// }

// for in loops can be used to make objects iterable and also in arrays
// Major diff b/w for of and for in is
// For of - gives all the key value pairs
// For in - only gives the keys we need to print values by a specific syntax

for (const key in myObj) {
  console.log(key);
  console.log(`${key} is ${myObj[key]}`);
}

const friends = ["kuldeep", "kalyan", "amma", "chand"];

for (const key in friends) {
  console.log(key);
  console.log(friends[key]);
}
// Maps are not iterable
for (const key in map) {
  console.log(key);
}

// ALL ABOUT FOR EACH

const langs = ["telugu", "hindi", "tamil", "malayalam", "kannada"];

langs.forEach(function (val) {
  console.log(val);
});
langs.forEach((items, index, arr) => {
  console.log(items, index, arr);
});

const coding = [
  {
    languageName: "JavaScript",
    languagefileName: "js",
  },
  {
    languageName: "Java",
    languagefileName: "java",
  },
  {
    languageName: "Ruby",
    languagefileName: "rb",
  },
];

coding.forEach((item) => {
  console.log(item.languageName);
});
