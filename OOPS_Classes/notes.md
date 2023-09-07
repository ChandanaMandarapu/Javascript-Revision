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

    getUserDetails: function(){
        console.log(this);
    }
}
```
In the above code, user is an object literal with properties like username, loginCount, and a method getUserDetails.


## Constructor Function
A constructor function in JavaScript is a blueprint for creating objects. It's used to define and initialize objects of a specific type. Constructor functions are invoked using the new keyword. Here's an example:

```javascript
function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
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
