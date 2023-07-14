let instance;
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