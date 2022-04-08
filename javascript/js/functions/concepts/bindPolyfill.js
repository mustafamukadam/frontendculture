let o1 = { name: 'mustafa' }
let o2 = { name: 'john' }

let foo = function (a, b) { return `${this.name} args - ${a} , ${b}` }

// Incomplete solution - args to bind after this remaining
Function.prototype.myBind = function (context) {
    let self = this;
    return function (...args) {
        // console.log(Array.prototype.slice.call(arguments)) // ToDo: explore this thing
        return self.apply(context, args)
    }
}


console.log(foo.myBind(o1)(5, 7, 8, 9))