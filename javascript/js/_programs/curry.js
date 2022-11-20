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

function sumArgs(num) {
    let sum = 0
    if (num) {
        sum += num
        return function foo(num) {
            if (num) {
                sum += num
                return foo
            }
            return sum
        }
    }
    else return sum
}

// # Driver
// let result = sumArgs() // 0
let result = sumArgs(1)(2)(7)()
console.log('sumArgs: ', result);

//https://www.thatjs.dev/post/sum1234-n-frontend-javascript-interview-question-ae2fa85f8a37d6dbfa116fc128ddf834/
// 1 Problem here = sum() // fail
const sumAr = function (a) {
    return function (b) {
        if (b) {
            return sumAr(a + b);
        }
        return a;
    }
};