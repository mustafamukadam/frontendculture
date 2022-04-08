//1
function printKeys1(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            console.log(key)
    }
}

//2
function printKeys2(obj) {
    for (let key of Object.keys(obj)) {
        // if (obj.hasOwnProperty(key)) /propbably not require because # below
        console.log(key)
    }
}
//data
let o = {
    a: 'aa',
    b: 'bb'
}

let o2 = Object.create({ p: 'p' })

o2['a'] = 'aa';

printKeys1(o2)
printKeys2(o2)

//#
console.log(Object.keys(o2))