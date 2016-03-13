//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections


console.log("**************************************************************");
console.log("Maps-----ECMAScript 6");
console.log("**************************************************************");
console.log("map object");

var sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
console.log("sayings = ");
console.log(sayings);
console.log("size = " + sayings.size); // 3
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
console.log("sayings = ");
console.log(sayings);
// for (var [key, value] of sayings) {
//   console.log(key + " goes " + value);
// }
// "cat goes meow"
// "elephant goes toot"

