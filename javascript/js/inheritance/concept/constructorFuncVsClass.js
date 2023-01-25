// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#constructors
//? A constructor function
function Box(value) {
    this.value = value;
}

// Properties all boxes created from the Box() constructor will have
Box.prototype.getValue = function () {
    return this.value;
};

//? The above constructor function can be rewritten in classes as:  
class Box2 {
    constructor(value) {
        this.value = value;
    }

    // Methods are created on Box.prototype
    getValue() {
        return this.value;
    }
}

const boxes = [
    new Box(1),
    new Box2(2),
];

console.log('',boxes)