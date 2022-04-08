//1
function printValues1(obj) {
    for (let key in obj) {
        console.log(obj[key])
    }
}

//2
function printValues2(obj) {
    for (let value of Object.values(obj)) {
        console.log(value)
    }
}

//data
let o = {
    a: 'aa',
    b: 'bb'
}

let o2 = Object.create({ p: 'p' })

o2['a'] = 'aa';

printValues1(o2)
printValues2(o2)
