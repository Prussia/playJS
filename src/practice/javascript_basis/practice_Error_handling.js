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
}catch(e){
	console.log(e);
	e.message += " and got in catch block";
	//throw e;
}finally{
	console.log("got into finally block");
}

console.log("**************************************************************");
console.log("Promises");
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
console.log("**************************************************************");
var promiseCount = 0;

function testPromise(){
	var thisPromiseCount = ++promiseCount;

	var log = document.getElementById('log');
	log.insertAdjacenHTML('beforeend', thisPromiseCount 
		+ ') Started (<small> Sync code started</small>) <br/>');

	// We make a new promise: we promise the String 'result' (after waiting 3s)
	var p1 = new Promise(
		//The resolver function is called the ability to resolve or reject the promise
		function(resolve, reject) {
			log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Promise started (<small>Async code started</small>)<br/>');
    	// This is only an example to create asynchronism
            window.setTimeout(
                function() {
                    // We fulfill the promise !
                    resolve(thisPromiseCount);
                }, Math.random() * 2000 + 1000);

    	}
    );

	 // We define what to do when the promise is resolved/fulfilled with the then() call,
    // and the catch() method defines what to do if the promise is rejected.
    p1.then(
        // Log the fulfillment value
        function(val) {
            log.insertAdjacentHTML('beforeend', val +
                ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
        })
    .catch(
        // Log the rejection reason
        function(reason) {
            console.log('Handle rejected promise ('+reason+') here.');
        });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promise made (<small>Sync code terminated</small>)<br/>');
}

// <body>
        
//             <button id="btn">Make a promise!</button>
// <div id="log">1) Started (<small>Sync code started</small>)<br>1) Promise started (<small>Async code started</small>)<br>1) Promise made (<small>Sync code terminated</small>)<br>1) Promise fulfilled (<small>Async code terminated</small>)<br></div>
        
        
//             <script type="text/javascript">
//                 'use strict';
// var promiseCount = 0;

// function testPromise() {
//     var thisPromiseCount = ++promiseCount;

//     var log = document.getElementById('log');
//     log.insertAdjacentHTML('beforeend', thisPromiseCount +
//         ') Started (<small>Sync code started</small>)<br/>');

//     // We make a new promise: we promise the string 'result' (after waiting 3s)
//     var p1 = new Promise(
//         // The resolver function is called with the ability to resolve or
//         // reject the promise
//         function(resolve, reject) {
//             log.insertAdjacentHTML('beforeend', thisPromiseCount +
//                 ') Promise started (<small>Async code started</small>)<br/>');
//             // This is only an example to create asynchronism
//             window.setTimeout(
//                 function() {
//                     // We fulfill the promise !
//                     resolve(thisPromiseCount);
//                 }, Math.random() * 2000 + 1000);
//         });

//     // We define what to do when the promise is resolved/fulfilled with the then() call,
//     // and the catch() method defines what to do if the promise is rejected.
//     p1.then(
//         // Log the fulfillment value
//         function(val) {
//             log.insertAdjacentHTML('beforeend', val +
//                 ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
//         })
//     .catch(
//         // Log the rejection reason
//         function(reason) {
//             console.log('Handle rejected promise ('+reason+') here.');
//         });

//     log.insertAdjacentHTML('beforeend', thisPromiseCount +
//         ') Promise made (<small>Sync code terminated</small>)<br/>');
// } if ("Promise" in window) {
//   var btn = document.getElementById("btn");
//    btn.addEventListener("click",testPromise);
// }
// else {
//   log = document.getElementById('log');
//   log.innerHTML = "Live example not available as your browser doesn't support the <code>Promise<code> interface.";
// }
//             </script>
        
    
// </body>


console.log("**************************************************************");
console.log("Loading an image with XHR");
console.log("**************************************************************");

function imgLoad(url) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';
    request.onload = function() {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(Error('Image didn\'t load successfully; error code:' 
                     + request.statusText));
      }
    };
    request.onerror = function() {
      reject(Error('There was a network error.'));
    };
    request.send();
  });
}
