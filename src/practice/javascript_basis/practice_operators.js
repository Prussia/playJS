//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
// 'use strict';

console.log("**************************************************************");
console.log("Comparison operators");
console.log("**************************************************************");
var var1 =3, var2 = 4, var3 = '3';

console.log("var var1 =3, var2 = 4, var3 = '3';");
console.log("var1 == '3' is " + (var1 == '3') );
console.log("var1 === '3' is " + (var1 === '3') );
console.log("var1 != '3' " + (var1 != '3'));
console.log("var1 !== '3' " + (var1 !== '3'));
console.log("var1 < var2 is " + (var1<var2)); 

console.log("-var1 = " + -var1);
console.log("-var3 = " + -var3);

var var4 = "3", var5 = true;

console.log("+\"3\" = " + +var4);
console.log("+true =" + +var5);

// console.log("2 ** 3 = " + (2 ** 3));
// console.log("10**-1 = " + (10 ** -1);
/*********************
    delete operator
**********************/
console.log("********************delete operator***********************************");
console.log(" x =42 ");

console.log(" var y=43 ");
// console.log(" delete x = true");
// console.log(" delete y = false");
 x = 42
 var y= 43;
console.log("delete x = " + (delete x));
console.log("delete y = " + (delete y));


myobj = new Number();
myobj.h = 4;
delete myobj.h;
delete myobj;

/* 
delete Math.PI; // returns false (cannot delete predefined properties)
delete myobj.h; // returns true (can delete user-defined properties)
delete myobj;   // returns true (can delete if declared implicitly)
*/
console.log("*************************Deleting array elements***********************");
console.log("");
var trees = ["redwood","bay","cedar","oak","maple"];
trees[3] = undefined;
console.log("trees = " + trees  );
if(3 in trees) {
	console.log("3 in trees");
	console.log("trees[3] = " + trees[3]);
}else{
	console.log("3 not in trees");
}

delete trees[3];
console.log("trees = " + trees  );
if(3 in trees) {
	console.log("3 in trees");
	console.log("trees[3] = " + trees[3]);
}else{
	console.log("3 not in trees");
	console.log("trees[3] = " + trees[3]);
}
console.log("*************************typeof***********************");
var myFun = new Function("5 + 2");
var shape = "round";
var size = 1;
var today = new Date();
console.log("typeof myFun = " + (typeof myFun));
console.log("typeof shape = " + (typeof shape));
console.log("typeof size = " + (typeof size));
console.log("typeof today = " + (typeof today));
console.log("typeof dontExist = " + (typeof dontExist));
console.log("typeof true = " + (typeof true));
console.log("typeof null = " + (typeof null));
console.log("typeof 62 = " + (typeof 62));
console.log("typeof 'Hello world' = " + (typeof 'Hello world'));
console.log("typeof Date = " + (typeof Date));
console.log("typeof Function = " + (typeof Function));
/*
<a href="javascript:void(document.form.submit())">
Click here to submit</a>
*/
console.log("**************************************************************");
console.log("Relational operators");
console.log("**************************************************************");
// Arrays
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees;        // returns true
3 in trees;        // returns true
6 in trees;        // returns false
"bay" in trees;    // returns false (you must specify the index number,
                   // not the value at that index)
"length" in trees; // returns true (length is an Array property)

// built-in objects
"PI" in Math;          // returns true
var myString = new String("coral");
"length" in myString;  // returns true

// Custom objects
var mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar;  // returns true
"model" in mycar; // returns true

console.log("**************************************************************");
console.log("Spread operator");
console.log("**************************************************************");
var parts = ['shoulder','knees'];
var lyrics = ['head', parts, 'and', 'toes'];

console.log("parts = " + parts);
console.log("lyrics = " + lyrics);

function spreadOperator(x,y,z) {
	console.log("x = " + x + ", y = " + y + ", z = " + z);
}
var args = [1, 2, 3];
spreadOperator(args);

