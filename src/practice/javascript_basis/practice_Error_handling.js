//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
'use strict';

console.log("**************************************************************");
console.log("Exception handling statements");
console.log("**************************************************************");
//Create an object type UserException
function UserException(message){
	this. message =  message;
	this. name = "UserException";
}

// Make the exception convert to a pretty string when used as a string
UserException.prototype.toString = function(){
	return this.name + ": \" " + this.message + "\"";
}



try{
	//Create an instance of the object type and throw it
	throw new UserException("Value too high");
} catch (e if e instanceof TypeError) { //     Conditional catch clauses
    // statements to handle TypeError exceptions
} catch (e if e instanceof RangeError) {
    // statements to handle RangeError exceptions
} catch (e if e instanceof EvalError) {
    // statements to handle EvalError exceptions
} catch (e) {
    // statements to handle any unspecified exceptions
    // logMyErrors(e); // pass exception object to error handler
    console.log(e);
    e.message += " and got in catch block";
    //throw e;
}

finally{
	console.log("got into finally block");
}


console.log("***************************************************************");
console.log("***************************************************************");



console.log("******************    Nested try-blocks    *****************************");
console.log("***************************************************************");
try {
  try {
    throw new Error("oops");
  }
  catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  }
  finally {
    console.log("finally");
  }
}
catch (ex) {
  console.error("outer", ex.message);
}

// Output:
// "inner" "oops"
// "finally"
// "outer" "oops"