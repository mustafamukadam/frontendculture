//Every JavaScript function is actually a Function object.
function foo() { }
console.log(foo.constructor === Function);
console.log(foo.__proto__);
console.log(foo.__proto__.constructor === Function);
console.log(foo.__proto__ === Function.prototype);
// console.log(Function.__proto__);
console.log(foo.prototype.constructor === foo)
console.log(new foo().__proto__.__proto__ === Object.prototype)

Function(); // creates new Function object, which is .... a function -
console.log("1", typeof new Function()); // function
console.log(new Function().constructor === Function); //true
console.log(new Function().__proto__ === Function.prototype); //true
console.log(Function.prototype.constructor === Function);

// console.log(Function().__proto__ === Function.prototype); //true

// let sum1 = new Function("a", "b", "return a + b");
// let sum2 = Function("a", "b", "return a + b"); //same result. Why?

// console.log(sum1(1, 2)); // 3
// console.log(sum2(1, 2)); // 3

//Arrow Functions
function Employee(name) {
  this.name = name;
}
Employee.prototype.getName = () => {
  return this.name;
};
const jason = new Employee("Jason");
// console.log(jason.getName()); // undefined
