function setTimeoutPromise(delay) {
    function cb(resolve, reject) {
        setTimeout(resolve, delay)
    }
    return new Promise(cb);
}

let p = setTimeoutPromise(2000);
p.then(data => console.log('done'))