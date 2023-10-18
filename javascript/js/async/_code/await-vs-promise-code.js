//convert this async based code to promise based code -

async function asyncAwaitBasedCode() {
    console.log('Start');

    await Promise.resolve();
    console.log('Promise 1');

    await Promise.resolve();
    console.log('Promise 2');

    console.log('End');
}


//poe and mdn ai
function promiseBasedCode() {
    console.log('Start');

    Promise.resolve().then(() => {
        console.log('Promise 1');
        return Promise.resolve(); // (me) Promise.resolve() returns a Promise that is 'resolved'
    }).then(() => {
        console.log('Promise 2'); // then why no return here ??
    }).then(() => {
        console.log('End');
    });
}

/**
 * In the promise based code, we use the then() method to handle the resolution of each promise. 
 * Each then() callback is executed in the order they are chained, allowing us to achieve the same sequential behavior as the async/await code.

Please note that the promise based code may look a bit more verbose compared to the async/await code, but it achieves the same result by handling the promises in a sequential manner.
 */