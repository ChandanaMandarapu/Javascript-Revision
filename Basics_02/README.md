## Arrays & Objects

## Introduction to Arrays

. An array is a data structure in JavaScript that allows you to store and manipulate a collection of items.
. Arrays are ordered, meaning each item has a specific position or index within the array.
. They are dynamic, which means you can change their size by adding or removing elements.

## Declaring Arrays

. You can declare an array using square brackets [], enclosing the elements separated by commas.

. For example: const myArr = [1, 2, 3, 4, 5];

## Accessing Array Elements

. Array elements are accessed using their index, which starts from 0.
. For example: console.log(myArr[2]); accesses the third element (index 2) in the array.

## Array Methods

. JavaScript arrays come with a variety of built-in methods for manipulating data. Some common methods include:
. push(): Adds elements to the end of an array.
. pop(): Removes the last element from an array.
. unshift(): Adds elements to the beginning of an array.
. shift(): Removes the first element from an array.
. includes(): Checks if an element is present in the array.
. indexOf(): Returns the index of the first occurrence of an element.
. join(): Converts an array into a string by joining its elements with a specified separator.

## Slice and Splice

. The slice() method creates a new array by extracting a portion of an existing array without modifying the original array. It takes two arguments, the start and end indices.

. The splice() method is used for modifying an array. It can remove, replace, or add elements at specified positions in the array. It also returns the removed elements as a new array.

## Concatenating Arrays
. You can combine two or more arrays into a single array using the concat() method or the spread operator ....

## Flattening Nested Arrays
. The flat() method is used to flatten a nested array structure. It recursively extracts all elements from nested arrays and returns them in a new, one-dimensional array.

## Checking Array Type
. You can determine whether a variable is an array or not using the Array.isArray() method. It returns true if the variable is an array, and false otherwise.

## Objects

## Introduction to Objects

. Objects in JavaScript are data structures used to store and organize related data and functionality.
. They are composed of key-value pairs, where keys are strings (or symbols) and values can be of any data type.
. Objects are versatile and can represent complex real-world entities.

## Object Literals

. Object literals are the most common way to create objects in JavaScript.
They are defined using curly braces {} and consist of one or more key-value pairs separated by colons.
For example:
const person = {
  name: "John",
  age: 30,
  isStudent: false
};

## Object Mutability

. Objects are mutable, meaning you can modify their properties and values after creation.
. You can use Object.freeze() to make an object immutable, preventing further changes to its properties.

## Declaring Functions in Objects

. Objects can contain functions as properties, which are often referred to as methods.
. Methods in objects can access other properties of the same object using the this keyword.
. This allows methods to manipulate and interact with the object's data.

## Constructor Objects

. Constructor objects are created using constructor functions and the new keyword.
. They are used to create multiple instances of objects with shared properties and methods.
. Constructor functions typically start with an uppercase letter to distinguish them from regular functions.

## Object Methods for Manipulation

. JavaScript provides several methods for working with objects:

. Object.assign(target, source): Copies the values of all enumerable properties from one or more source objects to a target object.
. {...} (Object spread operator): Similar to Object.assign(), spreads the properties of one object into another.
. Object.keys(obj): Returns an array of a given object's own enumerable property names.
. Object.values(obj): Returns an array of a given object's own enumerable property values.
. Object.entries(obj): Returns an array of a given object's own enumerable property key-value pairs.

## Object Destructuring

. Object destructuring is a convenient way to extract values from objects and assign them to variables using a concise syntax.
. It is often used in modern JavaScript development and React for quickly accessing object properties.

## JSON Structure

. JSON (JavaScript Object Notation) is a widely used format for data interchange.
It is a text-based format that represents data as key-value pairs, similar to JavaScript objects.
. JSON is commonly used for sending and receiving data between a server and a client.

## Memory Management of Arrays and Objects

## Arrays:

. Arrays in JavaScript are typically stored in the stack when they are declared as local variables within a function.
. The size of the array in the stack is fixed and determined at compile-time.
. When an array is declared, memory is allocated on the stack to hold its data.
. Stack-based arrays are generally more efficient for small, fixed-size arrays due to their limited overhead.

## Objects:

. Objects in JavaScript, on the other hand, are typically stored in the heap.
. Objects, including their properties and values, are allocated in the heap because they can have a variable size and need to persist beyond the scope of the function where they are created.
. When you create an object, a reference to that object is stored in the stack, while the actual object and its properties reside in the heap.
. Multiple references in the stack can point to the same object in the heap, allowing for shared data.