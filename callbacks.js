/*
    When writing asynchronous code, a function will have a callback function as a parameter. 
    This function is passed when the result of an asynchronous operation is ready.
    Here in the code below, before is printed first, after is printed next, then the statement in getUser is printed next.
    The getUser function passes a parameter id, which is passed to the callbback function after waiting for two seconds.
    Then since the setTimeout operation is complete, the callbback function is called.
    Which means the console log statement in the callback function is printed
*/ 
console.log('before callback function')
getUser(20,  function(){})
console.log('after callback function')

function getUser(id, callback) {
    setTimeout(() => {
        callback(console.log('in the callback function called after timeout is passed: ' + id));
    }, 2000);
}