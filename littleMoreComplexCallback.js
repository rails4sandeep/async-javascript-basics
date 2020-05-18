/* 
In this example we are passing the user object to the callback function.
The callback function will take it as an argument and processes it
*/
console.log('before callback function')
getUser(20, (user) => {
    console.log(user);
});

function getUser(id, callback) {
    setTimeout(() => {
        callback({'id': id, 'user': 'user containing the id'});
    }, 2000);
};