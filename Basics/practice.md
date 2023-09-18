1. What are primitive data types in JavaScript? List a few examples.

Primitive data types in JavaScript include: null, number, symbol, string, bigint, boolean, and undefined.

2. Explain the difference between let, const, and var when declaring variables.

var has function scope, while let and const have block scope. var variables are hoisted to the top of their containing function or global scope, while let and const are not hoisted.
let can be reassigned but cant be declared | const can neither redeclare nor reassign

3. How does JavaScript handle data types differently in comparison to other programming languages?

JavaScript is dynamically typed, meaning variable types can change during runtime, not like statically typed languages where variable types are determined at compile-time.

4. What is type coercion in JavaScript? Provide an example.

Type coercion is the automatic conversion of values to the appropriate data type. Example: 5 + "5" equals "55" because JavaScript converts the number 5 to a string to perform the concatenation.

5. How can you check the type of a variable in JavaScript?

You can use the typeof operator to check the type of a variable. For example: typeof 42 returns "number".

6. What is the difference between null and undefined?

null is an explicitly assigned value that represents the absence of any object value, while undefined is a default value assigned to variables that have been declared but have not been assigned a value.

7. Explain the concept of stack and heap memory in relation to JavaScript data types.

Stack memory is used for storing primitive data types and function call contexts, while heap memory is used for storing reference data types like objects and arrays.

8. What is a reference type in JavaScript? Give an example.

Reference types are objects that are stored by reference and can be mutated. Examples include arrays, objects, functions, and custom objects created with constructors.

9. How can you convert a string to a number in JavaScript?

You can use the parseInt() or parseFloat() functions to convert a string to a number. For example: parseInt("42") returns 42.

10. Explain the purpose and usage of the typeof operator.

The typeof operator is used to determine the data type of a value or variable. It returns a string representing the data type. Example: typeof "hello" returns "string".

11. What is NaN in JavaScript, and how can you check for it?

NaN stands for "Not-a-Number" and represents an invalid or unrepresentable value in JavaScript. You can check for NaN using the isNaN() function. For example: isNaN("hello") returns true.

12. How can you convert a number to a string in JavaScript?

You can use the toString() method of a number to convert it to a string. For example: (42).toString() returns "42".

13. What is a primitive wrapper object in JavaScript? Provide an example.

Primitive wrapper objects are temporary objects that wrap primitive values to provide additional methods and properties. Example: new Number(42) creates a Number object around the primitive value 42.

14. How do you create a shallow copy of an object in JavaScript?

You can create a shallow copy of an object using methods like Object.assign({}, originalObject) or the spread operator ({ ...originalObject }).

In an interview, how would you explain the importance of understanding memory allocation when working with JavaScript data types?

Understanding memory allocation is important in JavaScript to efficiently manage memory usage, prevent memory leaks, and optimize performance. It helps developers write more efficient and reliable code, which is crucial for building scalable applications.