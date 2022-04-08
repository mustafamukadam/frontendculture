function Ninja() {
    var totalFeints = 0; // private property
    this.getFeints = function () {
        return totalFeints;
    };
    this.feint = function () {
        totalFeints++;
    };
    // function fn() { } // found No way to access it using dot yet...
}

// Ninja.fn2 = () => 'fn2...' // this defines static method (yes, same as static in class)
var ninja1 = new Ninja();
var ninja2 = new Ninja();

ninja1.feint();
ninja1.feint();

// ninja2.feint();

console.log(ninja1.getFeints())
console.log(ninja2.getFeints())

// // Ninja -> nothing
// console.log(Ninja.getFeints)
// console.log(Ninja.feint)
// console.log(Ninja.fn)
// console.log(Ninja.totalFeints)

// console.log(Ninja.fn2)
// console.log(Ninja.fn2())

// // ninja1 -> both functions defined with this (but not var totalFeints)
// console.log(ninja1.getFeints)
// console.log(ninja1.feint)
// console.log(ninja1.totalFeints)

// // invoke
// console.log(ninja1.getFeints())
// ninja1.feint();
// console.log(ninja1.getFeints())