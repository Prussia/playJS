//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections

console.log("**************************************************************");
console.log("Creating a regular expression");
console.log("**************************************************************");
console.log("Array Methods");

console.log("forEach(callback[, thisObject]) executes callback on every array item.");
var a = ['a', 'b', 'c'];
a.forEach(function(element) { console.log(element);} ); 
// logs each item in turn
console.log("map(callback[, thisObject]) returns a new array of the return value from executing callback on every array item.");
var a1 = ['a', 'b', 'c'];
var a2 = a1.map(function(item) { return "I\'m " + item.toUpperCase(); });
console.log(a2); // logs A,B,C

console.log("filter(callback[, thisObject]) returns a new array containing the items for which callback returned true.");
var a1 = ['a', 10, 'b', 20, 'c', 30];
var a2 = a1.filter(function(item) { return typeof item === 'number'; });
console.log(a2); // logs 10,20,30

console.log("every(callback[, thisObject]) returns true if callback returns true for every item in the array.");

function isNumber(value){
  return typeof value === 'number';
}
var a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // logs true
var a2 = [1, '2', 3];
console.log(a2.every(isNumber)); // logs false

console.log("some(callback[, thisObject]) returns true if callback returns true for at least one item in the array.");

function isNumber(value){
  return typeof value === 'number';
}
var a1 = [1, 2, 3];
console.log(a1.some(isNumber)); // logs true
var a2 = [1, '2', 3];
console.log(a2.some(isNumber)); // logs true
var a3 = ['1', '2', '3'];
console.log(a3.some(isNumber)); // logs false

console.log("*********arrow******************************************************************");
var m = [1,2,3];
var a = m.map(s => s + 1 + "b");
console.log("m = " + m);
console.log("a = " + a);








