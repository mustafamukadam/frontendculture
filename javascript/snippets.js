//
console.log([] instanceof Array)

//
function foo() {
    function fn() { }
    var fn = 5;
    console.log(fn)
}
foo();

// Loop over object
let o = {
    a: 1,
    b: {
        c: 2
    }
}

for (let k of Object.keys(o)) {
    console.log(k)
}

//
let p = new Promise(function (resolve, reject) {
    //   resolve(1);
    return 5;
}).then(function (result) {
    console.log(result); // never executed
});
console.log(p); // pending state, never settled

// Promise.all
function promiseAll(iterables){
    return new Promise((resolve, reject) => {
        let count = iterables.length
        if(!count) resolve([])
        const result = new Array(count)

        iterables.forEach(async (iterable, index) => {
            try {
                let value = await iterable
                count--
                result[index] = value
                if(count === 0) resolve(result)
            } catch (error) {
                reject(error)
            }
        });
    })
}

/** 📌-----------------------------------📌  */

// Function.prototype.defer = function(ms){
//     let self = this
//     return function(...args){
//         setTimeout(() => {
//             self(...args)
//         }, ms);
//         // console.log('this',self)
//     }
// }


// function f(a, b) {
//     alert( a + b );
//   }
  
// f.defer(3000)(1, 2);// shows 3 after 1 second

// Observer pattern 
class Observable{
    constructor(){
        this.observers = []
    }

    subscribe(fn){
        this.observers.push(fn)
    }
    unSubscribe(fn){
        this.observers = this.observers.filter(observer => observer !== fn)
    }
    notify(data){
        this.observers.forEach(observer=>observer(data))
    }
}

//? ------------------------------------------------------
async function display(delay){
    let value = await new Promise((res, rej) => {
      setTimeout(() => res("hello"), delay)
    })
    console.log('here....', value)
    return value
  }
  
  const p = display(3000)
  p.then(console.log)

  //? -----------------------------------------------------------------
  //promise all practise - successful - https://www.greatfrontend.com/questions/javascript/promise-all
  function promiseAll(promises){

    return new Promise((resolve, reject) => {
      if(!promises.length) resolve([])
  
      let unresolvedCount = promises.length
      let result = new Array(unresolvedCount)
  
      promises.forEach((promise, index) => {
        Promise.resolve(promise).then(value => {
          result[index] = value
          unresolvedCount--
          if(unresolvedCount === 0) resolve(result)
        }).catch(e => reject(e))
      });
    })
  }

  //? -----------------------------------------------------------------
  //promise all practise again with async - successful
  // https://www.greatfrontend.com/questions/javascript/promise-all
  function promiseAll(promises) {

    return new Promise((resolve, reject) => {
      if (!promises.length) resolve([])
  
      let unresolvedCount = promises.length
      let result = new Array(unresolvedCount)
  
      promises.forEach(async (promise, index) => {
        try {
          let value = await promise
          result[index] = value
          unresolvedCount--
          if (unresolvedCount === 0) resolve(result)
        }
        catch (e) {
          reject(e)
        }
      });
    })
  }

  //? -----------------------------------------------------------------
  class A {
    fooBind = this.foo.bind(this)
    constructor(cb){
        this.state = "mustafa"
        cb(this.fooBind)
        // cb(this.foo)
    }

    foo(data){
        console.log('this: ',this)
    }
}

let a = new A((res)=>res("hi"))
console.log('a: ',a)


// isPrime
function isPrime(num) {
  if(num <= 1) return false
  if(num == 2) return true

  if(num%2 == 0) return false
  for(let i = 2; i <= Math.sqrt(num); i+=2){
    if(num%i === 0) return false
  }
  return true
}