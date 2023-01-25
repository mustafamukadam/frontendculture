// //https://www.greatfrontend.com/questions/javascript/promise-all
/*
----------------------------- Final.  -----------------------------
*/

// forEach using then
function promiseAll(promises) { // iterable instead of promises
    
    return new Promise((resolve, reject) => {
        let unresolvedCount = promises.length
        if (!unresolvedCount) resolve([])
        let result = new Array(unresolvedCount)

        promises.forEach((promise, index)=>{
            //non-Promise values need to be wrapped in Promise.resolve()
            //which allows us to use .then() and
            //don't have to differentiate between Promise vs non-Promise values and whether they need to be resolved.
                Promise.resolve(promise).then(value=>{
                    result[index] = value
                    unresolvedCount--
                    if(unresolvedCount === 0) resolve(result)
                })//If any of the promises reject,
                // will immediately call .catch with the error of the failed promise.
                .catch(reject)
            })
        })    
}

const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 100);
});

let p = promiseAll([p0, p1, p2])
p.then((data)=>console.log(data))

/*
----------------------------- More.  -----------------------------
*/

// forEach using await
function promiseAll1(promises) {
    return new Promise((resolve, reject)=>{
      let unresolvedCount = promises.length
      if(!unresolvedCount) resolve([])
      let results = new Array(unresolvedCount)

      promises.forEach(async (promise, index) => {
          try {
          let value = await promise
          results[index] = value
          unresolvedCount--

          if(unresolvedCount === 0) resolve(results)
          } catch(e) {
              reject(e)
          }
      });
      //run befor any loop cb promise resolves
  })
}

// for await
function promiseAll(iterables){
    return new Promise((resolve, reject) => {
        if(!iterables.length) resolve([])
        const result = []

        async function loopIterables(){
            try {
                for await (const iterable of iterables){
                    result.push(iterable)
                }
                resolve(result)
            } catch (error) {
                reject(error)
            }
        }
        loopIterables()
    })
}

/**
 * Expectation: function will take input [...promises] and return <Promise> that will resolve to [...values] ->
 * 
 * Story:
 * 1. return a Promise (which means this Promise should resolve to [...values])
 *    inside executor do this-
 * 2. iterate over each promise > resolve it > add to result[]
 * 3. resolve(result) //!
 *    
 * Issue:
 * during iteration - resolution code... will be added to next event loop tick (because, well, resolution which is async)
 * so there order is no guaranteed.
 * somehow keep track of order (by piggybacking index when async function goes to next tick) - (1)
 * somehow know when current iteration resolves it is last or not - (2)
 * (1) + (2) is possible because of closure
 * hit resolve and boom! - you have your [...values] in then or await in your returned <Promise>
 * 
 * * and yes ofcourse ... try catch
 */