//1. Animal
function Animal(voice) {
  this.voice = voice || "grunt";
}
Animal.prototype.speak = function () {
  console.log(this.voice);
};

//2. Cat
function Cat(name, color) {
  Animal.call(this, "Meow");
  this.name = name;
  this.color = color;
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

//3. RobotCat
function RobotCat(food, name, color) {
  Cat.call(this, name, color);
  this.food = food;
}
RobotCat.prototype = Object.create(Cat.prototype);
RobotCat.prototype.constructor = RobotCat;

let robotic = new RobotCat("electricity", "Robocat", "metallic");
console.log(robotic.speak()); // "Meow"

Animal.prototype.laterMethod = function () {
  console.log("later method...");
};

let laterCat = new Cat("l1", "l2", "l3");
laterCat.laterMethod(); //later method ...

// let fluffy = new Cat("Fluffy", "White");
