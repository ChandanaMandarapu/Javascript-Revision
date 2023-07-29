for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 9) {
    console.log("9 is best");
  }
  console.log(element);
}
for (let i = 1; i < 10; i++) {
  console.log(`Outer loop : ${i}`);
  for (let j = 1; j < 10; j++) {
    // console.log(`Inner loop : ${j} and inner loop ${i}`)
    console.log(i + "*" + j + "=" + i * j);
  }
}

let arr = ["dora", "shinchu", "ninja"];

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element);
}

// break and continue

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("Detected 5");
    break;
  }
  console.log(`Value of i is ${index}`);
}
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(`Value of i is ${index}`);
}

// While and Do while loops
let i = 0;
while (i <= 10) {
  console.log(`value of i is : ${i}`);
  i += 2;
}
let myArr = ["chand", "chandu", "chandana"];

let ar = 0;

while (ar < myArr.length) {
  console.log(`value is ${myArr[ar]}`);
  ar++;
}
let k = 1;

do {
  console.log(`value of k is ${k}`);
  k++;
} while (k <= 10);
