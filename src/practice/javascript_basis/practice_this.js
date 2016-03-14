//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// 'use strict';

console.log("**************************************************************");
console.log("A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.");
console.log("**************************************************************");

console.log("Global context");


console.log("Function.prototype.bind()");
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

this.x = 9; 
var module = {
  x: 81,
  getX: function() { return this.x; }
};

console.log("module.getX() = " + module.getX()); // 81

var retrieveX = module.getX;

var value = retrieveX();
// console.log(value);
console.log("value = " + retrieveX);


 // 9, because in this case, "this" refers to the global object

// Create a new function with 'this' bound to module
//New programmers (like myself) might confuse the global var getX with module's property getX
var boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81


console.log("**** Arrow functions *****");





