// //https://www.greatfrontend.com/questions/javascript/promise-all
function promiseAll(promises) { // iterable instead of promises
    
    return new Promise((resolve, reject) => {
        let unresolvedCount = promises.length
        if (!unresolvedCount) resolve([])
        let result = new Array(unresolvedCount)

        promises.forEach((promise, index)=>{
                Promise.resolve(promise).then(value=>{
                    result[index] = value
                    unresolvedCount--
                    if(unresolvedCount === 0) resolve(result)
                }).catch(reject)
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
p.then((data)=>console.log('end: ',data))

/*
----------------------------- Solution.  -----------------------------
*/

// forEach
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

// for await - bit incomplete
function promiseAll2(promises) {
    return new Promise((resolve, reject) => {
        if (!promises.length) resolve([])
        let result = []

        async function loopPromises() {
            for await (const value of promises) {
                    result.push(value)
                }
                console.log('1: ',)
                resolve(result)
        }
        loopPromises()
        console.log('2: ',result)
    })
}