let o = {
    a: 1,
    b: {
        c: 2
    },
    d: 3
}

let o2 = Object.create(o);
o2.x = 'purple'
o2.y = 'yellow'

// This will also print key of objects (o) prototype
// function fooWithProto(o) {
//     for (let k in o) {
//         if (typeof o[k] != 'object') console.log(o[k])
//         else foo(o[k])
//     }
// }


// function foo(obj) {
//     for (const [k, v] of Object.entries(obj)) {
//         if (typeof v != 'object') console.log(k)
//         else foo(v);
//     }
// }


console.log(o2)
console.log(o2.__proto__)
console.log(Object.entries(o2))

// foo(o2);
// fooWithProto(o2);
// foo(o2);

function keyValuePrinter(obj) {
    for (let key in obj) {
        if (typeof obj[key] !== 'object')
            console.log(key, obj[key])
        else
            keyValuePrinter(obj[key]);
    }
}

keyValuePrinter(o2)