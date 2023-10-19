 ## JavaScript Basics: Comprehensive Notes for Revision 

## Topics Revised
Variables, Data Types, and Data Types Summary, Numbers, Math, Date, and Time

## Variables, Data Types, and Data Types Summary 

=> Variables: let, var, const

=> In JavaScript, variables are fundamental for storing and manipulating data. It's important to choose the appropriate variable declaration based on your use case:

=> let: This allows you to declare variables whose values can change over time. It's commonly used when the value is expected to change during program execution. let can be reused but we cant redeclare a particular variable again.

=> const: This is used to declare variables that hold constant values. Once a value is assigned to a const variable, it cannot be changed throughout the program's execution.

=> var: Historically used for variable declaration, but it has issues with scope. It's recommended to avoid using var due to its unpredictable behavior within different scopes.

## Hoisting
We can use the variable and functions even before declaration 
variables and functions are hoisted which means their declaration is moved on the top of code

## Data Types and ECMAScript

=> Understanding data types is crucial for effective programming in JavaScript. ECMAScript is the scripting language specification that JavaScript follows. Some key points include:

## Primitive Data Types:  

 . Number: Used for both integers and floating-point numbers.
 
 . BigInt: Introduced in ECMAScript 11, it's used for representing arbitrarily large integers.
 
 . String: Represents textual data and is enclosed in single or double quotes.
 
 . Null: Represents the intentional absence of any value.
 
 . Undefined: Denotes a variable that has been declared but hasn't been assigned a value.
 
 . Boolean: Represents either `true` or `false`.
 
 . Symbol: Introduced in ECMAScript 6, used for creating unique identifiers.

## Reference Datatypes:

. [] , {} , () these are all refernces generally Arrays , Objects , () are considered to be reference datatypes
When we try to store the value of b to a now here the copy of a is stored inside the variable b that means the changes we do to b can also reflect in a as "b" is a refernce of "a"

```javascript
var a = [23,4,4,5]
var b = a;
```
Type Conversion: JavaScript performs type conversions automatically. For example, you can concatenate a string and a number, and JavaScript will convert the number to a string to complete the operation.

## Type Conversion 

=> Type conversions help manipulate data effectively. Be aware of these conversion rules:

=> String to Number Conversion: Use Number() to convert strings to numbers. Be cautious; if the string cannot be converted to a valid number, it will result in NaN.

=> Number to String Conversion: Convert numbers to strings using String(). This is useful for concatenation and displaying numeric values as strings.

=> Boolean Conversion: Convert values to boolean using Boolean(). Empty strings and 0 are considered false, while non-empty strings and non-zero numbers are considered true.

## Comparisons of Data Types

=> Comparing values is a fundamental part of programming. Keep in mind:

=> Always compare values of the same data type for accurate results.

=> Equality vs. Strict Equality: The == operator checks for equality after performing type conversions, while the === operator (strict equality) checks for equality without type conversion. It's generally recommended to use strict equality for predictable results.

## Dynamic Typing

=> JavaScript is dynamically typed, meaning variables can hold values of any data type. This provides flexibility, but it's essential to be mindful of unexpected type-related behaviors.

## Stack (Primitive) and Heap (Reference) Memory

.. Understanding memory allocation is vital:

=> Primitive Data Types: These are stored in the stack as standalone values. Assigning one variable to another copies the value.

=> Reference Data Types: Objects, arrays, and functions are reference data types. They are stored in the heap, and variables hold references to the actual data.

## Numbers, Math, Date, and Time 

## Numbers and Math

=> Understanding numeric values and mathematical operations is crucial:

=> Strictly Numeric: JavaScript numbers include integers and floating-point numbers.

=> Math Operations: Functions like abs(), round(), ceil(), floor(), min(), and max() assist in various mathematical calculations.

=> Math.random()
Generating random numbers requires attention:

=> The Math.random() function returns a random floating-point number between 0 (inclusive) and 1 (exclusive).

=> To generate random numbers within a specific range, use Math.random() * (max - min + 1) + min.

 ## Dates and Time

. Handling dates and times accurately is essential for various applications:

=> JavaScript's built-in Date object simplifies working with dates and times.

=> Date formats: toString(), toISOString(), toLocaleDateString(), toLocaleString(), toJSON().

=> Methods like getMonth(), getDay(), and others help extract specific information from dates.

=> Timestamps: Represented in milliseconds, timestamps are crucial for comparing and tracking time intervals.

## Strings

## String Manipulation
Strings are fundamental in JavaScript for representing text. Here's a comprehensive look at string manipulation techniques:

Normal and Modern String Concatenation
In JavaScript, strings are sequences of characters enclosed in single (' ') or double (" ") quotes. They can be manipulated in various ways:

1. Normal Concatenation: You can concatenate strings using the + operator. For example: "Hello, " + "World!".

2. String Interpolation (Modern Way): String interpolation is a cleaner and more readable way to combine strings with variables. Use backticks (`) and ${variable} to embed variables within strings.

## Declaring Strings and String Methods
You can create strings in JavaScript using single, double quotes, or the string constructor new String('text').

1. Accessing Characters: Strings can be accessed character by character using square brackets, like an array. For instance, userName[1] gives you the character at index 1.

2. String Length: You can find out the length of a string using the length property: userName.length.

3. Changing Case: JavaScript provides methods to change the case of strings. toUpperCase() converts the string to uppercase, while toLowerCase() converts it to lowercase.

4. Character at Index: The charAt(index) method retrieves the character at the specified index. For instance, userName.charAt(3) gives you the character at index 3.

5. Finding Index of Character: indexOf(character) returns the index of the first occurrence of the specified character. If not found, it returns -1.

## Substrings and Trimming
Manipulating strings also includes working with substrings and trimming excess spaces:

1. Substring: The substring(startIndex, endIndex) method extracts a portion of the string. It does not include the character at the endIndex.

2. Slice: Similar to substring, the slice(startIndex, endIndex) method extracts a section of the string. It supports negative indices and includes the character at the endIndex.

3. Trimming: The trim() method removes leading and trailing white spaces from a string. It's useful for cleaning up user inputs, like removing extra spaces.

## Replacement and Detection
Additional techniques include replacing substrings and detecting the presence of specific text:

1. Replacing Substrings: The replace(search, replacement) method replaces the first occurrence of search with replacement in the string. For example: url.replace("%", "-").

2. String Detection: The includes(substring) method checks if the given substring exists in the string. It returns true if found, otherwise false.

## How JavaScript works ?

Everything in JavaScript happens inside the Execution context

In the Execution context all the variables and functions are stored like key value pairs inside the variable environment

The code is executed one line at a time inside the Thread of Execution

JavaScript is a Synchronous Single Threaded Language that means Js executes one command at a time that too in a specific order 

## Behind the scens of JavaScript

When actually code works firstly a Global Execution is created inside a call stack

The Execution Context is executed in 2 phases first is memory creation phase

Here Javascript allocates the memory to all the variables and the value of variables is undefined in case of functionss the whole code is stored within a specific code

In the code Execution Phase Now again Js runs the code line by line here the real values of variables are assigned to the variables that are already stored 

Running a function - A all together new execution context is created to run the function which again has a memory creation phase and a code execution context, it involves storing of all variables and parameters and again the code executes in Execution Context

Now "return" tells the function to return the value of function to the real exectuion context after the whole function is executed now the functional execution context is compeltly deleted

After the whole code is executed the global execution will also get deleted

Call Stack maintains the order of execution of execution contexts

# JavaScript Null vs. Undefined 

## Undefined

### What is Undefined?
Think of "undefined" as something that hasn't been defined or doesn't exist yet.
If you declare a variable but don't give it a value, it becomes "undefined."

```javascript
let x; // x is undefined because we didn't give it a value
```
case 2 - When a function doesn't return anything, it also returns "undefined."
```javascript
function doNothing() {
  // This function returns undefined because it doesn't return anything explicitly.
}
```
case 3 -  If you try to access a property that doesn't exist in an object, you'll get "undefined."
```javascript
let person = {};
console.log(person.age); // person.age is undefined because "age" doesn't exist
```
## Null

"Null" is used when you want to say that something intentionally has no value.
It's like an empty placeholder, indicating that there's nothing there.
```javascript
let emptyValue = null; // We explicitly set emptyValue to null, meaning it's intentionally empty.
```
case 2 - Often used in objects when a property doesn't have a value, or when you want to reset a variable.
```javascript
let person = {
  name: "John",
  age: null, // Here, we're saying that age is intentionally unknown or not set.
}
```
## Main Differences

"Undefined" is used for things that haven't been defined or don't exist, like uninitialized variables or missing properties.
"Null" is used when you want to explicitly say that something is intentionally empty or doesn't have a value.
When comparing them using loose equality (==), they are considered equal to each other and not equal to any other value.
When comparing them using strict equality (===), they are not equal because they are different data types.

```javascript
console.log(null == undefined); // true
console.log(null === undefined); // false
```
Conclusion - "undefined" is for things that weren't given a value, while "null" is for things intentionally left empty. 
Understanding these differences is important 
a basic interview question and a basic diff b/w undefined and null
