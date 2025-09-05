1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Answer : getElementById("id") returns one element by ID,
   getElementsByClassName("class") returns all elements by class (live HTMLCollection),
   querySelector("css") returns the first match of a CSS selector,
   querySelectorAll("css") returns all matches (static NodeList).

2. How do you create and insert a new element into the DOM?
   Answer : const p = document.createElement("p");
   p.textContent = "Hello";
   document.body.appendChild(p);

3. What is Event Bubbling and how does it work?
   Answer : Event starts at the target element and moves up through parent elements until document.

4. What is Event Delegation in JavaScript? Why is it useful?
   Answer : Attach one event listener on a parent and handle events for all child elements Useful for dynamic elements and fewer listeners.

5.What is the difference between preventDefault() and stopPropagation () methods?
Answer : preventDefault() vs stopPropagation():

preventDefault() stops default action (like link navigation or form submit)

stopPropagation() stops the event from bubbling to parent elements
