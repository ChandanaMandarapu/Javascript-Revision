# All About DOM: DOM Tree Structure and DOM Selectors

## DOM Tree Structure

The Document Object Model, or DOM, represents the structure of an HTML document as a tree. It consists of various elements, where each element corresponds to a part of the HTML document. The tree structure starts with the root, which is the <html> element, and branches out to include all other elements nested within it.

```html
<html> (Root Element)
<head>
<meta>
<title>
<body>
<div>
<h1>
Text Node: "DOM revision"
<span style="display: none;">
Text Node: "HI hello"
<p>
<ul>
<li class="list">
<li class="list">
<li class="list">
<li class="list">
```

This tree structure allows us to access and manipulate elements within the HTML document.

## DOM Selectors

DOM selectors are methods and properties that allow us to target and interact with specific elements in the DOM tree.

1. document.getElementById().

Usage: document.getElementById('id')

Description: Selects and returns an element with the specified id attribute.

Example: document.getElementById('title') selects the h1 element with the id "title."

2. document.querySelector()

Usage: document.querySelector('CSS Selector')

Description: Selects and returns the first element that matches the CSS selector.

Example: document.querySelector('h1') selects the first h1 element in the document.

3. document.querySelectorAll()

Usage: document.querySelectorAll('CSS Selector')

Description: Selects and returns a NodeList containing all elements that match the CSS selector.

Example: document.querySelectorAll('li') selects all li elements in the document.

4. document.getElementsByClassName()

Usage: document.getElementsByClassName('class')

Description: Selects and returns an
HTMLCollection containing all elements with the specified class.

Example: document.getElementsByClassName('list') selects all elements with the class "list."

5. element.setAttribute()

Usage: element.setAttribute('attribute', 'value')

Description: Sets the specified attribute with the given value on the element.

Example: document.getElementById('title').setAttribute('class', 'test heading') sets the class attribute to "test heading" on the "title" element.

6. element.style

Usage: element.style.property = 'value'

Description: Allows you to directly apply CSS styles to an element.

Example: title.style.backgroundColor = 'aquamarine' sets the background color of the "title" element to aquamarine.

## Exception Case: textContent vs. innerText vs. innerHTML

textContent: Retrieves or sets the text content of an element, including hidden elements. Even if a child element has display: none, its text content is still visible.

innerText: Retrieves or sets the text content of an element, but it respects the display: none property. If a child element is hidden, its text won't be included.

innerHTML: Retrieves or sets the HTML content of an element, including all child elements and their HTML.

# Events in JavaScript

## Introduction to Events

Events are a fundamental aspect of interactive web development. They allow you to respond to user interactions and create dynamic web applications. JavaScript provides various ways to work with events, enabling you to enhance user experience.

## Event Types

JavaScript supports a wide range of event types, including:

1. Mouse Events: Events related to mouse interactions, such as clicks, hover, and dragging.

2. Keyboard Events: Events triggered by keyboard input, like key presses and releases.

3. Form Events: Events associated with form elements, such as submitting a form or changing input values.

4. Document/Window Events: Events related to the document or window, such as page load, resize, and scroll.

5. Custom Events: You can create your own custom events to handle specific scenarios.

# Event Handling

## Adding Event Listeners

Event listeners are functions that respond to specific events on HTML elements. You can attach event listeners to elements using the addEventListener method. Here's the basic syntax:

```javascript
element.addEventListener(eventType, callbackFunction);
```

eventType is a string representing the type of event to listen for (e.g., 'click', 'keydown', 'submit').

callbackFunction is the function that gets executed when the event occurs.

Example:

```javascript
document.getElementById("music").addEventListener("click", function () {
  alert("Music is soothing");
});
```

# Event Propagation

## Understanding Event Flow

When an event occurs on an element, it follows a specific order, known as event flow, involving three phases: capturing, target, and bubbling.

Capturing Phase: Events propagate from the root of the DOM tree to the target element.

Target Phase: The event reaches the target element.

Bubbling Phase: Events propagate from the target element back up to the root.

## Exceptional Cases

In most cases, you'll work with the default bubbling phase. However, if you want to capture the event during the capturing phase, you can set the useCapture parameter to true when adding an event listener.

```javascript
element.addEventListener(eventType, callbackFunction, true); // Capturing phase
```

## Preventing Event Propagation

You can stop the propagation of an event using the stopPropagation method. This prevents the event from moving to the next phase (e.g., from capturing to bubbling).

```javascript
document.getElementById("coffee").addEventListener(
  "click",
  function (e) {
    console.log("Clicked inside li");
    e.stopPropagation(); // Stop propagation to the ul (capturing phase)
  },
  false
); // Bubbling phase
```

## Preventing Default Behavior

Default Behavior of Events

Some events have default behaviors associated with them. For example, clicking a link (a link) will navigate to the linked URL by default. You can prevent this default behavior using the preventDefault method on the event object.

```javascript
document.getElementById("google").addEventListener(
  "click",
  function (e) {
    console.log("Clicked on Google");
    e.preventDefault(); // Prevent the default link behavior
  },
  false
);
```

# Event Delegation

## Handling Events on Multiple Elements

Event delegation is a technique where you attach a single event listener to a common ancestor of multiple elements. This is especially useful for dynamically created or long lists of elements.

```javascript
document.querySelector("#imgs").addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "IMG") {
      console.log("Clicked on image with ID: " + e.target.id);
      e.target.parentNode.removeChild(e.target); // Remove the clicked image
    }
  },
  false
);
```

# Best Practices

## Avoid Inline Event Handlers

Avoid using inline event handlers like onclick in your HTML. Instead, use addEventListener to separate JavaScript from HTML for better maintainability.

## Use Event Delegation

When working with multiple similar elements, consider event delegation to minimize the number of event listeners. This improves performance and simplifies your code.

## Graceful Error Handling

Always handle exceptions and errors in your event handlers to prevent them from breaking your application. Use try...catch blocks when necessary.

## Clean Up

If you attach event listeners dynamically, remember to remove them when they are no longer needed to prevent memory leaks.
