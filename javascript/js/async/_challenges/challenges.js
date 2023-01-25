//https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/async-challenges.md#home

// Q. Create a function which receives a function as argument and executes it after 2 seconds
// function execute(fn, delay){
//     setTimeout(fn, delay);
// }

// function display(){console.log('hey there!')}

// execute(display, 3000)

//? -----------------------------------------------------------------
// Q. Print numbers from 1 to 10 with delay of 1 second between each value being printed

// for(let i = 1; i < 11; i++){
//     setTimeout(() => {
//         console.log('>',i)
//     }, i*2000);
// }

//? -----------------------------------------------------------------
//Q. Print numbers from 1 to 10 with delay of 1 second between each value being printed using setInterval
// let i = 1
// let id = setInterval(() => {
//     console.log('>',i++)
//     if(i > 10) clearTimeout(id)
// }, 1000);

//? -----------------------------------------------------------------
//Q. Print numbers from 10 to 1 with delay of 1 second between each value being printed using setTimeout using pre ES6 features only
// for(var i = 10; i >0; i--){
//     (function(i){
//         setTimeout(console.log, (11-i)*1000, i)
//     })(i)    
// }

//? -----------------------------------------------------------------
//Q. Write a utility which prints numbers starting from an initial value and increment in steps which can be started and stopped by the user, any number of times

// function stopwatchUtility(initial = 0, delay = 1000, step = 1) {
//     let id;
//     function startTimer() {
//         id = setInterval(() => {
//             console.log('>', initial)
//             initial += step
//         }, delay)
//     }

//     return {
//         start(){startTimer()},
//         stop(){clearInterval(id)}
//     }
// }

// let stopwatch = stopwatchUtility(10, 1000, 5);
// stopwatch.start()
// setTimeout(() => {
//     stopwatch.stop()
// }, 5000);


//? -----------------------------------------------------------------
//Q. Execute an array of asynchronous functions one after the other in sequence using callbacks
//https://github.com/sadanandpai/javascript-code-challenges/blob/main/challenges/async-challenges.md#q-execute-an-array-of-asynchronous-functions-one-after-the-other-in-sequence-using-callbacks
/**
 * The asynchronous function can be simulated using setTimeout which executes the callback
 * The array of functions execution can be managed by having a function which takes care of execution of all the async functions
 * Asynchronous functions need not be aware of the function to be executed and will take a callback as argument and execute it after completion
 */
// ToDo

//? -----------------------------------------------------------------
//Q. Execute the given list of asynchronous functions in parallel and return the results as an array to the callback
// ToDo

//? -----------------------------------------------------------------
//Q. Execute 3 asynchronous functions one after the other in sequence using promise chaining
// ToDo

//? -----------------------------------------------------------------
//Q. Execute 3 asynchronous functions one after the other in sequence using async await
// ToDo all after this....