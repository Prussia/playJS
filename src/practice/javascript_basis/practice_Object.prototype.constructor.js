//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
// 'use strict';

console.log("**************************************************************");
console.log("Returns a reference to the Object function that created the instance's prototype. Note that the value of this property is a reference to the function itself, not a string containing the function's name. The value is only read-only for primitive values such as 1, true and "test".");
console.log("**************************************************************");

console.log("Example");
var o = {};
o.constructor === Object; //true

var a = [];
a.constructor === Array; // true

var n = new Number(3);
n.constructor === Number; //true

var s = new String("s");
s.constructor === String;

var t = "s";
t.constructor === String;
