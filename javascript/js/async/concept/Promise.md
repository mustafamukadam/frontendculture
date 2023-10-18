# 📌Promise Basics

create and utilize Promise
```js
let promise = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve(data)
    },1000)
})

promise.then((data) => log(data))
```

---
What-happens-when in Promise:
1. `new Promise()` creates a promise `p`
2. Whenever executor function implementation of Promise calls `resolve()`, wherever `p.then(cb)` exists, `cb` will be called (after current tick)
---
Promise in a sentence: https://poe.com/s/PtVQd1GlYhQqCc7Qwrm5

---

⭐️ 3 [ways](../_programs/3waysToReolvePromise.js) to resolve promise

---
promise chaining - every .then always return promise (even if we simply return 5, its considered resolved promise) BUT executor has to call either
resolve or reject otherwise promise will remain in **pending** state

```js
let p = new Promise(function (resolve, reject) {
  //   resolve(1);
  return 5;
}).then(function (result) {
  console.log(result);
});
console.log(p); // pending state, never settled
```

# 📌Promise methods/polyfills
## 1. promise.all
- `Promise.all()` is a method that takes an iterable of elements (usually Promises) as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error. 
⭐️ [source](https://www.greatfrontend.com/questions/javascript/promise-all)

- `Promise.all()` is frequently used when there are multiple concurrent API requests and we want to wait for all of them to have completed to continue with code execution, usually because we depend on data from both responses.

- `Promise.all()` The returned Promise contains an array of resolved values in the same order as the input if all of them are fulfilled. (GFE)

# 📌Links
⭐️ https://www.greatfrontend.com/questions/javascript/promise-all (nice summary in solution tab )
- 10 interview question answers on Promise.all - https://poe.com/s/eNOtTl0fnSf9YWYtihSL