function curry(fn) {
    let ar = []
    return function curried(...args) {
        ar = ar.concat(args)
        if (ar.length < fn.length) {
            return curried
        }
        else return fn(...ar)
    }
}

function sum(a, b, c) {
    return a + b + c
}

// # Driver
// let curriedSum = curry(sum)
// let result = curriedSum(5)(6)(4)
// console.log('result: ', result);

/** 📌-----------------------------------📌  */
