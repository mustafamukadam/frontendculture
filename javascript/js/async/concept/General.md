# 📌 1. TidBits

- markdown supports js! write ```js

- `sequence().then(console.log)`
---
- `const tick = Date.now();`
- ```const log = (v) => console.log(`${v} - ${Date.now() - tick}ms`)```
---
- nice async method to create promise for use in examples - 
```js
const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
const p = promisify("a", 100)
// or better use fetch() with some sample data API !
```

- 🥝 If you want to convert a function to use promises you need to always return a promise from that function since you need access to a promise object to check if the promise was successful or not.

- 🥝 ⭐️ The best way to think of promises is to just think of resolve as the same as .then and reject as the same as .catch.

- 🥝 async functions always return a Promise object, regardless of whether they contain an await expression or not.

# 📌 Notes

- ❓ MDN ai (emphasis on order of 'execution' not order of values in resolved promises array) Remember, when using concurrent resolution, the order of execution is not guaranteed. If maintaining the order is important, you should use sequential resolution methods like for...of or Array.prototype.forEach. Also this-
(*) you can use the Array.prototype.map() method to create an array of promises and then use Promise.all() to resolve them concurrently. The resolved array values will maintain the original order of promises provided to the map() method.
But this - The order of resolved values in Promise.all() is not guaranteed because the order in which the promises are resolved is not guaranteed. If the order of the resolved values is important, you can use the Array.map() method to map the resolved values back to their original order based on an identifier or index.
Source: chatgpt 3. question - https://poe.com/s/EYpEUmqn5BTsFdF4tvRb
(not sure if this is correct, refer Promise.all polyfill - GFE)
✅ SOLVED - The returned Promise contains an array of resolved values in the same order as the input if all of them are fulfilled. (GFE)

https://jrsinclair.com/articles/2019/how-to-run-async-js-in-parallel-or-sequential/
The first thing to ask yourself is: “Do I want to run these functions in parallel, or in sequence?” If you know the answer to that question, then it’s easy to pick a pattern to make that happen:

- If you want to run than in parallel, then we use .map() to kick everything off, then Promise.all() to gather them back up again.
- If you want to run them sequentially, create a fake Promise to start then chain. Then call .reduce() to run each promise run in sequence.


## error handling

With promises, we have single catch() that will handle error anywhare in asynchronous code. If same code were callback based, we'd have to have separate error handler for every single one of asynchronous operations.
If error is thrown anywhere in code, its going to bypass all of the future then() callbacks and go straight to the catch() callback.

## await



# 📌 2. Main Concepts
- Callback
- Event loop
- Promise API
- Promise methods implementation
- async await
- Error Handling
- The for-await-of loop

# 📌 3. Links 🔗
asynchronous javascript:
https://ui.dev/async-javascript-from-callbacks-to-promises-to-async-await
https://www.youtube.com/watch?v=bfxglBVSNDI "async functions are called synchronously.."

Promise:
https://blog.webdevsimplified.com/2021-09/javascript-promises/
https://drive.google.com/file/d/1fI_UGuBCkBqlfy7-c-KCs8EHYnQzIwl6/view -> 3 Ways to Promise
⭐️ https://www.greatfrontend.com/questions/javascript/promise-all (nice summary in solution tab )
⭐️ https://jrsinclair.com/articles/2019/how-to-run-async-js-in-parallel-or-sequential/
https://bytefish.medium.com/list/code-chanllenge-0b76b6b40281

async:
advanced coding questions and answers in async javascript: https://poe.com/s/Miaq2VwZHF1kFfDu81g5

more:

# 📌 4. Scratchpad 📜



