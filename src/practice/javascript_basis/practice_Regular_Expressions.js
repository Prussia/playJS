//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// 'use strict';

console.log("**************************************************************");
console.log("Creating a regular expression");
console.log("**************************************************************");

var re1 = new RegExp("ab+c");
var re2 = /ab+c/;

console.log("Working with regular expressions");

var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");

console.log(myArray);