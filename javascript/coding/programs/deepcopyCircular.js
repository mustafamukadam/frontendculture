//"How would you implement a deep copy of an object in JavaScript, while handling circular references?"
/**
 * One way to implement a deep copy of an object in JavaScript while handling circular references is to use a technique called "recursive traversal." 
 * This involves creating a new object and iterating over the properties of the original object, recursively copying any nested objects. 
 * To handle circular references, we can use a "visited" object to keep track of objects that have already been copied.
 */
 function deepCopy(obj) {
    let visited = new WeakMap();
    let copy = Object.create(Object.getPrototypeOf(obj));
    visited.set(obj, copy);
    Object.getOwnPropertyNames(obj).forEach(function(key) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        if (visited.has(obj[key])) {
          copy[key] = visited.get(obj[key]);
        } else {
          copy[key] = deepCopy(obj[key]);
        }
      } else {
        copy[key] = obj[key];
      }
    });
    return copy;
  }
/*
In this example, deepCopy function creates a new object and uses Object.create() method to set its prototype. 
It uses Object.getOwnPropertyNames() method to iterate over the properties of the original object.
 If the property is an object, it checks if the object has already been copied using visited.has(obj[key]). 
 If it has, it assigns the copied object to the new object, otherwise it recursively calls the deepCopy function to copy the nested object. 
 This process will continue until all properties of the original object are copied.
*/  