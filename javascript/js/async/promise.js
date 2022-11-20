let p = Promise.resolve('done!')
console.log('p', p)
let p1 = Promise.resolve(p)
console.log('p1', p1)
p1.then(data => console.log(data))

/**
 * ⭐️ My conclusion from above code -
 * If I pass a promise object (state=fulfilled) p as parameter to Promise.resolve(p),
 * it will NOT return fulfilled promise object (i.e., p), BUT resolved value of passed promise object (i.e. whatever value p resolves to)
 */


/**
 * one and two will be printed and then boom 💥
 * if error is not handled, script dies with a message in the console
 */

// console.log("one");
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     throw new Error("Whoops!"); // this inside async code will NOT be handled by catch
//     // reject(); // this inside async will be handled by catch
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

// -----------------------------------------------------------------

// async function getData1() {
//   return await Promise.resolve("I made it!");
// }
// const data1 = getData1();
// console.log(data1);

// async function getData2() {
//   let data = await Promise.resolve("I made it!");
//   console.log(data);
// }
// getData2();

// -----------------------------------------------------------------
// console.log(Promise.resolve("I have resolved!")); // Promise {<fulfilled>: 'I have resolved!'}
// console.log(Promise.resolve("I have resolved!").then(console.log)); //I have resolved!

// -----------------------------------------------------------------

//https://github.com/lydiahallie/javascript-questions Q. 102
const myPromise = () => Promise.resolve("I have resolved!");

function firstFunction() {
  myPromise().then((res) => console.log("then: ", res));
  console.log("A");
}

async function secondFunction() {
  console.log("await: ", await myPromise());
  console.log("B");
}

firstFunction();
secondFunction();
