//more features-
//https://codesandbox.io/s/setinterval-polyfill-forked-n7s80?file=/src/index.js
function customSetInterval(cb, interval) {
    if (typeof cb !== 'function') {
        throw new Error('error!');
    }
    return setTimeout(() => {
        cb()
        // Recurse
        customSetInterval(cb, interval)
    }, interval)
}

function resetCustomSetInterval(id) {
    clearTimeout(id)
}

function hello() {
    console.log('hello')
}

// let id = customSetInterval("hi", 10000)