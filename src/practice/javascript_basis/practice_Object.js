//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
// 'use strict';

console.log("**************************************************************");
console.log("Object");
console.log("**************************************************************");
console.log("var obj = Object.create(null);");
var obj = Object.create(null);
var tostring = Object.prototype.toString;

console.log(" tostring.call(obj) = " + tostring.call(obj)  ); 
console.log(" tostring.call(null) = " + tostring.call(null)  ); 


console.log("*************************Prototype*************************************");


// Example of true prototypal inheritance style 
// in JavaScript.

// "ex nihilo" object creation using the literal 
// object notation {}.
var foo = {name: "foo", one: 1, two: 2};

// Another "ex nihilo" object.
var bar = {two: "two", three: 3};

// Object.setPrototypeOf() is a method introduced in ECMAScript 2015.
// For the sake of simplicity, let us pretend 
// that the following line works regardless of the 
// engine used:
Object.setPrototypeOf(bar, foo); // foo is now the prototype of bar.

// If we try to access foo's properties from bar 
// from now on, we'll succeed. 
bar.one // Resolves to 1.

// The child object's properties are also accessible.
bar.three // Resolves to 3.

// Own properties shadow prototype properties
bar.two; // Resolves to "two"
bar.name; // unaffected, resolves to "foo"
foo.name; // Resolves to "foo"

console.log("**************************************************************");

console.log("In prototype-based languages that use delegation, the language runtime is capable of dispatching the correct method or finding the right piece of data simply by following a series of delegation pointers (from object to its prototype) until a match is found. \nAll that is required to establish this behavior-sharing between objects is the delegation pointer. \nUnlike the relationship between class and instance in class-based object-oriented languages, the relationship between the prototype and its offshoots does not require that the child object have a memory or structural similarity to the prototype beyond this link. As such, the child object can continue to be modified and amended over time without rearranging the structure of its associated prototype as in class-based systems. \nIt is also important to note that not only data, but also methods can be added or changed. \nFor this reason, some prototype-based languages refer to both data and methods as slots or members.");

