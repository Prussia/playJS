//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
// 'use strict';

console.log("**************************************************************");
console.log("Function objects inherit from Function.prototype.  Function.prototype cannot be modified.");
console.log("**************************************************************");

console.log("Example");

console.log("function F(){}");
function F(){}

console.log("Function.prototype.a = function(){}; ");
Function.prototype.a = function(){}; 

console.log("F.prototype.b = function(){} ");
F.prototype.b = function(){};

console.log("var f = new F()");
var f = new F();

console.log("\ntypeof f.a = ");
console.log(typeof f.a);
console.log("\ntypeof f.b = ");
console.log(typeof f.b);
console.log("\ntypeof Function ");
console.log(typeof Function);
console.log("\ntypeof Function.caller ");
console.log(typeof Function.caller);
console.log("\ntypeof Function.name ");
console.log(typeof Function.name);



