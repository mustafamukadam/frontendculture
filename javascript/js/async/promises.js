function asyncResolve() {
    function cb(resolve, reject) {
        resolve('success')
    }
    return new Promise(cb);
}

function asyncReject() {
    function cb(resolve, reject) {
        reject('fail!')
    }
    return new Promise(cb);
}

let p1 = asyncResolve();
let p2 = asyncReject();

p1.then((data) => console.log(data), (error) => console.log(error))
p2.then((data) => console.log(data), (error) => console.log(error))