/*
A rewrite of the consumingPromises.js file using async await. Comparing both the files
makes us understand how the code is easily readable similar to a synchronous code.
We can also see how a promise rejection is handled in a try catch block similar to Java & C#
await can only be used inside an asynchronous function. So the function getUserDetails which
contains the await is marked asynchronous function
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

async function getUserWebsite() {
    try {
        const user = await getUser(20);
        const userDetails = await getUserDetails(user);
        const website = userDetails['website'];
        console.log(website);
    } catch(err) {
        console.log(err.message);
    }
}

getUserWebsite();
console.log('after callback');
