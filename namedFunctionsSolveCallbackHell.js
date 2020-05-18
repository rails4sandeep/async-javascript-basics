/*
    We are trying to solve callback hell by changing anonymous functions 
    to named functions and calling them. We replace each callback function
    to a named function and pass the reference.
*/
console.log('before callback');
getUser(20, printUserDetails);

console.log('after callback');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('inside the callback of getUser...')
        callback({'id': id, 'user': 'Sandeep Kumar'})
    }, 2000);
}

function getUserDetails(user, callback) {
    setTimeout(() => {
        console.log('inside the callback of getUserDetails...')
        callback({'website': "https://rails4sandeep.herokuapp.com"})
    }, 2000);
}

 function printWebsiteDetails(website) {
        console.log('inside the printWebsiteDetails named function')
        console.log('callback function for getUserDetails returned: ' + JSON.stringify(website))
    }

function printUserDetails(user) {
    console.log('inside the printUserDetails named function')
    console.log('callback function for getUser returned: ' + JSON.stringify(user))
    getUserDetails(user, printWebsiteDetails)
}
