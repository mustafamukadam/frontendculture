// ??
console.log(new Point(2, 1).plus(new Point(4, 3)));

// -----1 -------------

1;
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

2;
const f1 = () => console.log("A");
const f2 = () => setTimeout(() => console.log("B"));
const f3 = () => console.log("C");

f1();
f2();
f3();

//  --- var let ------

function greet() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

greet();

//   ---- object ---

let a = { greeting: "Hey!" };
let b;

b = a;
a.greeting = "Hello";
console.log(b.greeting);

// ------ constructor function------

1;
function Person(name) {
  this.name = name;
}

const p1 = new Person("Albert");
const p2 = Person("Nikola");

console.log("1", p1.name);
console.log("2", p2.name);

2;
// ?
p1.greet(); // log - 'Hello'

// ---------- this ----------

const calc = {
  num: 10,
  double: function () {
    return this.num * 2;
  },
  triple: () => this.num * 3,
};

console.log(calc.double());
console.log(calc.triple());

//   ------ == vs === ------
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b); // t
console.log(a === b); // f
console.log(b === c); // f

// ----- closure

1;
sum(2)(3)(5);

2;
function foo() {
  for (var i = 0; i < 3; i++) {
    //  setTimeout(() => console.log(i), 0);
  }
}
foo();

// -------- Rest Spread ------
1;
function foo(...args) {
  console.log(typeof args);
}
foo(21);

2;
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
// console.log(sum(?))
// console.log(sum(...numbers)); // 6

3;
//accepts n number of parameters and returns sum
function sum(...args) {
  /*
  let sum=0;
  for(let i=0;i<args.length;i++){
    sum+=args[i]
  }
  return sum;
  */

  return args.reduce((acc, curr) => acc + curr);
}

sum(1, 2, 3);

// -------- destructuring ------
const o = { a: 42, b: true };
// ? const { a, b } = o; how to destruct

console.log(a);
console.log(b);

// ------------ Scope ----
var text = "outside";
function logIt() {
  console.log(text);
  var text = "inside";
}
logIt();
//undefined

// ------- uncategorized ------
function foo(data) {
  if (data === { age: 24 }) {
    console.log("A");
  } else if (data == { age: 24 }) {
    console.log("B");
  } else {
    console.log(`C`);
  }
}

foo({ age: 24 });

// ------

String.prototype.sayMyName = () => {
  return "My name is mustafa";
};

const str = "some text";

str.sayMyName();

// ---- async ----
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");

// ------
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter());
alert(counter());

alert(counter2());
alert(counter2());

// -----
function inBetween(a, b) {
  return (x) => x >= a && x <= b;
}

// is Array
Object.prototype.toString.call(a); // [object Array]