/*
 An example of the nested callbacks. Shows how to call functions that are dependent on others 
 when writing asynchronous code using callbacks. The function getUserDetails which is dependent on the
 value returned from the getUser function is nested inside the callback.
 This also shows how writing callback functions can become messy very quickly when
 writing applications
*/
console.log('before callback');
getUser(20, (user) => {
    console.log('callback function for getUser returned: ' + JSON.stringify(user))
    
    getUserDetails(user, (website) => {
        console.log('callback function for getUserDetails returned: ' + JSON.stringify(website))
    })
});
console.log('after callback');

function getUser(id, callback) {
    setTimeout(() => {
        callback({'id': id, 'user': 'Sandeep Kumar'})
    }, 2000);
}

function getUserDetails(user, callback) {
    setTimeout(() => {
        callback({'website': "https://rails4sandeep.herokuapp.com"})
    }, 2000);
}