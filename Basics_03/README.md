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