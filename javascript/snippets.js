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