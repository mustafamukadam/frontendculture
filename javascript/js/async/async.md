# Promise

## promise chaining

promise chaining - every .then always return promise (even if we simply return 5, its considered resolved promise) BUT executor has to call either
resolve or reject otherwise promise will remain in **pending** state

```
let p = new Promise(function (resolve, reject) {
  //   resolve(1);
  return 5;
}).then(function (result) {
  console.log(result);
});
console.log(p); // pending state, never settled

```

We can add many handlers to 1 promise - but it's not chaining. In practice we rarely need multiple handlers for one promise. Chaining is used much more often.

# async/await

- async method always returns Promise

```
async function getData() {
  return await Promise.resolve("I made it!");
}
const data = getData();
console.log(data); // Promise {<pending>}
```

But this logs value

```
async function getData() {
  let data = await Promise.resolve("I made it!");
  console.log(data); // I made it!
}
getData();
```

---

⭐️ If I uncomment await: line then "B" is printed at last. I am concluding that async function takes all of its code to last in queue, not sure
check Q. 102 at https://github.com/lydiahallie/javascript-questions

```
const myPromise = () => Promise.resolve("I have resolved!");

function firstFunction() {
myPromise().then((res) => console.log("then: ", res));
console.log("A");
}

async function secondFunction() {
// console.log("await: ", await myPromise()); // await:
console.log("B");
}

firstFunction();
secondFunction();
```

## error handling

With promises, we have single catch() that will handle error anywhare in asynchronous code. If same code were callback based, we'd have to have separate error handler for every single one of asynchronous operations.
If error is thrown anywhere in code, its going to bypass all of the future then() callbacks and go straight to the catch() callback.
