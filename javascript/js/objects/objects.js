// literal
const dog = {};

// constructor
const cat = new Object();

// static method
const horse = Object.create({});

//freecodecamp Constructor
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
  // "this" inside the constructor always refers to the object being created
}

let blueBird = new Bird();

console.log("blueBird.prototype", blueBird.prototype); //undefined
console.log("blueBird.__proto__", blueBird.__proto__); //Bird{}
console.log(
  "Object.prototype.isPrototypeOf(Bird.prototype)",
  Object.prototype.isPrototypeOf(Bird.prototype)
); // true
console.log(
  "Object.getPrototypeOf(blueBird).__proto__.constructor === Object",
  Object.getPrototypeOf(blueBird).__proto__.constructor === Object
); // true

console.log(
  "Bird.prototype.isPrototypeOf(blueBird)",
  Bird.prototype.isPrototypeOf(blueBird)
);
// console.log(Object.getPrototypeOf(blueBird) === Bird.prototype);

// console.log(blueBird.constructor === Bird);
// console.log(blueBird.__proto__.constructor === Bird);
