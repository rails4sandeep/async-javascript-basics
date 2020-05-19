/*
This code shows the example of rejecting promises
and how they are caught in the catch statement when using promises
Using new Error() displays the stack trace of the error.
User new Error('error message') will display the error message
 */
console.log('before')

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('1 is resolved');
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    
        reject(new Error('2 is rejected'));
    
});

Promise.all([p1,p2])
.catch((err) => {
    console.log(err);
});

console.log('after')