//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming
// 'use strict';

console.log("**************************************************************");
console.log("Proxies");
console.log("**************************************************************");

var handler = {
  get: function(target, name){
    return name in target ? target[name] : 42;
}};
var p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42
