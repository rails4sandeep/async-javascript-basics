/*
 The code example in nestedCallbacks.js is rewritten using Promises instead of Callbacks.
 Comparing both the files, we can understand using promises makes the code more legible and
 easy to read. The promise takes a function with two parameters resolve and reject. 
 When the asynchronous function finished execution, the promise is fulfilled and the object in 
 resolve is returned. If the code faces an exception, the promise is rejected and an error is returned 
*/

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({'id': id, 'user': 'Sandeep Kumar'})
        }, 2000);
    });
}

function getUserDetails(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({'user': user,'website': "https://rails4sandeep.herokuapp.com"})
        }, 2000);
    });
}

console.log('before callback');
getUser(20).then((result) => {
    console.log('promise fulfilled getUser: ' + JSON.stringify(result))
    getUserDetails(result).then((result) => {
        console.log('promise fulfilled getUserDetails: ' + JSON.stringify(result))
    });
});
console.log('after callback');
