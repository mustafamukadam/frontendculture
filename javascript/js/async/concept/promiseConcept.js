// let p = Promise.resolve('done!')
// console.log('p', p)
// let p1 = Promise.resolve(p)
// console.log('p1 === p', p1 === p) //true!
// console.log('p1', p1)
// p1.then(data => console.log(data))

/**
 * ⭐️ My (WRONG!) conclusion from above code - what I wrote is wrong!
 * If I pass a promise object (state=fulfilled) p as parameter to Promise.resolve(p),
 * it will NOT return fulfilled promise object (i.e., p), BUT resolved value of passed promise object (i.e. whatever value p resolves to)
 */

//? ------------------------------Error handling with promises---------------------------------

/**
 * one and two will be printed and then boom 💥
 * if error is not handled, script dies with a message in the console
 * Reason - As said in the chapter, there’s an "implicit try..catch" around the function code. So all synchronous errors are handled.
 * But here the error is generated not while the executor is running, but later. So the promise can’t handle it.
 * link - https://javascript.info/promise-error-handling
 */

// console.log("one");
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     // throw new Error("Whoops!"); // this inside async code will NOT be handled by catch
//     reject(); // this inside async will be handled by catch
//   }, 1000);
//   // noSuchFunction(); // Error here (no such function)
//   // reject(); // reject means catch() is expected
// })
//   .then(() => {
//     // successful promise handlers, one or more
//   })
//   .catch(() => console.log("Handled!"));

// console.log("two");

/**
 * if throw Error() in executor or any then, it will be catch-ed (implicit try..catch) but only synchronous ones, if async no.
 */
/**
 * In the browser we can catch such errors using the event unhandledrejection
 * window.addEventListener('unhandledrejection', function(event) {...})
 */

//? -----------------------------------------------------------------
// console.log('A', Promise.resolve("I have resolved!")); // Promise {<fulfilled>: 'I have resolved!'}
// console.log('B', Promise.resolve("I have resolved!").then(console.log)); //I have resolved!

//? -----------------------------------------------------------------
