/*
this file shows an example of chaining of promises. the object returned from the
first function is passed to the function in thenable. If there is a dependant function that uses this
data, the data is passed. Please note the return before calling the next function.
Unless the promise is returned, the thenable will not have access to the object returned
from the function called
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
            resolve({'user': user,'website': "https://flamingo.ai"})
        }, 2000);
    });
}

console.log('before callback');
getUser(20).
then((user) => {
    console.log('promise fulfilled getUser: ' + JSON.stringify(user));
    return getUserDetails(user);
}).
then((website) => {
    console.log('promise fulfilled getUserDetails: ' + JSON.stringify(website));
});
console.log('after callback');
