// Function.prototype.defer = function(ms){
//     let self = this
//     return function(...args){
//         setTimeout(() => {
//             self(...args)
//         }, ms);
//         // console.log('this',self)
//     }
// }


// function f(a, b) {
//     alert( a + b );
//   }
  
// f.defer(3000)(1, 2);// shows 3 after 1 second

class Counter {
    constructor() {
      if (instance) {
        throw new Error("You can only create one instance!");
      }
      this.counter = counter;
      instance = this;
    }
  
    getCount() {
      return this.counter;
    }
  
    increment() {
      return ++this.counter;
    }
  
    decrement() {
      return --this.counter;
    }
  }

  const singletonCounter = new Counter();
  console.log(singletonCounter)