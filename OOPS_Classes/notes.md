# Object-Oriented Programming (OOP) in JavaScript

## What is OOP?

Object-Oriented Programming (OOP) is a programming paradigm that helps organize code into objects, making it easier to manage and understand. In OOP, everything is treated as an "object," which can have properties (attributes) and methods (functions).

JavaScript supports OOP, but it's not a strictly "classical" OOP language like Java or C++. Instead, it's a prototype-based OOP language.

## JavaScript and Classes

JavaScript introduced class syntax in ES6 (ECMAScript 2015), allowing developers to define and work with classes, which are templates for creating objects. However, under the hood, JavaScript still relies on prototypes for inheritance.

## Object Literals

An object literal is a way to define an object in JavaScript using curly braces {}. It allows you to create objects with properties and methods directly in your code. For example:

```javascript
const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log(this);
  },
};
```

In the above code, user is an object literal with properties like username, loginCount, and a method getUserDetails.

## Constructor Function

A constructor function in JavaScript is a blueprint for creating objects. It's used to define and initialize objects of a specific type. Constructor functions are invoked using the new keyword. Here's an example:

```javascript
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
}
```

In the code above, User is a constructor function that can be used to create instances of users.

## Instances (new, this)

When you use the new keyword with a constructor function (e.g., new User(...)), it creates a new instance of the object.

this within a constructor function refers to the current instance being created, allowing you to set instance-specific properties.

## Example of instanceof

The instanceof operator in JavaScript checks if an object is an instance of a particular class or constructor function. For example:

```javascript
console.log(userOne instanceof User); // true
console.log(userTwo instanceof User); // true
```

In the code above, userOne and userTwo are instances of the User constructor function.

## "Four Pillars of OOP":

1. Abstraction

Abstraction is the process of simplifying complex reality by modeling classes based on the essential properties and behaviors of objects. It allows you to focus on what an object does rather than how it does it.

2. Encapsulation

Encapsulation is the practice of bundling the data (properties) and the methods (functions) that operate on the data into a single unit, called an object. It helps in hiding the internal state of an object and exposing only what's necessary.

3. Inheritance

Inheritance allows objects to inherit properties and methods from other objects, creating a hierarchy of objects. It promotes code reuse and the creation of specialized objects based on existing ones.

4. Polymorphism

Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables flexibility in code by allowing different objects to respond to the same method call in a way that is appropriate for their class.

# Prototypes in JavaScript:

At the heart of JavaScript's object-oriented nature lies a concept called "prototypes." Think of prototypes as a way objects can share and inherit properties and behaviors from other objects.

Here's the magic of prototypes in JavaScript:

1. Every Object has a Prototype: In JavaScript, every object has a hidden link to another object called its "prototype." This prototype object can also have its prototype, forming a chain of objects. This chain is called the "prototype chain."

2. Accessing Properties and Methods: When you access a property or method on an object, JavaScript looks for it directly on the object first. If it can't find it there, it looks at the object's prototype and keeps going up the prototype chain until it finds what it's looking for.

3. How It Works:

When you ask an object for something (like a property or a function), JavaScript first checks if it has it.

If it doesn't have it, it looks at the object's prototype and keeps going up the chain until it finds what you're asking for.
This searching and sharing process is called "prototypal inheritance."

4. The prototype Property:

Constructor functions (functions used to make objects) have a special thing called prototype.

When you create objects using new, they connect to the constructor's prototype and inherit its stuff.

## The this Keyword in Prototypes:

The this keyword in JavaScript refers to the current object, and it's a crucial concept when working with prototypes. When you use this inside a method of an object, it refers to the object that the method is called on.

For example, if you have an object called pallavi and you call pallavi.score(), inside the score method, this will refer to the pallavi object.

```javascript
function createUser(username, marks) {
  this.username = username;
  this.marks = marks;
}

// Adding methods to the prototype of createUser
createUser.prototype.increment = function () {
  this.marks++;
};
createUser.prototype.score = function () {
  console.log(`marks are ${this.marks}`);
};

// Creating objects using the constructor function
const pallavi = new createUser("pallavi", 80);
const karthik = new createUser("karthik", 98);

// Calling a method on an object
pallavi.score();
```

I've defined a constructor function createUser. When you use new createUser(...), it creates a new object, sets its username and marks properties, and links it to the createUser.prototype.

I've added two methods (increment and score) to the createUser.prototype. This means that every object created using new createUser(...) can access these methods through the prototype chain.

I've created two objects (pallavi and karthik) using the new keyword, which links them to createUser.prototype.

Finally, called the score method on the pallavi object, which displayed the marks for pallavi.

## new keyword

The new keyword is important here because it creates new objects linked to the prototype of the constructor function. It's how JavaScript establishes the inheritance and the use of this in the context of those objects.

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

Prototypes allow us to add properties and methods that can be shared among objects of the same type.

When adding methods to prototypes, they become accessible to all objects created from that type.

It's crucial to understand that properties added to prototypes can affect all objects of that type. In contrast, methods added to array prototypes won't work on arrays because arrays are a distinct type in JavaScript.

# Lexical Scope & Closures

## Lexical Scope

Lexical Scope

What is Lexical Scope?

Lexical scope, also known as static scope, is a fundamental concept in programming that determines how variables are accessed and resolved within a program. It defines the visibility and accessibility of variables based on their location within the code.

How Does Lexical Scope Work?

In lexical scope, the scope of a variable is determined by where it is defined in the code, not where it is called. This means that variables are accessible only from within the block or function in which they are declared or from any nested blocks/functions.

Example of Lexical Scope:

```javascript
function outerFunction() {
  let x = 10;

  function innerFunction() {
    console.log(x); // Can access x because it's in the same lexical scope
  }

  innerFunction();
}

outerFunction(); // Outputs 10
```

In this example, x is accessible within innerFunction because it's defined in the lexical scope of outerFunction.

## Closures

What is a Closure?
A closure is a powerful concept that arises from lexical scope. It occurs when a function "remembers" its lexical scope even if it's executed outside of that scope. In simpler terms, a closure allows a function to access variables from its parent function, even after the parent function has completed its execution.

How Does a Closure Work?

A closure is created when a function inside another function references a variable from the outer function. This inner function, along with its reference to the outer variable, forms a closure.

Example of a Closure:

```javascript
function outerFunction() {
  let x = 10;

  function innerFunction() {
    console.log(x); // This inner function forms a closure over x
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Outputs 10 (even though outerFunction already executed)
```

In this example, closureExample is a closure because it can still access x from outerFunction even after outerFunction has finished running.

## Benefits of Closures

Callback Functions: Closures are often used in callback functions, such as event handlers and asynchronous operations, to maintain context and data integrity.

Real-World Use Cases

Closures are used in various real-world scenarios:

Event Handlers: In web development, closures are used in event handlers to remember the context in which they were created. This ensures that event handlers can access the correct variables even when triggered later.

Module Pattern: Closures are employed to create private variables and methods in JavaScript modules, allowing developers to build organized and secure code.

Memoization: Closures are used in memoization techniques to cache expensive function results and improve performance in recursive or repetitive computations.

Managing State: Closures help manage state in React components and other frontend libraries, preserving data between renders.
