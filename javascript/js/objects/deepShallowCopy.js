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

let o3 = Object.assign({ x: 'blue' }, o2);
console.log(o3);

console.log(o2.__proto__ === o)
console.log(o3.__proto__)

Object.defineProperty(o2, 'marks', {
    set(value) {
        if (value < 0) throw new Error('error!')
        marks = value;
    },
    get() {
        return marks;
    }
})

o2.marks = 10;
console.log(o2)
console.log(o2)
o2['marks'] = 12;
