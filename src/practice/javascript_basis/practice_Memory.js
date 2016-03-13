//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management
// 'use strict';

console.log("**************************************************************");
console.log("Allocation in JavaScript");
console.log("**************************************************************");

console.log("****    Value initialization    *****");

var n = 123; // allocates memory for a number
var s = "azerty"; // allocates memory for a string 

var o = {
  a: 1,
  b: null
}; // allocates memory for an object and contained values

// (like object) allocates memory for the array and 
// contained values
var a = [1, null, "abra"]; 

function f(a){
  return a + 2;
} // allocates a function (which is a callable object)

// function expressions also allocate an object
someElement.addEventListener('click', function(){
  someElement.style.backgroundColor = 'blue';
}, false);

console.log("\n \n ******* Release when the memory is not needed anymore *******");
console.log("\n \n ******* Reference-counting garbage collection *******");


var o = { 
  a: {
    b:2
  }
}; 
// 2 objects are created. One is referenced by the other as one of its property.
// The other is referenced by virtue of being assigned to the 'o' variable.
// Obviously, none can be garbage-collected


var o2 = o; // the 'o2' variable is the second thing that 
            // has a reference to the object
o = 1;      // now, the object that was originally in 'o' has a unique reference
            // embodied by the 'o2' variable

var oa = o2.a; // reference to 'a' property of the object.
               // This object has now 2 references: one as a property, 
               // the other as the 'oa' variable

o2 = "yo"; // The object that was originally in 'o' has now zero
           // references to it. It can be garbage-collected.
           // However what was its 'a' property is still referenced by 
           // the 'oa' variable, so it cannot be free'd

oa = null; // what was the 'a' property of the object originally in o 
           // has zero references to it. It can be garbage collected.


console.log("\nReal-life example\n");


console.log("Internet Explorer 6 and 7 are known to have reference-counting garbage collectors for DOM objects. Cycles are a common mistake that can generate memory leaks");

console.log("\nMark-and-sweep algorithm\n");

console.log("This algorithm reduces the definition of \"an object is not needed anymore\" to \"an object is unreachable\".");

console.log("This algorithm assumes the knowledge of a set of objects called roots (In JavaScript, the root is the global object). Periodically, the garbage-collector will start from these roots, find all objects that are referenced from these roots, then all objects referenced from these, etc. Starting from the roots, the garbage collector will thus find all reachable objects and collect all non-reachable objects.");

console.log("Cycles are not a problem anymore");

console.log("Although this is marked as a limitation, it is one that is rarely reached in practice which is why no one usually cares that much about garbage collection.");

console.log("So don't worry about memory in JavaScript?");
