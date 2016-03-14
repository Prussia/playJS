//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// 'use strict';

console.log("**************************************************************");
console
		.log("A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.");
console.log("**************************************************************");

console.log("Global context");

// 1）函数有所属对象时：指向所属对象
var myObject = {
	value : 100
};
myObject.getValue = function() {
	console.log(this.value); // 输出 100

	// 输出 { value: 100, getValue: [Function] }，
	// 其实就是 myObject 对象本身
	console.log(this);

	return this.value;
};

console.log(myObject.getValue()); // => 100

// 2) 函数没有所属对象：指向全局对象
var myObject = {
	value : 100
};
myObject.getValue = function() {
	var foo = function() {
		console.log(this.value) // => undefined
		console.log(this);// 输出全局对象 global
	};

	foo();

	return this.value;
};

console.log(myObject.getValue()); // => 100

// 3）构造器中的 this：指向新对象
var SomeClass = function() {
	this.value = 100;
}

var myCreate = new SomeClass();

console.log(myCreate.value); // 输出100

// 4) apply 和 call 调用以及 bind 绑定：指向绑定的对象
/*
 * apply() 方法接受两个参数第一个是函数运行的作用域，另外一个是一个参数数组(arguments)。
 * 
 * call() 方法第一个参数的意义与 apply() 方法相同，只是其他的参数需要一个个列举出来。
 * 
 * 简单来说，call 的方式更接近我们平时调用函数，而 apply 需要我们传递 Array 形式的数组给它。它们是可以互相转换的。
 */
var myObject = {
	value : 100
};

var foo = function() {
	console.log(this);
};

foo(); // 全局变量 global
foo.apply(myObject); // { value: 100 }
foo.call(myObject); // { value: 100 }

var newFoo = foo.bind(myObject);
newFoo(); // { value: 100 }

/*******************************************************************************************/

console.log("***********     Function.prototype.bind()     **********");
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

this.x = 9;
var module = {
	x : 81,
	getX : function() {
		return this.x;
	}
};

console.log("module.getX() = " + module.getX()); // 81

var retrieveX = module.getX;

var value = retrieveX();
// console.log(value);
console.log("value = " + retrieveX);

// 9, because in this case, "this" refers to the global object

// Create a new function with 'this' bound to module
// New programmers (like myself) might confuse the global var getX with module's
// property getX
var boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81

console.log("**** Arrow functions *****");
