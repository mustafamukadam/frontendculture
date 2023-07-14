let obj = { me: 'I am useless object' };

function foo(a, b) {
    return [a, b];
};

foo1 = foo.bind(obj, 5);
console.log(foo1(6));

/**
 * Understanding: bind()
 * input -> context and arguments
 * return -> function with this set to context (and also bind initial arguments if passed any)
 */

Function.prototype.myBind = function (context, ...args) {
    let fn = this;
    return function () {
        return fn.apply(context, args)
    }
}

foo = foo.myBind(obj, 5);
console.log(foo2(6)); // this should be [5,6]
