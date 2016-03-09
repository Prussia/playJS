var answer;
console.log("var answer;");
console.log("Data type and checking");
var i = 1;
console.log(i++ + ".answer instanceof Number \n" + (answer instanceof Number));
console.log(i++ + ".answer instanceof Boolean\n"+(answer instanceof Boolean));
console.log(i++ + ".answer instanceof String\n" +(answer instanceof String));
console.log(i++ + ".answer instanceof Array\n" + (answer instanceof Array));
console.log(i++ + ".answer=== null \n" + (answer === null));
console.log(i++ + ".answer=== undefined\n"+(answer === undefined));
console.log(i++ + ".answer=== NaN\n"+(answer === NaN));
console.log(i++ + ".answer== null\n"+(answer == null));
console.log(i++ + ".answer== undefined\n"+(answer == undefined));
console.log(i++ + ".answer== NaN\n"+(answer == NaN));
/*******************************************/
console.log("Data type conversion");
answer = 42;
console.log("answer = " + answer);
console.log(i++ + ".answer instanceof Number\n" +(answer instanceof Number));
answer = "to be characters";
console.log(i++ + ".answer instanceof String\n" +(answer instanceof String));
console.log("answer = " + answer);

x = "The answer is " + 42;
y = 42 + " is answer";
console.log("x = " + x);
console.log("y = " + y);

console.log("\"37\" -7 = " + ("37" -7));
console.log("\"37\" +7 = " + ("37" +7));

console.log("characters are to be Int value");
console.log(parseInt("12.34", 10));
console.log(parseInt(" 0xF", 16));
console.log(parseInt("Hello", 8)); // Not a number at all
console.log(parseInt("546", 2));   // Digits are not valid for binary representations

/***********************************************************************************
Literals
Boolean literals
Floating-point literals
Integers
Object literals
RegExp literals
String literals
***********************************************************************************/
console.log("**************************************************************");
console.log("Array Literals");
console.log("**************************************************************");

var coffees = ["French Roast","Colombian",,"Kona",,];
console.log("coffees = " + coffees);

for(var i=0;i<coffees.length; i++){
	console.log( "coffees["+ i+"] = "  + coffees[i]);
}
// for(var i in coffees){
// 	console.log( "coffees["+ i+"] = "  + coffees[i]);
// }
// coffees.forEach(function(e){
// 	console.log(e);
// });
coffees[0] = "Chinese tea";
console.log("changed coffees  = " + coffees);
console.log("coffees instanceof Array = " + (coffees instanceof Array));
console.log("coffees.length = " + coffees.length );

console.log("**************************************************************");
console.log("Boolean and true/false");
console.log("**************************************************************");

function checkBoolean(value, name){
	if(value){
		console.log(name + " in the block");
	}else{
		console.log(name + " not in the block");
	}
}

var boolValue = new Boolean("false");
console.log("boolValue = " + boolValue);
console.log("boolValue.value = " + boolValue.value);
checkBoolean(boolValue, "boolValue");


console.log("**************************************************************");
console.log("Object literals");
console.log("**************************************************************");

var sales = "Toyota";
function carTypes(name){
	if(name === "Honda") {

		console.log("car name = " + name );
		return name;
	}else{
		return "Sorry, we don't sell " + name + "." ;
	}
}
var car = {myCar: "Saturn", getCar: carTypes("Honda"), special: sales};

console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);
console.log("**************************************************************");

var car= {manyCars:{a: "Saab", "b": "Jeep"},7: "Mazda"};
console.log(car.manyCars.a);
console.log(car.manyCars.b);
console.log(car[7]);

console.log("**************************************************************");
console.log("String literals");
console.log("**************************************************************");

console.log("The length (My name is Prussia) = " + "My name is Prussia".length);

console.log("**************************************************************");
console.log("Expression interpolation");
console.log("**************************************************************");
var name = "Prussia", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);