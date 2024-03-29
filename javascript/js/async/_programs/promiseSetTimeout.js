function setTimeoutPromise(delay) {
    function cb(resolve, reject) {
        setTimeout(resolve, delay)
    }
    return new Promise(cb);
}

let p = setTimeoutPromise(2000);
p.then(data => console.log('done'))

// output
// https://javascript.info/promise-chaining
const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
        console.log("timerStart");
        resolve("success");
        console.log("timerEnd");
    }, 0);
    console.log(2);
});

promise.then((res) => {
    console.log(res);
});

console.log(4);

// output
const timer1 = setTimeout(() => {
    console.log('timer1');

    const promise1 = Promise.resolve().then(() => {
        console.log('promise1')
    })
}, 0)

const timer2 = setTimeout(() => {
    console.log('timer2')
}, 0)

// output
console.log('start');

const promise1 = Promise.resolve().then(() => {
    console.log('promise1');
    const timer2 = setTimeout(() => {
        console.log('timer2')
    }, 0)
});

const timer1 = setTimeout(() => {
    console.log('timer1')
    const promise2 = Promise.resolve().then(() => {
        console.log('promise2')
    })
}, 0)

console.log('end');