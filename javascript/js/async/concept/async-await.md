⭐️⭐️ https://ui.dev/async-javascript-from-callbacks-to-promises-to-async-await
https://youtu.be/vn3tm0quoqE?t=612
https://jrsinclair.com/articles/2019/how-to-run-async-js-in-parallel-or-sequential/
- you need to be careful when using async await in a map or forEach loop, because it won't actually pause the function in this context.
It will run all promises concurrently
```js
const smoothie = fruits.map(async v=> {
  const emoji = await getFruit(v)
  console.log(emoji)
  return emoji
})
```

- if you want to run a loop and have every iteration in it await a promise, u need to use traditional for-loop
- you want to run in sequence when resolved values depend on each other (me)

await causes a new event loop tick (see image) https://youtu.be/pLMyh9wosBk?t=8490

- In the context of the event loop, when an await keyword is encountered in an async function, it pauses the execution of the function and allows the event loop to continue processing other tasks. The await keyword can only be used inside an async function.

When an await expression is encountered, it returns a promise. The event loop then queues the resolution of that promise as a microtask. Microtasks have higher priority than regular tasks (macrotasks) in the event loop, which means they are executed before the next rendering or user input event.

Here's an example to illustrate the queuing of callbacks in Promise-based code compared to async/await-based code:
(see conversation in MDN ai)

- Let's use await. As in, "Hey engine. This function is asynchronous and returns a promise. Instead of continuing on like you typically do, go ahead and 'await' the eventual value of the promise and return it before continuing".
