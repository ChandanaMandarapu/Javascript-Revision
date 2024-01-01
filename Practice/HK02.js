
// // class ListNode {
// //   constructor(value) {
// //     this.value = value;
// //     this.next = null;
// //   }
// // }

// // // Create a linked list with a cycle
// // const head = new ListNode(1);
// // const second = new ListNode(2);
// // const third = new ListNode(3);

// // head.next = second;
// // second.next = third;
// // third.next = second; // Cycle: third -> second

// // console.log(hasCycle(head)); // Should return true

// function hasCycle(head) {
//   let slow = head;
//   let fast = head;

//   while (fast !== null && fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;

//     if (slow === fast) {
//       return true; // Cycle detected
//     }
//   }

//   return false; // No cycle found
// }

// // Test the function
// const head = new ListNode(1);
// const second = new ListNode(2);
// const third = new ListNode(3);

// head.next = second;
// second.next = third;
// third.next = second; // Cycle: third -> second

// console.log(hasCycle(head)); // Should return true
// // Implement a function that performs a binary search on a sorted array.
// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return -1;
// }
