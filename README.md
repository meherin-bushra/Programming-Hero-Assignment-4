# Programming-Hero-Assignment-4

1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is

A. getElementById: Designed to return a single element with a unique identifier. Since IDs should be unique in the DOM, this method is direct and efficient.
b. getElementsByClassName: Returns a collection of elements that share the same class. It’s a live collection, meaning it updates automatically if the DOM changes.
C. querySelector: Returns the first element that matches a given CSS selector. It’s flexible because it supports complex selectors.
D. querySelectorAll: Returns all elements that match a CSS selector, as a static collection. It does not update automatically when the DOM changes.

2. Creating and inserting a new element into the DOM
   
Firstly creating a new node in memory.Then configuring it with attributes, text, or styles.After that inserting it into the DOM tree at a chosen location.
This insertion can be at the end of a parent, before another element, or at the beginning. Conceptually, you’re extending the DOM structure by adding new nodes.

3. Event Bubbling
   
Event bubbling is the propagation mechanism in the DOM where an event triggered on a child element travels upward through its ancestors.Its work like For example, a click on a button inside a form will first be handled by the button, then the form, then the document body, unless stopped.It’s a hierarchical event flow from the most specific element to the most general ancestor.

4.Event Delegation

Event delegation is the practice of assigning a single event listener to a parent element to manage events for its child elements. Because of bubbling, the parent can detect interactions on its children.
It is useful becouseof its reduces the number of event listeners means efficiency.its makes it easier to handle dynamic content .its provides centralized control over related events.

5. Difference between preventDefault() and stopPropagation() is
   
preventDefault():Its stops the browser’s built-in behavior associated with an event.
stopPropagation(): it stops the event from continuing its bubbling journey up the DOM tree.


