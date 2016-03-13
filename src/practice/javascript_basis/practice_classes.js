//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
'use strict';

console.log("**************************************************************");
console.log("Classes");
console.log("**************************************************************");

console.log("************    Class declarations           **************");
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

var p = new Polygon();

console.log("typeof Polygon = " + (typeof Polygon));
console.log("Polygon instanceof Object = " + (Polygon instanceof Object) );
console.log("p = " );
console.log(p);

console.log("typeof p = " + (typeof p));
console.log("p instanceof Polygon = " + (p instanceof Polygon) );



console.log("************    Class expressions          **************");
// unnamed
var Prussia1 = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log("It's a unnamed class");
console.log(Prussia1);
var prussia1 = new Prussia1();
console.log(prussia1);

// named
var Prussia2 = class Prussia {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

console.log("It's a named class");
console.log(Prussia2);
var prussia2 = new Prussia2();
console.log(prussia2);

