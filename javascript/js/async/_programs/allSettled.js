function allSettled(promises){
    let result = new Array(promises.length)
    let completedPromises = 0
  
    return new Promise(resolve => {
      promises.forEach((promise, index) => {
        Promise.resolve(promise).then(value => {
          result[index] = {
            status: "fulfilled",
            value
          }
        }).catch(e => {
          result[index] = {
            status: "rejected",
            value: e
          }
        }).finally(() => {
            // finally will run for every promise in forEach, increment count each time
            // but only resolve(result) when all promises completed
          completedPromises++
          if(completedPromises === promises.length) resolve(result)
        })
      });
    })
  }
  
  
  const p0 = Promise.reject(3);
  const p1 = 42;
  const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('foo');
      }, 100);
  });
  
  let p = allSettled([p0, p1, p2])
  p.then((data)=>console.log(data))