//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
'use strict';

console.log("**************************************************************");
console.log("Inheritance and the prototype chain");
console.log("**************************************************************");


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
console.log("A prototype-based language, such as JavaScript, does not make this distinction: it simply has objects. A prototype-based language has the notion of a prototypical object, an object used as a template from which to get the initial properties for a new object. Any object can specify its own properties, either when you create it or at run time. In addition, any object can be associated as the prototype for another object, allowing the second object to share the first object's properties.");
console.log("\n ");
console.log(" JavaScript remaining prototype-based");

console.log("When it comes to inheritance, JavaScript only has one construct: objects. Each object has an internal link to another object called its prototype. ");

console.log(" That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. "); 
console.log(" null, by definition, has no prototype, and acts as the final link in this prototype chain.");
console.log("\n" );


console.log("**********     Inheriting properties       ************");
var o = {a: 1, b:2, c: {b:3, c:4}};
var o2 = Object.create(o);
o2.b = 3;
o2.c = 4;
console.log("***** o description *****");
console.log(o);
console.log("o.a = " + o.a); // 1
console.log("o.b = " + o.b); // 2
console.log("o.c = " ); console.log(o.c); // {b: 3, c: 4}
console.log("o.hasOwnProperty('c') = " + o.hasOwnProperty('c'));
console.log("o.c.hasOwnProperty('b') = " + o.c.hasOwnProperty('b'));
console.log("o.c.b = " + o.c.b); // 3
console.log("o.c.hasOwnProperty('c') = " + o.c.hasOwnProperty('c'));
console.log("o.c.c = " + o.c.c); // 4
console.log("***** o2 description  *****");
console.log(o2);
console.log("o2.a = " + o2.a); // 1
console.log("o2.b = " + o2.b); // 3
console.log("o2.c = " + o2.c); // 4
console.log("o2.hasOwnProperty('d') = " + o2.hasOwnProperty('d'));
console.log("o2.d = " + o2.d); // undefined
console.log("o2.c.hasOwnProperty('b') = " + o2.c.hasOwnProperty('b'));
console.log("o2.c.b = " + o2.c.b);
console.log("o2.c.hasOwnProperty('c') = " + o2.c.hasOwnProperty('c'));
console.log("o2.c.c = " + o2.c.c);



console.log("**********     Iheriting methods       ************");

var o = {
	a: 2,
	b: 3,
	m: function(b){
		return this.a + 1;
	}
};

console.log(" o.m() = " + eval("o.m()"));  // when calling o.m in this case, 'this' refers to o

var p = Object.create(o);
console.log("var p = Object.create(o) \n");
console.log("creates an own property 'a' on p");
console.log("p.a is set to be " + eval("p.a = 12") ); // creates an own property 'a' on p
console.log("p.m() = " + eval( "p.m()" ) ) ; //13
console.log("p.a = " + p.a);
console.log("p.b = " + p.b);

console.log("\nwhen p.m is called, 'this' refers to p. So when p inherits the function m of o, 'this.a' means p.a, the own property 'a' of p ");

console.log("o is ");
console.log(o);
console.log("p is ");
console.log(p);


console.log("the keys of o = " + Object.keys(o));
console.log("the keys of p = " + Object.keys(p));

console.log("\n\n*************   Different ways to create objects and the resulting prototype chai    ********************");

var o = {a: 1};

// The newly created object o has Object.prototype as its [[Prototype]]
// o has no own property named 'hasOwnProperty'
// hasOwnProperty is an own property of Object.prototype. 
// So o inherits hasOwnProperty from Object.prototype
// Object.prototype has null as its prototype.
// o ---> Object.prototype ---> null

var a = ["yo", "whadup", "?"];

// Arrays inherit from Array.prototype 
// (which has methods like indexOf, forEach, etc.)
// The prototype chain looks like:
// a ---> Array.prototype ---> Object.prototype ---> null

function f(){
  return 2;
}

// Functions inherit from Function.prototype 
// (which has methods like call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null

console.log("******   With a constructor    ******");

function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function(v){
    this.vertices.push(v);
  }
};

var g = new Graph();
// g is an object with own properties 'vertices' and 'edges'.
// g.[[Prototype]] is the value of Graph.prototype when new Graph() is executed.

console.log("******   With Object.create    ******");
var a = {a: 1}; 
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log("b.a = " + b.a); // 1 (inherited)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log("null doesn't have any properties");
console.log(d.hasOwnProperty); 
// undefined, because d doesn't inherit from Object.prototype


console.log("******   With the class keyword    ******");
// "use strict";

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);

console.log("Polygon class");
console.log(Polygon);
console.log("Square class");
console.log(Square);
console.log("square value");
console.log(square);





console.log("\n\n******   Example of inheritance    ******\n \n");

function SuperA(a){
  this.varA = a;
}

// What is the purpose of including varA in the prototype when A.prototype.varA will always be shadowed by
// this.varA, given the definition of function A above?
SuperA.prototype = {
  varA : null,  // Shouldn't we strike varA from the prototype as doing nothing?
      // perhaps intended as an optimization to allocate space in hidden classes?
      // https://developers.google.com/speed/articles/optimizing-javascript#Initializing instance variables
      // would be valid if varA wasn't being initialized uniquely for each instance
  doSomething : function(){
    // ...
    console.log("I am SuperA doSomething method");
  }
};

function SubB(a, b){
  SuperA.call(this, a);
  this.varB = b;
}
SubB.prototype = Object.create(SuperA.prototype, {
  varB : {
    value: null, 
    enumerable: true, 
    configurable: true, 
    writable: true 
  },
  doSomething : { 
    value: function(){ // override
      SuperA.prototype.doSomething.apply(this, arguments); // call super
      // ...
      console.log("I am SubB doSomething method");
    },
    enumerable: true,
    configurable: true, 
    writable: true
  }
});
SubB.prototype.constructor = SubB;

var subBValue = new SubB("A","B");
console.log("invoke subBValue.doSomething");
subBValue.doSomething();
console.log("\n");
var superAValue = new SuperA("a");
console.log("invoke superAValue.doSomething");
superAValue.doSomething();
console.log("\n");

console.log("superAValue = ");
console.log(superAValue);
console.log("subBValue = ");
console.log(subBValue);


console.log("\n \n******   Creating the hierarchy    ******");
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
function Employee() {
  this.name = "";
  this.dept = "general";
  console.log("this is Employee function");
}
function Manager() {
  Employee.call(this);
  this.reports = [];
  console.log("this is Manager function");
}
Manager.prototype = Object.create(Employee.prototype);

function WorkerBee() {
  Employee.call(this);
  this.projects = [];
  console.log("this is WorkerBee function");
}

WorkerBee.prototype = Object.create(Employee.prototype);

function SalesPerson() {
   WorkerBee.call(this);
   this.dept = "sales";
   this.quota = 100;
   console.log("this is SalesPerson function");
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);

function Engineer() {
   WorkerBee.call(this);
   this.dept = "engineering";
   this.machine = "";
   console.log("this is Engineer function");
}
Engineer.prototype = Object.create(WorkerBee.prototype);

var engineer = new Engineer();

console.log(engineer);


console.log("******   prototype and Object.getPrototypeOf    ******");
console.log("when you call");

console.log("var o = new Foo();");

console.log(" JavaScript actually just does ");

console.log("var o = new Object()");
console.log("o.[[Prototype]] = Foo.prototype");
console.log("Foo.call(o);");
console.log("\n\nThese are what is in my mind.");
console.log("I think it is the implementation of prototype design pattern.");
console.log("1. check if the o has the property");
console.log("2. check if the prototype of o has the property");
console.log("3. check if the sub prototype of o has the property");
console.log("4. and so on ");


console.log("\n\n******   In conclusion    ******");
console.log("It is essential to understand the prototypal inheritance model before writing complex code that makes use of it. Also, be aware of the length of the prototype chains in your code and break them up if necessary to avoid possible performance problems. Further, the native prototypes should never be extended unless it is for the sake of compatibility with newer JavaScript features.");