//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
// 'use strict';

console.log("**************************************************************");
console.log("Function scope");
console.log("**************************************************************");

// The following variables are defined in the global scope
var num1 = 20,
    num2 = 3,
    name = "Chamahk";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore () {
  // var num3 = 7,
  //     num4 = 8;
  var num1 = 2;
      num2 = 3;
  
  function add() {
    return name + " scored " + (num1 + num2);
  }
  
  return add();
}

getScore(); // Returns "Chamahk scored 5"

console.log("**************************************************************");
console.log("Nested functions and closures");
console.log("**************************************************************");
function outside(x) {
  function inside(y) {
  	var z = 3;
    return x + y + 3;
  }
  return inside; //The inner function can be accessed only from statements in the outer function.
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8

console.log("**************************************************************");
console.log("Multiply-nested functions");
console.log("**************************************************************");
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // logs 6 (1 + 2 + 3)
console.log("**************************************************************");
console.log("Closures");
console.log("**************************************************************");
console.log("Closures are one of the most powerful features of JavaScript.\n JavaScript allows for the nesting of functions and grants the inner function full access to all the variables and functions defined inside the outer function (and all other variables and functions that the outer function has access to). \nHowever, the outer function does not have access to the variables and functions defined inside the inner function. \nThis provides a sort of security for the variables of the inner function.\nAlso, since the inner function has access to the scope of the outer function, the variables and functions defined in the outer function will live longer than the outer function itself, if the inner function manages to survive beyond the life of the outer function. \nA closure is created when the inner function is somehow made available to any scope outside the outer function.");
console.log("**************************************************************");
var createPet = function(name) {
  var sex;
  
  return {
    setName: function(newName) {
      name = newName;
    },
    
    getName: function() {
      return name;
    },
    
    getSex: function() {
      return sex;
    },
    
    setSex: function(newSex) {
      if(typeof newSex == "string" && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")) {
        sex = newSex;
      }
    }
  }
}

var pet = createPet("Vivie");
pet.getName();                  // Vivie

pet.setName("Oliver");
pet.setSex("male");
pet.getSex();                   // male
pet.getName();                  // Oliver
console.log("**************************************************************");
console.log("Using the arguments object");
console.log("**************************************************************");

function myConcat(separator) {
   var result = "", // initialize list
       i;
   // iterate through arguments
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return result;
}

var result;
result = 
// returns "red, orange, blue, "
myConcat(", ", "red", "orange", "blue");
console.log(result);

result = 
// returns "elephant; giraffe; lion; cheetah; "
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");
console.log(result);

result = 
// returns "sage. basil. oregano. pepper. parsley. "
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
console.log(result);

console.log("**************************************************************");
console.log("Arrow functions");
console.log("**************************************************************");
//Shorter functions
var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryl­lium"
];

var a2 = a.map(function(s){ return s.length });

var a3 = a.map( s => s.length );

console.log(a2);
console.log(a3);


console.log("**************************************************************");
console.log("Lexical this");
console.log("**************************************************************");
// function Person() {
//   // The Person() constructor defines `this` as itself.
//   this.age = 0;

//   setInterval(function growUp() {
//     // In nonstrict mode, the growUp() function defines `this` 
//     // as the global object, which is different from the `this`
//     // defined by the Person() constructor.
//     this.age++;
//   }, 1000);
// }

// var p = new Person();

// console.log("not effective for p");

// console.log(p);

// function Person() {
//   var self = this; // Some choose `that` instead of `self`. 
//                    // Choose one and be consistent.
//   self.age = 0;

//   setInterval(function growUp() {
//     // The callback refers to the `self` variable of which
//     // the value is the expected object.
//     self.age++;
//   }, 1000);
// }

// var p = new Person();

// console.log("effective for p");
// setTimeout(function(){console.log(p)},1000);
// setTimeout(function(){console.log(p)},2000);
// setTimeout(function(){console.log(p)},3000);

console.log("**************************************************************");
console.log("Predefined functions");
console.log("**************************************************************");

console.log(" eval() ");
var so = eval(new String("2 + 2")); // returns a String object containing "2 + 2"
var n = eval("2 + 2");             // returns 4

console.log("so = eval(new String(\"2 + 2\"));");

console.log("eval(\"2 + 2\") = " + n);
console.log("eval(new String(\"2 + 2\")) = " + (so instanceof String));
console.log("eval(so.toString()) = " + eval(so.toString()));


console.log("*************Using eval to evaluate a string of JavaScript statements****************************************");
var x = 5;
var str = "if (x == 5) {console.log('z is 42'); z = 42;} else z = 0; ";

console.log("z is ", eval(str));

console.log("*************Last expression is evaluated**********************");
var str = "if ( a ) { 1+1; } else { 1+2; }";
var a = true;
var b = eval(str);  // returns 2
 
console.log("b is : " + b);

a = false;
b = eval(str);  // returns 3

console.log("b is : " + b);

console.log("******eval as a string defining function requires \"(\" and \")\" as prefix and suffix***********************");
var fctStr1 = "function a() {console.log('fctStr1');}"
var fctStr2 = "(function a() {console.log('fctStr2');})"
var fct1 = eval(fctStr1);  // return undefined
var fct2 = eval(fctStr2);  // return a function

console.log(fct2());

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
console.log("***************          Method definitions          **********************");
var obj = {
  foo: function() {},
  bar: function() {}
};

// works as well now
var obj = {
  foo() {},
  bar() {}
};

// Using a named property (pre-ES6)
var obj2 = {
  g: function*() {
    var index = 0;
    while(true)
      yield index++;
  }
};

// The same object using shorthand syntax
var obj2 = { 
  * g() {
    var index = 0;
    while(true)
      yield index++;
  }
};

var it = obj2.g();
console.log(it.next().value); // 0
console.log(it.next().value); // 1

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
console.log("***************   function*  ***********************");
console.log("Calling a generator function does not execute its body immediately; an iterator object for the function is returned instead. When the iterator's next() method is called, the generator function's body is executed until the first yield expression, which specifies the value to be returned from the iterator or, with yield*, delegates to another generator function. The next() method returns an object with a value property containing the yielded value and a done property which indicates whether the generator has yielded its last value.");

function* idMaker(){
  var index = 0;
  while(index < 3)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined

console.log("***********    Example with yield*      *******************");

function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i){
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20



