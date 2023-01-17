// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures
// checkout other ways also to implement private variables (constructor)

/**
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures
* return object with public methods by calling method
*/
const counter = (function () {
    
    let privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment() {
        changeBy(1); // remember: 'this' here is {/* return object */} itself
    },
    
    decrement() {
        changeBy(-1);
        // privateCounter -= 1; // of course, this also works
      },
  
      value() {
        return privateCounter;
      },
    };

  })();
  
  console.log(counter.value()); // 0.
  
  counter.increment();
  counter.increment();
  console.log(counter.value()); // 2.
  
  counter.decrement();
  console.log(counter.value()); // 1.

  /**
   * Without IIFE - separate Lexical environment
   * return object with public methods by calling method
   */
   const makeCounter = function () {
    let privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment() {
        changeBy(1);
      },
  
      decrement() {
        changeBy(-1);
      },
  
      value() {
        return privateCounter;
      },
    };
  };
  
  const counter1 = makeCounter();
  const counter2 = makeCounter();
  
  console.log(counter1.value()); // 0.
  
  counter1.increment();
  counter1.increment();
  console.log(counter1.value()); // 2.
  
  counter1.decrement();
  console.log(counter1.value()); // 1.
  console.log(counter2.value()); // 0.
  
  
  /**
   * Counter object - https://javascript.info/closure
   * constructor function - create object
   */
   function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
  let counterInfo = new Counter();
  
  alert( counterInfo.up() ); // ?
  alert( counterInfo.up() ); // ?
  alert( counterInfo.down() ); // ?