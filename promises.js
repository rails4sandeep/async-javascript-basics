/*
A promise takes a function with two parameter resolve and reject
If the promise is fulfilled, the resolve is returned
If an exception occurs and the promise is rejected, the reject is returned
*/
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('the promise is resolved');
        reject(new Error('the promise is rejected'));
    }, 2000);
}); 

p.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error.message);
});