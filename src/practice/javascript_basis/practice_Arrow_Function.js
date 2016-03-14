//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// 'use strict';

console.log("**************************************************************");
console.log("An arrow function expression (also known as fat arrow function) has a shorter syntax compared to function expressions and lexically binds the this value (does not bind its own this, arguments, super, or new.target). Arrow functions are always anonymous.");
console.log("**************************************************************");

console.log("Basic Syntax");

console.log("(param1, param2, …, paramN) => { statements }");
console.log("(param1, param2, …, paramN) => expression");
console.log("         // equivalent to:  => { return expression; }");
console.log("\n");
console.log("// Parentheses are optional when there's only one parameter:");
console.log("(singleParam) => { statements }");
console.log("singleParam => { statements }");
console.log("\n");
console.log("// A function with no parameters requires parentheses or an underscore:");
console.log("() => { statements }");
console.log("_ => { statements }");

console.log("\nA lambda expression is an anonymous function that you can use to create delegates or expression tree types. By using lambda expressions, you can write local functions that can be passed as arguments or returned as the value of function calls.");



var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true
