## Function Basics

## Introduction to Functions

. Functions in JavaScript are blocks of reusable code that allow you to perform a specific task.
. They are crucial for code organization, readability, and maintainability.
. Functions can take parameters (inputs) and return values (outputs).

## Function Parameters and Arguments

. Parameters
. Parameters are placeholders for values that a function expects when called.
. They act as variables within the function, representing the values passed to the . function.
. In my code, n1 and n2 in the multiply function are parameters.

. Arguments
. Arguments are the actual values passed to a function when it is invoked (called).
. They correspond to the parameters defined in the function declaration.
. In my code, 3 and 4 in multiply(3, 4) are arguments.


## Return Statement

. The return statement in a function specifies the value that the function will output.
. It is used to convey the result of a function's computation back to the calling code.
. Functions can have multiple return statements, but only one will execute.
. In my code, return a + b in the sum function returns the sum of a and b.

## Default Parameters

. Default parameters allow you to specify a default value for a function parameter in case the caller does not provide a value.
. They provide flexibility and ensure that a function can still execute with missing or undefined arguments.
. In my code, the username = "chand" in the userMessage function is a default parameter.

## Rest Operator

. Rest parameters (...) allow functions to accept an indefinite number of arguments as an array.
. They are useful when you don't know in advance how many arguments will be passed.
. In my code, ...num1 in caluclateCartPrice collects all arguments beyond the first two in an array.

## Using Objects in Functions

Passing Objects to Functions

. Functions can accept objects as arguments, enabling you to work with structured data.
. This is helpful for passing complex data structures to functions.

## Using Arrays in Functions
. Passing Arrays to Functions
. Functions can accept arrays as arguments, allowing you to manipulate lists of values.
. They are especially useful when you need to process multiple items.

## Scope in JavaScript

## Global and Block Scope

## Global Scope

. Global scope refers to variables declared outside of any function or block.
. Global variables are accessible from anywhere in the code.
. They should be used sparingly to avoid naming conflicts and maintain a clean codebase.

## Block Scope

. Block scope refers to variables declared within a block (enclosed by {}).
. Variables with block scope are only accessible within that block.
. Block-scoped variables help prevent unintended variable shadowing and promote encapsulation.

## Function Scope

. Function scope refers to variables declared within a function.
. These variables are only accessible within that function.
. Nested functions can access variables declared in their parent functions, creating a hierarchy of scope.

## Using if and else

. Conditional statements, such as if and else, allow you to control the flow of your code based on conditions.
. They execute specific code blocks when certain conditions are met.
. Proper indentation and organization enhance code readability and maintainability.

## Hoisting

. . Variable Hoisting

. Hoisting is a JavaScript behavior where variable declarations are moved to the top of their containing scope during compilation.
. Variables and functions declared with var are hoisted, meaning they can be used before they are declared.
. Variables declared with let and const have block scope and are not hoisted.

## Arrow Functions and IIFE

. Arrow functions provide a more concise syntax for defining functions in JavaScript.
. They are commonly used for short, one-line functions.
. Arrow functions automatically return the result of a single expression without the need for the return keyword.

## IIFE (Immediately Invoked Function Expressions)

. IIFE is a design pattern that creates and immediately executes functions.
. It helps prevent global variable pollution by encapsulating code within a function scope.
. IIFE can take arguments and execute code immediately upon declaration.

## Conditionals in JavaScript

. Conditional statements in JavaScript are used to make decisions and execute different code blocks based on specific conditions. There are two main types of conditional statements: if-else and switch.

## if-else Statement

. The if-else statement is used to execute a block of code if a specified condition evaluates to true, and another block of code if the condition is false.
. It allows for branching in your code, where different actions can be taken based on the result of the condition.
. You can have multiple else if conditions to handle multiple cases.
The else block is optional and is executed when none of the conditions are met.

## switch Statement

. The switch statement is used to select one of many code blocks to be executed based on the value of an expression.
. It is particularly useful when you have multiple cases to handle based on the value of a single variable or expression.
. Each case block represents a possible value of the expression, and the code inside that block is executed if the value matches.
. The default case is optional and is executed when none of the cases match the expression.

Now, let's move on to loops:

## Loops in JavaScript

. Loops in JavaScript are used to execute a block of code repeatedly until a specific condition is met. There are several types of loops: for, while, and do-while.

## for Loop

. The for loop is used when you know the number of iterations you want to perform.
It consists of three parts: initialization, condition, and increment/decrement.
The loop will continue to execute as long as the condition is true.

## while Loop

. The while loop is used when you want to repeat a block of code as long as a specified condition is true.
It checks the condition before executing the block of code, and if the condition is false initially, the block of code may never execute.

## do-while Loop

. The do-while loop is similar to the while loop but guarantees that the block of code will be executed at least once before checking the condition.
It checks the condition after the first execution, so even if the condition is false, the code will run once.

Now, let's discuss higher-order loops:

## Higher-Order Loops in JavaScript

. Higher-order loops are advanced looping concepts in JavaScript that allow for more complex iterations and operations. Here are some examples:

## for...of Loop

. The for...of loop is used for iterating over the values of iterable objects like arrays and strings.
. It simplifies the iteration process by directly providing the values, rather than dealing with indices.

## for...in Loop

. The for...in loop is used for iterating over the properties (keys) of an object or the indices of an array.
. It's commonly used for iterating over object properties when you need access to both keys and values.

## forEach Method

. The forEach method is available for arrays and allows you to iterate over each element in the array.
. It's a convenient way to perform an operation on each element without managing loop counters.
. The callback function passed to forEach receives the element, index, and the original array.

Finally, let's cover filtering, mapping, and reducing data in JavaScript:

## Filter, Map, and Reduce

. JavaScript provides methods for working with arrays, such as filter, map, and reduce, which allow you to process and transform data efficiently.

## filter Method

. The filter method is used to create a new array with elements that meet a specified condition.
. It iterates through an array, and for each element, it checks the provided condition. If the condition is met, the element is included in the new array.

## map Method

. The map method is used to create a new array by applying a function to each element of an existing array.
. It iterates through an array, applies the provided function to each element, and stores the results in a new array.

## reduce Method

. The reduce method is used to accumulate values in an array into a single result.
. It iterates through an array, applying a function to each element and accumulating the result.
. The accumulator variable holds the accumulated value.
. These methods are powerful tools for manipulating and transforming data in arrays, and they can simplify complex operations on data sets.