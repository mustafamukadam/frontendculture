Asynchronous code involve function that we call **now** -
```js
loadSomething()
```
but there is something inside it (like setTimeout) that runs **later**.

So, we pass a callback to that async function call that is executed later. And by later we mean after all code below the function call is done executing. Below is basically the gist of asynchrounity -
```js
loadSomething(callback){
    // do asynchronous action and call callback after the current event loop
    setTimeout(()=>{
        callback(data)
    }, 1000)
}

loadSomething(cb) // cb is a function that 'prints' value generated inside loadSomething
```