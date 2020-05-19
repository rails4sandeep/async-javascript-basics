/*
This code shows the example of resolving promises in parallel.
The execution waits until all the promises are resolved
 */
console.log('before')

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('1 is resolved');
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('2 is resolved');
    }, 2000);
});

Promise.all([p1,p2]).then((result) => {
    console.log('parallel promises: ' + result);
});

console.log('after')