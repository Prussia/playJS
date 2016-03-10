//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
//'use strict';

console.log("**************************************************************");
console.log("Object");
console.log("**************************************************************");
console.log("var obj = Object.create(null);");
var obj = Object.create(null);
var tostring = Object.prototype.toString;

console.log(" tostring.call(obj) = " + tostring.call(obj)  ); 
console.log(" tostring.call(null) = " + tostring.call(null)  ); 


console.log("*************************Prototype*************************************");


// Example of true prototypal inheritance style 
// in JavaScript.

// "ex nihilo" object creation using the literal 
// object notation {}.
var foo = {name: "foo", one: 1, two: 2};

// Another "ex nihilo" object.
var bar = {two: "two", three: 3};

// Object.setPrototypeOf() is a method introduced in ECMAScript 2015.
// For the sake of simplicity, let us pretend 
// that the following line works regardless of the 
// engine used:
Object.setPrototypeOf(bar, foo); // foo is now the prototype of bar.

// If we try to access foo's properties from bar 
// from now on, we'll succeed. 
bar.one // Resolves to 1.

// The child object's properties are also accessible.
bar.three // Resolves to 3.

// Own properties shadow prototype properties
bar.two; // Resolves to "two"
bar.name; // unaffected, resolves to "foo"
foo.name; // Resolves to "foo"

console.log("**************************************************************");

console.log("In prototype-based languages that use delegation, the language runtime is capable of dispatching the correct method or finding the right piece of data simply by following a series of delegation pointers (from object to its prototype) until a match is found. \nAll that is required to establish this behavior-sharing between objects is the delegation pointer. \nUnlike the relationship between class and instance in class-based object-oriented languages, the relationship between the prototype and its offshoots does not require that the child object have a memory or structural similarity to the prototype beyond this link. As such, the child object can continue to be modified and amended over time without rearranging the structure of its associated prototype as in class-based systems. \nIt is also important to note that not only data, but also methods can be added or changed. \nFor this reason, some prototype-based languages refer to both data and methods as slots or members.");

console.log("**************************************************************");

var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

console.log("var myCar = new Object();");
console.log("myCar.make = " + myCar.make);
console.log("myCar['make'] = " + myCar['make']);
console.log("myCar.model = " + myCar.model);
console.log("myCar['model'] = " + myCar['model']);
console.log("myCar.year = " + myCar.year);
console.log("myCar['year'] = " + myCar['year']);
console.log("myCar[1] = " + myCar[1]);
console.log("*******************Enumerating all properties of an object*******************************");
console.log("************************** loop properties in myCar by for (var.. in object)**************************");
for(var i in myCar){
	console.log("myCar["+i+"] = " + myCar[i] );
}
console.log("***********************Object.key(o)***********************************");
console.log("Object.keys(myCar) = "+ Object.keys(myCar));
var ars = ["a", "b", "c"];
console.log("Object.keys([\"a\", \"b\", \"c\"]]) = " + Object.keys(ars));
console.log("***********************Object.getOwnPropertyNames(o)***********************************");
console.log("Object.getOwnPropertyNames(myCar) = "+ Object.getOwnPropertyNames(myCar));


console.log("*****************Object initializer*********************");

//empty object 
var object = {};
console.log(" It's an empty object = " )
console.log(object);
//object having data
var object = {
	foo: "bar",
	age: 42,
	baz: {myProp: 12},
}

console.log("It isn't an empty object = ")
console.log(object);

var a = "foo", b =42, c = {};
var o = {a,b,c};
console.log("**************define an object with 2015 syntax********************");
console.log(o);

console.log("******************getter and setter*************************");
var outterValue = "out";
var expr = "property";
var o = {
	innerValue: null,
	property: function(para){
		console.log("para = " + para );
		this.innerValue = para;
	},
	get [expr](){ // computed property name
		console.log("It's get method to return outterValue");
		return outterValue;
	},
	set property(value){
		console.log("It's set method. And set outterValue to be " + value);
		outterValue = value;
	},
};
console.log("object is ");
console.log(o);
// o.property = "test";
console.log(o.property);
o.property = "test";
console.log(o.property);

// console.log("set o.property = 'test' ");
// o.property = "test";
// console.log("get method --- o.innerValue = " + o.property);
// console.log("o.innerValue = " + o.innerValue);
// console.log(o.get());


console.log("************    Using the Object.create method           **************");
var Person = {
	name: "Person",
	showName: function(){ // or showName()
		console.log("My name is " + this.name);
	}
}

var person = Object.create(Person);
console.log(person.showName());

console.log("************    *Defining properties for an object type           **************");
function Car(){
	this.name = "Car";
}
var car1 = new Car();
car1.name = "car1";
console.log("Car's properties are " + Object.keys(car1));
console.log("Then let's add a new property for Car");
console.log("Car.property.color = 'red'");
Car.prototype.color = "red";
// car1.color = "red";
console.log(car1.name + ".color = " + car1.color);

console.log("************    Defining methods           **************");
Car.prototype.start = function(){
	return "now " + this.name + " is going ";
}
console.log(car1.start());

var car2 = new Car();
car2.name = "car2";
console.log(car2.start());
car2.start = function(){
	return "now " + this.name + " is going far away from source";
}
console.log(car2.start());

console.log("************    Defining getters and setters           **************");
var o ={
	a: 7,
	get b(){
		return this.a + 1;
	},
	set c(x){
		this.a = x;
	}
}
console.log(" o.a = " + o.a);
console.log(" o.b = " + o.b);
console.log(" before assignment, o.c is " + o.c);
console.log(" o.c =  " + eval("o.c = 20"));
console.log(" o.a =" + o.a);

console.log("************** Object.defineProperty  ********************");
// Example of an object property added with defineProperty with an accessor property descriptor
var o = {};
var bValue = 38;
console.log("bValue = " + bValue);
Object.defineProperty(o, 'b', {
  get: function() { return bValue; },
  set: function(newValue) { bValue = newValue; },
  enumerable: true,
  configurable: true
});
console.log(" o.b = " + o.b);
console.log("******************   Writable attribute   ***********************");
var o = {}; // Creates a new object

Object.defineProperty(o, 'a', {
  value: 37,
  writable: false
});

console.log(" o.a =" + o.a); // logs 37
o.a = 25; // No error thrown (it would throw in strict mode, even if the value had been the same)
console.log(" o.a =" + o.a); // logs 37. The assignment didn't work.

console.log("*********     Configurable attribute    **************************");

var o = {};
Object.defineProperty(o, 'a', {
  get: function() { return 1; },
  configurable: true
});

Object.defineProperty(o, 'a', { configurable: true }); // throws a TypeError
Object.defineProperty(o, 'a', { enumerable: true }); // throws a TypeError
Object.defineProperty(o, 'a', { set: function() {} }); // throws a TypeError (set was undefined previously)
Object.defineProperty(o, 'a', { get: function() { return 1; } }); // throws a TypeError (even though the new get does exactly the same thing)
Object.defineProperty(o, 'a', { value: 12 }); // throws a TypeError

console.log(o);
console.log(o.a);

console.log(" *********    Custom Setters and Getters   ***********");
function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
console.log("arc.temperature = " + arc.temperature);  // 'get!'
console.log("set arc.temperature to be" + eval("arc.temperature = 11"));
console.log("arc.temperature = " + arc.temperature);  // 'get!' 
console.log("set arc.temperature to be " + eval("arc.temperature = 13"));

console.log("arc.temperature = " + arc.temperature);  // 'get!'
console.log("arc.getArchive() = ");  // [{ val: 11 }, { val: 13 }]
console.log(arc.getArchive());

console.log("************    Comparing Objects           **************");
// Two variables, two distinct objects with the same properties
var fruit = {name: "apple"};
var fruitbear = {name: "apple"};

console.log("fruit == fruitbear is " + (fruit == fruitbear )); // return false
console.log("fruit === fruitbear is " + (fruit === fruitbear) ); // return false

// Two variables, a single object
var fruit = {name: "apple"};
var fruitbear = fruit;  // assign fruit object reference to fruitbear

// here fruit and fruitbear are pointing to same object
console.log( "fruit == fruitbear is " + (fruit == fruitbear)); // return true
console.log( "fruit === fruitbear is " + (fruit === fruitbear) ); // return true






