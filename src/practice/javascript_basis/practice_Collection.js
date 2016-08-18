var mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add("some text");
var o = {a: 1, b: 2};
mySet.add(o);

mySet.has(1); // true
mySet.has(3); // false, 3 has not been added to the set
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has("Some Text".toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 4

mySet.delete(5); // removes 5 from the set
mySet.has(5);    // false, 5 has been removed

mySet.size; // 3, we just removed one value

// iterate over items in set
// logs the items in the order: 1, "some text" 
for (let item of mySet) console.log(item);

// logs the items in the order: 1, "some text" 
for (let item of mySet.keys()) console.log(item);
 
// logs the items in the order: 1, "some text" 
for (let item of mySet.values()) console.log(item);

// logs the items in the order: 1, "some text" 
//(key and value are the same here)
for (let [key, value] of mySet.entries()) console.log(key);

// convert set to plain Array (with Array comprehensions)
var myArr = [v for (v of mySet)]; // [1, "some text"]
// Alternative (with Array.from)
var myArr = Array.from(mySet); // [1, "some text"]

// the following will also work if run in an HTML document
mySet.add(document.body);
mySet.has(document.querySelector("body")); // true

// converting between Set and Array
mySet2 = new Set([1,2,3,4]);
mySet2.size; // 4
[...mySet2]; // [1,2,3,4]

// intersect can be simulated via 
var intersection = new Set([...set1].filter(x => set2.has(x)));

// difference can be simulated via
var difference = new Set([...set1].filter(x => !set2.has(x)));

// Iterate set entries with forEach
mySet.forEach(function(value) {
  console.log(value);
});

// 1
// 2
// 3
// 4

var myArray = ["value1", "value2", "value3"];

// Use the regular Set constructor to transform an Array into a Set
var mySet = new Set(myArray);

mySet.has("value1"); // returns true

// Use the spread operator to transform a set into an Array.
console.log([...mySet]); // Will show you exactly the same Array as myArray